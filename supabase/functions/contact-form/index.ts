import { createClient } from 'npm:@supabase/supabase-js@2.39.7';
import { z } from 'npm:zod@3.22.4';
import { SmtpClient } from 'npm:smtp@0.1.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS = 5;

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(1000),
});

async function sendEmail(data: z.infer<typeof contactSchema>) {
  const smtp = new SmtpClient();
  
  await smtp.connectTLS({
    hostname: Deno.env.get('SMTP_HOST') || '',
    port: parseInt(Deno.env.get('SMTP_PORT') || '587'),
    username: Deno.env.get('SMTP_USER') || '',
    password: Deno.env.get('SMTP_PASS') || '',
  });

  await smtp.send({
    from: Deno.env.get('SMTP_FROM') || '',
    to: 'ironknight.122623@gmail.com',
    subject: 'New Contact Form Submission',
    content: `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      Message: ${data.message}
    `,
  });

  await smtp.close();
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    const now = Date.now();
    const userRequests = rateLimit.get(ip) || 0;
    
    if (userRequests >= MAX_REQUESTS) {
      return new Response(
        JSON.stringify({ error: 'Too many requests' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    rateLimit.set(ip, userRequests + 1);
    setTimeout(() => rateLimit.delete(ip), RATE_LIMIT_WINDOW);

    const data = await req.json();
    const validatedData = contactSchema.parse(data);

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_ANON_KEY') || '',
      { db: { schema: 'public' } }
    );

    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ ...validatedData, ip_address: ip }]);

    if (error) throw error;

    await sendEmail(validatedData);

    return new Response(
      JSON.stringify({ message: 'Contact form submitted successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    
    return new Response(
      JSON.stringify({ error: 'Failed to process contact form' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
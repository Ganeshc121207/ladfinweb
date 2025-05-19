import React from 'react';
import { Users, Briefcase, Calendar, Gavel } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  icon: React.ReactNode;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, icon, description }) => {
  return (
    <div className="bg-secondary p-8 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white text-center mb-2">{name}</h3>
      <p className="text-primary font-semibold text-center mb-4">{role}</p>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Gurugale",
      role: "Leader",
      icon: <Users className="w-8 h-8 text-primary" />,
      description: "Visionary leader guiding LADDU towards innovation and excellence in financial technology."
     
    },
    {
      name: "Yamasamrat",
      role: "Finance Minister",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      description: "Expert in financial strategy and planning, ensuring sustainable growth and profitability."
    },
    {
      name: "Hitech Hritheeku",
      role: "Event Manager",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      description: "Creative mind behind our events and community engagement initiatives."
    },
    {
      name: "Hitech Hanseeka",
      role: "Judiciary Minister",
      icon: <Gavel className="w-8 h-8 text-primary" />,
      description: "Ensures compliance and maintains ethical standards across all operations."
    }
  ];

  return (
    <div className="bg-secondary-dark pt-28">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Team</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the visionaries behind LADDU who are working to revolutionize financial services
            and make them accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-secondary rounded-xl p-8 border border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <p className="text-gray-400 text-center text-lg">
            At LADDU, we're committed to democratizing financial services and making them accessible
            to everyone. Through innovation and technology, we're building a future where financial
            freedom is not just a dream but a reality for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
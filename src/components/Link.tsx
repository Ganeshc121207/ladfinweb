import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If it's an anchor link, scroll to the element
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100, // Offset for navbar
          behavior: 'smooth'
        });
      }
    } else {
      // For external links, we would handle routing here
      // For now, just navigate normally
      window.location.href = href;
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};
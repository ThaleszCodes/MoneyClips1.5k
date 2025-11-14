import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-red-900/30 text-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-gray-500">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MoneyClips. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
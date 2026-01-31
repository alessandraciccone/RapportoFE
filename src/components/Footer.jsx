const Footer = () => {
  return (
    <footer className="w-full mt-10 py-4 bg-gray-300 border-t border-gray-300 text-center text-lg text-gray-700">
      <p className="font-semibold">Rapporto di intervento – RapportoPro</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;

const WelcomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start px-6 py-10 text-gray-100">
      {/* H1 con logo o testo */}
      <h1 className="text-4xl font-bold w-full text-center text-black mb-8">
        Rapporto Pro ✔️
      </h1>

      {/* Sottotitolo */}
      <h2 className="text-2xl font-bold text-center text-blue-900  mb-6">
        La gestione dei rapporti di intervento, semplice e veloce
      </h2>

      {/* Testo descrittivo */}
      <p className="max-w-2xl text-center font-bold text-black leading-relaxed mb-10">
        <strong>Rapporto Pro</strong> è la piattaforma pensata per liberi
        professionisti e tecnici che vogliono organizzare in modo chiaro e
        professionale il proprio lavoro. Puoi registrare facilmente tutte le{" "}
        <strong>ragioni sociali</strong> per cui operi e gestire i tuoi{" "}
        <strong>rapporti di intervento</strong> in un unico spazio.
      </p>

      {/* Sezioni funzionalità */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl w-full">
        <div className="bg-gray-800/40 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-medium mb-3">
            📁 Registra le Ragioni Sociali
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Inserisci e gestisci tutte le aziende per cui lavori. Ogni ragione
            sociale viene salvata con i suoi dati, così puoi selezionarla
            rapidamente quando compili un nuovo rapporto.
          </p>
        </div>

        <div className="bg-gray-800/40 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-medium mb-3">
            📝 Compila Rapporti in Form
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Compila il rapporto direttamente online tramite un form intuitivo:
            descrizione intervento, materiali usati, orari, firma e molto altro.
          </p>
        </div>

        <div className="bg-gray-800/40 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-medium mb-3">
            📤 Carica File (JPEG, PNG, PDF)
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Se preferisci, puoi caricare rapporti già compilati in formato
            <strong> JPEG, PNG o PDF</strong>. Tutti i file vengono archiviati
            in modo sicuro e sempre disponibili.
          </p>
        </div>

        <div className="bg-gray-800/40 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-medium mb-3">📚 Archivio Ordinato</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Ogni intervento viene salvato e organizzato automaticamente. Puoi
            filtrare, cercare e scaricare i rapporti quando vuoi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

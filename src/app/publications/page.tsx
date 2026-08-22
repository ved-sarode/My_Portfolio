export default function Publications() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 flex flex-col gap-16 relative z-10">
      {/* Page Header */}
      <section className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="font-headline font-semibold text-4xl md:text-5xl text-on-surface">Publications & Presentations</h1>
      </section>

      {/* Publications Grid */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-headline font-semibold text-2xl text-on-surface">Publications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Pub 4 */}
          <div className="glass-card rounded-2xl p-8 flex flex-col aspect-square group cursor-pointer justify-between">
            <h3 className="font-headline font-semibold text-xl text-on-surface leading-tight mt-2">
              Molecular simulation reveals how the host thromboinflammatory C-type lectin receptor CLEC2 interacts with the receptor-binding domain of SARS-CoV-2
            </h3>

            <div className="flex justify-between items-end mt-auto gap-4">
              <div className="text-sm text-on-surface-variant font-medium leading-snug">
                Nature Scientific Reports
              </div>
              <span className="bg-background shadow-neo-raised text-primary text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                2026
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-outline-variant/30">
              <a href="https://doi.org/10.1038/s41598-026-67048-1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-tertiary transition-colors">
                DOI Link <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>open_in_new</span>
              </a>
            </div>
          </div>
          {/* Pub 1 */}
          <div className="glass-card rounded-2xl p-8 flex flex-col aspect-square group cursor-pointer justify-between">
            <h3 className="font-headline font-semibold text-xl text-on-surface leading-tight mt-2">
              Structural basis for substrate recognition by the pain-associated neuronal polyamine transporter SLC45A4
            </h3>

            <div className="flex justify-between items-end mt-auto gap-4">
              <div className="text-sm text-on-surface-variant font-medium leading-snug">
                International Journal of Biological Macromolecules
              </div>
              <span className="bg-background shadow-neo-raised text-primary text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                2026
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-outline-variant/30">
              <a href="https://doi.org/10.1016/j.ijbiomac.2026.153275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-tertiary transition-colors">
                DOI Link <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>open_in_new</span>
              </a>
            </div>
          </div>

          {/* Pub 2 */}
          <div className="glass-card rounded-2xl p-8 flex flex-col aspect-square group cursor-pointer justify-between">
            <h3 className="font-headline font-semibold text-xl text-on-surface leading-tight mt-2">
              Raman Spectroscopy for Microplastic Research
            </h3>

            <div className="flex justify-between items-end mt-auto gap-4">
              <div className="text-sm text-on-surface-variant font-medium leading-snug">
                Vibrational Spectroscopy for Biopolymer Characterization (Springer)
              </div>
              <span className="bg-background shadow-neo-raised text-primary text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                2026
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-outline-variant/30">
              <a href="https://doi.org/10.1007/978-3-032-15306-7_8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-tertiary transition-colors">
                DOI Link <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>open_in_new</span>
              </a>
            </div>
          </div>

          {/* Pub 3 */}
          <div className="glass-card rounded-2xl p-8 flex flex-col aspect-square group cursor-pointer justify-between">
            <h3 className="font-headline font-semibold text-xl text-on-surface leading-tight mt-2">
              Raman Spectroscopy for Bioplastic Research
            </h3>

            <div className="flex justify-between items-end mt-auto gap-4">
              <div className="text-sm text-on-surface-variant font-medium leading-snug">
                Vibrational Spectroscopy for Biopolymer Characterization (Springer)
              </div>
              <span className="bg-background shadow-neo-raised text-primary text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                2026
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-outline-variant/30">
              <a href="https://doi.org/10.1007/978-3-032-15306-7_6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-tertiary transition-colors">
                DOI Link <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations List Section */}
      <section className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="font-headline font-semibold text-2xl text-on-surface">Conference Presentations</h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Presentation 1 */}
          <div className="bg-background shadow-neo-raised rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start hover:bg-surface-bright/20 transition-colors duration-300">
            <div className="flex-grow flex flex-col gap-2">
              <h4 className="font-headline font-semibold text-lg text-on-surface">
                Structural basis for substrate recognition by the pain-associated neuronal polyamine transporter SLC45A4
              </h4>
              <div className="text-sm text-on-surface-variant">
                <strong>Event:</strong> 3rd International Colloquium on Bioinformatics Learning, Education and Training (iCOBLET 2025)
              </div>
              <div className="text-sm text-on-surface-variant">
                <strong>Location & Date:</strong> Manipal, Karnataka — 12–13 Dec 2025
              </div>
              <div className="flex flex-wrap gap-2 mt-2 items-center">
                <span className="bg-background shadow-neo-pressed text-primary font-bold text-xs px-3 py-1 rounded-lg uppercase tracking-wide">Oral Presentation</span>
                <span className="text-tertiary font-bold text-sm">🏆 Awarded Best Oral Presentation</span>
              </div>
            </div>
          </div>

          {/* Presentation 2 */}
          <div className="bg-background shadow-neo-raised rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start hover:bg-surface-bright/20 transition-colors duration-300">
            <div className="flex-grow flex flex-col gap-2">
              <h4 className="font-headline font-semibold text-lg text-on-surface">
                Structural basis for substrate recognition by the pain-associated neuronal polyamine transporter SLC45A4
              </h4>
              <div className="text-sm text-on-surface-variant">
                <strong>Event:</strong> 11th Conference of the Society for Mitochondrial Research and Medicine (SMRM)
              </div>
              <div className="text-sm text-on-surface-variant">
                <strong>Location & Date:</strong> Manipal, Karnataka — 9–11 Oct 2025
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-background shadow-neo-pressed text-secondary text-xs px-3 py-1 rounded-lg uppercase tracking-wide font-bold">Poster Presentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

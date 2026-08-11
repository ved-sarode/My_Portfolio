export default function Experience() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 flex flex-col gap-16 items-start">
      {/* Deep Background Visualization */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply bg-cover bg-center" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLuiCCUVp03Pjwo9S_jH9GLt_iU9A5i8XNkev02DLwcBy1_LjkudkSL2M02mmF5qW6ITaqfaVy4CPoloOhSMO_XMdWXHpYQLCkfHqBXLYdRZ9Jcnlc1nYX5q45wPh63tjbsnQr-mo6Zwn1Q4DUa31GUg3QAvD0B_INqDb6mMOR6FlYMTVw5rPUkeIC3ZdX80Sb2Z6nDIXYFXW2tjOMm1dSnEsq3gzhrvkaCZEZSB9nd9jk8wYoPm8BBP_uY')" }}
      ></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-background/40 via-background/80 to-background"></div>

      {/* Header Area */}
      <div className="w-full text-left relative z-10">
        <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface mb-6 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-primary via-tertiary to-on-surface">Experience & Education</h1>
      </div>

      {/* Education Section */}
      <section className="w-full relative z-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">school</span>
          <h2 className="text-3xl font-black text-on-surface uppercase tracking-wider">Education</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Master's Entry */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full group cursor-pointer border border-transparent hover:border-tertiary/10">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-black text-2xl text-on-surface font-headline leading-tight">M.Sc. Bioinformatics</h3>
                  </div>
                  <div className="flex items-center gap-2 text-secondary text-sm font-bold tracking-wide">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>account_balance</span>
                    <span className="uppercase">Manipal School of Life Sciences, MAHE, Karnataka</span>
                  </div>
                </div>
                <span className="inline-block bg-surface-variant text-on-surface text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md self-start transition-colors group-hover:bg-tertiary group-hover:text-white">2024 – 2026</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-sm font-bold bg-tertiary-fixed/50 text-tertiary border border-tertiary/20 px-3 py-1.5 rounded-lg transition-colors group-hover:border-tertiary/40">CGPA: 9.31</span>
              <span className="text-sm font-bold bg-tertiary-fixed/50 text-tertiary border border-tertiary/20 px-3 py-1.5 rounded-lg text-left transition-colors group-hover:border-tertiary/40">
                Project: Development of a Biophysics-Informed AI Tool for Predicting Stability Effects of Mutations in Membrane Proteins
              </span>
            </div>
          </div>

          {/* BSc Entry */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full group cursor-pointer border border-transparent hover:border-tertiary/10">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-black text-2xl text-on-surface font-headline leading-tight">B.Sc. Biotechnology</h3>
                  </div>
                  <div className="flex items-center gap-2 text-secondary text-sm font-bold tracking-wide">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>account_balance</span>
                    <span className="uppercase">Fergusson College, Pune, Maharashtra</span>
                  </div>
                </div>
                <span className="inline-block bg-surface-variant text-on-surface text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md self-start transition-colors group-hover:bg-tertiary group-hover:text-white">2021 – 2024</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-sm font-bold bg-tertiary-fixed/50 text-tertiary border border-tertiary/20 px-3 py-1.5 rounded-lg transition-colors group-hover:border-tertiary/40">CGPA: 8.35</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="w-full pb-20 relative z-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="material-symbols-outlined text-tertiary text-3xl">science</span>
          <h2 className="text-3xl font-black text-on-surface uppercase tracking-wider">Research Experience</h2>
        </div>
        
        <div className="flex flex-col gap-8 w-full">
          {/* Project 1 */}
          <div className="glass-card rounded-3xl p-8 border border-transparent hover:border-tertiary/10 w-full group cursor-pointer">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-black text-2xl text-on-surface font-headline leading-tight">Membrane Protein Stability Prediction (Final Project)</h3>
                </div>
                <div className="flex items-center gap-2 text-secondary text-sm font-bold tracking-wide">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>domain</span>
                  <span className="uppercase">Manipal School of Life Sciences | Dr. Budheswar Dehury</span>
                </div>
              </div>
              <span className="inline-block bg-surface-variant text-on-surface text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md self-start transition-colors group-hover:bg-tertiary group-hover:text-white">Jan – Jun 2026</span>
            </div>
            <ul className="text-on-surface-variant text-base font-medium leading-relaxed space-y-3 mb-6 list-disc pl-6 marker:text-outline group-hover:marker:text-tertiary transition-colors">
              <li>Curated an experimental stability dataset for membrane proteins and engineered a structural feature matrix (H5py) combining sequence and structural descriptors extracted via MDAnalysis, RING4, and FreeSASA.</li>
              <li>Fine-tuned and trained the ESM2 protein language model (PyTorch) as the sequence-based backbone of a proof-of-concept framework for predicting mutation induced ΔΔG in membrane proteins.</li>
              <li>Established feasibility of the framework as a foundation for further PhD stage work incorporating graph neural networks (GNNs) and an expanded structural feature set.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="glass-card rounded-3xl p-8 border border-transparent hover:border-tertiary/10 w-full group cursor-pointer">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-black text-2xl text-on-surface font-headline leading-tight">SLC45A4 Structural & Simulation Study (Mini Project)</h3>
                </div>
                <div className="flex items-center gap-2 text-secondary text-sm font-bold tracking-wide">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>business_center</span>
                  <span className="uppercase">Manipal School of Life Sciences | Dr. Budheswar Dehury</span>
                </div>
              </div>
              <span className="inline-block bg-surface-variant text-on-surface text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md self-start transition-colors group-hover:bg-tertiary group-hover:text-white">Aug 2025 – Jan 2026</span>
            </div>
            <ul className="text-on-surface-variant text-base font-medium leading-relaxed space-y-3 list-disc pl-6 marker:text-outline group-hover:marker:text-tertiary transition-colors">
              <li>Investigated the binding of SLC45A4, a pain associated neuronal polyamine transporter, with its three known substrates to identify residues critical for substrate recognition and to characterize the binding mechanism.</li>
              <li>Performed molecular dynamics simulation analysis, formal data analysis, and visualization, and jointly led the manuscript as first author.</li>
            </ul>
          </div>
          
          {/* Project 3 */}
          <div className="glass-card rounded-3xl p-8 border border-transparent hover:border-tertiary/10 w-full group cursor-pointer">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-black text-2xl text-on-surface font-headline leading-tight">Immunomodulatory Effects Study</h3>
                </div>
                <div className="flex items-center gap-2 text-secondary text-sm font-bold tracking-wide">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>business_center</span>
                  <span className="uppercase">Fergusson College | Dr. Divya N Prakash</span>
                </div>
              </div>
              <span className="inline-block bg-surface-variant text-on-surface text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md self-start transition-colors group-hover:bg-tertiary group-hover:text-white">May – Jun 2024</span>
            </div>
            <ul className="text-on-surface-variant text-base font-medium leading-relaxed space-y-3 list-disc pl-6 marker:text-outline group-hover:marker:text-tertiary transition-colors">
              <li>Studied the immunomodulatory effect of prebiotic and probiotic conditioned media on human macrophages in vitro during the final year of B.Sc.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

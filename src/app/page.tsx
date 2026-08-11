export default function Home() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col gap-16 relative">
      {/* Hero Section */}
      <section className="relative w-full rounded-[2rem] overflow-hidden min-h-[80vh] flex items-center justify-center neo-raised p-8">
        <div className="absolute inset-0 z-0 bg-white/20">
          <img 
            alt="Abstract DNA and Protein Background" 
            className="w-full h-full object-cover opacity-60" 
            src="/hero_background.png" 
          />
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-14 flex flex-col items-center text-center gap-6">
            
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-tight tracking-tight">
              Hi, I'm <span className="text-primary">Vedant</span>
            </h1>
            <p className="text-xl md:text-3xl font-headline font-bold text-on-surface leading-tight tracking-tight">
              I bridge <span className="text-tertiary">biology</span> with <span className="text-primary">computation</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <div className="neo-pressed px-4 py-2 rounded-full text-secondary font-medium text-sm flex items-center shadow-neo-pressed">
                Bioinformatics
              </div>
              <div className="neo-pressed px-4 py-2 rounded-full text-secondary font-medium text-sm flex items-center shadow-neo-pressed">
                Computational Structural Biology
              </div>
            </div>

            <div className="flex gap-4 mt-8 w-full justify-center">
              <a href="https://drive.google.com/file/d/1t2GNxUC4cyX6Qzzqsz7ZsBMy9yy_hQJ_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-background shadow-neo-raised text-primary font-semibold px-10 py-4 rounded-xl hover:text-tertiary active:shadow-neo-pressed transition-all duration-300">
                View Resume
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Bento Grid: Profile & Skills */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Research Profile */}
        <div className="lg:col-span-6 neo-raised rounded-[2rem] p-10 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl neo-pressed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
            </div>
            <h2 className="font-headline text-3xl font-semibold text-on-surface">Research Profile</h2>
          </div>
          <div className="neo-pressed rounded-2xl p-8 flex flex-col gap-4">
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Bioinformatics graduate specializing in computational structural biology, with a foundation in molecular simulation and structure-based methods. Building an understanding of machine learning, with a growing interest in applying it across biology, from structural questions to areas like omics and beyond, learning and taking on new problems along the way. Aims to delve deeper into this domain and apply it to solve real biological problems through computational methods.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="lg:col-span-6 neo-raised rounded-[2rem] p-10 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl neo-pressed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            </div>
            <h2 className="font-headline text-3xl font-semibold text-on-surface">Technical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {/* Languages */}
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">Python</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">R</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">Perl</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">Bash</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">HTML</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">SQL</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">PHP</div>
            
            {/* Molecular Simulation */}
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">GROMACS</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">VMD</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">PyMOL</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">ChimeraX</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">AutoDock Vina</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">Schrödinger</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">MDAnalysis</div>
            
            {/* Machine Learning */}
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">PyTorch</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">PocketXMol</div>
            
            {/* Environments */}
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">Linux</div>
            <div className="bg-background shadow-neo-pressed px-4 py-2 rounded-xl text-on-surface font-medium text-sm">HPC (SLURM)</div>
          </div>
        </div>
      </section>
    </main>
  );
}

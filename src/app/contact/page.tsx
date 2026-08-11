export default function Contact() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col gap-12 items-center justify-center min-h-[70vh]">
      <section className="text-center flex flex-col gap-4">
        <h1 className="font-headline font-semibold text-4xl md:text-5xl text-on-surface">Get in Touch</h1>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
          Feel free to reach out for collaborations, research opportunities, or just to say hi! I'm always open to discussing computational biology and protein modeling.
        </p>
      </section>

      <section className="glass-card rounded-[2rem] p-10 w-full max-w-2xl flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <a href="mailto:vedantsarode15@gmail.com" className="bg-background shadow-neo-raised rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group border border-transparent hover:border-primary/20">
            <div className="w-12 h-12 rounded-lg shadow-neo-pressed flex items-center justify-center text-primary group-hover:text-tertiary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-lg text-primary">Email</h3>
              <p className="text-on-surface-variant">vedantsarode15@gmail.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/vedant-sarode-09566b216" target="_blank" rel="noopener noreferrer" className="bg-background shadow-neo-raised rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 rounded-lg shadow-neo-pressed flex items-center justify-center text-primary group-hover:text-tertiary transition-colors">
              <span className="material-symbols-outlined">link</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-lg">LinkedIn</h3>
              <p className="text-on-surface-variant">Connect with me</p>
            </div>
          </a>

          <a href="https://scholar.google.com/citations?user=eqhbkrEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="bg-background shadow-neo-raised rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 rounded-lg shadow-neo-pressed flex items-center justify-center text-primary group-hover:text-tertiary transition-colors">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-lg">Google Scholar</h3>
              <p className="text-on-surface-variant">View publications</p>
            </div>
          </a>

          <a href="https://orcid.org/0009-0003-2113-8244" target="_blank" rel="noopener noreferrer" className="bg-background shadow-neo-raised rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group border border-tertiary/10">
            <div className="w-12 h-12 rounded-lg shadow-neo-pressed flex items-center justify-center text-tertiary group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">badge</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-lg text-tertiary">ORCID ID</h3>
              <p className="text-on-surface-variant">0009-0003-2113-8244</p>
            </div>
          </a>

          <a href="https://github.com/ved-sarode" target="_blank" rel="noopener noreferrer" className="bg-background shadow-neo-raised rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 rounded-lg shadow-neo-pressed flex items-center justify-center text-primary group-hover:text-tertiary transition-colors">
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-lg">GitHub</h3>
              <p className="text-on-surface-variant">View projects</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

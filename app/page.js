// app/page.js
const projects = [
  {
    title: "Tactile VLA for Robot Manipulation",
    meta: "Simulation · Tactile sensing · Vision-Language-Action",
    description:
      "Using simulated tactile data as a proxy for a CoinFT sensor, then training a Vision-Language-Action model to improve contact-rich manipulation with limited real-world data.",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Piper Dual-Arm Manipulation",
    meta: "Isaac Lab · IK · RL · Teleoperation",
    description:
      "Dual-arm platform for manipulation, combining teleoperation data, custom IK tooling, and reinforcement learning policies to perform structured tasks.",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Quadruped Locomotion",
    meta: "RL · Contact dynamics · Simulation",
    description:
      "Training walking policies for a quadruped in simulation, with custom reward shaping and metrics based on contact timing, stability, and traversal.",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  {
    title: "Ping Pong Picker Robot",
    meta: "Computer vision · Embedded · Mobile robot",
    description:
      "A mobile robot that detects ping pong balls with a camera, plans a path, and collects them autonomously using a custom intake mechanism.",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
            Z
          </div>
          <nav className="flex gap-4 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#projects" className="hover:text-slate-900">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-slate-200">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-16 md:flex-row md:items-center md:py-20">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Robotics · Embedded · Simulation
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Hi, I&apos;m Z.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                I build robots that move, sense, and learn — from quadruped locomotion to
                tactile-guided manipulation and embedded systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow-md shadow-slate-300/60 hover:bg-slate-950"
                >
                  View projects
                </a>
                {/* Optional resume link */}
                {/* <a
                  href="/resume.pdf"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                  target="_blank"
                >
                  Download resume
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              About
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              I&apos;m a robotics engineer focused on manipulation, simulation, and embedded
              systems. Recently I&apos;ve been working on tactile sensing for robot arms,
              quadruped locomotion in Isaac-based simulators, and autonomous robots for
              practical tasks like ball collection and inspection.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-b border-slate-200 bg-slate-100/80"
        >
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Projects
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A selection of projects I&apos;ve worked on. Each video gives a quick demo
                — I&apos;m happy to dive into the implementation details during an
                interview.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-300/40"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {project.meta}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-3 relative w-full overflow-hidden rounded-xl bg-slate-200 pt-[56.25%]">
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="absolute inset-0 h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Contact
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Want to chat about robotics, embedded systems, or any of these projects?
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:youremail@example.com"
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  youremail@example.com
                </a>
              </li>
              <li>
                <span className="font-semibold">GitHub: </span>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  github.com/yourusername
                </a>
              </li>
              <li>
                <span className="font-semibold">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  linkedin.com/in/yourprofile
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Z · Robotics &amp; Embedded Systems
        </div>
      </footer>
    </div>
  );
}

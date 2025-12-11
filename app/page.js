// app/page.js
const projects = [
  {
    title: "Tactile VLA for Robot Manipulation",
    slug: "tactile-vla",
    meta: "Simulation · Tactile sensing · Vision-Language-Action",
    date: "November 2025 - Present",
    description:
      "Using simulated tactile data as a proxy for a CoinFT sensor, then training a Vision-Language-Action model to improve contact-rich manipulation with limited real-world data.",
    videoUrl: "/demos/ft_proto.mp4",
  },
  {
    title: "Quadruped Locomotion",
    slug: "b1",
    meta: "Isaac Lab · RL · Contact dynamics",
    date: "April 2025 - Present",
    description:
      "Training different walking policies for a quadruped in simulation, with custom reward shaping and metrics based on contact timing, stability, and traversal.",
    videoUrl: "/demos/b1_gait.mp4",
  },
  {
    title: "BRAVO Robotic Arm",
    slug: "bravo",
    meta: "Sensor fusion · Embedded · Wearable interface",
    date: "March 2025",
    description:
      "A wearable device that captures human motion through sensors and maps it to real-time robot control, enabling intuitive human–robot interaction.",
    videoUrl: "/demos/bravo.mp4",
  },
  {
    title: "Piper Arm Manipulation",
    slug: "piper-arm",
    meta: "Isaac Lab · Motion planning · Computer vision",
    date: "Sep 2025 - Oct 2025",
    description:
      "Dual-arm platform for manipulation, combining teleoperation data, custom IK tooling, and reinforcement learning policies to perform structured tasks.",
    videoUrl: "/demos/piper.mp4",
  },
  {
    title: "Wall-Epsilon",
    slug: "walle",
    meta: "Computer vision · Embedded · Mobile robot",
    date: "May 2025 - June 2025",
    description:
      "A fully designed physical mobile robot built from custom CAD, integrating sensors, motor encoders, and embedded control for accurate navigation. The robot uses computer vision to locate targets, knock them down, and autonomously deliver objects back to the home base.",
    videoUrl: "/demos/walle.mp4",
  },
  {
    title: "Ping Pong Picker Robot",
    slug: "PPPR",
    meta: "Computer vision · PyBullet · Mobile robot",
    date: "March 2025 - April 2025",
    description:
      "A simulation-based mobile robot system that uses computer vision to detect ping pong balls, computes target poses in PyBullet, and performs autonomous path planning to navigate and collect balls.",
    videoUrl: "/demos/PPPR.mp4",
  },
  
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
            Zi Tao Li
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
          <div className="mx-auto flex max-w-5xl flex-col-reverse px-4 py-16 md:flex-row md:items-center md:justify-between md:py-20">
            
            {/* TEXT SIDE */}
            <div className="max-w-xl mt-10 md:mt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Robotics · Simulation · Embedded 
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Zi Tao Dylan Li
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                I’m exploring robot learning and embedded systems, aiming to eventually build robots that assist with everyday chores and industrial tasks.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {/* Primary CTA */}
                <a
                  href="#projects"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow hover:bg-slate-950"
                >
                  View Projects
                </a>

                {/* GitHub CTA */}
                <a
                  href="https://github.com/ztialo"
                  target="_blank"
                  className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-slate-900"
                >
                  {/* GitHub Icon - white outline */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.78-.25.78-.55v-2.03c-3.2.7-3.87-1.52-3.87-1.52-.53-1.32-1.29-1.67-1.29-1.67-1.05-.72.08-.71.08-.71 1.17.08 1.77 1.18 1.77 1.18 1.04 1.75 2.72 1.23 3.39.94.1-.75.41-1.24.74-1.53-2.62-.3-5.37-1.31-5.37-5.82 0-1.28.46-2.33 1.2-3.16-.12-.3-.52-1.51.11-3.15 0 0 .98-.3 3.2 1.2a11 11 0 015.82 0c2.22-1.5 3.2-1.2 3.2-1.2.63 1.64.23 2.85.11 3.15.75.83 1.2 1.88 1.2 3.16 0 4.53-2.75 5.52-5.38 5.82.42.36.79 1.09.79 2.2v3.26c0 .3.2.66.78.55A11.5 11.5 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"
                    />
                  </svg>
                  GitHub
                </a>

                {/* LinkedIn CTA */}
                <a
                  href="https://www.linkedin.com/in/zitaodylanli/"
                  target="_blank"
                  className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-slate-900"
                >
                  {/* Clean, thin LinkedIn icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" rx="1" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>

                  LinkedIn
                </a>

                <a
                  href="/ZiTaoLi_Resume.pdf"
                  target="_blank"
                  className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-slate-900"
                >
                  Resume
                </a>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <img
                src="/pictures/profile.png"
                alt="Profile photo"
                className="h-40 w-40 rounded-full object-cover shadow-lg ring-2 ring-white md:h-60 md:w-60"
              />
            </div>

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

            <div className="mt-8 columns-1 md:columns-2 gap-6 space-y-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-300/40"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-wide text-slate-500">
                    {project.meta}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {project.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <video
                    src={project.videoUrl}
                    controls
                    className="mt-3 w-full rounded-xl"
                    playsInline
                  />

                  
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
                  href="mailto:dylanlzt2003@gmail.com"
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  dylanlzt2003@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">GitHub: </span>
                <a
                  href="https://github.com/ztialo"
                  target="_blank"
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  github.com/ztialo
                </a>
              </li>
              <li>
                <span className="font-semibold">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/zitaodylanli/"
                  target="_blank"
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  linkedin.com/in/zitaodylanli
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Zi Tao Li · Robotics &amp; Embedded Systems
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";

type ProjectType = "Web" | "UI/UX";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: ProjectType;
  stack: string[];
  repo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real Estate Property Website",
    description:
      "A property listing web app built with Django and Tailwind CSS. Clean browsing experience with listings and details, focused on UI clarity without relying on an advisor persona or agent profile flow.",
    repo: "https://github.com/zahra-ali110/Realestate_project",
    image: "/projects/1.png",
    type: "Web",
    stack: ["Django", "Tailwind CSS", "HTML", "PostgreSQL"],
  },
  {
    id: 2,
    title: "CRM and Task Management Platform",
    description:
      "A Django and Tailwind CSS CRM concept inspired by ClickUp and Bitrix workflows. Built around tasks, status flows, and operational visibility to support internal team execution.",
    repo: "https://github.com/zahra-ali110/task_managment",
    image: "/projects/2.png",
    type: "Web",
    stack: ["Django", "Tailwind CSS", "CRUD", "Auth"],
  },
  {
    id: 3,
    title: "Cyberpunk Landing Page",
    description:
      "A cyberpunk-style UI/UX landing page built with Tailwind CSS. Neon accents, strong layout hierarchy, and responsive sections designed for modern product storytelling.",
    repo: "https://github.com/yourusername/cyberpunk-landing", // replace with your real link
    image: "/projects/3.png", // add this screenshot
    type: "UI/UX",
    stack: ["Tailwind CSS", "Responsive UI", "Landing Page", "UI System"],
  },
];

function GithubIcon(): React.JSX.Element {
  return (
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.4 3.44 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.8 1.4 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.3 3.3-1.3.7 1.7.3 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.2 8.2-11.6C24 5.5 18.6 0 12 0z" />
    </svg>
  );
}

function TypeBadge({ type }: { type: ProjectType }): React.JSX.Element {
  return (
    <span className="inline-flex items-center rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
      {type}
    </span>
  );
}

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header (centered) */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Projects
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Three focused builds that highlight Django workflows, Tailwind UI, and
            clean layout systems.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm text-orange-200 hover:bg-orange-500/15 transition-colors"
          >
            Contact me <span className="translate-y-[1px]">→</span>
          </a>
        </div>

        {/* Grid (3 projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              className={[
                "group rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-orange-500/5 p-6",
                "transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/25 hover:shadow-2xl hover:shadow-orange-500/10",
                idx === 0 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/30">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Meta */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <TypeBadge type={p.type} />
                <div className="text-xs text-white/50">
                  {p.stack.slice(0, 2).join(" • ")}
                  {p.stack.length > 2 ? " • ..." : ""}
                </div>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-white leading-tight">
                {p.title}
              </h3>

              <p className="mt-3 text-white/70 leading-relaxed">
                {p.description}
              </p>

              {/* Stack chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs text-white/70 border border-white/10 bg-white/5 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm text-orange-200 hover:bg-orange-500/15 transition-colors"
                  >
                    GitHub <GithubIcon />
                  </a>
                ) : null}

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Work with me →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

type StackSkill = {
  name: string;
  level: number; // 0-100
  iconSrc: string; // from /public
  note?: string;
};

const stackSkills: StackSkill[] = [
  {
    name: "WordPress",
    level: 82,
    iconSrc: "/assets/WordPress.png",
    note: "sites, themes, content builds",
  },
  {
    name: "Django",
    level: 86,
    iconSrc: "/assets/Django.png",
    note: "backend, APIs, dashboards",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    iconSrc: "/assets/TailwindCSS.png", // rename file to remove space
    note: "UI systems, responsive layouts",
  },
  {
    name: "Flutter",
    level: 72,
    iconSrc: "/assets/Flutter.png",
    note: "mobile UI, cross-platform",
  },
];

function SkillBar({ skill }: { skill: StackSkill }): React.JSX.Element {
  const safeLevel = Math.max(0, Math.min(100, skill.level));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-orange-500/10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <div className="shrink-0 h-11 w-11 rounded-xl border border-orange-500/20 bg-orange-500/10 flex items-center justify-center">
            <Image
              src={skill.iconSrc}
              alt={`${skill.name} icon`}
              width={26}
              height={26}
              sizes="26px"
              className="object-contain"
            />
          </div>

          <div className="min-w-0">
            <p className="text-white font-semibold leading-tight truncate">
              {skill.name}
            </p>
            {skill.note ? (
              <p className="text-xs text-white/60 mt-1 leading-tight truncate">
                {skill.note}
              </p>
            ) : null}
          </div>
        </div>

        <span className="text-xs text-white/70 shrink-0">{safeLevel}%</span>
      </div>

      <div className="mt-4 h-2.5 w-full rounded-full bg-black/30 border border-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500"
          style={{ width: `${safeLevel}%` }}
        />
      </div>
    </div>
  );
}

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">About</h2>
          <p className="mt-4 text-white/70 max-w-3xl mx-auto">
            I build clean interfaces and practical products. Here is the stack I use most,
            plus a quick view of where I am strongest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-orange-500/5 p-8">
              <p className="text-xl text-white leading-relaxed">
                I’m currently looking to join a{" "}
                <span className="text-orange-400 font-semibold">cross-functional team</span>{" "}
                that values improving people’s lives through accessible design.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                  <p className="text-white/75">
                    I focus on clarity, speed, and layout consistency across screens.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                  <p className="text-white/75">
                    I like clean component structure and reusable UI patterns.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                  <p className="text-white/75">
                    I ship with a practical mindset and keep the product easy to use.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-orange-500/15 bg-orange-500/5 p-5">
                <p className="text-white/80">
                  Want to work together?{" "}
                  <a
                    href="#contact"
                    className="text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    Contact me
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/4 p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                <span className="text-xs text-white/60">
                  WordPress, Django, Tailwind CSS, Flutter
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stackSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-bold text-lg">Frontend</p>
                  <p className="text-white/60 text-sm">Tailwind UI and WordPress builds</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-bold text-lg">Backend + Mobile</p>
                  <p className="text-white/60 text-sm">Django APIs and Flutter apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
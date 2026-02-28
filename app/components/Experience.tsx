import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Responsive, accessible interfaces. Clean components, scalable UI, and smooth interactions.",
    icon: "/cards/1.png",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Wireframes to polished UI. Layout systems, usability-first decisions, and consistent visual hierarchy.",
    icon: "/cards/2.png",
  },
  {
    id: 3,
    title: "Futter Apps",
    description:
      "Mobile screens and flows that feel native. Reusable UI, performance focus, and reliable state handling.",
    icon: "/cards/3.png",
  },
  {
    id: 4,
    title: "Django Backend Development",
    description:
      "Faster load times, optimized assets, and cleaner on-page structure to improve Lighthouse results.",
    icon: "/cards/4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Skills & Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-2xl p-6 border border-orange-500/20 bg-gradient-to-br from-white/5 to-orange-500/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-500/15"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-white/5 border border-white/10 p-3">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {card.description}
                  </p>

                  <Link
                    href="#contact"
                    className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors inline-flex items-center gap-2"
                  >
                    Contact me <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
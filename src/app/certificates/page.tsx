import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "Google Prompting Essentials",
    issuer: "Google / Coursera",
    date: "May 2026",
    image: null,
    verifyUrl: "https://coursera.org/verify/specialization/MJA77DS2TJUV",
    color: "from-blue-500 to-green-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    id: 2,
    title: "Google AI Essentials",
    issuer: "Google / Coursera",
    date: "May 2026",
    image: null,
    verifyUrl: "https://coursera.org/verify/specialization/BPM68NF9M7AW",
    color: "from-purple-500 to-blue-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    id: 3,
    title: "Game Alchemy Workshop",
    issuer: "NexHub / Techy Mau Game Studios",
    date: "2026",
    image: "/assets/certificates/game-alchemy.jpeg",
    verifyUrl: null,
    color: "from-red-500 to-orange-500",
    logo: null,
  },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen relative font-sans">
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 text-white">
          Certificates
        </h1>
        <p className="text-zinc-400 text-center mb-16 font-mono">
          Credentials & achievements earned along the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${cert.color}`} />
              
              {cert.image ? (
                <div className="relative w-full h-48">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className={`h-48 bg-gradient-to-br ${cert.color} opacity-10 flex items-center justify-center`}>
                  {cert.logo && (
                    <img src={cert.logo} alt={cert.issuer} className="w-16 h-16 opacity-50" />
                  )}
                </div>
              )}

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-1">{cert.title}</h3>
                <p className="text-zinc-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-zinc-500 text-xs mb-4">{cert.date}</p>

                {cert.verifyUrl && (
                  <Link
                    href={cert.verifyUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Verify Certificate
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
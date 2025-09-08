import { useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";

// Componentes embutidos
const Card = ({ children }) => <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, ...props }) => <button {...props} className="px-3 py-1 border border-blue-700 rounded hover:bg-blue-100 transition">{children}</button>;

export default function App() {
  const [showCerts, setShowCerts] = useState(false);

  const habilidades = [
    "C#", "Python", "Java", "JavaScript", "TypeScript",
    "HTML5", "CSS3", "React", "Node.js", "TailwindCSS",
    "MySQL", "Firebase", "MongoDB", "Unity", "Modelagem 3D"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans scroll-smooth">

      {/* Header */}
      <header className="bg-white shadow-md p-6 text-center sticky top-0 z-50">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-blue-800 mb-4 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
            <img src="/images/sua-foto.jpg" alt="Foto João Luís" className="object-cover w-full h-full" />
          </div>
          <h1 className="text-3xl font-bold">João Luís de Carvalho Corrêa</h1>
          <p className="text-sm mt-2">Aguaí - São Paulo | (19) 98409-5788 | armadillo.gamearts@gmail.com</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/armadillo-game-arts/" target="_blank">
              <Button><Linkedin className="mr-2 h-4 w-4"/>LinkedIn</Button>
            </a>
            <a href="https://github.com/armadillogamearts" target="_blank">
              <Button><Github className="mr-2 h-4 w-4"/>GitHub</Button>
            </a>
            <a href="mailto:armadillo.gamearts@gmail.com">
              <Button><Mail className="mr-2 h-4 w-4"/>E-mail</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto p-6 space-y-12">

        {/* Resumo */}
        <section id="resumo">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">Resumo Profissional</h2>
          <p className="text-gray-700">
            Desenvolvedor com experiência em <b>desenvolvimento web e jogos digitais</b>. Domínio em C#, Python, Java, JavaScript, HTML5, CSS3 e React. Experiência em integração de chatbots com IA e prototipagem de jogos.
          </p>
        </section>

        {/* Habilidades */}
        <section id="habilidades">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">Habilidades Técnicas</h2>
          <div className="flex flex-wrap gap-2">
            {habilidades.map((h, idx) => (<span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">{h}</span>))}
          </div>
        </section>

        {/* Experiência */}
        <section id="experiencia">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">Experiência</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card><CardContent><h3 className="font-semibold">Desenvolvedor Web – Projetos Pessoais</h3><p className="text-sm mt-1 text-gray-600">2024 – Atual</p><ul className="list-disc ml-5 mt-2 text-gray-700 text-sm"><li>Aplicações web com React, Node.js e TailwindCSS.</li><li>Chatbots integrados ao WhatsApp e Firebase.</li><li>APIs de IA (Gemini, GPT) em projetos práticos.</li></ul></CardContent></Card>
            <Card><CardContent><h3 className="font-semibold">Artista 3D – Armadillo Game Arts</h3><p className="text-sm mt-1 text-gray-600">2018 – Atual</p><ul className="list-disc ml-5 mt-2 text-gray-700 text-sm"><li>Modelagem, escultura digital e animação para jogos e impressão 3D.</li><li>Criação de assets otimizados para engines.</li></ul></CardContent></Card>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">Projetos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card><CardContent><h3 className="font-semibold">Plataforma de Chatbots com IA</h3><p className="text-sm mt-1 text-gray-700">Automatiza criação e configuração de chatbots via QR Code.</p></CardContent></Card>
            <Card><CardContent><h3 className="font-semibold">Jogos Indie em Unity</h3><p className="text-sm mt-1 text-gray-700">Protótipos jogáveis com personagens, animações e mecânicas próprias.</p></CardContent></Card>
          </div>
        </section>

        {/* Certificados */}
        <section id="certificados">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">Certificados</h2>
          <button onClick={() => setShowCerts(!showCerts)} className="flex items-center gap-2 mb-4 text-blue-800 font-medium">
            {showCerts ? <ChevronUp /> : <ChevronDown />} Mostrar / Ocultar Certificados
          </button>
          {showCerts && (
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li><a href="/certificados/certificado1.pdf" target="_blank" className="text-blue-600 hover:underline">Certificado 1</a></li>
              <li><a href="/certificados/certificado2.pdf" target="_blank" className="text-blue-600 hover:underline">Certificado 2</a></li>
              <li><a href="/certificados/certificado3.pdf" target="_blank" className="text-blue-600 hover:underline">Certificado 3</a></li>
            </ul>
          )}
        </section>

      </main>

    </div>
  );
}

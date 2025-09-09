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
    "MySQL", "Firebase", "AWS", "MongoDB", "Blender", "Photoshop", "Unity", "Modelagem 3D", "Animação"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans scroll-smooth">

      {/* Header */}
      <header className="bg-white shadow-md p-6 text-center sticky top-0 z-50">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-blue-800 mb-4 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
            <img src="public/images/foto_joao_luis.jpeg" alt="Foto João Luís" className="object-cover w-full h-full" />
          </div>
          <h1 className="text-3xl font-bold">João Luís de Carvalho Corrêa</h1>
          <p className="text-sm mt-2">Aguaí - São Paulo | (19) 98409-5788 (WhatsApp)| armadillo.gamearts@gmail.com</p>
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
            Desenvolvedor FullStack com experiência em <b>desenvolvimento web e jogos digitais</b>. Domínio em C#, Python, Java, JavaScript, HTML5, CSS3 e React. Experiência em integração de chatbots com IA, prototipagem de jogos, criação e administração de banco de dados.
          </p>
        </section>

        {/*Formação*/}
        <section id="formacao">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">Formação</h2>
          <p className="text-gray-700">
            Tecnólogo em Jogos Digitais - Universidade São Judas Tadeu
            </p>
        </section>

        {/*Idiomas*/}
        <section id="idiomas">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">Idiomas</h2>
        <p className="text-gray-700">
          Português - Nativo
        </p> 
        <p className="text-gray-700">
          Inglês - Intermediário (Técnico/Documentação)
        </p>
        <p className="text-gray-700">
          Espanhol - Intermediário (Técnico/Documentação)
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
              <li><a href="/certificados/INTRODUCAO A PROGRAMACAO.pdf" target="_blank" className="text-blue-600 hover:underline">Introdução a Programação( USJT)</a></li>
              <li><a href="/certificados/progjogosmult.pdf" target="_blank" className="text-blue-600 hover:underline">Programação de Jogos Multiplataforma e Engines (USJT)</a></li>
              <li><a href="/certificados/inteligenciaartificial.pdf" target="_blank" className="text-blue-600 hover:underline">Inteligência Artificial (USJT)</a></li>
              <li><a href="/certificados/gamedesign.pdf" target="_blank" className="text-blue-600 hover:underline">Game Design (USJT)</a></li>
              <li><a href="/certificados/criacaoaudiovisual.pdf" target="_blank" className="text-blue-600 hover:underline">Criação em Audio Visual (USJT)</a></li>
              <li><a href="/certificados/cg_rv.pdf" target="_blank" className="text-blue-600 hover:underline">Computação Gráfica e Realidade Virtual (USJT)</a></li>
              <li><a href="/certificados/usabilidade.pdf" target="_blank" className="text-blue-600 hover:underline">Usabilidade, Desenvolvimento Web, Mobile e Jogos (USJT)</a></li>
              <li><a href="/certificados/animacao.pdf" target="_blank" className="text-blue-600 hover:underline">Animação (USJT)</a></li>
              <li><a href="/certificados/extensaoIA.pdf" target="_blank" className="text-blue-600 hover:underline">Extensão Universitária - Inteligência Artificial 180h (FAMEESP)</a></li>
              <li><a href="/certificados/Jogos para dispositivos moveis.pdf" target="_blank" className="text-blue-600 hover:underline">Jogos para Dispositivos Móveis (Universidade Cruzeiro do Sul)</a></li>
              <li><a href="/certificados/LOGICA DE PROGRAMACAO SENAI.pdf" target="_blank" className="text-blue-600 hover:underline">Lógica de Programação (SENAI)</a></li>
              <li><a href="/certificados/Lógica_de_Programação1.pdf" target="_blank" className="text-blue-600 hover:underline">Lógica de Programação 1 (IFRS)</a></li>
              <li><a href="/certificados/Lógica_de_Programação2.pdf" target="_blank" className="text-blue-600 hover:underline">Lógica de Programação 2 (IFRS)</a></li>
              <li><a href="/certificados/Lógica_de_Programação3.pdf" target="_blank" className="text-blue-600 hover:underline">Lógica de Programação 3 (IFRS)</a></li>
              <li><a href="/certificados/Programação_Básica_com_Java1.pdf" target="_blank" className="text-blue-600 hover:underline">Programação Básica com Java 1 (IFRS)</a></li>
              <li><a href="/certificados/Programação_Básica_com_Java2.pdf" target="_blank" className="text-blue-600 hover:underline">Programação Básica com Java 2 (IFRS)</a></li>
              <li><a href="/certificados/Programação_Básica_com_Java3.pdf" target="_blank" className="text-blue-600 hover:underline">Programação Básica com Java 3 (IFRS)</a></li>
              <li><a href="/certificados/Inkscape-Certificado_digital.pdf" target="_blank" className="text-blue-600 hover:underline">InkScape (IFRS)</a></li>
              <li><a href="/certificados/PROGRAMACAODOZERO.pdf" target="_blank" className="text-blue-600 hover:underline">Programação do Zero - C# (Udemy)</a></li>
              <li><a href="/certificados/PROGRAMACAOPYTHONDOZERO.pdf" target="_blank" className="text-blue-600 hover:underline">Programação Python do Zero ao Avançado (Udemy)</a></li>
              <li><a href="/certificados/DesignDeJogos2DComArteVetorialInkscape.pdf" target="_blank" className="text-blue-600 hover:underline">Design de Jogos 2D com Arte Vetorial (Udemy)</a></li>
              <li><a href="/certificados/CERTIFICADO CALARTSINTRO.pdf" target="_blank" className="text-blue-600 hover:underline">Introduction to Game Design (California Institute of the Arts)</a></li>
            </ul>
          )}
        </section>

      </main>

    </div>
  );
}

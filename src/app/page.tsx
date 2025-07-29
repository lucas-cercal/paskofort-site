"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para adicionar sombra na navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animação de bloom para hero
  const bloomVariants = {
    initial: { filter: "brightness(1)" },
    animate: {
      filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-shadow bg-white/90 backdrop-blur-md ${
          scrolled ? "shadow-xl" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <a
            href="#"
            className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6B4C3B] via-[#A67B5B] to-[#5A3E2B]"
          >
            PaskoFort
          </a>

          <nav className="hidden md:flex space-x-10 text-gray-700 font-semibold uppercase tracking-wide">
            <a
              href="#sobre"
              className="hover:text-[#5A3E2B] transition-colors duration-300"
            >
              Sobre
            </a>
            <a
              href="#produtos"
              className="hover:text-[#5A3E2B] transition-colors duration-300"
            >
              Produtos
            </a>
            <a
              href="#processo"
              className="hover:text-[#5A3E2B] transition-colors duration-300"
            >
              Processo
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#5A3E2B] transition-colors duration-300"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="hover:text-[#5A3E2B] transition-colors duration-300"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mt-20 font-sans bg-gradient-to-b from-[#FAF8F5] to-[#FFFFFF] text-gray-800 scroll-smooth selection:bg-[#A67B5B] selection:text-white">
        {/* HERO */}
        <section
          className="relative flex flex-col justify-center items-center text-center min-h-[90vh] px-6 sm:px-20 overflow-hidden"
          aria-label="Seção principal com chamada"
        >
          <motion.div
            initial="initial"
            animate="animate"
            className="absolute inset-0 -z-20 bg-gradient-to-tr from-[#A67B5B]/40 via-[#6B4C3B]/30 to-[#5A3E2B]/30 rounded-3xl filter blur-[100px]"
          />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-md max-w-4xl mt-4"
          >
            Móveis Artesanais <br />
            Feitos com{" "}
            <span className="text-[#6B4C3B]">Paixão</span> e{" "}
            <span className="text-[#A67B5B]">Precisão</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-xl sm:text-2xl font-light tracking-wide text-gray-700"
          >
            Design exclusivo, madeira sustentável e acabamento impecável para transformar sua casa.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.07 }}
            href="#produtos"
            className="mt-12 inline-block rounded-full bg-gradient-to-r from-[#6B4C3B] via-[#A67B5B] to-[#5A3E2B] px-14 py-5 font-semibold text-white shadow-xl drop-shadow-lg hover:brightness-110 transition"
            aria-label="Ver produtos"
          >
            Ver Produtos
          </motion.a>

          {/* CAROUSEL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={5000}
              emulateTouch
              className="rounded-3xl"
            >
              {["/foto1.jpeg", "/foto2.jpeg", "/foto3.jpeg"].map((src, i) => (
                <div key={i} className="cursor-grab">
                  <Image
                    src={src}
                    alt={`Oficina PaskoFort ${i + 1}`}
                    width={1600}
                    height={900}
                    className="object-cover w-full h-[480px] sm:h-[520px] md:h-[600px]"
                    priority={i === 0} // otimizando carregamento inicial
                  />
                </div>
              ))}
            </Carousel>
          </motion.div>
        </section>

        {/* SOBRE NÓS */}
        <section
          id="sobre"
          className="py-24 px-6 md:px-20 bg-white max-w-7xl mx-auto rounded-3xl shadow-lg"
          aria-label="Seção sobre a marcenaria"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 tracking-wide text-[#6B4C3B]">
              Sobre Nós
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Na <strong className="text-[#6B4C3B]">PaskoFort</strong>, transformamos madeira em arte funcional. Somos uma marcenaria familiar que valoriza o trabalho artesanal, o design inovador e a sustentabilidade. Cada peça é única, feita com cuidado, para dar vida e personalidade ao seu ambiente.
            </p>
          </motion.div>
        </section>

        {/* PROCESSO DE TRABALHO */}
        <section
          id="processo"
          className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#f7f4f1] to-[#e5dfda] max-w-7xl mx-auto rounded-3xl shadow-inner"
          aria-label="Seção processo de trabalho"
        >
          <motion.div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#5A3E2B] mb-12">Nosso Processo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-16 w-16 text-[#6B4C3B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 .367.074.717.208 1.033l-3.385 4.557a1 1 0 001.414 1.414l4.557-3.385A2.993 2.993 0 0015 13c0-1.657-1.343-3-3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12H7m2 0h2m4 0h2" />
                    </svg>
                  ),
                  title: "Design Personalizado",
                  desc: "Criamos projetos sob medida, combinando estilo e funcionalidade para você.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-16 w-16 text-[#A67B5B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M10 6h4M10 18h4" />
                    </svg>
                  ),
                  title: "Seleção de Madeira",
                  desc: "Utilizamos apenas madeira sustentável e materiais de alta qualidade.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-16 w-16 text-[#5A3E2B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
                    </svg>
                  ),
                  title: "Acabamento Impecável",
                  desc: "Detalhes refinados para um acabamento que encanta e dura por gerações.",
                },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  {icon}
                  <h3 className="mt-6 text-2xl font-semibold text-[#5A3E2B]">{title}</h3>
                  <p className="mt-3 text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PRODUTOS */}
        <section
          id="produtos"
          className="py-24 px-6 md:px-20 bg-white max-w-7xl mx-auto rounded-3xl shadow-lg"
          aria-label="Seção produtos"
        >
          <h2 className="text-4xl font-extrabold text-center text-[#6B4C3B] mb-12">Produtos em Destaque</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Quarto Planejado",
                image: "/foto4.jpeg",
                desc: "Móveis planejados para otimizar espaço e elegância no seu quarto.",
              },
              {
                title: "Banheiro Rústico",
                image: "/foto5.jpeg",
                desc: "Design rústico com madeira tratada para um ambiente aconchegante.",
              },
              {
                title: "Cadeira Artesanal",
                image: "/foto4.jpeg",
                desc: "Peças únicas feitas à mão para conforto e estilo.",
              },
            ].map(({ title, image, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(107,76,59,0.3)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="rounded-3xl bg-gradient-to-tr from-[#F4EFEA] to-[#E8E3DD] overflow-hidden cursor-pointer border border-gray-300"
              >
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#5A3E2B]">{title}</h3>
                  <p className="mt-2 text-gray-700">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section
          id="depoimentos"
          className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#FAF8F5] to-[#F5F2EF] max-w-7xl mx-auto rounded-3xl shadow-inner"
          aria-label="Seção depoimentos de clientes"
        >
          <h2 className="text-4xl font-extrabold text-center text-[#5A3E2B] mb-12">
            O que dizem nossos clientes
          </h2>
          <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">
            {[
              {
                nome: "Ana Paula",
                foto: "/foto-avatar.jpg",
                texto:
                  "A PaskoFort superou minhas expectativas! O quarto planejado ficou perfeito e o atendimento foi incrível.",
              },
              {
                nome: "Carlos Eduardo",
                foto: "/foto-avatar.jpg",
                texto:
                  "Móveis de altíssima qualidade, com acabamento impecável. Recomendo para quem valoriza o artesanal.",
              },
              {
                nome: "Juliana Mendes",
                foto: "/foto-avatar.jpg",
                texto:
                  "O processo foi simples e transparente. Estou muito feliz com minha nova cadeira artesanal!",
              },
            ].map(({ nome, foto, texto }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-md flex flex-col items-center text-center"
              >
                <Image
                  src={foto}
                  alt={`Foto de ${nome}`}
                  width={96}
                  height={96}
                  className="rounded-full object-cover mb-6 shadow-md"
                />
                <p className="text-gray-700 italic mb-4">&quot;{texto}&quot;</p>
                <span className="font-semibold text-[#5A3E2B]">{nome}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section
          id="orcamento"
          className="py-24 px-6 md:px-20 bg-[#6B4C3B] rounded-3xl max-w-7xl mx-auto my-20 text-white text-center shadow-lg"
          aria-label="Seção de chamada para orçamento"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold mb-6"
          >
            Pronto para transformar seu ambiente?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-10 text-lg"
          >
            Solicite um orçamento personalizado e comece hoje mesmo seu projeto com a PaskoFort.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contato"
            className="inline-block rounded-full bg-white text-[#6B4C3B] font-bold px-16 py-4 shadow-lg hover:brightness-110 transition"
            aria-label="Solicitar orçamento"
          >
            Solicitar Orçamento
          </motion.a>
        </section>

        {/* FOOTER */}
        <footer
          id="contato"
          className="bg-[#5A3E2B] text-gray-300 py-12 px-6 md:px-20 text-center"
          aria-label="Rodapé com informações de contato"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-white font-semibold text-lg">
              © {new Date().getFullYear()} PaskoFort Marcenaria. Todos os direitos reservados.
            </p>
            <div className="flex justify-center space-x-10 text-gray-300">
              <a
                href="mailto:contato@paskofort.com.br"
                className="hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                contato@paskofort.com.br
              </a>
              <a
                href="tel:+5500000000000"
                className="hover:text-white transition-colors duration-300"
                aria-label="Telefone"
              >
                +55 (00) 0000-0000
              </a>
              <a
                href="https://www.instagram.com/paskofort"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </main>
      <a
          href="https://wa.me/41985318314?text=Olá%2C+gostaria+de+saber+mais+sobre+os+produtos+da+PaskoFort"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Contato via WhatsApp"
        >
          <div className="w-16 h-16 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center transition-transform transform group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              viewBox="0 0 24 24"
              className="drop-shadow-md"
            >
              <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.1.55 4.14 1.6 5.95L0 24l6.22-1.6A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 21.78c-1.85 0-3.66-.5-5.23-1.46l-.37-.22-3.69.95.98-3.58-.24-.37A9.52 9.52 0 0 1 2.4 12c0-5.27 4.33-9.6 9.6-9.6 2.57 0 4.98 1 6.8 2.8a9.55 9.55 0 0 1 2.8 6.8c0 5.27-4.33 9.6-9.6 9.6zm5.18-7.55c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.6.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.66-1.55-1.93-.17-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.18 0-.47.07-.72.33-.25.25-.96.94-.96 2.28 0 1.33.98 2.61 1.12 2.79.14.18 1.94 2.96 4.72 4.15.66.28 1.17.45 1.57.57.66.21 1.26.18 1.74.11.53-.08 1.65-.67 1.89-1.31.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.53-.34z" />
            </svg>
          </div>
        </a>
    </>
  );
}

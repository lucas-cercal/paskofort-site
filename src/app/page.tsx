"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para adicionar sombra na navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <a href="#sobre" className="hover:text-[#5A3E2B] transition-colors duration-300">Sobre</a>
            <a href="#produtos" className="hover:text-[#5A3E2B] transition-colors duration-300">Produtos</a>
            <a href="#processo" className="hover:text-[#5A3E2B] transition-colors duration-300">Processo</a>
            <a href="#depoimentos" className="hover:text-[#5A3E2B] transition-colors duration-300">Depoimentos</a>
            <a href="#contato" className="hover:text-[#5A3E2B] transition-colors duration-300">Contato</a>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
                    priority={i === 0}
                  />
                </div>
              ))}
            </Carousel>
          </motion.div>
        </section>

        {/* SOBRE NÓS */}
        <section id="sobre" className="py-24 px-6 md:px-20 bg-white max-w-7xl mx-auto rounded-3xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 tracking-wide text-[#6B4C3B]">Sobre Nós</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Na <strong className="text-[#6B4C3B]">PaskoFort</strong>, transformamos madeira em arte funcional. Somos uma marcenaria familiar que valoriza o trabalho artesanal, o design inovador e a sustentabilidade. Cada peça é única, feita com cuidado, para dar vida e personalidade ao seu ambiente.
            </p>
          </motion.div>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="py-24 px-6 md:px-20 bg-white max-w-7xl mx-auto rounded-3xl shadow-lg">
          <h2 className="text-4xl font-extrabold text-center text-[#6B4C3B] mb-12">Produtos em Destaque</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { title: "Quarto Planejado", image: "/foto4.jpeg", desc: "Móveis planejados para otimizar espaço e elegância no seu quarto." },
              { title: "Banheiro Rústico", image: "/foto5.jpeg", desc: "Design rústico com madeira tratada para um ambiente aconchegante." },
              { title: "Sala Planejada", image: "/foto2.jpeg", desc: "Peças únicas feitas à mão para conforto e estilo." },
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
                <Image src={image} alt={title} width={600} height={400} className="w-full h-64 object-cover rounded-t-3xl" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#5A3E2B]">{title}</h3>
                  <p className="mt-2 text-gray-700">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESSO DE TRABALHO */}
        <section id="processo" className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#f7f4f1] to-[#e5dfda] max-w-7xl mx-auto rounded-3xl shadow-inner">
          <motion.div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#5A3E2B] mb-12">Nosso Processo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: "🔹", title: "Design Personalizado", desc: "Criamos projetos sob medida, combinando estilo e funcionalidade para você." },
                { icon: "🌳", title: "Seleção de Madeira", desc: "Utilizamos apenas madeira sustentável e materiais de alta qualidade." },
                { icon: "✨", title: "Acabamento Impecável", desc: "Detalhes refinados para um acabamento que encanta e dura por gerações." },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="text-6xl">{icon}</div>
                  <h3 className="mt-6 text-2xl font-semibold text-[#5A3E2B]">{title}</h3>
                  <p className="mt-3 text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#FAF8F5] to-[#F5F2EF] max-w-7xl mx-auto rounded-3xl shadow-inner">
          <h2 className="text-4xl font-extrabold text-center text-[#5A3E2B] mb-12">O que dizem nossos clientes</h2>
          <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">
            {[
              { nome: "Ana Paula", foto: "/foto-avatar.jpg", texto: "A PaskoFort superou minhas expectativas! O quarto planejado ficou perfeito e o atendimento foi incrível." },
              { nome: "Carlos Eduardo", foto: "/foto-avatar.jpg", texto: "Móveis de altíssima qualidade, com acabamento impecável. Recomendo para quem valoriza o artesanal." },
              { nome: "Juliana Mendes", foto: "/foto-avatar.jpg", texto: "O processo foi simples e transparente. Estou muito feliz com minha nova cadeira artesanal!" },
            ].map(({ nome, foto, texto }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-md"
              >
                <Image src={foto} alt={`Foto de ${nome}`} width={96} height={96} className="rounded-full object-cover mb-6 shadow-md" />
                <p className="text-gray-700 italic mb-4">&quot;{texto}&quot;</p>
                <span className="font-semibold text-[#5A3E2B]">{nome}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ORÇAMENTO */}
        <section id="orcamento" className="py-24 px-6 md:px-20 bg-[#6B4C3B] rounded-3xl max-w-7xl mx-auto my-20 text-white text-center shadow-lg">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-extrabold mb-6">
            Pronto para transformar seu ambiente?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="max-w-3xl mx-auto mb-10 text-lg">
            Solicite um orçamento personalizado e comece hoje mesmo seu projeto com a PaskoFort.
          </motion.p>
          <motion.a whileHover={{ scale: 1.05 }} href="https://wa.me/554195241227" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white text-[#6B4C3B] font-bold px-16 py-4 shadow-lg hover:brightness-110 transition" aria-label="Solicitar orçamento via WhatsApp">
            Solicitar Orçamento
          </motion.a>
        </section>

        {/* FOOTER */}
        <footer id="contato" className="bg-[#5A3E2B] text-gray-300 py-12 px-6 md:px-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-white font-semibold text-lg">© {new Date().getFullYear()} PaskoFort Marcenaria. Todos os direitos reservados.</p>
            <div className="flex justify-center space-x-10 text-gray-300">
              <a href="mailto:contato@paskofort.com.br" className="hover:text-white transition-colors duration-300" aria-label="Email">contato@paskofort.com.br</a>
              <a href="tel:+554195241227" className="hover:text-white transition-colors duration-300" aria-label="Telefone">+55 (41) 9524-1227</a>
              <a href="https://www.instagram.com/pasko_fort" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </footer>

        {/* BOTÃO FLOTANTE WHATSAPP */}
        <a
          href="https://wa.me/554195241227?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20PaskoFort"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Contato via WhatsApp"
        >
          <div className="w-16 h-16 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.486 2.245 2.246 3.481 5.232 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.502-5.688-1.449l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.448.003 9.887-4.439 9.889-9.885.002-5.462-4.427-9.89-9.89-9.892-5.452-.001-9.887 4.437-9.889 9.886-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.927-1.618zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.471-.149-.67.149-.198.297-.767.967-.939 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.918-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262."></path>
            </svg>
          </div>
        </a>

      </main>
    </>
  );
}

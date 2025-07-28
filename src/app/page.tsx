"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-neutral-800">PaskoFort</div>
          <nav className="hidden sm:flex gap-6 text-neutral-700 font-medium text-sm">
            <a href="#sobre" className="hover:text-neutral-900 transition">Sobre</a>
            <a href="#produtos" className="hover:text-neutral-900 transition">Produtos</a>
            <a href="#contato" className="hover:text-neutral-900 transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="mt-20 font-sans bg-[#fdf7f0] text-neutral-900">
        {/* HERO */}
        <section className="bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-100 text-neutral-900 flex flex-col justify-center items-center text-center px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
            PaskoFort Marcenaria
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-sm">
            Peças únicas feitas à mão com qualidade e paixão por madeira.
          </p>
          <a
            href="#produtos"
            className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 text-white font-semibold hover:from-orange-500 hover:to-yellow-400 transition shadow-md"
          >
            Ver produtos
          </a>

          {/* IMAGEM DECORATIVA (genérica) */}
          {/* SLIDER DE IMAGENS */}
          <div className="mt-10 w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={4000}
              emulateTouch
              className="w-full"
            >
              {[
                {
                  src: "/foto1.jpeg",
                  alt: "Oficina 1",
                },
                {
                  src: "/foto2.jpeg",
                  alt: "Oficina 2",
                },
                {
                  src: "/foto3.jpeg",
                  alt: "Oficina 3",
                },
              ].map((img, idx) => (
                <div key={idx}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={500}
                    className="object-cover w-full h-64 sm:h-80 md:h-96"
                  />
                </div>
              ))}
            </Carousel>
          </div>

        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 px-6 md:px-20 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-lg max-w-3xl mx-auto text-neutral-700">
            A <strong className="text-orange-600">PaskoFort</strong> é uma marcenaria apaixonada por transformar madeira em arte.
            Criamos móveis sob medida com acabamento impecável, respeitando o design, o cliente e a sustentabilidade.
          </p>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="py-20 px-6 md:px-20 bg-[#fffaf4]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-800">
            Produtos em Destaque
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Quarto", image: "/foto4.jpeg" },
              { title: "Banheiro", image: "/foto5.jpeg" },
              { title: "Cadeira Artesanal", image: "/foto4.jpeg" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-neutral-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover bg-neutral-200"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-neutral-800">{item.title}</h3>
                  <p className="text-sm mt-2 text-neutral-600">
                    Produto artesanal feito sob medida.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contato" className="bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-900 text-white py-10 text-center">
          <p className="mb-4">© {new Date().getFullYear()} PaskoFort Marcenaria</p>
          <div className="flex justify-center gap-6 text-white/80">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">WhatsApp</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
          </div>
        </footer>
      </main>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/41985318314?text=Olá%2C+gostaria+de+saber+mais+sobre+os+produtos+da+PaskoFort"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.1.55 4.14 1.6 5.95L0 24l6.22-1.6A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zm-8.52 18.3c-1.85 0-3.66-.5-5.23-1.46l-.37-.22-3.69.95.98-3.58-.24-.37A9.52 9.52 0 0 1 2.4 12c0-5.27 4.33-9.6 9.6-9.6 2.57 0 4.98 1 6.8 2.8a9.55 9.55 0 0 1 2.8 6.8c0 5.27-4.33 9.6-9.6 9.6zm5.18-7.55c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.6.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.66-1.55-1.93-.17-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49h-.55c-.18 0-.47.07-.72.33-.25.25-.96.94-.96 2.28 0 1.33.98 2.61 1.12 2.79.14.18 1.94 2.96 4.72 4.15.66.28 1.17.45 1.57.57.66.21 1.26.18 1.74.11.53-.08 1.65-.67 1.89-1.31.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.53-.34z" />
          </svg>
        </div>
      </a>
    </>
  );
}

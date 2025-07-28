"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-neutral-800">PaskoFort</div>
          <nav className="hidden sm:flex gap-6 text-neutral-700 font-medium text-sm">
            <a href="#sobre" className="hover:text-neutral-900">Sobre</a>
            <a href="#produtos" className="hover:text-neutral-900">Produtos</a>
            <a href="#contato" className="hover:text-neutral-900">Contato</a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="mt-20 font-sans bg-neutral-100 text-neutral-900">
        {/* HERO */}
        <section className="bg-[url('/madeira-bg.jpg')] bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            PaskoFort Marcenaria
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Peças únicas feitas à mão com qualidade e paixão por madeira.
          </p>
          <a
            href="#produtos"
            className="mt-8 px-6 py-3 rounded-full bg-white text-neutral-900 font-semibold hover:bg-neutral-200 transition"
          >
            Ver produtos
          </a>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-16 px-6 md:px-20 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-lg max-w-3xl mx-auto">
            A <strong>PaskoFort</strong> é uma marcenaria apaixonada por transformar madeira em arte. Com mais de 10 anos de experiência, criamos móveis sob medida com acabamento impecável, respeitando o design, o cliente e a sustentabilidade.
          </p>
        </section>

        {/* PRODUTOS */}
        <section id="produtos" className="py-16 px-6 md:px-20 bg-neutral-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Produtos em Destaque
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Mesa Rústica", image: "/mesa.jpg" },
              { title: "Estante de Parede", image: "/estante.jpg" },
              { title: "Cadeira Artesanal", image: "/cadeira.jpg" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm mt-2 text-neutral-600">
                    Produto artesanal feito sob medida.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contato" className="bg-neutral-900 text-white py-10 text-center">
          <p className="mb-4">© {new Date().getFullYear()} PaskoFort Marcenaria</p>
          <div className="flex justify-center gap-6 text-white/80">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">WhatsApp</a>
            <a href="#" className="hover:text-white">Facebook</a>
          </div>
        </footer>
      </main>
    </>
  );
}

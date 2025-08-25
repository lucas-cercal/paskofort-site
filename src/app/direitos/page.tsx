"use client";

import { motion } from "framer-motion";

export default function Direitos() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-gray-800 py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-[#6B4C3B]">
          Direitos Autorais - PaskoFort Marcenaria
        </h1>
        <p className="mb-4">
          <strong>Desenvolvido por:</strong> Lucas Cercal & Vinicius Machado  
          <br />
          <strong>Ano:</strong> 2025
        </p>
        <hr className="my-6 border-gray-300" />
        <h2 className="text-2xl font-bold mb-3">Direitos Autorais</h2>
        <p className="mb-4">
          Todo o conteúdo, código, imagens e design deste website são 
          <strong> propriedade da PaskoFort Marcenaria</strong>.  
          É proibido copiar, redistribuir ou utilizar qualquer parte deste site sem autorização prévia por escrito dos desenvolvedores ou da empresa.
        </p>

        <h2 className="text-2xl font-bold mb-3">Termos de Uso</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>O uso deste código é permitido apenas para fins de aprendizado ou referência pessoal.</li>
          <li>Qualquer uso comercial, reprodução ou distribuição sem permissão é estritamente proibido.</li>
          <li>O descumprimento destas regras pode resultar em ações legais por violação de direitos autorais.</li>
        </ol>
      </motion.div>
    </main>
  );
}

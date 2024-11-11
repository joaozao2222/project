"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Sabia() {
  return (
    <div className="flex flex-col items-center justify-center mb-[40%]">
      {/* Título */}
      <h1 className="text-[4em] mt-[5%]">SABIA QUE...</h1>

      {/* Imagem */}
      <div className="mt-[4%]">
        <Image
          src="/pensando.png"
          alt="Imagem de Pessoa Pensando"
          width={300}
          height={300}
          priority
          className="w-auto h-auto"
        />
      </div>

      {/* Botão Próxima */}
      <Link href="/elogio">
        <button className="bg-purple-950 w-[12em] h-[6em] hover:bg-purple-800 rounded mt-[20%] text-[1.5em]">
          Proxima
        </button>
      </Link>
    </div>
  );
}

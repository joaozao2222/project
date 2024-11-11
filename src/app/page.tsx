"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Título */}
      <h1 className="text-[5em] mt-[10%]">VOCE</h1>

      {/* Imagem */}
      <div className="mt-[10%]">
        <Image
          src="/apontando.png"
          alt="Imagem de Dedo Apontando"
          width={300}
          height={300}
          priority
          className="w-auto h-auto"
        />
      </div>

      {/* Botão Próxima */}
      <Link href="/voce-mesmo">
        <button className="bg-purple-950 w-[12em] h-[6em] hover:bg-purple-800 rounded mt-[20%] text-[1.5em]">
          Proxima
        </button>
      </Link>
    </div>
  );
}

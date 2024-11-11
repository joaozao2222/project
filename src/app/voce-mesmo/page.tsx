"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function VoceMesmo() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Título */}
      <h1 className="text-[4em] mt-[10%]">ISSO, VOCE MESMO</h1>

      {/* Imagem */}
      <div className="mt-[4%]">
        <Image
          src="/dedo.png"
          alt="Imagem de Dedo Apontando"
          width={300}
          height={300}
          priority
          className="w-auto h-auto"
        />
      </div>

      {/* Botão Próxima */}
      <Link href="/sabia">
        <button className="bg-purple-950 w-[12em] h-[6em] hover:bg-purple-800 rounded mt-[20%] text-[1.5em]">
          Proxima
        </button>
      </Link>
    </div>
  );
}

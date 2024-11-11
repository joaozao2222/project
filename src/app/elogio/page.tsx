"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Elogio() {
  return (
    <div className="flex flex-col items-center justify-center mt-[14%]">
      {/* Imagem do Emoji Amarelo */}
      <div className="w-full flex justify-end mt-[2%]">
        <Image
          src="/emoji-amarelo.png"
          alt="Emoji Amarelo"
          width={200}
          height={200}
        />
      </div>

      {/* Texto */}
      <div className="text-[3em] text-center w-[80%]">
        Voce é a mulher mais linda e mais gostosa do mundo eu sou completamente apaixonado em vc e no seu BUNDASSO, TE AMO MEU
      </div>

      {/* Imagem do Bombom */}
      <div>
        <Image
          src="/bombom.png"
          alt="Bombom"
          width={120}
          height={120}
        />
      </div>

      {/* Botão Próxima */}
      <div className="mb-[10%]">
      <Link href="/namoro">
        <button className="bg-purple-950 w-[12em] h-[6em] hover:bg-purple-800 pb-[5%] rounded text-[1.5em]">
          Proxima
        </button>
      </Link>
      </div>
    </div>
  );
}

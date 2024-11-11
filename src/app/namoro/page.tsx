"use client";

import { useState } from 'react';
import Link from 'next/link'; // Importe o Link do Next.js

export default function Namoro() {
    // Posição inicial do botão "Não"
    const [posicao, setPosicao] = useState({ top: 0, left: 0 });

    // Função para mudar a posição do botão "Não" quando clicado
    const mudarPosicao = () => {
        const randomTop = Math.floor(Math.random() * 80); // Gera uma posição aleatória para "top"
        const randomLeft = Math.floor(Math.random() * 80); // Gera uma posição aleatória para "left"
        setPosicao({ top: randomTop, left: randomLeft });
    };

    return (
        <div className="relative flex flex-col items-center justify-center mt-[20%]">
            <h1 className="text-[5em] mb-[5%]">VAMO CASAR?</h1>
            <div className="flex items-center justify-center">
                <div className="relative flex items-center">
                    {/* Botão "Sim" transformado em link */}
                    <Link href="/elogio"> {/* Defina o caminho para onde o link deve redirecionar */}
                        <a className="bg-purple-950 w-[12em] h-[6em] hover:bg-purple-800 rounded text-[1.5em] mr-[20em] flex items-center justify-center">
                            Sim
                        </a>
                    </Link>

                    {/* Botão "Não" que muda de lugar quando clicado */}
                    <button
                        onClick={mudarPosicao}
                        style={{
                            position: 'absolute',
                            top: `${posicao.top}%`,
                            left: `${posicao.left}%`,
                        }}
                        className="bg-purple-950 w-[12em] h-[6em] hover:bg-purple-800 rounded text-[1.5em] ml-[15em]"
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
}

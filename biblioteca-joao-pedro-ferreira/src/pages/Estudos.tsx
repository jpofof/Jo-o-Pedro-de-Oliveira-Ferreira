import { useState, useRef } from "react";

const TEMPO_INICIAL = 25 * 60; // 25 minutos em segundos

export default function Estudos() {
    const [segundosRestantes, setSegundosRestantes] = useState(TEMPO_INICIAL);
    const [emAndamento, setEmAndamento] = useState(false);
    const intervaloRef = useRef<number | null>(null);

    function formatarTempo(segundos: number) {
        const minutos = Math.floor(segundos / 60);
        const segundosFinais = segundos % 60;
        const minutosTexto = String(minutos).padStart(2, "0");
        const segundosTexto = String(segundosFinais).padStart(2, "0");
        return `${minutosTexto}:${segundosTexto}`;
    }

    function iniciarTimer() {
        if (emAndamento) return;

        setEmAndamento(true);

        intervaloRef.current = window.setInterval(() => {
            setSegundosRestantes((tempoAtual) => {
                if (tempoAtual <= 1) {
                    window.clearInterval(intervaloRef.current!);
                    setEmAndamento(false);
                    return 0;
                }
                return tempoAtual - 1;
            });
        }, 1000);
    }

    function pausarTimer() {
        if (intervaloRef.current) {
            window.clearInterval(intervaloRef.current);
        }
        setEmAndamento(false);
    }

    function reiniciarTimer() {
        if (intervaloRef.current) {
            window.clearInterval(intervaloRef.current);
        }
        setEmAndamento(false);
        setSegundosRestantes(TEMPO_INICIAL);
    }

    return (
        <main className="min-h-screen bg-slate-100">
            <header className="bg-[#0F172A] px-5 pt-14 pb-8">
                <h1 className="text-3xl font-bold text-white">Cantinho de Estudos</h1>
                <p className="mt-2 text-sm leading-5 text-slate-300">
                    Use o timer pomodoro para manter o foco nos estudos
                </p>
            </header>

            <section className="w-full max-w-md mx-auto px-5 py-10 flex flex-col items-center">
                <div className="bg-white rounded-2xl shadow-sm p-8 w-full flex flex-col items-center gap-6">
                    <span className="text-5xl font-bold text-slate-800">
                        {formatarTempo(segundosRestantes)}
                    </span>

                    <div className="flex gap-3">
                        <button
                            onClick={iniciarTimer}
                            disabled={emAndamento}
                            className="bg-[#2563EB] text-white py-2.5 px-5 rounded-lg text-sm font-semibold shadow-sm hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Iniciar
                        </button>

                        <button
                            onClick={pausarTimer}
                            disabled={!emAndamento}
                            className="bg-transparent text-slate-700 border border-slate-300 py-2.5 px-5 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Pausar
                        </button>

                        <button
                            onClick={reiniciarTimer}
                            className="bg-transparent text-slate-700 border border-slate-300 py-2.5 px-5 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors"
                        >
                            Reiniciar
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

import Sobre_Mim from '../componentes/Sobre_Mim';
import Projetos from '../componentes/Projetos';
import Formacao from '../componentes/Formacao'
export default function Desenvolvedor() {
    return (
        <div>
            <header className="bg-[#0F172A] p-6 text-left">
                <h1 className="text-white text-3xl font-[26px] font-bold mb-2">
                    Desenvolvedor Jpof
                </h1>
                <p className="text-[#94A3B8] text-sm mt-1 m-0 text-left">
                    Transformando Soluções Reais em Linhas de Código.
                </p>
            </header>
            
            <section>
                <Sobre_Mim />
            </section>
            <section>
                <Projetos />
            </section>
            <section>
                <Formacao />
            </section>
        </div>
    );
}



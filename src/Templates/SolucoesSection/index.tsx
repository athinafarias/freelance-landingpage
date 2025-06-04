import CardTexto from "@/components/CardTexto";
import styles from "./styles.module.css";
import ButtonCTA from "@/components/ButtonCTA";
import Seta from "@/components/Seta";

const SolucoesSection = () => {
    return (
        <section id="solucoesSection" className={`${styles.SolucoesSection} py-30 px-80 flex flex-col justify-between items-center gap-12`}>
            <div>
                <div>
                    <h1>Você enfrenta esses desafios no seu dia a dia?</h1>
                    <p className="mt-4">Eu posso te ajudar a mudar isso!</p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center mt-12 mb-16">
                    <CardTexto icon="" text="Projetos que atrasam ou nunca terminam?" variant="orange" height="fit-content" width="fit-content" />
                    <CardTexto icon="" text="Time de tecnologia desorganizado e desmotivado?" variant="orange" height="fit-content" width="fit-content" />
                    <CardTexto icon="" text="Falta de clareza sobre prioridades e entregas?" variant="orange" height="fit-content" width="fit-content" />
                    <CardTexto icon="" text="Comunicação ineficiente entre áreas e gestão?" variant="orange" height="fit-content" width="fit-content" />
                    <CardTexto icon="" text="Falta de um processo que realmente funcione?" variant="orange" height="fit-content" width="fit-content" />
                </div>
            </div>
            <img src="/assets/icons/div.svg" alt="" />
            <div className="mb-24">
                <h1 className="mt-16 mb-12">O que você vai aprender comigo:</h1>
                <div className="flex flex-row justify-between items-center gap-12">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <img src="/assets/images/section03.png" alt="" />
                        <ButtonCTA link="#produtosSection" text="Quero colocar meu time no eixo" padding="20px 40px" />
                    </div>
                    <div className={`${styles.SolucoesSectionCards} flex flex-wrap gap-3`}>
                        <CardTexto icon={<img src="/assets/icons/icon-clock.svg" alt="" />} text="Como aplicar na prática os princípios do Scrum e da agilidade, sem enrolação." variant="blue" height="fit-content" width="310px" />
                        <CardTexto icon={<img src="/assets/icons/icon-tier.svg" alt="" />} text="Como transformar a rotina de caos em processos previsíveis e escaláveis." variant="blue" height="fit-content" width="310px" />
                        <CardTexto icon={<img src="/assets/icons/icon-spaceship.svg" alt="" />} text="Como montar e liderar um time de TI com foco na entrega." variant="blue" height="fit-content" width="310px" />
                        <CardTexto icon={<img src="/assets/icons/icon-puzzle.svg" alt="" />} text="Como construir um pipeline de projetos que funciona." variant="blue" height="fit-content" width="310px" />
                        <CardTexto icon={<img src="/assets/icons/icon-graphic.svg" alt="" />} text="Como se tornar referência na sua empresa como líder de resultado." variant="blue" height="fit-content" width="fit-content" />
                    </div>
                </div>
            </div>
            <Seta variant="orange" />
        </section>
    )
}

export default SolucoesSection
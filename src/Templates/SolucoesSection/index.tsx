import CardTexto from "@/components/CardTexto";
import styles from "./styles.module.css";
import ButtonCTA from "@/components/ButtonCTA";
import Seta from "@/components/Seta";

const SolucoesSection = () => {
    return (
        <section id="solucoesSection" className={`${styles.SolucoesSection} responsive-margin-y flex flex-col justify-center items-center gap-8 lg:gap-12`}>
            <div className="w-full">
                <div className="text-center mb-8">
                    <h1>Você enfrenta esses desafios no seu dia a dia?</h1>
                    <p className="mt-4">Eu posso te ajudar a mudar isso!</p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center mb-12 lg:mb-16">
                    <CardTexto icon="" text="Projetos que atrasam ou nunca terminam?" variant="orange" height="fit-content" width="fit-content" />
                    <CardTexto icon="" text="Time de tecnologia desorganizado e desmotivado?" variant="orange" height="fit-content" width="fit-content" />
                    <CardTexto icon="" text="Falta de clareza sobre prioridades e entregas?" variant="orange" height="fit-content" width="fit-content" />
                    <CardTexto icon="" text="Comunicação ineficiente entre áreas e gestão?" variant="orange" height="fit-content" width="fit-content" />
                    <CardTexto icon="" text="Falta de um processo que realmente funcione?" variant="orange" height="fit-content" width="fit-content" />
                </div>
            </div>
            
            <img src="/assets/icons/div.svg" alt="" className="w-12 lg:w-16" />
            
            <div className="w-full">
                <h1 className="text-center mb-8 lg:mb-12">O que você vai aprender comigo:</h1>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
                    <div className="flex flex-col justify-center items-center gap-6 lg:gap-8 order-2 lg:order-1">
                        <div className="w-full max-w-sm lg:max-w-md">
                            <img 
                                src="/assets/images/section03.png" 
                                alt="Aprendizado em gestão ágil" 
                                className="w-full h-auto"
                            />
                        </div>
                        <ButtonCTA link="#produtosSection" text="Quero colocar meu time no eixo" padding="16px 24px lg:20px 40px" />
                    </div>
                    <div className={`${styles.SolucoesSectionCards} flex flex-col lg:flex-wrap lg:flex-row gap-3 order-1 lg:order-2`}>
                        <CardTexto icon={<img src="/assets/icons/icon-clock.svg" alt="" />} text="Como aplicar na prática os princípios do Scrum e da agilidade, sem enrolação." variant="blue" height="fit-content" width="100%" />
                        <CardTexto icon={<img src="/assets/icons/icon-tier.svg" alt="" />} text="Como transformar a rotina de caos em processos previsíveis e escaláveis." variant="blue" height="fit-content" width="100%" />
                        <CardTexto icon={<img src="/assets/icons/icon-spaceship.svg" alt="" />} text="Como montar e liderar um time de TI com foco na entrega." variant="blue" height="fit-content" width="100%" />
                        <CardTexto icon={<img src="/assets/icons/icon-puzzle.svg" alt="" />} text="Como construir um pipeline de projetos que funciona." variant="blue" height="fit-content" width="100%" />
                        <CardTexto icon={<img src="/assets/icons/icon-graphic.svg" alt="" />} text="Como se tornar referência na sua empresa como líder de resultado." variant="blue" height="fit-content" width="100%" />
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Seta variant="orange" />
            </div>
        </section>
    )
}

export default SolucoesSection
import ButtonCTA from "@/components/ButtonCTA";

import styles from "./styles.module.css";

const HomeSection = () => {
    return (
        <section className={`${styles.Section} responsive-margin-y flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12`}>
            <div className={`${styles.HomeSectionContent} flex flex-col gap-6 lg:gap-8 text-center lg:text-left`}>
                <div className={`${styles.HomeSectionTitles}`}>
                    <h1 className="text-(--textColorMain) font-bold">Transforme Seu Time de TI com Gestão Ágil na Prática</h1>
                    <h2 className="text-(--blue) text-lg lg:text-xl py-2">Com Rafael Forneiro - Especialista em Agilidade de Projetos e Processos</h2>
                </div>
                <p className="text-sm lg:text-base">Se você está cansado de projetos que não saem do papel ou equipes perdidas em meio a demandas sem fim, eu entendo. Já passei por isso e, depois de mais de 15 anos ajudando empresas como a sua, criei um método direto para transformar o caos em resultados.
                <br className="hidden lg:block"/><span className="lg:hidden"> </span>Não é teoria - são técnicas que aplico diariamente e que funcionam.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <ButtonCTA link="#produtosSection" text="Quero Aprender Agora" padding="16px 24px lg:20px 32px" />
                </div>
            </div>
            <div className={`${styles.HomeSectionImage} flex justify-center lg:justify-end w-full lg:w-auto`}>
                <img 
                    src="/assets/images/section01.png" 
                    alt="Ilustração sobre gestão ágil" 
                    className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto"
                />
            </div>
        </section>
    )
}

export default HomeSection
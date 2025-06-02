import ButtonCTA from "@/components/ButtonCTA";

import styles from "./styles.module.css";

const HomeSection = () => {
    return (
        <section className={`${styles.Section} py-30 px-80 flex justify-between items-center`}>
            <div className={`${styles.HomeSectionContent} flex flex-col gap-8`}>
                <div className={`${styles.HomeSectionTitles}`}>
                    <h1 className="text-(--textColorMain) text-4xl font-bold">Transforme Seu Time de TI com Gestão Ágil na Prática</h1>
                    <h2 className="text-(--blue) text-xl py-2">Com Rafael Forneiro - Especialista em Agilidade de Projetos e Processos</h2>
                </div>
                <p>Se você está cansado de projetos que não saem do papel ou equipes perdidas em meio a demandas sem fim, eu entendo. Já passei por isso e, depois de mais de 15 anos ajudando empresas como a sua, criei um método direto para transformar o caos em resultados.
                <br/>Não é teoria - são técnicas que aplico diariamente e que funcionam.
                </p>
                <ButtonCTA text="Quero Aprender Agora" padding="20px" />
            </div>
            <div>
                <img src="/assets/images/section01.png" alt="" />
            </div>
        </section>
    )
}

export default HomeSection
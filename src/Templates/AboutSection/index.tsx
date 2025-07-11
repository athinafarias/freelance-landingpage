import styles from "./styles.module.css";
import ListTopic from "@/components/ListTopic";

const AboutSection = () => {
    return (
        <div id="aboutSection" className={`${styles.AboutSection} flex justify-center items-center`}>
            <section className={`responsive-margin-y flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12`}>

                <div className={`${styles.AboutSectionImage} flex justify-center lg:justify-start w-full lg:w-auto order-2 lg:order-1`}>
                    <img 
                        src="/assets/images/about-rafael.png" 
                        alt="Rafael Forneiro - CEO da RF Consultoria e Especialista em Gestão Ágil" 
                        className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover rounded-lg"
                    />
                </div>

                <div className={`${styles.AboutSectionText} flex flex-col gap-8 lg:gap-12 text-center lg:text-left order-1 lg:order-2`}>
                    <h1>Quem é Rafael Forneiro?</h1>
                    <p>Me chamo Rafael Forneiro e, antes de ser CEO da <span className="text-(--orange) underline">RF Consultoria</span>, fui um profissional de TI como você. Entendi na pele o que é lidar com prazos apertados, expectativas altas e a frustração de ver projetos travados.</p>

                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Por isso, hoje dedico minha carreira a:</p>
                        <ListTopic text={<><span className="font-semibold text-(--blue)">Ajudar times de tecnologia</span> a saírem do modo "apaga-incêndio" e alcançarem performance.</>}/>
                        <ListTopic text={<><span className="font-semibold text-(--blue)">Ensinar líderes</span> a conduzirem suas equipes com autonomia e método.</>}/>
                    </div>

                    <p><span className="font-semibold">Minha missão?</span> Transformar sua gestão em algo <span className="font-semibold text-(--orangeHover)">prático, humano</span> e - acima de tudo - <span className="font-semibold text-(--orangeHover)">eficiente.</span></p>
                </div>
            </section>
        </div>
    )
}

export default AboutSection
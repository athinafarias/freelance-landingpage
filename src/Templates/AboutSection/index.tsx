import styles from "./styles.module.css";
import ListTopic from "@/components/ListTopic";

const AboutSection = () => {
    return (
        <div className={`${styles.AboutSection} flex justify-center items-center`}>
            <section className={`${styles.Section} py-30 px-80 flex justify-between items-center`}>

                <img src="/assets/images/section02.png" alt="" />

                <div className={`${styles.AboutSectionText} flex flex-col gap-12`}>
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
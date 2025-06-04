import CardFeedback from "@/components/CardFeedback";
import styles from "./styles.module.css";

const FeedbacksSection = () => {
    return (
        <div className={`${styles.FeedbacksSection} flex justify-center items-center`}>
            <section id="feedbacksSection" className={`${styles.Section} py-30 px-80 flex flex-col justify-between items-center`}>
                <div className="flex flex-col justify-center items-center text-center">
                    <h1>O que dizem sobre a <span className="text-(--blue)">Mentoria em Gestão Ágil</span></h1>
                    <p className="mt-8 mb-16">Líderes e profissionais de TI compartilham como a metodologia prática e direta da mentoria transformou suas rotinas, seus resultados e suas equipes.  Mais do que conteúdo, o que entregamos é <span className="text-(--orange)">clareza, método e performance de verdade</span>.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 w-full" >

                    <CardFeedback
                        srcImg="/assets/feedbacks/user03.png"
                        nome="Cristiano Mizael Lino Aguiar"
                        cargo="Supply Chain | Compras | Business Intelligence | RPA"
                        text='"O Rafael é uma pessoa comprometida com o trabalho e não se deixa vencer pelas adversidades. Trabalhamos por 10 meses no setor de transportes, onde ele sempre tratou os clientes com simplicidade e empatia. Destaca-se pela sua capacidade de entender e resolver problemas inesperados. Tenho excelentes lembranças dos tempos em que trabalhamos juntos e não hesito em recomendar o Rafael para qualquer tipo de demanda, onde quer que ela esteja."'
                        data="21 de maio de 2020 (trabalhavam na mesma equipe)"
                    />

                    <CardFeedback
                        srcImg="/assets/feedbacks/user06.png"
                        nome="Adalberto Chaves"
                        cargo="Analista de Qualidade e Automatização de Processos"
                        text='"Tive uma imensa satisfação em trabalhar com esse excelente profissional que é o Rafael Forneiro. Uma pessoa que dissemina seu conhecimento pessoal e profissional, propondo visões diferentes para cada situação. Com o Rafael, desenvolvemos trabalhos de mapeamento de processos, levantamento de requisitos e discutimos muito sobre melhorias, sempre ouvindo e opinando sobre seus pontos de vista. Agradeço pela oportunidade de conviver com esse grande profissional e pessoa."' 
                        data="21 de abril de 2020 (trabalhavam na mesma equipe)"
                    />

                    <CardFeedback
                        srcImg="/assets/feedbacks/user02.png"
                        nome="Sandra Moraes Vezzu"
                        cargo="Autora do Livro 'PODCAST - DÊ VOZ A SEU CONTEÚDO' | Pioneira em Produção de Podcasts"
                        text='"Rafael é super competente, organizado, comprometido, bastante focado em resultados. Sempre é um prazer poder trabalhar com ele."'
                        data="5 de junho de 2020 (trabalhavam na mesma equipe)"
                    />

                    <CardFeedback
                        srcImg="/assets/feedbacks/user01.png"
                        nome="Fábio Montenegro Mathias"
                        cargo="Especialista em Gestão de Pessoas / Remuneração"
                        text='"Rafael sempre foi um excelente aluno, dedicado, estudioso, atencioso com os colegas e demais pessoas da instituição. Transformou-se em um excelente profissional na sua área de atuação. Parabéns e sucesso!"'
                        data="3 de novembro de 2022 (Fábio ensinava Rafael)"
                    />

                    <CardFeedback
                        srcImg="/assets/feedbacks/user05.png"
                        nome="Rafael Cassemiro da Cruz"
                        cargo="Risk & Customer Manager | CX | BPM | RPA"
                        text='"Tive a oportunidade de trabalhar com o Rafael Forneiro, sempre disposto a ajudar, com bom relacionamento em equipe e pensamento realista. Tem um bom nível de cobrança e com follow-up das atividades mantinha o projeto em execução."'
                        data="27 de abril de 2020 (trabalhavam na mesma equipe)"
                    />

                    <CardFeedback
                        srcImg="/assets/feedbacks/user04.png"
                        nome="João Casarri Neto"
                        cargo="Liderança com Propósito | Engajamento de Equipes"
                        text='"Durante o tempo em que trabalhei com o Rafael no suporte ao BPO da Toutatis, ele sempre mostrou um profissional competente e solícito. Sempre disposto a aprender e a colaborar na solução dos problemas da área. Teve iniciativa para assumir atendimentos e era capaz de resolvê-los. Bom companheiro, hands on, pontual e participativo, além de ser uma pessoa do bem. Profissional que eu recomendo 100%."'
                        data="20 de maio de 2020 (supervisionava Rafael diretamente)"
                    />
                </div>
            </section>
        </div>
    )
}

export default FeedbacksSection
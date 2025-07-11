import CardAfiliado from "@/components/CardAfiliado";
import styles from "./styles.module.css";

import CardProduto from "@/components/CardProduto";

const ProdutosSection = () => {
    return (
        <section id="produtosSection" className={`${styles.ProdutosSection} responsive-margin-y flex flex-col justify-center items-center gap-8 lg:gap-12`}>
            <div className="w-full">
                <div className="flex flex-col items-center text-center">
                    <h1>Acelere sua jornada com soluções que se adaptam a você!</h1>
                    <p className="mt-6 lg:mt-8 mb-12 lg:mb-16 max-w-4xl px-4">Seja no tempo curto do dia a dia ou em uma imersão mais profunda, encontre o caminho ideal para evoluir sua liderança em TI:</p>
                </div>
                <div className="flex flex-col gap-8 items-center">
                    <CardProduto
                        txtTag="Curso Online"
                        titulo="Mentoria em Gestão Ágil de Projetos"
                        text="Para quem está cansado de gerenciar crises e quer liderar com confiança. Neste curso, reuni tudo o que aprendi em 15 anos para você:"
                        txtList1={<><span className="font-semibold text-(--blue)">Estruturar times</span> sem complicação.</>}
                        txtList2={<><span className="font-semibold text-(--blue)">Organizar entregas</span> com agilidade real (não só no nome).</>}
                        txtList3={<><span className="font-semibold text-(--blue)">Aplicar frameworks</span> de forma prática, não teórica</>}
                        text2="O conteúdo? São as mesmas estratégias que uso em mentorias individuais, agora disponíveis para você, no seu ritmo. Com videoaulas, templates prontos e uma comunidade para trocar ideias." 
                        linkCTA=""
                        txtButton="Quero fazer parte"
                        srcImg="/assets/ChatGPT Image 7_07_2025, 10_37_10.png"
                        imgPosition='right'
                    />

                    <CardProduto
                        txtTag="Coleções E-book"
                        titulo="Evoluir para Vencer – Agilidade nas Organizações"
                        text="Se você está começando na agilidade ou quer levar sua equipe para o próximo nível, este e-book é um guia direto ao ponto. Nele, explico:" 
                        txtList1={<>Como métodos ágeis que <span className="font-semibold text-(--blue)">realmente funcionam</span> no dia a dia (sem jargões desnecessários).</>}
                        txtList2="Comparativos honestos entre frameworks – o que vale a pena e o que é moda."
                        txtList3={<>Estratégias para <span className="font-semibold text-(--blue)">adaptar a agilidade</span> à sua realidade, não o contrário..</>}
                        text2=""
                        linkCTA="https://go.hotmart.com/C99184257E"
                        txtButton="Quero meu Ebook agora"
                        srcImg="/assets/ChatGPT Image 7_07_2025, 10_37_10.png"
                        imgPosition='left'
                    />
                </div>
            </div>
            
            <img src="/assets/icons/div.svg" alt="" className="mt-6 mb-6 lg:mt-8 lg:mb-8 w-12 lg:w-16" />
            
            <div id="parceirosSection" className="flex flex-col items-center justify-center text-center w-full">
                <div className="flex flex-col items-center justify-center text-center mb-8 lg:mb-12">
                    <h1>Seja um parceiro e lucre com conhecimento que transforma</h1>
                    <p className="mt-6 lg:mt-8 mb-12 lg:mb-16 max-w-4xl px-4">Acredita que a agilidade pode mudar a forma como as equipes trabalham? <br className="hidden lg:block" /> Então junte-se a mim como afiliado e:</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-4xl">
                    <CardAfiliado
                        txtTag="Afiliado"
                        titulo="Indique a Mentoria Online"
                        text="E e ganhe comissões por cada líder que você ajudar a sair do caos."
                        linkCTA="https://dashboard.kiwify.com.br/join/affiliate/rVgCBq3x"
                        txtBotao="Quero ser parceiro"
                    />
                    <CardAfiliado
                        txtTag="Afiliado"
                        titulo="Divulgue o E-Book"
                        text="E e leve conteúdo valioso para quem está começando - enquanto é remunerado por isso."
                        linkCTA="https://dashboard.kiwify.com.br/join/affiliate/y0XWk5z8"
                        txtBotao="Quero ser parceiro"
                    />
                </div>
                <span className="font-semibold text-(--blue) mt-8 lg:mt-12 mb-12 lg:mb-16 italic">Simples, transparente e com impacto real.</span>
            </div>
        </section>
    )
}

export default ProdutosSection
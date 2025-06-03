import Input from "@/components/Input";
import styles from "./styles.module.css";

import Seta from "@/components/Seta";
import Check from "@/components/Check";
import ButtonNav from "@/components/ButtonNav";
import ButtonCTA from "@/components/ButtonCTA";

const ContatoSection = () => {
    return (
        <section className={`${styles.ContatoSection} py-30 px-80 flex flex-col justify-between items-center gap-12`}>
            <Seta variant="orange" />
            <div className="flex flex-col items-center justify-center text-center">
                <div>
                    <h1>Receba conteúdos, bônus e atualizações exclusivas</h1>
                    <h2 className="text-lg text-(--blue) mt-4 mb-12">Quer Evoluir Na Gestão Ágil Com Clareza E Método? Entre Para A Comunidade RF!</h2>
                </div>
                <p className="w-200"> Preencha o formulário e entre para a minha lista de contatos: você receberá conteúdos práticos, lives exclusivas, cupons especiais e, se já for cliente, bônus complementares ao seu produto.</p>
                <div>
                    <form className="flex flex-col gap-4 bg-(--componentsBackground) rounded-2xl px-12 py-8 justify-between items-center mt-14 mb-12">
                        <legend className="mb-6 font-bold">Vamos Ficar em Contato?</legend>
                        <Input placeholder="Nome completo" type="text" />
                        <div className="flex gap-6 w-full">
                            <Input placeholder="E-mail" type="email" />
                            <Input placeholder="Celular" type="tel" />
                        </div>
                        <Input placeholder="Cargo / Empresa (opcional)" type="" />
                        <div className="flex justify-start gap-36 w-full px-4 py-6 text-left">
                            <Check pergunta="Você já adquiriu algum produto?" opcao1="Sim" opcao2="Não" />
                            <Check pergunta="Qual produto?" opcao1="Mentoria" opcao2="Ebook" />
                        </div>
                        <Input placeholder="Como posso te ajudar? (Campo aberto para dúvidas, interesses ou recados)" type="text" />
                        <div className="mt-6">
                            <ButtonNav text="Enviar" variant="fill" />
                        </div>
                    </form>
                </div>
            </div>
            <img src="/assets/icons/div.svg" alt="" />
            <div className="flex items-center justify-center gap-24">
                <img src="/assets/images/section04.png" alt="" />
                <div className="flex flex-col items-center justify-center gap-10 text-center">
                    <h1>Está pronto para mudar a realidade do seu time?</h1>
                    <p>Você pode continuar apagando incêndios... ou <br/> aprender a liderar com método, foco e clareza!</p>
                    <ButtonCTA link="" text="Quero Começar Agora" padding="30px 150px" />
                </div>
            </div>
        </section>
    )
}

export default ContatoSection
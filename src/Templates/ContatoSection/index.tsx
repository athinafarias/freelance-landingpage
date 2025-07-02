import Input from "@/components/Input";
import styles from "./styles.module.css";

import Seta from "@/components/Seta";
import Check from "@/components/Check";
import ButtonNav from "@/components/ButtonNav";
import ButtonCTA from "@/components/ButtonCTA";

const ContatoSection = () => {
    return (
        <section id="contatoSection" className={`${styles.ContatoSection} responsive-margin-y flex flex-col justify-center items-center gap-8 lg:gap-12`}>
            <Seta variant="orange" />
            
            {/* Formulário de Contato */}
            <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto">
                <div className="mb-8 lg:mb-12 px-4">
                    <h1 className="mb-4">Receba conteúdos, bônus e atualizações exclusivas</h1>
                    <h2 className="text-base lg:text-lg text-(--blue) mb-6 lg:mb-8">Quer Evoluir Na Gestão Ágil Com Clareza E Método? Entre Para A Comunidade RF!</h2>
                    <p className="max-w-3xl mx-auto">Preencha o formulário e entre para a minha lista de contatos: você receberá conteúdos práticos, lives exclusivas, cupons especiais e, se já for cliente, bônus complementares ao seu produto.</p>
                </div>
                
                {/* Container do formulário centralizado */}
                <div className="w-full max-w-3xl mx-auto px-4">
                    <form 
                        action="https://formsubmit.co/cc43fa8d81913a505529dc9046a54157" 
                        method="POST" 
                        className="bg-(--componentsBackground) rounded-2xl px-4 sm:px-6 lg:px-12 py-6 lg:py-8 mx-auto"
                    >
                        <legend className="mb-6 lg:mb-8 font-bold text-center text-lg lg:text-xl">Vamos Ficar em Contato?</legend>
                        
                        {/* Grid responsivo para o formulário */}
                        <div className="grid grid-cols-1 gap-4 lg:gap-6">
                            {/* Nome completo */}
                            <div className="w-full">
                                <Input placeholder="Nome completo" type="text" name="nome" />
                            </div>
                            
                            {/* Email e Telefone */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                <Input placeholder="E-mail" type="email" name="email" />
                                <Input placeholder="Celular" type="tel" name="telefone" />
                            </div>
                            
                            {/* Cargo/Empresa */}
                            <div className="w-full">
                                <Input placeholder="Cargo / Empresa (opcional)" type="text" name="cargo_empresa" />
                            </div>
                            
                            {/* Checkboxes */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 py-4 lg:py-6">
                                <Check 
                                    pergunta="Você já adquiriu algum produto?" 
                                    opcao1="Sim" 
                                    opcao2="Não" 
                                    name="adquiriu_produto" 
                                />
                                <Check 
                                    pergunta="Qual produto?" 
                                    opcao1="Mentoria" 
                                    opcao2="Ebook" 
                                    name="tipo_produto" 
                                />
                            </div>
                            
                            {/* Campo de mensagem */}
                            <div className="w-full">
                                <Input placeholder="Como posso te ajudar? (Campo aberto para dúvidas, interesses ou recados)" type="text" name="mensagem" />
                            </div>
                            
                            {/* Botão de envio */}
                            <div className="flex justify-center mt-4 lg:mt-6">
                                <ButtonNav text="Enviar" variant="fill" type="submit" />
                            </div>
                        </div>
                        
                        {/* Campos ocultos do FormSubmit */}
                        <input type="hidden" name="_subject" value="Novo contato via site - Landing Page" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_autoresponse" value="Recebemos sua mensagem e retornaremos em breve!" />
                        <input type="hidden" name="_template" value="table" />
                    </form>
                </div>
            </div>
            
            <img src="/assets/icons/div.svg" alt="" className="w-12 lg:w-16 mt-8" />
            
            {/* Seção CTA Final */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 w-full max-w-6xl">
                <div className="w-full max-w-sm lg:max-w-md order-2 lg:order-1">
                    <img 
                        src="/assets/images/section04.png" 
                        alt="Pronto para mudar" 
                        className="w-full h-auto"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 text-center order-1 lg:order-2">
                    <h1>Está pronto para mudar a realidade do seu time?</h1>
                    <p>Você pode continuar apagando incêndios... ou <br className="hidden lg:block" /> aprender a liderar com método, foco e clareza!</p>
                    <ButtonCTA link="" text="Quero Começar Agora" padding="20px 40px lg:30px 60px" />
                </div>
            </div>
        </section>
    )
}

export default ContatoSection
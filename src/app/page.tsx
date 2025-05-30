// COMPONENTS
import ButtonNav from "@/components/ButtonNav";
import Link from "@/components/Link";
import ButtonCTA from "@/components/ButtonCTA";
import CardTexto from "@/components/CardTexto";
import Tag from "@/components/Tag";
import Seta from "@/components/Seta";
import UserImg from "@/components/UserImg";
import ListTopic from "@/components/ListTopic";
import Input from "@/components/Input";
import Check from "@/components/Check";
import CardAfiliado from "@/components/CardAfiliado";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <ButtonNav text="TESTE" variant="fill" />
      <ButtonNav text="TESTE" variant="outline" />
      <Link text="TESTE" fontWeight='bold' />
      <Link text="teste" fontWeight='normal' />
      <ButtonCTA text="Teste" />
      <ButtonCTA text="Teste" padding="30px 100px" />
      <CardTexto text='testeteste' icon='' variant='orange' height="74px" width=" "/>
      <CardTexto text='testetestetes tetestetes ttestete stetes tetestet est testetes tetestetest etesttest etest etes teteste testte stetes tetestetes tetest tes tetest et estetes tetestte stetestet est etestete st' icon={<img src="/assets/icons/icon-clock.svg" alt="Ícone relógio" />} variant='blue' height=" " width="310px"/>
      <Tag text="teste" variant="orange" />
      <Tag text="teste" variant="blue" />
      <Seta variant="orange" />
      <Seta variant="blue" />
      <UserImg src='/assets/feedbacks/user01.png' />
      <ListTopic text={<>Padrão <span className="underline text-(--orange)">link</span> <span className="font-bold text-(--blue)">titulo</span> <span className="font-bold text-(--orangeHover)">destaque</span></>} />
      <Input type="email" placeholder="e-mail" width="480px" />
      <Input type="text" placeholder="nome" width="980px" />
      <Check pergunta="teste" opcao1="teste" opcao2="teste" />
      <CardAfiliado txtTag="Afiliado" titulo="Afiliado da Mentoria Online" text="Indique o curso de Mentoria em Gestão Ágil e ajude líderes a estruturarem seus times com método e performance." txtBotao="Serviços" />
    </div>
  );
}

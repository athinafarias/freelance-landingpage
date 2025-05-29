// COMPONENTS
import ButtonNav from "@/components/ButtonNav";
import LinkNav from "@/components/LinkNav";
import ButtonCTA from "@/components/ButtonCTA";
import CardTexto from "@/components/CardTexto";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <ButtonNav text="TESTE" variant="fill" />
      <ButtonNav text="TESTE" variant="outline" />
      <LinkNav text="TESTE" />
      <ButtonCTA text="Teste" />
      <CardTexto text='testeteste' icon='' variant='orange' height="74px" width=" "/>
      <CardTexto text='testetestetes tetestetes ttestete stetes tetestet est testetes tetestetest etesttest etest etes teteste testte stetes tetestetes tetest tes tetest et estetes tetestte stetestet est etestete st' icon={<img src="/assets/icons/icon-clock.svg" alt="Ícone relógio" />} variant='blue' height=" " width="310px"/>
    </div>
  );
}

// COMPONENTS
import ButtonCTA from "@/components/ButtonCTA";
import CardTexto from "@/components/CardTexto";
import Tag from "@/components/Tag";
import Seta from "@/components/Seta";
import UserImg from "@/components/UserImg";
import ListTopic from "@/components/ListTopic";
import Input from "@/components/Input";
import Check from "@/components/Check";
import CardAfiliado from "@/components/CardAfiliado";
import CardFeedback from "@/components/CardFeedback";

// SECTIONS
import Header from "@/components/Templates/Header"
import HomeSection from "@/components/Templates/HomeSection"
import AboutSection from "@/components/Templates/AboutSection"
import SolucoesSection from "@/components/Templates/SolucoesSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen p-12">
      <Header />
      <HomeSection />
      <AboutSection />
      <SolucoesSection />
      
    </div>
  );
}

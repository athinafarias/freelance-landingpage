// SECTIONS
import Header from "@/Templates/Header"
import HomeSection from "@/Templates/HomeSection"
import AboutSection from "@/Templates/AboutSection"
import SolucoesSection from "@/Templates/SolucoesSection";
import ProdutosSection from "@/Templates/ProdutosSection";
import FeedbacksSection from "@/Templates/FeedbacksSection";
import ContatoSection from "@/Templates/ContatoSection";
import Footer from "@/Templates/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen p-12">
      <Header />
      <HomeSection />
      <AboutSection />
      <SolucoesSection />
      <ProdutosSection />
      <FeedbacksSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}

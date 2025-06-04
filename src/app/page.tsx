'use client';

// SECTIONS
import Header from "@/Templates/Header"
import HomeSection from "@/Templates/HomeSection"
import AboutSection from "@/Templates/AboutSection"
import SolucoesSection from "@/Templates/SolucoesSection";
import ProdutosSection from "@/Templates/ProdutosSection";
import FeedbacksSection from "@/Templates/FeedbacksSection";
import ContatoSection from "@/Templates/ContatoSection";
import Footer from "@/Templates/Footer";
import Seta from "@/components/Seta";

import ScrollToTop from "react-scroll-to-top";
import Whatsapp from "@/components/Whatsapp";
import Link from "@/components/Link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen p-12">
      <ScrollToTop smooth component={<Seta variant="blue" direction="up" />} style={{ margin: '20px', marginBottom: '130px'}} />
      <Whatsapp />
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

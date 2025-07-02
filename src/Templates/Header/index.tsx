'use client';

import { useState } from "react";
import ButtonNav from "@/components/ButtonNav";
import Link from "@/components/Link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="w-full sticky top-0 z-50 bg-[var(--background)] border-b border-gray-800">
            <div className="container-responsive flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img 
                        src="/assets/RF.png" 
                        alt="logo" 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" 
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden-mobile lg:flex items-center justify-center gap-8">
                    <Link target="_self" link="#aboutSection" text="SOBRE MIM" fontWeight="600" />
                    <Link target="_self" link="#solucoesSection" text="O QUE RESOLVO" fontWeight="600" />
                    <Link target="_self" link="#parceirosSection" text="SEJA UM PARCEIRO" fontWeight="600" />
                    <Link target="_self" link="#feedbacksSection" text="DEPOIMENTOS" fontWeight="600" />
                </nav>

                {/* Desktop CTA Buttons */}
                <div className="hidden-mobile lg:flex items-center gap-4">
                    <ButtonNav link="#contatoSection" text="CONTATO" variant="outline" />
                    <ButtonNav link="#produtosSection" text="PRODUTOS" variant="fill" />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="show-mobile lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                        isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-0' : ''
                    }`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                        isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`show-mobile lg:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden bg-[var(--background)] border-t border-gray-800`}>
                <nav className="container-responsive py-6 flex flex-col space-y-4">
                    <Link target="_self" link="#aboutSection" text="SOBRE MIM" fontWeight="600" onClick={closeMenu} />
                    <Link target="_self" link="#solucoesSection" text="O QUE RESOLVO" fontWeight="600" onClick={closeMenu} />
                    <Link target="_self" link="#parceirosSection" text="SEJA UM PARCEIRO" fontWeight="600" onClick={closeMenu} />
                    <Link target="_self" link="#feedbacksSection" text="DEPOIMENTOS" fontWeight="600" onClick={closeMenu} />
                    
                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-700">
                        <ButtonNav link="#contatoSection" text="CONTATO" variant="outline" onClick={closeMenu} />
                        <ButtonNav link="#produtosSection" text="PRODUTOS" variant="fill" onClick={closeMenu} />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
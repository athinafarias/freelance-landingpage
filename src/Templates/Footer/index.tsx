import Link from "@/components/Link";

import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={`${styles.Footer} flex flex-col items-center justify-center w-full responsive-padding mt-16 lg:mt-24`}>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8 lg:gap-16 xl:gap-20">
                    <div className="flex justify-center lg:justify-start">
                        <img src="/assets/RF.png" alt="logo" className="w-12 h-12 lg:w-14 lg:h-14 rounded-full" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 text-center flex-1">
                        <ul className={styles.FooterSection}>
                            <li className={`${styles.FooterLi}`}>Produtos</li>
                            <li><Link target="_blank" link="" text="Mentoria" fontWeight="300" /></li>
                            <li><Link target="_blank" link="https://go.hotmart.com/C99184257E" text="Ebook" fontWeight="300" /></li>
                        </ul>
                        <ul className={styles.FooterSection}>
                            <li className={`${styles.FooterLi}`}>Links para Afiliados</li>
                            <li><Link target="_blank" link="https://dashboard.kiwify.com.br/join/affiliate/rVgCBq3x" text="Parceiro Mentoria" fontWeight="300" /></li>
                            <li><Link target="_blank" link="https://dashboard.kiwify.com.br/join/affiliate/y0XWk5z8" text="Parceiro Ebook" fontWeight="300" /></li>
                        </ul>
                        <ul className={styles.FooterSection}>
                            <li className={`${styles.FooterLi}`}>Redes Sociais</li>
                            <li><Link target="_blank" link="https://www.facebook.com/rafael.forneiro.2025/?rdid=Y6J9LQjsJqbl0vpp" text="Facebook" fontWeight="300" /></li>
                            <li><Link target="_blank" link="https://www.linkedin.com/in/rafael-forneiro-bernardes-ab281315/" text="LinkedIn" fontWeight="300" /></li>
                            <li><Link target="_blank" link="https://www.instagram.com/rafaelforneiromentoria?igsh=a2Y3aTVicmVjeXo2" text="Instagram" fontWeight="300" /></li>
                        </ul>
                    </div>
                </div>
                <hr className={`${styles.FooterHr}`} />
                <p className="text-center text-(--orange) text-sm">Copyright © 2025 RFBernardes</p>
        </footer>
    )
}

export default Footer
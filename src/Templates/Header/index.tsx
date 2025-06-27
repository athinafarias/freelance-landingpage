import ButtonNav from "@/components/ButtonNav";
import Link from "@/components/Link";

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-60">
                <img src="/assets/RF.png" alt="logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <nav className="flex items-center justify-center gap-16">
                    <Link target="_self" link="#aboutSection" text="SOBRE MIM" fontWeight="600" />
                    <Link target="_self" link="#solucoesSection" text="O QUE RESOLVO" fontWeight="600" />
                    <Link target="_self" link="#parceirosSection" text="SEJA UM PARCEIRO" fontWeight="600" />
                    <Link target="_self" link="#feedbacksSection" text="DEPOIMENTOS" fontWeight="600" />
                </nav>
                <div className="flex items-center gap-4">
                    <ButtonNav link="#contatoSection" text="CONTATO" variant="outline" />
                    <ButtonNav link="#produtosSection" text="PRODUTOS" variant="fill" />
                </div>
        </header>
    )
}

export default Header
import ButtonNav from "@/components/ButtonNav";
import Link from "@/components/Link";

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-60">
                <img src="" alt="logo" />
                <nav className="flex items-center justify-center gap-1">
                    <Link link="" text="SOBRE MIM" fontWeight="600" />
                    <Link link="" text="O QUE RESOLVO" fontWeight="600" />
                    <Link link="" text="SEJA UM PARCEIRO" fontWeight="600" />
                    <Link link="" text="DEPOIMENTOS" fontWeight="600" />
                </nav>
                <div className="flex items-center gap-4">
                    <ButtonNav text="CONTATO" variant="outline" />
                    <ButtonNav text="PRODUTOS" variant="fill" />
                </div>
        </header>
    )
}

export default Header
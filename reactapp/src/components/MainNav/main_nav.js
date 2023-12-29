import './styles.scss';
import { MainNavLink } from "./main_nav_link";
import { Logo } from "../Logo/logo";

export const MainNav = () => {
    return (
       <nav className="main-nav">
            <Logo href="/" label=""/>
            <MainNavLink href="/" label="Homepage" />
            <MainNavLink href="/about" label="About" />
            <MainNavLink href="/contact" label="Contact" />
            <MainNavLink href="/terms" label="Rules" />
       </nav>
    )
}
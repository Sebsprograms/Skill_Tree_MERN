import { useLayoutContext } from "../pages/Layout";
import Wrapper from "../styled-components/MobileMenu";
import { IoClose } from "react-icons/io5";


const MobileMenu = () => {
    const { showMenu, toggleMenu } = useLayoutContext();
    return (
        <Wrapper>
            <div className={showMenu ? 'menu-container show-menu' : 'menu-container'}>
                <button onClick={toggleMenu} className="close-menu"><IoClose /></button>
                Mobile Menu
            </div>
        </Wrapper>
    );
}

export default MobileMenu;
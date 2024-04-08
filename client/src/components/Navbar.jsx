import Wrapper from '../styled-components/Navbar';
import { useLayoutContext } from '../pages/Layout';
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";




const Navbar = () => {
    const {
        toggleMenu,
        showMenu,
        toggleDarkTheme,
        isDarkTheme
    } = useLayoutContext();


    return (
        <Wrapper>
            <div className="left">
                <div className='toggle-btn' onClick={toggleDarkTheme}>
                    {isDarkTheme ? <IoMdSunny /> : <IoMdMoon />}
                </div>
            </div>
            <div className="center">
                <h1>Logo / Title</h1>
            </div>
            <div className="right">
                <div className='menu-btn' onClick={toggleMenu}>
                    {showMenu ? <IoClose /> : <CgMenuGridO />}
                </div>

            </div>
        </Wrapper>
    );
}

export default Navbar;
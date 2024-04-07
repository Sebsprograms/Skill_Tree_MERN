import Wrapper from '../styled-components/Navbar';
import { checkIfDarkTheme } from '../App';
import { useState } from 'react';
import { useLayoutContext } from '../pages/Layout';

const Navbar = () => {
    const { toggleMenu } = useLayoutContext();
    const [isDarkTheme, setIsDarkTheme] = useState(checkIfDarkTheme());

    return (
        <Wrapper>
            <div className="left">
                <button onClick={() => {
                    localStorage.setItem('darkTheme', !isDarkTheme);
                    setIsDarkTheme(!isDarkTheme);
                }}>
                    {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
                </button>
            </div>
            <div className="center">
                <h1>Logo / Title</h1>
            </div>
            <div className="right">
                <button onClick={toggleMenu}>
                    Open Menu
                </button>
            </div>
        </Wrapper>
    );
}

export default Navbar;
import { Outlet } from 'react-router-dom';
import { MobileMenu, Navbar, SideMenu } from '../components';
import Wrapper from '../styled-components/Layout';
import { createContext, useContext, useState } from 'react';
import { checkIfDarkTheme } from '../App';


const LayoutContext = createContext();

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(prev => !prev);
    const [isDarkTheme, setIsDarkTheme] = useState(checkIfDarkTheme());

    const toggleDarkTheme = () => {
        localStorage.setItem('darkTheme', !isDarkTheme);
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <LayoutContext.Provider value={{ showMenu, toggleMenu, toggleDarkTheme, isDarkTheme }}>
            <Wrapper>
                <main>
                    <div className='page'>
                        <Navbar />
                        <div className='content'>
                            <Outlet />
                        </div>
                    </div>
                    <SideMenu />
                    <MobileMenu />
                </main>
            </Wrapper>
        </LayoutContext.Provider>
    );
};

export const useLayoutContext = () => useContext(LayoutContext);
export default Layout;
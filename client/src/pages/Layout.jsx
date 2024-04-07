import { Outlet } from 'react-router-dom';
import { MobileMenu, Navbar, SideMenu } from '../components';
import Wrapper from '../styled-components/Layout';
import { createContext, useContext, useState } from 'react';


const LayoutContext = createContext();

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(prev => !prev);

    return (
        <LayoutContext.Provider value={{ showMenu, toggleMenu }}>
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
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';



const Layout = () => {
    return (
        <main>
            <div className='page'>
                <Navbar />
                <div className='content'>
                    <Outlet />
                </div>
            </div>
            {/* Add right menu / side bar here */}
        </main>
    );
};

export default Layout;
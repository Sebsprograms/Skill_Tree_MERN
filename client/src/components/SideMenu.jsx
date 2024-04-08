import Wrapper from "../styled-components/SideMenu";
import { useLayoutContext } from "../pages/Layout";

const SideMenu = () => {
    const { showMenu } = useLayoutContext();
    return (
        <Wrapper>

            <div className={showMenu ? 'show-menu menu-container' : 'menu-container'}>

                Side Menu
            </div>
        </Wrapper>
    );
}

export default SideMenu;
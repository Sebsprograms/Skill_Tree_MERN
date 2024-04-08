import styled from 'styled-components';

const Wrapper = styled.nav`
    background-color: var(--secondary-bg-color);
    height: var(--navbar-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    .toggle-btn {
        cursor: pointer;
        font-size: 24px;
        padding: 0;
        margin: 0;
        line-height: 0;
    }
    .menu-btn {
        cursor: pointer;
        font-size: 40px;
        padding: 0;
        margin: 0;
        line-height: 0;
    }
`;

export default Wrapper;
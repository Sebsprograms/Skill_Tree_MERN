import styled from 'styled-components';

const Wrapper = styled.aside`
display: none;
@media screen and (min-width: 768px) {
    display: block;
    .menu-container {
        background-color: var(--secondary-bg-color);
        min-height: 100vh;
        height: 100%;
        width: 250px;
        margin-right: -250px;
        transition: margin-right 0.5s ease-in-out;
    }

    .show-menu {
        margin-right: 0;
    }
}
`;

export default Wrapper;
import styled from 'styled-components';

const Wrapper = styled.aside`
.menu-container {
    display: none;
    background-color: var(--secondary-bg-color);
    width: 200px;
    height: 100vh;
}
.show-menu {
    display: block;
}

@media screen and (max-width: 768px) {
    display: none;
}
`;

export default Wrapper;
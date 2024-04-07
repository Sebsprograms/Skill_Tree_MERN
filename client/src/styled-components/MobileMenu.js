import styled from 'styled-components';

const Wrapper = styled.aside`
@media screen and (min-width: 768px) {
    display: none;
}
.menu-container {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--secondary-bg-color);
    padding: 1rem;
    margin: 1rem;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
}

.show-menu {
    z-index: 99;
    opacity: 1;
    visibility: visible;
}

.close-menu {
    font-size: 3rem;
    align-self: flex-end;
    cursor: pointer;
    height: 3rem;
    border: none;
    background-color: transparent;
    color: var(--primary-text-color);
}
`;

export default Wrapper;
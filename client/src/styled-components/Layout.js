import styled from 'styled-components';

const Wrapper = styled.section`
main {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr auto;
}
.page {

}
.content {
    height: calc(100% - var(--navbar-height));
}
`;

export default Wrapper;
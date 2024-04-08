import styled from 'styled-components';

const Wrapper = styled.section`
@media (min-width: 768px) {
    main {
        grid-template-columns: 1fr auto;
    }
}
main {
    width: 100vw;
    height: 100vh;
    display: grid;
   
}
.page {

}
.content {
    height: calc(100% - var(--navbar-height));
}
`;

export default Wrapper;
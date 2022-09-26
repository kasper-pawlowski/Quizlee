import Div100vh from 'react-div-100vh';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.dark2};
    padding: 30px;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    border-radius: 15px;

    h1 {
        font-size: 26px;
    }
`;

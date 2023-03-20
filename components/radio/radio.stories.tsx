import { Root, Item } from '.';
import styled from 'styled-components';

const Container = styled.div`
    width: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
`;

export const Default = () => {
    return (
        <Container>
            <Root>
                <Item value="1">One Hours</Item>
                <Item value="2">Two Hours</Item>
            </Root>
        </Container>
    );
};

import styled from "styled-components";
import magnifier from '../images/magnifier.png'

export function SearchError() {
    return (
        <Container>
            <img src={magnifier} alt='magnifier' width='56px' height='56px' />
            <Title>Мы никого не нашли</Title>
            <Description>Попробуй скорректировать запрос</Description>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 149px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    margin-top: 8px;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    color: #050510;
`

const Description = styled.div`
    margin-top: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #97979B;
`
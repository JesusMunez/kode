import styled from 'styled-components'
import ufo from '../images/ufo.png'

export function FetchingError() {
    return (
        <Container>
            <img src={ufo} alt='ufo' width='56px' height='56px' />
            <Title>Какой-то сверхразум все сломал</Title>
            <Description>Постараемся быстро починить</Description>
            <TryAgain>Попробовать снова</TryAgain>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 133px;
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

const TryAgain = styled.div`
    margin-top: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #6534FF;
    cursor: pointer;
`
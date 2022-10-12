import React from 'react'
import styled from 'styled-components'
import avatar from '../images/Rectangle.png'

export function UserList() {
    return (
        <UserContainer>
            <img src={avatar} alt='avatar' width='72px' height='72px' />
            <UserInfo>
                <UserName>Алексей Миногаров</UserName>
                <UserJob>Analyst</UserJob>
            </UserInfo>
        </UserContainer>
    )
}

const UserContainer = styled.div`
    margin-top: 22px;
    display: flex;
    height: 72px;    
`

const UserInfo = styled.div`
    margin-left: 16px;
    height: 72px;
    display: flex;
    flex-direction: column;    
    justify-content: center;    
`

const UserName = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #050510;    
`

const UserJob = styled.div`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #55555C;
`
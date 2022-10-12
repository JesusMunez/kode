import React from 'react'
import styled from 'styled-components'
import avatar from '../images/Rectangle.png'
import backArrow from '../images/back.png'
import star from '../images/star.png'
import call from '../images/call.png'

export function ProfilePage() {
    return (
        <>            
            <UserBlock>
                <BackArrow/>
                {/* <img src={backArrow} alt='arrow' width='7px' height='11px' style={{marginTop: '28px', marginLeft: '32px'}}/> */}
                <UserInfo>
                    <img src={avatar} alt='avatar' width='104px' height='104px' />
                    <UserName>Алиса Иванова</UserName>
                    <UserJob>Designer</UserJob>
                </UserInfo>                
            </UserBlock>
            <BirthdayContainer>
                <Birthday>
                    <img src={star} alt='star' width='20px' height='19px' />
                    <DateBirthday>5 июня 1996</DateBirthday>
                </Birthday>
                <Years>24 года</Years>
            </BirthdayContainer>
            <CallContainer>
                <img src={call} alt='call' width='20' height='20px' />
                <Number>+7 (999) 900 90 90</Number>
            </CallContainer>
        </>        
    )    
}

const UserBlock = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 280px;
    width: 100%;
    background: #F7F7F8;
`

const BackArrow = styled.div`
    display: flex;
    margin-top: 28px;
    margin-left: 32px;
    width: 7px;
    height: 11px;
    background-image: url(${backArrow});
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    margin-top: 32px;    
`

const UserName = styled.div`
    margin-top: 24px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #050510;
`

const UserJob = styled.div`
    margin-top: 12px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #55555C;
`

const BirthdayContainer = styled.div`
    display: flex;
    margin-top: 27px;
    margin-left: 18px;
    justify-content: space-between;
`

const Birthday = styled.div`
    /* justify-content: start; */
    display: flex;
`

const DateBirthday = styled.div`
    margin-left: 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #050510;
`

const Years = styled.div`    
    margin-right: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: end;
    color: #97979B;
`

const CallContainer = styled.div`
    display: flex;
    margin-top: 49px;
    margin-left: 18px;
`

const Number = styled.div`
    margin-left: 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #050510;
`
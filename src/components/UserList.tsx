import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import avatar from '../images/Rectangle.png'
import { usersAPI } from '../services/UserService'
import { FetchingError } from './FetchingError'

export function UserList() {
    const {data: users, error, isLoading} = usersAPI.useGetUsersQuery('')
    // console.log(users)
    // axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users').then(data => console.log(data))
    // axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all').then(data => console.log(data))
    const options = {
        method: 'GET',
        url: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users',
        headers: {'Content-Type': 'application/json', Prefer: 'code=200, dynamic=true'}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    return (
        <div>
            <UserContainer>
                <img src={avatar} alt='avatar' width='72px' height='72px' />
                <UserInfo>
                    <UserName>Алексей Миногаров</UserName>
                    <UserJob>Analyst</UserJob>
                </UserInfo>
            </UserContainer>
            {isLoading &&
                <UserContainer>
                    <LoadingImg/>
                    <UserInfo>
                        <LoadingName/>
                        <LoadingJob/>
                    </UserInfo>
                </UserContainer>
            }
            <UserContainer>
                <LoadingImg/>
                <UserInfo>
                    <LoadingName/>
                    <LoadingJob/>
                </UserInfo>
            </UserContainer>
            {error && <FetchingError/>}
            {users && users.items.map(user => (
                <UserContainer key={user.id}>
                    {/* <img src={user.avatarUrl} alt='avatar' width='72px' height='72px' /> */}
                    <UserImg src={user.avatarUrl} alt='avatar' />
                    <UserInfo>
                        <UserName>{user.firstName}</UserName>
                        <UserJob>{user.department}</UserJob>
                    </UserInfo>
                </UserContainer>
            ))}
        </div>
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

const UserImg = styled.img`    
    width: 72px;
    height: 72px;
    border-radius: 50%;
`

const LoadingImg = styled.div`
    width: 72px;
    height: 72px;
    background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
    border-radius: 50px;
`

const LoadingName = styled.div`
    width: 144px;
    height: 16px;
    background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
    border-radius: 50px;
`

const LoadingJob = styled.div`
    margin-top: 6px;
    width: 80px;
    height: 12px;
    background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
    border-radius: 50px;    
`
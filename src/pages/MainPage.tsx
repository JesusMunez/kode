import React from 'react'
import styled from 'styled-components'
import searchLogo from '../images/search.png'
import sortLogo from '../images/sort.svg'
import { UserList } from '../components/UserList'

let color = '#050510'

export function MainPage() {
  return (
    <Container>
      <Search onClick={() => console.log(1231)}>Поиск</Search>
      <SearchDiv>
        <img src={searchLogo} alt='' height={'20px'} width={'20px'}/>
        {/* <SearchImg/> */}
        <SearchInput placeholder='Введи имя, тег, почту...'/>
        <img src={sortLogo} alt='' height={'12px'} width={'20px'}/>
      </SearchDiv>
      <TabsContainer>
        <Tab>Все</Tab>
        <Tab>Designers</Tab>
        <Tab>Analysts</Tab>
        <Tab>Managers</Tab>
        <Tab>iOS</Tab>
        <Tab>Android</Tab>
      </TabsContainer>
      <HrLine/>
      <UserList/>
    </Container>
  )
}

const Container = styled.div`  
  padding: 0px 16px;  
`
const Search = styled.div`  
  margin-top: 16px;
  margin-left: 8px;
  font-weight: 700;
  font-size: 24px;
  color: #050510;  
`

const SearchDiv = styled.div`
  display: flex;  
  align-items: center;
  margin-top: 18px;  
  height: 24px;
  width: 99%;
  padding: 8px 12px;
  border-radius: 16px;
  background: #F7F7F8;
`

const SearchImg = styled.div`
  background-image: url(${searchLogo});
  width: 20px;
  height: 20px;  
`

const SearchInput = styled.input`
  margin-left: 10px;
  width: 100%;
  font-size: 15px;
  border: none;
  color: #050510;
  background: #F7F7F8;
  outline: none;  
  caret-color: #6534FF;
`

const HrLine = styled.hr`
  margin-top: 8px;
  height: 0.33px;
  border: none;
	border-top: 1px solid #C3C3C6;
`

const TabsContainer = styled.div`
  margin-top: 22px;
  margin-left: 4px;
  display: flex;
`

const Tab = styled.div`
  margin-left: 24px;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #97979B;
  cursor: pointer;
`
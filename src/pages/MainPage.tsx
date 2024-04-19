import React from 'react'
import styled from 'styled-components'
import { Button, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import MetzeImage from '../assets/01.jpg'

export default function MainPage():React.ReactElement {

  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate("/question")
  }

  return (
    <Wrapper>
      <Header>나는 어떤 피자일까?🍕</Header>
      <ContentWrapper>
        <Title>나에게 맞는 피자는?</Title>
        <LogoImage>
          <Image className="rounded-circle" src={MetzeImage} width={350} height={350}/>
        </LogoImage>
        <Desc>
          나의 피자 타입은?
        </Desc>
        <Desc>
          매 체 조 아
        </Desc>
        <Button className='btn-primary' onClick={handleClickButton} style={{fontSize:25, marginTop:20, marginBottom:20}}>테스트 시작하기</Button>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ivory;
  font-family: "omyu pretty";
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Header = styled.div`
  background: #388a55;
  font-size: 40pt;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
font-size: 30pt;
  display: flex;
  margin-top: 20px;
`;

const LogoImage = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Desc = styled.div`
  font-size: 20pt;
  display: flex;
  margin-top: 10px;
`;

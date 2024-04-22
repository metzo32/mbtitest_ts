import React from 'react'
import sty from '../styling'
import Header from '../components/Header'
import { Button, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import MainImage from '../assets/pizza/pizza_Main.jpg'

export default function MainPage():React.ReactElement {

  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate("/question")
  }

  return (
    <sty.Wrapper>
      <Header type='head' questionNumber={0}/>
      <sty.ContentWrapper>
        <sty.Title>나는 어떤 피자일까?</sty.Title>
        <sty.LogoImage>
          <Image className="rounded-circle" src={MainImage} width={380} height={380}/>
        </sty.LogoImage>
        <sty.Desc>
          피자방 생활 어언 3년.
        </sty.Desc>
        <sty.Desc>
          내가 어떤 피자인지 알아보자.
        </sty.Desc>
        <sty.smallWrapper>
          <sty.small>
            이 퀴즈를 귀여운 피자방 사람들에게 바칩니다.
          </sty.small>
          <sty.small>
          제작자: metze.
          </sty.small>
        </sty.smallWrapper>
        <sty.Button onClick={handleClickButton} style={{fontSize:25, marginTop:20, marginBottom:20}}>테스트 시작하기</sty.Button>
      </sty.ContentWrapper>
    </sty.Wrapper>
  )
}

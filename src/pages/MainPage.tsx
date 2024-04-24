import React from 'react'
import sty from '../styling'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

import MainImage from '../assets/pizza/pizza_Main.jpg'
// import transition from '../transition'

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
          <sty.RotatingImage className="rounded-circle main-pizza" alt="피자" src={MainImage} />
        </sty.LogoImage>
        <sty.Desc>
          피자방 생활 어언 3년.
        </sty.Desc>
        <sty.Desc>
          내가 어떤 피자인지 알아보자.
        </sty.Desc>
        <sty.smallWrapper>
          <sty.small>
            귀여운 피자방 사람들에게 바칩니다.
          </sty.small>
          <sty.small>
          제작자: metze.
          </sty.small>
        </sty.smallWrapper>
        <sty.ButtonGroup>
          <sty.Button onClick={handleClickButton}>테스트 시작</sty.Button>
        </sty.ButtonGroup>
      </sty.ContentWrapper>
      <div className="adfit" />
    </sty.Wrapper>
  )
}

// export default transition(MainPage)
import React from 'react'
import { ResultData } from '../stores/Result/ResultData'
import Header from '../components/Header'
import sty from '../styling'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { IResult } from '../stores/Result/types'
import ShareUrl from '../components/ShareURL'
import ThankYou from '../components/ThankYou'


export default function ResultPage():React.ReactElement {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const mbti = searchParams.get('mbti')
  
  const TestResult = ResultData.find((pizza: IResult) => pizza.my === mbti) 
  // (pizza: IResult) -> pizza의 타입을 명시
  const bestPizza = TestResult?.best
  const bestPizza2 = TestResult?.best2

  const bestPizzaImg = ResultData.find(pizza => pizza.name === bestPizza)
  const bestPizzaImg2 = ResultData.find(pizza => pizza.name === bestPizza2)

  const home = () => {
    navigate("/")
  }

  return (
    <sty.Wrapper>
      <Header type='head'/>
        <sty.ContentWrapper>
          <sty.ResultTitle>내 피자는...</sty.ResultTitle>
            <sty.StyledImage src={TestResult?.image} alt="피자" />
          <sty.ResultDesc>
            {TestResult?.name}입니다!
          </sty.ResultDesc>
          <sty.resultSmall>
            {TestResult?.desc}
          </sty.resultSmall>
          <sty.BestWrapper>
            <sty.BestDescWrapper>
              <sty.BestDesc>
              함께 먹으면 맛있는 피자는
              </sty.BestDesc>
              <sty.BestDesc>
                {bestPizza}와 {bestPizza2}입니다.
            </sty.BestDesc>
            </sty.BestDescWrapper>
            <sty.BestWrapperImage>
              <sty.BestPizzaImg src={bestPizzaImg?.image} alt="피자" />
              <sty.BestPizzaImg src={bestPizzaImg2?.image} alt="피자" />
            </sty.BestWrapperImage>
          </sty.BestWrapper>
            <sty.ButtonGroup>
              <sty.Button className="right-margin" onClick={home}>처음부터 다시하기</sty.Button>
              <ShareUrl />
              <ThankYou />
            </sty.ButtonGroup>
        </sty.ContentWrapper>
    </sty.Wrapper>
  )
}


// export default transition(ResultPage)
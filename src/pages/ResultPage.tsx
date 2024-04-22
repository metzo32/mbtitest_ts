import React from 'react'
import { ResultData } from '../stores/Result/ResultData'
import Header from '../components/Header'
import sty from '../styling'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { IResult } from '../stores/Result/types'
// import transition from '../transition'


export default function ResultPage():React.ReactElement {
  const [searchParams] = useSearchParams()
  const mbti = searchParams.get('mbti')
  
  const TestResult = ResultData.find((pizza: IResult) => pizza.my === mbti) 
  // (pizza: IResult) -> pizza의 타입을 명시
  const bestPizza = TestResult?.best
  const bestPizza2 = TestResult?.best2

  const bestPizzaImg = ResultData.find(pizza => pizza.name === bestPizza)
  const bestPizzaImg2 = ResultData.find(pizza => pizza.name === bestPizza2)

  return (
    <sty.Wrapper>
      <Header type='head'/>
        <sty.ContentWrapper>
          <sty.ResultTitle>내 피자는...</sty.ResultTitle>
          <img src={TestResult?.image} alt="피자" width={800} height={800}/>
          <sty.ResultDesc>
            {TestResult?.name}입니다!
          </sty.ResultDesc>
          <sty.resultSmall>
            {TestResult?.desc}
          </sty.resultSmall>
          <sty.BestWrapper>
            <sty.BestDesc>
              나와 잘 맞는 다른 피자는 {bestPizza}와 {bestPizza2}입니다.
            </sty.BestDesc>
            <sty.BestWrapperImage>
              <img src={bestPizzaImg?.image} width={300} height={300}/>
              <img src={bestPizzaImg2?.image} width={300} height={300}/>
            </sty.BestWrapperImage>
          </sty.BestWrapper>
        </sty.ContentWrapper>
    </sty.Wrapper>
  )
}


// export default transition(ResultPage)
import React from 'react'
import sty from '../styling'
import { ProgressBar } from 'react-bootstrap';
import { QuestionData } from '../stores/Question/QuestionData';

interface Props {
    type: string;
    questionNumber?: number; //MainPage에서는 questionNumber를 넘겨주지 않아 에러 발생. 물음표를 추가하면 속성이 제공되지 않을 수도 있음을 명시할 수 있다.
}

export default function Header(props: Props) { // 프로그레스바 또는 텍스트가 들어갈테니, props로 선언
  const percentage = props.questionNumber !== undefined
    ? Math.round((props.questionNumber / QuestionData.length) * 100)
    : 0; // 'props.questionNumber'가 undefined일 경우 0으로 설정
  
  return (
    <sty.HeaderWrapper>
        {props.type === "progress" 
            ? (<ProgressBar 
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              now={percentage} 
              label={`${percentage}%`} 
              style={{width: '100%', height: '100%'}}/>) 
            : (<div>피자방 피자 테스트🍕</div>)
        }
    </sty.HeaderWrapper>
  )
}
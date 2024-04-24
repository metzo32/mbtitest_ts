// Import React and other necessary libraries
import React, { useState, useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import sty from '../styling';
import Header from '../components/Header';

// Import QuestionData and types
import { QuestionData } from '../stores/Question/QuestionData';
import { IQuestion } from '../stores/Question/types';

// Shuffle function to randomize the question order
function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// QuestionPage component
export default function QuestionPage(): React.ReactElement {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<IQuestion[]>([]);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "NS", score: 0 },
    { id: "FT", score: 0 },
    { id: "PJ", score: 0 },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    setShuffledQuestions(shuffle([...QuestionData]));
  }, []);

  const handleClickAnswer = (answer: number, type: string) => {
    const newScore = totalScore.map(s =>
      s.id === type ? { id: s.id, score: s.score + answer } : s
    );

    setTotalScore(newScore);
    const nextQuestionNumber = questionNumber + 1;

    if (shuffledQuestions.length > nextQuestionNumber) {
      setQuestionNumber(nextQuestionNumber);
    } else {
      const mbti = newScore.reduce((acc, curr) =>
        acc + (curr.score >= 3 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), ""
      );

      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti })}`
      });
    }
  };

  return (
    <sty.Wrapper>
      <Header type='progress' questionNumber={questionNumber} />
      <sty.ContentWrapper>
        <sty.QuestionTitle>
          {shuffledQuestions[questionNumber]?.title}
        </sty.QuestionTitle>
        <sty.ButtonGroup>
          <sty.Button className="right-margin" onClick={() => handleClickAnswer(1, shuffledQuestions[questionNumber]?.type)}>
            {shuffledQuestions[questionNumber]?.answerA}
          </sty.Button>
          <sty.Button onClick={() => handleClickAnswer(0, shuffledQuestions[questionNumber]?.type)}>
            {shuffledQuestions[questionNumber]?.answerB}
          </sty.Button>
        </sty.ButtonGroup>
      </sty.ContentWrapper>
    </sty.Wrapper>
  );
}






// export default function QuestionPage():React.ReactElement {
//   const [questionNumber, setQuestionNumber] = useState(0);
//   const [totalScore, setTotalScore] = useState([
//    { id: "EI", score: 0},
//    { id: "NS", score: 0},
//    { id: "FT", score: 0},
//    { id: "PJ", score: 0},
//   ])

//   const navigate = useNavigate()
  
//   const handleClickAnswer = (answer: number, type: string) => {
//     // 현재 처리 중인 유형과 일치하는 요소만 업데이트
//     // s.id === type -> 넘겨준 type과 id의 값이 같으면
//     // 여기서 s는 위 useState문의 score
//     const newScore = totalScore.map( s => 
//       s.id === type ? { id: s.id, score: s.score + answer } : s
//     )

//     setTotalScore(newScore);

//     const nextQuestionNumber = questionNumber + 1;

//     if (QuestionData.length !== nextQuestionNumber) { // 마지막 문제가 아닐 경우
//       setQuestionNumber(nextQuestionNumber)
//     }
//     else {  // 마지막 문제일 경우
//       const mbti = newScore.reduce(
//         (acc, curr) => 
//         acc + (curr.score >= 3 
//           ? curr.id.substring(0, 1) // 3보다 크거나 같으면 왼쪽 글자, 작으면 오른쪽 글자 선택
//           : curr.id.substring(1, 2)
//         ), 
//         "" // 초기값 
//       )
//       console.log({mbti})

//       navigate({
//         pathname: "/result",
//         search: `?${createSearchParams({
//           mbti: mbti,
//         })}`
//       })
//     }
//   }
//   //주석
//   //   if(type === "EI") {
//   //     // 기존 스코어에 더한 새로운 스코어 값을 계산
//   //     const addScore = totalScore[0].score + answer
//   //     // 새로운 스코어를 반영한 새로운 객체 
//   //     const object = {id: "EI", score: addScore}
//   //     // 새로운 객체에 기존 토탈 스코어 반영
//   //     totalScore.splice(0, 1, object)
//   //   }

//   //   else if(type === "NS") {
//   //     const addScore = totalScore[0].score + answer
//   //     const object = {id: "NS", score: addScore}
//   //     totalScore.splice(0, 1, object)
//   //   }

//   //   else if(type === "TF") {
//   //     const addScore = totalScore[0].score + answer
//   //     const object = {id: "TF", score: addScore}
//   //     totalScore.splice(0, 1, object)
//   //   }

//   //   else {
//   //     const addScore = totalScore[0].score + answer
//   //     const object = {id: "PJ", score: addScore}
//   //     totalScore.splice(0, 1, object)
//   //   }
//   // }
//   //주석

//   return (
//     <sty.Wrapper>
//       <Header type='progress' questionNumber = {questionNumber}/>
//       <sty.ContentWrapper>
//         <sty.QuestionTitle>
//             {QuestionData[questionNumber].title}
//         </sty.QuestionTitle>
//         <sty.ButtonGroup>
//           <sty.Button className="right-margin" onClick={ () => handleClickAnswer(1, QuestionData[questionNumber].type)}>
//               {QuestionData[questionNumber].answerA}
//           </sty.Button>
//           <sty.Button onClick={ () => handleClickAnswer(0, QuestionData[questionNumber].type)}>
//               {QuestionData[questionNumber].answerB}
//           </sty.Button>
//         </sty.ButtonGroup>
//       </sty.ContentWrapper>
//     </sty.Wrapper>
//   )
// }


import React, { useState, useEffect } from 'react';
import sty from '../styling';
import { createSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import { QuestionData } from '../stores/Question/QuestionData';
import { IQuestion } from '../stores/Question/types';

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
    const newScore = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + answer } : item
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


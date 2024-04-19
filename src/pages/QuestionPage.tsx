import React from 'react'
import { QuestionData } from '../stores/Question/QuestionData'

export default function QuestionPage():React.ReactElement {
  return (
    <>
      <div>
          {QuestionData[0].title}
      </div>
      <div>
          {QuestionData[0].answerA}
      </div>
      <div>
          {QuestionData[0].answerB}
      </div>
    </>
  )
}

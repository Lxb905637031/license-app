import React, { FC } from 'react'

import './styles/question.scss'

interface IProps {
  url: string;
  question: string;
}

const Question: FC<IProps> = ({ 
  url,
  question
}) => {
  return (
    <div className="question-panel">
      {
        url &&
        <div className="img-wrap">
          <img src={ url } alt="" />
        </div>
      }
      <h2 className="q-title">题目： { question }</h2>
    </div>
  )
}

export default Question
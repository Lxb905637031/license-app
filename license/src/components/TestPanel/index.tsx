import React, { FC } from 'react'

import Question from './Question'
import Selector from './Selector'

import './styles/index.scss'

interface IProps {
  question: string;
  url: string;
  id: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  onNextQuestion: () => void;
}

const TestPanel: FC<IProps> = ({
  question,
  url,
  id,
  item1,
  item2,
  item3,
  item4,
  onNextQuestion
}) => {
  return (
    <div className="test-panel">
      <Question
        question={ question || '加载中...' }
        url={ url }
      />
      <Selector
        id={ id }
        item1={ item1 }
        item2={ item2 }
        item3={ item3 }
        item4={ item4 }
        onNextQuestion={ onNextQuestion }
      />
    </div>
  )
}

export default TestPanel
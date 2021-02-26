import React, { FC } from 'react'

import { subjects } from '../../data'
import { ISubjectData, SUBJECTS } from '../../typings'

import './index.scss'

interface IProps {
  curSubject: SUBJECTS;
  setCurrentSubject: (subject: SUBJECTS) => void;
}

const Subject: FC<IProps> = ({ 
  curSubject,
  setCurrentSubject
}) => {
  return (
    <div className="subject-panel">
      {
        subjects.map((subject: ISubjectData) => {
          return (
            <div className="item" key={subject.id}>
              <div
                className={['item-btn', subject.id === curSubject ? ' active' : ''].join('')}
                onClick={() => setCurrentSubject(subject.id)}
              >
                {subject.title}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Subject
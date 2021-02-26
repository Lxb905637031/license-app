import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import Header from '../components/Header/index'
import ResultPanel from '../components/ResultPanel/index'

import { IState, IUserAnswer } from '../typings' 

const Result: FC = () => {
    const userAnswers: IUserAnswer[] = useSelector((state: IState) => state.userAnswers)
    let flagId: number = 0

    return (
        <div className="container">
            <Header
                headerTitle="考试结果"
                iconShow={ true }
            />
            {
                userAnswers.map((item: IUserAnswer) => {
                    flagId++
                    return (
                        <ResultPanel
                            userAnswerItem={ item }
                            key={ flagId }
                        />
                    )
                })
            }
        </div>
    )
}

export default Result
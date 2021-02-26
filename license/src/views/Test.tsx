import React, { FC, useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import Header from '../components/Header/index'
import TestPanel from '../components/TestPanel/index'

import { useCurQuestion } from '../hooks'
import { IQueryData, IState } from '../typings'


import * as H from 'history'

enum HEADER_TITLE {
    testing = '考试中',
    loading = '试题加载中...'
}

interface IProps {
    history: H.History
}

const Test: FC<IProps> = ({
    history
}) => {
    const [headerTitle, setHeaderTitle] = useState<string>(HEADER_TITLE.loading)
    const [curIdx, setCurIdx] = useState<number>(0)
    const total: number = useSelector((state: IState) => state.total)
    const queryList: IQueryData[] = useSelector((state: IState) => state.queryList)
    const [curQuestion, setCurQuestion] = useCurQuestion()

    useEffect(() => {
        curQuestion && setHeaderTitle(HEADER_TITLE.testing)
    }, [curQuestion])

    useEffect(() => {
        setHeaderTitle(HEADER_TITLE.loading)
        setCurQuestion(queryList[curIdx])
    }, [queryList, curIdx, setCurQuestion])

    const onNextQuestion: () => void = useCallback(() => {
        if (curIdx <= total - 1) {
            setCurIdx((curIdx: number) => curIdx + 1)
        } else {
            history.push('/result')
        }
    },[curIdx, total, history])

    return (
        <div className="container">
            <Header
                headerTitle={ headerTitle }
                iconShow={ true }
            />
            <TestPanel
                {...curQuestion!}
                onNextQuestion= { onNextQuestion }
            />     
        </div>
    )
}

export default Test
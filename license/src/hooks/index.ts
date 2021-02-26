// 数据请求 -> queryList -> curIdx -> state -> curQuestion -> setCurQuestion
  // 定义一个函数
  // 1. 请求数据 -> 页面加载的时候 1次
  // 2. 返回curQuestion
  // 3. setCurQuestion
  // 自定义hooks

import { useEffect, useState } from "react"
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from "react-redux"
import { getQueries } from "../services"
import { IQueryData, IState, MODELS, SUBJECTS } from "../typings"
import * as types from '../store/actionTypes'

function useCurQuestion (): [IQueryData | null, any] {
  const dispatch: Dispatch = useDispatch()
  const subject: SUBJECTS = useSelector((state: IState) => state.curSubject)
  const model: MODELS = useSelector((state: IState) => state.curModel)
  const [ curQuestion, setCurQuestion ] = useState<IQueryData | null>(null)

  useEffect(() => {
    getQueries<IQueryData[]>({
      subject, model
    }).then((data) => {
      dispatch({ type: types.SET_QUERY_LIST, payload: data })
      setCurQuestion(data[0])
    });

    return () => {}
  }, [subject, model, dispatch]);

  return [curQuestion, setCurQuestion]
}

export {
  useCurQuestion
}
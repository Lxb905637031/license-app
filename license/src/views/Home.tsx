import React, { FC, useMemo } from 'react'

import Header from '../components/Header/index'
import Subject from '../components/Subject/index'
import Model from '../components/Model/index'
import Button from '../components/Button/index'

import { SUBJECTS, MODELS, IState } from '../typings' 
import { setCurrentSubject, setCurrentModel } from '../store/actions'

import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

const Home: FC = () => {
    // useSelector 获取state
    const modelShow: boolean = useSelector((state: IState) => state.modelShow)
    const curSubject: SUBJECTS = useSelector((state: IState) => state.curSubject)
    const curModel: MODELS = useSelector((state: IState) => state.curModel)
    // useDispatch 改变state
    const dispatch: Dispatch = useDispatch()

    // 缓存传入子组件的事件处理函数用useMemo可以缓存多个函数或者是属性
    // bindActionCreator主要是将函数与action绑定一次，内部自动使用dispatch派发action
    const actions = useMemo(() => {
        return bindActionCreators({
            _setCurrentSubject: setCurrentSubject,
            _setCurrentModel: setCurrentModel
        }, dispatch)
    },[dispatch])

    return (
        <div className="container">
            <Header
                headerTitle="驾照题库"
                iconShow={ false }
            />
            <Subject
                curSubject={ curSubject }
                setCurrentSubject={ actions._setCurrentSubject }
            />
            <Model
                curModel={ curModel }
                modelShow={ modelShow }
                setCurrentModel={ actions._setCurrentModel }

            />
            <Button
                btnTitle="开始考试"
                path="/test"
            />
        </div>
    )
}

export default Home
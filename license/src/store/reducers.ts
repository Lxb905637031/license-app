import initialState from './state';
import * as types from './actionTypes';
import { IQueryData, IState, IUserAnswer, MODELS, SUBJECTS } from '../typings';
import { TAction } from './actions';

function reducer(state: IState = initialState, action: TAction): IState {
  switch (action.type) {
    case types.SET_STATE_DEFAULT:
      return {
        ...state,
        queryList: [],
        userAnswers: [],
        curSubject: SUBJECTS.s1,
        curModel: MODELS.c1,
        modelShow: true,
        total: 5
      } as IState;
    case types.SET_CURRENT_SUBJECT:
      return {
        ...state,
        // 如果是科目四，那么驾照类型选择就需要隐藏
        modelShow: action.payload === SUBJECTS.s4 ? false : true,
        curSubject: action.payload as SUBJECTS
      } as IState;
    case types.SET_CURRENT_MODEL:
      return {
        ...state,
        curModel: action.payload as MODELS
      } as IState;
    case types.SET_QUERY_LIST:
      return {
        ...state,
        queryList: action.payload as IQueryData[]
      }
    case types.SET_USER_ANSWER:
      const userAnswers: IUserAnswer[] = [...state.userAnswers, action.payload as IUserAnswer];
      return {
        ...state,
        userAnswers
      }
    default:
      return state as IState;
  }
}

export default reducer;
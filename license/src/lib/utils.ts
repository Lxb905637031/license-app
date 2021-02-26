import { IQueryData, IUserAnswer } from '../typings'

// 生成用户答案
/**
 * 
 * @param queryList 考题集合
 * @param id 题目id
 * @param answer 用户选择的答案
 */
function formatUserAnswer(queryList: IQueryData[], id: string, answer: string): IUserAnswer {
    let userAnswer: IUserAnswer = {
        qid: '0',
        question: '',
        url: '',
        explains: '',
        userAnswer: '',
        rightAnswer: '',
        isRight: false
    }

    queryList.map((item: any) => {
        if (item.id === id) {
            userAnswer.qid = item.id
            userAnswer.question = item.question
            userAnswer.url = item.url
            userAnswer.explains = item.explains
            userAnswer.userAnswer = item[`item${answer}`]
            userAnswer.rightAnswer = item[`item[${item.answer}]`]
            userAnswer.isRight = item.answer === answer
        }

        return item
    })

    return userAnswer
}

export {
    formatUserAnswer
}
// 科目类型
enum SUBJECTS {
    s1 = 1,
    s4 = 4
}

// 驾照类型
enum MODELS {
    c1 = 'c1',
    c2 = 'c2',
    a1 = 'a1',
    a2 = 'a2',
    b1 = 'b1',
    b2 = 'b2'
}

// 请求参数
interface IHttpPostData {
    subject: SUBJECTS;
    model: MODELS;
}

// store state接口
interface IState {
    queryList: IQueryData[];
    userAnswers: IUserAnswer[];
    curSubject: SUBJECTS.s1;
    curModel: MODELS.c1;
    modelShow: boolean;
    total: number
}

// 考题信息
interface IQueryData {
    id: string; // 题目id
    question: string;   // 问题
    answer: string; // 答案
    item1: string;  // 选项1
    item2: string;  // 选项2
    item3: string;  // 选项3
    item4: string;  // 选项4
    explains: string;   // 选项4
    url: string // 图片地址
}

// 用户作答项信息
interface IUserAnswer {
    qid: string;    // 题目id
    question: string;   // 问题
    url: string;    // 图片地址
    explains: string;   // 答案解析
    userAnswer: string;     // 用户答案
    rightAnswer: string;    // 正确答案
    isRight: boolean;   // 是否正确
}

// 科目数据类型定义
interface ISubjectData {
    id: SUBJECTS;
    title: string;
}

// 驾照数据类型定义
interface IModelData {
    id: MODELS;
    title: string;
}

export {
    SUBJECTS,
    MODELS,
}

export type{
    IHttpPostData,
    IQueryData,
    IUserAnswer,
    IState,
    IModelData,
    ISubjectData
}

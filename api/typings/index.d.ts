import 'egg';

// 请求函数封装的参数
interface IHttpGetParams {
    url: string;
    data: any;
    success: (data: any) => void;
    fail: (err: any) => void
}

// 请求体参数
interface IHttpPostData {
    subject : SUBJECT,
    model: MODELS,
    testType? : TEST_TYPES
}

interface IQueryData {
    id: string;
    question: string;
    answer: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    explains: string;
    url: string;
  }

// 科目参数
const enum SUBJECT {
    s1 = 1,
    s4 = 4
}

// 驾照类型参数
const enum MODELS {
    c1 = 'c1',
    c2 = 'c2',
    a1 = 'a1',
    a2 = 'a2',
    b1 = 'b1',
    b2 = 'b2'
}

// 测试类型参数
const enum TEST_TYPES {
    rand = 'rand',
    order = 'order'
}


declare module 'egg' {
    IHttpGetParams,
    IHttpPostData,
    IQueryData,
    SUBJECT,
    MODELS,
    TEST_TYPES
}
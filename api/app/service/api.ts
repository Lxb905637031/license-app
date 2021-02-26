import { Service } from 'egg';
import { 
  IHttpPostData, 
  IQueryData, 
  SUBJECT,
  MODELS,
  TEST_TYPES,
  IHttpGetParams
} from '../../typings';

/**
 * Test Service
 */
export default class Api extends Service {
  public async getQueries({ subject, model } : IHttpPostData): Promise<IQueryData[]> {
    const { ctx } = this

    const _subject: SUBJECT = subject || SUBJECT.s1
    const _model: MODELS = model || MODELS.c1
    const _testType: TEST_TYPES = TEST_TYPES.rand

    // 向聚合数据API发起HTTP请求，GET请求，用对象的方式传递参数
    return ctx.httpGet(<IHttpGetParams>{
      url: '/query',
      data: <IHttpPostData> {
        subject: _subject,
        model: _model,
        testType: _testType
      },
      success(data) {
        return data
      },
      fail(err) {
        throw new Error('Request fail' + err)
      }
    })
  }
}

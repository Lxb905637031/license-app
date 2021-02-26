import { IHttpGetParams } from '../../typings'

const nodeFetch = require('node-fetch')

module.exports = {
    httpGet(options: IHttpGetParams) {
        const { url, data, success, fail } = options
        // 解构出工具函数集合utils和配置集合config
        const { utils, config } = this.app

        return nodeFetch(config.BASE_URL + url + utils.formatParams(data, config.APP_KEY))
                .then(res => res.json())
                .then(data => success(data))
                .catch(err => fail(err))
    }
}

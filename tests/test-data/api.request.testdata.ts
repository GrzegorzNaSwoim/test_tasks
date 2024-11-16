import {FetchOptions} from "../../src/task-3/api.get.request";

export const requestData: FetchOptions = {
    URL: 'https://dummy.restapiexample.com/api/v1/employees',
    METHOD: 'GET',
    HEADERS: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Cookie': 'humans_21909=1'
    }
}

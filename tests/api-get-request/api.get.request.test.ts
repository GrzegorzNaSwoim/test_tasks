import {expect} from "chai";
import {fetchData} from "../../src/task-3/api.get.request";
import {requestData} from "./test-data/api.request.testdata";

describe(`Api Get request for ${requestData.URL}`, (): void   => {

    it('Verify request status is successfully', async ():Promise<void> => {
        const response: any = await fetchData(requestData);
        expect(response.status).to.equal('success', `Get response for endpoint ${requestData.URL} should be
         "status":"success"`)
    })
})
import axios from 'axios';
import {BASE_URL} from '../utils/constants';

export class BackendAPI {
  public async getProductsList(
    callback,
    searchParam: string = '',
    pageNum: number = 0,
  ) {
    const endpoint = this.createEndpoint();
    const params = {params: {q: searchParam, pageNum}};
    try {
      const result = await endpoint.get(BASE_URL, params);
      return result;
    } catch (error) {
      console.log(`Error fecthing data: ${error}`);
    }
  }

  private createEndpoint() {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return axios.create({
      headers,
      timeout: 15000,
    });
  }
}

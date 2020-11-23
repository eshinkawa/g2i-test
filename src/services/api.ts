import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export class BackendAPI {
  public async getList(callback: (error?: any, response?: any) => void) {
    console.log('calling getLIst');
    const endpoint = this.createEndpoint();
    try {
      const res = await endpoint.get(BASE_URL);
      callback(null, res.data);
    } catch (error) {
      callback(error);
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

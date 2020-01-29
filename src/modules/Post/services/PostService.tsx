import Http from '@/services/Http'
import { API_POST } from '../constants/postEndpoints'

export default class PostService {
  protected http: Http

  constructor(http: Http) {
    this.http = http
  }

  public async get() {
    try {
      return await this.http.get(API_POST)
    } catch (error) {
      throw error
    }
  }
}

import Http from '@/services/Http'

export default class PostService {
  protected http: Http

  constructor(http: Http) {
    this.http = http
  }

  public async get(url: string) {
    try {
      return await this.http.get(url)
    } catch (error) {
      throw error
    }
  }
}

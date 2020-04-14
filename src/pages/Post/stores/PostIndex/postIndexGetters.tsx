import { PostIndexState } from '../../typings/postIndexTypings'

export default {
  authorList: (state: PostIndexState) => state.authorList,
  postList: (state: PostIndexState) => state.postList
}

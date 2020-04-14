import { PostIndexState } from '../../contracts/postIndexContracts'

export default {
  authorList: (state: PostIndexState) => state.authorList,
  postList: (state: PostIndexState) => state.postList
}

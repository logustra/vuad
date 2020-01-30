import { PostListState } from '../../contracts/postListContracts'

export default {
  authorList: (state: PostListState) => state.authorList,
  postList: (state: PostListState) => state.postList
}

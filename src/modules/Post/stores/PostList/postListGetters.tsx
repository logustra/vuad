import { PostListState } from '../../contracts/postListContracts'

export default {
  postList: (state: PostListState) => state.postList,
  authorList: (state: PostListState) => state.authorList,
}

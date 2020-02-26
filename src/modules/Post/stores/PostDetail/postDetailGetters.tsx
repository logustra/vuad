import { PostDetailState } from '../../contracts/postDetailContracts'

export default {
  postDetail: (state: PostDetailState) => state.postDetail,
  postCommentList: (state: PostDetailState) => state.postCommentList
}

import { PostDetailState } from '../../typings/postDetailTypings'

export default {
  postDetail: (state: PostDetailState) => state.postDetail,
  postCommentList: (state: PostDetailState) => state.postCommentList
}

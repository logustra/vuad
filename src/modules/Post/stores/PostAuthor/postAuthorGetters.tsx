import { PostAuthorState } from '../../contracts/postAuthorContracts'

export default {
  authorDetail: (state: PostAuthorState) => state.authorDetail,
  postAuthor: (state: PostAuthorState) => state.postAuthor
}

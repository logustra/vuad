export interface CommentsState {
  data: CommentsDataModel[],
  isFetching: boolean,
  isError: Error
}

export interface CommentsDataModel {
  postId: number,
  id: number,
  name: string,
  body: string
}

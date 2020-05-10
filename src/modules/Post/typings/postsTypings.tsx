export interface PostsState {
  data: PostsDataModel[],
  isFetching: boolean,
  isError: Error
}

export interface PostsDataModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

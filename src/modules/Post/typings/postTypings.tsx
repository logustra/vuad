export interface PostState {
  data: PostDataModel[],
  isFetching: boolean,
  isError: Error
}

export interface PostDataModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

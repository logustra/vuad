export interface PostIndexState {
  data: PostIndexModel[],
  isFetching: boolean,
  isError: Error
}

export interface PostIndexModel {
  id: number,
  title: string,
  body: string
}

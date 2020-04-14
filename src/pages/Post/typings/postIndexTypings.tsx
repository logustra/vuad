export interface PostIndexState {
  postList: {
    data: PostListModel[],
    isFetching: boolean,
    isError: Error
  },

  authorList: {
    data: AuthorListModel[],
    isFetching: boolean,
    isError: Error
  }
}

export interface PostListModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface AuthorListModel {
  id: number,
  name: string
}

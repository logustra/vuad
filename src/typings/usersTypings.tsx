export interface UsersState {
  data: UsersDataModel[],
  isFetching: boolean,
  isError: Error
}

export interface UsersDataModel {
  id: number,
  name: string,
  email: string
}

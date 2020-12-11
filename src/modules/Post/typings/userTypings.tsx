export interface UserState {
  data: UserDataModel | {},
  isFetching: boolean,
  isError: boolean | Error
}

export interface UserDataModel {
  name: string,
  email: string,
  website: string
}

export interface UserState {
  data: UserDataModel,
  isFetching: boolean,
  isError: {}
}

export interface UserDataModel {
  name: string,
  email: string,
  website: string 
}

export interface ExampleState {
  data: ExampleDataModel[],
  isFetching: boolean,
  isError: boolean
} 

export interface ExampleDataModel {
  id: number,
  title: string
} 

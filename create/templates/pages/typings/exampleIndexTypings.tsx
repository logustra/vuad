export interface ExampleIndexState {
  data: ExampleIndexModel[],
  isFetching: boolean,
  isError: boolean
} 

export interface ExampleIndexModel {
  id: number,
  title: string
} 

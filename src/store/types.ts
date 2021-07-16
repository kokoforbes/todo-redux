//standard interfaces 
//types are declared here
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface Store {
  todo: Todo[],
  newTodo: string
}
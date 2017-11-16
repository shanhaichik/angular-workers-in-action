export interface ITodo {
  id: number;
  title: string;
  description: string;
  url: string;
  done: string;
}

export interface IList {
  list: ITodo[];
}

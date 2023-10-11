export interface ITask {
  title: string;
  description: string;
  status: boolean;
}

export interface ITask2 {
  tasks: ITask[];
  id: number;
}

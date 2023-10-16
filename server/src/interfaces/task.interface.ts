export enum TASK_STATUS {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface TaskInterface {
  id: string
  createdBy: string
  title: string
  description: string
  status: TASK_STATUS
}

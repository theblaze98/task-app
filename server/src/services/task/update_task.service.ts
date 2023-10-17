import { TASK_STATUS, TaskInterface } from '@/interfaces'
import { TaskModel } from '@/models'

type UpdateTaskData = {
	title?: string
	descrption?: string
	status?: TASK_STATUS
}

export const updateTask = async (
	id: string,
	task: UpdateTaskData
): Promise<TaskInterface | null> => {
	return await TaskModel.findOneAndUpdate({ id }, { task })
}

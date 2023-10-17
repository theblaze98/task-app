import { TaskInterface } from '@/interfaces'
import { TaskModel } from '@/models'

export const getTaskService = async (
	id: string
): Promise<TaskInterface | null> => {
	return await TaskModel.findOne({ id })
}

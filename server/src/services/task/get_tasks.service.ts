import { TaskInterface } from '@/interfaces'
import { TaskModel } from '@/models'

export const getTasks = async (createdBy: string): Promise<TaskInterface[]> => {
	return await TaskModel.find({ createdBy })
}

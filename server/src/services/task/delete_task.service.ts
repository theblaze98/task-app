import { TaskInterface } from '@/interfaces'
import { TaskModel } from '@/models'

export const deleteTask = async (id: string): Promise<TaskInterface | null> => {
	return await TaskModel.findOneAndDelete({ id })
}

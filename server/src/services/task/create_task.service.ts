import { TaskInterface } from '@/interfaces'
import { TaskModel } from '@/models'

export const createTask = async (task: TaskInterface) => {
	const newTask = new TaskModel(task)
	return await newTask.save()
}

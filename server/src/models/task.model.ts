import { Schema, model } from 'mongoose'
import { TASK_STATUS, TaskInterface } from '@/interfaces'

const TaskSchema = new Schema<TaskInterface>({
  id: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: TASK_STATUS.PENDING
  }
}, { timestamps: true })

export default model('task', TaskSchema)

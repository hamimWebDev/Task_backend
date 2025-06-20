import { ITask } from './task.interface';
import { Task } from './task.model';

const createTask = async (taskData: ITask): Promise<ITask> => {
  const task = await Task.create(taskData);
  return task;
};

const getTaskById = async (taskId: string): Promise<ITask | null> => {
  return Task.findOne({ taskId });
};
const getAllTask= async (): Promise<ITask | null> => {
  return Task.findOne();
};

const updateTaskById = async (taskId: string, updateData: Partial<ITask>): Promise<ITask | null> => {
  return Task.findOneAndUpdate({ taskId }, updateData, { new: true });
};

const deleteTaskById = async (taskId: string): Promise<ITask | null> => {
  return Task.findOneAndUpdate({ taskId }, { isDeleted: true }, { new: true });
};

export const TaskServices = {
  createTask,
  getTaskById,
  getAllTask,
  updateTaskById,
  deleteTaskById,
}; 
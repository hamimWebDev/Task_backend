import QueryBuilder from '../../builder/QueryBuilder';
import { ITask } from './task.interface';
import { Task } from './task.model';

const createTask = async (taskData: ITask): Promise<ITask> => {
  const task = await Task.create(taskData);
  return task;
};

const getTaskById = async (id: string): Promise<ITask | null> => {
  return Task.findById(id);
};

interface IGetAllTaskResponse {
  meta: any;
  result: ITask[];
}

const getAllTask = async (query: Record<string, any>): Promise<IGetAllTaskResponse> => {
  const productQuery = new QueryBuilder(Task.find({ isDeleted: false }), query)
    .search(['title'])
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();
  return {
    meta,
    result,
  };
};

const updateTaskById = async (id: string, updateData: Partial<ITask>): Promise<ITask | null> => {
  return Task.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteTaskById = async (id: string): Promise<ITask | null> => {
  return Task.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

export const TaskServices = {
  createTask,
  getTaskById,
  getAllTask,
  updateTaskById,
  deleteTaskById,
}; 
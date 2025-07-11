import httpStatus from "http-status";
import { Request, Response } from 'express';
import { TaskServices } from './task.services';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

const createTask = async (req: Request, res: Response) => {
  try {
    const task = await TaskServices.createTask(req.body);
    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
    });
  }
};

const getAllTask= catchAsync(async (req, res): Promise<void> => {
  const result = await TaskServices.getAllTask(req.query);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Tasks fetched successfully",
      data: result    
  });
});

const getSingleTask = catchAsync(async (req, res): Promise<void> => {
  const { taskId } = req.params;
  const result = await TaskServices.getTaskById(taskId);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single Task fetched successfully",
      data: result,
  });
});

const deleteTask = catchAsync(async (req, res): Promise<void> => {
  const { taskId } = req.params;
  const result = await TaskServices.deleteTaskById(taskId);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Task deleted successfully",
      data: result,
  });
});

const updateTask = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const { taskId } = req.params;
  const updateData = req.body;
  const updatedTask = await TaskServices.updateTaskById(taskId, updateData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task updated successfully',
    data: updatedTask,
  });
});

export const TaskController = {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
}; 
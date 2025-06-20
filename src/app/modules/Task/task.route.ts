import express from 'express';
import { TaskController } from './task.controller';

const router = express.Router();

router.post('/create-task', TaskController.createTask);
router.get('/', TaskController.getAllTask);
router.get('/:taskId', TaskController.getSingleTask);
router.patch('/:taskId', TaskController.updateTask);
router.delete('/:taskId', TaskController.deleteTask);

export const TaskRoutes = router; 
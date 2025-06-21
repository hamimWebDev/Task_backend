import { Schema, model, Query } from 'mongoose';
import { ITask } from './task.interface';

const taskSchema = new Schema<ITask>(
  {
   
    title: { type: String, required: true },
    userId: { type: String, required: true },
    description: { type: String, required: true },
    endDate: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ['Ongoing', 'Pending', 'InProgress', "Done"],
      default: 'pending'
    },
    category: { type: String, required: true, enum: ["Arts and Craft", "Marketing", "Meetings", "Family", "Sport", "Friends", "Meditation"] },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);



export const Task = model<ITask>('Task', taskSchema);

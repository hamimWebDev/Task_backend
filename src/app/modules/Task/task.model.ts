import { Schema, model, Query } from 'mongoose';
import { ITask } from './task.interface';

const taskSchema = new Schema<ITask>(
  {
   
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    endDate: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'In-progress', 'Done', "Ongoing", "Collborative Task"],
      default: 'pending'
    },
    categories: { type: String, required: true, enum: ["Arts and Craft", "Nature", "Family", "Sport", "Friends", "Meditation"] },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// 👇 Automatically filter out soft-deleted tasks
taskSchema.pre<Query<any, any>>(/^find/, function (next) {
  this.where({ isDeleted: false });
  next();
});

export const Task = model<ITask>('Task', taskSchema);

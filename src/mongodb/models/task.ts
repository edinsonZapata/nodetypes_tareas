import { model, Schema } from 'mongoose';
import { TaskDocument } from "../documents";
const {Types} = Schema;

const TaskSchema = new Schema(
    {
        theme: {
            type: Types.String,
            required: true
        },
        description: {
            type: Types.String,
            required: true
        },
        priority:{
            type: Types.String,
            required: true
        },
        status: {
            type: Types.String,
            enum: ['EARRING', 'RESOLVED'],
            default: 'EARRING'
        },
        assessment: {
            type: Types.String,
            required:false
        },
        estimatedTime:{
            type: Types.Date,
            required: false
        },
        managers:[
            {
                type: Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        timestamps: true,
    }
);

export const Task = model<TaskDocument>("Task", TaskSchema);
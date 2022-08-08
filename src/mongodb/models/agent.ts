import { Schema, model } from 'mongoose'
import {AgentDocument} from "../documents";
const { Types } = Schema;

const AgentSchema = new Schema(
    {
        user: {
            type: Types.ObjectId,
            ref: 'User',
            required: true,
        },
        subscriptions: [Types.String],
        projects: [
            {
                type: Types.ObjectId,
                ref: 'Project',
            },
        ],
        disable: {
            type: Types.Boolean,
            default: false,
            required: true,
        },
        extraPermissions:{
            type: Types.Mixed,
            required: false,
        },
        maximumNumberOfConversations: {
            type: Types.Number,
            default: 0,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Agent = model<AgentDocument>('Agent', AgentSchema);

import {model, Schema, SchemaDefinition} from "mongoose";
import {UserDocument} from "../documents";
const {Types} = Schema;

export const UserIdentityInfoSchemaDefinition: SchemaDefinition = {
    name: {
        type: {
            firstName: {
                type: Types.String,
                required: true,
            },
            lastName: {
                type: Types.String,
                default: "",
            },
        },
        required: true,
    },
    username: {
        type: Types.String,
        required: true,
    },
};

const UserSchema = new Schema(
    {
        ...UserIdentityInfoSchemaDefinition,
        role: {
            type: Types.String,
            enum: ['BASE', 'AGENT', 'ADMIN'],
            default: 'BASE',
        },
        deleted: {
            type: Types.Boolean,
            default: false,
            required: true,
        },
        lastLogin: {
            type: Types.Date,

        },
        agentStatus: {
            type: Schema.Types.String
        },
        lastLogout: {
            type: Types.Date,

        }
    },
    {
        timestamps: true,
    }
);

export const User = model<UserDocument>('User', UserSchema);
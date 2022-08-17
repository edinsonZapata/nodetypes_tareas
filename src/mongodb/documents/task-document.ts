import {ITimestamp} from "../interfaces";
import { StatusTask } from "../../enums";
import {UserDocument} from "./user-document";
import { Document } from "mongoose";

export interface TaskDocument extends ITimestamp {
    theme: string,
    description: string,
    priority: string,
    status: StatusTask,
    assessment: string,
    estimatedTime: Date,
    managers: UserDocument[]
}
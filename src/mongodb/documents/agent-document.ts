import { Document } from 'mongoose'
import {ITimestamp} from "../interfaces";
import {UserDocument} from "./user-document";

export interface AgentDocument extends Document, ITimestamp {
    user: UserDocument
    subscriptions: string[]
    disable: boolean,
    maximumNumberOfConversations?: number
}
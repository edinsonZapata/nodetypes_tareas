import {Document} from "mongoose";
import {ITimestamp} from "../interfaces";
import {TypeDocuments, UserRole} from "../../enums";

export interface RegistryDocument extends Document, ITimestamp {
    name: string
    lastName: string
    email: string
    userRole:UserRole
    typeDocument: TypeDocuments
    numberDocument: number
    password: string
    urlValidityDate: Date;
}
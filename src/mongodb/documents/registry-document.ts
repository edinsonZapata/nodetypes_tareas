import {Document} from "mongoose";
import {ITimestamp} from "../interfaces";
import {TypeDocuments} from "../../enums/type-documents";
import {UserRole} from "../../enums/user-role"

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
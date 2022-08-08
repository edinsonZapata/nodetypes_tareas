import {Document} from "mongoose";
import {ITimestamp} from "../interfaces";
import {TypeDocuments} from "../../enums";

export interface RegistryDocument extends Document, ITimestamp {
    name: string
    lastName: string
    email: string
    numberPhone: string
    typeDocument: TypeDocuments
    numberDocument: string
    companyName: string
    projectName: string
    licensing: string
    companyType: string
    urlValidityDate: Date
    phoneCountryCode: string
    licensingValidityDate: Date
}
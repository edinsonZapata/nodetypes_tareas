import { model, Schema } from 'mongoose';
import { RegistryDocument } from "../documents";
const {Types} = Schema;

const RegistrySchema = new Schema(
    {
        name: {
            type: Types.String,
            required: false
        },
        lastName: {
            type: Types.String,
            required: false
        },
        email:{
            type: Types.String,
            required: true
        },
        numberPhone: {
            type: Types.String,
            required: true
        },
        groupId: {
            type: Types.ObjectId,
            ref: 'Company',
            required:false
        },
        typeDocument:{
            type: Types.String,
            required: false
        },
        numberDocument:{
            type: Types.String,
            required: false
        },
        phoneCountryCode:{
            type: Types.String,
            required: false
        },
        companyName: {
            type: Types.String,
            required: false
        },
        companyType: {
            type: Types.String,
            required: false
        },
        projectName:{
            type: Types.String,
            required: false
        },
        urlValidityDate:{
            type: Types.Date,
            required: false
        },
        licensingValidityDate:{
            type: Types.Date,
            required: false
        },
        licensing: {
            type: Types.String,
            required: false
        },
        flowData:{
            type: Types.Array,
            required: false
        },
        billingInfo:{
            type: Types.Mixed,
            required: false
        },
        urlParameters:{
            type: Types.Mixed,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

export const Registry = model<RegistryDocument>("Registry", RegistrySchema);
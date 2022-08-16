import { model, Schema} from 'mongoose';
import { RegistryDocument } from "../documents";
const {Types} = Schema;


const RegistrySchema = new Schema(
    {
        
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
        userRole:{
            type: Types.String,
            enum: ['BASE','ADMIN'],
            default: 'BASE'
        },
        email:{
            type: Types.String,
            required: true
        },
        typeDocument:{
            type: Types.String,
            enum: ['CC','CE','DIE','TE','RC','PP','TI','NIT','NIT_EXTRANJERO'],
            required: true
        },
        numberDocument:{
            type: Types.Number,
            required: true
        },
        password:{
            type: Types.String,
            required: true
        },
        urlValidityDate:{
            type: Types.Date,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

export const Registry = model<RegistryDocument>("Registry", RegistrySchema);
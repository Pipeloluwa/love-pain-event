import mongoose, {Schema} from "mongoose";


interface ItokenSchema {
    token: string;
    expired: boolean;
    timestamps: boolean;
}

const tokenSchema= new Schema<ItokenSchema>(
    {
        token: {type: String, required: true, unique: true},
        expired: {type: Boolean, required: true},
    },

    {
        timestamps: true
    }
);


const TokenModel= mongoose.models.TokenModel || mongoose.model("TokenModel", tokenSchema, "TokenModel")
export default TokenModel;

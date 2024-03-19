import { Schema, model } from 'mongoose';

// this is our interface for signing up a user.
interface IUserSignup {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
}


const UserSchema4Signup = new Schema<IUserSignup>({
    firstname: { type: String, required: true }, 
    lastname: {type: String}, // we could keep lastname optional
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
});

export const User = model<IUserSignup>('User', UserSchema4Signup);
import { mongoClient, mongoDbConfig } from "../config"
import { NextResponse } from "next/server"
import {User} from "../../../models/model4UserSignup"

export async function POST(r: Request) {

    try {

        // getting data from the Signup/page.tsx
        const formdata = await r.json()
        const signupUser = await User.create(formdata)

        // connect to the mongoDB and navigate to the correct collection inside the right DB.
        const connection = await mongoClient.connect()
        // console.log(`connection is: ${connection}.`)

         mongoClient.db(mongoDbConfig.menstruEaseDB).command({ping: 1}) // just to check if we re connected to the db.

        const menstruEaseDB = mongoClient.db(mongoDbConfig.menstruEaseDB)
        const menstruEaseColl = menstruEaseDB.collection(mongoDbConfig.menstruEaseCollection)
        const result = await menstruEaseColl.insertOne(signupUser)

        if (result.acknowledged) {
            return NextResponse.json({ message: "user added ✅"},{ status: 200})
        } 
         // we got to return a response otherwise the next.js's api will complaint about it in the console.
    
        // look what happens when you simply skip|comment the return statement.

    } catch (error) {
        console.log(error)
        await mongoClient.close()
        return NextResponse.json({ message: "user not added ❌"}, {status: 500})
    } 

}
import { MongoClient, ServerApiVersion } from "mongodb"

export const mongoDbConfig = {
    menstruEaseDB: "period-tracker",
    menstruEaseCollection: "menstruease",
    
}

// lets get the uri for our mongoDB. we need to pass it to the MongoClient while instantiating.
const uri = process.env.MONGO_URL || ""

// if its empty string, 
if (uri == "") {
    console.log("couldnt read MONGO_URL")
}

// reuse this client whenever you need to interact with the mongoDB.
export const mongoClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})



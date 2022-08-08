import {connect, Connection, connection, disconnect, Mongoose} from "mongoose";

export const mongodbConnectionString: string | undefined = process.env.MONGODB_CONNECTION_STRING;
export const mongoDbConnection: Connection = connection;

let connectionTimeout: NodeJS.Timeout | null = null;

export const disconnectFromMongoDB = (): Promise<any> => {
    if(connectionTimeout) {
        clearTimeout(connectionTimeout)
    }
    return disconnect().then(() => console.log("[MONGODB CONFIGURATION][INFO] Successfully disconnected from MongoDB"));
};

export const connectToMongoDB = async (): Promise<Mongoose | void> => {
    if(mongodbConnectionString) {
        return new Promise((resolve, reject) => {

            mongoDbConnection.removeAllListeners();

            if(mongoDbConnection.readyState === 1) {
                console.warn('[MONGODB CONFIGURATION][ALERT] MongoDB is already connected');
                resolve();
                return;
            }

            let connected = false;

            mongoDbConnection.on('connected', () => {
                connected = true;
                if(connectionTimeout) {
                    clearTimeout(connectionTimeout)
                }
                console.log('[MONGODB CONFIGURATION][INFO] Mongo Connection established');
                resolve()
            });

            const options = {
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }

            connect(mongodbConnectionString, options)
                .catch((error) => reject(error));

            connectionTimeout = setTimeout(() => {
                if(!connected) {
                    reject("[TIMEOUT] Cannot connect to MongoDB");
                    disconnectFromMongoDB();
                }
            }, 10000)

        })
    } else {
        return new Promise((resolve, reject) => reject("The MONGODB_CONNECTION_STRING environment variable is required"))
    }
};
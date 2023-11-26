import {Client} from "cassandra-driver";
import { Post } from "../model/post";
import { CREATE_POST_SCRIPT, DB_INIT_SCRIPT, GET_POST_ANALYTICS } from "../config";

var databaseClient = new Client({
    contactPoints: ['127.0.0.1'], // Replace with your Cassandra cluster's IP addresses
    localDataCenter: 'datacenter1', // Replace with your data center name
    keyspace: 'system_auth', // Replace with the keyspace you want to connect to
  });
  

// Connect to the Cassandra cluster
export async function initDatabase(){
    try{
        await databaseClient.connect();
        await databaseClient.execute(DB_INIT_SCRIPT);
    }catch (error) {
        console.error(error);
        console.log("Failed to connect to db. Exiting");
    }
}


export async function savePostToDB(post: Post){
    await databaseClient.execute(CREATE_POST_SCRIPT, post, { prepare : true });
}


export async function getPostAnalytics(id: string) {
    var result = await databaseClient.execute(GET_POST_ANALYTICS, [id]);
    return result.first();
}


// //TODO: convert this into environment variable and these as default value
// export const PORT = 6000
// export const CASSANDRA_IPs = ["0.0.0.0"]
// export const CASSANDRA_KEYSPACE = "talkshop"
// export const TABLE_NAME = "POSTS"

// export const DB_INIT_SCRIPT = `CREATE TABLE IF NOT EXISTS ${CASSANDRA_KEYSPACE}.${TABLE_NAME} ( 
//     id UUID PRIMARY KEY,
//     content TEXT,
//     updated_at TIMESTAMP,
//     created_at TIMESTAMP,
//     average_word_length FLOAT,
//     total_word_count INT
//   );`;

// export const CREATE_POST_SCRIPT = `INSERT INTO ${CASSANDRA_KEYSPACE}.${TABLE_NAME} (id, content, updated_at, created_at, average_word_length, total_word_count) VALUES (?, ?, toTimeStamp(now()), toTimeStamp(now()), ?, ?);`;

// export const GET_POST_ANALYTICS = `SELECT total_word_count, average_word_length FROM  ${CASSANDRA_KEYSPACE}.${TABLE_NAME} WHERE id = ?;`



export const PORT = process.env.PORT || 6000;
export const CASSANDRA_IPs = process.env.CASSANDRA_IPs ? process.env.CASSANDRA_IPs.split(',') : ["0.0.0.0"];
export const CASSANDRA_KEYSPACE = process.env.CASSANDRA_KEYSPACE || "talkshop";
export const TABLE_NAME = process.env.TABLE_NAME || "POSTS";



// Define the default scripts using the environment variables
export const DB_INIT_SCRIPT = `
  CREATE TABLE IF NOT EXISTS ${CASSANDRA_KEYSPACE}.${TABLE_NAME} ( 
    id TEXT PRIMARY KEY,
    content TEXT,
    updated_at TIMESTAMP,
    created_at TIMESTAMP,
    average_word_length FLOAT,
    total_word_count INT
  );
`;

export const CREATE_POST_SCRIPT = `
  INSERT INTO ${CASSANDRA_KEYSPACE}.${TABLE_NAME} (id, content, updated_at, created_at, average_word_length, total_word_count)
  VALUES (?, ?, toTimeStamp(now()), toTimeStamp(now()), ?, ?);
`;

export const GET_POST_ANALYTICS = `
  SELECT total_word_count, average_word_length
  FROM ${CASSANDRA_KEYSPACE}.${TABLE_NAME}
  WHERE id = ?;
`;

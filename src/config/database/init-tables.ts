import { DatabaseConfig } from './database-config';
import { CREATE_TABLE_USERS } from './users-schema';
import { CREATE_TABLE_POSTS } from './posts-schema';
import { CREATE_TABLE_COMMENTS } from './comment-schema';
import { CREATE_TABLE_LIKES } from './likes-schema';

const initTables = async (): Promise<void> => {
  try {
    // --> 1) get instance form db
    const databaseConfig: DatabaseConfig = new DatabaseConfig();

    // --> 2) open connection
    const connection = await databaseConfig.getPool().connect();

    // --> 3) create tables
    const createTableUsersResult = await connection.query(CREATE_TABLE_USERS);
    const createTablePostsResult = await connection.query(CREATE_TABLE_POSTS);
    const createTableCommentResult = await connection.query(
      CREATE_TABLE_COMMENTS
    );
    const createTableLikesResult = await connection.query(CREATE_TABLE_LIKES);

    // --> 4) release connection
    connection.release();
  } catch (error) {
    console.log(`init database error: ${error}`);
  }
};

export { initTables };

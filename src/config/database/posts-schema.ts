const CREATE_TABLE_POSTS: string = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  user_id UUID NOT NULL,
	CONSTRAINT user_post_fk FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);`;

// const CREATE_TABLE_POSTS: string = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; CREATE TABLE posts (
//   id UUID DEFAULT uuid_generate_v4(),
//   title VARCHAR(255) NOT NULL,
//   body TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT NOW(),
//   updated_at TIMESTAMP DEFAULT NOW(),
//   user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
//   PRIMARY KEY (id)
// );`;

export { CREATE_TABLE_POSTS };

const CREATE_TABLE_COMMENTS: string = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  user_id UUID NOT NULL,
  CONSTRAINT user_comment_fk FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID NOT NULL,
  CONSTRAINT post_comment_fk FOREIGN KEY (post_id)
    REFERENCES posts(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);`;

export { CREATE_TABLE_COMMENTS };

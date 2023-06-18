const CREATE_TABLE_LIKES: string = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; CREATE TABLE IF NOT EXISTS likes (
  id UUID DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  update_at TIMESTAMP DEFAULT NOW(),
	user_id UUID NOT NULL,
  CONSTRAINT user_like_fk FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE,
  post_id UUID NOT NULL,
  CONSTRAINT user_post_fk FOREIGN KEY (post_id)
    REFERENCES posts(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);`;

export { CREATE_TABLE_LIKES };

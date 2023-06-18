interface User {
  id?: string;
  username: string;
  email: string;
  passwordHash: string;
  gender: 'male' | 'female';
  created_at?: string;
  updated_at?: string;
}

export { User };

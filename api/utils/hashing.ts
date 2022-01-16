import bcrypt from 'bcrypt';

// eslint-disable-next-line import/prefer-default-export
export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

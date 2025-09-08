import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (plainPassword: string): Promise<string> => {
  return bcrypt.hash(plainPassword, SALT_ROUNDS);
};

export const verifyPassword = async (
  plainPassword: string,
  hashPassword: string
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashPassword);
};

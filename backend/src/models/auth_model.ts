import { RegisterInput } from "../types/user";
import { hashPassword } from "../utils/bcrypt";
import User from "./schema/UserSchema";

export const registerUser = async (data: RegisterInput) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("使用者已存在");
  }

  const hashedPassword = await hashPassword(data.password);

  const newUser = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });

  return newUser;
};

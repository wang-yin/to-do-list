import { RegisterInput, LoginInput } from "../types/user";
import { hashPassword, verifyPassword } from "../utils/bcrypt";
import User from "./schema/UserSchema";
import { signToken } from "../utils/token";

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

export const loginUser = async (data: LoginInput) => {
  const findUser = await User.findOne({ email: data.email });
  if (!findUser) {
    throw new Error("帳號密碼錯誤");
  }

  const isMatch = await verifyPassword(data.password, findUser.password);
  if (!isMatch) {
    throw new Error("帳號密碼錯誤");
  }

  const payload = {
    userId: findUser._id,
    username: findUser.name,
  };

  const token = signToken(payload);

  const { password, ...userWithoutPassword } = findUser.toObject();
  return {
    user: userWithoutPassword,
    token,
  };
};

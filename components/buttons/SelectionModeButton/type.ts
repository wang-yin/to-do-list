export type Mode = "訪客模式" | "登入/註冊";
export type Color = "red" | "blue";

export interface SelectionModeButtonProps {
  mode: Mode;
  color: Color;
}

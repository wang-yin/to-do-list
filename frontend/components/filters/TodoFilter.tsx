import { TodoFilterProps } from "./type"

export default function TodoFilter({ onFilterChange } : TodoFilterProps) {
  return (
    <select 
      className="mt-5 border p-1 cursor-pointer dark:bg-white"
      onChange={(e) => onFilterChange(e.target.value)}
    >
      <option value="">--- 請選擇 ---</option>
      <option value="全部">全部</option>
      <option value="工作">工作</option>
      <option value="學習">學習</option>
      <option value="生活">生活</option>
      <option value="已完成">已完成</option>
      <option value="未完成">未完成</option>
    </select>
  );
}

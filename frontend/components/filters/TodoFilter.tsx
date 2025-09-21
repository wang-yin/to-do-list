export default function TodoFilter() {
  return (
    <select className="mt-5 border p-1 cursor-pointer dark:bg-white">
      <option>--- 請選擇 ---</option>
      <option>全部</option>
      <option>工作</option>
      <option>學習</option>
      <option>生活</option>
      <option>重要</option>
      <option>已完成</option>
      <option>未完成</option>
    </select>
  );
}

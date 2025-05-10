// 現在の時刻を取得
const currentHour = new Date().getHours();

const target = document.querySelector(".bg-time");
if (currentHour >= 5 && currentHour < 11) {
  // 朝：５〜１０時
  target.classList.add("morning");
} else if (currentHour >= 11 && currentHour < 17) {
  // 昼：11~16時
  target.classList.add("daytime");
} else {
  // 17~翌日4時
  target.classList.add("night");
}

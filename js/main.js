// モバイルメニューの開閉
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// メニュー内リンクをタップしたら閉じる
nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// フッターの年号を自動更新
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
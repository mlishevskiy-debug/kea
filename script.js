document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('downloadBtn');
  const anchor = document.getElementById('downloadAnchor');

  btn.addEventListener('click', (e) => {
    // небольшая анимация фидбэка
    btn.blur();
    btn.disabled = true;
    btn.style.opacity = '0.95';

    // если файл есть в href, просто кликнем по ссылке для скачивания
    setTimeout(() => {
      anchor.click();

      // восстановим состояние кнопки через 600ms
      setTimeout(() => {
        btn.disabled = false;
        btn.style.opacity = '';
      }, 600);
    }, 100);
  });
});

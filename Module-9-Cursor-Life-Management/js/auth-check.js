/**
 * Проверка доступа к страницам модуля
 * Редирект на главную если пользователь не в whitelist
 */

(function() {
  // Загружаем конфиг
  const configScript = document.createElement('script');
  configScript.src = '../../js/config.js';
  document.head.appendChild(configScript);

  configScript.onload = function() {
    const savedEmail = localStorage.getItem('userEmail');

    if (!savedEmail) {
      // Нет email - на главную
      window.location.href = '../../index.html';
      return;
    }

    const whitelist = COURSE_CONFIG.whitelist.map(e => e.toLowerCase());

    if (!whitelist.includes(savedEmail.toLowerCase())) {
      // Email не в whitelist - на главную
      localStorage.removeItem('userEmail');
      window.location.href = '../../index.html';
    }
  };

  configScript.onerror = function() {
    // Конфиг не загрузился - на главную
    window.location.href = '../../index.html';
  };
})();

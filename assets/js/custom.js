// assets/js/custom.js

// Функция перевода селектора тем оформления
function translateThemeSelector() {
  // Находим селектор тем
  const selector = document.querySelector('select[onchange*="data-theme-pack"]');
  if (!selector) return;
  
  // Словарь переводов
  const translations = {
    'Theme': 'Тема оформления',
    'Coffee': 'Кофе',
    'Contrast': 'Контраст',
    'Cupcake': 'Капкейк',
    'Default': 'Стандартная',
    'Dracula': 'Дракула',
    'Marine': 'Морская',
    'Matcha': 'Матча',
    'Minimal': 'Минимализм',
    'Retro': 'Ретро',
    'Solar': 'Солнечная',
    'Synthwave': 'Синтвейв'
  };
  
  // Переводим текст внутри option
  for (let option of selector.options) {
    const originalText = option.textContent;
    if (translations[originalText]) {
      option.textContent = translations[originalText];
    }
  }
}

// Запускаем перевод после загрузки DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', translateThemeSelector);
} else {
  translateThemeSelector();
}

// Наблюдаем за динамическими изменениями (на случай, если селектор появляется позже)
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length) {
      translateThemeSelector();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

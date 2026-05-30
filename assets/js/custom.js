// assets/js/custom.js

// Функция перевода селектора тем оформления
function translateThemeSelector() {
  console.log('translateThemeSelector: searching for theme selector...');
  
  // Находим селектор тем
  const selector = document.querySelector('select[onchange*="data-theme-pack"]');
  
  if (!selector) {
    console.log('translateThemeSelector: selector not found yet');
    return false;
  }
  
  console.log('translateThemeSelector: selector found', selector);
  
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
  
  let translatedCount = 0;
  
  // Переводим текст внутри option
  for (let option of selector.options) {
    const originalText = option.textContent;
    if (translations[originalText]) {
      option.textContent = translations[originalText];
      translatedCount++;
      console.log(`Translated: "${originalText}" → "${translations[originalText]}"`);
    }
  }
  
  console.log(`translateThemeSelector: translated ${translatedCount} options`);
  return true;
}

// Способ 1: Запускаем после полной загрузки страницы
window.addEventListener('load', function() {
  console.log('Window loaded, translating...');
  translateThemeSelector();
});

// Способ 2: Также пробуем запустить после DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready, translating...');
  translateThemeSelector();
});

// Способ 3: Запускаем с задержкой (на случай, если селектор появляется позже)
setTimeout(function() {
  console.log('Delayed translation (1 sec)...');
  translateThemeSelector();
}, 1000);

setTimeout(function() {
  console.log('Delayed translation (2 sec)...');
  translateThemeSelector();
}, 2000);

// Способ 4: Наблюдаем за изменениями в DOM
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length) {
      // Проверяем, не появился ли наш селектор
      const selector = document.querySelector('select[onchange*="data-theme-pack"]');
      if (selector) {
        console.log('MutationObserver: selector appeared, translating...');
        translateThemeSelector();
      }
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

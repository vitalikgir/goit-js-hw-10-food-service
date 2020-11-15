const bodyEl = document.querySelector('body');

export const themeSwitcherEl = document.querySelector('#theme-switch-toggle'); //theme switcher

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export function themeSwithcer(e) {
  const theme = e.target.checked ? Theme.DARK : Theme.LIGHT;
  window.localStorage.setItem('theme', theme);
  clearClassThemeFromBody();
  setTheme();
}

export function setTheme() {
  const themeLocalStorage = window.localStorage.getItem('theme');
  if (themeLocalStorage) {
    clearClassThemeFromBody(); //удаляем классы темы с body
    bodyEl.classList.add(themeLocalStorage); //добавляем актуальный класс на body
  } else {
    //если пользователь первый раз загружает страницу устанавливаем тему по-умолчанию
    bodyEl.classList.add(Theme.LIGHT);
    window.localStorage.setItem('theme', Theme.LIGHT);
  }
  setCheckboxStatus(); //устанавливаем чекбокс в нужное состояние
}

function clearClassThemeFromBody() {
  //функция удаления классов темы с body
  bodyEl.classList.remove(Theme.DARK, Theme.LIGHT);
}

function setCheckboxStatus() {
  //ф-я установки состояния переключателя темы
  const themeLocalStorage = window.localStorage.getItem('theme');
  if (themeLocalStorage === Theme.DARK) {
    themeSwitcherEl.checked = true;
  } else themeSwitcherEl.checked = false;
}

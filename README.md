# Репозиторії

- Тестове завдання:
  https://github.com/koros-rk/fotbo_test_assignment

- Proxy server:
  https://github.com/koros-rk/fotbo_test_assignment_proxy

---

# Флоу виконання завдання

1. Ініціалізація базового проекту (react-ts template) та встановлення базових залежностей
2. Ініціалізація Panda CSS
3. Створення мінімальних UI елементів (text, icons, ...)
4. Page Skeleton — базовий лаяйут елементів
5. Верстка Card компонети
6. Верстка Data Center Selector
7. Верстка Period Selector
8. Перша інтеграція з API (без проксі)
9. Деплой першої версії на Render
10. Створення proxy сервера для API
11. Інтеграція з API через proxy
12. Фінальний огляд та правки елементів, стилізації, структури
13. Деплой фінальної версії на Render

---

# UX Improvements та оптимізації

- Адаптивна верстка
- Семантична HTML структура
- Skeleton loading для стану завантаження тарифів
- Кешування отримання та фільтрації респонсу API

---

# Важливі уточнення

### Proxy сервер

- Proxy сервер був доданий через те, що наданий API не повертав необхідні CORS-заголовки, внаслідок чого прямі запити з браузера блокувались політикою безпеки браузера (CORS).
- Proxy використовувався виключно як транспортний шар для отримання даних та не містить додаткової бізнес-логіки.

### Використання Panda CSS

- Згідно вимог тестового завдання обов'язковим є використання SCSS.
- Для пришвидшення розробки в умовах обмеженого часу було використано Panda CSS, який генерує статичний оптимізований CSS під час збірки проєкту.
- З точки зору опису стилів Panda CSS є концептуально близьким до SCSS та підтримує більшість звичних можливостей:
    - вкладені селектори
    - псевдокласи
    - псевдоелементи
    - медіа-запити
    - композицію стилів
- Додатково Panda CSS надає типізацію стилів, підтримку design tokens та build-time оптимізації без використання runtime CSS-in-JS рішень.

---

# Розподіл роботи між AI та ручною реалізацією

## AI використовувався для

- Витягу стилів з Figma
- Конвертація CSS для Panda CSS
- Аналіз API та його респонсу
- Доналаштування proxy сервера

## Вручну виконано

- Структура проекту
- Верстка усіх компонентів
- API layer
- Інтеграція з API
- Фінальна оптимізація
- Деплой на Render

---

# Складнощі

## Проблема №1

### Проблема

Прямі запити з браузера до наданого API блокувались політикою CORS через відсутність необхідних CORS-заголовків на стороні сервера.

### Рішення

Було реалізовано проміжний proxy-сервер, через який виконувались запити до API. Це дозволило обійти браузерні обмеження CORS та забезпечити коректну взаємодію клієнтського застосунку з API.

---

## Проблема №2

### Проблема

API не містило достатньої документації щодо структури відповіді та призначення окремих полів.

### Рішення

Було проведено дослідження фактичної відповіді API, використано AI для пришвидшення аналізу структури даних та формування гіпотез щодо призначення полів. Остаточна схема даних та логіка відображення були визначені та перевірені вручну.

---

# Використані AI-інструменти

- Cursor AI (Composer 2.5 Fast)
- ChatGPT GO (GPT-5.5)

---

# Використані промпти для Cursor

## Отримання typography стилів з Figma

```plaintext
Open the Figma file "fotbo_test_assignment".

Extract typography properties from all text components.

Return an array of JSON objects in the following format:

[
  {
    "name": "Heading H1",
    "text example": "Buy Forex VPS plans",
    "fontSize": 54,
    "fontWeight": regular,
    "letterSpacing": -2.7px,
    "lineHeight": 54
  }
]

Requirements:
- Return only valid JSON.
- Include all unique text styles.
- Do not include explanations or markdown.
```

## Отримання стилів для Card компоненти

```plaintext
Open the Figma file "fotbo_test_assignment".

Locate the root component named "Tariff Component" and inspect both variants:
- Idle
- Hover

For each variant, extract only the following visual properties from the component root container:

- background-color
- background-image
- border-width
- border-style
- border-color
- border-radius
- box-shadow

Requirements:
- Read values directly from the component styles in Figma.
- Do not infer or approximate values from screenshots.
- Convert all values to valid CSS syntax.
- If a property is not defined, omit it.
- Return the result as plain CSS blocks.

Output format:

Idle:
```css
.tariff-card {
  ...
}
```


---

# Використання Cursor

- Загальна кількість токенів: 595.2K
- Орієнтовна вартість: $1.33

---

# Деплой

Frontend:
https://fotbo-test-assignment.onrender.com/

Proxy:
https://fotbo-test-assignment-proxy.onrender.com/

P.S. Render призупиняє роботу неактивних сервісів, тому перший API реквест може тривати більше звичайного
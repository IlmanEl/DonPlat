# Referendum - Три экрана на разных портах

## Быстрый старт

Просто запустите один Vite dev сервер:

```bash
npm run dev
```

Затем откройте в браузере:

- **Экран 1 (Витрина блогера)**: http://localhost:3000/screen1.html
- **Экран 2 (Dashboard блогера)**: http://localhost:3000/screen2.html
- **Экран 3 (Детали темы)**: http://localhost:3000/screen3.html

## Структура проекта

```
/src
  ├── app-unified.jsx        # Экран 1: Витрина блогера
  ├── dashboard.jsx          # Экран 2: Dashboard блогера
  ├── topic-details.jsx      # Экран 3: Детали темы
  ├── screen1-entry.jsx      # Entry point для экрана 1
  ├── screen2-entry.jsx      # Entry point для экрана 2
  └── screen3-entry.jsx      # Entry point для экрана 3

/screen1.html                # HTML для экрана 1
/screen2.html                # HTML для экрана 2
/screen3.html                # HTML для экрана 3
```

## Открыть все экраны одновременно

Откройте три окна/вкладки браузера:
- http://localhost:3000/screen1.html
- http://localhost:3000/screen2.html
- http://localhost:3000/screen3.html

Все экраны используют единый стиль из `app-unified.jsx`:
- Одинаковая темная/светлая тема
- Одинаковые цвета и градиенты
- Одинаковые шрифты и анимации
- Telegram Star компонент для валюты

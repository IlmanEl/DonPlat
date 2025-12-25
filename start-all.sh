#!/bin/bash

echo "🚀 Запуск всех экранов Referendum..."
echo ""

# Убиваем процессы на портах, если они заняты
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null
lsof -ti:3002 | xargs kill -9 2>/dev/null

# Запускаем три vite dev сервера на разных портах
npx vite --port 3000 --open screen1.html &
sleep 2
npx vite --port 3001 --open screen2.html &
sleep 2
npx vite --port 3002 --open screen3.html &

echo ""
echo "✅ Все серверы запущены!"
echo ""
echo "📱 Экран 1 (Витрина блогера):  http://localhost:3000/screen1.html"
echo "📊 Экран 2 (Dashboard блогера): http://localhost:3001/screen2.html"
echo "👥 Экран 3 (Детали темы):      http://localhost:3002/screen3.html"
echo ""
echo "Нажмите Ctrl+C чтобы остановить все серверы"

# Ждем сигнала для остановки
wait

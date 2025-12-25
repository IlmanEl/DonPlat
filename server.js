const http = require('http');
const fs = require('fs');
const path = require('path');

// Функция для создания HTML из JSX компонента
function createHTMLFromJSX(jsxPath, title) {
  const jsxContent = fs.readFileSync(jsxPath, 'utf-8');

  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    ${jsxContent}

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(${getComponentName(jsxPath)}));
  </script>
</body>
</html>`;
}

function getComponentName(jsxPath) {
  if (jsxPath.includes('app-unified')) return 'ProjectsUnified';
  if (jsxPath.includes('dashboard')) return 'BloggerDashboard';
  if (jsxPath.includes('topic-details')) return 'TopicDetails';
  return 'App';
}

// Сервер для порта 3000 - Экран 1
const server3000 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(createHTMLFromJSX(
    path.join(__dirname, 'app-unified.jsx'),
    'Referendum - Экран 1: Витрина блогера'
  ));
});

// Сервер для порта 3001 - Экран 2
const server3001 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(createHTMLFromJSX(
    path.join(__dirname, 'dashboard.jsx'),
    'Referendum - Экран 2: Dashboard блогера'
  ));
});

// Сервер для порта 3002 - Экран 3
const server3002 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(createHTMLFromJSX(
    path.join(__dirname, 'topic-details.jsx'),
    'Referendum - Экран 3: Детали темы'
  ));
});

server3000.listen(3000, () => {
  console.log('✅ Экран 1 (Витрина блогера): http://localhost:3000');
});

server3001.listen(3001, () => {
  console.log('✅ Экран 2 (Dashboard блогера): http://localhost:3001');
});

server3002.listen(3002, () => {
  console.log('✅ Экран 3 (Детали темы): http://localhost:3002');
});

console.log('\n🚀 Все серверы запущены!\n');

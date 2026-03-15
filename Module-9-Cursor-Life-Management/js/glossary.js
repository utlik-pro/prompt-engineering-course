/**
 * Glossary - Словарь технических терминов
 * Используется для tooltips и справочника
 */

const GLOSSARY = {
  // === ОБЩИЕ ТЕРМИНЫ ===
  'API': {
    term: 'API',
    full: 'Application Programming Interface',
    definition: 'Интерфейс программирования приложений. Набор правил и протоколов, позволяющий программам взаимодействовать друг с другом.',
    example: 'REST API позволяет фронтенду получать данные с сервера через HTTP-запросы.'
  },
  'SDK': {
    term: 'SDK',
    full: 'Software Development Kit',
    definition: 'Набор инструментов разработки, включающий библиотеки, документацию и примеры для работы с определённой платформой.',
    example: 'Stripe SDK упрощает интеграцию платежей в приложение.'
  },
  'SaaS': {
    term: 'SaaS',
    full: 'Software as a Service',
    definition: 'Модель распространения ПО, где приложение доступно через интернет по подписке, без установки на компьютер.',
    example: 'Google Docs, Notion, Figma - примеры SaaS приложений.'
  },
  'BaaS': {
    term: 'BaaS',
    full: 'Backend as a Service',
    definition: 'Облачный сервис, предоставляющий готовый бекенд: базу данных, аутентификацию, хранилище файлов.',
    example: 'Supabase, Firebase - популярные BaaS платформы.'
  },

  // === ФРОНТЕНД ===
  'Frontend': {
    term: 'Frontend',
    full: 'Фронтенд / Клиентская часть',
    definition: 'Часть приложения, которую видит и с которой взаимодействует пользователь. Работает в браузере.',
    example: 'HTML, CSS, JavaScript, React - технологии фронтенда.'
  },
  'React': {
    term: 'React',
    full: 'React.js',
    definition: 'JavaScript-библиотека для создания пользовательских интерфейсов. Использует компонентный подход и виртуальный DOM.',
    example: 'Facebook, Instagram, Netflix используют React.'
  },
  'Component': {
    term: 'Компонент',
    full: 'React Component',
    definition: 'Независимый, переиспользуемый блок UI со своей логикой и стилями. Основной строительный блок React-приложений.',
    example: 'Button, Card, Modal, Header - типичные компоненты.'
  },
  'JSX': {
    term: 'JSX',
    full: 'JavaScript XML',
    definition: 'Синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код внутри JavaScript.',
    example: 'const element = <h1>Hello, world!</h1>;'
  },
  'State': {
    term: 'State',
    full: 'Состояние компонента',
    definition: 'Данные, которые могут изменяться и влияют на отображение компонента. При изменении state компонент перерисовывается.',
    example: 'useState(0) создаёт переменную состояния со значением 0.'
  },
  'Props': {
    term: 'Props',
    full: 'Properties',
    definition: 'Данные, передаваемые в компонент извне (от родителя). Props только для чтения.',
    example: '<Button color="blue" onClick={handleClick} />'
  },
  'Hook': {
    term: 'Hook',
    full: 'React Hook',
    definition: 'Функции, позволяющие использовать state и другие возможности React в функциональных компонентах.',
    example: 'useState, useEffect, useContext - встроенные хуки.'
  },
  'SPA': {
    term: 'SPA',
    full: 'Single Page Application',
    definition: 'Веб-приложение, загружающееся один раз. Навигация происходит без перезагрузки страницы.',
    example: 'Gmail, Trello, Google Maps - примеры SPA.'
  },
  'SSR': {
    term: 'SSR',
    full: 'Server-Side Rendering',
    definition: 'Генерация HTML на сервере перед отправкой клиенту. Улучшает SEO и начальную загрузку.',
    example: 'Next.js поддерживает SSR из коробки.'
  },
  'SSG': {
    term: 'SSG',
    full: 'Static Site Generation',
    definition: 'Генерация HTML-страниц на этапе сборки. Страницы готовы заранее и отдаются мгновенно.',
    example: 'Блог на Next.js может использовать SSG для статей.'
  },

  // === БЕКЕНД ===
  'Backend': {
    term: 'Backend',
    full: 'Бекенд / Серверная часть',
    definition: 'Серверная логика приложения: обработка запросов, работа с БД, бизнес-логика, авторизация.',
    example: 'Node.js, Python, Go - языки для бекенда.'
  },
  'HTTP': {
    term: 'HTTP',
    full: 'HyperText Transfer Protocol',
    definition: 'Протокол передачи данных в интернете. Основа взаимодействия браузера с сервером.',
    example: 'Когда вы открываете сайт, браузер отправляет HTTP-запрос на сервер.'
  },
  'Endpoint': {
    term: 'Endpoint',
    full: 'Эндпоинт / Точка доступа',
    definition: 'Конкретный URL-адрес API, по которому можно получить данные или выполнить действие.',
    example: '/api/transactions - эндпоинт для работы с транзакциями.'
  },
  'Request': {
    term: 'Request',
    full: 'HTTP Request / Запрос',
    definition: 'Сообщение от клиента к серверу с просьбой выполнить действие или вернуть данные.',
    example: 'GET-запрос на /api/users запрашивает список пользователей.'
  },
  'Response': {
    term: 'Response',
    full: 'HTTP Response / Ответ',
    definition: 'Ответ сервера на запрос клиента. Содержит статус-код и данные.',
    example: 'Сервер вернул response со статусом 200 и JSON-данными.'
  },
  'GET': {
    term: 'GET',
    full: 'HTTP GET метод',
    definition: 'HTTP-метод для получения данных с сервера. Не изменяет данные на сервере.',
    example: 'GET /api/transactions - получить список всех транзакций.'
  },
  'POST': {
    term: 'POST',
    full: 'HTTP POST метод',
    definition: 'HTTP-метод для создания новых данных на сервере.',
    example: 'POST /api/transactions с телом {amount: 100} - создать транзакцию.'
  },
  'PATCH': {
    term: 'PATCH',
    full: 'HTTP PATCH метод',
    definition: 'HTTP-метод для частичного обновления существующих данных.',
    example: 'PATCH /api/transactions/1 с {amount: 200} - изменить сумму транзакции.'
  },
  'DELETE': {
    term: 'DELETE',
    full: 'HTTP DELETE метод',
    definition: 'HTTP-метод для удаления данных с сервера.',
    example: 'DELETE /api/transactions/1 - удалить транзакцию с id=1.'
  },
  'JSON': {
    term: 'JSON',
    full: 'JavaScript Object Notation',
    definition: 'Текстовый формат для передачи данных. Легко читается людьми и машинами.',
    example: '{"name": "John", "age": 30} - пример JSON объекта.'
  },
  'fetch': {
    term: 'fetch()',
    full: 'Fetch API',
    definition: 'Встроенная функция JavaScript для отправки HTTP-запросов к серверу.',
    example: 'await fetch("/api/data") - получить данные с сервера.'
  },
  'API Route': {
    term: 'API Route',
    full: 'Next.js API Route',
    definition: 'Серверный endpoint в Next.js. Файл в папке app/api/ становится доступным по URL.',
    example: 'app/api/users/route.ts создаёт endpoint /api/users.'
  },
  'Status Code': {
    term: 'Status Code',
    full: 'HTTP Status Code',
    definition: 'Числовой код в ответе сервера, указывающий результат запроса.',
    example: '200 = успех, 404 = не найдено, 500 = ошибка сервера.'
  },
  'Thunder Client': {
    term: 'Thunder Client',
    full: 'Thunder Client',
    definition: 'Расширение VS Code/Cursor для тестирования API запросов без браузера.',
    example: 'В Thunder Client можно отправить POST-запрос с JSON-телом.'
  },
  'Server': {
    term: 'Server',
    full: 'Сервер',
    definition: 'Компьютер или программа, обрабатывающая запросы клиентов и возвращающая ответы.',
    example: 'Веб-сервер принимает HTTP-запросы и отдаёт HTML/JSON.'
  },
  'Middleware': {
    term: 'Middleware',
    full: 'Промежуточное ПО',
    definition: 'Функции, выполняющиеся между получением запроса и отправкой ответа. Используются для авторизации, логирования.',
    example: 'Middleware проверяет JWT-токен перед доступом к защищённому роуту.'
  },
  'REST': {
    term: 'REST',
    full: 'Representational State Transfer',
    definition: 'Архитектурный стиль для создания веб-сервисов. Использует HTTP-методы: GET, POST, PUT, DELETE.',
    example: 'GET /api/users - получить список пользователей.'
  },
  'GraphQL': {
    term: 'GraphQL',
    full: 'Graph Query Language',
    definition: 'Язык запросов для API, позволяющий клиенту точно указать, какие данные ему нужны.',
    example: 'Один запрос GraphQL может заменить несколько REST-запросов.'
  },
  'Serverless': {
    term: 'Serverless',
    full: 'Бессерверная архитектура',
    definition: 'Модель, где провайдер управляет серверами. Вы пишете только код функций, оплата за выполнение.',
    example: 'AWS Lambda, Vercel Edge Functions - serverless платформы.'
  },
  'Edge Function': {
    term: 'Edge Function',
    full: 'Функция на границе сети',
    definition: 'Код, выполняющийся на серверах близко к пользователю (CDN). Минимальная задержка.',
    example: 'Vercel Edge Functions запускаются в 30+ регионах мира.'
  },

  // === БАЗЫ ДАННЫХ ===
  'Database': {
    term: 'Database',
    full: 'База данных',
    definition: 'Организованное хранилище данных с возможностью поиска, добавления, изменения и удаления.',
    example: 'PostgreSQL, MongoDB, Redis - разные типы баз данных.'
  },
  'SQL': {
    term: 'SQL',
    full: 'Structured Query Language',
    definition: 'Язык для работы с реляционными базами данных. Позволяет создавать таблицы и выполнять запросы.',
    example: 'SELECT * FROM users WHERE age > 18;'
  },
  'PostgreSQL': {
    term: 'PostgreSQL',
    full: 'PostgreSQL',
    definition: 'Мощная open-source реляционная база данных. Поддерживает JSON, полнотекстовый поиск, расширения.',
    example: 'Supabase использует PostgreSQL как основную БД.'
  },
  'NoSQL': {
    term: 'NoSQL',
    full: 'Not Only SQL',
    definition: 'Базы данных без строгой табличной структуры. Хранят документы, пары ключ-значение, графы.',
    example: 'MongoDB хранит данные в JSON-подобных документах.'
  },
  'ORM': {
    term: 'ORM',
    full: 'Object-Relational Mapping',
    definition: 'Техника работы с БД через объекты кода, а не SQL-запросы. Повышает безопасность и удобство.',
    example: 'Drizzle, Prisma - популярные ORM для TypeScript.'
  },
  'Migration': {
    term: 'Migration',
    full: 'Миграция базы данных',
    definition: 'Версионированное изменение структуры БД. Позволяет отслеживать историю изменений схемы.',
    example: 'Миграция добавляет новую колонку email в таблицу users.'
  },
  'CRUD': {
    term: 'CRUD',
    full: 'Create, Read, Update, Delete',
    definition: 'Четыре базовые операции с данными. Любое приложение реализует эти операции.',
    example: 'Блог: создать пост, прочитать, отредактировать, удалить.'
  },
  'Primary Key': {
    term: 'Primary Key',
    full: 'Первичный ключ',
    definition: 'Уникальный идентификатор записи в таблице. Не может повторяться и быть пустым.',
    example: 'id - обычно используется как primary key.'
  },
  'Foreign Key': {
    term: 'Foreign Key',
    full: 'Внешний ключ',
    definition: 'Поле, связывающее запись с записью в другой таблице. Обеспечивает целостность данных.',
    example: 'user_id в таблице posts ссылается на id в таблице users.'
  },
  'Index': {
    term: 'Index',
    full: 'Индекс базы данных',
    definition: 'Структура для ускорения поиска по определённым полям. Как алфавитный указатель в книге.',
    example: 'Индекс на поле email ускорит поиск пользователя по email.'
  },

  // === TYPESCRIPT ===
  'TypeScript': {
    term: 'TypeScript',
    full: 'TypeScript',
    definition: 'Надмножество JavaScript с системой типов. Находит ошибки до запуска программы.',
    example: 'function greet(name: string): string { return `Hello, ${name}`; }'
  },
  'Type': {
    term: 'Type',
    full: 'Тип данных',
    definition: 'Описание структуры данных: string, number, boolean, object, array и пользовательские типы.',
    example: 'type User = { name: string; age: number; };'
  },
  'Interface': {
    term: 'Interface',
    full: 'Интерфейс',
    definition: 'Описание формы объекта в TypeScript. Определяет, какие поля и методы должен иметь объект.',
    example: 'interface User { id: number; name: string; }'
  },
  'Generic': {
    term: 'Generic',
    full: 'Дженерик / Обобщённый тип',
    definition: 'Параметризованный тип, позволяющий писать переиспользуемый код для разных типов данных.',
    example: 'Array<number> - массив чисел, Array<string> - массив строк.'
  },

  // === СЕРВИСЫ ===
  'Vercel': {
    term: 'Vercel',
    full: 'Vercel',
    definition: 'Платформа для деплоя фронтенд-приложений. Создатели Next.js. Автоматический деплой из Git.',
    example: 'Push в main ветку автоматически запускает деплой на Vercel.'
  },
  'Supabase': {
    term: 'Supabase',
    full: 'Supabase',
    definition: 'Open-source альтернатива Firebase. PostgreSQL база, аутентификация, хранилище файлов, realtime.',
    example: 'Supabase генерирует REST и GraphQL API автоматически.'
  },
  'Clerk': {
    term: 'Clerk',
    full: 'Clerk',
    definition: 'Сервис аутентификации и управления пользователями. Готовые UI-компоненты для входа.',
    example: 'Clerk поддерживает вход через Google, GitHub, email.'
  },
  'Stripe': {
    term: 'Stripe',
    full: 'Stripe',
    definition: 'Платформа для приёма платежей онлайн. Обрабатывает карты, подписки, выплаты.',
    example: 'Stripe Checkout создаёт готовую страницу оплаты.'
  },
  'OpenAI': {
    term: 'OpenAI',
    full: 'OpenAI',
    definition: 'Компания-разработчик AI моделей. Предоставляет API для GPT, DALL-E, Whisper.',
    example: 'OpenAI API позволяет добавить AI-чат в ваше приложение.'
  },

  // === ДЕПЛОЙМЕНТ ===
  'Deploy': {
    term: 'Deploy',
    full: 'Деплоймент / Развёртывание',
    definition: 'Процесс публикации приложения на сервере, чтобы оно стало доступно пользователям.',
    example: 'После деплоя сайт доступен по адресу myapp.vercel.app.'
  },
  'CI/CD': {
    term: 'CI/CD',
    full: 'Continuous Integration / Continuous Deployment',
    definition: 'Автоматизация тестирования и деплоя. Код проверяется и публикуется при каждом коммите.',
    example: 'GitHub Actions запускает тесты при каждом pull request.'
  },
  'CDN': {
    term: 'CDN',
    full: 'Content Delivery Network',
    definition: 'Сеть серверов по всему миру для быстрой доставки статического контента пользователям.',
    example: 'Изображения на CDN загружаются с ближайшего сервера.'
  },
  'Environment Variables': {
    term: 'Environment Variables',
    full: 'Переменные окружения',
    definition: 'Конфигурационные значения, хранящиеся вне кода: API-ключи, адреса БД, секреты.',
    example: 'NEXT_PUBLIC_STRIPE_KEY хранит публичный ключ Stripe.'
  },

  // === АУТЕНТИФИКАЦИЯ ===
  'Authentication': {
    term: 'Authentication',
    full: 'Аутентификация',
    definition: 'Проверка личности пользователя. Процесс "войти в систему".',
    example: 'Вход по email/пароль или через Google - это аутентификация.'
  },
  'Authorization': {
    term: 'Authorization',
    full: 'Авторизация',
    definition: 'Проверка прав доступа. Что пользователь может делать после входа.',
    example: 'Админ может удалять посты, обычный пользователь - нет.'
  },
  'JWT': {
    term: 'JWT',
    full: 'JSON Web Token',
    definition: 'Токен для передачи информации о пользователе между клиентом и сервером.',
    example: 'JWT хранит user_id и передаётся в заголовке Authorization.'
  },
  'OAuth': {
    term: 'OAuth',
    full: 'Open Authorization',
    definition: 'Протокол авторизации через сторонние сервисы без передачи пароля.',
    example: '"Войти через Google" использует OAuth 2.0.'
  },
  'Session': {
    term: 'Session',
    full: 'Сессия',
    definition: 'Временное хранилище данных пользователя на сервере между запросами.',
    example: 'Сессия хранит информацию о том, что пользователь вошёл в систему.'
  },
  'Webhook': {
    term: 'Webhook',
    full: 'Вебхук',
    definition: 'HTTP-запрос, отправляемый автоматически при наступлении события. Уведомление между системами.',
    example: 'Stripe отправляет webhook при успешной оплате.'
  },

  // === ИНСТРУМЕНТЫ ===
  'npm': {
    term: 'npm',
    full: 'Node Package Manager',
    definition: 'Менеджер пакетов для JavaScript. Установка библиотек и управление зависимостями.',
    example: 'npm install react - устанавливает библиотеку React.'
  },
  'Git': {
    term: 'Git',
    full: 'Git',
    definition: 'Система контроля версий. Отслеживает изменения кода, позволяет работать в команде.',
    example: 'git commit сохраняет текущее состояние кода.'
  },
  'GitHub': {
    term: 'GitHub',
    full: 'GitHub',
    definition: 'Платформа для хостинга Git-репозиториев. Совместная разработка, code review, issues.',
    example: 'Open source проекты часто хостятся на GitHub.'
  },
  'VS Code': {
    term: 'VS Code',
    full: 'Visual Studio Code',
    definition: 'Бесплатный редактор кода от Microsoft. Поддержка расширений, отладка, Git интеграция.',
    example: 'VS Code - самый популярный редактор для веб-разработки.'
  },
  'Cursor': {
    term: 'Cursor',
    full: 'Cursor IDE',
    definition: 'IDE с встроенным AI-помощником. Форк VS Code с интеграцией GPT и Claude.',
    example: 'Cursor автоматически дополняет и генерирует код.'
  },
  'ESLint': {
    term: 'ESLint',
    full: 'ESLint',
    definition: 'Инструмент для статического анализа JavaScript/TypeScript кода. Находит проблемы и ошибки.',
    example: 'ESLint предупреждает о неиспользуемых переменных.'
  },
  'Prettier': {
    term: 'Prettier',
    full: 'Prettier',
    definition: 'Автоматический форматировщик кода. Единый стиль без споров о форматировании.',
    example: 'Prettier автоматически расставляет отступы и кавычки.'
  },

  // === NEXT.JS ===
  'Next.js': {
    term: 'Next.js',
    full: 'Next.js',
    definition: 'React-фреймворк с SSR, SSG, роутингом, API routes. Стандарт для production React-приложений.',
    example: 'Vercel, TikTok, Hulu используют Next.js.'
  },
  'App Router': {
    term: 'App Router',
    full: 'Next.js App Router',
    definition: 'Новая система роутинга в Next.js 13+. Использует React Server Components.',
    example: 'Папка app/ содержит роуты: app/about/page.tsx -> /about'
  },
  'Server Component': {
    term: 'Server Component',
    full: 'React Server Component',
    definition: 'Компонент, рендерящийся только на сервере. Не отправляет JavaScript клиенту.',
    example: 'Server Components могут напрямую обращаться к базе данных.'
  },
  'Client Component': {
    term: 'Client Component',
    full: 'React Client Component',
    definition: 'Компонент с интерактивностью, работающий в браузере. Помечается "use client".',
    example: 'Формы, кнопки с обработчиками - client components.'
  },

  // === СТИЛИЗАЦИЯ ===
  'Tailwind CSS': {
    term: 'Tailwind CSS',
    full: 'Tailwind CSS',
    definition: 'Utility-first CSS фреймворк. Стилизация через классы прямо в HTML.',
    example: '<div class="flex items-center gap-4 p-4 bg-blue-500">'
  },
  'CSS-in-JS': {
    term: 'CSS-in-JS',
    full: 'CSS in JavaScript',
    definition: 'Подход к стилизации, где CSS пишется внутри JavaScript файлов.',
    example: 'styled-components, Emotion - популярные CSS-in-JS библиотеки.'
  },
  'shadcn/ui': {
    term: 'shadcn/ui',
    full: 'shadcn/ui',
    definition: 'Коллекция переиспользуемых компонентов на Radix UI и Tailwind. Копируется в проект.',
    example: 'npx shadcn-ui add button - добавляет компонент кнопки.'
  }
};

// Функция поиска термина
function findTerm(term) {
  const normalized = term.toLowerCase().trim();
  for (const key in GLOSSARY) {
    if (key.toLowerCase() === normalized ||
        GLOSSARY[key].full.toLowerCase().includes(normalized)) {
      return GLOSSARY[key];
    }
  }
  return null;
}

// Функция получения всех терминов по категории
function getTermsByCategory(category) {
  // Можно расширить для фильтрации
  return Object.values(GLOSSARY);
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GLOSSARY, findTerm, getTermsByCategory };
}

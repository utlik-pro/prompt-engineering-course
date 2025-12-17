# Введение в n8n и автоматизацию

## Что такое n8n?

n8n — это open-source платформа для автоматизации workflows, которая позволяет соединять различные сервисы и API без программирования. С помощью визуального интерфейса можно создавать сложные автоматизированные процессы, включающие AI обработку, интеграции с внешними сервисами и условную логику.

### Ключевые особенности n8n

- **Open Source**: бесплатная и открытая платформа
- **Визуальный интерфейс**: создание workflows через drag-and-drop
- **Множество интеграций**: 200+ готовых нодов
- **Self-hosted**: полный контроль над данными
- **Cloud версия**: упрощенное развертывание
- **API**: интеграция с внешними системами
- **Webhooks**: триггеры для внешних событий

### Архитектура n8n

```
┌─────────────────────────────────────────────────────────┐
│                    n8n PLATFORM                       │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   Trigger   │  │  Processing │  │   Action    │    │
│  │   Nodes     │  │    Nodes    │  │   Nodes     │    │
│  │             │  │             │  │             │    │
│  │ • Webhook   │  │ • Function  │  │ • HTTP      │    │
│  │ • Schedule  │  │ • Code      │  │ • Email     │    │
│  │ • Manual    │  │ • AI/ML     │  │ • Database  │    │
│  │ • Email     │  │ • Data      │  │ • Slack     │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│         │                 │                 │         │
│         └─────────────────┼─────────────────┘         │
│                           │                           │
│  ┌─────────────────────────────────────────────────┐  │
│  │              Execution Engine                   │  │
│  │  • Workflow Engine                             │  │
│  │  • Error Handling                              │  │
│  │  • Retry Logic                                 │  │
│  │  • Logging                                     │  │
│  └─────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Установка и настройка n8n

### Варианты установки

#### 1. Self-hosted (рекомендуется)

**Требования**:
- Node.js 18.10 или выше
- npm или yarn
- База данных (SQLite, PostgreSQL, MySQL)

**Установка через npm**:
```bash
# Глобальная установка
npm install n8n -g

# Запуск
n8n start

# Или с настройками
N8N_BASIC_AUTH_ACTIVE=true \
N8N_BASIC_AUTH_USER=admin \
N8N_BASIC_AUTH_PASSWORD=password \
n8n start
```

**Установка через Docker**:
```yaml
# docker-compose.yml
version: '3.8'
services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=password
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=n8n
    depends_on:
      - postgres
    volumes:
      - n8n_data:/home/node/.n8n

  postgres:
    image: postgres:13
    environment:
      - POSTGRES_DB=n8n
      - POSTGRES_USER=n8n
      - POSTGRES_PASSWORD=n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  n8n_data:
  postgres_data:
```

#### 2. Cloud версия

**n8n Cloud**:
- Готовая облачная версия
- Автоматические обновления
- Встроенная база данных
- Платные планы с расширенными возможностями

**Бесплатный план**:
- 5 активных workflows
- 1000 выполнений в месяц
- Ограниченные интеграции

### Первоначальная настройка

#### 1. Создание администратора

При первом запуске n8n предложит создать администратора:

```
Email: admin@yourcompany.com
Password: [secure_password]
First Name: Admin
Last Name: User
```

#### 2. Настройка базы данных

**SQLite (по умолчанию)**:
```bash
# Для разработки и тестирования
N8N_DATABASE_TYPE=sqlite
```

**PostgreSQL (для продакшена)**:
```bash
N8N_DATABASE_TYPE=postgresdb
N8N_DATABASE_POSTGRESDB_HOST=localhost
N8N_DATABASE_POSTGRESDB_PORT=5432
N8N_DATABASE_POSTGRESDB_DATABASE=n8n
N8N_DATABASE_POSTGRESDB_USER=n8n
N8N_DATABASE_POSTGRESDB_PASSWORD=password
```

#### 3. Настройка безопасности

```bash
# Включение базовой аутентификации
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=secure_password

# Настройка CORS
N8N_CORS_ORIGINS=https://yourdomain.com

# Настройка SSL
N8N_PROTOCOL=https
N8N_SSL_KEY=/path/to/key.pem
N8N_SSL_CERT=/path/to/cert.pem
```

## Основы работы с n8n

### Интерфейс n8n

```
┌─────────────────────────────────────────────────────────┐
│  [Menu]  [Workflows]  [Executions]  [Settings]  [Help] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │
│  │   Trigger   │───▶│  Processing │───▶│   Action    │ │
│  │    Node     │    │    Node     │    │    Node     │ │
│  └─────────────┘    └─────────────┘    └─────────────┘ │
│         │                 │                 │           │
│         └─────────────────┼─────────────────┘           │
│                           │                             │
│  [Execute Workflow]  [Save]  [Settings]  [Test]        │
└─────────────────────────────────────────────────────────┘
```

### Основные компоненты

#### 1. Workflow
- Последовательность нодов, соединенных связями
- Может быть активирован вручную или автоматически
- Поддерживает условную логику и циклы

#### 2. Node (Нод)
- Отдельный шаг в workflow
- Имеет входы и выходы
- Может быть триггером, обработчиком или действием

#### 3. Connection (Связь)
- Соединяет выходы одного нода с входами другого
- Передает данные между нодами
- Может иметь условия выполнения

#### 4. Execution (Выполнение)
- Запуск workflow
- Логирование всех операций
- Отслеживание ошибок и результатов

### Типы нодов

#### Trigger Nodes (Триггеры)

**Manual Trigger**:
- Запуск workflow вручную
- Полезно для тестирования
- Не требует внешних событий

**Webhook**:
- HTTP запросы как триггер
- REST API для внешних систем
- Поддержка различных методов

**Schedule Trigger**:
- Запуск по расписанию
- Cron-подобный синтаксис
- Поддержка часовых поясов

**Email Trigger**:
- Обработка входящих писем
- Фильтрация по отправителю/теме
- Поддержка вложений

#### Processing Nodes (Обработчики)

**Function Node**:
- Выполнение JavaScript кода
- Обработка и трансформация данных
- Сложная логика и вычисления

**Code Node**:
- Выполнение Python кода
- Анализ данных и ML
- Работа с библиотеками

**Set Node**:
- Установка значений полей
- Создание новых полей
- Простая трансформация данных

**IF Node**:
- Условная логика
- Разветвление workflow
- Фильтрация данных

#### AI/ML Nodes

**OpenAI**:
- Интеграция с OpenAI API
- GPT модели для текста
- DALL-E для изображений

**Hugging Face**:
- Доступ к моделям Hugging Face
- Различные ML модели
- Бесплатные и платные модели

**HTTP Request**:
- Универсальный API вызов
- Интеграция с любыми сервисами
- Настройка заголовков и параметров

#### Action Nodes (Действия)

**HTTP Request**:
- Отправка HTTP запросов
- REST API интеграции
- Webhook уведомления

**Email**:
- Отправка писем
- HTML и текстовые форматы
- Вложения и шаблоны

**Slack**:
- Отправка сообщений в Slack
- Уведомления и боты
- Интеграция с каналами

**Google Sheets**:
- Чтение и запись в таблицы
- Обновление данных
- Создание отчетов

## Создание первого workflow

### Пример 1: Простой AI-ассистент для Telegram

**Задача**: Создать бота, который отвечает на сообщения с помощью AI

#### Шаг 1: Настройка Telegram бота

1. Создайте бота через @BotFather в Telegram
2. Получите токен бота
3. Запомните username бота

#### Шаг 2: Создание workflow

**Структура workflow**:
```
Telegram Trigger → OpenAI → Telegram Send Message
```

**Настройка нодов**:

**1. Telegram Trigger**:
```json
{
  "resource": "message",
  "operation": "getUpdates",
  "botToken": "YOUR_BOT_TOKEN"
}
```

**2. OpenAI Node**:
```json
{
  "resource": "chat",
  "operation": "create",
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "Ты - полезный ассистент. Отвечай кратко и по делу."
    },
    {
      "role": "user",
      "content": "{{ $json.message.text }}"
    }
  ]
}
```

**3. Telegram Send Message**:
```json
{
  "resource": "message",
  "operation": "sendMessage",
  "chatId": "{{ $json.message.chat.id }}",
  "text": "{{ $json.choices[0].message.content }}"
}
```

#### Шаг 3: Тестирование

1. Активируйте workflow
2. Отправьте сообщение боту в Telegram
3. Проверьте ответ

### Пример 2: Анализ данных с AI

**Задача**: Автоматически анализировать данные из Google Sheets и отправлять отчет

#### Структура workflow

```
Schedule Trigger → Google Sheets → OpenAI → Email
```

**Настройка нодов**:

**1. Schedule Trigger**:
```json
{
  "rule": {
    "interval": [
      {
        "field": "cronExpression",
        "expression": "0 9 * * 1"
      }
    ]
  }
}
```

**2. Google Sheets (Read)**:
```json
{
  "operation": "read",
  "documentId": "YOUR_SHEET_ID",
  "sheetName": "Data",
  "range": "A1:Z100"
}
```

**3. OpenAI (Analysis)**:
```json
{
  "model": "gpt-4",
  "messages": [
    {
      "role": "system",
      "content": "Ты - аналитик данных. Проанализируй данные и создай краткий отчет с выводами и рекомендациями."
    },
    {
      "role": "user",
      "content": "Проанализируй следующие данные: {{ JSON.stringify($json) }}"
    }
  ]
}
```

**4. Email (Send Report)**:
```json
{
  "toEmail": "manager@company.com",
  "subject": "Еженедельный аналитический отчет",
  "message": "{{ $json.choices[0].message.content }}",
  "options": {
    "html": true
  }
}
```

### Пример 3: Сложный workflow с условиями

**Задача**: Обрабатывать заявки с веб-сайта и направлять их в соответствующие отделы

#### Структура workflow

```
Webhook → IF (Category) → OpenAI (Classification) → IF (Department) → Email/Slack
```

**Логика workflow**:

1. **Webhook** получает заявку с веб-сайта
2. **IF Node** проверяет категорию заявки
3. **OpenAI** классифицирует заявку и определяет приоритет
4. **IF Node** направляет в соответствующий отдел
5. **Email/Slack** уведомляет отдел

**Код для Function Node (классификация)**:
```javascript
// Анализ заявки и определение приоритета
const request = $input.first().json;

// Извлечение ключевых слов
const keywords = request.message.toLowerCase();
let priority = 'low';
let department = 'general';

// Определение приоритета
if (keywords.includes('срочно') || keywords.includes('критично')) {
  priority = 'high';
} else if (keywords.includes('важно') || keywords.includes('проблема')) {
  priority = 'medium';
}

// Определение отдела
if (keywords.includes('техническая') || keywords.includes('баг') || keywords.includes('ошибка')) {
  department = 'technical';
} else if (keywords.includes('продажи') || keywords.includes('заказ') || keywords.includes('покупка')) {
  department = 'sales';
} else if (keywords.includes('поддержка') || keywords.includes('помощь') || keywords.includes('вопрос')) {
  department = 'support';
}

return {
  json: {
    ...request,
    priority: priority,
    department: department,
    processed_at: new Date().toISOString()
  }
};
```

## Интеграция с AI сервисами

### OpenAI интеграция

#### Настройка API ключа

1. Получите API ключ на platform.openai.com
2. В n8n перейдите в Settings → Credentials
3. Создайте новую credential типа "OpenAI API"
4. Введите API ключ

#### Использование в workflow

**Базовый запрос**:
```json
{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "{{ $json.message }}"
    }
  ],
  "temperature": 0.7,
  "max_tokens": 1000
}
```

**Продвинутый запрос с контекстом**:
```json
{
  "model": "gpt-4",
  "messages": [
    {
      "role": "system",
      "content": "Ты - эксперт по анализу данных. Анализируй предоставленные данные и создавай actionable insights."
    },
    {
      "role": "user",
      "content": "Проанализируй следующие данные: {{ JSON.stringify($json.data) }}"
    }
  ],
  "temperature": 0.3,
  "max_tokens": 2000
}
```

### Hugging Face интеграция

#### Настройка

1. Получите API ключ на huggingface.co
2. Создайте credential в n8n
3. Выберите модель для использования

#### Примеры использования

**Анализ тональности**:
```json
{
  "model": "cardiffnlp/twitter-roberta-base-sentiment-latest",
  "inputs": "{{ $json.text }}"
}
```

**Классификация текста**:
```json
{
  "model": "facebook/bart-large-mnli",
  "inputs": "{{ $json.text }}",
  "parameters": {
    "candidate_labels": ["техническая поддержка", "продажи", "общие вопросы"]
  }
}
```

### Кастомные AI интеграции

#### HTTP Request для кастомных API

```json
{
  "method": "POST",
  "url": "https://api.custom-ai.com/v1/analyze",
  "headers": {
    "Authorization": "Bearer {{ $credentials.customAI.token }}",
    "Content-Type": "application/json"
  },
  "body": {
    "text": "{{ $json.message }}",
    "options": {
      "language": "ru",
      "model": "advanced"
    }
  }
}
```

## Обработка ошибок и мониторинг

### Настройка retry логики

```json
{
  "retry": {
    "enabled": true,
    "maxAttempts": 3,
    "waitBetweenAttempts": 1000
  }
}
```

### Обработка ошибок

**Error Trigger Node**:
```javascript
// Обработка ошибок в workflow
const error = $input.first().json;

// Логирование ошибки
console.error('Workflow error:', error);

// Отправка уведомления об ошибке
return {
  json: {
    error: error.message,
    timestamp: new Date().toISOString(),
    workflow: '{{ $workflow.name }}',
    node: '{{ $node.name }}'
  }
};
```

### Мониторинг выполнения

**Метрики для отслеживания**:
- Количество выполнений
- Время выполнения
- Количество ошибок
- Успешность выполнения

**Настройка уведомлений**:
```json
{
  "webhook": "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK",
  "message": "Workflow {{ $workflow.name }} завершен с ошибкой: {{ $json.error }}"
}
```

## Лучшие практики

### 1. Структурирование workflows

- Используйте понятные названия для нодов
- Группируйте связанные ноды
- Добавляйте комментарии к сложным участкам
- Создавайте шаблоны для повторного использования

### 2. Управление данными

- Используйте Set Node для структурирования данных
- Очищайте ненужные поля
- Валидируйте входные данные
- Используйте типизированные данные

### 3. Безопасность

- Храните секреты в Credentials
- Используйте переменные окружения
- Ограничивайте доступ к workflows
- Регулярно обновляйте API ключи

### 4. Производительность

- Оптимизируйте количество нодов
- Используйте кэширование где возможно
- Мониторьте время выполнения
- Настраивайте правильные лимиты

### 5. Тестирование

- Создавайте тестовые workflows
- Используйте Manual Trigger для тестирования
- Проверяйте все сценарии выполнения
- Документируйте тест-кейсы

## Заключение

n8n предоставляет мощные возможности для создания сложных автоматизированных процессов с интеграцией AI. Визуальный интерфейс делает создание workflows доступным для пользователей без технического бэкграунда, а гибкость платформы позволяет решать самые разнообразные задачи автоматизации.

Ключевые преимущества n8n:
- Open source и бесплатность
- Простота использования
- Множество интеграций
- Гибкость настройки
- Возможность self-hosting

В следующем разделе мы рассмотрим практические примеры создания комплексных решений с использованием всех изученных инструментов.

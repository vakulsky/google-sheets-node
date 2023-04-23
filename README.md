##  Описание
Простое приложение для получения данных из Google Sheets.

## Установка
1. Активируйте Google Sheets API в Google Cloud Console.
2. Создайте Google Service Account и предоставьте ему доступ к вашей таблице.
3. Заполните файл `.env` по образцу `.env.example`, где `GOOGLE_SERVICE_ACCOUNT_EMAIL` и `GOOGLE_PRIVATE_KEY` - значения полей `client_email` и `private_key` в json-файле с ключами от Google Service Account. 
```
PORT=
TOKEN=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```
4. `npm install`
5. `npm run start`

## Использование
`POST` запрос к `/spreadsheet` со следующим body:
```json
    {
    "token": "", //token==TOKEN из .env
    "doc_id": "", //id документа Google Sheets
    "sheet_index": 0, // номер листа в таблице (начиная с 0)
    "cells_range": "C2:C5", // Диапазон, из которого будут считываться значения
    "cells": [  // Значения каких ячеек нужно передать в ответе
        "C2",
        "C3",
        "C4",
        "C5"
    ]
}
```
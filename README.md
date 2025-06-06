﻿# adopetCypress
# 🐾 Testes de API com Cypress – Projeto Adopet

Este projeto foi desenvolvido como parte do meu aprendizado em **testes automatizados de API REST** utilizando o **Cypress**.

Utilizei a API pública do sistema **Adopet** para aplicar testes reais com foco em:
- Requisições `GET`, `POST`, `DELETE`
- Autenticação via headers
- Testes em massa com dados externos

🔗 API usada: [https://adopet-api-i8qu.onrender.com](https://adopet-api-i8qu.onrender.com)

---

## ✅ Funcionalidades testadas

### 🧪 Testes automatizados com Cypress
- `GET /mensagem/:id` → Busca mensagens específicas por ID
- `POST /mensagem` → Envio de nova mensagem autenticada
- `DELETE /mensagem/:id` → Remoção de mensagens específicas

### 🔐 Headers e autenticação
- Implementação de token de autenticação no header
- Validação de erros causados por header mal formatado (ex: `Headers` com "H" maiúsculo 😅)

### 📂 Massa de dados
- Uso de arquivos `.json` em `fixtures` para execução de testes em lote
- Execução de múltiplas requisições em um mesmo teste

---

## 🧠 O que eu aprendi

- Escrever testes de API com Cypress
- Trabalhar com autenticação por token
- Validar status codes, body de resposta e headers
- Identificar erros comuns de sintaxe e headers
- Organizar testes reutilizáveis com massa de dados externa

---

## 🛠️ Tecnologias utilizadas

- Cypress
- Node.js
- JavaScript
- Visual Studio Code
- API REST (Adopet)

---



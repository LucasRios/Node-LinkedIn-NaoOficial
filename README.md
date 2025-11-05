# Node-LinkedIn-NaoOficial (exemplo)

Script Node.js que demonstra operações básicas com `linkedin-private-api`: login, listar convites recebidos/enviados, buscar perfis e enviar convite de conexão.

> **Aviso importante:** essa biblioteca é **não oficial**. Uso pode violar os Termos do LinkedIn e resultar em bloqueio da conta.

---

## 📌 O que faz
- Autentica no LinkedIn (user/pass).
- Lista convites recebidos e enviados.
- Busca perfis por palavra-chave.
- Envia convite para o primeiro resultado da busca.

---

## ⚙️ Requisitos
- Node.js 16+ (recomendado)
- npm ou yarn
- Conta LinkedIn (use apenas em contas de teste)
- Conexão de rede estável

---

## 🚫 Riscos e recomendações de segurança (leia antes de usar)
- **Não** armazene e-mail/senha no código.
- Uso de APIs não oficiais pode levar a bloqueio ou suspensão permanente da conta.
- Evite executar em contas pessoais de produção.
- Prefira a **API oficial do LinkedIn** (OAuth2) para integrações sérias.
- Use IPs/contas de teste e intervalos de ações humanos para reduzir bloqueios.

---

## Instalação
1. Clone o repositório:
```bash
git clone <repo-url>
cd linkedin-automator
```

2. Instale dependências:
```bash
npm install
# ou
yarn
```
3. Crie um arquivo .env
```bash
LINKEDIN_USER=seu.email@exemplo.com
LINKEDIN_PASS=SENHA_SECRETA
```



# PortfolioHUB — Implantação com GitHub e Google Gemini

> Projeto acadêmico de demonstração para a entrega final do Bootcamp I. Ajuste os campos entre colchetes e substitua os exemplos pelos dados reais do seu repositório antes de entregar.

## 1. Objetivo
Implantar uma estrutura de portfólio digital para apresentar projetos, integrando o versionamento pelo Git/GitHub e usando o Google Gemini como apoio ao planejamento, documentação e revisão de segurança.

## 2. Tecnologias
- HTML5 e CSS3 (interface demonstrativa)
- Git e GitHub (versionamento e colaboração)
- Google Gemini (apoio à documentação, revisão e planejamento)
- GitHub Pages (opção de publicação estática)

## 3. Estrutura
```text
PortfolioHUB/
├── index.html
├── styles.css
├── script.js
├── README.md
├── .gitignore
├── docs/
│   ├── plano-implantacao.md
│   ├── seguranca-e-acessos.md
│   ├── testes.md
│   └── roteiro-apresentacao.md
└── assets/
```

## 4. Como executar localmente
1. Baixe ou clone o repositório.
2. Abra `index.html` no navegador. Para uma experiência melhor, use a extensão Live Server no VS Code.
3. Edite os projetos de exemplo em `script.js`.
4. Personalize nome, turma, links e descrição.

## 5. Git e GitHub
```bash
git init
git add .
git commit -m "feat: estrutura inicial do PortfolioHUB"
git branch -M main
git remote add origin https://github.com/marcopopovidis-coder/portifoliohub.git
git push -u origin main
```
Troque a URL de exemplo pela URL real do seu repositório. Se o repositório já existir, não execute `git init` novamente; configure o `remote` conforme necessário.

## 6. Publicar com GitHub Pages
1. Envie os arquivos para um repositório GitHub.
2. Abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione `main` e a pasta `/ (root)` e salve.
5. Aguarde a publicação e teste o endereço gerado pelo GitHub.

## 7. Segurança
- Não coloque tokens, senhas, chaves de API ou dados pessoais no repositório.
- Ative autenticação em dois fatores na conta GitHub.
- Conceda somente as permissões necessárias.
- Revise dependências e links antes da publicação.
- Use `issues` e `pull requests` para registrar mudanças e revisões.
- Gemini é ferramenta de apoio; valide manualmente recomendações e não envie dados confidenciais.

## 8. Integração com Gemini
Use o Gemini como assistente para:
- gerar um plano de implantação;
- revisar clareza da documentação;
- sugerir casos de teste;
- revisar o checklist de segurança;
- preparar o roteiro de apresentação.
Não afirme que existe integração automática por API se ela não foi implementada. Neste projeto, o Gemini é documentado como ferramenta de apoio.

## 9. Testes de aceitação
Consulte `docs/testes.md`. Marque cada teste como aprovado somente depois de executá-lo no seu ambiente.

## 10. Limitações e próximos passos
Esta entrega contém uma interface estática demonstrativa. Login, banco de dados, permissões por usuário e sincronização automática com a API do GitHub não estão implementados. Como evolução, podem ser adicionados backend, autenticação OAuth, persistência e integração via API com tokens guardados no servidor.

## 11. Dados da entrega
- Estudante: Marco Antônio Nista Popovidis
- Turma: Turma B / Eng. de Software
- Repositório: https://github.com/marcopopovidis-coder/portifoliohub
- Data: [19/10/26]

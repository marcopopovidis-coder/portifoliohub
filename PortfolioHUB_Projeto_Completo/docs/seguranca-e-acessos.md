# Gestão de usuários, segurança e colaboração

## Gestão de acesso
- Usar contas individuais; não compartilhar senhas.
- Ativar autenticação em dois fatores no GitHub.
- Conceder somente as permissões necessárias.
- Revisar colaboradores e remover acessos que não sejam mais necessários.
- Proteger a branch principal quando o recurso estiver disponível no plano/repositório.
- Revisar alterações antes de incorporá-las à branch principal.

## Proteção de informações
- Nunca versionar senhas, tokens, chaves privadas ou arquivos `.env`.
- Guardar segredos em gerenciador apropriado ou secrets de CI/CD, se utilizados.
- Se um token for publicado acidentalmente, revogá-lo e gerar outro.
- Manter dependências e ferramentas atualizadas.
- Validar links externos e usar `rel="noopener noreferrer"` em links que abrem nova aba.

## Papel do Gemini
Utilizar como apoio para revisar documentação e checklist, sem enviar informações confidenciais. O Gemini não substitui revisão humana nem representa uma integração automática com o sistema.

## Colaboração
1. Abrir uma issue para descrever a tarefa.
2. Criar uma branch para mudanças relevantes.
3. Fazer commits pequenos e descritivos.
4. Abrir pull request e revisar diferenças.
5. Executar testes antes do merge.
6. Registrar decisões importantes no README ou em `docs/`.

@echo off
echo Adicionando arquivos...
git add .

echo Fazendo commit...
git commit -m "v2.1.0 - Formulário modernizado com shadcn/ui

- Componentes shadcn/ui implementados (Input, Label, Textarea, Button, Card)
- Formulário de orçamento completamente modernizado
- Layout responsivo em grid 2 colunas
- Validação visual com focus states
- Design IA-inspired mantido
- Compatibilidade resolvida (sem dependências problemáticas)
- Documentação atualizada"

echo Fazendo push...
git push origin main

echo Concluído!
pause 
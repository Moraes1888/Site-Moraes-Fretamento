@echo off
echo Adicionando arquivos...
git add .

echo Fazendo commit v2.2.0...
git commit -m "v2.2.0 - Botões flutuantes otimizados

- Botões WhatsApp e IA redimensionados (p-6 → p-4 → p-3)
- Ícones reduzidos (text-4xl → text-3xl)
- Texto removido dos botões (apenas ícones)
- Logo oficial do WhatsApp implementado (SVG)
- Indicadores de status menores
- Design mais minimalista e elegante
- Tooltips mantidos para funcionalidade
- Documentação atualizada"

echo Fazendo push...
git push origin main

echo v2.2.0 enviada com sucesso!
pause 
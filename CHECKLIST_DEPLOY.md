# ✅ CHECKLIST DE DEPLOY - CORREÇÃO SEO

**Data:** 11 de Janeiro de 2026  
**Versão:** 1.0 - Migração BrowserRouter

---

## 📦 PRÉ-DEPLOY

### ✅ Arquivos Modificados (CONCLUÍDO)
- [x] `App.tsx` - HashRouter → BrowserRouter
- [x] `public/sitemap.xml` - URLs sem `#`
- [x] `public/robots.txt` - Corrigido bloqueio AhrefsBot
- [x] `.htaccess` - Criado com SPA routing

### ✅ Build Testado (CONCLUÍDO)
- [x] Build executado com sucesso
- [x] Sem erros de compilação
- [x] Arquivos gerados em `dist/`

---

## 🚀 DEPLOY - PASSO A PASSO

### Etapa 1: Teste Local (15 min)

```bash
# 1. Servir build localmente
npx serve -s dist -l 3000
```

**Testar no navegador:**
- [ ] http://localhost:3000/ (homepage)
- [ ] http://localhost:3000/blog (lista de artigos)
- [ ] http://localhost:3000/blog/minoxidil-funciona-verdade (artigo)
- [ ] http://localhost:3000/quem-somos (sobre)
- [ ] http://localhost:3000/estilos (estilos)

**Teste de Refresh:**
- [ ] Abrir qualquer página acima
- [ ] Apertar F5
- [ ] ✅ Deve recarregar a mesma página (não ir para homepage)

**Teste de Navegação:**
- [ ] Clicar em links do menu
- [ ] Voltar/Avançar do navegador
- [ ] ✅ Tudo deve funcionar normalmente

---

### Etapa 2: Backup (5 min)

**Antes de fazer upload:**
- [ ] Fazer backup completo do servidor atual
- [ ] Anotar configuração atual
- [ ] Ter plano de rollback se necessário

---

### Etapa 3: Upload para Servidor (20 min)

#### Arquivos para Upload:

**Da pasta `dist/`:**
- [ ] `index.html`
- [ ] `favicon.svg`
- [ ] `manifest.json`
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Pasta `assets/` (completa)

**Da raiz do projeto:**
- [ ] `.htaccess` (para Apache/LiteSpeed)

#### Destino no Servidor:
```
public_html/
├── index.html
├── favicon.svg
├── manifest.json
├── sitemap.xml
├── robots.txt
├── .htaccess
└── assets/
    └── (todos os arquivos JS/CSS)
```

---

### Etapa 4: Configuração do Servidor (10 min)

#### Se Apache/LiteSpeed (CyberPanel):
- [ ] Verificar se `.htaccess` foi enviado
- [ ] Verificar permissões: 644 para arquivos, 755 para pastas
- [ ] Verificar se `mod_rewrite` está habilitado

#### Se Nginx:
- [ ] Editar arquivo de configuração do site
- [ ] Adicionar bloco `try_files $uri $uri/ /index.html;`
- [ ] Reiniciar Nginx: `sudo systemctl restart nginx`

#### Verificar SSL/HTTPS:
- [ ] Certificado SSL ativo
- [ ] Redirecionamento HTTP → HTTPS funcionando

---

### Etapa 5: Testes em Produção (15 min)

**URLs para Testar:**

Homepage:
- [ ] https://cavanhaque.com.br/
- [ ] ✅ Carrega corretamente

Blog:
- [ ] https://cavanhaque.com.br/blog
- [ ] ✅ Lista de artigos aparece

Artigos (testar 3):
- [ ] https://cavanhaque.com.br/blog/minoxidil-funciona-verdade
- [ ] https://cavanhaque.com.br/blog/cavanhaque-masculino-guia-completo
- [ ] https://cavanhaque.com.br/blog/como-corrigir-falhas
- [ ] ✅ Artigos carregam corretamente

Páginas principais:
- [ ] https://cavanhaque.com.br/quem-somos
- [ ] https://cavanhaque.com.br/estilos
- [ ] https://cavanhaque.com.br/kits
- [ ] ✅ Todas carregam

**Teste de Refresh (CRÍTICO):**
- [ ] Abrir: https://cavanhaque.com.br/blog
- [ ] Apertar F5
- [ ] ✅ Deve recarregar `/blog` (não ir para homepage)
- [ ] Se der 404 → Problema na configuração do servidor!

**Teste de Compartilhamento:**
- [ ] Copiar URL de um artigo
- [ ] Abrir em aba anônima
- [ ] ✅ Deve abrir o artigo correto

---

### Etapa 6: Validação Técnica (20 min)

**Sitemap:**
- [ ] Acessar: https://cavanhaque.com.br/sitemap.xml
- [ ] ✅ Arquivo abre sem erros
- [ ] ✅ URLs não contêm `#`
- [ ] ✅ Todas as URLs são válidas

**Robots.txt:**
- [ ] Acessar: https://cavanhaque.com.br/robots.txt
- [ ] ✅ Arquivo abre
- [ ] ✅ Sitemap está referenciado
- [ ] ✅ Não há bloqueios indevidos

**Structured Data:**
- [ ] Ir para: https://search.google.com/test/rich-results
- [ ] Testar: https://cavanhaque.com.br/
- [ ] ✅ WebSite schema detectado
- [ ] ✅ Sem erros críticos

**Open Graph:**
- [ ] Ir para: https://developers.facebook.com/tools/debug/
- [ ] Testar: https://cavanhaque.com.br/blog/minoxidil-funciona-verdade
- [ ] ✅ Preview aparece corretamente
- [ ] ✅ Título, descrição e imagem OK

**PageSpeed:**
- [ ] Ir para: https://pagespeed.web.dev/
- [ ] Testar: https://cavanhaque.com.br/
- [ ] ✅ Score acima de 80 (mobile e desktop)

---

### Etapa 7: Google Search Console (30 min)

**Adicionar Propriedade (se ainda não tiver):**
- [ ] Acessar: https://search.google.com/search-console
- [ ] Adicionar propriedade: `https://cavanhaque.com.br`
- [ ] Verificar propriedade (HTML tag ou DNS)

**Submeter Sitemap:**
- [ ] Menu: Sitemaps
- [ ] Adicionar: `https://cavanhaque.com.br/sitemap.xml`
- [ ] ✅ Sitemap aceito sem erros

**Solicitar Indexação (Páginas Prioritárias):**

Homepage:
- [ ] Inspecionar URL: `https://cavanhaque.com.br/`
- [ ] Solicitar indexação

Blog:
- [ ] Inspecionar URL: `https://cavanhaque.com.br/blog`
- [ ] Solicitar indexação

Top 5 Artigos:
- [ ] `/blog/minoxidil-funciona-verdade`
- [ ] `/blog/cavanhaque-masculino-guia-completo`
- [ ] `/blog/como-corrigir-falhas`
- [ ] `/blog/visagismo-carecas-barbudos`
- [ ] `/blog/melhores-oleos-2024`

Páginas Principais:
- [ ] `/quem-somos`
- [ ] `/estilos`

**Verificar Cobertura:**
- [ ] Menu: Cobertura
- [ ] ✅ Nenhuma página bloqueada por robots.txt
- [ ] ✅ Nenhum erro de rastreamento

---

### Etapa 8: Google Analytics (10 min)

**Verificar Tracking:**
- [ ] Acessar: https://analytics.google.com/
- [ ] Ir para: Relatórios → Tempo real
- [ ] Navegar pelo site em outra aba
- [ ] ✅ Visitas aparecem em tempo real

**Configurar Eventos (Opcional):**
- [ ] Cliques em produtos afiliados
- [ ] Compartilhamentos sociais
- [ ] Newsletter signup

---

## 📊 MONITORAMENTO PÓS-DEPLOY

### Primeiras 24 horas:
- [ ] Verificar logs do servidor (erros 404)
- [ ] Monitorar Google Analytics (tráfego normal)
- [ ] Verificar Search Console (erros de rastreamento)

### Primeira semana:
- [ ] Verificar indexação diária no Search Console
- [ ] Solicitar reindexação de páginas importantes
- [ ] Monitorar posições de palavras-chave

### Primeiro mês:
- [ ] Acompanhar crescimento de páginas indexadas
- [ ] Analisar tráfego orgânico
- [ ] Identificar artigos com melhor performance
- [ ] Otimizar artigos que não estão ranqueando

---

## 🆘 TROUBLESHOOTING

### Problema: 404 ao acessar /blog

**Diagnóstico:**
```bash
# Verificar se .htaccess existe
ls -la .htaccess

# Verificar conteúdo
cat .htaccess
```

**Soluções:**
1. Verificar se `.htaccess` foi enviado
2. Verificar permissões (644)
3. Verificar se `mod_rewrite` está habilitado
4. Verificar logs: `/var/log/apache2/error.log`

### Problema: CSS/JS não carregam

**Diagnóstico:**
- Abrir DevTools (F12) → Console
- Verificar erros de carregamento

**Soluções:**
1. Verificar se pasta `assets/` foi enviada
2. Verificar permissões
3. Limpar cache do navegador (Ctrl+Shift+R)

### Problema: Sitemap não aparece no Search Console

**Diagnóstico:**
```bash
# Testar se sitemap está acessível
curl https://cavanhaque.com.br/sitemap.xml
```

**Soluções:**
1. Verificar se arquivo foi enviado
2. Verificar permissões (644)
3. Validar XML: https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Problema: Google ainda mostra URLs antigas com #

**Diagnóstico:**
- Cache do Google

**Soluções:**
1. Aguardar 1-2 semanas
2. Solicitar reindexação no Search Console
3. Criar redirects 301 (opcional)

---

## 📈 MÉTRICAS DE SUCESSO

### Semana 1:
- [ ] 5+ páginas indexadas
- [ ] 0 erros no Search Console
- [ ] Tráfego normal mantido

### Semana 2-4:
- [ ] 15+ páginas indexadas
- [ ] 3+ artigos ranqueando (top 50)
- [ ] Primeiras visitas orgânicas

### Mês 2:
- [ ] 20+ páginas indexadas
- [ ] 5+ artigos ranqueando (top 20)
- [ ] 50+ visitas orgânicas/dia

### Mês 3:
- [ ] Todas as páginas indexadas
- [ ] 10+ artigos ranqueando (top 10)
- [ ] 100+ visitas orgânicas/dia

---

## ✅ DEPLOY CONCLUÍDO

**Após completar todos os itens acima:**

- [ ] Documentar data e hora do deploy
- [ ] Anotar versão deployada
- [ ] Configurar alertas de monitoramento
- [ ] Agendar revisão em 7 dias
- [ ] Agendar revisão em 30 dias

---

## 📝 NOTAS IMPORTANTES

1. **Paciência é fundamental**
   - Google leva 1-4 semanas para reindexar
   - Resultados significativos em 2-3 meses
   - Continue criando conteúdo de qualidade

2. **Monitoramento contínuo**
   - Verificar Search Console semanalmente
   - Analisar Analytics semanalmente
   - Ajustar estratégia conforme dados

3. **Próximos passos**
   - Criar 2-3 artigos novos por mês
   - Otimizar artigos existentes
   - Construir backlinks de qualidade
   - Melhorar Core Web Vitals

---

**🎉 PARABÉNS! Seu site agora está pronto para ranquear no Google!**

Data do Deploy: _______________  
Responsável: _______________  
Status: ⬜ Pendente | ⬜ Em Progresso | ⬜ Concluído

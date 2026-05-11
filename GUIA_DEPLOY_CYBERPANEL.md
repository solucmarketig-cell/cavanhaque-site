# 🚀 Guia de Deploy - CyberPanel

**Data:** 19/01/2026  
**Arquivo:** `cavanhaque-build.zip`  
**Localização:** `c:\Users\marke\Downloads\cavanhaque\cavanhaque-build.zip`

---

## 📦 Arquivo de Deploy Criado

✅ **cavanhaque-build.zip** - Pronto para upload!

**Conteúdo:**
- Todos os arquivos otimizados da pasta `dist/`
- HTML, CSS, JavaScript minificados
- Imagens e assets
- Manifest PWA
- Favicon

---

## 🎯 Passo a Passo - Deploy no CyberPanel

### 1️⃣ Preparação

**Antes de começar:**
- ✅ Build de produção completo
- ✅ Performance 99-100/100 (desktop)
- ✅ Performance 100/100 (mobile)
- ✅ SEO 100/100
- ✅ Cores corrigidas
- ✅ Links afiliados atualizados

---

### 2️⃣ Acesso ao CyberPanel

1. **Login no CyberPanel**
   ```
   URL: https://seu-servidor:8090
   Usuário: admin
   Senha: [sua senha]
   ```

2. **Navegue para File Manager**
   - Menu lateral → **File Manager**
   - Ou: **Websites** → Selecione seu site → **File Manager**

---

### 3️⃣ Upload dos Arquivos

#### Opção A: Via File Manager (Recomendado)

1. **Navegue até a pasta pública**
   ```
   /home/[seu-usuario]/public_html/
   ```

2. **Limpe a pasta (se houver conteúdo antigo)**
   - Selecione todos os arquivos
   - Clique em **Delete**
   - Confirme a exclusão

3. **Upload do ZIP**
   - Clique em **Upload**
   - Selecione `cavanhaque-build.zip`
   - Aguarde o upload completar

4. **Extrair o ZIP**
   - Clique com botão direito no arquivo ZIP
   - Selecione **Extract**
   - Confirme a extração
   - **IMPORTANTE:** Os arquivos devem ficar em `/public_html/` e NÃO em `/public_html/dist/`

5. **Mover arquivos (se necessário)**
   - Se os arquivos foram extraídos em `dist/`, mova-os para `public_html/`:
   ```bash
   mv dist/* ./
   rmdir dist
   ```

#### Opção B: Via FTP/SFTP

1. **Conecte via FileZilla ou similar**
   ```
   Host: seu-dominio.com.br
   Porta: 21 (FTP) ou 22 (SFTP)
   Usuário: [seu-usuario]
   Senha: [sua senha]
   ```

2. **Navegue até `/public_html/`**

3. **Extraia o ZIP localmente primeiro**
   - Descompacte `cavanhaque-build.zip` no seu PC
   - Você terá uma pasta com todos os arquivos

4. **Upload dos arquivos**
   - Arraste TODOS os arquivos da pasta `dist/` para `/public_html/`
   - Aguarde o upload completar

#### Opção C: Via SSH (Avançado)

```bash
# 1. Conecte via SSH
ssh usuario@seu-dominio.com.br

# 2. Navegue até public_html
cd /home/usuario/public_html/

# 3. Limpe a pasta (cuidado!)
rm -rf *

# 4. Upload via SCP (do seu PC)
# No PowerShell do seu PC:
scp cavanhaque-build.zip usuario@seu-dominio.com.br:/home/usuario/public_html/

# 5. De volta ao SSH, extraia
unzip cavanhaque-build.zip

# 6. Remova o ZIP
rm cavanhaque-build.zip
```

---

### 4️⃣ Configuração do .htaccess

**IMPORTANTE:** Para SPA (Single Page Application) funcionar corretamente!

Crie ou edite o arquivo `.htaccess` em `/public_html/`:

```apache
# Cavanhaque - Configuração de Produção
# Performance e SPA Routing

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirecionar HTTP para HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # SPA Routing - Redirecionar tudo para index.html
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Compressão GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Cache de Navegador
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Imagens
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  
  # CSS e JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  
  # Fontes
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType application/font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
  
  # HTML (sem cache)
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Segurança
<IfModule mod_headers.c>
  # Prevenir clickjacking
  Header always set X-Frame-Options "SAMEORIGIN"
  
  # XSS Protection
  Header always set X-XSS-Protection "1; mode=block"
  
  # Content Type Options
  Header always set X-Content-Type-Options "nosniff"
  
  # Referrer Policy
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  
  # Cache Control para assets
  <FilesMatch "\.(js|css|jpg|jpeg|png|gif|webp|svg|woff|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  
  # Sem cache para HTML
  <FilesMatch "\.(html|htm)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "0"
  </FilesMatch>
</IfModule>

# Bloquear acesso a arquivos sensíveis
<FilesMatch "^\.">
  Order allow,deny
  Deny from all
</FilesMatch>
```

---

### 5️⃣ Verificação Pós-Deploy

#### Checklist de Verificação

1. **Acesse o site**
   ```
   https://seu-dominio.com.br
   ```

2. **Teste as páginas principais**
   - [ ] Homepage (`/`)
   - [ ] Blog (`/blog`)
   - [ ] Artigo individual (`/blog/minoxidil-para-barba`)
   - [ ] Estilos (`/estilos`)
   - [ ] Acessórios (`/acessorios`)
   - [ ] Kits (`/kits`)

3. **Verifique funcionalidades**
   - [ ] Navegação entre páginas
   - [ ] Links afiliados (Amazon e Mercado Livre)
   - [ ] Imagens carregando
   - [ ] Cores douradas visíveis
   - [ ] Menu responsivo (mobile)
   - [ ] Busca funcionando

4. **Teste performance**
   - [ ] Abra Chrome DevTools (F12)
   - [ ] Vá para Lighthouse
   - [ ] Execute audit de Performance
   - [ ] Verifique se mantém 90+ pontos

5. **Teste mobile**
   - [ ] Abra no celular
   - [ ] Teste navegação
   - [ ] Verifique responsividade
   - [ ] Teste touch targets

---

### 6️⃣ Configuração SSL (HTTPS)

**No CyberPanel:**

1. **Vá para SSL**
   - Menu → **SSL** → **Manage SSL**

2. **Selecione seu domínio**

3. **Issue SSL (Let's Encrypt)**
   - Clique em **Issue SSL**
   - Aguarde a emissão (1-2 minutos)
   - Confirme que SSL está ativo

4. **Force HTTPS**
   - O `.htaccess` já tem a regra de redirect
   - Teste acessando `http://` (deve redirecionar para `https://`)

---

### 7️⃣ Otimizações Opcionais

#### A. Habilitar HTTP/2
No CyberPanel:
- **Websites** → Seu site → **Configurations**
- Ative **HTTP/2**
- Salve

#### B. Configurar CDN (Cloudflare)
1. Crie conta no Cloudflare
2. Adicione seu domínio
3. Atualize nameservers no seu registrador
4. Configure cache rules:
   - Cache tudo exceto HTML
   - Browser cache TTL: 1 mês
   - Minify: CSS, JS, HTML

#### C. Configurar Google Analytics
- O código já está no site
- Verifique se está rastreando em `analytics.google.com`

---

## 🔍 Troubleshooting

### Problema: Página em branco

**Solução:**
1. Verifique se os arquivos estão em `/public_html/` e não em `/public_html/dist/`
2. Verifique permissões:
   ```bash
   chmod 755 /home/usuario/public_html/
   chmod 644 /home/usuario/public_html/*
   ```
3. Verifique o console do navegador (F12) para erros

### Problema: Rotas não funcionam (404)

**Solução:**
1. Verifique se o `.htaccess` está presente
2. Verifique se `mod_rewrite` está habilitado
3. Teste a regra de rewrite:
   ```apache
   RewriteRule . /index.html [L]
   ```

### Problema: CSS/JS não carrega

**Solução:**
1. Verifique se os arquivos estão na pasta `assets/`
2. Limpe cache do navegador (Ctrl+Shift+Delete)
3. Verifique permissões dos arquivos
4. Verifique se CORS está configurado

### Problema: Imagens não carregam

**Solução:**
1. Verifique URLs das imagens (devem ser absolutas ou relativas corretas)
2. Verifique se as imagens externas (Unsplash, etc) estão acessíveis
3. Verifique CORS para imagens externas

### Problema: Performance baixa

**Solução:**
1. Verifique se GZIP está ativo:
   ```bash
   curl -H "Accept-Encoding: gzip" -I https://seu-dominio.com.br
   ```
2. Verifique cache headers
3. Ative HTTP/2
4. Configure CDN (Cloudflare)

---

## 📊 Estrutura de Arquivos no Servidor

```
/home/usuario/public_html/
├── index.html                    # Página principal
├── .htaccess                     # Configurações Apache
├── manifest.json                 # PWA manifest
├── favicon.svg                   # Favicon
├── assets/
│   ├── index-[hash].css         # CSS compilado
│   ├── index-[hash].js          # JS principal
│   ├── react-vendor-[hash].js   # React bundle
│   ├── icons-[hash].js          # Ícones
│   ├── HomePage-[hash].js       # Página home (lazy)
│   ├── BlogPage-[hash].js       # Página blog (lazy)
│   └── ... (outros chunks)
```

---

## ✅ Checklist Final de Deploy

### Pré-Deploy
- [x] Build de produção completo
- [x] Performance testada (99-100/100)
- [x] Mobile testado (100/100)
- [x] Links afiliados verificados
- [x] Cores verificadas
- [x] ZIP criado

### Durante Deploy
- [ ] Arquivos enviados para `/public_html/`
- [ ] `.htaccess` configurado
- [ ] Permissões corretas (755/644)
- [ ] SSL configurado (HTTPS)

### Pós-Deploy
- [ ] Site acessível via HTTPS
- [ ] Todas as páginas funcionando
- [ ] Links afiliados funcionando
- [ ] Performance > 90 (Lighthouse)
- [ ] Mobile responsivo
- [ ] Google Analytics rastreando

---

## 🎯 Próximos Passos Após Deploy

1. **Monitoramento**
   - Configure Google Search Console
   - Configure Google Analytics
   - Configure uptime monitoring

2. **SEO**
   - Submeta sitemap ao Google
   - Verifique indexação
   - Monitore rankings

3. **Marketing**
   - Compartilhe nas redes sociais
   - Configure campanhas de ads
   - Crie conteúdo novo

4. **Manutenção**
   - Monitore performance
   - Atualize conteúdo regularmente
   - Verifique links quebrados

---

## 📞 Suporte

### Recursos Úteis
- **CyberPanel Docs:** https://cyberpanel.net/docs/
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **PageSpeed Insights:** https://pagespeed.web.dev/

### Comandos Úteis

```bash
# Ver logs de erro
tail -f /usr/local/lsws/logs/error.log

# Verificar permissões
ls -la /home/usuario/public_html/

# Testar .htaccess
apachectl configtest

# Limpar cache do servidor
rm -rf /tmp/lshttpd/*
```

---

## 🎉 Conclusão

Seu site está **100% pronto** para produção!

**Performance:**
- ✅ Desktop: 99-100/100
- ✅ Mobile: 100/100
- ✅ SEO: 100/100

**Arquivo de Deploy:**
- 📦 `cavanhaque-build.zip`
- 📍 Localização: `c:\Users\marke\Downloads\cavanhaque\`

**Bom deploy! 🚀**

---

**Data de criação:** 19/01/2026  
**Versão:** 1.0 - Production Ready

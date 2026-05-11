# 🚀 Guia de Deploy - CyberPanel

## ✅ Build de Produção Criado com Sucesso!

A pasta `dist` foi gerada e contém todos os arquivos otimizados para produção.

---

## 📁 Estrutura da Pasta `dist`

```
dist/
├── assets/
│   └── index-jwHMfnyQ.js    (370 KB - Todo o JavaScript otimizado)
├── favicon.svg              (881 bytes - Favicon personalizado)
├── index.html               (5.7 KB - Página principal)
├── manifest.json            (648 bytes - PWA manifest)
├── robots.txt               (504 bytes - SEO)
└── sitemap.xml              (5.4 KB - SEO)
```

**Total**: ~380 KB (compactado: ~105 KB com gzip)

---

## 🌐 Como Fazer Deploy no CyberPanel

### **Passo 1: Preparar os Arquivos**

1. **Navegue até a pasta do projeto**:
   ```bash
   cd c:\Users\marke\Downloads\cavanhaque
   ```

2. **Verifique se a pasta `dist` existe**:
   ```bash
   dir dist
   ```
   ✅ Você deve ver: `index.html`, `assets`, `favicon.svg`, etc.

---

### **Passo 2: Compactar a Pasta `dist`**

#### Opção A: Usando Windows Explorer
1. Clique com botão direito na pasta `dist`
2. Selecione **"Enviar para" > "Pasta compactada"**
3. Renomeie para `cavanhaque-dist.zip`

#### Opção B: Usando PowerShell
```powershell
Compress-Archive -Path "c:\Users\marke\Downloads\cavanhaque\dist\*" -DestinationPath "c:\Users\marke\Downloads\cavanhaque-dist.zip"
```

---

### **Passo 3: Upload para CyberPanel**

#### 3.1. Acesse o File Manager do CyberPanel

1. Faça login no **CyberPanel**
2. Vá em **Websites** > Selecione seu domínio
3. Clique em **File Manager**

#### 3.2. Navegue até a Pasta Public

1. Vá para: `/home/[seu-usuario]/public_html/`
2. **IMPORTANTE**: Limpe a pasta `public_html` antes (delete arquivos antigos)

#### 3.3. Faça Upload do ZIP

1. Clique em **Upload**
2. Selecione `cavanhaque-dist.zip`
3. Aguarde o upload completar

#### 3.4. Extraia o ZIP

1. Clique com botão direito no arquivo `cavanhaque-dist.zip`
2. Selecione **Extract**
3. Os arquivos serão extraídos para `public_html/`

#### 3.5. Mova os Arquivos (IMPORTANTE!)

Os arquivos foram extraídos dentro de uma pasta `dist`. Você precisa movê-los para a raiz:

**Via File Manager:**
1. Entre na pasta `dist`
2. Selecione **TODOS** os arquivos (Ctrl+A)
3. Clique em **Move**
4. Mova para: `/home/[seu-usuario]/public_html/`
5. Delete a pasta `dist` vazia

**OU via Terminal SSH:**
```bash
cd /home/[seu-usuario]/public_html/
mv dist/* .
rm -rf dist
rm cavanhaque-dist.zip
```

---

### **Passo 4: Configurar .htaccess (CRUCIAL para React Router)**

Como seu site usa React Router com HashRouter, você precisa criar um arquivo `.htaccess`:

#### 4.1. Crie o arquivo `.htaccess` em `public_html/`

```apache
# Habilitar RewriteEngine
RewriteEngine On

# Redirecionar HTTP para HTTPS (se tiver SSL)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Servir index.html para todas as rotas (SPA)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Compressão GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache de Assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/json "access plus 1 week"
</IfModule>

# Segurança
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### 4.2. Salve o arquivo

No File Manager do CyberPanel:
1. Clique em **Create New File**
2. Nome: `.htaccess`
3. Cole o conteúdo acima
4. Salve

---

### **Passo 5: Verificar Permissões**

Certifique-se de que as permissões estão corretas:

```bash
chmod 644 /home/[seu-usuario]/public_html/index.html
chmod 644 /home/[seu-usuario]/public_html/.htaccess
chmod 755 /home/[seu-usuario]/public_html/assets
chmod 644 /home/[seu-usuario]/public_html/assets/*
```

---

### **Passo 6: Configurar SSL (HTTPS)**

#### Via CyberPanel:
1. Vá em **SSL** > **Issue SSL**
2. Selecione seu domínio
3. Clique em **Issue SSL** (Let's Encrypt grátis)
4. Aguarde 1-2 minutos

---

### **Passo 7: Testar o Site**

1. Acesse: `https://cavanhaque.com.br`
2. Verifique se:
   - ✅ Site carrega corretamente
   - ✅ Favicon aparece
   - ✅ Navegação funciona (Blog, Quem Somos, etc.)
   - ✅ HTTPS está ativo (cadeado verde)

---

## 🔧 Solução de Problemas Comuns

### Problema 1: "404 Not Found" ao navegar
**Causa**: `.htaccess` não está configurado  
**Solução**: Crie o arquivo `.htaccess` conforme Passo 4

### Problema 2: Site mostra página em branco
**Causa**: Arquivos não estão na raiz do `public_html`  
**Solução**: Mova os arquivos da pasta `dist` para a raiz

### Problema 3: Imagens não carregam
**Causa**: Permissões incorretas  
**Solução**: Execute `chmod 644` nos arquivos

### Problema 4: CSS/JS não carrega
**Causa**: Caminho incorreto ou cache  
**Solução**: 
- Limpe cache do navegador (Ctrl+Shift+Del)
- Verifique se a pasta `assets` existe

### Problema 5: "Mixed Content" (HTTP/HTTPS)
**Causa**: Site carrega recursos HTTP em página HTTPS  
**Solução**: Força HTTPS no `.htaccess` (já incluído acima)

---

## 📊 Checklist de Deploy

### Antes do Deploy:
- [x] Build de produção criado (`npm run build`)
- [x] Pasta `dist` existe e contém arquivos
- [x] Arquivos compactados em ZIP

### Durante o Deploy:
- [ ] Upload do ZIP para CyberPanel
- [ ] Extração dos arquivos
- [ ] Arquivos movidos para raiz do `public_html`
- [ ] Arquivo `.htaccess` criado
- [ ] Permissões configuradas
- [ ] SSL instalado

### Após o Deploy:
- [ ] Site acessível via HTTPS
- [ ] Navegação funcionando
- [ ] Favicon visível
- [ ] Console sem erros (F12)
- [ ] Testar em mobile

---

## 🚀 Comandos Rápidos (SSH)

Se você tiver acesso SSH, pode fazer tudo de uma vez:

```bash
# 1. Navegar para public_html
cd /home/[seu-usuario]/public_html/

# 2. Limpar arquivos antigos
rm -rf *

# 3. Upload do ZIP (use SFTP ou scp)
# Depois extraia:
unzip cavanhaque-dist.zip
mv dist/* .
rm -rf dist cavanhaque-dist.zip

# 4. Criar .htaccess
nano .htaccess
# (Cole o conteúdo e salve com Ctrl+X, Y, Enter)

# 5. Ajustar permissões
chmod 644 index.html .htaccess
chmod 755 assets
chmod 644 assets/*
```

---

## 📈 Próximos Passos Após Deploy

1. **Submeter Sitemap ao Google**:
   - Google Search Console: https://search.google.com/search-console
   - Adicione: `https://cavanhaque.com.br/sitemap.xml`

2. **Configurar Google Analytics**:
   - Edite `/services/analytics.ts` com seu ID
   - Faça novo build: `npm run build`
   - Re-upload

3. **Testar Performance**:
   - PageSpeed Insights: https://pagespeed.web.dev/
   - Expectativa: Score 95+/100

4. **Monitorar**:
   - Verifique Google Analytics diariamente
   - Monitore Search Console semanalmente

---

## 📞 Suporte

Se tiver problemas:
1. Verifique logs do CyberPanel
2. Teste em modo anônimo (Ctrl+Shift+N)
3. Verifique console do navegador (F12)

---

## ✅ Resumo

**Arquivos para Upload**: Pasta `dist` completa (ou ZIP)  
**Destino**: `/home/[seu-usuario]/public_html/`  
**Arquivo Crucial**: `.htaccess` (para React Router funcionar)  
**SSL**: Obrigatório (Let's Encrypt grátis via CyberPanel)

**Seu site está pronto para produção!** 🎉🚀

# 🚀 INSTRUÇÕES DE DEPLOY - CYBERPANEL

## ✅ CHECKLIST PRÉ-DEPLOY

Antes de fazer o upload, confirme:

- [x] Build de produção gerado (`npm run build` executado)
- [x] Pasta `dist` contém todos os arquivos
- [x] Arquivo `.htaccess` criado na pasta `dist`
- [x] Domínio `cavanhaque.com` apontando para o servidor
- [x] SSL/HTTPS configurado no CyberPanel

---

## 📂 ESTRUTURA DE ARQUIVOS

A pasta `dist` contém TUDO que você precisa fazer upload:

```
dist/
├── index.html          # Arquivo principal
├── .htaccess           # Configurações do servidor (IMPORTANTE!)
├── favicon.svg         # Ícone do site
├── sitemap.xml         # Mapa do site para Google
├── robots.txt          # Instruções para buscadores
├── manifest.json       # PWA manifest
└── assets/             # Todos os JS, CSS e imagens
    ├── index-BdCYKQgn.css (54KB → 9KB comprimido)
    ├── index-BdCYKQgn.css.gz
    ├── index-BYl4Udks.js (45KB → 15KB comprimido)
    ├── index-BYl4Udks.js.gz
    ├── react-vendor-CPBzP2mA.js (159KB → 52KB comprimido)
    ├── react-vendor-CPBzP2mA.js.gz
    └── ... (todos os outros chunks e assets)
```

---

## 🔧 PASSO A PASSO - DEPLOY NO CYBERPANEL

### **1. Acesse o CyberPanel**

1. Vá para: `https://SEU_SERVIDOR:8090`
2. Faça login com suas credenciais

### **2. Prepare o Domínio**

1. No menu lateral, clique em **"Websites"** → **"List Websites"**
2. Encontre o site `cavanhaque.com`
3. Se não existir, crie um novo:
   - **"Websites"** → **"Create Website"**
   - **Domain Name**: `cavanhaque.com`
   - **Email**: seu@email.com
   - **PHP**: Escolha a versão mais recente (ou None, pois é um site React estático)
   - Clique em **"Create Website"**

### **3. Configure SSL (HTTPS)**

1. No menu, vá em **"SSL"** → **"Issue SSL"**
2. Selecione o domínio: `cavanhaque.com`
3. Marque as opções:
   - [x] `cavanhaque.com`
   - [x] `www.cavanhaque.com` (se quiser)
4. Clique em **"Issue SSL"**
5. Aguarde a emissão (Let's Encrypt)

### **4. Acesse o Gerenciador de Arquivos**

**Opção A: Via CyberPanel (Recomendado)**

1. No menu, clique em **"File Manager"**
2. Selecione o domínio: `cavanhaque.com`
3. Navegue até a pasta: `public_html/`

**Opção B: Via FTP/SFTP**

1. Use FileZilla ou WinSCP
2. Conecte-se via SFTP:
   - **Host**: IP do servidor
   - **Porta**: 22
   - **Usuário**: `cavanhaq` (usuário do site no CyberPanel)
   - **Senha**: A senha que você definiu
3. Navegue até: `/home/cavanhaq/public_html/`

### **5. Limpe a Pasta `public_html`**

⚠️ **IMPORTANTE**: Delete TUDO que estiver dentro de `public_html/`

- Se houver arquivos antigos (index.html, wp-admin, etc.), delete todos.
- A pasta deve ficar **completamente vazia**.

### **6. Faça o Upload dos Arquivos**

1. Abra a pasta `dist` no seu computador:
   ```
   C:\Users\marke\Downloads\cavanhaque\dist
   ```

2. **Selecione TODOS os arquivos e pastas dentro de `dist`**:
   - index.html
   - .htaccess
   - favicon.svg
   - sitemap.xml
   - robots.txt
   - manifest.json
   - pasta `assets/` (inteira)

3. **Arraste para `public_html/`** ou use o botão "Upload"

4. Aguarde o upload completo (pode levar 2-5 minutos)

### **7. Verifique os Arquivos**

Após o upload, a estrutura em `public_html/` deve estar assim:

```
public_html/
├── index.html
├── .htaccess
├── favicon.svg
├── sitemap.xml
├── robots.txt
├── manifest.json
└── assets/
    ├── (todos os arquivos JS, CSS, etc.)
```

### **8. Configure as Permissões (Opcional)**

Se houver erro de permissão:

1. Selecione todos os arquivos
2. Clique com botão direito → **"Permissions"** ou **"Chmod"**
3. Defina:
   - **Arquivos**: `644`
   - **Pastas**: `755`

### **9. Teste o Site**

1. Abra o navegador
2. Acesse: `https://cavanhaque.com`
3. Verifique se o site carrega normalmente

**Teste estas páginas:**
- Home: `https://cavanhaque.com/`
- Blog: `https://cavanhaque.com/blog`
- Cabelo: `https://cavanhaque.com/cabelo`
- Estilos: `https://cavanhaque.com/estilos`

Se todas carregarem, o `.htaccess` está funcionando! 🎉

---

## 🔍 VERIFICAÇÕES PÓS-DEPLOY

### **1. Teste de Performance**

Acesse: https://pagespeed.web.dev/
Digite: `https://cavanhaque.com`

**Métricas esperadas (Mobile):**
- Performance: 85-95/100
- SEO: 100/100
- Acessibilidade: 90+/100

### **2. Teste de HTTPS**

1. Acesse: `http://cavanhaque.com` (sem HTTPS)
2. Deve redirecionar automaticamente para `https://cavanhaque.com`

### **3. Teste do Sitemap**

Acesse: `https://cavanhaque.com/sitemap.xml`

Deve mostrar o XML com todas as páginas.

### **4. Teste do Google Search Console**

1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: `cavanhaque.com`
3. Verifique a propriedade (via HTML file upload ou DNS)
4. Envie o sitemap: `https://cavanhaque.com/sitemap.xml`

### **5. Teste do AdSense (Se aplicável)**

1. Acesse: https://www.google.com/adsense
2. Adicione o código do AdSense no `index.html` (dentro de `<head>`)
3. Aguarde aprovação (pode levar 1-3 dias)

---

## ⚠️ PROBLEMAS COMUNS E SOLUÇÕES

### **Problema 1: Página em branco ou erro 404**

**Solução:**
- Verifique se o arquivo `.htaccess` foi enviado (pode estar oculto)
- No FileZilla/WinSCP: Ative "Mostrar arquivos ocultos"
- Verifique se o módulo `mod_rewrite` está ativo no Apache/LiteSpeed

### **Problema 2: Arquivos CSS/JS não carregam**

**Solução:**
- Verifique as permissões da pasta `assets/` (deve ser 755)
- Verifique se os arquivos `.gz` foram enviados junto

### **Problema 3: Redireciona para `www.cavanhaque.com`**

**Solução:**
- O `.htaccess` já está configurado para remover o `www`
- Limpe o cache do navegador (Ctrl + Shift + Delete)
- Aguarde a propagação do DNS (pode levar até 24h)

### **Problema 4: "Connection not secure"**

**Solução:**
- Verifique se o SSL foi emitido corretamente no CyberPanel
- Force a renovação do SSL (às vezes falha na primeira tentativa)

---

## 🎯 PRÓXIMOS PASSOS (Após Deploy)

1. **Google Analytics**: Adicionar o código de tracking no `index.html`
2. **Google Search Console**: Enviar sitemap e monitorar indexação
3. **AdSense**: Solicitar aprovação (se ainda não fez)
4. **Monitoramento**: Configurar alertas de uptime (UptimeRobot, etc.)
5. **Backup**: Configurar backup automático no CyberPanel

---

## 📞 SUPORTE

Se tiver algum problema durante o deploy, coisas a verificar:

1. Logs de erro do servidor (CyberPanel → Error Logs)
2. Console do navegador (F12 → Console)
3. Network tab (F12 → Network) para ver quais arquivos falharam

---

**Última atualização**: 04/02/2026
**Versão do Build**: Otimizada para Mobile (LCP < 2.5s)
**Tamanho Total**: ~280KB (não comprimido) → ~80KB (com gzip)

🚀 **Bom deploy!**

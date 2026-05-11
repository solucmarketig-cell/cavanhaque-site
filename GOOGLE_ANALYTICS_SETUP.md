# 📊 Guia de Configuração do Google Analytics

## Como Configurar o Google Analytics 4

### 1. **Criar uma Conta no Google Analytics**

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Faça login com sua conta Google
3. Clique em "Começar a medir" ou "Admin" (ícone de engrenagem)
4. Crie uma nova propriedade:
   - Nome da propriedade: **Cavanhaque**
   - Fuso horário: **Brasil (GMT-3)**
   - Moeda: **Real brasileiro (BRL)**

### 2. **Obter o ID de Medição (Measurement ID)**

1. Após criar a propriedade, vá em **Admin** > **Fluxos de dados**
2. Clique em **Adicionar fluxo** > **Web**
3. Configure:
   - URL do site: `https://cavanhaque.com.br`
   - Nome do fluxo: **Cavanhaque Website**
4. Clique em **Criar fluxo**
5. **COPIE o ID de Medição** (formato: `G-XXXXXXXXXX`)

### 3. **Adicionar o ID no Código**

Abra o arquivo `/services/analytics.ts` e substitua:

```typescript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

Por:

```typescript
const GA_MEASUREMENT_ID = 'G-SEU-ID-AQUI';
```

### 4. **Verificar se Está Funcionando**

1. Acesse seu site: http://localhost:3000/
2. Abra o Google Analytics
3. Vá em **Relatórios** > **Tempo real**
4. Navegue pelo site e veja os dados aparecendo em tempo real!

## 🎯 Eventos Personalizados

O código já está preparado para rastrear eventos personalizados. Você pode adicionar eventos assim:

```typescript
import { logEvent } from './services/analytics';

// Exemplo: Rastrear clique em produto
logEvent('click', 'produto', 'Minoxidil Kirkland', 1);

// Exemplo: Rastrear compartilhamento
logEvent('share', 'social', 'Facebook');

// Exemplo: Rastrear newsletter
logEvent('signup', 'newsletter', 'footer');
```

## 📈 Métricas Importantes para Acompanhar

1. **Páginas mais visitadas**
2. **Taxa de rejeição** (bounce rate)
3. **Tempo médio na página**
4. **Artigos mais lidos**
5. **Origem do tráfego** (Google, redes sociais, direto)
6. **Conversões** (cliques em produtos afiliados)

## 🔒 Privacidade e LGPD

⚠️ **IMPORTANTE**: Você deve informar os usuários sobre o uso de cookies e analytics.

Adicione um banner de cookies ou atualize sua política de privacidade mencionando:
- Uso do Google Analytics
- Coleta de dados anônimos
- Finalidade: melhorar a experiência do usuário

## ✅ Checklist de Configuração

- [ ] Criar conta no Google Analytics 4
- [ ] Obter ID de Medição (G-XXXXXXXXXX)
- [ ] Substituir ID em `/services/analytics.ts`
- [ ] Testar em tempo real
- [ ] Configurar metas/conversões (opcional)
- [ ] Atualizar política de privacidade
- [ ] Adicionar banner de cookies (recomendado)

## 🚀 Recursos Avançados (Opcional)

### Rastrear Cliques em Links Afiliados

Adicione isso nos links de produtos:

```tsx
<a 
  href={AFF_MINOXIDIL}
  onClick={() => logEvent('click', 'affiliate', 'Minoxidil Kirkland')}
  target="_blank"
>
  Ver Produto
</a>
```

### Rastrear Tempo de Leitura de Artigos

```typescript
useEffect(() => {
  const startTime = Date.now();
  
  return () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    logEvent('time_spent', 'article', slug, timeSpent);
  };
}, [slug]);
```

---

**Dúvidas?** Consulte a [documentação oficial do Google Analytics 4](https://support.google.com/analytics/answer/9304153)

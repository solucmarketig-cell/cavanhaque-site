
import React, { useEffect } from 'react';
import { Calendar, User, Clock, Share2, ArrowLeft, CheckCircle2, Star, ArrowRight, FlaskConical, Target, Trophy, Crown, Anchor, Droplets, Zap, Scissors, Film, Sparkles, AlertCircle, TrendingUp, Briefcase, Smile, ShieldCheck, HeartPulse, Hammer, Shirt, Layout, UserCheck, Microscope, Eye, AlertTriangle, Info } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import AdUnit from '../components/AdUnit';
import { fetchArticles } from '../services/contentService';
import { Article } from '../types';
import TutorialSteps from '../components/TutorialSteps';
import ToolBox from '../components/ToolBox';

const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const [relatedArticles, setRelatedArticles] = React.useState<Article[]>([]);

  useEffect(() => {
    fetchArticles().then(data => {
      // Filter out current article and pick 3 random ones
      const filtered = data.filter(a => a.slug !== slug);
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      setRelatedArticles(shuffled.slice(0, 3));
    });
  }, [slug]);

  // Links Afiliados Estratégicos
  const AFF_DERMAROLLER = "https://mercadolivre.com/sec/28LNYBa";
  const AFF_MINOXIDIL = "https://meli.la/1ek2JKf";
  const AFF_VIKING = "https://amzn.to/4jEsJYH";
  const AFF_OIL = "https://mercadolivre.com/sec/2Wo6ZWc";
  const AFF_KIT_FACIAL = "https://amzn.to/4pzgTAw";
  const AFF_TESOURA = "https://produto.mercadolivre.com.br/MLB-3908174291-tesoura-profissional-cabeleireiro-barbeiro-fio-navalha-kit-_JM";
  const AFF_BALM = "https://meli.la/1jvcZjc";

  const articlesData: Record<string, any> = {
    'corte-para-cabelo-cacheado': {
      title: "Corte para Cabelo Cacheado: 5 Estilos que são Tendência em 2026",
      subtitle: "Descubra o corte para cabelo cacheado ideal para o seu formato de rosto e aprenda a técnica do corte a seco.",
      author: "Lara Estilo",
      date: "14 de Maio de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/corte-cacheado-tendencia-v2.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Escolher o <strong>corte para cabelo cacheado</strong> certo é o que separa um cabelo sem forma de uma moldura perfeita para o rosto. Diferente do cabelo liso, o cacho possui o 'fator encolhimento', o que torna a escolha do estilo e do profissional algo estratégico. Seja você fã de volume máximo ou de um visual mais controlado, existe um corte desenhado exatamente para a sua curvatura. 
            <br /><br />
            Com a consultoria da nossa especialista <strong>Lara Estilo</strong>, mapeamos as tendências que estão dominando os salões e que prometem ser o auge de 2026.
          </p>
          <ToolBox 
            tools={[
              { name: "Tesoura de Fio Navalha Profissional", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Óleo Finalizador Antifrizz", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente Garfo para Volume", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Creme Ativador de Cachos Premium", link: "https://mercadolivre.com/sec/2Wo6ZWc" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6 text-center">Top 5 Cortes para Valorizar seus Cachos em 2026</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Shaggy Hair Cacheado (O Rei da Textura)",
                description: "O Shaggy é o queridinho das mulheres modernas. Com camadas desconectadas e uma franja cheia de atitude, ele traz movimento e reduz o peso excessivo das pontas, evitando o temido efeito 'pirâmide'. É ideal para quem busca um visual rocker e despojado que funciona tanto no 2C quanto no 3B.",
                tip: "Finalize amassando os fios de baixo para cima com um pouco de mousse para manter as camadas destacadas.",
                image: "/assets/corte-shaggy-cacheado.webp"
              },
              {
                title: "2. Corte em Camadas Progressivas (U ou V)",
                description: "Este clássico foi reinventado com camadas que começam na altura da maçã do rosto. Elas ajudam a distribuir o volume por toda a extensão, garantindo que o topo tenha vida e as pontas não fiquem ralas. O corte em V é excelente para alongar a silhueta em cabelos longos.",
                tip: "Sempre peça o corte a seco; assim você e o profissional têm controle total sobre o fator encolhimento dos seus cachos.",
                image: "/assets/corte-camadas-curly.webp"
              },
              {
                title: "3. Heart Shape (O Formato Coração)",
                description: "Específico para quem ama volume no topo e laterais arredondadas. Como o nome sugere, o formato final lembra um coração, valorizando muito o queixo e abrindo o olhar. É a escolha definitiva para as curvaturas 3B, 3C e 4A que desejam um visual romântico e poderoso.",
                tip: "O segredo aqui é o pente garfo na raiz logo após a secagem para 'abrir' o corte e revelar o design.",
                image: "/assets/corte-coracao-curly.webp"
              },
              {
                title: "4. Short Bob Cacheado (Sofisticação Curta)",
                description: "Uma versão moderna do bob tradicional. O comprimento na altura do queixo com camadas internas invisíveis cria um visual sofisticado que destaca a linha do pescoço e maxilar. É prático para o dia a dia e extremamente elegante para eventos formais.",
                tip: "Use um sérum de brilho nas pontas para um acabamento de passarela que destaca a curvatura.",
                image: "/assets/corte-bob-curly.webp"
              },
              {
                title: "5. Wolf Cut Cacheado (Ousadia e Volume)",
                description: "O encontro explosivo do mullet com o shaggy. Este corte foca em um volume dramático no topo e camadas que afinam drasticamente em direção à nuca. É a escolha de quem não tem medo de ousar e quer um visual de influencer internacional.",
                tip: "A franja cortininha (curtain bangs) é obrigatória aqui para fechar o visual com perfeição.",
                image: "/assets/corte-wolf-cut-curly.webp"
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-16 mb-8 text-center">Visagismo: Qual o Corte Ideal para Você?</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <thead className="bg-brand-charcoal text-white">
                <tr>
                  <th className="p-4 text-left font-bold uppercase text-xs">Curvatura</th>
                  <th className="p-4 text-left font-bold uppercase text-xs">Corte Recomendado</th>
                  <th className="p-4 text-left font-bold uppercase text-xs">Objetivo Principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 text-sm font-bold">2C / 3A</td>
                  <td className="p-4 text-sm italic">Shaggy ou Wolf Cut</td>
                  <td className="p-4 text-sm">Criar volume e textura onde o fio é mais pesado.</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 text-sm font-bold">3B / 3C</td>
                  <td className="p-4 text-sm italic">Heart Shape ou Camadas</td>
                  <td className="p-4 text-sm">Definição e distribuição equilibrada do volume.</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 text-sm font-bold">4A / 4B</td>
                  <td className="p-4 text-sm italic">Corte Coração ou Taper Fade</td>
                  <td className="p-4 text-sm">Valorizar a estrutura afro e o volume vertical.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Scissors size={120} /></div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">FAQ: Dúvidas sobre Corte Cacheado</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-gold mb-2">Com que frequência devo cortar?</h4>
                <p className="text-gray-400 text-sm">Para manter o formato e evitar pontas duplas, recomendamos o corte a cada 3 ou 4 meses. Cortes curtos como o Bob podem precisar de retoques a cada 60 dias.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-gold mb-2">O corte a seco é realmente melhor?</h4>
                <p className="text-sm text-gray-400">Sim! Molhado, o cacho estica. Seco, ele mostra sua forma real. Cortar a seco evita surpresas desagradáveis com o comprimento final.</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica da Lara Estilo
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A regra de ouro: nunca use navalha em cachos! Ela destrói a cutícula do fio e gera frizz impossível de controlar. Exija sempre o uso da tesoura de fio navalha para um corte limpo e saudável que respeite a sua curvatura."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'pick-comb', name: "Pente Garfo de Metal", desc: "A ferramenta indispensável para dar volume e forma ao corte.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Hammer size={32} /> },
        { id: 'mousse-def', name: "Mousse de Definição Atômica", desc: "Fixa as camadas do corte sem deixar o fio endurecido.", link: "https://mercadolivre.com/sec/28LNYBa", icon: <Zap size={32} /> }
      ]
    },
    'corte-americano-cabelo-cacheado-feminino': {
      title: "Corte Americano Feminino: A Tendência do Fade para Cacheadas",
      subtitle: "Descubra como o clássico 'Taper Fade' se adaptou ao universo feminino, trazendo modernidade e destaque para os cachos.",
      author: "Lara Estilo",
      date: "14 de Maio de 2026",
      readTime: "11 min",
      category: "Cabelo",
      image: "/assets/corte-americano-feminino-cacheado.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>corte americano</strong> (ou Taper Fade) deixou de ser exclusividade das barbearias para dominar o visual das mulheres que buscam atitude e praticidade. Quando aplicado ao <strong>cabelo cacheado</strong>, esse estilo cria um contraste poderoso: as laterais polidas e graduadas dão total protagonismo ao volume e à definição do topo. É o corte perfeito para quem deseja um visual moderno, fresco e carregado de personalidade.
          </p>
          <ToolBox 
            tools={[
              { name: "Máquina de Acabamento Slim", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Pomada Modeladora Efeito Matte", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Óleo de Argan para Finalização", link: "https://mercadolivre.com/sec/28LNYBa" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Por que apostar no Corte Americano?</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Valorização da Estrutura Facial",
                description: "O degradê lateral (fade) 'limpa' o visual ao redor das orelhas e têmporas, o que ajuda a alongar o rosto e destacar as maçãs e o maxilar. Para cacheadas, isso significa que o volume não 'pesa' no rosto, mantendo a leveza.",
                tip: "Peça ao profissional para ajustar a altura do fade conforme o formato das suas orelhas e rosto.",
                image: "/assets/corte-americano-feminino-cacheado.webp"
              },
              {
                title: "2. Versatilidade de Estilização",
                description: "Com as laterais baixas, você pode focar toda a sua criatividade no topo. Use técnicas de fitagem para cachos super definidos ou use um pente garfo para um visual afro-chic volumoso e impactante.",
                tip: "Experimente usar acessórios como presilhas coloridas na transição do fade para um visual mais delicado.",
                image: "/assets/curly-american-versatility.png"
              },
              {
                title: "3. Praticidade no Day After",
                description: "Menos cabelo nas laterais significa menos tempo desembaraçando áreas críticas. O corte americano mantém o visual arrumado por mais tempo, exigindo apenas uma revitalização rápida dos cachos do topo pela manhã.",
                tip: "Use uma fronha de cetim para que o fade não perca a nitidez devido ao atrito com o travesseiro.",
                image: "/assets/curly-satin-pillowcase.png"
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica da Lara
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O segredo do corte americano feminino é a transição. Diferente do corte masculino, que costuma ser mais geométrico, o feminino pode ter linhas mais suaves e orgânicas. Certifique-se de que o profissional entende a curvatura do seu cacho para que o degradê não fique com 'degraus'."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'trimmer-pro', name: "Trimmer Profissional Slim", desc: "Ideal para manter o pezinho e o fade sempre em dia.", link: "https://mercadolivre.com/sec/1exasrj", icon: <Scissors size={32} /> },
        { id: 'matte-paste', name: "Pomada Matte Control", desc: "Define os fios do topo sem brilho excessivo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Droplets size={32} /> }
      ]
    },
    'corte-para-cabelo-cacheado-tendencias': {
      title: "Corte para Cabelo Cacheado: Tendências que vão Dominar 2026",
      subtitle: "Do visual 'Butterfly' ao 'Wolf Cut', veja quais cortes para cabelo cacheado são as apostas das passarelas internacionais.",
      author: "Lara Estilo",
      date: "14 de Maio de 2026",
      readTime: "13 min",
      category: "Cabelo",
      image: "/assets/corte-cabelo-cacheado-feminino-tendencia.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se você busca um novo <strong>corte para cabelo cacheado</strong>, 2026 é o ano da liberdade. As tendências apontam para visuais que abraçam a textura natural e o volume indomado, mas com uma engenharia de camadas que garante movimento e leveza. Esqueça os cortes retos e sem vida; a moda agora é a escultura capilar que valoriza cada curva do seu fio.
          </p>
          <ToolBox 
            tools={[
              { name: "Creme de Pentear Reconstrutor", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Difusor de Alta Performance", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Tesoura de Desbaste Especializada", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">As 3 Apostas de 2026 para Cacheadas</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Butterfly Cut Cacheado",
                description: "O corte 'Borboleta' chegou aos cachos. Com camadas curtas no topo que se misturam a camadas longas na base, ele cria a ilusão de dois comprimentos diferentes, proporcionando um volume luxuoso e um movimento incrível.",
                tip: "Finalize com um leave-in leve para que as camadas 'voem' naturalmente.",
                image: "/assets/curly-butterfly-cut.png"
              },
              {
                title: "2. Wolf Cut com Volume Afro",
                description: "A mistura do mullet com o shaggy continua forte. Para cacheadas, o foco é na franja volumosa e nas laterais mais baixas, criando um visual 'messy' proposital e cheio de estilo urbano.",
                tip: "Use uma gelatina modeladora para dar peso e definição à franja.",
                image: "/assets/curly-wolf-cut.png"
              },
              {
                title: "3. Round Layered (Camadas Arredondadas)",
                description: "O clássico redondo ganha novas proporções. O objetivo é criar uma moldura circular perfeita ao redor do rosto, distribuindo o volume de forma uniforme. É o corte ideal para quem não tem medo de ser notada.",
                tip: "Penteie a raiz para cima enquanto seca com o difusor para maximizar o formato redondo.",
                image: "/assets/curly-round-cut.png"
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica da Especialista
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Independentemente da tendência, o melhor corte para cabelo cacheado é aquele que respeita a sua rotina. Se você não gosta de usar secador, evite cortes que exigem muita finalização. O corte deve trabalhar a seu favor no dia a dia, não contra."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'curly-cream', name: "Creme Ativador de Cachos Gold", desc: "Definição prolongada e proteção térmica.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Droplets size={32} /> },
        { id: 'pro-diffuser', name: "Difusor Tornado Power", desc: "Secagem ultra rápida sem desmanchar os cachos.", link: "https://mercadolivre.com/sec/28LNYBa", icon: <Zap size={32} /> }
      ]
    },
    'cabelo-cacheado': {
      title: "Cabelo Cacheado: O Guia Absoluto de Cuidados e Tendências",
      subtitle: "Do 2A ao 4C: Aprenda a identificar, tratar e amar a verdadeira essência do seu cabelo cacheado.",
      author: "Lara Estilo",
      date: "14 de Maio de 2026",
      readTime: "16 min",
      category: "Cabelo",
      image: "/assets/cabelo-cacheado-absoluto-v2.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>cabelo cacheado</strong> é muito mais do que um tipo de fio; é uma identidade. Cada cacho possui sua própria personalidade, curvatura e necessidades únicas. Para quem está em transição capilar ou apenas busca a melhor versão dos seus fios, entender a biologia do cacho é o primeiro passo para o sucesso. Neste guia definitivo, mergulhamos fundo nas melhores práticas para garantir que seu cabelo seja sempre o protagonista.
          </p>
          <ToolBox 
            tools={[
              { name: "Shampoo Low Poo (Sem Sulfatos)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Máscara de Nutrição com Óleos Naturais", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente de Madeira de Dentes Largos", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Como Identificar e Cuidar do seu Cacho</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Identificação da Curvatura",
                description: "O cabelo cacheado se divide em categorias: 3A (cachos largos), 3B (cachos mais definidos e médios) e 3C (cachos fechados e volumosos). Identificar o seu tipo ajuda na escolha dos produtos certos, já que cada um exige uma carga diferente de óleos.",
                tip: "É comum ter mais de uma curvatura na mesma cabeça. Adapte a aplicação de produtos conforme a necessidade de cada área.",
                image: "/assets/curly-curvatures.png"
              },
              {
                title: "2. Cronograma Capilar de Elite",
                description: "O segredo para cachos brilhantes é o equilíbrio entre Hidratação (água), Nutrição (óleos) e Reconstrução (proteína). Como o óleo natural tem dificuldade de chegar às pontas devido ao formato espiral, a etapa de Nutrição deve ser a sua favorita.",
                tip: "Use óleos vegetais puros para umectação noturna uma vez por semana; isso transforma a textura do fio.",
                image: "/assets/curly-schedule.png"
              },
              {
                title: "3. Lavagem e Finalização",
                description: "Lave o cabelo preferencialmente com técnica Low Poo para não retirar a proteção natural. Na hora de finalizar, use a técnica 'Plopping' (secar com uma camiseta de algodão) para remover a umidade sem causar atrito ou quebra dos fios.",
                tip: "Evite secar o cabelo esfregando a toalha; o atrito é o maior gerador de frizz e perda de definição.",
                image: "/assets/curly-plopping.png"
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Nunca penteie seu cabelo cacheado quando ele estiver seco. Isso quebra a estrutura dos cachos e causa um volume desordenado. O momento de desembaraçar é sempre com o cabelo úmido e com uma boa dose de condicionador ou creme."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'low-poo-kit', name: "Kit Low Poo Especialista", desc: "Limpeza suave que preserva a hidratação dos cachos.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Trophy size={32} /> },
        { id: 'curly-mask', name: "Máscara Nutritiva Intensa", desc: "Reposição lipídica para brilho e maciez extrema.", link: "https://mercadolivre.com/sec/28LNYBa", icon: <Crown size={32} /> }
      ]
    },
    'penteado-cabelo-cacheado': {
      title: "Penteado Cabelo Cacheado: Guia Completo de Estilo e Definição",
      subtitle: "Descubra como dominar a arte do penteado cabelo cacheado com técnicas profissionais de fitagem, volume e day after.",
      author: "Lara Estilo",
      date: "14 de Maio de 2026",
      readTime: "14 min",
      category: "Cabelo",
      image: "/assets/penteado-cacheado-guia-v2.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Dominar o <strong>penteado cabelo cacheado</strong> é uma jornada de autoconhecimento e paciência. Diferente dos cabelos lisos, os cachos possuem uma estrutura que exige hidratação constante e técnicas específicas de manipulação para evitar o frizz e garantir a definição duradoura. Neste guia, Lara Estilo revela os segredos das passarelas para você transformar seus cachos em uma afirmação de poder e personalidade.
          </p>
          <ToolBox 
            tools={[
              { name: "Difusor de Ar com Controle de Temperatura", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gelatina de Alta Definição", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Escova Estilizadora (Tipo Jacaré ou Denman)", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Passo a Passo: O Penteado Perfeito</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. A Preparação 'Liquid Gold'",
                description: "O segredo começa no chuveiro. Use um leave-in de base aquosa logo após o enxágue do condicionador, com o cabelo ainda pingando. Isso 'prende' a umidade dentro do fio, garantindo brilho espelhado.",
                tip: "Nunca use toalhas de banho comuns; prefira uma camiseta de algodão ou toalha de microfibra para retirar o excesso de água.",
                image: "/assets/curly-liquid-gold.png"
              },
              {
                title: "2. Técnica de Fitagem Estruturada",
                description: "Divida o cabelo em seções. Aplique o creme de pentear misturado com um pouco de gelatina. Use os dedos ou uma escova específica para separar as 'fitas' de cabelo. Balance as mechas para que os cachos se formem naturalmente.",
                tip: "Para mais volume na raiz, faça a fitagem com a cabeça inclinada para a frente ou para os lados.",
                image: "/assets/curly-fitagem.png"
              },
              {
                title: "3. Secagem Inteligente com Difusor",
                description: "Encaixe o difusor no secador em temperatura média e velocidade baixa. Coloque o cacho dentro do 'copo' do difusor e leve até a raiz, segurando por 15 segundos. Repita por todo o cabelo até que esteja 90% seco.",
                tip: "Não toque no cabelo enquanto ele seca para evitar o frizz. Só use os dedos para soltar os cachos depois que estiverem 100% secos e frios.",
                image: "/assets/curly-diffuser.png"
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica da Especialista
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para um Day After impecável, use óleos leves de argan ou coco para 'quebrar o durinho' do creme. Isso devolve o movimento natural e elimina aquele aspecto estático. Lembre-se: o volume é seu aliado, não seu inimigo!"
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'diffuser-pro', name: "Difusor Universal Profissional", desc: "Secagem uniforme que preserva a curvatura original.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Zap size={32} /> },
        { id: 'styling-gel', name: "Gelatina Modeladora Gold", desc: "Fixação flexível sem ressecar os fios.", link: "https://mercadolivre.com/sec/28LNYBa", icon: <Droplets size={32} /> }
      ]
    },
    'minoxidil-funciona-verdade': {
      title: "Minoxidil Funciona? A Verdade Científica sobre o Crescimento de Barba",
      subtitle: "Analisamos estudos dermatológicos para responder: o minoxidil realmente cria novos folículos ou apenas acelera o que já existe? Entenda o ciclo de crescimento folicular.",
      author: "Carlos Barbudo",
      date: "10 de Março de 2026",
      readTime: "15 min",
      category: "Ciência",
      image: "/assets/minoxidil-science.webp",
      howToSteps: [
        { name: "Limpeza de Pele", text: "Lave o rosto com água morna e sabonete neutro para abrir os poros." },
        { name: "Aplicação da Dose", text: "Use o conta-gotas para aplicar 1ml do produto nas áreas falhadas." },
        { name: "Massagem Circular", text: "Espalhe com as pontas dos dedos em movimentos circulares por 1 minuto." },
        { name: "Período de Absorção", text: "Deixe o produto agir por pelo menos 4 horas antes de lavar ou aplicar outros cremes." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Aqui no <strong>Cavanhaque</strong>, recebemos centenas de dúvidas sobre o mesmo tema: <em>"Minoxidil realmente funciona ou é apenas marketing?"</em>. O hype em fóruns e redes sociais é imenso, com transformações milagrosas de "antes e depois". No entanto, longe da empolgação, existe a ciência dermatológica. Neste guia, fugimos do óbvio para explicar o que realmente acontece no seu folículo e como você pode ter resultados reais, baseados em nossa curadoria técnica.
          </p>

          <ToolBox 
            tools={[
              { name: "Minoxidil 5% (Kirkland ou Similar)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Sabonete Antioleosidade", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Conta-gotas de Precisão", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Desobstrução de Poros",
                description: "Lave o rosto com água morna e um sabonete antioleosidade. A gordura natural da pele bloqueia a entrada do Minoxidil. Seque bem o rosto antes de aplicar.",
                tip: "Use uma toalha limpa para não levar bactérias para as áreas onde você quer que o pelo cresça."
              },
              {
                title: "A Dose Mágica (1ml)",
                description: "Não adianta encharcar o rosto. A pele tem um limite de absorção. Use exatamente 1ml por aplicação, espalhando uniformemente pelas áreas falhadas.",
                tip: "Divida o 1ml em 4 gotas para cada bochecha, 2 para o bigode e o resto no queixo."
              },
              {
                title: "Massagem de Ativação",
                description: "Após aplicar as gotas, use a ponta dos dedos para massagear suavemente em círculos. Isso aumenta o fluxo sanguíneo local e ajuda o produto a penetrar no folículo.",
                tip: "Lave as mãos imediatamente após para evitar que nasça pelo na palma da mão ou entre os dedos."
              },
              {
                title: "O Relógio da Absorção",
                description: "O Minoxidil leva até 4 horas para ser 75% absorvido. Durante esse tempo, não lave o rosto, não sue excessivamente e não aplique óleos ou balms.",
                tip: "Se você aplicar à noite, faça isso 1 hora antes de deitar para o produto não ficar todo no travesseiro."
              },
              {
                title: "Ritual de Hidratação",
                description: "O álcool contido no produto resseca a pele. Após as 4 horas de absorção, lave o rosto e aplique um óleo de barba premium para devolver a saúde à pele.",
                tip: "A pele descamando (parecendo caspa) é sinal de que você precisa hidratar mais entre as aplicações."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Origem Acidental: De Remédio de Pressão a Símbolo de Virilidade</h2>
          <p className="mb-6">O Minoxidil não nasceu em um laboratório de cosméticos. Nos anos 70, a Upjohn Company buscava um <strong>vasodilatador oral</strong> para hipertensão arterial. O "erro" que mudou tudo? Os pacientes começaram a relatar um efeito colateral inusitado: o nascimento de pelos onde eles nem sabiam que tinham folículos.</p>
          
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-8">
            <h4 className="font-bold text-brand-dark mb-2">💡 Observação do Editor:</h4>
            <p className="text-sm text-gray-600">Muitos sites repetem essa história, mas poucos explicam que o segredo não é o produto em si, mas como ele <em>educa</em> o seu folículo a trabalhar mais rápido. No Cavanhaque, acreditamos que entender esse processo é o primeiro passo para não desistir no segundo mês.</p>
          </div>

          <p className="mb-6">A aprovação do FDA veio em 1988, inicialmente para calvície masculina (alopecia), mas a comunidade de barbudos rapidamente percebeu que o mesmo princípio se aplicava ao rosto. O uso "off-label" — quando usamos um produto para algo que ele não foi rotulado — tornou-se o padrão ouro para quem busca um visual impecável.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Mecanismo de Ação: Como o Minoxidil Realmente Funciona</h2>
          <p className="mb-6">Apesar de décadas de uso, o mecanismo exato do Minoxidil ainda não é 100% compreendido pela ciência. No entanto, sabemos que ele atua em <strong>múltiplas frentes</strong> para estimular o crescimento capilar:</p>

          <div className="bg-brand-light p-8 rounded-2xl border border-brand-gold/20 my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Os 4 Mecanismos Principais</h3>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark font-black text-lg px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Vasodilatação Periférica</h4>
                  <p className="text-gray-600 text-sm">O Minoxidil relaxa os músculos lisos dos vasos sanguíneos, aumentando o fluxo de sangue, oxigênio e nutrientes para a papila dérmica (a "raiz" do folículo). Mais nutrição = folículos mais saudáveis e ativos.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark font-black text-lg px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Prolongamento da Fase Anágena</h4>
                  <p className="text-gray-600 text-sm">O ciclo capilar tem 3 fases: anágena (crescimento), catágena (transição) e telógena (repouso). O Minoxidil força os folículos a permanecerem mais tempo na fase anágena, resultando em fios mais longos e grossos.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark font-black text-lg px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Ativação de Canais de Potássio</h4>
                  <p className="text-gray-600 text-sm">O Minoxidil abre canais de potássio nas células do folículo, o que estimula a síntese de DNA e proteínas estruturais como a queratina — o principal componente do fio.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark font-black text-lg px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Estímulo de Fatores de Crescimento</h4>
                  <p className="text-gray-600 text-sm">Estudos mostram que o Minoxidil aumenta a expressão de VEGF (Fator de Crescimento Endotelial Vascular), que promove a formação de novos vasos sanguíneos ao redor do folículo.</p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Minoxidil Cria Novos Folículos ou Apenas Acorda os Dormentes?</h2>
          <p className="mb-6">Esta é a pergunta de 1 milhão de dólares. A resposta científica é: <strong>o Minoxidil não cria folículos do zero</strong>. Você nasce com um número fixo de folículos pilosos. O que o Minoxidil faz é:</p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-gold mt-1 shrink-0" size={20} /> <span><strong>Reativar folículos miniaturizados:</strong> Aqueles fios fininhos e quase invisíveis (velus) que você tem na bochecha podem ser transformados em fios terminais (grossos e pigmentados).</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-gold mt-1 shrink-0" size={20} /> <span><strong>Acordar folículos em repouso:</strong> Folículos que estavam na fase telógena (dormentes) são forçados a entrar na fase anágena (crescimento ativo).</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-gold mt-1 shrink-0" size={20} /> <span><strong>Engrossar fios existentes:</strong> Fios que já cresciam, mas eram finos e fracos, ganham diâmetro e densidade.</span></li>
          </ul>

          <p className="mb-8 italic text-gray-600">Tradução: se você tem zero folículos em uma área (como uma cicatriz profunda), o Minoxidil não vai fazer milagre. Mas se você tem aqueles pelinhos finos e transparentes, há uma chance real de transformá-los em barba de verdade.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Concentrações: 2%, 5% ou 10%? Qual Escolher?</h2>

          <div className="overflow-x-auto my-10">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Concentração</th>
                  <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Eficácia</th>
                  <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Efeitos Colaterais</th>
                  <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Recomendado Para</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 font-bold text-brand-dark">2%</td>
                  <td className="p-4 text-sm text-gray-600">Moderada (aprovado para mulheres)</td>
                  <td className="p-4 text-sm text-gray-600">Mínimos, pele sensível tolera bem</td>
                  <td className="p-4 text-sm text-gray-600">Iniciantes, pele muito sensível</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors bg-brand-gold/10">
                  <td className="p-4 font-bold text-brand-dark">5% ⭐</td>
                  <td className="p-4 text-sm text-gray-600"><strong>Alta</strong> (padrão-ouro para barba)</td>
                  <td className="p-4 text-sm text-gray-600">Moderados, descamação leve</td>
                  <td className="p-4 text-sm text-gray-600"><strong>Maioria dos homens</strong></td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 font-bold text-brand-dark">10%</td>
                  <td className="p-4 text-sm text-gray-600">Muito alta (off-label)</td>
                  <td className="p-4 text-sm text-gray-600">Altos, irritação, ressecamento</td>
                  <td className="p-4 text-sm text-gray-600">Casos severos, sob supervisão</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 p-4"><Microscope size={120} /></div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold flex items-center gap-3">A Regra dos 5%: Por Que É o Padrão-Ouro</h3>
            <p className="mb-4">Para a barba, a concentração de <strong>5%</strong> é o equilíbrio perfeito entre eficácia e tolerabilidade. Estudos mostram que o 5% é até 45% mais eficaz que o 2%, sem aumentar proporcionalmente os efeitos colaterais. Resultados sólidos costumam aparecer entre o <strong>4º e o 6º mês</strong> de uso contínuo.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-gold mt-1 shrink-0" size={18} /> <span><strong>Paciência é fundamental:</strong> Os fios velus (transparentes) levam de 3 a 6 meses para maturar em fios terminais.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-gold mt-1 shrink-0" size={18} /> <span><strong>Higiene é crucial:</strong> Aplique sempre com a pele limpa e poros abertos (pós-banho quente é ideal).</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-brand-gold mt-1 shrink-0" size={18} /> <span><strong>Consistência é tudo:</strong> Pular dias compromete os resultados. Use 2x ao dia, todos os dias.</span></li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Protocolo Completo de Aplicação (Passo a Passo)</h2>

          <div className="bg-brand-light p-8 rounded-2xl my-10">
            <h3 className="text-xl font-bold text-brand-dark mb-6 uppercase text-xs tracking-wider">Rotina Matinal (7h - 8h)</h3>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="bg-brand-dark text-white font-black text-sm px-3 py-1 rounded shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Lavar o Rosto</h4>
                  <p className="text-gray-600 text-sm">Use sabonete neutro ou específico para barba. Água morna abre os poros.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-dark text-white font-black text-sm px-3 py-1 rounded shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Secar Completamente</h4>
                  <p className="text-gray-600 text-sm">Pele úmida dilui o Minoxidil. Seque com toalha limpa.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-dark text-white font-black text-sm px-3 py-1 rounded shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Aplicar 1ml de Minoxidil</h4>
                  <p className="text-gray-600 text-sm">Use o conta-gotas ou spray. Espalhe uniformemente nas áreas desejadas.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-dark text-white font-black text-sm px-3 py-1 rounded shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Massagear Levemente</h4>
                  <p className="text-gray-600 text-sm">Movimentos circulares por 1-2 minutos para melhorar absorção.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-dark text-white font-black text-sm px-3 py-1 rounded shrink-0">5</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Aguardar 4 Horas</h4>
                  <p className="text-gray-600 text-sm">Não lavar o rosto. Deixe o produto agir completamente.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-brand-light p-8 rounded-2xl my-10">
            <h3 className="text-xl font-bold text-brand-dark mb-6 uppercase text-xs tracking-wider">Rotina Noturna (22h - 23h)</h3>
            <p className="text-sm text-gray-600 mb-4">Repita o mesmo protocolo antes de dormir. A aplicação noturna é crucial pois o corpo regenera durante o sono.</p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Efeitos Colaterais: O Que Esperar (e Como Minimizar)</h2>

          <p className="mb-6">O Minoxidil é geralmente seguro, mas não é isento de efeitos colaterais. Conhecê-los te prepara para lidar com eles:</p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-red-100 p-6 rounded-2xl">
              <h4 className="font-bold text-red-600 mb-4 flex items-center gap-2"><AlertCircle size={20} /> Efeitos Comuns (30-40%)</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Ressecamento e descamação da pele</li>
                <li>• Coceira leve nas primeiras semanas</li>
                <li>• Vermelhidão temporária</li>
                <li>• Crescimento de pelos em áreas adjacentes (testa, maçãs do rosto)</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-yellow-100 p-6 rounded-2xl">
              <h4 className="font-bold text-yellow-600 mb-4 flex items-center gap-2"><AlertCircle size={20} /> Efeitos Raros (5-10%)</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Dermatite de contato</li>
                <li>• Acne na região de aplicação</li>
                <li>• Inchaço facial leve</li>
                <li>• Taquicardia (se absorção sistêmica excessiva)</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-6 rounded-r-2xl my-8">
            <h4 className="font-bold text-brand-dark mb-3">💡 Como Minimizar Efeitos Colaterais</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Hidrate a pele com óleo de barba após 4h da aplicação</li>
              <li>✓ Use protetor solar se expor ao sol (Minoxidil pode sensibilizar)</li>
              <li>✓ Comece com 1x ao dia nas primeiras 2 semanas para adaptar a pele</li>
              <li>✓ Se irritação severa, pause por 2-3 dias e retome com concentração menor</li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Timeline Realista: O Que Esperar Mês a Mês</h2>

          <div className="space-y-6 my-10">
            <div className="flex gap-6 items-start">
              <div className="bg-brand-gold text-brand-dark font-black text-xl px-5 py-3 rounded-xl shrink-0">MÊS 1</div>
              <div>
                <h4 className="font-bold text-brand-dark mb-2">Fase de Adaptação</h4>
                <p className="text-sm text-gray-600">Possível shedding (queda temporária de fios fracos). Pele pode descamar. Poucos resultados visíveis. <strong>Não desista!</strong></p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-brand-gold text-brand-dark font-black text-xl px-5 py-3 rounded-xl shrink-0">MÊS 2-3</div>
              <div>
                <h4 className="font-bold text-brand-dark mb-2">Primeiros Sinais</h4>
                <p className="text-sm text-gray-600">Fios velus começam a aparecer (fininhos e claros). Áreas com falhas mostram "penugem". Ainda não é barba de verdade.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-brand-gold text-brand-dark font-black text-xl px-5 py-3 rounded-xl shrink-0">MÊS 4-6</div>
              <div>
                <h4 className="font-bold text-brand-dark mb-2">Transformação Visível</h4>
                <p className="text-sm text-gray-600">Fios velus começam a engrossar e escurecer. Densidade aumenta. Barba fica mais "cheia". <strong>Fase de maior motivação!</strong></p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-brand-gold text-brand-dark font-black text-xl px-5 py-3 rounded-xl shrink-0">MÊS 7-12</div>
              <div>
                <h4 className="font-bold text-brand-dark mb-2">Maturação Completa</h4>
                <p className="text-sm text-gray-600">Fios terminais consolidados. Barba densa e uniforme. Muitos param o uso aqui (mas há risco de perda parcial).</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-brand-gold text-brand-dark font-black text-xl px-5 py-3 rounded-xl shrink-0">12+ MESES</div>
              <div>
                <h4 className="font-bold text-brand-dark mb-2">Ganhos Permanentes</h4>
                <p className="text-sm text-gray-600">Após 12-18 meses, muitos fios se tornam permanentes mesmo sem Minoxidil. Mas manutenção ocasional pode ser necessária.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Posso parar de usar depois que a barba crescer?</h4>
              <p className="text-sm text-gray-600">Depende. Fios que se tornaram terminais (grossos e pigmentados) tendem a ser permanentes. Mas fios que ainda estão em transição podem cair. Recomenda-se usar por 12-18 meses antes de parar.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Minoxidil funciona para todo mundo?</h4>
              <p className="text-sm text-gray-600">Não. Cerca de 60-70% dos usuários veem resultados significativos. 20% veem resultados moderados. 10% não respondem (non-responders). A genética é o fator determinante.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Posso usar Minoxidil e Dermaroller juntos?</h4>
              <p className="text-sm text-gray-600">Sim! O microagulhamento potencializa os resultados. Mas aguarde 24h após o dermaroller para aplicar Minoxidil (evita absorção sistêmica excessiva).</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Qual a diferença entre líquido e espuma?</h4>
              <p className="text-sm text-gray-600">Líquido: mais barato, absorção mais rápida, pode ressecar mais. Espuma: mais cara, menos ressecamento, mais confortável. Eficácia é similar.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Minoxidil causa impotência ou afeta hormônios?</h4>
              <p className="text-sm text-gray-600">Não. Minoxidil não é anti-androgênico (diferente da Finasterida). Ele não mexe com testosterona ou DHT. É seguro nesse aspecto.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: Vale a Pena Usar Minoxidil na Barba?</h2>

          <p className="mb-6">Se você tem falhas na barba, fios finos ou simplesmente quer mais densidade, o Minoxidil é a <strong>opção mais validada cientificamente</strong> disponível sem prescrição médica. Não é mágica, não funciona para todos, e exige paciência e disciplina. Mas para a maioria dos homens, os resultados são reais e transformadores.</p>

          <p className="mb-8 font-medium">Recomendamos o uso do <a href={AFF_MINOXIDIL} className="text-brand-gold underline font-bold" target="_blank">Kit de Crescimento Mixidil Premium</a> para garantir que você está usando um produto farmacêutico de alta procedência, com a concentração ideal e resultados comprovados.</p>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Pronto para Transformar Sua Barba?</h3>
            <p className="mb-6 text-gray-300">Lembre-se: consistência é mais importante que perfeição. Use todos os dias, tenha paciência, e documente sua jornada com fotos mensais.</p>
            <a href={AFF_MINOXIDIL} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Preço do Kit Mixidil</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O maior erro no uso do Minoxidil é a interrupção precoce. Muitos homens param no 3º mês porque a barba 'já cresceu'. Ledo engano. Esses fios novos são imaturos e vão cair se você parar. Use por pelo menos 1 ano para garantir que o folículo se torne terminal e permanente."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'm-mix', name: "Kit Crescimento Mixidil", desc: "O padrão-ouro em custo-benefício para preenchimento de barba.", link: AFF_MINOXIDIL, icon: <FlaskConical size={32} /> },
        { id: 'v-factor', name: "Fator Viking Crescimento", desc: "Acelere a maturação dos fios com biotecnologia.", link: AFF_VIKING, icon: <Trophy size={32} /> }
      ]
    },
    'willian-bigode-estilo-e-legado': {
      title: "Willian Bigode: A Anatomia do Visual que Marcou uma Geração no Futebol",
      subtitle: "Entenda como o atacante transformou um apelido em uma das marcas pessoais mais valiosas do esporte através do seu icônico bigode Chevron.",
      author: "Carlos Barbudo",
      date: "09 de Março de 2026",
      readTime: "14 min",
      category: "Cultura",
      image: "/assets/willian-bigode-premium.webp",
      howToSteps: [
        { name: "Crescimento de Base", text: "Deixe o bigode crescer por 6 semanas sem interferência para ganhar densidade." },
        { name: "Marcação Chevron", text: "Apare as laterais em linha reta acompanhando o canto da boca." },
        { name: "Alinhamento do Lábio", text: "Corte os fios que ultrapassam a linha do lábio superior com tesoura Stark." },
        { name: "Limpeza Facial", text: "Raspe completamente o queixo e as bochechas para destacar o bigode." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se falarmos em <em>branding</em> no esporte, o visual de Willian José da Silva (o nosso <strong>Willian Bigode</strong>) é uma aula completa. Ele não adotou o estilo apenas pela estética, mas transformou um traço físico em uma identidade indissociável de sua carreira. No Cavanhaque, analisamos como ele trouxe de volta o bigode Chevron e como você pode usar esse mesmo poder visual para impor respeito e presença.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina de Acabamento Stark", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Pente de Bigode Ultra Fino", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Navalha de Desenho Profissional", link: "https://mercadolivre.com/sec/28LNYBa" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Fase da Densidade (Semanas 1-6)",
                description: "O segredo do Willian Bigode é a densidade. Não apara nada por 6 semanas. O bigode precisa de 'corpo' para aguentar o desenho Chevron sem parecer ralo.",
                tip: "Use o Fator Viking no buço para acelerar a conexão dos fios e evitar buracos no centro."
              },
              {
                title: "A Linha de Base (Chevron)",
                description: "O Chevron é retangular. Use sua máquina de acabamento para criar uma linha reta nas laterais do bigode, terminando exatamente no canto da boca.",
                tip: "Não deixe as pontas descerem em direção ao queixo, senão vira um estilo ferradura (Horseshoe)."
              },
              {
                title: "O Penteado e Corte de Lábio",
                description: "Penteie todo o bigode para baixo. Use a tesoura de precisão para cortar apenas os fios que encostam ou cobrem o seu lábio superior.",
                tip: "Mantenha a tesoura na horizontal. O objetivo é criar uma linha reta que mostre o contorno da sua boca."
              },
              {
                title: "Limpeza de Contraste",
                description: "Raspe o queixo e as bochechas com navalhete e gel transparente. O bigode Chevron precisa de uma 'moldura' de pele limpa para se destacar.",
                tip: "Mantenha a área entre o nariz e o topo do bigode bem aparada para dar nitidez ao desenho."
              },
              {
                title: "O Toque de Mestre (Balm)",
                description: "Aplique um pouco de Balm modelador apenas no bigode e penteie para os lados. Isso tira o aspecto 'arrepiado' e dá um brilho de saúde aos fios.",
                tip: "Não use cera de bigode forte aqui; o estilo do Willian é natural e flexível, não rígido."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A História do Bigode de Willian</h2>

          <p className="mb-6">Willian José da Silva, mais conhecido como <strong>Willian Bigode</strong>, não nasceu com esse apelido. Foi durante sua passagem pelo Grêmio, no início dos anos 2010, que o atacante decidiu deixar crescer um bigode estilo Chevron - e nunca mais tirou. O que começou como uma escolha estética casual rapidamente se tornou sua assinatura visual.</p>

          <p className="mb-8">O timing foi perfeito: em uma época onde a maioria dos jogadores optava por rostos lisos ou barbas cheias, Willian ousou ser diferente. O bigode grosso e bem cuidado chamou atenção da mídia, dos torcedores e até de marcas. Hoje, é impossível pensar em Willian sem imaginar aquele bigode característico.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Estilo Chevron: Anatomia de um Ícone</h2>

          <p className="mb-6">O estilo Chevron é caracterizado por ser <strong>grosso, largo e cobrir todo o lábio superior</strong>. Diferente de bigodes finos ou estilizados, o Chevron é robusto e masculino. Ele projeta virilidade e uma aura vintage que remete aos craques dos anos 70 e 80, como Sócrates e Rivelino.</p>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Características do Bigode Chevron</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-brand-dark mb-3">✓ Características Visuais:</h4>
                <ul className="text-gray-600 space-y-2 text-sm ml-4">
                  <li>• Largura: cobre todo o lábio superior</li>
                  <li>• Espessura: densa e volumosa</li>
                  <li>• Comprimento: até a linha do lábio (não ultrapassa)</li>
                  <li>• Formato: retangular, sem pontas curvadas</li>
                  <li>• Cor: natural, sem tingimento</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-3">✓ Requisitos:</h4>
                <ul className="text-gray-600 space-y-2 text-sm ml-4">
                  <li>• Densidade natural no bigode</li>
                  <li>• Paciência para crescer (4-6 semanas)</li>
                  <li>• Manutenção semanal</li>
                  <li>• Produtos de finalização</li>
                  <li>• Rosto limpo (sem barba no queixo)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Como Fazer o Bigode Estilo Willian: Tutorial Completo</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold">Protocolo Passo a Passo</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Fase de Crescimento (4-6 semanas)</h4>
                  <p className="text-sm text-gray-300">Deixe o bigode crescer completamente sem aparar. Resista à tentação de cortar nos primeiros 30 dias. Raspe completamente queixo, bochechas e pescoço - mantenha APENAS o bigode.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Definir o Contorno</h4>
                  <p className="text-sm text-gray-300">Com <a href={AFF_TESOURA} className="text-brand-gold underline font-bold">tesoura de precisão</a>, aparar apenas os fios que ultrapassam a linha do lábio. Criar linha reta horizontal na base do bigode.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-gold font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Manter a Largura Natural</h4>
                  <p className="text-sm text-gray-300">NÃO afine as pontas. O Chevron deve ter largura uniforme de uma extremidade à outra. Deixe crescer até os cantos da boca.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Hidratação e Finalização</h4>
                  <p className="text-sm text-gray-300">Aplicar <a href={AFF_OIL} className="text-brand-gold underline font-bold">óleo de sândalo</a> diariamente após o banho. Pentear para os lados com escova pequena. Usar cera leve se necessário para domar fios rebeldes.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div>
                  <h4 className="font-bold mb-2">Manutenção Semanal</h4>
                  <p className="text-sm text-gray-300">A cada 7 dias: aparar fios que entram na boca, raspar queixo e bochechas, ajustar linha do lábio. Manter sempre limpo e simétrico.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Impacto Cultural do Bigode no Futebol</h2>

          <p className="mb-6">O bigode de Willian transcendeu o campo. Ele se tornou um fenômeno de mídia social, inspirou memes, produtos licenciados e até fantasias de carnaval. Mas além do entretenimento, há um aspecto sério: <strong>o poder do personal branding</strong>.</p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/20 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="font-bold text-brand-dark mb-3">Reconhecimento</h4>
              <p className="text-sm text-gray-600">Pesquisas mostram que 87% dos torcedores brasileiros reconhecem Willian apenas pelo bigode, sem ver o rosto completo.</p>
            </div>

            <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/20 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="font-bold text-brand-dark mb-3">Valor de Marca</h4>
              <p className="text-sm text-gray-600">O apelido "Bigode" aumentou o valor de mercado do jogador em contratos de publicidade e patrocínio.</p>
            </div>

            <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/20 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold text-brand-dark mb-3">Diferenciação</h4>
              <p className="text-sm text-gray-600">Em um esporte com milhares de atletas, ter uma marca visual única é um ativo valioso.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Outros Craques com Bigodes Icônicos</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl">
              <h4 className="font-bold text-brand-dark mb-2">⚽ Sócrates (Brasil)</h4>
              <p className="text-sm text-gray-600">O "Doutor" tinha um bigode fino e elegante que combinava com sua personalidade intelectual. Ícone dos anos 80.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl">
              <h4 className="font-bold text-brand-dark mb-2">⚽ Rivelino (Brasil)</h4>
              <p className="text-sm text-gray-600">Bigode grosso estilo Chevron, similar ao de Willian. Campeão mundial em 1970, seu bigode era sua marca registrada.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl">
              <h4 className="font-bold text-brand-dark mb-2">⚽ Andrea Pirlo (Itália)</h4>
              <p className="text-sm text-gray-600">Bigode fino e barba aparada. Visual de gentleman que combinava com seu estilo de jogo elegante.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl">
              <h4 className="font-bold text-brand-dark mb-2">⚽ Zlatan Ibrahimović (Suécia)</h4>
              <p className="text-sm text-gray-600">Alternava entre bigode e cavanhaque. Quando usava apenas bigode, era sempre grosso e imponente.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Produtos Essenciais para o Bigode Chevron</h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-4">🔧 Ferramentas</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold">•</span>
                  <span><strong>Tesoura de precisão:</strong> Para aparar fios que entram na boca</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold">•</span>
                  <span><strong>Pente fino:</strong> Para pentear e alinhar os fios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold">•</span>
                  <span><strong>Escova de bigode:</strong> Para modelar diariamente</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-4">💧 Produtos</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold">•</span>
                  <span><strong>Óleo de barba:</strong> Hidratação e brilho natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold">•</span>
                  <span><strong>Cera leve:</strong> Para domar fios rebeldes (opcional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold">•</span>
                  <span><strong>Shampoo específico:</strong> Lavar 2-3x por semana</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quanto tempo leva para crescer um bigode Chevron?</h4>
              <p className="text-sm text-gray-600">4-6 semanas para ter densidade suficiente. 2-3 meses para atingir o visual completo estilo Willian.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Preciso ter barba no queixo junto com o bigode?</h4>
              <p className="text-sm text-gray-600">NÃO. O estilo Chevron clássico (como o de Willian) é APENAS bigode. Queixo e bochechas devem estar completamente raspados.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Como evitar que o bigode entre na boca?</h4>
              <p className="text-sm text-gray-600">Aparar semanalmente com tesoura de precisão. Cortar apenas os fios que ultrapassam a linha do lábio. Usar cera leve para fixar se necessário.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ O bigode Chevron funciona em ambiente profissional?</h4>
              <p className="text-sm text-gray-600">Sim, desde que bem cuidado. É um estilo clássico e masculino, aceito na maioria dos ambientes. Evite apenas em empresas muito conservadoras.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Posso fazer Chevron se meu bigode é ralo?</h4>
              <p className="text-sm text-gray-600">O Chevron exige densidade natural. Se seu bigode é ralo, considere usar Minoxidil por 3-6 meses para aumentar densidade antes de tentar o estilo.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: O Legado do Bigode de Willian</h2>

          <p className="mb-6">Willian Bigode provou que um detalhe visual pode se tornar uma marca pessoal poderosa. Em um mundo onde todos buscam se destacar, ele encontrou sua diferenciação em um bigode clássico e bem cuidado. O resultado? Reconhecimento instantâneo, valor de marca elevado e um legado que vai além dos gols.</p>

          <p className="mb-8 font-medium">Se você quer replicar esse visual icônico, comece com as ferramentas certas: <a href={AFF_TESOURA} className="text-brand-gold underline font-bold" target="_blank">Tesoura de Precisão Stark</a> para manutenção impecável e <a href={AFF_OIL} className="text-brand-gold underline font-bold" target="_blank">Óleo Premium de Sândalo</a> para hidratação e brilho profissional.</p>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Pronto para Ter Seu Bigode de Craque?</h3>
            <p className="mb-6 text-gray-300">Transforme seu visual com o style que marcou uma geração no futebol.</p>
            <a href={AFF_TESOURA} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Kit Completo</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para um bigode Chevron impecável, o segredo está na tesoura e não na máquina. A máquina pode escorregar e tirar um pedaço vital do volume. Use a tesoura de precisão milímetro por milímetro, acompanhando a linha do seu lábio superior com a boca levemente aberta."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 't-will', name: "Tesoura Stark de Precisão", desc: "Ferramenta essencial para o contorno do bigode.", link: AFF_TESOURA, icon: <Scissors size={32} /> },
        { id: 'o-sand', name: "Óleo Premium Sândalo", desc: "Hidratação profunda para fios grossos e rebeldes.", link: AFF_OIL, icon: <Droplets size={32} /> }
      ]
    },
    'como-corrigir-falhas': {
      title: "Como Corrigir Falhas na Barba: O Guia Definitivo do Microagulhamento",
      subtitle: "Aprenda como preencher buracos na barba de forma definitiva utilizando a ciência do microagulhamento e regeneração folicular.",
      author: "Carlos Barbudo",
      date: "08 de Março de 2026",
      readTime: "18 min",
      category: "Dicas",
      image: "/assets/microagulhamento.webp",
      howToSteps: [
        { name: "Desinfecção do Roller", text: "Mergulhe o dermaroller em álcool 70% por 10 minutos antes de usar." },
        { name: "Preparação da Pele", text: "Lave o rosto com sabonete neutro e seque bem com uma toalha limpa." },
        { name: "Técnica da Estrela", text: "Passe o roller 10 vezes em cada direção: horizontal, vertical e diagonal." },
        { name: "Pós-Aplicação", text: "Aplique um óleo de semente de uva ou jojoba para acalmar a pele." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Ter uma barba falhada não é uma sentença definitiva. Se você olha no espelho e vê aqueles buracos frustrantes nas bochechas, queixo irregular ou conexões fracas entre bigode e barba, saiba que existe uma solução cientificamente comprovada. O <strong>microagulhamento</strong> (dermaroller) é a técnica mais eficaz para reativar folículos dormentes sem intervenção cirúrgica, e neste guia completo, você vai aprender exatamente como usá-lo para transformar sua barba.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Por Que Sua Barba Tem Falhas? Entendendo as Causas</h2>

          <p className="mb-6">Antes de partir para a solução, é fundamental entender <strong>por que</strong> sua barba falha. As causas são variadas e cada uma exige uma abordagem ligeiramente diferente:</p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2"><Target size={20} className="text-brand-gold" /> 1. Genética (60% dos casos)</h4>
              <p className="text-sm text-gray-600 mb-3">A causa mais comum. Seus folículos existem, mas estão miniaturizados ou dormentes devido à sensibilidade ao DHT (di-hidrotestosterona).</p>
              <p className="text-xs text-brand-gold font-bold">✓ Tratável com microagulhamento + Minoxidil</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2"><Target size={20} className="text-brand-gold" /> 2. Hormonal (20% dos casos)</h4>
              <p className="text-sm text-gray-600 mb-3">Baixos níveis de testosterona ou desequilíbrio hormonal. Comum em homens abaixo de 25 anos ou acima de 50.</p>
              <p className="text-xs text-brand-gold font-bold">✓ Requer exames + possível suplementação</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2"><Target size={20} className="text-brand-gold" /> 3. Cicatrizes (10% dos casos)</h4>
              <p className="text-sm text-gray-600 mb-3">Acidentes, acne severa ou queimaduras destruíram os folículos. Áreas com tecido cicatricial não respondem bem.</p>
              <p className="text-xs text-red-600 font-bold">⚠ Mais difícil de tratar, pode precisar transplante</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2"><Target size={20} className="text-brand-gold" /> 4. Nutricional (10% dos casos)</h4>
              <p className="text-sm text-gray-600 mb-3">Deficiência de biotina, zinco, vitamina D ou proteínas. Folículos não têm "combustível" para crescer.</p>
              <p className="text-xs text-brand-gold font-bold">✓ Facilmente corrigível com dieta + suplementos</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Protocolo de Crescimento (Passo a Passo)</h2>
          <p className="mb-6">
            Não tente adivinhar. O microagulhamento é um procedimento técnico que, se feito errado, pode causar infecções ou cicatrizes. Siga este protocolo rigoroso:
          </p>

          <ToolBox 
            tools={[
              { name: "Dermaroller 0.5mm (Titânio)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Álcool 70% Líquido", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Jojoba Puro", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Sabonete Antisséptico", link: "https://mercadolivre.com/sec/2Wo6ZWc" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Esterilização Cirúrgica",
                description: "Mergulhe o cabeçote do seu dermaroller em um recipiente com álcool 70% por exatamente 10 minutos. Jamais pule esta etapa.",
                tip: "Use um copinho de café pequeno para economizar álcool, garantindo que as agulhas estejam totalmente submersas."
              },
              {
                title: "Abertura dos Canais (Técnica da Estrela)",
                description: "Divida a barba em áreas (bochecha esquerda, direita, queixo). Passe o rolo 10 vezes na vertical, 10 na horizontal e 10 na diagonal em cada área.",
                tip: "Não coloque força. O peso da mão é o suficiente. Você quer micro-furos, não um corte aberto."
              },
              {
                title: "A Regra das 24 Horas",
                description: "Após o microagulhamento, seus poros estão abertos. NÃO aplique Minoxidil ou tônicos químicos nas próximas 24 horas para evitar irritação sistêmica.",
                tip: "Aplique apenas óleos naturais leves (Jojoba ou Semente de Uva) imediatamente após para acalmar a vermelhidão."
              },
              {
                title: "Limpeza de Manutenção",
                description: "Lave o roller novamente em água corrente quente para tirar restos de pele e mergulhe no álcool por mais 5 minutos antes de guardar.",
                tip: "Troque seu dermaroller a cada 2 meses. As agulhas perdem o fio e começam a 'rasgar' a pele em vez de furar."
              },
              {
                title: "A Frequência do Sucesso",
                description: "Faça este procedimento apenas 1 ou 2 vezes por semana. A pele precisa de tempo para cicatrizar e produzir o colágeno que vai alimentar o folículo.",
                tip: "Mais não é melhor. Se você fizer todo dia, vai destruir a base do pelo em vez de estimulá-la."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Ciência do Microagulhamento: Como Funciona na Prática</h2>

          <p className="mb-6">O microagulhamento, também conhecido como <strong>terapia de indução de colágeno</strong>, funciona através de um princípio simples mas poderoso: <em>lesão controlada seguida de regeneração amplificada</em>.</p>

          <div className="bg-brand-light p-8 rounded-2xl border border-brand-gold/20 my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">O Processo em 4 Etapas</h3>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark font-black text-lg px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Microlesão Controlada</h4>
                  <p className="text-gray-600 text-sm">As microagulhas (0.5mm para rosto) penetram a epiderme e atingem a derme superficial, criando milhares de micro-canais.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark font-black text-lg px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Resposta Inflamatória</h4>
                  <p className="text-gray-600 text-sm">O corpo detecta as "lesões" e envia células de reparo (fibroblastos) para a área, iniciando o processo de cicatrização.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark font-black text-lg px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Produção de Colágeno e Elastina</h4>
                  <p className="text-gray-600 text-sm">Os fibroblastos produzem colágeno tipo I e III, elastina e proteoglicanos, fortalecendo a estrutura da pele.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark font-black text-lg px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Ativação Folicular</h4>
                  <p className="text-gray-600 text-sm">O aumento de fatores de crescimento (VEGF, EGF, FGF) "acorda" folículos dormentes e estimula a fase anágena (crescimento).</p>
                </div>
              </li>
            </ol>
          </div>

          <p className="mb-8 italic text-gray-600">Estudos mostram que o microagulhamento aumenta a absorção transdérmica de ativos (como Minoxidil) em até <strong>3000%</strong>, potencializando drasticamente os resultados.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Tamanhos de Agulha: Qual Usar na Barba?</h2>

          <div className="overflow-x-auto my-10">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Tamanho</th>
                  <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Profundidade</th>
                  <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Uso</th>
                  <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Frequência</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 font-bold text-brand-dark">0.25mm</td>
                  <td className="p-4 text-sm text-gray-600">Epiderme</td>
                  <td className="p-4 text-sm text-gray-600">Absorção de produtos apenas</td>
                  <td className="p-4 text-sm text-gray-600">Diário</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors bg-brand-gold/10">
                  <td className="p-4 font-bold text-brand-dark">0.5mm ⭐</td>
                  <td className="p-4 text-sm text-gray-600">Derme superficial</td>
                  <td className="p-4 text-sm text-gray-600"><strong>Ideal para barba</strong> - estimula colágeno</td>
                  <td className="p-4 text-sm text-gray-600">1-2x por semana</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 font-bold text-brand-dark">1.0mm</td>
                  <td className="p-4 text-sm text-gray-600">Derme média</td>
                  <td className="p-4 text-sm text-gray-600">Cicatrizes profundas, uso profissional</td>
                  <td className="p-4 text-sm text-gray-600">1x a cada 4-6 semanas</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 font-bold text-brand-dark">1.5mm+</td>
                  <td className="p-4 text-sm text-gray-600">Derme profunda</td>
                  <td className="p-4 text-sm text-gray-600">Apenas clínicas especializadas</td>
                  <td className="p-4 text-sm text-gray-600">Profissional apenas</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 p-4"><Hammer size={120} /></div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold flex items-center gap-3">Protocolo Completo de Microagulhamento (Passo a Passo)</h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-brand-gold">ANTES DA SESSÃO (Preparação)</h4>
                <ol className="space-y-3 text-sm">
                  <li><strong className="text-brand-gold">1.</strong> Lave o rosto com sabonete antibacteriano</li>
                  <li><strong className="text-brand-gold">2.</strong> Seque completamente com toalha limpa</li>
                  <li><strong className="text-brand-gold">3.</strong> Esterilize o dermaroller com álcool 70% por 5 minutos</li>
                  <li><strong className="text-brand-gold">4.</strong> (Opcional) Aplique creme anestésico tópico se for sensível à dor</li>
                </ol>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-brand-gold">DURANTE A SESSÃO (Técnica)</h4>
                <ol className="space-y-3 text-sm">
                  <li><strong className="text-brand-gold">1.</strong> Divida o rosto em seções (bochecha direita, esquerda, queixo, bigode)</li>
                  <li><strong className="text-brand-gold">2.</strong> Passe o rolo 10x em cada direção:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Horizontal (esquerda → direita)</li>
                      <li>• Vertical (cima → baixo)</li>
                      <li>• Diagonal (\ e /)</li>
                    </ul>
                  </li>
                  <li><strong className="text-brand-gold">3.</strong> Use pressão moderada - deve sentir leve desconforto, não dor intensa</li>
                  <li><strong className="text-brand-gold">4.</strong> Evite áreas com acne ativa ou feridas abertas</li>
                  <li><strong className="text-brand-gold">5.</strong> Sessão completa: 10-15 minutos</li>
                </ol>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-brand-gold">DEPOIS DA SESSÃO (Recuperação)</h4>
                <ol className="space-y-3 text-sm">
                  <li><strong className="text-brand-gold">1.</strong> Lave o rosto com água fria (fecha os poros)</li>
                  <li><strong className="text-brand-gold">2.</strong> Aplique soro calmante (aloe vera ou ácido hialurônico)</li>
                  <li><strong className="text-brand-gold">3.</strong> <strong>AGUARDE 24 HORAS</strong> para aplicar Minoxidil</li>
                  <li><strong className="text-brand-gold">4.</strong> Evite sol direto por 48h (use protetor solar)</li>
                  <li><strong className="text-brand-gold">5.</strong> Não use produtos com álcool ou ácidos por 2 dias</li>
                </ol>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Protocolo de 12 Semanas: Combinando Dermaroller + Minoxidil</h2>

          <p className="mb-6">A combinação de microagulhamento com Minoxidil é <strong>exponencialmente mais eficaz</strong> do que usar qualquer um isoladamente. Aqui está o protocolo validado por estudos:</p>

          <div className="bg-brand-light p-8 rounded-2xl my-10">
            <h3 className="text-xl font-bold text-brand-dark mb-6">Cronograma Semanal</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">DOM</div>
                <div className="flex-1">
                  <p className="font-bold text-brand-dark">Sessão de Dermaroller</p>
                  <p className="text-sm text-gray-600">10-15 minutos, 0.5mm, todas as áreas com falhas</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-brand-dark text-white font-black px-4 py-2 rounded-lg shrink-0">SEG</div>
                <div className="flex-1">
                  <p className="font-bold text-brand-dark">Descanso (sem Minoxidil)</p>
                  <p className="text-sm text-gray-600">Apenas hidratação com aloe vera</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-brand-dark text-white font-black px-4 py-2 rounded-lg shrink-0">TER-SÁB</div>
                <div className="flex-1">
                  <p className="font-bold text-brand-dark">Minoxidil 2x ao dia</p>
                  <p className="text-sm text-gray-600">Manhã (8h) e Noite (22h), 1ml cada aplicação</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Alimentação e Suplementos: O Combustível da Barba</h2>

          <p className="mb-6">Você pode fazer todo o protocolo correto, mas se sua nutrição for deficiente, os resultados serão limitados. Folículos precisam de <strong>matéria-prima</strong> para construir fios:</p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-brand-gold" />
              </div>
              <h4 className="font-bold text-brand-dark mb-3">Biotina (Vitamina B7)</h4>
              <p className="text-sm text-gray-600 mb-3">Essencial para síntese de queratina. Deficiência causa fios fracos e quebradiços.</p>
              <p className="text-xs font-bold text-brand-gold">Dose: 5.000-10.000 mcg/dia</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-brand-gold" />
              </div>
              <h4 className="font-bold text-brand-dark mb-3">Zinco</h4>
              <p className="text-sm text-gray-600 mb-3">Regula hormônios e síntese proteica. Baixos níveis = barba rala.</p>
              <p className="text-xs font-bold text-brand-gold">Dose: 15-30 mg/dia</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-brand-gold" />
              </div>
              <h4 className="font-bold text-brand-dark mb-3">Vitamina D3</h4>
              <p className="text-sm text-gray-600 mb-3">Ativa receptores nos folículos. Deficiência é epidêmica no Brasil.</p>
              <p className="text-xs font-bold text-brand-gold">Dose: 2.000-5.000 UI/dia</p>
            </div>
          </div>

          <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-6 rounded-r-2xl my-8">
            <h4 className="font-bold text-brand-dark mb-3">🍖 Alimentos Essenciais para Crescimento de Barba</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-bold mb-2">Proteínas (1.6-2g/kg de peso):</p>
                <ul className="space-y-1 ml-4">
                  <li>• Carne vermelha (rica em ferro e zinco)</li>
                  <li>• Ovos (biotina e proteína completa)</li>
                  <li>• Salmão (ômega-3 anti-inflamatório)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Gorduras Saudáveis:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Abacate (vitamina E)</li>
                  <li>• Castanhas (selênio e zinco)</li>
                  <li>• Azeite extra virgem (antioxidantes)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Erros Fatais que Sabotam Seus Resultados</h2>

          <div className="space-y-4 my-10">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Usar agulhas maiores que 0.5mm em casa</h4>
              <p className="text-sm text-gray-600">Pode causar cicatrizes permanentes e destruir folículos ao invés de estimulá-los.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Aplicar Minoxidil imediatamente após o dermaroller</h4>
              <p className="text-sm text-gray-600">Absorção sistêmica excessiva pode causar taquicardia e pressão baixa. SEMPRE aguarde 24h.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Não esterilizar o equipamento</h4>
              <p className="text-sm text-gray-600">Risco de infecção bacteriana, foliculite e acne severa. Álcool 70% antes e depois, sempre.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Fazer sessões diárias com 0.5mm</h4>
              <p className="text-sm text-gray-600">A pele precisa de 5-7 dias para regenerar completamente. Overuse = inflamação crônica.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quanto tempo até ver resultados?</h4>
              <p className="text-sm text-gray-600">Primeiros fios velus aparecem em 4-8 semanas. Resultados significativos em 3-6 meses. Transformação completa em 12-18 meses.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Dermaroller dói?</h4>
              <p className="text-sm text-gray-600">Com 0.5mm, é um desconforto leve, como "formigamento intenso". Se doer muito, você está pressionando demais ou usando agulhas maiores.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Posso compartilhar o dermaroller?</h4>
              <p className="text-sm text-gray-600">NUNCA. É um item de uso pessoal e intransferível. Risco de transmissão de doenças (hepatite, HIV, etc).</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quando trocar o dermaroller?</h4>
              <p className="text-sm text-gray-600">A cada 3-4 meses ou quando as agulhas ficarem cegas (você sente que não penetram mais). Agulhas cegas causam mais dano que benefício.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Funciona em cicatrizes?</h4>
              <p className="text-sm text-gray-600">Depende. Cicatrizes superficiais podem melhorar. Cicatrizes profundas com tecido fibrótico não respondem bem. Nesses casos, transplante capilar pode ser necessário.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: Falhas na Barba Têm Solução</h2>

          <p className="mb-6">O microagulhamento não é mágica, mas é a técnica <strong>mais eficaz e acessível</strong> para corrigir falhas na barba sem cirurgia. Combinado com Minoxidil, nutrição adequada e paciência, os resultados são impressionantes para a maioria dos homens.</p>

          <p className="mb-8 font-medium">Recomendamos começar com o <a href={AFF_DERMAROLLER} className="text-brand-gold underline font-bold" target="_blank">Dermaroller 0.5mm Titanium</a>, que tem a profundidade ideal para uso facial doméstico. Combine com o <a href={AFF_VIKING} className="text-brand-gold underline font-bold" target="_blank">Fator Viking</a> para fornecer os nutrientes que seus novos folículos precisam para crescer fortes e densos.</p>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Comece Sua Transformação Hoje</h3>
            <p className="mb-6 text-gray-300">Lembre-se: consistência vence intensidade. Faça o protocolo corretamente, seja paciente, e documente sua evolução com fotos mensais.</p>
            <a href={AFF_DERMAROLLER} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Dermaroller Profissional</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O microagulhamento não é para ser feito com força. As agulhas de 0.5mm são projetadas para penetrar a derme com o peso natural da ferramenta. Se você sangrar excessivamente, está colocando pressão demais e corre o risco de criar fibrose no local."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'd-roll', name: "Dermaroller 0.5mm Titanium", desc: "Qualidade profissional para uso doméstico seguro.", link: AFF_DERMAROLLER, icon: <Target size={32} /> },
        { id: 'v-factor', name: "Fator Viking Crescimento", desc: "O combustível ideal para seus novos folículos.", link: AFF_VIKING, icon: <Trophy size={32} /> }
      ]
    },
    'cavanhaque-masculino-guia-completo': {
      title: "Cavanhaque Masculino: O Guia Definitivo de Estilos e Tendências para 2026",
      subtitle: "Domine o estilo que será tendência absoluta em 2026. Aprenda a escolher o desenho ideal para o seu formato de rosto com técnicas de visagismo.",
      author: "Carlos Barbudo",
      date: "08 de Março de 2026",
      readTime: "20 min",
      category: "Estilo",
      image: "/assets/cavanhaque-guia.webp",
      howToSteps: [
        { name: "Marcação de Simetria", text: "Use um lápis branco ou a máquina para marcar os limites laterais do cavanhaque." },
        { name: "Limpeza de Bochechas", text: "Remova todos os pelos das bochechas para destacar o desenho central." },
        { name: "Alinhamento do Bigode", text: "Apare a base do bigode rente ao lábio para um visual limpo." },
        { name: "Escultura do Queixo", text: "Defina o formato da barba no queixo (redondo ou quadrado)." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Em 2026, o cavanhaque se consolida como o estilo mais versátil, democrático e imponente do homem urbano. Diferente da barba cheia que exige genética privilegiada, o cavanhaque é acessível para quase todos os homens - mesmo aqueles com falhas nas bochechas. Neste guia definitivo, você vai dominar todos os estilos, entender o visagismo facial e descobrir como escolher o desenho perfeito para o seu rosto.
          </p>

          <ToolBox 
            tools={[
              { name: "Aparador de Precisão Stark", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Lápis de Contorno Branco", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Espelho de Aumento", link: "https://mercadolivre.com/sec/2Wo6ZWc" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Esboço da Perfeição",
                description: "Antes de ligar a máquina, use um lápis branco de olho para desenhar o contorno que você deseja no rosto. Isso evita que você tire mais de um lado que do outro.",
                tip: "Use a linha das pupilas dos seus olhos como referência para onde as laterais do cavanhaque devem terminar."
              },
              {
                title: "A Limpeza de Fundo (Bochechas)",
                description: "Raspe toda a área das bochechas e costeletas. O cavanhaque só aparece de verdade quando o resto do rosto está limpo.",
                tip: "Use um shaving gel transparente para enxergar exatamente o limite do desenho ao passar a lâmina."
              },
              {
                title: "O Arco do Bigode",
                description: "Penteie o bigode para baixo e apare os fios que cobrem o lábio. A 'boca' do cavanhaque deve estar sempre livre para não parecer sujo.",
                tip: "Mantenha a espessura do bigode igual à espessura da barba no queixo para equilíbrio visual."
              },
              {
                title: "Definindo a Base do Queixo",
                description: "Decida se quer um visual mais agressivo (quadrado) ou clássico (arredondado). Use a quina da lâmina da máquina para esculpir a curva inferior.",
                tip: "Deixe a barba um milímetro mais comprida no centro do queixo para dar projeção ao rosto."
              },
              {
                title: "O Pós-Design (Hidratação)",
                description: "Aplique Balm apenas na área do cavanhaque e um pós-barba sem álcool nas áreas raspadas. Isso previne foliculite e deixa o desenho brilhante.",
                tip: "Passe uma escova de cerdas firmes no cavanhaque para alinhar os fios na nova direção do corte."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A História do Cavanhaque: De Vilões a Ícones de Estilo</h2>

          <p className="mb-6">O cavanhaque tem uma história fascinante. Durante séculos, foi associado a vilões, artistas boêmios e revolucionários. No cinema clássico, todo antagonista tinha um cavanhaque pontudo e sinistro. Mas tudo mudou em 2008, quando Robert Downey Jr. estreou como Tony Stark em Homem de Ferro.</p>

          <p className="mb-8">O estilo <strong>Balbo</strong> (bigode desconectado + barba em âncora) de Stark transformou o cavanhaque em símbolo de genialidade, sofisticação e rebeldia controlada. Desde então, o cavanhaque deixou de ser "coisa de vilão" e virou marca registrada de homens confiantes e estilosos.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Os 10 Estilos de Cavanhaque Mais Populares em 2026</h2>

          <div className="space-y-8 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">1</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">Círculo Real (Full Goatee)</h3>
                  <p className="text-gray-600 mb-4">O clássico absoluto. Bigode conectado ao queixo formando um círculo ao redor da boca. Esconde falhas nas bochechas perfeitamente.</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-brand-dark mb-2">✓ Ideal para:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Rostos redondos ou ovais</li>
                        <li>• Quem tem falhas nas bochechas</li>
                        <li>• Iniciantes em cavanhaque</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark mb-2">⚠ Evitar se:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Rosto muito alongado</li>
                        <li>• Queixo muito fino</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">2</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">Van Dyke</h3>
                  <p className="text-gray-600 mb-4">Bigode e barba do queixo DESCONECTADOS. Visual artístico, sofisticado e único. Exige manutenção precisa.</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-brand-dark mb-2">✓ Ideal para:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Rostos quadrados ou retangulares</li>
                        <li>• Homens com personalidade forte</li>
                        <li>• Quem gosta de se destacar</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark mb-2">⚠ Evitar se:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Barba muito rala</li>
                        <li>• Ambiente corporativo conservador</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">3</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">Balbo (Tony Stark)</h3>
                  <p className="text-gray-600 mb-4">Bigode desconectado + barba em formato de âncora no queixo. O estilo que Robert Downey Jr. tornou icônico.</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-brand-dark mb-2">✓ Ideal para:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Rostos ovais ou triangulares</li>
                        <li>• Homens de 30-50 anos</li>
                        <li>• Visual moderno e confiante</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark mb-2">⚠ Manutenção:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Alta - requer aparos frequentes</li>
                        <li>• Simetria é fundamental</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">4</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">Âncora (Anchor)</h3>
                  <p className="text-gray-600 mb-4">Barba pontuda no queixo que se estende ao longo da linha da mandíbula. Bigode fino e bem definido.</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-brand-dark mb-2">✓ Ideal para:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Rostos redondos (alonga)</li>
                        <li>• Queixo duplo (disfarça)</li>
                        <li>• Visual executivo moderno</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark mb-2">⚠ Evitar se:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Rosto muito fino/alongado</li>
                        <li>• Barba muito rala</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">5</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">Soul Patch + Bigode</h3>
                  <p className="text-gray-600 mb-4">Apenas um tufo de barba abaixo do lábio inferior + bigode. Minimalista e ousado.</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-brand-dark mb-2">✓ Ideal para:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Rostos ovais ou quadrados</li>
                        <li>• Músicos, artistas, criativos</li>
                        <li>• Quem quer algo diferente</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark mb-2">⚠ Atenção:</p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Pode parecer datado se mal feito</li>
                        <li>• Não é para ambientes conservadores</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Visagismo: Escolhendo o Cavanhaque Perfeito para Seu Rosto</h2>

          <p className="mb-6">O segredo de um cavanhaque impecável não está apenas no estilo, mas na <strong>harmonia com o formato do seu rosto</strong>. Aqui está o guia completo:</p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-brand-light p-8 rounded-2xl border-2 border-brand-gold/30">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Crown size={24} className="text-brand-gold" />
                </div>
                Rosto Oval
              </h3>
              <p className="text-sm text-gray-600 mb-4">O formato mais versátil. Praticamente qualquer estilo funciona.</p>
              <p className="font-bold text-brand-dark mb-2 text-sm">Recomendados:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>✓ Círculo Real</li>
                <li>✓ Balbo</li>
                <li>✓ Van Dyke</li>
                <li>✓ Soul Patch</li>
              </ul>
            </div>

            <div className="bg-brand-light p-8 rounded-2xl border-2 border-brand-gold/30">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Target size={24} className="text-brand-gold" />
                </div>
                Rosto Redondo
              </h3>
              <p className="text-sm text-gray-600 mb-4">Objetivo: alongar visualmente o rosto.</p>
              <p className="font-bold text-brand-dark mb-2 text-sm">Recomendados:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>✓ Âncora (pontudo)</li>
                <li>✓ Van Dyke alongado</li>
                <li>✓ Barba do queixo pontuda</li>
              </ul>
              <p className="font-bold text-red-600 mb-2 text-sm mt-4">Evitar:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>✗ Círculo muito largo</li>
                <li>✗ Estilos horizontais</li>
              </ul>
            </div>

            <div className="bg-brand-light p-8 rounded-2xl border-2 border-brand-gold/30">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Zap size={24} className="text-brand-gold" />
                </div>
                Rosto Quadrado
              </h3>
              <p className="text-sm text-gray-600 mb-4">Objetivo: suavizar ângulos e adicionar curvas.</p>
              <p className="font-bold text-brand-dark mb-2 text-sm">Recomendados:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>✓ Círculo Real arredondado</li>
                <li>✓ Van Dyke</li>
                <li>✓ Balbo com volume</li>
              </ul>
              <p className="font-bold text-red-600 mb-2 text-sm mt-4">Evitar:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>✗ Estilos muito angulares</li>
                <li>✗ Linhas retas demais</li>
              </ul>
            </div>

            <div className="bg-brand-light p-8 rounded-2xl border-2 border-brand-gold/30">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Trophy size={24} className="text-brand-gold" />
                </div>
                Rosto Triangular
              </h3>
              <p className="text-sm text-gray-600 mb-4">Objetivo: equilibrar queixo largo com testa estreita.</p>
              <p className="font-bold text-brand-dark mb-2 text-sm">Recomendados:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>✓ Balbo</li>
                <li>✓ Círculo Real</li>
                <li>✓ Bigode + Soul Patch</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Passo a Passo: Como Fazer Seu Cavanhaque em Casa</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold">Protocolo Profissional de Modelagem</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Deixe a barba crescer por 2-4 semanas</h4>
                  <p className="text-sm text-gray-300">Você precisa de "material" para trabalhar. Não tente fazer cavanhaque com 1 semana de barba.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Defina o estilo baseado no seu rosto</h4>
                  <p className="text-sm text-gray-300">Use o guia de visagismo acima. Tire fotos do rosto de frente e perfil para analisar.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Apare as bochechas e pescoço</h4>
                  <p className="text-sm text-gray-300">Use máquina sem pente (0mm) ou barbeador. Deixe apenas bigode e queixo. Seja conservador - é melhor tirar aos poucos.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Defina o contorno com precisão</h4>
                  <p className="text-sm text-gray-300">Use <a href={AFF_TESOURA} className="text-brand-gold underline font-bold">tesoura de precisão</a> para os detalhes finais. Simetria é TUDO.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div>
                  <h4 className="font-bold mb-2">Mantenha semanalmente</h4>
                  <p className="text-sm text-gray-300">Apare bochechas e pescoço 2x por semana. Ajuste comprimento do cavanhaque 1x por semana.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Densidade é Tudo: Como Preencher Falhas no Cavanhaque</h2>

          <p className="mb-6">Um cavanhaque ralo perde todo o impacto visual. Se você tem falhas no bigode ou queixo, existem soluções comprovadas:</p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical size={32} className="text-brand-gold" />
              </div>
              <h4 className="font-bold text-brand-dark mb-3">Minoxidil 5%</h4>
              <p className="text-sm text-gray-600 mb-4">Acelera crescimento e engrossa fios. Resultados em 3-6 meses.</p>
              <a href={AFF_MINOXIDIL} className="text-brand-gold text-xs font-bold underline">Ver Minoxidil Kirkland</a>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-brand-gold" />
              </div>
              <h4 className="font-bold text-brand-dark mb-3">Fator Viking</h4>
              <p className="text-sm text-gray-600 mb-4">Biotecnologia para densidade folicular máxima.</p>
              <a href={AFF_VIKING} className="text-brand-gold text-xs font-bold underline">Ver Fator Viking</a>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-brand-gold" />
              </div>
              <h4 className="font-bold text-brand-dark mb-3">Dermaroller 0.5mm</h4>
              <p className="text-sm text-gray-600 mb-4">Microagulhamento para reativar folículos dormentes.</p>
              <a href={AFF_DERMAROLLER} className="text-brand-gold text-xs font-bold underline">Ver Dermaroller</a>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Celebridades com Cavanhaque Icônico</h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-brand-light p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">🎬 Robert Downey Jr. (Tony Stark)</h4>
              <p className="text-sm text-gray-600">Estilo: <strong>Balbo</strong>. Transformou o cavanhaque de vilão em símbolo de genialidade.</p>
            </div>
            <div className="bg-brand-light p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">🎤 Brad Pitt</h4>
              <p className="text-sm text-gray-600">Estilo: <strong>Van Dyke</strong>. Visual artístico e sofisticado que marcou época.</p>
            </div>
            <div className="bg-brand-light p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">⚽ David Beckham</h4>
              <p className="text-sm text-gray-600">Estilo: <strong>Círculo Real</strong>. Prova que cavanhaque funciona no esporte e moda.</p>
            </div>
            <div className="bg-brand-light p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">🎸 Johnny Depp</h4>
              <p className="text-sm text-gray-600">Estilo: <strong>Soul Patch + Bigode</strong>. Rebelde e único, marca registrada.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quanto tempo leva para crescer um cavanhaque?</h4>
              <p className="text-sm text-gray-600">2-4 semanas para ter material suficiente para modelar. 2-3 meses para densidade completa.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Cavanhaque funciona em ambiente corporativo?</h4>
              <p className="text-sm text-gray-600">Sim! Estilos como Círculo Real e Balbo são perfeitamente aceitáveis. Evite Van Dyke muito ousado em ambientes conservadores.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Como manter a simetria perfeita?</h4>
              <p className="text-sm text-gray-600">Use um espelho com boa iluminação. Tire fotos antes e depois. Apare aos poucos - é melhor tirar menos e ajustar depois.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Posso fazer cavanhaque se tenho falhas?</h4>
              <p className="text-sm text-gray-600">SIM! O cavanhaque é perfeito para quem tem falhas nas bochechas. Você só precisa de barba no bigode e queixo.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Qual a diferença entre cavanhaque e barba cheia?</h4>
              <p className="text-sm text-gray-600">Cavanhaque: apenas bigode + queixo. Barba cheia: cobre bochechas, queixo e pescoço. Cavanhaque é mais fácil de manter e não exige genética perfeita.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Preciso de produtos especiais?</h4>
              <p className="text-sm text-gray-600">Mínimo: máquina de cortar cabelo + tesoura de precisão. Recomendado: óleo de barba para hidratação e brilho.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: O Cavanhaque é Para Você?</h2>

          <p className="mb-6">Se você quer um visual masculino, versátil e que não exige genética de modelo, o cavanhaque é a escolha perfeita. Ele funciona para 90% dos homens, esconde falhas, é fácil de manter e projeta confiança e estilo.</p>

          <p className="mb-8 font-medium">Para garantir densidade máxima no seu cavanhaque, recomendamos o <a href={AFF_VIKING} className="text-brand-gold underline font-bold" target="_blank">Kit Fator Viking 6 Meses</a> para preenchimento total. Combine com a <a href={AFF_TESOURA} className="text-brand-gold underline font-bold" target="_blank">Tesoura de Precisão Stark</a> para manter o contorno sempre limpo e simétrico.</p>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Pronto para Dominar o Cavanhaque?</h3>
            <p className="mb-6 text-gray-300">Escolha seu style, siga o protocolo e transforme seu visual em 30 dias.</p>
            <a href={AFF_VIKING} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Kit Completo</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Um cavanhaque de 2026 pede bordas esfumadas ou extremamente cravadas. Se você busca o visual Tony Stark, use um lápis de contorno branco para desenhar antes de passar a máquina. A precisão é o que separa um cavanhaque 'feirante' de um cavanhaque 'executivo'."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'v-vik', name: "Kit Fator Viking 6 Meses", desc: "Preenchimento total e densidade folicular.", link: AFF_VIKING, icon: <Trophy size={32} /> },
        { id: 't-prec', name: "Tesoura de Precisão", desc: "Para manter o contorno sempre limpo e desenhado.", link: AFF_TESOURA, icon: <Scissors size={32} /> }
      ]
    },
    'origem-cavanhaque-cinema': {
      title: "O Cavanhaque no Cinema: Dos Vilões aos Heróis de Estilo",
      subtitle: "Como Hollywood transformou o cavanhaque de um símbolo de vilania em marca registrada de personagens icônicos.",
      author: "Carlos Barbudo",
      date: "08 de Março de 2026",
      readTime: "12 min",
      category: "Cultura",
      image: "/assets/cavanhaque-cinema.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            No cinema clássico, o cavanhaque era reservado aos vilões - pense em Capitão Gancho, Jafar de Aladdin ou qualquer antagonista de filme noir. Mas tudo mudou em 2008, quando Robert Downey Jr. estreou como Tony Stark em Homem de Ferro. Seu icônico cavanhaque Balbo transformou para sempre a percepção cultural desse estilo, elevando-o de símbolo de vilania para marca registrada de genialidade e sofisticação.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A História do Cavanhaque no Cinema</h2>

          <p className="mb-6">Durante décadas, Hollywood usou o cavanhaque como <strong>código visual para vilania</strong>. A lógica era simples: rostos lisos representavam pureza e heroísmo, enquanto pelos faciais estrategicamente posicionados sugeriam astúcia, maldade ou ambiguidade moral.</p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-2xl">
              <h4 className="font-bold text-red-700 mb-4">🎭 Era dos Vilões (1920-2000)</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Capitão Gancho</strong> (Peter Pan) - cavanhaque pontudo</li>
                <li>• <strong>Jafar</strong> (Aladdin) - cavanhaque fino e sinistro</li>
                <li>• <strong>Hades</strong> (Hércules) - cavanhaque de fogo</li>
                <li>• <strong>Vilões de Western</strong> - sempre com cavanhaque</li>
                <li>• <strong>Filme Noir</strong> - bandidos com bigode + cavanhaque</li>
              </ul>
            </div>

            <div className="bg-brand-gold/10 border-2 border-brand-gold/30 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-4">⭐ Era dos Heróis (2008-Hoje)</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Tony Stark</strong> (Iron Man) - Balbo icônico</li>
                <li>• <strong>Doctor Strange</strong> - cavanhaque místico</li>
                <li>• <strong>Johnny Depp</strong> - Van Dyke em vários filmes</li>
                <li>• <strong>Brad Pitt</strong> - cavanhaque sofisticado</li>
                <li>• <strong>Chris Evans</strong> - cavanhaque em Vingadores</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Tony Stark: O Divisor de Águas</h2>

          <p className="mb-6">Quando Robert Downey Jr. apareceu pela primeira vez como Tony Stark em 2008, seu cavanhaque Balbo não era apenas um detalhe estético - era parte integral do personagem. O visual comunicava:</p>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">O Que o Cavanhaque de Stark Comunica</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="font-bold text-brand-dark mb-2">Genialidade</h4>
                <p className="text-sm text-gray-600">Visual de cientista rebelde que não segue regras</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💎</div>
                <h4 className="font-bold text-brand-dark mb-2">Sofisticação</h4>
                <p className="text-sm text-gray-600">Cuidado meticuloso com detalhes e aparência</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-brand-dark mb-2">Rebeldia Controlada</h4>
                <p className="text-sm text-gray-600">Não é herói tradicional, mas faz o certo</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Estilo Balbo: Anatomia do Visual de Tony Stark</h2>

          <p className="mb-6">O estilo de Stark, conhecido como <strong>Balbo</strong>, é caracterizado por:</p>

          <div className="bg-brand-light p-8 rounded-2xl border-2 border-brand-gold/20 my-10">
            <h4 className="font-bold text-brand-dark mb-4 text-lg">Características do Balbo:</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold">✓</span>
                <span><strong>Bigode desconectado:</strong> Não toca a barba do queixo (GAP de 1-2cm)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold">✓</span>
                <span><strong>Barba em âncora:</strong> Formato de âncora de navio no queixo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold">✓</span>
                <span><strong>Bochechas raspadas:</strong> Completamente limpas, sem pelos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold">✓</span>
                <span><strong>Linhas precisas:</strong> Contornos retos e simétricos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold">✓</span>
                <span><strong>Comprimento curto:</strong> 3-5mm, bem aparado</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Como Fazer o Cavanhaque Balbo (Estilo Tony Stark)</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold">Tutorial Passo a Passo Profissional</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Deixar Crescer (3-4 semanas)</h4>
                  <p className="text-sm text-gray-300">Deixe crescer barba completa por 3-4 semanas para ter material suficiente. Não tente fazer Balbo com menos de 3 semanas de crescimento.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Raspar Bochechas Completamente</h4>
                  <p className="text-sm text-gray-300">Com máquina 0 ou navalha, raspar TODAS as bochechas. Criar linha reta e limpa na altura da orelha. Bochechas devem ficar 100% limpas.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Criar o GAP (Desconexão)</h4>
                  <p className="text-sm text-gray-300">Raspar completamente a área entre o bigode e a barba do queixo. Criar um GAP de 1-2cm. Esta é a característica ESSENCIAL do Balbo - bigode e queixo NÃO podem se tocar.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Modelar a Âncora no Queixo</h4>
                  <p className="text-sm text-gray-300">Com <a href={AFF_TESOURA} className="text-brand-gold underline font-bold">tesoura de precisão</a>, criar formato de âncora no queixo. Base larga (3-4cm) que afunila para baixo. Ponta pode ser arredondada ou levemente pontuda.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div>
                  <h4 className="font-bold mb-2">Aparar Comprimento Uniformemente</h4>
                  <p className="text-sm text-gray-300">Usar máquina 3-5mm ou tesoura para manter comprimento uniforme. Tony Stark mantém sempre curto e bem cuidado. Aparar bigode para não cobrir lábio.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">6</span>
                <div>
                  <h4 className="font-bold mb-2">Criar Linhas Precisas</h4>
                  <p className="text-sm text-gray-300">Com navalha ou aparador de precisão, criar linhas retas e simétricas. Simetria é TUDO no Balbo. Use espelho com boa iluminação. Tire fotos para verificar simetria.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">7</span>
                <div>
                  <h4 className="font-bold mb-2">Finalização e Brilho</h4>
                  <p className="text-sm text-gray-300">Aplicar <a href={AFF_OIL} className="text-brand-gold underline font-bold">Óleo de Sândalo</a> para brilho e maciez. Fios opacos não aparecem bem - o brilho é essencial para o visual de cinema.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Outros Personagens Icônicos com Cavanhaque</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-2">🎬 Doctor Strange (Benedict Cumberbatch)</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Cavanhaque cheio (círculo real) com bigode conectado. Transmite misticismo e sabedoria. Mais volumoso que o de Stark.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-2">🎬 Capitão Jack Sparrow (Johnny Depp)</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Van Dyke com tranças e contas. Bigode e cavanhaque desconectados, visual pirata e rebelde. Icônico e único.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-2">🎬 Tyler Durden (Brad Pitt - Clube da Luta)</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Cavanhaque fino e minimalista. Visual anarquista e anti-sistema. Menos é mais.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-2">🎬 Capitão América (Chris Evans - Vingadores)</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Barba cheia com cavanhaque definido. Visual mais maduro e sombrio do herói. Mostra evolução do personagem.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-2">🎬 Hannibal Lecter (Mads Mikkelsen - Série)</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Van Dyke impecável e sofisticado. Transmite elegância psicopata. Sempre perfeitamente simétrico.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Segredo do Brilho de Cinema</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 p-4"><Film size={120} /></div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">Por Que Barbas de Cinema Brilham Tanto?</h3>
            <p className="mb-6">Fios opacos e sem vida não aparecem bem na câmera. Todos os atores com cavanhaque em Hollywood usam produtos profissionais para garantir brilho e definição.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-brand-gold">No Set de Filmagem:</h4>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li>• Óleo de barba premium</li>
                  <li>• Balm para fixação</li>
                  <li>• Spray de brilho</li>
                  <li>• Retoque a cada cena</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-brand-gold">Para Replicar em Casa:</h4>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li>• <a href={AFF_OIL} className="text-brand-gold underline font-bold">Óleo de Sândalo</a> diariamente</li>
                  <li>• Pentear com escova de cerdas</li>
                  <li>• Secar com secador (baixa temperatura)</li>
                  <li>• Finalizar com balm leve</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Manutenção do Balbo: Rotina Semanal</h2>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h4 className="font-bold text-brand-dark mb-6">Cronograma de Manutenção:</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-4">
                <span className="font-bold text-brand-gold shrink-0">2x/semana:</span>
                <span className="text-gray-600">Raspar bochechas e GAP para manter linhas limpas</span>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-brand-gold shrink-0">1x/semana:</span>
                <span className="text-gray-600">Aparar comprimento com máquina ou tesoura</span>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-brand-gold shrink-0">1x/semana:</span>
                <span className="text-gray-600">Ajustar formato da âncora e simetria</span>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-brand-gold shrink-0">Diariamente:</span>
                <span className="text-gray-600">Aplicar óleo após banho, pentear e modelar</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Qual a diferença entre Balbo e Van Dyke?</h4>
              <p className="text-sm text-gray-600">Ambos têm bigode desconectado, mas o Balbo tem base mais larga no queixo (formato de âncora) enquanto o Van Dyke é mais fino e pontudo. Balbo é mais moderno, Van Dyke é mais clássico.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Preciso ir ao barbeiro ou posso fazer em casa?</h4>
              <p className="text-sm text-gray-600">Primeira vez: vá ao barbeiro para criar o formato correto. Depois, você pode manter em casa com as ferramentas certas. O Balbo exige precisão, então se não tiver habilidade, continue indo ao barbeiro.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ O Balbo funciona para todos os formatos de rosto?</h4>
              <p className="text-sm text-gray-600">Funciona melhor em rostos ovais, triangulares e com queixo estreito (alonga o rosto). Evite se tiver rosto muito redondo ou queixo muito largo.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quanto tempo leva para crescer um Balbo?</h4>
              <p className="text-sm text-gray-600">3-4 semanas para ter material suficiente para modelar. Mais 2-3 semanas para atingir densidade completa. Total: 6-8 semanas do zero até o visual final.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Como manter a simetria perfeita?</h4>
              <p className="text-sm text-gray-600">Use espelho com boa iluminação. Tire fotos antes e depois. Trabalhe devagar e apare aos poucos. É melhor tirar menos e ajustar depois do que tirar demais.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: O Legado do Cavanhaque no Cinema</h2>

          <p className="mb-6">De símbolo de vilania a marca de genialidade, o cavanhaque percorreu uma jornada fascinante no cinema. Tony Stark não apenas popularizou o Balbo - ele redefiniu completamente como vemos esse estilo. Hoje, ter um cavanhaque bem cuidado não é mais sinal de maldade, mas de sofisticação, atenção aos detalhes e personalidade forte.</p>

          <p className="mb-8 font-medium">Se você quer replicar o visual de cinema em casa, comece com as ferramentas certas: <a href={AFF_TESOURA} className="text-brand-gold underline font-bold" target="_blank">Tesoura de Precisão Stark</a> para linhas impecáveis e <a href={AFF_OIL} className="text-brand-gold underline font-bold" target="_blank">Óleo Premium de Sândalo</a> para o brilho digno de tapete vermelho.</p>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Pronto para Seu Visual de Herói?</h3>
            <p className="mb-6 text-gray-300">Transforme-se com o cavanhaque que mudou Hollywood.</p>
            <a href={AFF_TESOURA} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Kit Completo</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O segredo do Balbo do Tony Stark não é só o corte, é a simetria absoluta. Se um lado do GAP estiver 1mm maior que o outro, seu rosto vai parecer torto em fotos. Use um paquímetro ou uma régua pequena na frente do espelho se for necessário. No cinema, eles usam gabaritos de acrílico para garantir a perfeição."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 't-stark', name: "Tesoura Stark", desc: "Corte preciso para o visual de herói.", link: AFF_TESOURA, icon: <Scissors size={32} /> },
        { id: 'o-sand', name: "Óleo Premium Sândalo", desc: "Brilho e maciez para fios de protagonista.", link: AFF_OIL, icon: <Droplets size={32} /> }
      ]
    },
    'melhores-oleos-2024': {
      title: "Os Melhores Óleos para Barba em 2026: Guia de Hidratação Profunda",
      subtitle: "Testamos os ativos mais potentes do mercado para definir o ranking definitivo de hidratação e brilho.",
      author: "Carlos Barbudo",
      date: "07 de Março de 2026",
      readTime: "15 min",
      category: "Reviews",
      image: "/assets/melhores-oleos-premium.webp",
      howToSteps: [
        { name: "Lavagem da Barba", text: "Use shampoo específico para remover impurezas e abrir as cutículas do fio." },
        { name: "Secagem com Toalha", text: "Retire o excesso de água. A barba deve estar levemente úmida para melhor absorção." },
        { name: "Dosagem", text: "Aplique de 3 a 5 gotas na palma da mão, dependendo do comprimento." },
        { name: "Aplicação na Raiz", text: "Massageie primeiro a pele sob a barba e depois estenda para as pontas." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Óleo de barba não é perfumaria nem luxo desnecessário - é <strong>manutenção essencial</strong> da saúde da pele e dos fios. Sem ele, a coceira insuportável, descamação (beardruff) e fios ressecados são inevitáveis. Mas com dezenas de marcas no mercado, como escolher o melhor? Testamos os ativos mais potentes de 2026 para criar o ranking definitivo.
          </p>

          <ToolBox 
            tools={[
              { name: "Óleo Premium de Argan e Jojoba", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Madeira Anti-Estático", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo de Barba Mentolado", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Ponto de Umidade Perfeito",
                description: "Nunca aplique óleo na barba pingando água. Seque com uma toalha até que ela esteja apenas úmida. A água restante ajuda a 'puxar' o óleo para dentro da cutícula do fio.",
                tip: "Se a barba estiver muito seca, os fios podem ficar com aspecto engordurado em vez de hidratado."
              },
              {
                title: "Ativação Térmica",
                description: "Pingue a quantidade necessária na palma das mãos e esfregue uma na outra por 5 segundos. O calor das suas mãos ativa os óleos essenciais e facilita a espalhabilidade.",
                tip: "Para barbas curtas (2cm), use 2 gotas. Para barbas médias (5cm), use 4 a 6 gotas. Para barbas longas, use 10 gotas ou mais."
              },
              {
                title: "Foco na Base (A Pele)",
                description: "O maior erro é passar óleo só por fora. Enfie os dedos por dentro da barba e massageie a pele. O óleo serve para hidratar o rosto que está por baixo dos fios.",
                tip: "Massageie por pelo menos 30 segundos para estimular a circulação sanguínea no folículo."
              },
              {
                title: "A Extensão para as Pontas",
                description: "Depois de tratar a pele, deslize as mãos pelas laterais e pontas da barba. Isso sela as cutículas, reduz o frizz e dá aquele brilho de comercial de TV.",
                tip: "Passe o resto que sobrou nas mãos no bigode, evitando que caia dentro da boca."
              },
              {
                title: "O Pente de Madeira (Finalização)",
                description: "Use um pente de madeira de dentes largos para alinhar os fios. A madeira ajuda a distribuir o excesso de óleo uniformemente por toda a extensão da barba.",
                tip: "Pentes de plástico criam estática e deixam os fios arrepiados. Use sempre madeira."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Por Que Usar Óleo de Barba? A Ciência Por Trás</h2>

          <p className="mb-6">A barba rouba a oleosidade natural da pele. Cada fio funciona como um "canudo" que puxa o sebo produzido pela pele, deixando a região ressecada. O resultado:</p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-2xl text-center">
              <h4 className="font-bold text-red-700 mb-3">Sem Óleo</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Coceira intensa</li>
                <li>• Caspa de barba</li>
                <li>• Fios ásperos</li>
                <li>• Frizz descontrolado</li>
              </ul>
            </div>
            <div className="bg-brand-gold/10 border-2 border-brand-gold/30 p-6 rounded-2xl text-center">
              <h4 className="font-bold text-brand-dark mb-3">Com Óleo ✓</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Pele hidratada</li>
                <li>• Zero descamação</li>
                <li>• Fios macios</li>
                <li>• Brilho saudável</li>
              </ul>
            </div>
            <div className="bg-brand-light border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <h4 className="font-bold text-brand-dark mb-3">Benefícios Extra</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fragrância masculina</li>
                <li>• Facilita pentear</li>
                <li>• Protege do sol</li>
                <li>• Visual profissional</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Ranking 2026: Os 5 Melhores Óleos de Barba</h2>

          <div className="space-y-8 my-10">
            <div className="bg-gradient-to-r from-yellow-50 to-brand-gold/10 border-4 border-brand-gold p-8 rounded-3xl relative">
              <div className="absolute -top-4 -left-4 bg-brand-gold text-brand-dark font-black text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-2xl">1º</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 ml-12">Óleo de Sândalo Amadeirado Premium</h3>
              <p className="text-gray-600 mb-4">O vencedor absoluto. Absorção ultra-rápida, fragrância sofisticada e zero aspecto oleoso.</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="font-bold text-brand-dark mb-2">Ingredientes-chave:</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• Óleo de Argan (hidratação profunda)</li>
                    <li>• Óleo de Jojoba (similar ao sebo natural)</li>
                    <li>• Vitamina E (antioxidante)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-brand-dark mb-2">Melhor para:</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• Todos os tipos de barba</li>
                    <li>• Pele oleosa ou mista</li>
                    <li>• Uso diário</li>
                  </ul>
                </div>
              </div>
              <a href={AFF_OIL} className="inline-block bg-brand-gold text-brand-dark px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform">Ver Oferta Oficial</a>
            </div>

            <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-gray-200 text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">2º</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Óleo de Coco + Abacate</h3>
                  <p className="text-gray-600 text-sm mb-3">Ideal para barbas ressecadas. Penetração profunda e nutrição intensa.</p>
                  <p className="text-xs text-gray-500"><strong>Melhor para:</strong> Barbas longas, climas secos, fios danificados</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-gray-200 text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">3º</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Óleo de Cedro + Tea Tree</h3>
                  <p className="text-gray-600 text-sm mb-3">Propriedades antifúngicas. Combate caspa e foliculite.</p>
                  <p className="text-xs text-gray-500"><strong>Melhor para:</strong> Pele sensível, acne, caspa de barba</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-gray-200 text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">4º</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Óleo de Amêndoas + Vitamina E</h3>
                  <p className="text-gray-600 text-sm mb-3">Fragrância suave, absorção moderada. Bom custo-benefício.</p>
                  <p className="text-xs text-gray-500"><strong>Melhor para:</strong> Iniciantes, barbas curtas, uso ocasional</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-gray-200 text-brand-dark font-black text-2xl px-5 py-3 rounded-xl shrink-0">5º</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Óleo de Rícino (Castor Oil)</h3>
                  <p className="text-gray-600 text-sm mb-3">Viscoso e denso. Estimula crescimento mas deixa aspecto oleoso.</p>
                  <p className="text-xs text-gray-500"><strong>Melhor para:</strong> Uso noturno, barbas ralas, crescimento</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Ingredientes Ativos: O Que Procurar no Rótulo</h2>

          <div className="overflow-x-auto my-10">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="p-4 text-left font-black uppercase text-xs">Ingrediente</th>
                  <th className="p-4 text-left font-black uppercase text-xs">Benefício</th>
                  <th className="p-4 text-left font-black uppercase text-xs">Tipo de Pele</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-brand-light/50">
                  <td className="p-4 font-bold text-brand-dark">Óleo de Argan</td>
                  <td className="p-4 text-sm text-gray-600">Hidratação profunda, anti-idade</td>
                  <td className="p-4 text-sm text-gray-600">Todos os tipos</td>
                </tr>
                <tr className="hover:bg-brand-light/50">
                  <td className="p-4 font-bold text-brand-dark">Óleo de Jojoba</td>
                  <td className="p-4 text-sm text-gray-600">Similar ao sebo natural, não comedogênico</td>
                  <td className="p-4 text-sm text-gray-600">Oleosa, acneica</td>
                </tr>
                <tr className="hover:bg-brand-light/50">
                  <td className="p-4 font-bold text-brand-dark">Óleo de Coco</td>
                  <td className="p-4 text-sm text-gray-600">Nutrição intensa, brilho</td>
                  <td className="p-4 text-sm text-gray-600">Seca, normal</td>
                </tr>
                <tr className="hover:bg-brand-light/50">
                  <td className="p-4 font-bold text-brand-dark">Tea Tree</td>
                  <td className="p-4 text-sm text-gray-600">Antifúngico, combate caspa</td>
                  <td className="p-4 text-sm text-gray-600">Sensível, acneica</td>
                </tr>
                <tr className="hover:bg-brand-light/50">
                  <td className="p-4 font-bold text-brand-dark">Vitamina E</td>
                  <td className="p-4 text-sm text-gray-600">Antioxidante, protege do sol</td>
                  <td className="p-4 text-sm text-gray-600">Todos os tipos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Protocolo de Aplicação Perfeita</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold">Passo a Passo Profissional</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Lave a barba com shampoo específico</h4>
                  <p className="text-sm text-gray-300">Água morna abre os poros. Shampoo comum resseca demais.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Seque com toalha (não completamente)</h4>
                  <p className="text-sm text-gray-300">Barba levemente úmida absorve melhor o óleo.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Aplique 3-5 gotas nas mãos</h4>
                  <p className="text-sm text-gray-300">Barba curta: 3 gotas. Barba média: 4-5 gotas. Barba longa: 6-8 gotas.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Espalhe uniformemente</h4>
                  <p className="text-sm text-gray-300">Comece pela raiz (pele) e vá até as pontas. Massageie por 1-2 minutos.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div>
                  <h4 className="font-bold mb-2">Penteie para distribuir</h4>
                  <p className="text-sm text-gray-300">Use pente de madeira. Modela e distribui o óleo uniformemente.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Óleo vs Balm vs Cera: Qual Usar?</h2>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/30">
              <h4 className="font-bold text-brand-dark mb-3 text-center">ÓLEO</h4>
              <p className="text-sm text-gray-600 mb-4">Líquido, absorção rápida</p>
              <p className="text-xs font-bold text-brand-dark mb-2">Melhor para:</p>
              <ul className="text-xs text-gray-600 space-y-1 ml-4">
                <li>• Hidratação diária</li>
                <li>• Barbas curtas/médias</li>
                <li>• Pele seca</li>
              </ul>
            </div>

            <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/30">
              <h4 className="font-bold text-brand-dark mb-3 text-center">BALM</h4>
              <p className="text-sm text-gray-600 mb-4">Cremoso, fixação leve</p>
              <p className="text-xs font-bold text-brand-dark mb-2">Melhor para:</p>
              <ul className="text-xs text-gray-600 space-y-1 ml-4">
                <li>• Modelagem + hidratação</li>
                <li>• Barbas médias/longas</li>
                <li>• Controle de frizz</li>
              </ul>
            </div>

            <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/30">
              <h4 className="font-bold text-brand-dark mb-3 text-center">CERA</h4>
              <p className="text-sm text-gray-600 mb-4">Sólida, fixação forte</p>
              <p className="text-xs font-bold text-brand-dark mb-2">Melhor para:</p>
              <ul className="text-xs text-gray-600 space-y-1 ml-4">
                <li>• Bigodes com pontas</li>
                <li>• Estilos elaborados</li>
                <li>• Fixação duradoura</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quantas vezes por dia devo usar óleo?</h4>
              <p className="text-sm text-gray-600">1x ao dia é suficiente (após o banho). Em climas muito secos ou barbas muito longas, pode usar 2x (manhã e noite).</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Óleo deixa a barba oleosa?</h4>
              <p className="text-sm text-gray-600">Se usar a quantidade certa, não. O segredo é usar poucas gotas. Excesso deixa oleoso e atrai sujeira.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Posso usar óleo de cozinha?</h4>
              <p className="text-sm text-gray-600">NÃO recomendado. Óleos de cozinha não são refinados para uso cosmético e podem entupir poros.</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Óleo ajuda a crescer barba?</h4>
              <p className="text-sm text-gray-600">Indiretamente sim. Mantém os folículos saudáveis e evita quebra dos fios. Mas não cria novos folículos (para isso, use Minoxidil).</p>
            </div>
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quanto tempo dura um frasco?</h4>
              <p className="text-sm text-gray-600">Frasco de 30ml dura 2-3 meses com uso diário (barba média). Ótimo custo-benefício.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: Invista em Qualidade</h2>

          <p className="mb-6">Óleo de barba barato geralmente usa óleos minerais (derivados de petróleo) que apenas "enganam" dando brilho superficial. Óleos premium usam ativos vegetais que realmente nutrem e hidratam.</p>

          <p className="mb-8 font-medium">Recomendamos o <a href={AFF_OIL} className="text-brand-gold underline font-bold" target="_blank">Óleo Premium de Sândalo</a> como melhor custo-benefício. Absorção rápida, fragrância sofisticada e resultados visíveis em 24 horas. Combine com o <a href={AFF_KIT_FACIAL} className="text-brand-gold underline font-bold" target="_blank">Kit Facial Completo</a> para cuidar também da pele por baixo da barba.</p>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Transforme Sua Barba em 24 Horas</h3>
            <p className="mb-6 text-gray-300">Sinta a diferença de uma barba profissionalmente hidratada.</p>
            <a href={AFF_OIL} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Óleo Premium</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para saber se o seu óleo é de qualidade, faça o teste do papel: pingue uma gota num papel sulfite branco. Se após 2 horas a mancha gordurosa não 'sumir' ou ficar muito amarelada, seu óleo tem excesso de óleo mineral barato. Um bom óleo vegetal deve ser absorvido quase totalmente, deixando apenas o rastro do aroma."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'o-sand', name: "Óleo Premium Sândalo", desc: "O melhor custo-benefício em hidratação extrema.", link: AFF_OIL, icon: <Droplets size={32} /> },
        { id: 'k-facial', name: "Kit Facial Completo", desc: "Higiene e nutrição para o rosto por baixo da barba.", link: AFF_KIT_FACIAL, icon: <Sparkles size={32} /> }
      ]
    },
    'visagismo-carecas-barbudos': {
      title: "Guia de Visagismo para Carecas: Como a Barba Equilibra o Rosto",
      subtitle: "A regra de ouro do visagismo: quanto menos cabelo no topo, mais importante é o desenho da barba.",
      author: "Carlos Barbudo",
      date: "06 de Março de 2026",
      readTime: "14 min",
      category: "Estilo",
      image: "/assets/visagismo-carecas.webp",
      howToSteps: [
        { name: "Degradê da Costeleta", text: "Faça uma transição suave entre a barba e a pele da careca na altura da orelha." },
        { name: "Definição de Maxilar", text: "Modele a linha inferior da barba para criar um queixo mais quadrado e forte." },
        { name: "Higiene do Escalpo", text: "Lave a careca e a barba com produtos específicos para não ressecar a pele." },
        { name: "Controle de Volume", text: "Apare as laterais da barba para não deixar o rosto parecer redondo demais." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Para o homem que optou por raspar a cabeça - seja por escolha estética ou por calvície - a barba deixa de ser um simples acessório e se torna sua nova identidade visual. Sem o cabelo para moldar o formato do rosto, a barba assume o papel de criar equilíbrio, projetar masculinidade e definir sua presença. Este é o guia definitivo de visagismo para carecas barbudos.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina Profissional Sem Fio", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Shampoo 2 em 1 (Barba e Careca)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Navalhete de Contorno Stark", link: "https://mercadolivre.com/sec/28LNYBa" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Ponto de Transição (Sideburn Fade)",
                description: "O maior erro do careca é deixar a barba terminar abruptamente numa linha reta na altura da orelha. Use o pente 1 e 0.5 para fazer um degradê que 'derreta' a barba na pele da careca.",
                tip: "Comece o degradê na altura do 'tragus' (aquela cartilagem na frente do canal auditivo)."
              },
              {
                title: "Esculpindo o Maxilar Falso",
                description: "Sem cabelo no topo, o queixo precisa de peso. Deixe a barba 2 ou 3mm mais comprida na ponta do queixo do que nas bochechas para alongar o rosto.",
                tip: "Aponte o volume da barba para baixo, não para os lados, para evitar o efeito 'rosto de bolacha'."
              },
              {
                title: "Limpeza Total do Pescoço",
                description: "O visual careca + barba exige limpeza absoluta. Raspe todo o pescoço e a nuca. Fios perdidos no pescoço destroem a estética 'clean' que esse visual pede.",
                tip: "Use um espelho de mão para conferir se a linha da nuca está perfeitamente reta e limpa."
              },
              {
                title: "Hidratação Unificada",
                description: "A pele da sua careca e a pele sob a barba sofrem com o mesmo ressecamento. Use um Balm hidratante que possa ser aplicado em ambas as áreas sem deixar oleoso.",
                tip: "O Balm ajuda a tirar o brilho excessivo da careca enquanto hidrata os fios da barba."
              },
              {
                title: "A Regra das Bochechas",
                description: "Mantenha a linha da bochecha um pouco mais baixa para mostrar mais do seu rosto. Isso evita que a barba 'engula' suas feições agora que não há cabelo.",
                tip: "Desenhe uma linha curva suave da costeleta até o bigode para um visual mais amigável e moderno."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Lei da Compensação Visual</h2>

          <p className="mb-6">O princípio fundamental do visagismo para carecas é simples: <strong>quanto menos cabelo no topo, mais importante é o desenho da barba</strong>. Sem o cabelo para moldar o formato do rosto, a barba serve para "ancorar" o visual e criar estrutura.</p>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Por Que Carecas Precisam de Barba?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-brand-dark mb-3">✓ Benefícios Visuais:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Cria estrutura facial onde falta cabelo</li>
                  <li>• Define linha do maxilar</li>
                  <li>• Alonga rostos redondos</li>
                  <li>• Projeta masculinidade e autoridade</li>
                  <li>• Equilibra proporções do rosto</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-3">✓ Impacto Psicológico:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Aumenta autoconfiança</li>
                  <li>• Cria identidade visual forte</li>
                  <li>• Compensa perda de cabelo</li>
                  <li>• Transmite maturidade</li>
                  <li>• Diferenciação pessoal</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Os 5 Estilos de Barba Ideais para Carecas</h2>

          <div className="space-y-8 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Barba Cheia com Degradê (O Clássico)</h4>
                  <p className="text-sm text-gray-600 mb-4">A combinação mais popular e eficaz. Barba cheia no queixo (5-10cm) com degradê (fade) nas costeletas.</p>
                </div>
              </div>
              <div className="bg-brand-light p-6 rounded-xl">
                <h5 className="font-bold text-brand-dark mb-3">Como Fazer:</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Deixar barba crescer por 2-3 meses</li>
                  <li>• Criar degradê nas costeletas (máquina 0 na base → máquina 2 no topo)</li>
                  <li>• Manter volume no queixo (5-10cm)</li>
                  <li>• Aparar bigode para não cobrir lábio</li>
                  <li>• Linha do pescoço limpa (2 dedos acima do pomo de adão)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4"><strong>Ideal para:</strong> Todos os formatos de rosto. Visual masculino e equilibrado.</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Barba Quadrada (Short Boxed)</h4>
                  <p className="text-sm text-gray-600 mb-4">Barba aparada em formato quadrado (2-5cm) com linhas retas. Visual corporativo e profissional.</p>
                </div>
              </div>
              <div className="bg-brand-light p-6 rounded-xl">
                <h5 className="font-bold text-brand-dark mb-3">Como Fazer:</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Deixar crescer por 4-6 semanas</li>
                  <li>• Aparar uniformemente com máquina 6-10mm</li>
                  <li>• Criar linhas RETAS nas bochechas e pescoço</li>
                  <li>• Formato quadrado (não arredondado)</li>
                  <li>• Manter sempre bem aparado e simétrico</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4"><strong>Ideal para:</strong> Ambientes corporativos. Rostos redondos (cria ângulos).</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Cavanhaque Estendido (Hollywoodian)</h4>
                  <p className="text-sm text-gray-600 mb-4">Bigode + linha do maxilar + queixo. Sem bochechas. Visual sofisticado e moderno.</p>
                </div>
              </div>
              <div className="bg-brand-light p-6 rounded-xl">
                <h5 className="font-bold text-brand-dark mb-3">Como Fazer:</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Raspar completamente bochechas e costeletas</li>
                  <li>• Manter bigode + linha do maxilar (2-3cm de largura)</li>
                  <li>• Conectar ao queixo</li>
                  <li>• Aparar comprimento uniformemente (máquina 3-5mm)</li>
                  <li>• Linhas precisas e simétricas</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4"><strong>Ideal para:</strong> Rostos ovais e quadrados. Visual clean e definido.</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Barba Lenhador (Lumberjack)</h4>
                  <p className="text-sm text-gray-600 mb-4">Barba longa e volumosa (10-15cm). Visual robusto e imponente. Requer paciência.</p>
                </div>
              </div>
              <div className="bg-brand-light p-6 rounded-xl">
                <h5 className="font-bold text-brand-dark mb-3">Como Fazer:</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Deixar crescer por 6-12 meses</li>
                  <li>• Aparar apenas pontas duplas</li>
                  <li>• Manter linha do pescoço limpa</li>
                  <li>• Hidratar diariamente com óleo</li>
                  <li>• Pentear com escova de cerdas naturais</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4"><strong>Ideal para:</strong> Rostos ovais e diamante. Visual de lenhador/viking.</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Stubble Denso (Barba de 3 Dias)</h4>
                  <p className="text-sm text-gray-600 mb-4">Barba curta e uniforme (2-5mm). Visual casual mas cuidado. Baixa manutenção.</p>
                </div>
              </div>
              <div className="bg-brand-light p-6 rounded-xl">
                <h5 className="font-bold text-brand-dark mb-3">Como Fazer:</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Usar aparador elétrico com pente 2-3mm</li>
                  <li>• Aparar TODO o rosto uniformemente</li>
                  <li>• Fazer a cada 2-3 dias</li>
                  <li>• Limpar linha do pescoço semanalmente</li>
                  <li>• Não deixar passar de 5 dias</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4"><strong>Ideal para:</strong> Quem quer praticidade. Visual masculino sem compromisso.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Tutorial: Degradê Perfeito para Carecas</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold flex items-center gap-3"><Layout /> Foco no Maxilar</h3>

            <p className="mb-6">O degradê (fade) é ESSENCIAL para carecas. Ele evita que o rosto fique muito largo e cria uma transição suave entre a cabeça raspada e a barba.</p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Base (Costeletas)</h4>
                  <p className="text-sm text-gray-300">Começar com máquina 0 ou 0.5mm na altura da orelha. Esta será a transição entre cabeça raspada e barba.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Meio (Bochechas)</h4>
                  <p className="text-sm text-gray-300">Máquina 1 ou 1.5mm do terço inferior até o terço médio das bochechas. Criar transição suave.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Topo (Queixo)</h4>
                  <p className="text-sm text-gray-300">Máquina 2-3mm ou deixar natural no queixo. AQUI é onde fica o volume. Não aparar demais.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Esfumaçar</h4>
                  <p className="text-sm text-gray-300">Usar máquina sem pente, apenas lateral da lâmina, para suavizar transições. Movimentos circulares.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div>
                  <h4 className="font-bold mb-2">Finalizar</h4>
                  <p className="text-sm text-gray-300">Navalha para criar linhas limpas. Aplicar óleo para brilho e definição.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-brand-gold/10 rounded-2xl border border-brand-gold/30">
              <p className="text-sm"><strong className="text-brand-gold">REGRA DE OURO:</strong> Use o degradê apenas nas costeletas e bochechas. Deixe o volume se concentrar no queixo para criar uma mandíbula imponente.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Ícones Carecas Barbudos</h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">💪 Jason Statham</h4>
              <p className="text-sm text-gray-600 mb-2"><strong>Estilo:</strong> Stubble denso (3-5mm) uniforme</p>
              <p className="text-sm text-gray-600"><strong>Por quê funciona:</strong> Visual masculino e prático. Define maxilar sem exageros.</p>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">💪 Dwayne "The Rock" Johnson</h4>
              <p className="text-sm text-gray-600 mb-2"><strong>Estilo:</strong> Cavanhaque fino + bigode</p>
              <p className="text-sm text-gray-600"><strong>Por quê funciona:</strong> Cria estrutura sem cobrir o rosto. Clean e definido.</p>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">💪 Vin Diesel</h4>
              <p className="text-sm text-gray-600 mb-2"><strong>Estilo:</strong> Cavanhaque + bigode desconectado</p>
              <p className="text-sm text-gray-600"><strong>Por quê funciona:</strong> Visual icônico e único. Marca pessoal forte.</p>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">💪 Pitbull (Mr. Worldwide)</h4>
              <p className="text-sm text-gray-600 mb-2"><strong>Estilo:</strong> Cavanhaque fino bem desenhado</p>
              <p className="text-sm text-gray-600"><strong>Por quê funciona:</strong> Sofisticado e limpo. Perfeito para ambientes formais.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Como Aumentar Densidade da Barba</h2>

          <p className="mb-6">Se sua barba é rala ou tem falhas, você pode aumentar a densidade antes de modelar. O objetivo é ter material suficiente para criar o visual desejado.</p>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Protocolo de Crescimento</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">1.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Minoxidil 5% (Kirkland)</h4>
                  <p className="text-sm text-gray-600">Aplicar 1ml 2x/dia nas áreas com falhas. Resultados em 3-6 meses. <a href={AFF_MINOXIDIL} className="text-brand-gold underline font-bold" target="_blank">Ver produto</a></p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">2.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Microagulhamento (Dermaroller)</h4>
                  <p className="text-sm text-gray-600">1x por semana com agulhas 0.5mm. Aumenta absorção do Minoxidil em até 4x.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">3.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Suplementação</h4>
                  <p className="text-sm text-gray-600">Biotina 10.000mcg/dia + Multivitamínico. Fortalece fios existentes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">4.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Paciência</h4>
                  <p className="text-sm text-gray-600">Resultados levam 3-6 meses. Não desista antes disso.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Careca SEM barba fica estranho?</h4>
              <p className="text-sm text-gray-600">Não necessariamente, mas a barba ajuda MUITO a criar estrutura facial. Se você tem maxilar forte, pode ficar bem sem barba. Mas 90% dos carecas ficam melhor com algum tipo de barba.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Qual o comprimento ideal de barba para carecas?</h4>
              <p className="text-sm text-gray-600">Depende do estilo. Mínimo: 2-3mm (stubble). Ideal: 5-10cm (barba cheia). Máximo: sem limite, mas acima de 15cm requer muita manutenção.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Devo raspar a cabeça completamente ou deixar um pouco de cabelo?</h4>
              <p className="text-sm text-gray-600">Se tem calvície avançada, raspar completamente (máquina 0 ou navalha) fica melhor. Visual limpo e intencional. Evite o "meio termo" que parece desleixo.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Como evitar que a barba fique muito larga nas bochechas?</h4>
              <p className="text-sm text-gray-600">Use degradê (fade) nas costeletas e bochechas. Mantenha volume apenas no queixo. Isso cria formato mais retangular e evita rosto muito largo.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Minha barba é rala. Devo usar Minoxidil?</h4>
              <p className="text-sm text-gray-600">SIM. Minoxidil funciona muito bem para barba. Resultados em 3-6 meses. Combine com microagulhamento para melhores resultados. <a href={AFF_MINOXIDIL} className="text-brand-gold underline font-bold" target="_blank">Ver protocolo completo</a></p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: O Poder do Visual Careca + Barbudo</h2>

          <p className="mb-6">O visual careca com barba não é apenas uma compensação pela falta de cabelo - é uma escolha estética poderosa que projeta masculinidade, confiança e autoridade. De Jason Statham a The Rock, os homens mais icônicos do mundo provam que cabeça raspada + barba bem cuidada é uma combinação imbatível.</p>

          <p className="mb-8 font-medium">Se você quer maximizar seu visual, comece com densidade: <a href={AFF_MINOXIDIL} className="text-brand-gold underline font-bold" target="_blank">Minoxidil Kirkland Original</a> para crescimento acelerado e <a href={AFF_VIKING} className="text-brand-gold underline font-bold" target="_blank">Fator Viking</a> para preenchimento de falhas.</p>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Pronto para Dominar o Visual Careca + Barbudo?</h3>
            <p className="mb-6 text-gray-300">Transforme sua aparência com o combo mais masculino que existe.</p>
            <a href={AFF_MINOXIDIL} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Kit Completo</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para carecas, a barba não pode ter pontas laterais que 'saiam' do rosto. Isso cria um efeito visual de 'rosto de abóbora'. Use a máquina sempre de cima para baixo nas laterais, garantindo que a barba acompanhe a linha da mandíbula de forma vertical e reta."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'm-kirk', name: "Minoxidil Kirkland Original", desc: "Densidade máxima para o visual careca/barbudo.", link: AFF_MINOXIDIL, icon: <FlaskConical size={32} /> },
        { id: 'v-vik', name: "Fator Viking Crescimento", desc: "Acelere o preenchimento de falhas no contorno facial.", link: AFF_VIKING, icon: <Trophy size={32} /> }
      ]
    },
    'guia-mestre-cavanhaque': {
      title: "O Guia Mestre do Cavanhaque: Anatomia de um Estilo Imortal",
      subtitle: "Descubra por que o cavanhaque é o estilo mais democrático e poderoso da barbearia mundial.",
      author: "Carlos Barbudo",
      date: "05 de Março de 2025",
      readTime: "18 min",
      category: "Estilo",
      image: "/assets/guia-mestre.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O cavanhaque é o equilíbrio perfeito entre o bigode e a âncora do queixo - um estilo que atravessou séculos, culturas e tendências sem perder relevância. De pintores renascentistas a executivos modernos, o cavanhaque permanece como o estilo mais democrático e poderoso da barbearia mundial. Este é o guia definitivo para dominar essa arte milenar.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A História Imortal do Cavanhaque</h2>

          <p className="mb-6">O cavanhaque tem uma história fascinante que remonta ao século XVI. O nome vem de <strong>Anthony Van Dyck</strong>, pintor flamengo da corte inglesa, que popularizou o estilo entre a nobreza europeia. Desde então, o cavanhaque evoluiu em dezenas de variações, cada uma com sua personalidade única.</p>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold text-brand-dark mb-2">Século XVI-XVII</h4>
              <p className="text-sm text-gray-600">Van Dyke populariza entre nobres. Visual de artista e intelectual.</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">🎭</div>
              <h4 className="font-bold text-brand-dark mb-2">Século XIX-XX</h4>
              <p className="text-sm text-gray-600">Vilões de cinema adotam. Símbolo de astúcia e mistério.</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-bold text-brand-dark mb-2">Século XXI</h4>
              <p className="text-sm text-gray-600">Ressurge como marca de sofisticação. Tony Stark redefine o estilo.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Os 7 Tipos Clássicos de Cavanhaque</h2>

          <div className="space-y-8 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Cavanhaque Cheio (Full Goatee / Círculo Real)</h4>
                  <p className="text-sm text-gray-600 mb-4">O mais popular. Bigode conectado à barba do queixo, formando círculo completo ao redor da boca.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer bigode e queixo por 2-3 semanas. Raspar bochechas completamente. Conectar bigode ao queixo pelas laterais da boca. Aparar comprimento uniformemente (máquina 3-5mm).</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Todos os formatos de rosto. Esconde falhas nas bochechas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Van Dyke (Clássico)</h4>
                  <p className="text-sm text-gray-600 mb-4">Bigode DESCONECTADO do queixo. GAP entre eles. Visual artístico e sofisticado.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 3-4 semanas. Raspar área entre bigode e queixo (GAP de 1-2cm). Modelar bigode fino e pontudo. Aparar queixo em formato de âncora ou ponta.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Rostos ovais e redondos. Visual de artista/intelectual.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Cavanhaque Âncora (Anchor)</h4>
                  <p className="text-sm text-gray-600 mb-4">Formato de âncora de navio. Linha segue maxilar + queixo pontudo. Visual imponente.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Raspar bochechas. Desenhar linha seguindo maxilar. Criar ponta no queixo. Manter largura de 2-3cm na linha. Bigode conectado ou desconectado.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Rostos quadrados e triangulares. Alonga o rosto.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Balbo (Tony Stark)</h4>
                  <p className="text-sm text-gray-600 mb-4">Bigode desconectado + âncora larga no queixo. O mais moderno e icônico.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Raspar bochechas e GAP. Criar âncora larga (3-4cm base). Bigode fino e bem definido. Linhas retas e simétricas. Comprimento curto (3-5mm).</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Queixo estreito. Visual de genialidade e sofisticação.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Cavanhaque Estendido (Hollywoodian)</h4>
                  <p className="text-sm text-gray-600 mb-4">Bigode + linha do maxilar + queixo. Sem bochechas. Meio termo elegante.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Raspar bochechas e costeletas. Conectar bigode ao queixo pela linha do maxilar (2-3cm largura). Comprimento uniforme (máquina 3-5mm).</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Rostos ovais e quadrados. Visual clean e definido.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">6</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Cavanhaque Puro (Pure Goatee)</h4>
                  <p className="text-sm text-gray-600 mb-4">APENAS queixo. Sem bigode. Visual minimalista e único.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Raspar TUDO exceto queixo. Deixar tufo no queixo (2-5cm). Formato pode ser redondo, quadrado ou pontudo. Manter sempre bem definido.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Rostos ovais. Visual ousado e diferente.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">7</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Verdi</h4>
                  <p className="text-sm text-gray-600 mb-4">Barba redonda curta + bigode estilizado separado. Inspirado em Giuseppe Verdi.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 2-3 meses. Aparar em formato arredondado (5-8cm). Criar GAP entre bigode e barba. Modelar bigode com pontas curvadas.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Rostos triangulares e ovais. Visual clássico e sofisticado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Anatomia do Desenho Perfeito</h2>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Proporção Áurea do Cavanhaque</h3>
            <p className="mb-6 text-gray-600">Um cavanhaque de mestre deve seguir a linha natural da boca e respeitar proporções faciais. Aqui está a fórmula:</p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">✓</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Largura</h4>
                  <p className="text-sm text-gray-600">Deve acompanhar os cantos da boca. Não ultrapassar muito além disso (máximo 1cm de cada lado).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">✓</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Altura do Queixo</h4>
                  <p className="text-sm text-gray-600">Proporcional à altura da testa. Se testa é grande, queixo pode ser mais longo (5-8cm). Se testa é pequena, manter curto (2-4cm).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">✓</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Simetria</h4>
                  <p className="text-sm text-gray-600">ESSENCIAL. Ambos os lados devem ser espelhos perfeitos. Use espelho com boa iluminação e tire fotos para verificar.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">✓</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-1">Linhas</h4>
                  <p className="text-sm text-gray-600">Devem ser retas e limpas. Use <a href={AFF_TESOURA} className="text-brand-gold underline font-bold">tesoura de precisão</a> ou navalha para criar contornos nítidos.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Tutorial: Como Fazer Cavanhaque Cheio (Passo a Passo)</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold">Guia Completo para Iniciantes</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Deixar Crescer (2-3 semanas)</h4>
                  <p className="text-sm text-gray-300">Deixe crescer bigode e queixo por 2-3 semanas. NÃO tente fazer cavanhaque com menos de 2 semanas. Você precisa de material suficiente.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Raspar Bochechas e Pescoço</h4>
                  <p className="text-sm text-gray-300">Com máquina 0 ou navalha, raspar COMPLETAMENTE bochechas e pescoço. Deixar apenas bigode e queixo. Criar linha limpa na altura da orelha.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Conectar Bigode ao Queixo</h4>
                  <p className="text-sm text-gray-300">Manter pelos nas laterais da boca para conectar bigode ao queixo. Isso forma o "círculo" ao redor da boca. Largura: acompanhar cantos da boca.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Aparar Comprimento</h4>
                  <p className="text-sm text-gray-300">Usar máquina 3-5mm ou tesoura para aparar TODO o cavanhaque uniformemente. Manter comprimento consistente. Aparar bigode para não cobrir lábio.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div>
                  <h4 className="font-bold mb-2">Criar Linhas Precisas</h4>
                  <p className="text-sm text-gray-300">Com <a href={AFF_TESOURA} className="text-brand-gold underline font-bold">tesoura Stark</a> ou navalha, criar linhas retas e simétricas. Trabalhar devagar. Menos é mais.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">6</span>
                <div>
                  <h4 className="font-bold mb-2">Finalização</h4>
                  <p className="text-sm text-gray-300">Aplicar óleo de barba para hidratação e brilho. Pentear para baixo. Verificar simetria com fotos.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Solução para Falhas no Conector</h2>

          <p className="mb-6">O problema mais comum: <strong>falhas na área que conecta bigode ao queixo</strong>. Isso impede o cavanhaque cheio. Solução:</p>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Protocolo de Preenchimento</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">1.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Minoxidil 5%</h4>
                  <p className="text-sm text-gray-600">Aplicar 1ml 2x/dia nas áreas com falhas. Foco nos conectores. Resultados em 3-6 meses.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">2.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Fator Viking</h4>
                  <p className="text-sm text-gray-600"><a href={AFF_VIKING} className="text-brand-gold underline font-bold">Fator Viking</a> é formulado especificamente para preencher falhas. Combinar com Minoxidil para resultados máximos.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">3.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Microagulhamento</h4>
                  <p className="text-sm text-gray-600">1x por semana com agulhas 0.5mm nas áreas com falhas. Aumenta absorção em até 4x.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">4.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Paciência</h4>
                  <p className="text-sm text-gray-600">Enquanto cresce, opte por Van Dyke (desconectado) ou Balbo. Não force cavanhaque cheio sem densidade.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Manutenção Semanal do Cavanhaque</h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-4">📅 Rotina Diária</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Lavar com água morna</li>
                <li>• Aplicar óleo de barba</li>
                <li>• Pentear para baixo</li>
                <li>• Modelar com balm (se necessário)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-4">📅 Rotina Semanal</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Raspar bochechas 2x/semana</li>
                <li>• Aparar comprimento 1x/semana</li>
                <li>• Ajustar linhas 1x/semana</li>
                <li>• Lavar com shampoo específico 2-3x/semana</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Qual o melhor tipo de cavanhaque para iniciantes?</h4>
              <p className="text-sm text-gray-600">Cavanhaque Cheio (Full Goatee). É o mais fácil de fazer e manter. Esconde falhas e funciona em todos os formatos de rosto.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quanto tempo leva para crescer um cavanhaque?</h4>
              <p className="text-sm text-gray-600">Mínimo 2-3 semanas para ter material suficiente. 4-6 semanas para densidade completa. Não tente fazer antes disso.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Meu conector é falhado. O que fazer?</h4>
              <p className="text-sm text-gray-600">Use Minoxidil + <a href={AFF_VIKING} className="text-brand-gold underline font-bold">Fator Viking</a> por 3-6 meses. Enquanto isso, opte por Van Dyke ou Balbo (desconectados).</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Como manter simetria perfeita?</h4>
              <p className="text-sm text-gray-600">Espelho com boa iluminação. Tire fotos antes e depois. Trabalhe devagar. Apare aos poucos. É melhor tirar menos e ajustar depois.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Cavanhaque funciona em ambiente profissional?</h4>
              <p className="text-sm text-gray-600">SIM, desde que bem cuidado. Opte por estilos mais discretos (Cheio, Estendido) e mantenha sempre limpo e simétrico. Evite estilos muito ousados em ambientes conservadores.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: A Arte Imortal do Cavanhaque</h2>

          <p className="mb-6">O cavanhaque atravessou séculos porque é o equilíbrio perfeito entre ousadia e elegância, tradição e modernidade. De Van Dyck a Tony Stark, esse estilo provou que nunca sai de moda. Com as técnicas certas e os produtos adequados, qualquer homem pode dominar essa arte milenar.</p>

          <p className="mb-8 font-medium">Comece sua jornada com as ferramentas certas: <a href={AFF_VIKING} className="text-brand-gold underline font-bold" target="_blank">Fator Viking Kit 6 Meses</a> para garantir conexão perfeita e <a href={AFF_TESOURA} className="text-brand-gold underline font-bold" target="_blank">Tesoura Stark</a> para design milimétrico.</p>

          <div className="bg-brand-dark text-white p-10 rounded-3xl my-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Pronto para Dominar a Arte do Cavanhaque?</h3>
            <p className="mb-6 text-gray-300">Transforme-se com o estilo mais imortal da barbearia mundial.</p>
            <a href={AFF_VIKING} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Kit Completo</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Um cavanhaque mestre se destaca pela limpeza dos ângulos internos (abaixo do lábio inferior). Se você deixar essa área muito 'suja' de pelos curtos, o desenho perde o contraste. Use uma lâmina nova e shaving gel transparente para esculpir essas curvas com precisão de cirurgião."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'v-vik', name: "Fator Viking Kit 6 Meses", desc: "Garanta a conexão perfeita do seu cavanhaque.", link: AFF_VIKING, icon: <Trophy size={32} /> },
        { id: 't-tes', name: "Tesoura Stark", desc: "Design milimétrico para contornos limpos.", link: AFF_TESOURA, icon: <Scissors size={32} /> }
      ]
    },
    'guia-definitivo-bigode': {
      title: "O Guia Definitivo do Bigode: Dos Clássicos aos Modernos",
      subtitle: "Do clássico Chevron ao excêntrico Handlebar, descubra como manter um bigode que impõe respeito.",
      author: "Carlos Barbudo",
      date: "04 de Março de 2025",
      readTime: "16 min",
      category: "Estilo",
      image: "/assets/guia-bigode.webp",
      howToSteps: [
        { name: "Crescimento Livre", text: "Deixe o bigode crescer por 4 semanas sem aparar a base." },
        { name: "Limpeza do Lábio", text: "Apare os fios que ultrapassam a linha do lábio superior com uma tesoura." },
        { name: "Modelagem de Pontas", text: "Aplique cera de bigode nas pontas e torça levemente para cima." },
        { name: "Manutenção Diária", text: "Penteie o bigode para os lados para treinar o crescimento." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O bigode voltou a ser o acessório de maior personalidade do homem contemporâneo. De Freddie Mercury a Tom Selleck, de Salvador Dalí a Willian Bigode, esse estilo provou que um simples detalhe acima do lábio pode definir toda uma identidade. Este é o guia definitivo para dominar a arte do bigode - dos clássicos aos modernos.
          </p>

          <ToolBox 
            tools={[
              { name: "Pente de Bigode (Dentes Finos)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Cera de Bigode de Alta Fixação", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Tesoura de Precisão Stark", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Travessia do Deserto (Semanas 1-4)",
                description: "Não corte nada. O erro comum é tentar modelar o bigode antes dele ter 'corpo'. Ele vai parecer ralo e desordenado, mas resista.",
                tip: "Use um pouco de condicionador no banho para deixar os fios menos espetados."
              },
              {
                title: "O Alinhamento do Horizonte",
                description: "Puxe o lábio superior para baixo e, com a tesoura Stark, corte apenas os fios que estão entrando na boca. Siga a curva natural do lábio.",
                tip: "Sempre corte com o bigode seco. Molhado ele estica e você pode cortar demais."
              },
              {
                title: "Criando o Fluxo (Pentear)",
                description: "Use o pente fino para pentear os fios do centro para as laterais (em direção às orelhas). Isso cria o volume lateral necessário para estilos como o Handlebar.",
                tip: "Faça isso 3 vezes ao dia. O pelo da face 'aprende' a direção do crescimento."
              },
              {
                title: "A Escultura com Cera",
                description: "Aqueça uma pequena quantidade de cera entre o polegar e o indicador. Aplique nas pontas e torça levemente para criar a curva desejada.",
                tip: "Use cera apenas nas pontas se quiser um visual natural, ou em todo o corpo para um visual clássico."
              },
              {
                title: "A Limpeza de Contraste",
                description: "Para o bigode brilhar, o resto do rosto deve estar limpo. Raspe a área entre o nariz e o topo do bigode para dar uma linha superior nítida.",
                tip: "Use o navalhete para tirar os pelos solitários que crescem muito perto das narinas."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Os 8 Estilos Clássicos de Bigode</h2>

          <div className="space-y-8 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Chevron (Freddie Mercury)</h4>
                  <p className="text-sm text-gray-600 mb-4">Grosso, largo, cobre todo lábio superior. O mais masculino e icônico.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 4-6 semanas. Aparar apenas fios que entram na boca. Manter largura natural (não afinar). Raspar queixo completamente.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Manutenção:</strong> Aparar semanalmente. Cera leve para domar fios.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Handlebar (Guidão)</h4>
                  <p className="text-sm text-gray-600 mb-4">Pontas longas curvadas para cima. Visual vitoriano e excêntrico.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 3-6 meses. Deixar pontas longas (5-10cm). Aplicar <a href={AFF_OIL} className="text-brand-gold underline font-bold">óleo de sândalo</a> e pentear para os lados diariamente. Curvar pontas para cima com cera forte.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Manutenção:</strong> Modelar pontas diariamente. Requer disciplina e paciência.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Pencil (Lápis)</h4>
                  <p className="text-sm text-gray-600 mb-4">Linha fina (1-2mm) acima do lábio. Visual vintage anos 40-50.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 2-3 semanas. Com navalha ou aparador de precisão, criar linha fina (1-2mm). Seguir contorno natural do lábio. Raspar queixo.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Manutenção:</strong> Raspar diariamente para manter linha fina. Exige precisão.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Horseshoe (Ferradura)</h4>
                  <p className="text-sm text-gray-600 mb-4">Bigode grosso + extensões verticais nos cantos. Visual biker/rebelde.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 6-8 semanas. Raspar queixo. Manter bigode + extensões verticais (5-10cm) nos cantos da boca até maxilar.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Manutenção:</strong> Raspar queixo 2x/semana. Aparar bigode semanalmente.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Walrus (Morsa)</h4>
                  <p className="text-sm text-gray-600 mb-4">Bigode MUITO grosso que cobre completamente o lábio superior. Volumoso.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 6-12 meses SEM aparar. Deixar cobrir lábio completamente. Pentear para baixo. Raspar queixo.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Manutenção:</strong> Lavar 2-3x/semana. Pentear diariamente. Não aparar.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">6</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Dalí (Salvador Dalí)</h4>
                  <p className="text-sm text-gray-600 mb-4">Fino com pontas MUITO longas apontando para cima. Excêntrico e artístico.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 6-12 meses. Manter fino (3-5mm largura). Deixar pontas crescerem (10-20cm). Modelar para cima com cera MUITO forte.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Manutenção:</strong> Modelar pontas diariamente. Cera extra forte essencial.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">7</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">English (Inglês)</h4>
                  <p className="text-sm text-gray-600 mb-4">Bigode fino com pontas levemente curvadas. Elegante e discreto.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 2-3 meses. Manter fino (5-7mm). Deixar pontas um pouco mais longas. Curvar levemente para cima com cera.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Manutenção:</strong> Aparar semanalmente. Modelar pontas diariamente.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">8</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Lampshade (Abajur)</h4>
                  <p className="text-sm text-gray-600 mb-4">Bigode que se alarga nas pontas. Visual único e moderno.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 3-4 meses. Aparar centro mais curto. Deixar pontas mais longas e largas. Pentear para os lados.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Manutenção:</strong> Aparar centro quinzenalmente. Manter pontas longas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Manutenção Diária do Bigode</h2>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Regra de Ouro</h3>
            <p className="mb-6 text-gray-600 font-medium">Bigode não se apara com máquina, se apara com <a href={AFF_TESOURA} className="text-brand-gold underline font-bold" target="_blank">tesoura</a>. Máquina cria linhas retas e artificiais. Tesoura permite controle milimétrico.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-brand-dark mb-3">📅 Rotina Diária:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Lavar com água morna</li>
                  <li>• Secar com toalha</li>
                  <li>• Aplicar óleo de barba</li>
                  <li>• Pentear para os lados</li>
                  <li>• Aplicar cera/balm (se necessário)</li>
                  <li>• Modelar formato desejado</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-3">📅 Rotina Semanal:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Aparar fios que entram na boca</li>
                  <li>• Ajustar comprimento (se necessário)</li>
                  <li>• Lavar com shampoo específico 2x</li>
                  <li>• Verificar simetria</li>
                  <li>• Raspar queixo/bochechas (se aplicável)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Tutorial: Como Fazer Bigode Chevron</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold">O Estilo Mais Popular</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Deixar Crescer (4-6 semanas)</h4>
                  <p className="text-sm text-gray-300">Deixe bigode crescer completamente por 4-6 semanas. Não aparar nada. Raspar queixo e bochechas completamente.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Aparar Apenas o Lábio</h4>
                  <p className="text-sm text-gray-300">Com <a href={AFF_TESOURA} className="text-brand-gold underline font-bold">tesoura de precisão</a>, aparar APENAS os fios que entram na boca. Cortar na altura do lábio.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Manter Largura Natural</h4>
                  <p className="text-sm text-gray-300">NÃO afinar as pontas. Chevron deve ter largura uniforme de uma extremidade à outra. Deixar crescer até cantos da boca.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Finalização</h4>
                  <p className="text-sm text-gray-300">Aplicar <a href={AFF_OIL} className="text-brand-gold underline font-bold">óleo de sândalo</a> para brilho. Pentear para os lados. Usar cera leve se necessário.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Como Aumentar Densidade do Bigode</h2>

          <p className="mb-6">Se seu bigode é ralo ou tem falhas, você pode aumentar densidade antes de modelar:</p>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Protocolo de Crescimento</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">1.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Minoxidil 5%</h4>
                  <p className="text-sm text-gray-600">Aplicar 1ml 2x/dia no bigode. Resultados em 3-6 meses. <a href={AFF_MINOXIDIL} className="text-brand-gold underline font-bold">Ver produto</a></p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">2.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Microagulhamento</h4>
                  <p className="text-sm text-gray-600">1x por semana com agulhas 0.5mm. Aumenta absorção do Minoxidil.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0">3.</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Paciência</h4>
                  <p className="text-sm text-gray-600">Resultados levam 3-6 meses. Não desista antes disso.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Ícones do Bigode</h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">🎤 Freddie Mercury</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Chevron grosso. Marca registrada que virou símbolo.</p>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">🎨 Salvador Dalí</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Fino com pontas longas para cima. Excêntrico e único.</p>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">📺 Tom Selleck</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Chevron perfeito. Definiu o bigode dos anos 80.</p>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-3">⚽ Willian Bigode</h4>
              <p className="text-sm text-gray-600"><strong>Estilo:</strong> Chevron moderno. Transformou apelido em marca pessoal.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quanto tempo leva para crescer um bigode?</h4>
              <p className="text-sm text-gray-600">Mínimo 4-6 semanas para Chevron. 3-6 meses para Handlebar. 6-12 meses para Walrus ou Dalí.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Como evitar que bigode entre na boca?</h4>
              <p className="text-sm text-gray-600">Aparar semanalmente com tesoura. Usar cera leve para fixar fios para os lados. Pentear diariamente.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Posso usar máquina para aparar bigode?</h4>
              <p className="text-sm text-gray-600">NÃO recomendado. Máquina cria linhas artificiais. Use <a href={AFF_TESOURA} className="text-brand-gold underline font-bold">tesoura de precisão</a> para controle milimétrico.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Meu bigode é ralo. O que fazer?</h4>
              <p className="text-sm text-gray-600">Use <a href={AFF_MINOXIDIL} className="text-brand-gold underline font-bold">Minoxidil 5%</a> por 3-6 meses. Combine com microagulhamento para melhores resultados.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Bigode funciona em ambiente profissional?</h4>
              <p className="text-sm text-gray-600">SIM, desde que bem cuidado. Chevron e English são aceitos na maioria dos ambientes. Evite estilos muito excêntricos (Dalí, Walrus) em empresas conservadoras.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: O Poder do Bigode</h2>

          <p className="mb-6">O bigode é mais do que pelos faciais - é uma declaração de personalidade. De Freddie Mercury a Willian Bigode, os homens mais icônicos provaram que um bigode bem cuidado pode se tornar sua marca registrada. Com as técnicas certas e os produtos adequados, qualquer homem pode dominar esse estilo atemporal.</p>

          <p className="mb-8 font-medium">Comece sua jornada com as ferramentas certas: <a href={AFF_TESOURA} className="text-brand-gold underline font-bold" target="_blank">Tesoura Stark de Precisão</a> para controle absoluto e <a href={AFF_OIL} className="text-brand-gold underline font-bold" target="_blank">Óleo Premium de Sândalo</a> para maciez e fragrância exclusiva.</p>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 p-4"><Crown size={120} /></div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">Pronto para Seu Bigode de Respeito?</h3>
            <p className="mb-6 text-gray-300">Transforme-se com o estilo que impõe personalidade.</p>
            <a href={AFF_TESOURA} target="_blank" className="inline-block bg-brand-gold text-brand-dark px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-2xl">Ver Kit Completo</a>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Bigode Chevron não é bagunça. O segredo para ele não parecer 'tiozão' é manter a densidade uniforme. Se você tem partes mais claras, use um pouco de sombra de sobrancelha (discretamente) para igualar o tom antes de sair. O impacto visual de um bigode denso é 10x superior."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 't-tes', name: "Tesoura Stark de Precisão", desc: "Controle absoluto sobre cada fio.", link: AFF_TESOURA, icon: <Scissors size={32} /> },
        { id: 'o-sand', name: "Óleo Premium Sândalo", desc: "Maciez e fragrância amadeirada exclusiva.", link: AFF_OIL, icon: <Droplets size={32} /> }
      ]
    },
    'barba-carreira-impacto': {
      title: "Barba e Carreira: O Impacto do Visual no Ambiente de Trabalho",
      subtitle: "Estudos de psicologia social mostram como uma barba bem cuidada projeta liderança e competência.",
      author: "Carlos Barbudo",
      date: "03 de Março de 2026",
      readTime: "11 min",
      category: "Cultura",
      image: "/assets/barba-carreira.webp",
      howToSteps: [
        { name: "Escolha do Estilo", text: "Opte por estilos mais curtos e controlados como a Barba Italiana ou Short Boxed." },
        { name: "Contorno de Bochechas", text: "Mantenha a linha da bochecha sempre limpa e levemente alta para projetar autoridade." },
        { name: "Hidratação de Fios", text: "Use óleo de barba para dar um brilho saudável e evitar fios arrepiados (frizz)." },
        { name: "Manutenção de Simetria", text: "Apare os fios rebeldes diariamente com uma tesoura de precisão." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Homens com barba bem desenhada são vistos como mais maduros, confiáveis e competentes em cargos de gestão. Estudos de psicologia social comprovam: sua barba pode ser o diferencial entre uma promoção e a estagnação profissional. Este é o guia definitivo sobre como usar a barba a seu favor no ambiente corporativo.
          </p>

          <ToolBox 
            tools={[
              { name: "Shampoo de Barba Premium", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Óleo de Sândalo e Cedro", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Tesoura Stark para Detalhes", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Definição do 'Executivo'",
                description: "No trabalho, a barba não deve ser o centro das atenções. Escolha o pente 3 (10mm) para criar uma cobertura uniforme que passe a imagem de seriedade.",
                tip: "Evite estilos muito ousados como a 'âncora' se você trabalha em ambientes conservadores."
              },
              {
                title: "O Alinhamento Diário",
                description: "Use o navalhete a cada dois dias para manter a linha do pescoço e das bochechas impecável. No escritório, 1mm de pelo fora do lugar já parece desleixo.",
                tip: "Marque a linha da bochecha um pouco mais alta para dar um aspecto mais sério e 'quadrado' ao rosto."
              },
              {
                title: "O Aroma da Liderança",
                description: "Use óleos de fragrância amadeirada (Sândalo ou Tabaco). Eles são sutis, mas projetam uma imagem de maturidade e sofisticação durante reuniões presenciais.",
                tip: "Aplique apenas 2 gotas. O objetivo é saúde capilar, não deixar a barba oleosa ou com cheiro forte."
              },
              {
                title: "Domando o Frizz",
                description: "Antes de uma reunião importante, use um Balm modelador e uma escova de cerdas naturais para abaixar qualquer fio arrepiado.",
                tip: "A escovação treina o fio a ficar no lugar, facilitando a manutenção a longo prazo."
              },
              {
                title: "A Regra da Camisa Social",
                description: "Sua barba nunca deve encostar na gola da sua camisa social. Se isso acontecer, ela está longa demais para o padrão corporativo clássico.",
                tip: "Mantenha o pescoço sempre liso para que o contraste com a gola branca da camisa projete limpeza extrema."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Que a Ciência Diz Sobre Barba e Carreira</h2>

          <p className="mb-6">Diversos estudos científicos analisaram a percepção de barbas no ambiente profissional. Os resultados são surpreendentes:</p>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Estudos Científicos</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0 text-2xl">📊</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">University of Queensland (2016)</h4>
                  <p className="text-sm text-gray-600">Homens com barba aparada são percebidos como <strong>38% mais competentes</strong> e <strong>42% mais maduros</strong> do que homens sem barba em cargos de liderança.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0 text-2xl">📊</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Journal of Business Psychology (2018)</h4>
                  <p className="text-sm text-gray-600">Executivos com barba bem cuidada recebem <strong>salários 15% maiores</strong> em média, comparados a colegas sem barba na mesma posição.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-brand-gold font-bold shrink-0 text-2xl">📊</span>
                <div>
                  <h4 className="font-bold text-brand-dark mb-2">Harvard Business Review (2020)</h4>
                  <p className="text-sm text-gray-600">Barbas transmitem <strong>autoridade</strong> e <strong>confiabilidade</strong>, mas APENAS quando bem cuidadas. Barbas desleixadas têm efeito oposto.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Os 5 Estilos de Barba Corporativa</h2>

          <div className="space-y-8 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Barba Corporativa Curta (3-5mm)</h4>
                  <p className="text-sm text-gray-600 mb-4">O mais seguro e aceito. Profissional sem ser conservador demais.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Usar máquina 3-5mm em TODO o rosto uniformemente. Limpar linha do pescoço 2 dedos acima do pomo de adão. Aparar a cada 3-4 dias.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Bancos, consultorias, escritórios de advocacia, empresas conservadoras.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Barba Executiva Média (1-3cm)</h4>
                  <p className="text-sm text-gray-600 mb-4">Projeta maturidade e liderança. Aceito na maioria dos ambientes.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 4-8 semanas. Aparar com máquina 6-10mm ou tesoura. Manter linhas limpas. Hidratar diariamente com óleo.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Startups, tech, marketing, cargos de gestão.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Cavanhaque Executivo</h4>
                  <p className="text-sm text-gray-600 mb-4">Sofisticado e clean. Visual de estrategista.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Raspar bochechas completamente. Manter apenas bigode + queixo conectados. Linhas precisas e simétricas. Comprimento curto (3-5mm).</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Consultoria, arquitetura, design, cargos de direção.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Stubble Profissional (2-3mm)</h4>
                  <p className="text-sm text-gray-600 mb-4">Barba de 3 dias bem cuidada. Masculino mas discreto.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Aparar TODO o rosto com máquina 2-3mm a cada 2-3 dias. Limpar linha do pescoço semanalmente. Nunca deixar passar de 5 dias.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Ambientes criativos, vendas, atendimento ao cliente.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Barba Quadrada (Short Boxed)</h4>
                  <p className="text-sm text-gray-600 mb-4">Formato quadrado bem definido. Visual de autoridade.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Deixar crescer 4-6 semanas. Aparar em formato quadrado (2-5cm). Criar linhas RETAS nas bochechas e pescoço. Manter sempre simétrico.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Ideal para:</strong> Cargos de liderança, C-level, empreendedores.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Código Executivo: Regras de Ouro</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-8 text-brand-gold flex items-center gap-3"><Briefcase /> Sucesso Visual</h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-2">Linha do Pescoço SEMPRE Limpa</h4>
                  <p className="text-sm text-gray-300">A regra #1 no escritório. Raspar pescoço 2x/semana no mínimo. Linha deve estar 2 dedos acima do pomo de adão.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-2">Simetria Perfeita</h4>
                  <p className="text-sm text-gray-300">Ambos os lados devem ser espelhos. Assimetria transmite desleixo. Verificar com fotos semanalmente.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div>
                  <h4 className="font-bold mb-2">Brilho Discreto</h4>
                  <p className="text-sm text-gray-300">Usar <a href={AFF_OIL} className="text-brand-gold underline font-bold">óleo de sândalo</a> diariamente. Brilho demonstra atenção aos detalhes. Evitar aspecto oleoso.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div>
                  <h4 className="font-bold mb-2">Comprimento Apropriado</h4>
                  <p className="text-sm text-gray-300">Ambientes conservadores: máximo 1cm. Ambientes criativos: até 3cm. Nunca ultrapassar 5cm em ambiente corporativo.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div>
                  <h4 className="font-bold mb-2">Zero Fios Brancos Desalinhados</h4>
                  <p className="text-sm text-gray-300">Aparar fios brancos que ficam mais longos. Eles transmitem idade e desleixo. Manter tudo uniforme.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Rotina Semanal do Executivo</h2>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-4">📅 Segunda a Sexta</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Manhã:</strong> Lavar, aplicar óleo, pentear</li>
                <li>• <strong>Meio-dia:</strong> Verificar simetria no espelho</li>
                <li>• <strong>Noite:</strong> Lavar novamente, hidratar pele</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl">
              <h4 className="font-bold text-brand-dark mb-4">📅 Fim de Semana</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Sábado:</strong> Aparar comprimento, ajustar linhas</li>
                <li>• <strong>Domingo:</strong> Raspar pescoço, preparar para semana</li>
                <li>• <strong>Opcional:</strong> Máscara facial noturna</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Erros Fatais que Destroem Sua Imagem</h2>

          <div className="space-y-4 my-10">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Pescoço Sujo</h4>
              <p className="text-sm text-gray-600">O erro #1. Transmite desleixo instantaneamente. Raspar 2x/semana no mínimo.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Barba Muito Longa</h4>
              <p className="text-sm text-gray-600">Acima de 5cm em ambiente corporativo transmite rebeldia. Manter entre 1-3cm.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Fios Secos e Opacos</h4>
              <p className="text-sm text-gray-600">Barba sem brilho parece suja. Usar óleo diariamente é obrigatório.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Assimetria</h4>
              <p className="text-sm text-gray-600">Lados diferentes transmitem falta de atenção aos detalhes. Fatal para cargos de gestão.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Barba prejudica em entrevistas de emprego?</h4>
              <p className="text-sm text-gray-600">NÃO, desde que bem cuidada. Estudos mostram que barba aparada transmite maturidade e competência. Evite apenas barbas muito longas (5cm+) em empresas conservadoras.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Qual o comprimento ideal para ambiente corporativo?</h4>
              <p className="text-sm text-gray-600">Conservador: 3-5mm. Moderado: 1-2cm. Criativo: até 3cm. Nunca ultrapassar 5cm em ambiente profissional.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Devo raspar para reuniões importantes?</h4>
              <p className="text-sm text-gray-600">NÃO. Se você já tem barba, raspar transmite insegurança. Mantenha sua barba, mas IMPECÁVEL: aparada, simétrica, pescoço limpo, com brilho.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Como lidar com fios brancos na barba?</h4>
              <p className="text-sm text-gray-600">Fios brancos transmitem maturidade (positivo). Mas aparar os que ficam mais longos. Manter tudo uniforme. Evitar tingir (fica artificial).</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Qual produto usar no ambiente de trabalho?</h4>
              <p className="text-sm text-gray-600"><a href={AFF_OIL} className="text-brand-gold underline font-bold">Óleo de Sândalo</a> - fragrância sofisticada e discreta. Evitar produtos com cheiro muito forte ou doce.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: Barba Como Ferramenta de Sucesso</h2>

          <p className="mb-6">Sua barba não é apenas estética - é uma ferramenta profissional. Estudos comprovam que barbas bem cuidadas aumentam percepção de competência, maturidade e liderança. O segredo está na manutenção impecável: pescoço limpo, simetria perfeita e brilho discreto.</p>

          <p className="mb-8 font-medium">Invista em sua imagem profissional: <a href={AFF_OIL} className="text-brand-gold underline font-bold" target="_blank">Óleo Premium de Sândalo</a> para fragrância sofisticada e <a href={AFF_KIT_FACIAL} className="text-brand-gold underline font-bold" target="_blank">Kit Antissinais Masculino</a> para rosto descansado e pele revigorada.</p>

          <div className="bg-brand-light p-8 rounded-2xl border border-brand-gold/20 my-10 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-white rounded-full text-brand-gold shrink-0 shadow-sm"><Briefcase size={32} /></div>
            <div>
              <h4 className="font-bold text-brand-dark uppercase text-xs mb-2">Lembre-se</h4>
              <p className="text-gray-600 text-sm">A barba corporativa deve ser mantida curta ou média e sempre aparada. O desleixo é o inimigo da promoção. Invista 10 minutos por dia em sua barba e colha resultados por anos.</p>
            </div>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Em reuniões de alto nível, a barba funciona como um uniforme. Se você usa terno, sua barba deve estar tão 'passada' quanto sua camisa. O segredo é usar uma escova de cerdas de javali para alinhar cada fio na mesma direção. Isso cria um reflexo de luz uniforme que projeta organização mental e controle."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'o-sand', name: "Óleo Premium Sândalo", desc: "Fragrância sofisticada para o ambiente corporativo.", link: AFF_OIL, icon: <Droplets size={32} /> },
        { id: 'k-facial', name: "Kit Antissinais Masculino", desc: "Rosto descansado e pele revigorada.", link: AFF_KIT_FACIAL, icon: <Sparkles size={32} /> }
      ]
    },
    'bigode-chines-homens-guia': {
      title: "Bigode Chinês em Homens: O Guia para Eliminar o Ar de Cansaço",
      subtitle: "Entenda por que o sulco nasogeniano surge no rosto masculino e descubra técnicas para suavizar as marcas.",
      author: "Carlos Barbudo",
      date: "02 de Março de 2025",
      readTime: "14 min",
      category: "Ciência",
      image: "/assets/bigode-chines.webp",
      howToSteps: [
        { name: "Limpeza Profunda", text: "Lave o rosto com água gelada para estimular a circulação." },
        { name: "Massagem de Elevação", text: "Pressione os dedos nos cantos da boca e deslize em direção às têmporas." },
        { name: "Aplicação de Sérum", text: "Use um sérum de Ácido Hialurônico diretamente sobre o sulco." },
        { name: "Delineado de Barba", text: "Deixe a barba crescer nas laterais do bigode para preencher o volume perdido." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O "bigode chinês" - tecnicamente chamado de sulco nasogeniano - são aquelas linhas que vão do nariz até os cantos da boca. Elas projetam fadiga, envelhecimento e cansaço, mesmo quando você está descansado. A boa notícia: é possível suavizar essas marcas com tratamentos naturais em casa. Saiba como reverter esse visual com ciência e disciplina.
          </p>

          <ToolBox 
            tools={[
              { name: "Sérum de Ácido Hialurônico 2%", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Massageador Facial de Quartzo", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Protetor Solar Toque Seco", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Massagem de Reposicionamento",
                description: "Coloque o dedo indicador e médio nos cantos da boca. Com pressão média, deslize os dedos para cima, em direção ao topo da orelha, repetindo 20 vezes de cada lado.",
                tip: "Use um óleo facial leve para os dedos deslizarem sem 'puxar' a pele, o que poderia piorar as rugas."
              },
              {
                title: "O Preenchimento Tópico",
                description: "Aplique o ácido hialurônico especificamente dentro da linha do bigode chinês. O ácido atrai água para a região, esticando a pele de dentro para fora.",
                tip: "Aplique o sérum com a pele levemente úmida para potencializar a absorção de água."
              },
              {
                title: "A Camuflagem Estratégica (Barba)",
                description: "Se você tem o bigode chinês profundo, não use bigode fino! Deixe a barba crescer na lateral da boca (o conector) com um pouco mais de volume. Isso preenche o 'degrau' que a ruga cria.",
                tip: "Um cavanhaque estilo 'Van Dyke' ou 'Balbo' tira a atenção das linhas laterais do nariz."
              },
              {
                title: "O Bloqueio da Gravidade (Solar)",
                description: "O sol destrói o colágeno que segura a sua bochecha no lugar. Use protetor solar fator 30 ou 50 todos os dias, mesmo se for ficar dentro de casa ou no escritório.",
                tip: "Escolha protetores com 'toque seco' para não deixar sua barba oleosa ou brilhante demais."
              },
              {
                title: "Exercício Intra-Oral",
                description: "Encha as bochechas de ar e passe o ar de um lado para o outro por 1 minuto. Isso estica o músculo bucinador, ajudando a dar firmeza à região do sulco.",
                tip: "Faça este exercício durante o banho para se tornar um hábito diário sem gastar tempo extra."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Que É o Sulco Nasogeniano?</h2>

          <p className="mb-6">O sulco nasogeniano é uma <strong>linha natural de expressão</strong> que todos temos. Mas com o tempo, perda de colágeno e movimentos repetitivos, essas linhas se aprofundam, criando o aspecto de "bigode chinês".</p>

          <div className="bg-white border-2 border-brand-gold/30 p-8 rounded-2xl my-10">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Causas do Aprofundamento</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-brand-dark mb-3">🧬 Fatores Naturais:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Perda de colágeno (após 25 anos)</li>
                  <li>• Perda de elastina na pele</li>
                  <li>• Gordura facial diminui</li>
                  <li>• Gravidade puxa tecidos para baixo</li>
                  <li>• Genética (alguns têm mais profundo)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark mb-3">⚠️ Fatores Agravantes:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Exposição solar sem proteção</li>
                  <li>• Fumar (destrói colágeno)</li>
                  <li>• Desidratação crônica</li>
                  <li>• Perda rápida de peso</li>
                  <li>• Dormir de lado (pressiona rosto)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Tratamentos Naturais em Casa</h2>

          <div className="space-y-8 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">1</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Microagulhamento (Dermaroller)</h4>
                  <p className="text-sm text-gray-600 mb-4">O tratamento mais eficaz. Estimula produção de colágeno e elastina.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Usar <a href={AFF_DERMAROLLER} className="text-brand-gold underline font-bold" target="_blank">Dermaroller 0.5mm</a> 1x por semana no sulco. Fazer movimentos verticais, horizontais e diagonais (10x cada). Aplicar soro de ácido hialurônico depois.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Resultados:</strong> Visíveis em 4-8 semanas. Melhora de 30-50% em 3 meses.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">2</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Ginástica Facial</h4>
                  <p className="text-sm text-gray-600 mb-4">Exercícios para fortalecer músculos e preencher área.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Exercício 1:</strong> Encher bochechas de ar e segurar 10 segundos. Repetir 10x.</p>
                    <p className="text-sm text-gray-600 mt-2"><strong>Exercício 2:</strong> Sorrir forçado (sem mostrar dentes) por 10 segundos. Repetir 10x.</p>
                    <p className="text-sm text-gray-600 mt-2"><strong>Exercício 3:</strong> Fazer "O" com a boca e puxar bochechas para dentro. Segurar 10 segundos. Repetir 10x.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Frequência:</strong> 2x por dia (manhã e noite).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">3</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Massagem Facial</h4>
                  <p className="text-sm text-gray-600 mb-4">Estimula circulação e relaxa músculos tensos.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Aplicar <a href={AFF_OIL} className="text-brand-gold underline font-bold">óleo de sândalo</a>. Com dedos indicador e médio, fazer movimentos circulares no sulco (de baixo para cima). 5 minutos por dia.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Benefício:</strong> Relaxa músculos, melhora circulação, hidrata pele.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">4</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Hidratação Profunda</h4>
                  <p className="text-sm text-gray-600 mb-4">Pele hidratada parece mais cheia e suaviza linhas.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Produtos:</strong> Usar <a href={AFF_KIT_FACIAL} className="text-brand-gold underline font-bold">Kit Antissinais Noturno</a> com ácido hialurônico, retinol e vitamina C. Aplicar 2x/dia (manhã e noite).</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Importante:</strong> Beber 2-3L de água por dia. Hidratação interna é essencial.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-8 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0">5</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Proteção Solar</h4>
                  <p className="text-sm text-gray-600 mb-4">Previne aprofundamento e novos danos.</p>
                  <div className="bg-brand-light p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-600"><strong>Como fazer:</strong> Usar protetor solar FPS 50+ TODOS os dias, mesmo nublado. Reaplicar a cada 2-3 horas se exposto ao sol.</p>
                    <p className="text-xs text-gray-500 mt-2"><strong>Por quê:</strong> Sol destrói colágeno e aprofunda rugas. Proteção é prevenção.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Protocolo Completo de 30 Dias</h2>

          <div className="bg-brand-charcoal text-white p-10 rounded-3xl my-12 border-l-8 border-brand-gold shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 p-4"><UserCheck size={120} /></div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold flex items-center gap-3">Ritual de Rejuvenescimento</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-3 text-brand-gold">📅 Rotina Diária (Manhã):</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Lavar rosto com água morna</li>
                  <li>• Ginástica facial (10 minutos)</li>
                  <li>• Aplicar soro de ácido hialurônico</li>
                  <li>• Aplicar protetor solar FPS 50+</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-brand-gold">📅 Rotina Diária (Noite):</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Lavar rosto com sabonete facial</li>
                  <li>• Ginástica facial (10 minutos)</li>
                  <li>• Massagem com <a href={AFF_OIL} className="text-brand-gold underline font-bold">óleo de sândalo</a> (5 minutos)</li>
                  <li>• Aplicar <a href={AFF_KIT_FACIAL} className="text-brand-gold underline font-bold">Kit Antissinais</a> (retinol + vitamina C)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-brand-gold">📅 Rotina Semanal:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <strong>1x/semana:</strong> Microagulhamento com <a href={AFF_DERMAROLLER} className="text-brand-gold underline font-bold">Dermaroller 0.5mm</a></li>
                  <li>• <strong>2x/semana:</strong> Máscara facial hidratante</li>
                  <li>• <strong>Diariamente:</strong> Beber 2-3L de água</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-brand-gold/10 rounded-2xl border border-brand-gold/30">
              <p className="text-sm"><strong className="text-brand-gold">IMPORTANTE:</strong> O segredo está na constância. Em 30 dias, a profundidade do sulco já apresenta melhora visível. Em 90 dias, resultados significativos.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Que NÃO Fazer</h2>

          <div className="space-y-4 my-10">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Dormir de Lado</h4>
              <p className="text-sm text-gray-600">Pressiona o rosto e aprofunda sulcos. Tente dormir de costas.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Fumar</h4>
              <p className="text-sm text-gray-600">Destrói colágeno e elastina. Acelera envelhecimento em 10 anos.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Exposição Solar sem Proteção</h4>
              <p className="text-sm text-gray-600">Sol é o maior inimigo do colágeno. Sempre usar FPS 50+.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-700 mb-2">❌ Desidratação</h4>
              <p className="text-sm text-gray-600">Pele desidratada aprofunda rugas. Beber 2-3L de água/dia é obrigatório.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Perguntas Frequentes (FAQ)</h2>

          <div className="space-y-6 my-10">
            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ É possível eliminar completamente o sulco nasogeniano?</h4>
              <p className="text-sm text-gray-600">Eliminar 100% não. Mas é possível suavizar 30-50% com tratamentos naturais. Para resultados maiores, procedimentos estéticos (preenchimento, botox) são necessários.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Quanto tempo leva para ver resultados?</h4>
              <p className="text-sm text-gray-600">Primeiros sinais: 2-4 semanas. Resultados visíveis: 8-12 semanas. Máximo resultado: 6 meses de tratamento constante.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Dermaroller dói?</h4>
              <p className="text-sm text-gray-600">Com agulhas 0.5mm, desconforto leve. Não dói. Pode sentir leve ardência. Se doer muito, está fazendo muita pressão.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Posso usar dermaroller todos os dias?</h4>
              <p className="text-sm text-gray-600">NÃO. Máximo 1x por semana. A pele precisa de 7 dias para se regenerar completamente. Uso excessivo causa danos.</p>
            </div>

            <div className="bg-white border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-brand-dark mb-3">❓ Ginástica facial realmente funciona?</h4>
              <p className="text-sm text-gray-600">SIM. Estudos mostram que exercícios faciais diários por 20 semanas rejuvenescem aparência em 3 anos. Fortalece músculos e preenche área.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Conclusão: Paciência e Constância</h2>

          <p className="mb-6">O sulco nasogeniano ("bigode chinês") é uma marca natural do envelhecimento, mas não precisa ser profunda ou aparente. Com tratamentos naturais - microagulhamento, ginástica facial, hidratação e proteção solar - é possível suavizar significativamente essas linhas e recuperar um visual mais jovem e descansado.</p>

          <p className="mb-8 font-medium italic">O segredo está na constância. Não espere milagres em 1 semana. Mas em 30 dias de disciplina, você verá diferença. Em 90 dias, resultados impressionantes. Comece hoje: <a href={AFF_DERMAROLLER} className="text-brand-gold underline font-bold" target="_blank">Dermaroller 0.5mm Titanium</a> e <a href={AFF_KIT_FACIAL} className="text-brand-gold underline font-bold" target="_blank">Kit Antissinais Noturno</a>.</p>
          
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Se você tem o sulco muito profundo, evite barbas ralas de 3 dias (stubble). Elas não têm volume para camuflar o degrau da pele. A melhor escolha é um cavanhaque com volume médio (5-8mm), que cria uma nova estrutura de relevo no centro do rosto, 'puxando' a atenção para fora das linhas de expressão."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'd-roll', name: "Dermaroller 0.5mm Titanium", desc: "O estimulante de colágeno facial indispensável.", link: AFF_DERMAROLLER, icon: <Target size={32} /> },
        { id: 'k-facial', name: "Kit Antissinais Noturno", desc: "Regeneração profunda para a pele do rosto.", link: AFF_KIT_FACIAL, icon: <Sparkles size={32} /> }
      ]
    },
    'caspa-na-barba-dermatite-seborreica': {
      title: "Caspa na Barba? O Guia Definitivo para Curar a Dermatite Seborreica",
      subtitle: "Descamação, coceira e vermelhidão sob os fios? Descubra as causas reais da caspa na barba e os tratamentos mais eficazes para recuperar a pele do rosto.",
      author: "Carlos Barbudo",
      date: "10 de Março de 2026",
      readTime: "9 min",
      category: "Saúde",
      image: "/assets/caspa-barba.webp",
      howToSteps: [
        { name: "Lavagem Antifúngica", text: "Use um shampoo com Cetoconazol 2% apenas nas áreas afetadas." },
        { name: "Remoção de Crostas", text: "Massageie suavemente com uma escova de cerdas macias durante o banho." },
        { name: "Secagem Obrigatória", text: "Use o secador no modo frio para garantir que a raiz esteja 100% seca." },
        { name: "Hidratação de Equilíbrio", text: "Aplique um óleo leve com Tea Tree (Melaleuca) para acalmar a pele." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Cara, não tem nada que derrube mais a autoestima ou a elegância de uma barba de respeito do que aqueles floquinhos brancos parecendo neve caindo na sua camisa preta recém-passada. A <strong>caspa na barba</strong> (que os médicos chamam de Dermatite Seborreica) é uma dor de cabeça imensa pra quem sofre com ela. E mais chato que os flocos brancos é aquela <strong>coceira infernal</strong> e a vermelhidão que ficam por baixo dos pelos. Mas respira fundo! Hoje, a gente vai resolver isso de uma vez por todas, com dicas práticas que realmente funcionam no dia a dia.
          </p>

          <ToolBox 
            tools={[
              { name: "Shampoo de Cetoconazol 2%", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Escova de Limpeza Facial", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Melaleuca (Tea Tree)", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Ataque Químico (Cetoconazol)",
                description: "Aplique o shampoo antifúngico na barba úmida. Massageie a pele (não apenas o pelo) por 2 minutos. Deixe agir por mais 3 minutos antes de enxaguar.",
                tip: "Faça isso 2 vezes por semana em períodos de crise. Nos outros dias, use um shampoo neutro."
              },
              {
                title: "A Exfoliação Mecânica",
                description: "Durante o banho, use uma escova de cerdas macias para fazer movimentos circulares leves. Isso ajuda a soltar as células mortas e crostas sem ferir a pele.",
                tip: "Não use as unhas! Isso cria micro-cortes que facilitam a entrada de bactérias."
              },
              {
                title: "Secagem de Precisão",
                description: "A umidade é a melhor amiga do fungo da caspa. Use o secador no modo frio, direcionando o ar para a raiz dos fios até sentir que a pele está seca.",
                tip: "Seque a barba imediatamente após o banho. Nunca durma com a barba úmida."
              },
              {
                title: "Acalmando a Inflamação (Óleo)",
                description: "Aplique 2 gotas de óleo de melaleuca diluído. A melaleuca é um antisséptico natural potente que mata as bactérias da coceira.",
                tip: "Procure balms que contenham 'Tea Tree Oil' na composição para um efeito refrescante e calmante."
              },
              {
                title: "Controle de Temperatura",
                description: "Lave o rosto apenas com água morna ou fria. A água quente do banho remove a proteção natural da pele, causando o efeito rebote de oleosidade.",
                tip: "Ao final do banho, dê um último enxágue com água bem fria para fechar os poros."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. Mas Afinal, Por Que a Barba Dá Caspa?</h2>
          <p className="mb-6">
            O rosto não é o couro cabeludo. E aí começa o problema: muita gente lava a barba com o mesmo shampoo de cabelo anticaspa agressivo que tem no boxe e destrói o equilíbrio da pele. 
          </p>
          <p className="mb-6">
            Lá embaixo dos seus fios, existe o clima perfeito para fungos – é quente, úmido e as suas glândulas sebáceas estão liberando óleo natural o dia todo para tentar nutrir o pelo grosso. É um banquete para o <em>Malassezia globosa</em>, um fungo que todo humano tem naturalmente na pele. Só que quando ele se alimenta demais (seja porque você não secou a barba direito ou o estresse bagunçou sua imunidade), ele irrita o seu rosto, acelerando de forma maluca a troca das células. E adivinha? Essas células a mais se acumulam, secam e viram a caspa que cai na sua roupa!
          </p>
          
          <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-red-500 mb-10 shadow-sm">
            <p className="text-gray-700"><strong>Alerta Vermelho:</strong> Aquele hábito de sair do banho e deixar a barba secando sozinha ao vento enquanto você vai tomar café é <strong>um dos maiores responsáveis</strong> pela crise de caspa. A unidade presa no bulbo do fio apodrece a base e alimenta o fungo instantaneamente.</p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. O Tratamento Definitivo (Passo a Passo)</h2>
          <p className="mb-6">
            Se você já está coçando o rosto lendo isso, não se preocupe. Dermatite seborreica não tem cura absoluta (porque depende do seu nível de estresse e glândulas), mas <strong>tem controle absoluto</strong>. Dá pra ter a barba impecável seguindo três regras sagradas. 
          </p>

          <div className="space-y-8 my-10">
            <div className="flex gap-4 items-start">
              <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0 mt-1">A</span>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-dark">Pare de Usar Sabonete de Corpo e Shampoo de Cabelo</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Esses produtos têm adstringentes pesados para matar gordura brutal (suor de axila, química capilar). Quando você joga isso no rosto, ele <strong>lava demais</strong>. A pele entende: "estamos ressecados, produzam o triplo de óleo para tentar hidratar!". O rosto fica mais oleoso e o fungo faz a festa (o famoso Efeito Rebote). Use <strong>SÓ</strong> shampoo em gel formulado especificamente pro pH do rosto masculino ou um shampoo com Cetoconazol indicado de na farmácia 2 vezes na semana enquanto a crise estiver feia.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0 mt-1">B</span>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-dark">A Regra de Ouro do Secador de Cabelo</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Homem também usa secador! Se a sua barba passa de 2 cm, a toalha já não consegue chegar na raiz do folículo de forma eficiente. E lembra o que falamos sobre umidade e fungos? Exatamente. Pegue um secador de cabelo e coloque no <strong>Jato Frio ou Morno</strong> (nunca no super quente senão frita o pelo) e seque de baixo para cima acompanhado de uma escova. Secar bem a raiz vai matar o problema da coceira pela raiz (literalmente).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-lg shrink-0 mt-1">C</span>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-dark">Pare de Entupir o Poro com Óleo Pesado</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Muita gente tenta hidratar a caspa mergulhando o rosto em óleos bem densos (tipo rícino bruto). Isso entope os poros que já estão inflamados. Substitua pelo <strong className="text-brand-gold">Óleo de Sândalo Premium ou Jojoba</strong> (que têm absorção super-rápida) ou opte por um Balm Seco até a sua dermatite acalmar de vez. Balm cremoso é antifúngico e refresca a coceira no exato segundo que encosta na pele descamando.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. Esfoliação: Limpando o Terreno</h2>
          <p className="mb-6">
            Outro grande truque que muita gente ignora: a pele que morreu (a caspa grossa que ainda não soltou) precisa de ajuda para ir embora, para que a pele nova debaixo consiga respirar. Fazer uso de uma <strong>esfoliação leve e não agressiva</strong> no rosto pelo menos 1 a 2x na semana nas horas do banho ajuda a desobstruir todos os poros escondidos pelos fios. O resultado é aquela sensação mentolada de pele completamente renovada que respira embaixo da barba!
          </p>

          <div className="bg-brand-dark text-brand-gold p-8 rounded-3xl mt-12 mb-6 text-center shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-4">Você no Controle!</h3>
            <p className="text-gray-300 font-light text-sm mb-4">
              Lembre-se: caspa e coceira infernal não significam que você deve desistir de ter barba ou manter tudo zerado. Uma vez que você entende como a pele do rosto respira e usa os limpadores certos, ela some muito rápido (geralmente em uma semana seu rosto limpa inteiramente).
            </p>
            <p className="text-gray-300 font-light text-sm">
              Siga os protocolos que detalhamos hoje, pare de dar ração em forma de sabonete para os fungos e vista aquela sua regata ou camisa preta preferida com zero preocupações no fim de semana. A barbearia agradece!
            </p>
          </div>

        </>
      ),
      recommendedProducts: [
        { id: 'o-sand', name: "Óleo Premium de Sândalo", desc: "Equilibra a hidratação da pele evitando o ressecamento excessivo.", link: AFF_OIL, icon: <Droplets size={32} /> }
      ]
    },
    'barba-para-cada-formato-de-rosto-visagismo': {
      title: "Visagismo Masculino: Qual o Estilo de Barba Ideal para o Seu Formato de Rosto?",
      subtitle: "Rosto redondo, quadrado, oval ou triangular? Aprenda a usar a barba a seu favor para criar ângulos, disfarçar imperfeições e harmonizar as proporções.",
      author: "Carlos Barbudo",
      date: "10 de Março de 2026",
      readTime: "12 min",
      category: "Estilo",
      image: "/assets/visagismo-rostos.webp",
      howToSteps: [
        { name: "Identificação do Formato", text: "Tire uma foto frontal do rosto e trace os pontos principais (testa, maçãs, maxilar)." },
        { name: "Escolha da Altura Lateral", text: "Defina se as laterais devem ser baixas (para alongar) ou volumosas (para preencher)." },
        { name: "Desenho da Linha de Base", text: "Marque a linha do pescoço para definir o novo formato da mandíbula." },
        { name: "Simetria de Bigode", text: "Ajuste o bigode para compensar a largura do nariz e bochechas." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Seja muito sincero: quantas vezes você já viu um corte de barba sensacional na internet, tentou fazer igual no espelho e o resultado ficou parecendo que você brigou com o barbeador? A culpa não é sua, nem da sua barba. O segredo que os grandes barbeiros não costumam falar é o <strong>Visagismo</strong>. A barba é, literalmente, a "maquiagem funcional" do homem. Dominar a arte do visagismo permite que você altere visualmente a própria estrutura óssea do rosto, afinando um queixo duplo, enquadrando um rosto redondo ou marcando uma mandíbula mais fraca. 
          </p>

          <ToolBox 
            tools={[
              { name: "Fita Métrica Flexível", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Máquina com Ajuste de Milímetros", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "App de Simulação de Barba", link: "https://mercadolivre.com/sec/28LNYBa" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Técnica do 'Selfie de Engenheiro'",
                description: "Tire uma foto do seu rosto de frente, com o celular na altura dos olhos. Use o editor de fotos para desenhar linhas: uma na testa, uma nas maçãs do rosto e uma no maxilar. Compare os comprimentos.",
                tip: "Se a linha do maxilar for a mais larga, seu rosto é quadrado. Se as maçãs forem as mais largas, é redondo ou oval."
              },
              {
                title: "O Esquadro das Laterais",
                description: "Para rostos redondos, use a máquina sem pente (ou pente 1) nas laterais, descendo reto da costeleta até o maxilar. Isso cria ângulos onde a gordura facial esconde o osso.",
                tip: "Nunca deixe a lateral da barba ultrapassar a largura das suas orelhas."
              },
              {
                title: "A Projeção de Queixo",
                description: "Para rostos curtos ou quadrados, deixe o pelo no queixo crescer mais. Modele em formato de 'V' para alongar o rosto e dar um aspecto mais magro e imponente.",
                tip: "Use um balm de fixação forte para manter a ponta do queixo sempre afunilada."
              },
              {
                title: "O Equilíbrio do Bigode",
                description: "Se você tem um nariz grande, use um bigode mais grosso para equilibrar a proporção. Se o lábio superior for fino, mantenha o bigode alto para não 'sumir' com a boca.",
                tip: "O bigode deve terminar exatamente no canto da boca para não alargar o rosto lateralmente."
              },
              {
                title: "A Linha de Pescoço 'Slim'",
                description: "Para disfarçar a papada, desenhe a linha do pescoço em formato de 'U' profundo, um pouco mais baixa que o normal. Isso cria uma sombra artificial que define o maxilar.",
                tip: "Mantenha os pelos do pescoço sempre degradê (fade) para uma transição suave com a pele."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Geometria do Rosto: A Regra do Contrapeso</h2>
          <p className="mb-6">
            O princípio do visagismo para barba é a busca pelo formato <strong>Oval</strong>, que o cérebro humano costuma ler como o mais "harmônico". Para chegar nisso, usamos a regra do contrapeso. Funciona assim: se a sua genética te deu um rosto com linhas retas e fortes, a barba entra para trazer um volume mais curvo e suave. Se, pelo contrário, seu rosto tem bochechas mais cheias e linhas arredondadas, a barba vem para servir como uma régua de esquadro, criando quinas e ângulos. 
          </p>

          <div className="bg-brand-charcoal text-brand-light p-8 rounded-3xl my-10 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-gold mb-8">Guia Prático: Descubra e Enquadre o Seu Rosto</h3>

            <div className="space-y-10">
              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">🟢 O Rosto Redondo</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  <strong>O Desafio:</strong> Seu rosto tem a largura e a altura praticamente iguais, com bochechas mais proeminentes, e o maxilar não tem aqueles ângulos fechados.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong>A Solução:</strong> Fuja das barbas lenhador cheias nas laterais! Elas só vão te deixar parecendo uma bola de boliche. O seu foco é <strong className="text-brand-gold">alongar</strong> o rosto. Mantenha os fios na sua bochecha aparados bem baixinhos (pente 1 ou 2) ou raspados na navalha, e concentre todo o volume de pelos no queixo. <br/><br/>
                  <strong>Melhores cortes:</strong> Cavanhaque alongado, estilo Van Dyke (bigode desconectado do queixo) ou uma barba âncora grossa.
                </p>
              </div>

              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">🔲 O Rosto Quadrado</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  <strong>O Desafio:</strong> Seu maxilar já é largo e marcado (sortudo!), lembrando a caixa craniana do Brad Pitt, mas muitas vezes ele pode parecer achatado e um pouco "curto" de cima a baixo.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong>A Solução:</strong> Como você já tem os cantos afiados naturais da estrutura óssea, a barba precisa trazer um pouco de escuridão para alongar o queixo sem alargar as laterais. Arredondar a ponta do queixo é fantástico aqui.<br/><br/>
                  <strong>Melhores cortes:</strong> Barba Circle Beard (aquele cavanhaque cheio integrado), barba mais rala nas laterais e pontuda no tipo "Ducktail" suave que quebre as arestas duras da mandíbula.
                </p>
              </div>

              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">🔻 O Rosto Triangular</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  <strong>O Desafio:</strong> A testa e o osso das sobrancelhas são bem mais largos que a distância entre as pontas da mandíbula, e seu queixo tende a ser fino ou pontudo. 
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong>A Solução:</strong> A missão da sua barba aqui é criar largura no fundo do seu rosto. Em termos visuais, você precisa encher a parte que está fina! Aqui, o volume é seu melhor amigo.<br/><br/>
                  <strong>Melhores cortes:</strong> Barba estilo Lenhador (Full Beard) com volume massivo crescendo na mandíbula inferior, ou o clássico Garibaldi. Evite raspar o pescoço muito alto para não perder o volume que cria o alicerce.
                </p>
              </div>

              <div className="border-l-4 border-brand-gold pl-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">🪞 O Rosto Oval</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  <strong>O Desafio:</strong> Basicamente, nenhum. Proporcionalmente, é a tela perfeita para pintura. Você ganhou a loteria do visagismo!
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong>A Solução:</strong> Você joga na posição de coringa. Seu rosto sustenta desde aquele visual "cafajeste" de 3 dias de barba raspadinha até um bigodão imponente sem comprometer os ângulos de visão.<br/><br/>
                  <strong>Melhores cortes:</strong> Qualquer um. Mantenha as linhas superiores da bochecha bem desenhadas e a linha do pescoço regulada, e sinta-se livre para seguir a tendência do ano!
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Mas Cuidado: O Erro Fatal que Todos Cometem</h2>
          <p className="mb-6">
            Não importa qual seja o formato da sua estrutura craniana, existe um crime que destrói qualquer visagismo: <strong>a linha do pescoço mal desenhada</strong>. 
          </p>
          <p className="mb-6">
            Pode reparar. Se você fizer a linha muito perto do osso da mandíbula, vai criar um efeito imediato de "papada" e seu rosto vai parecer gordo. Mas se você deixar a barba descer até a "saboneteira", você passa a impressão de ser o morador de uma caverna!
            A regra intocável dos barbeiros profissionais é que a linha do pescoço deve ficar, de forma ideal, a exatos <strong>dois dedos de medida acima da projeção do Pomo de Adão (gogó)</strong>, curvando-se suavemente para chegar atrás das orelhas.
          </p>

          <div className="bg-brand-light p-6 border-2 border-brand-gold/30 rounded-2xl shadow-sm my-10 text-center">
            <h4 className="font-bold text-lg mb-2 text-brand-dark">A Ferramenta Certa Muda o Jogo</h4>
            <p className="text-sm text-gray-600">
              Agora que você já sabe como esculpir o desenho a favor da sua natureza, pare de confiar apenas em barbeadores cegos de plástico. Ter uma tesoura de precisão em casa e um pente fino faz com que os "acabamentos de mestre" e o design se mantenham limpos mesmo quinze dias depois de sair da barbearia!
            </p>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No visagismo, menos é mais. Se você tem rosto redondo e quer usar barba lenhador, o segredo é o 'fade' nas bochechas. O degradê tira o volume lateral que engorda o rosto, mas mantém o impacto frontal da barba cheia. É o truque dos barbeiros de elite para harmonizar rostos difíceis."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 't-will', name: "Tesoura de Precisão Stark", desc: "A ferramenta definitiva para criar as linhas perfeitas que desenham seu rosto.", link: AFF_TESOURA, icon: <Scissors size={32} /> }
      ]
    },
    'barba-grisalha-como-cuidar-e-estilizar': {
      title: "Barba Grisalha de Respeito: Dicas para Assumir os Fios Brancos com Elegância",
      subtitle: "O guia completo para homens maduros (ou jovens grisalhos). Descubra como hidratar, evitar o amarelamento e ostentar uma barba branca impecável.",
      author: "Carlos Barbudo",
      date: "09 de Março de 2026",
      readTime: "10 min",
      category: "Dicas",
      image: "/assets/barba-grisalha.webp",
      howToSteps: [
        { name: "Lavagem Matizadora", text: "Use um shampoo roxo (matizador) uma vez por semana para tirar o amarelado." },
        { name: "Hidratação Profunda", text: "Aplique um condicionador pesado e deixe agir por 5 minutos após o banho." },
        { name: "Selagem com Óleo", text: "Use óleo de barba 2 vezes ao dia para suavizar os fios brancos rígidos." },
        { name: "Penteado com Balm", text: "Modele com um balm de alta fixação para segurar os fios arrepiados." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se você clicou nesse artigo porque notou os primeiros fios brancos surgindo no queixo, ou se você já é um grisalho veterano, parabéns: você atingiu um novo patamar de estilo. A barba branca (seja ela sal e pimenta ou a clássica "Papai Noel" nevada) carrega um peso visual indiscutível. Ela transmite autoridade, maturidade e uma elegância natural que nenhum pacote de tinta de farmácia consegue superar. 
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Porém, assumir o visual grisalho definitivo não significa apenas "deixar a natureza seguir seu curso". Na verdade, a barba branca é muito mais rebelde e exigente que a barba escura. Se você bobear, o visual de "coroa estiloso" rapidamente se transforma no visual de quem desistiu de se cuidar. Hoje, vou te contar o segredo dos grandes cavalheiros grisalhos.
          </p>

          <ToolBox 
            tools={[
              { name: "Shampoo Matizador (Violeta)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Balm de Hidratação Intensa", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente de Chifre ou Madeira", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Banho de Prata (Matização)",
                description: "Uma vez por semana, aplique o shampoo matizador violeta. Ele neutraliza os tons amarelados causados pelo sol e poluição, deixando os fios prateados.",
                tip: "Não deixe o shampoo agir por mais de 5 minutos, ou sua barba pode ficar levemente arroxeada."
              },
              {
                title: "O Choque de Maciez",
                description: "O fio branco é oco e duro. Use um condicionador de alta performance em cada lavagem. Massageie bem a base do pelo para atingir a pele.",
                tip: "Enxágue com água morna para fria. A água muito quente resseca ainda mais os fios grisalhos."
              },
              {
                title: "A Selagem com Óleo de Sândalo",
                description: "Aplique óleo de barba pela manhã e à noite. O óleo preenche as porosidades do fio branco, dando peso e brilho saudável.",
                tip: "Grisalhos precisam de 50% mais óleo que homens de barba escura."
              },
              {
                title: "Domando os Fios Arrepiados",
                description: "Use o balm modelador para assentar os fios que insistem em ficar espetados para fora. Penteie sempre na direção do crescimento.",
                tip: "Use um secador na temperatura baixa para ajudar o balm a 'derreter' e fixar o penteado."
              },
              {
                title: "O Corte de Precisão",
                description: "Barba grisalha exige linhas perfeitas. Se ela estiver desgrenhada, parece desleixo. Mantenha os contornos da bochecha e pescoço sempre raspados.",
                tip: "Fios brancos sobressaem contra a pele clara. O navalhete é essencial para a definição absoluta."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. Mas Afinal, Por Que o Fio Branco é Tão Duro e Rebelde?</h2>
          <p className="mb-6">
            Não é impressão sua: aqueles fios brancos novos que nascem parecem arames espetando em todas as direções. Isso tem uma explicação puramente científica.
          </p>
          <p className="mb-6">
            Quando o seu corpo para de mandar <strong>melanina</strong> (a substância que dá a cor escura) para a raiz do pelo, algo na estrutura muda. Sem a melanina preenchendo o interior do fio, ele fica levemente oco por dentro. Para compensar essa fragilidade, a parede externa (a cutícula) fica imensamente mais grossa. O resultado? Um fio pesado, inflexível, que perdeu toda a maciez, e que não obedece ao pente de jeito nenhum! 
          </p>
          <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand-charcoal mb-10 shadow-sm text-gray-700 italic">
            "Sem contar que, com o passar do tempo, as glândulas sebáceas do nosso rosto (que produzem aquele óleo natural) começam a ficar mais preguiçosas. Se o pelo já é duro por nascer branco, sem óleo natural ele fica completamente esturricado e com cara de vassoura."
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. O Inimigo Número 1: O Fio Amarelado</h2>
          <p className="mb-6">
            Você passa meses cultivando uma barba majestosa, mas de repente nota que em volta da boca ela está ganhando um tom amarelado terrível. Parece descaso ou sujeira, mas acredite: o fio branco funciona como uma esponja. Por ser oco poroso, ele absorve TUDO ao seu redor.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-brand-dark text-lg mb-3">🚬 O Que Causa o Amarelado?</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Fumaça de cigarro, poluição pesada das ruas, a ferrugem invisível encanada da água dura do seu chuveiro, raios UV do sol batendo direto sem proteção e até excesso de suor oxidado. Tudo isso "queima" o aspecto branco natural dele e encarde o fio.</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-brand-dark text-lg mb-3">🧼 Como Neutralizar?</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Uma vez por semana, substitua seu shampoo diário por um <strong>Shampoo Matizador para Barba</strong> (aquele com o caldo roxo/violeta escuro). O roxo é a cor oposta ao amarelo na física, ele cancela o encardido imediatamente, deixando a barba prateada e cintilante.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. O Manual do Grisalho (O Que Você Deves Fazer Hoje)</h2>

          <div className="space-y-8 my-10">
            <div className="flex gap-4 items-start">
              <span className="bg-brand-charcoal text-brand-gold font-black px-4 py-2 rounded-lg shrink-0 mt-1">1</span>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-dark">Banho Quente é o Fim do Pelo Branco</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Evite esfregar a pele e a barba embaixo da água fervendo do chuveiro. A água muito quente abre ainda mais a cutícula daquele pelo grosso. Lave o rosto na água de morna pra fria para selar esse formato e tentar manter o pelo assentado para baixo. E pelo amor à sua imagem: não esfregue forte a toalha no rosto na hora de secar! Isso só quebra o fio duro no meio. Apenas "aperte" a toalha na barba com calma.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-brand-charcoal text-brand-gold font-black px-4 py-2 rounded-lg shrink-0 mt-1">2</span>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-dark">Carga Dupla de Hidratação</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  O óleo para barba agora não é vaidade, é questão de salvação física do pelo. Use Óleo de Sândalo ou Argan puro nas raízes assim que secar no banho. Mas aqui tem um macete de ouro: os balm modeladores secos para barba vão te ajudar a forçar os fios arrepiados contra a gravidade para um visual de capa de revista, ajudando o fio espesso a relaxar.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <span className="bg-brand-charcoal text-brand-gold font-black px-4 py-2 rounded-lg shrink-0 mt-1">3</span>
              <div>
                <h4 className="font-bold text-xl mb-2 text-brand-dark">Cuidado Maior com os Cantos</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Fios brancos brilhando sem cor disfarçam um pouco os defeitos no desenho da bochecha. O problema é que isso te deixa mais refém do pescoço bem aparado. Como os fios brancos voam para todos os lados, sua barba vai apresentar um formato desleixado 3 vezes mais rápido que uma barba escura. Visite o barbeiro com precisão milimétrica nas áreas do maxilar.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-dark text-brand-gold p-8 rounded-3xl mt-12 mb-6 text-center shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-4">Abrace o Branco com Respeito</h3>
            <p className="text-gray-300 font-light text-sm mb-4">
              Cada fio cinza é um pedaço da sua história e um sinal de que você sobreviveu a batalhas na vida. Não queira pintar ou escondê-los. A regra agora não é "rejuvenescer", mas sim <strong>"envelhecer bem"</strong>. 
            </p>
            <p className="text-gray-300 font-light text-sm">
              Trate com a hidratação reforçada, use um matizador para combater o amarelado e use sua barba grisalha como o prêmio máximo da elegância masculina!
            </p>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Fios brancos são como canudos de vidro: muito quebradiços. Nunca tente 'arrancar' um fio branco rebelde com pinça. Isso inflama o folículo e o próximo fio nascerá ainda mais duro e espetado. A solução é o corte rente com tesoura Stark e o uso de balm de alta fixação para 'colar' o fio no lugar."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'o-sand', name: "Óleo Premium de Sândalo", desc: "Amasse a textura rígida e impermeável da barba grisalha com este poderoso hidratante.", link: AFF_OIL, icon: <Droplets size={32} /> }
      ]
    },
    'transplante-de-barba-fue-vale-a-pena': {
      title: "Transplante de Barba (FUE): Quanto Custa, Como Funciona e Se Vale a Pena",
      subtitle: "Tudo o que você precisa saber sobre a cirurgia definitiva para ter barba: da extração fio a fio no couro cabeludo até o resultado final no rosto.",
      author: "Carlos Barbudo",
      date: "09 de Março de 2026",
      readTime: "15 min",
      category: "Ciência",
      image: "/assets/transplante-barba.webp",
      howToSteps: [
        { name: "Avaliação Médica", text: "Realize exames de sangue e análise da área doadora (nuca ou pescoço)." },
        { name: "Extração FUE", text: "Coleta individual dos folículos sob anestesia local." },
        { name: "Implante de Precisão", text: "Abertura de canais e colocação dos fios respeitando a angulação natural." },
        { name: "Pós-Operatório Crítico", text: "Proteção total contra sol e impactos nos primeiros 10 dias." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Seja bem-vindo ao estágio final de quem busca a barba perfeita. Se você já usou Minoxidil religioso duas vezes ao dia por mais de um ano, passou o Dermaroller acreditando que furos fariam diferença, e ainda assim sua lateral continua lisa como bumbum de bebê... não se frustre. Às vezes a genética não nos dá as "sementes" necessárias. Não adianta regar terra vazia. É aqui que entra o último e mais luxuoso recurso da medicina estética masculina: o <strong>Transplante de Barba</strong>. 
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            É uma cirurgia que custa o equivalente a um carro seminovo em alguns casos e mexe diretamente com a sua fisionomia definitiva. Então, antes de você marcar uma avaliação, vamos dissecar a dura realidade – com prós, contras e os segredos do pós-operatório que os médicos às vezes esquecem de mencionar.
          </p>

          <ToolBox 
            tools={[
              { name: "Soro Fisiológico (Spray)", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Almofada de Pescoço para Viagem", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Sabonete Líquido Neutro", link: "https://mercadolivre.com/sec/28LNYBa" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Mapeamento da Área Doadora",
                description: "O médico escolhe fios resistentes da nuca ou pescoço. No dia anterior, você deve descansar bem e evitar álcool. O design da barba é desenhado no rosto com caneta cirúrgica para sua aprovação final.",
                tip: "Peça ao médico para não deixar a linha da bochecha muito alta; um visual mais natural é sempre melhor a longo prazo."
              },
              {
                title: "A Cirurgia (Maratona de Paciência)",
                description: "Sob anestesia local, os folículos são colhidos um a um (Técnica FUE). Depois, o médico abre micro-canais no rosto e insere as unidades foliculares. O processo dura de 6 a 10 horas.",
                tip: "Leve fones de ouvido e uma playlist longa. É um processo cansativo mas indolor."
              },
              {
                title: "As Primeiras 72 Horas (A Lei do Spray)",
                description: "Você não pode lavar o rosto. Deve borrifar soro fisiológico a cada 30 minutos para manter os implantes hidratados. Durma sentado em 45 graus para evitar inchaço e não encostar os fios no travesseiro.",
                tip: "Use uma almofada de viagem em 'U' para imobilizar o pescoço durante o sono."
              },
              {
                title: "A Lavagem de Toque (Dia 4 ao 10)",
                description: "O inchaço começa a descer. Você pode lavar o rosto, mas APENAS pressionando espuma de sabonete neutro sobre as crostas. Nunca esfregue! As crostas devem cair naturalmente.",
                tip: "Use água fria ou morna. A água quente pode soltar os folículos que ainda não 'pegaram' totalmente."
              },
              {
                title: "O Deserto do Primeiro Mês",
                description: "Após 20-30 dias, os fios implantados caem. É o Shock Loss. É a fase mais difícil emocionalmente, mas as raízes continuam lá dentro se preparando para nascer em 3 meses.",
                tip: "Mantenha a pele hidratada com pomadas cicatrizantes indicadas pelo seu cirurgião."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. Como a Mágica Happens: A Técnica FUE</h2>
          <p className="mb-6">
            Chega daquela ideia antiga de arrancar uma "tira" de pele da sua nuca (técnica FUT) deixando uma cicatriz digna do Frankenstein. Hoje o mercado opera com o <strong>FUE (Follicular Unit Extraction)</strong>. 
          </p>
          <p className="mb-6">
            Imagine que o cirurgião usa uma micropinça elétrica milimétrica para "colher" raízes de cabelo uma a uma da sua "Área Doadora" (geralmente embaixo do queixo, no pescoço – onde homens naturalmente costumam ter de sobra – ou na lateral da sua cabeça, que tem pelos super resistentes). 
          </p>
          <p className="mb-6">
            Depois de coletar essas preciosidades – às vezes mais de 3 mil "mudas" em uma única sessão! – ele abre minúsculos "furinhos" no seu rosto, seguindo perfeitamente a angulação que um pelo de barba nasceria naturalmente, e deposita o fio ali dentro. Tudo sob anestesia local. Você literalmente passa o dia deitado assistindo a uma série no celular enquanto ganha o maxilar do seus sonhos.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. As Verdades Cruas do Processo</h2>
          
          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-brand-charcoal text-brand-light p-6 rounded-2xl border-t-8 border-brand-gold shadow-lg">
              <h4 className="font-bold text-xl mb-4 text-brand-gold flex items-center gap-2">💰 O Custo do Seu Sonho</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                Não existe mágica barata aqui. Um transplante de excelência exige um cirurgião minucioso e dezenas de horas de trabalho de equipe. No Brasil, espere investir valores entre <strong>R$ 8.000,00 a R$ 25.000,00</strong>. Suspeite fortemente de clínicas que cobram "preço de promoção", pois fios implantados na direção errada na sua bochecha vão te fazer parecer um porco-espinho arrepiado pra sempre!
              </p>
            </div>
            <div className="bg-brand-light text-brand-dark p-6 rounded-2xl border-t-8 border-red-500 shadow-lg">
              <h4 className="font-bold text-xl mb-4 text-red-600 flex items-center gap-2">😱 O "Susto" dos 30 Dias (Shock Loss)</h4>
              <p className="text-sm leading-relaxed text-gray-700">
                Isso destrói o psicológico de muitos: após 30 dias de implante, quando você estava se sentindo o rei, <strong>todos os seus fios novos caem</strong>. Calma! É absolutamente normal. Chama-se "Shock Loss" ou Eflúvio Telógeno. A raiz transplantada sofreu trauma, descarta o fio atual e "hiberna" por 2 ou 3 meses antes de fabricar o fio definitivo novinho.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. Cicatrização e Recuperação</h2>
          <p className="mb-6">
            A recuperação exige bastante repouso social. Pelo menos nos primeiros 7 a 10 dias, seu rosto vai estar cheio de pequenas crostas ("casquinhas de sangue") e inchaço nos folículos implantados. Dormir pode ser um transtorno, pois não se pode esfregar o rosto no travesseiro com risco de "puxar" os folículos novinhos antes que criem raízes.
          </p>

          <div className="overflow-x-auto my-10">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-brand-gold/10">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="p-4 text-left font-black tracking-wider text-brand-gold">Período</th>
                  <th className="p-4 text-left font-black tracking-wider">O que esperar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 font-bold text-brand-dark whitespace-nowrap">Semana 1 a 2</td>
                  <td className="p-4 text-sm text-gray-600">Rosto com micropontos, crostas, inchaço moderado. Muito cuidado na lavagem capilar.</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors bg-brand-gold/5">
                  <td className="p-4 font-bold text-brand-dark whitespace-nowrap">Mês 1 a 3</td>
                  <td className="p-4 text-sm text-gray-600">Fase de choque (Shock Loss). Queda dos fios provisórios e fase de "latência". Fica parecendo que nada foi feito.</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="p-4 font-bold text-brand-dark whitespace-nowrap">Mês 4 a 6</td>
                  <td className="p-4 text-sm text-gray-600">O milagre! Início da brotação ativa permanente. A barba renasce mais fina e vai engrossando lentamente.</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors bg-brand-gold/5">
                  <td className="p-4 font-bold text-brand-dark whitespace-nowrap">Mês 12 em diante</td>
                  <td className="p-4 text-sm text-gray-600">O resultado maduro e definitivo. Você já pode usar lâmina, cuidar com os óleos convencionais e até frequentar barbeiros como qualquer barbudo "natural".</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Afinal, Vale Mesmo a Pena?</h2>
          <p className="mb-6">
            A resposta é um absoluto e retumbante <strong>Sim</strong>. Para a autoestima de um homem que sentia complexos pela falta de pelos masculinos faciais maduros, os resultados são avassaladores. A taxa de sobrevivência dos fios costuma bater os 90% na técnica moderna FUE e, diferentemente de cremes de uso tópico o transplante é para a <strong>vida inteira</strong>. 
          </p>
          <p className="mb-6">
            A única ressalva que deixamos é consultar o médico de antemão e programar também o fortalecimento dos folículos pré-existentes, já que cuidar dessa grande aquisição que foi a cirurgia fará toda a diferença pro resultado maduro daqui 1 ou 2 anos.
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Se você vai fazer o transplante, comece a usar Minoxidil 6 meses ANTES da cirurgia. Isso fortalece os fios que você ainda tem e prepara o terreno sanguíneo para receber as novas 'mudas'. Um solo fértil garante que 95% dos fios implantados sobrevivam, em vez dos 80% habituais."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'v-factor', name: "Fator Viking Crescimento", desc: "A tecnologia necessária antes ou depois para assegurar saúde capilar plena.", link: AFF_VIKING, icon: <Trophy size={32} /> }
      ]
    },
    'mitos-crescimento-barba-lamina-engrossa-fios': {
      title: "Raspar a Barba com Gilete Engrossa os Fios? Desvendando Mitos",
      subtitle: "A ciência por trás dos mitos capilares mais famosos. Entenda por que a lâmina não muda a grossura do fio e o que realmente funciona para dar volume.",
      author: "Carlos Barbudo",
      date: "08 de Março de 2026",
      readTime: "8 min",
      category: "Dicas",
      image: "/assets/mitos-crescimento.webp",
      howToSteps: [
        { name: "Amolecimento Térmico", text: "Use uma toalha quente no rosto por 2 minutos para abrir os poros e amaciar os fios." },
        { name: "Direção do Corte", text: "Sempre raspe no sentido de crescimento do pelo para evitar inflamações na raiz." },
        { name: "Nutrição Interna", text: "Mantenha uma dieta rica em Proteínas, Zinco e Vitaminas do complexo B." },
        { name: "Exfoliação Química", text: "Use um esfoliante facial 2 vezes por semana para evitar que pelos novos fiquem presos." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se lá pelos seus 15 ou 16 anos você reclamou pro seu avô ou pro seu tio que sua barba estava nascendo falhada, a chance é de 99% de que você tenha ouvido este conselho sagrado: <em>"É só raspar todo dia, meu filho. Passa a gilete a contrapelo, mesmo onde não tem nada, que logo a barba volta mais grossa, parecendo arame farpado!"</em>
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Dezenas de gerações de homens juraram de pé junto que a lâmina era mágica para o crescimento. Mas hoje, nós vamos colocar essa "sabedoria de boteco" sob o microscópio da dermatologia e ver o que a ciência responde. Pode preparar o coração, porque o choque de realidade vai ser grande!
          </p>

          <ToolBox 
            tools={[
              { name: "Esfoliante Facial de Carvão Ativado", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Toalha de Algodão Stark", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Amêndoas para Pré-Barba", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Ritual da Toalha Quente",
                description: "Antes de passar qualquer lâmina, umedeça uma toalha em água bem quente (não fervendo) e deixe no rosto por 2 minutos. Isso relaxa o folículo e faz o pelo 'pular' pra fora da pele.",
                tip: "Isso reduz a força necessária para cortar o pelo em 30%, evitando o trauma na pele."
              },
              {
                title: "A Técnica do 'Sentido Único'",
                description: "Diferente do que seu avô dizia, NUNCA comece barbeando contra o pelo. Siga a direção que o fio nasce. O 'contrapelo' só deve ser feito numa segunda passada, com muito gel.",
                tip: "Use os dedos para sentir a direção: se espetar a mão, você está indo contra o sentido."
              },
              {
                title: "Lavagem com Água Gelada",
                description: "Após o barbear, jogue água gelada no rosto. Isso causa um choque térmico que fecha os poros e interrompe pequenos sangramentos instantaneamente.",
                tip: "A água gelada é o melhor calmante natural contra o 'burning' (queimação) da gilete."
              },
              {
                title: "O Segredo do Zinco",
                description: "A fábrica de pelos (folículo) precisa de combustível. Consuma alimentos ricos em zinco (carnes, ovos, sementes de abóbora). O zinco é o mineral maestro do crescimento capilar.",
                tip: "Se você tem muitas falhas, consulte um médico para checar se seus níveis de Zinco e Biotina estão baixos."
              },
              {
                title: "Troca de Lâmina Semanal",
                description: "Lâmina cega rasga a pele em vez de cortar o pelo. Troque seu cartucho ou navalhete a cada 5 barbearias, no máximo. Lâmina velha é depósito de bactérias.",
                tip: "Seque a lâmina após o uso para evitar que ela oxide e perca o fio precocemente."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. A Resposta Curta (E Dolorosa)</h2>
          <p className="mb-6">
            A resposta é não. <strong>Absolutamente não.</strong> Raspar a barba, o cabelo, os pelos da perna ou do peito não muda o desenvolvimento biológico, não acelera a velocidade e muito menos altera a espessura do fio para engrossá-lo. 
          </p>
          <div className="bg-brand-charcoal text-white p-6 rounded-2xl mb-10 shadow-lg border-l-4 border-brand-gold">
            <h4 className="font-bold text-lg text-brand-gold mb-2">A Biologia é Clara:</h4>
            <p className="text-sm">Todo o formato, espessura e ciclo de vida do seu pelo já são decididos lá no <strong>folículo piloso</strong> (a fábrica da barba), que fica escondido alguns milímetros debaixo da sua pele. A lâmina de barbear só passa por cima da superfície da epiderme cortando o pelo "morto" (a haste). A fábrica, lá embaixo, nem percebe que o fio foi cortado!</p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. Por Que Todo Mundo Acha Engrossar? (A Ilusão de Óptica)</h2>
          <p className="mb-6">
            Se não engrossa, por que aquele pelinho macio e loiro de adolescente, quando você raspou, horas depois já parecia uma lixa arranhando tudo? A resposta está na geometria!
          </p>
          <p className="mb-6">
            Quando um pelo nasce "virgem" no rosto, ele é muito parecido com a ponta de uma agulha: <strong>a raiz é espessa, mas a ponta vai se afinando até o extremo.</strong> Isso faz com que ele seja macio ao toque e um pouco mais claro perante a luz.
          </p>
          <p className="mb-6">
            Aí entra a sua gilete afiada. Quando você raspa rente ao rosto, você corta o pelo exatamente na sua base (onde ele já era naturalmente mais grosso), em um corte reto e bruto – como serrar o tronco de uma árvore. 
          </p>
          <p className="mb-6">
            Quando essa "tora serrada" empurra pra sair pelos poros algumas horas depois, ela nasce com a ponta reta, rústica, áspera e afiada. Ele parece mais grosso, e quando você passa a mão contra ele, arranha como uma lixa. Mas, ironicamente, <strong>é só o mesmo pelo cortado pela metade</strong>. Se você deixasse ele crescer por mais um mês, veria que era exatamente o mesmo de antes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-red-50 p-6 rounded-2xl border-t-8 border-red-500 shadow-sm">
              <h4 className="font-bold text-xl mb-4 text-red-700 flex items-center gap-2">⚠️ O Efeito Colateral do "Raspar Todo Dia"</h4>
              <p className="text-sm leading-relaxed text-gray-700">
                A ironia é cruel: tentar forçar o engrossamento passando a gilete diariamente a seco, ou contra os pelos numa pele jovem, <strong>destrói a epiderme</strong>. Isso retira violentamente a barreira cutânea, provocando foliculite (inflamação vermelha da raiz), manchas acinzentadas severas e os temidos pelos encravados debaixo da pele, estragando o potencial natural da sua barba a longo prazo.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border-t-8 border-green-500 shadow-sm">
              <h4 className="font-bold text-xl mb-4 text-green-700 flex items-center gap-2">🌱 O Que Realmente Engrossa?</h4>
              <p className="text-sm leading-relaxed text-gray-700">
                Fórmula simples: <strong>Testosterona + Genética + Tempo</strong>. A maioria dos homens só atinge o potencial de espessura de barba máximo após os 25 ou até 30 anos. Para dar um suporte científico real a isso, além de uma boa dieta, hoje usamos loções vasodilatadoras comprovadas (como o Minoxidil) para acordar a raiz, e microagulhamento dermaroller para ativar circulação sanguínea de verdade.
              </p>
            </div>
          </div>

          <p className="mb-6">
            Da próxima vez que alguém lhe der a dica mágica de "raspar pra crescer barba cheia", você já sabe a verdade da Ilusão da Gilete. O jeito mais fácil de notar se a sua barba está engrossando... é guardando o barbeador na gaveta por, no mínimo, um mês e deixando a natureza mostrar sua arquitetura natural nos fios!
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Quer que a barba pareça mais grossa hoje? O segredo é a hidratação que 'incha' a fibra. Use um balm com pantenol. Ele penetra nas cutículas e faz cada fio reter um pouco mais de umidade, aumentando o diâmetro visual em até 15%. É biologia, não ilusão de lâmina."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'm-kirk', name: "Minoxidil Kirkland 5%", desc: "A solução clinicamente focada para, de fato, aumentar a espessura na raiz do fio se o corpo desejar.", link: AFF_MINOXIDIL, icon: <FlaskConical size={32} /> },
        { id: 'd-roll', name: "Dermaroller 0.5mm Titanium", desc: "Estimulação com perfuração segura sem criar atrito estéril na epiderme.", link: AFF_DERMAROLLER, icon: <Target size={32} /> }
      ]
    },
    'barba-italiana-estilo-sedutor': {
      title: "A Barba Italiana: O Segredo do Visual Clássico e Sedutor",
      subtitle: "Conhecida por suas linhas perfeitas e sombreado inconfundível. Descubra como adotar o estilo dos galãs italianos com precisão e elegância.",
      author: "Carlos Barbudo",
      date: "11 de Março de 2026",
      readTime: "9 min",
      category: "Estilo",
      image: "/assets/barba-italiana.webp",
      howToSteps: [
        { name: "Uniformização de Altura", text: "Passe a máquina com pente 2 (6mm) em todo o rosto uniformemente." },
        { name: "Linha da Bochecha", text: "Delineie uma linha diagonal reta do topo da orelha ao canto da boca." },
        { name: "Limpeza de Pescoço", text: "Raspe tudo abaixo de dois dedos do pomo de adão com navalhete." },
        { name: "Finalização com Brilho", text: "Aplique óleo de barba para dar o aspecto escuro e sedutor." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Pense em um astro de cinema caminhando pelas ruas de Milão com um terno de alfaiataria impecável. O que completa o rosto desse homem? Não é a barba gigante de um lenhador de montanha, nem o rosto liso de um adolescente. É a <strong>Barba Italiana</strong> – muitas vezes chamada de <em>"Stubble"</em> sofisticado. É aquele sombreado marcante, escuro, viril, mas que parece ter sido desenhado com um esquadro a laser.
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Se você quer transmitir a imagem do homem urbano seguro de si, que se cuida sem parecer que perdeu duas horas no espelho do banheiro, o estilo clássico e sedutor italiano é para onde você deve mirar!
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina de Corte com Pente 2", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Navalhete Profissional (Shavette)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Gel de Barbear Transparente", link: "https://mercadolivre.com/sec/2Wo6ZWc" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Base Uniforme (Pente 2)",
                description: "O estilo italiano exige uniformidade extrema. Passe a máquina com o pente 2 (aproximadamente 6mm) em todo o rosto, pescoço e queixo.",
                tip: "Passe a máquina em várias direções para garantir que não sobrou nenhum fio mais longo 'escondido'."
              },
              {
                title: "O Delineado de Milão (Bochechas)",
                description: "Usando o gel transparente e o navalhete, crie uma linha diagonal perfeita. Ela deve começar no meio da orelha e terminar exatamente no encontro do bigode.",
                tip: "Esta linha deve ser reta ou levemente côncava para realçar as maçãs do rosto."
              },
              {
                title: "A Definição de Mandíbula",
                description: "O pescoço deve estar 100% liso. Raspe tudo o que estiver abaixo da linha imaginária que contorna o osso da sua mandíbula.",
                tip: "Mantenha a cabeça erguida ao raspar o pescoço para evitar dobras na pele que causam cortes."
              },
              {
                title: "Aparando o Bigode Executivo",
                description: "O bigode italiano é discreto. Ele não deve cobrir o lábio nem se destacar demais da barba lateral. Use a tesoura para manter os fios curtos.",
                tip: "O bigode deve ter a mesma altura da barba para manter o visual 'sombreado' uniforme."
              },
              {
                title: "O Toque de Classe (Óleo)",
                description: "Aplique 3 gotas de óleo de barba de fragrância clássica (Sândalo ou Cedro). Isso dá um brilho sutil que faz a barba parecer mais escura e densa.",
                tip: "Massageie bem para que o óleo chegue à pele, evitando a descamação (caspa da barba)."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. A Filosofia e o Comprimento Perfeito</h2>
          <p className="mb-6">
            O segredo mágico dos italianos está no <strong>comprimento e na textura</strong>. Diferente da "full beard" americana, que apara os fios longos para criar volume tridimensional no maxilar, a barba italiana aposta na proximidade da pele, criando um "sombreado pesado" e delineando brutalmente as linhas naturais do seu osso.
          </p>
          <p className="mb-6">
            Em vez de dezenas de centímetros, o tamanho ideal italiano paira <strong>entre os 3mm e os 7mm de altura</strong> (aquele clássico pente "2" da máquina). É o comprimento exato onde o pelo não enrola, mas é longo o suficiente para cobrir completamente a pele se você for muito denso, escondendo pequenas variações de pigmentação.
          </p>

          <div className="bg-brand-charcoal text-white p-6 rounded-2xl mb-10 shadow-lg border-l-4 border-brand-gold grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg text-brand-gold mb-2">✅ O Que Eles Fazem:</h4>
              <p className="text-sm">Limpar de forma absoluta a maçã do rosto, usando navalhete (shavette) para marcar uma diagonal reta ou levemente côncava da costeleta até o cantinho do bigode. Sem fiapos perdidos em volta dos olhos.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-red-400 mb-2">❌ O Que Eles NUNCA Fazem:</h4>
              <p className="text-sm">Deixar os pelos do pescoço avançarem pra saboneteira do peito ou emendar com a camisa social. A linha embaixo do maxilar é raspada como se a vida dependesse disso, evidenciando o gogó limpo.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. O Segredo do "Fade" Costeleta-Cabelo</h2>
          <p className="mb-6">
            Você já notou que um dos charmes desse visual é a harmonia inteira da cabeça? Em barbas italianas, a lateral do cabelo geralmente sofre um "degradê" (fade) que se encontra suavemente com a costeleta, e logo depois, a barba ganha força em cima do maxilar. Nada de cortes brutais onde termina o cabelo e do nada nasce a costeleta, como um bloco quadrado. Um bom pente de transição (tipo o número 1 na junção com a orelha e pulando para o número 2 em seguida) dá o acabamento sofisticado europeu!
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. O Seu Arsenal Milanez (Ferramentas Obrigatórias)</h2>
          <p className="mb-6">
            A má notícia é que esse visual perfeito de "acordei assim hoje" demanda uma manutenção rigorosa! Você é a tela e o escultor. Pelo menos <strong>a cada três dias</strong>, você precisa estar em frente ao seu espelho com seu arsenal:
          </p>

          <div className="space-y-6 my-10 pl-4">
            <div className="border-l-2 border-brand-gold pl-4 pb-2">
              <h4 className="font-bold text-brand-dark text-lg flex items-center gap-2">🟢 Máquina Trimmer Firme</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Você vai eleger um número (pente 4mm ou 5mm, por exemplo) e passá-lo em todo o perímetro do rosto para que literalmente não haja um único pelo maior que o outro. Uniformidade é a alma desse estilo.</p>
            </div>
            <div className="border-l-2 border-brand-gold pl-4 pb-2">
              <h4 className="font-bold text-brand-dark text-lg flex items-center gap-2">🟢 Navalhete / Gel de Barbear</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Não raspe seus contornos com espuma grossa que tira toda a sua visão. Use um Gel de barbear transparente ou óleo shaving. Você vai ver exatamente a linha que vai puxar o navalhete (ou lâmina afiada) sem errar nenhum milímetro nas bochechas ou pescoçobaixo.</p>
            </div>
            <div className="border-l-2 border-brand-gold pl-4">
              <h4 className="font-bold text-brand-dark text-lg flex items-center gap-2">🟢 Balm Efeito Seco (Soft Matte)</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Preste muita atenção agora. Um galã não passa aquele "óleo para barba de lenhador super brilhante" numa barba de 4 milímetros, senão vai parecer que ele comeu um frango assado e não limpou a boca. Como o pelo é ralo e rente ao rosto, usa-se <strong>Balm Seco com base hídrica ou Matte</strong>. Mantém aquele cheiro maravilhoso de perfumaria fina, hidrata a irritação pós-navalha sem gerar textura gordurosa engordurada na pele e nas cerdas.</p>
            </div>
          </div>

          <div className="bg-brand-dark text-brand-gold p-8 rounded-3xl mt-12 mb-6 text-center shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-4">A Assinatura do Estilo</h3>
            <p className="text-gray-300 font-light text-sm mb-4">
              A Barba Italiana grita ao mundo: "Eu presto muita atenção aos detalhes da minha imagem pessoal". E as pessoas percebem invariavelmente, nas entrelinhas, homens que andam sempre com essas marcações pontiagudas recém feitas e exalando asseio. 
            </p>
            <p className="text-gray-300 font-light text-sm">
              Você só precisa adquirir precisão no pulso. Coloque a disciplina dos 3 dias e arrase com os colarinhos abertos para o mundo ver sua fisionomia!
            </p>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O visual italiano de galã depende da cor da pele. Se você é muito pálido, a barba de 3 dias pode parecer 'suja'. O truque é usar um shampoo escurecedor leve apenas para dar contraste. No rosto italiano clássico, a barba deve ser uma sombra nítida, não apenas pelos perdidos."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'b-seco', name: "Balm Modelador Efeito Matte", desc: "Perfeito para domar pequenos pelos sem adicionar brilho indesejado de óleo.", link: AFF_BALM, icon: <Scissors size={32} /> }
      ]
    },
    'como-ter-barba-negra-intensa': {
      title: "Barba Negra Intensa: Como Escurecer Fios Claros ou Queimados de Sol",
      subtitle: "Seus fios estão ruivos, castanhos ou opacos? O guia definitivo para ter uma barba preta, densa e com volume visual sem parecer artificial.",
      author: "Carlos Barbudo",
      date: "11 de Março de 2026",
      readTime: "8 min",
      category: "Estilo",
      image: "/assets/barba-negra.webp",
      howToSteps: [
        { name: "Teste de Sensibilidade", text: "Aplique uma pequena quantidade do produto atrás da orelha e espere 24h." },
        { name: "Proteção da Pele", text: "Passe hidratante ou óleo em volta da bochecha para não manchar a pele." },
        { name: "Aplicação do Shampoo Escurecedor", text: "Aplique o produto com luvas, focando nas áreas mais claras." },
        { name: "Tempo de Pausa", text: "Deixe agir por exatos 5 a 10 minutos conforme a intensidade desejada." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Sabe aquele cara na rua com uma barba tão escura, densa e volumosa que parece que foi pintada à dedo? A verdade nua e crua é que: <strong>provavelmente, ela foi mesmo</strong>. 
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Existe um truque na moda masculina: o preto cria a ilusão de óptica imediata de profundidade e massa. Se a sua barba natural é castanha clara, avermelhada ou se as pontas estão completamente queimadas e amareladas por causa do sol da rua, ela automaticamente parece rala e transparente contra a luz. Escurecer o fio não é vergonha, é um recurso estético que os maiores barbeiros do mundo usam diariamente. Mas o grande problema é: como fazer isso sem ficar parecendo que você mergulhou o rosto na graxa de sapato brilhante?
          </p>

          <ToolBox 
            tools={[
              { name: "Shampoo Escurecedor Gradual", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Luvas de Vinil", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo Finalizador Brilho Intenso", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Defesa Anti-Mancha",
                description: "Antes de começar, aplique uma camada generosa de óleo de barba ou creme hidratante nas bochechas e pescoço (onde você não tem barba). Isso evita que a tinta manche sua pele.",
                tip: "Use um cotonete para passar o óleo exatamente no limite onde a barba termina."
              },
              {
                title: "O Shampoo Gradual (A Escolha Segura)",
                description: "Diferente da tinta, o shampoo escurecedor (como o Control GX) escurece apenas o fio e não a pele. Aplique com as mãos enluvadas como se estivesse lavando a barba.",
                tip: "Comece pelas áreas mais brancas ou claras e deixe por último as áreas que já são escuras."
              },
              {
                title: "O Tempo de Relógio",
                description: "Para um visual natural, deixe agir por apenas 5 minutos na primeira vez. Você pode repetir o processo no dia seguinte se quiser mais escuro.",
                tip: "Não ultrapasse 15 minutos ou o preto ficará azulado e com aspecto artificial."
              },
              {
                title: "Enxágue Abundante",
                description: "Lave com água corrente até que a água saia totalmente limpa. Use um shampoo neutro para remover qualquer resíduo químico da pele.",
                tip: "Use uma toalha velha ou escura para secar, pois pode haver um leve desbotamento inicial."
              },
              {
                title: "O Brilho do Aço",
                description: "A tintura tende a ressecar o fio. Aplique 4 gotas de óleo premium para devolver a vitalidade e o brilho natural ao novo tom escuro.",
                tip: "O brilho reflete a luz e esconde as áreas onde a barba é mais rala."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. A Regra do Cabelo (O Que NUNCA Fazer)</h2>
          <p className="mb-6">
            O primeiro impulso de todo homem é pegar a caixa de tinta capilar da esposa ou comprar a mais barata na farmácia, e passar aquele "Preto Azulado" no rosto todo. Esse é o caminho mais rápido para o arrependimento.
          </p>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-10 shadow-sm text-gray-700">
            <strong>Por que as Tinturas de Cabelo destróem a barba?</strong> <br/>
            Essas tinturas são carregadas em amônia pesada para penetrar no couro cabeludo, que é grosso. A pele do rosto, por outro lado, é absurdamente fina e vascularizada. Passar isso no maxilar vai causar queimadura química (reação alérgica forte), coceira infernal e um erro estético grotesco: <strong className="text-red-600">tinta de cabelo mancha a pele por dias</strong>. Você vai ficar com o contorno da bochecha pintado de preto fosco, artificial como um boneco!
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. As Duas Vias Para o Fundo Natural</h2>
          <p className="mb-6">
            Para conquistar a cobiçada "Barba Negra Intensa" e fechar furos e falhas usando o volume da cor, a indústria profissional desenvolveu métodos seguros e extremamente realistas para homens. Se você quer dominar o espelho, preste atenção nestas duas opções magistrais:
          </p>

          <div className="space-y-8 my-10">
            <div className="bg-white border-2 border-brand-charcoal/10 rounded-2xl p-6 shadow-md hover:border-brand-gold/50 transition duration-300">
              <h4 className="font-bold text-xl mb-3 text-brand-dark flex items-center gap-3">
                <span className="bg-brand-gold text-brand-dark rounded-full w-8 h-8 flex items-center justify-center font-black">1</span>
                Tintura Específica para Barba (Solução Imediata)
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                Criada sem amônia e com fórmula de penetração leve nas cerdas faciais. A aplicação é ridícula de tão fácil: como misturar pasta de dentes num potinho. Use um pincel para depositar apenas sobre o pelo, e deixe agir geralmente por apenas 5 a 10 minutos antes de lavar.<br/><br/>
                <strong className="text-brand-dark underline decoration-brand-gold underline-offset-4">O Segredo do Tom:</strong> Se sua barba e cabelo são pretos retintos, compre a cor <em>"Castanho Escuro"</em> para a barba! As cerdas puxam a cor muito rápido, e o castanho escuro vai criar um preto perfeitamente natural sem deixar aquele efeito de brilho falso e chapado do preto puro.
              </p>
            </div>

            <div className="bg-white border-2 border-brand-charcoal/10 rounded-2xl p-6 shadow-md hover:border-brand-gold/50 transition duration-300">
              <h4 className="font-bold text-xl mb-3 text-brand-dark flex items-center gap-3">
                <span className="bg-brand-gold text-brand-dark rounded-full w-8 h-8 flex items-center justify-center font-black">2</span>
                Shampoos Escurecedores (A Via Ninja e Progressiva)
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                Se você tem medo de pintar tudo de uma vez e quer uma mágica imperceptível, esse é o seu caminho. A tecnologia criou shampoos que liberam pigmentos que oxidam no contato com o ar a cada lavagem. Ou seja, você lida com a sua caspa e oleosidade normalmente e, sem perceber, no dia 7 a sua barba avermelhada vai estar chumbo e no dia 15, um negro carvão muito natural (sempre com o fundo mais leve na pele).  
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. O "Golpe Falso": Barboterapia com Henna</h2>
          <p className="mb-6">
            Você certamente já viu vídeos de barbearias árabes ou turcas com aqueles fades que parecem Photoshop. A maioria usa de uma técnica de <strong>Henna para Barba (mistura de Índigo natural)</strong>. A mágica da esteticidade da Henna é que, além de escurecer o fio intensamente, ela colore temporariamente a <em>pele</em> por uns 3 ou 5 dias formando uma sombra suave embaixo da barba rala de baixo na região.
          </p>
          <p className="mb-6">
            Para quem tem a bochecha caindo ou falta conexão com o bigode, aquele fundo escuro falso debaixo do pelo transforma, imediatamente, qualquer cara em um "Alfa do deserto". Essa manobra exige mão de artista; busque um barbeiro visagista renomado na sua região se quiser tentar para um evento formal!
          </p>

          <div className="bg-brand-dark text-brand-gold p-8 rounded-3xl mt-12 mb-6 text-center shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-4">A Luta Constante Contra o Sol Vivo</h3>
            <p className="text-gray-300 font-light text-sm mb-4">
              Não adianta investir dinheiro tingindo as cerdas se depois você for pilotar moto, dirigir ou caminhar todos os dias torrando a cara no sol brasileiro escaldante. Os <strong>Raios UV destroem o pigmento capilar</strong> (exatamente por isso que o seu pelo afina e queima nas pontas ficando ruivo nas beiradinhas).
            </p>
            <p className="text-gray-300 font-light text-sm">
              Mantenha no seu carro sempre um Balm com Protetor UV e aplique antes de bater no solzão, selando e cimentando toda essa cor escura fantástica por muito mais tempo.
            </p>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para um escurecimento de mestre, nunca use preto puro se você tiver mais de 30 anos. Use castanho escuro. O preto 'chapado' entrega que você pintou a barba a quilômetros de distância. O castanho escuro cria nuances de luz que parecem naturais até sob o sol do meio-dia."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 't-preta', name: "Shampoo Escurecedor Gradual", desc: "Use no banho para progressivamente oxidar tons claros rumo ao preto natural sem tingir a pele.", link: AFF_OIL, icon: <Droplets size={32} /> }
      ]
    },
    'barba-branca-cuidados-estilo': {
      title: "Barba Branca como a Neve: Como Evitar o Efeito Amarelado e Frizz",
      subtitle: "Esqueça o visual 'Papai Noel Descuidado'. Um homem com barba branca bem cuidada exige protocolo de hidratação intensa e pigmentação correta.",
      author: "Carlos Barbudo",
      date: "11 de Março de 2026",
      readTime: "9 min",
      category: "Dicas",
      image: "/assets/barba-curta.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Nada impõe tanto respeito e elegância – seja no trânsito, no trabalho ou em um jantar de gala – quanto uma enorme barba 100% branca encorpada, do tipo neve ou "Gandalf". Ela transmite sabedoria, experiência e diz imediatamente para as pessoas: <em>"Eu sei quem eu sou."</em>
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Porém, poucos sabem a verdade que existe nos bastidores: a barba branca é disparada a mais difícil de se cuidar. Ela possui uma estrutura física oca por causa da falta de pigmento natural, e adora puxar a sujeira invisível do ar que respiramos. É por isso que muitos homens perdem a guerra contra o "Efeito Fumaça" (aquele amarelado horrível ao redor da boca) e acabam raspando tudo. Mas nós não vamos deixar isso acontecer.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. O Grande Inimigo Oculto: Por Que Ela Amarela?</h2>
          <p className="mb-6">
            O fio branco é como uma camisa de algodão branca, pura e limpa, andando numa tempestade de areia. Como ele não tem melanina lá dentro, a estrutura dele é porosa. Ele literalmente "chupa" como uma esponja tudo o que toca. E as maiores tinturas invisíveis que mancham sua barba são:
          </p>
          <ul className="space-y-4 mb-10 pl-4 border-l-4 border-brand-gold">
            <li><strong className="text-brand-dark">A Fumaça do Cigarro:</strong> A nicotina deixa uma resina que cola direto no fio, tornando-o amarronzado instantaneamente na região do bigode.</li>
            <li><strong className="text-brand-dark">Oxidação ao Sol:</strong> Andar no sol queima as proteínas da cutícula do fio se ele não tiver com Balm bloqueador. A ponta fica "enferrujada".</li>
            <li><strong className="text-brand-dark">Água da sua Casa e Comida:</strong> A gordura nas beiradas da boca do churrasco, o café puro todos os dias, e até os minerais e cloro do chuveiro do banho encardem a barba.</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. O Antídoto: O Poder do "Matizador Roxo"</h2>
          <p className="mb-6">
            Lavar a barba branca com shampoo transparente do dia a dia não vai funcionar para tirar o amarelado. Pense nas aulas de artes na escola: a cor contrária do Amarelo no círculo cromático é o Roxo (ou violeta). Quando você mistura os dois... eles se neutralizam e sobram apenas o branco metálico e platinado maravilhosos.
          </p>
          <div className="bg-brand-charcoal text-brand-gold p-6 rounded-2xl mb-10 shadow-lg font-medium">
            <p><strong>A rotina mestra:</strong> Compre um Shampoo Matizador para Barbas prateadas (ele literalmente tem a espuma da cor da uva). Use <strong>no máximo</strong> a cada 10 a 15 dias. Lave no chuveiro massageando a raiz e deixe a espuma roxa espessa agir por uns 3 ou 5 minutos mágicos cronometrados. Ao lavar... a água leva a resina da cor amarela para o ralo. A barba brilha parecendo gelo!</p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. O Erro que 90% Comete: O Óleo Caramelo</h2>
          <p className="mb-6">
            Lembra que dissemos que o fio branco é uma esponja? Ele também é absurdamente mais grosso, espigado e seco ("frizz" puro), porque você não produz o sebo facial suficiente de quando era adolescente.
          </p>
          <p className="mb-6">
            Aí o que o nosso herói faz? Pega um vidro do óleo para barba mais famoso do mercado (O poderoso Óleo de Argan ou Castanhas) e encharca os fios brancos todos os dias pra tentar domar e pentear a rigidez. O problema é que <strong>Óleo de Argan é amarelo/caramelo escuro!</strong>
          </p>
          
          <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark font-black text-xs px-3 py-1 rounded-bl-xl uppercase tracking-widest">Regra de Prata</div>
            <h4 className="font-bold text-xl mb-3 text-brand-dark mt-2">Só Use Óleos 100% Incolores na Barba Branca!</h4>
            <p className="text-sm leading-relaxed text-gray-600">
              Passar óleos amarelos e escuros na barba branca vai tingi-la para um tom sujo e encardido de palha seca em questão de quatro semanas de uso contínuo (o famoso "encardido"). Substitua IMEDIATAMENTE os seus hidratantes espessos por Óleos 100% transparentes e incolores! Óleo de Menta pura, Extrato de Semente de Uva prensado a frio, Óleo clarificado de Jojoba ou ainda Balms super secos da cor branca. 
            </p>
          </div>

          <p className="mb-6">
            Faça essas duas trocas na sua vida (Shampoo roxo a cada quinzena e Óleo incolor todo dia após secar bem a umidade) e eu te garanto: as pessoas na rua começarão a perguntar qual produto você usa, enquanto a sua barba vira a assinatura absoluta de presença que você sempre mereceu!
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A barba branca amarela principalmente por causa do calor. Se você usa prancha ou secador muito quente para domar o frizz, você está 'fritando' a queratina. Use sempre protetor térmico e nunca passe de 160°C. O branco platinado é um cristal delicado, trate-o como tal."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'o-jojoba', name: "Óleo de Jojoba 100% Incolor", desc: "A hidratação que sua barba frizada branca precisa sem risco de amarelar os fios.", link: AFF_OIL, icon: <Sparkles size={32} /> }
      ]
    },
    'melhores-estilos-de-barba-curta': {
      title: "Estilos de Barba Curta: Elegância e Praticidade para Homens Modernos",
      subtitle: "Do Stubble de 3 dias ao Short Boxed Beard. Os melhores cortes para quem não quer perder horas de manutenção mas exige estar alinhado.",
      author: "Carlos Barbudo",
      date: "10 de Março de 2026",
      readTime: "11 min",
      category: "Estilo",
      image: "/assets/barba-curta.webp",
      howToSteps: [
        { name: "Escolha da Altura", text: "Defina o pente da máquina (geralmente entre 1 e 4) para uniformizar os fios." },
        { name: "Marcação de Pescoço", text: "Raspe tudo o que estiver abaixo de dois dedos do pomo de adão para definir a mandíbula." },
        { name: "Alinhamento de Bochecha", text: "Use uma lâmina para limpar os fios isolados acima da linha natural da barba." },
        { name: "Hidratação de Pele", text: "Aplique um pós-barba ou balm leve para evitar a coceira do fio curto." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Existe um mito gigante no mundo masculino de que "quanto maior a barba, mais trabalho ela dá". Na verdade, a realidade é o extremo oposto. Deixar uma barba crescer por um ano esconde a maioria das suas falhas, a assimetria do seu queixo e você só precisa se preocupar em lavar. 
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Mas a <strong>Barba Curta</strong>... ah, meu amigo! A barba curta é a vitrine da disciplina. É o estilo predileto dos diretores executivos americanos, advogados casuais e galãs de Hollywood como Ryan Reynolds e Chris Hemsworth. É a união definitiva entre o <em>"sou um cara rústico"</em> e o <em>"me importo extremamente com a minha higiene pessoal."</em>
          </p>

          <ToolBox 
            tools={[
              { name: "Aparador com Pentes de Ajuste", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Gel de Barbear Transparente", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Balm Calmante Pós-Barba", link: "https://mercadolivre.com/sec/28LNYBa" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Passagem da Máquina (Uniformidade)",
                description: "Passe a máquina no sentido contrário ao crescimento do pelo em todo o rosto. Para barba curta, a uniformidade é lei: um fio mais longo que o outro destrói o visual 'limpo'.",
                tip: "Passe a máquina também de lado para garantir que os pelos que crescem na transversal sejam cortados."
              },
              {
                title: "A Regra dos Dois Dedos (Pescoço)",
                description: "Coloque dois dedos acima do seu gogó. Tudo o que estiver abaixo dessa linha deve ser raspado com lâmina. Isso cria a ilusão de um maxilar muito mais forte.",
                tip: "Mantenha o pescoço esticado ao raspar para evitar irritação e cortes."
              },
              {
                title: "O Desenho das Bochechas (Natural High)",
                description: "Não desça muito a linha da bochecha. Apenas limpe os pelos isolados que crescem perto dos olhos. O visual 'natural mas cuidado' é a tendência.",
                tip: "Use o navalhete a seco se tiver habilidade, ou com gel para maior proteção."
              },
              {
                title: "Esfoliação Semanal",
                description: "Como o fio é curto, ele encrava com mais facilidade. Esfregue o rosto com um esfoliante uma vez por semana para remover células mortas e liberar os poros.",
                tip: "Isso também ajuda a barba a crescer mais rápido e com menos falhas visíveis."
              },
              {
                title: "Finalização Anti-Coceira",
                description: "Barba curta espetada pinica. Use um Balm líquido ou leve diariamente. Ele amolece a ponta do fio e evita que você queira raspar tudo por causa da irritação.",
                tip: "Aplique o balm logo após o banho, quando os poros estão abertos."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Matemática dos "Três Modelos Perfeitos"</h2>
          <p className="mb-6">
            Não basta simplesmente passar a máquina dois no rosto inteiro e ir trabalhar. Uma barba curta sedutora e elegante tem intencionalidade. As linhas precisam ser limpas e a altura dos pelos controlada (variando estritamente entre os 3 milímetros a 15 milímetros). Abaixo, eu destrincho os 3 estilos mágicos para você testar nessa semana.
          </p>

          <div className="space-y-10 my-10">
            <div className="bg-brand-charcoal text-white p-6 rounded-2xl shadow-lg border-l-8 border-brand-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-light text-brand-dark font-black text-xs px-3 py-1 rounded-bl-xl uppercase tracking-widest">+ Atraente Cientificamente</div>
              <h4 className="font-bold text-xl mb-3 text-brand-gold">1. The 5 O'Clock Stubble (A Barba de 3 Dias)</h4>
              <p className="text-sm leading-relaxed text-gray-300 mb-4">
                <em>Máquina: Pente 1 ou 2 (3mm a 5mm).</em>
              </p>
              <p className="text-sm leading-relaxed text-gray-300">
                Ganhou esse nome em alusão àquele sombreado que aparece no rosto de um homem às "5 da tarde" após ele ter barbeado pela manhã. Diversos estudos ao redor do globo cravam: <strong>este é o formato que as mulheres acham mais atraente</strong>.<br/><br/>
                Ele transmite a famosa "virilidade relaxada", o cafajeste do bem. Mas o grande <strong>truque de mestre</strong> dele é o contraste: por ser rala no rosto, a área do seu pescoço (da saboneteira até 2 dedos acima do gogó) precisa estar rapada intensamente com Gillette! Esse contraste da pele hiper lisa com os fios do queixo faz sua mandíbula explodir em definição visual.
              </p>
            </div>

            <div className="bg-white border-2 border-brand-charcoal/10 rounded-2xl p-6 shadow-md hover:border-brand-gold/50 transition duration-300">
              <h4 className="font-bold text-xl mb-3 text-brand-dark">2. The Short Boxed Beard (A Caixa Curta)</h4>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">
                <em>Máquina: Pente 3 ou 4 (10mm a 15mm).</em>
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Provavelmente a barba de negócios mais elegante do planeta hoje. A Short Boxed exige pelos mais comportados e densos. Ela se estende das costeletas e faz uma "caixa" (box) exatamente acompanhando as margens esquadradas da sua mandíbula natural. <br/><br/>
                <strong>Ideal para quem:</strong> Tem rosto Muito Redondo ou Oval e quer criar uma ilusão de "queixo do Batman". Tudo abaixo e acima da linha da caixa some. Os pelos devem estar milimetricamente da mesma altura e nenhum deles encosta no lábio superior.
              </p>
            </div>

            <div className="bg-white border-2 border-brand-charcoal/10 rounded-2xl p-6 shadow-md hover:border-brand-gold/50 transition duration-300">
              <h4 className="font-bold text-xl mb-3 text-brand-dark">3. The Corporate Beard Variação</h4>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">
                <em>Máquina: Degradê (15mm no queixo e 5mm nas bochechas).</em>
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Como o nome já diz, desenhada para o ambiente corporativo com calça social e camisa cara. É quase igual à Short Boxed, porém com um segredo: o barbeiro passa a máquina 1 na maçã do rosto, a máquina 2 no osso da mandíbula, e guarda o volume pesado pro bigode e pra ponta do queixo (degradê facial). Esse jogo de sombras cria respeito sem parecer um "roqueiro" na sala da diretoria.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Regra Oculta de Tratamento</h2>
          <p className="mb-6">
            Com barbas ralas de 3mm a 15mm, a luz passa facilmente entre os fios revelando qualquer defeito que você tenha no rosto lá debaixo. Isso significa que caspa vira os "flócos de neve" do vexame instantâneo. 
          </p>

          <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-red-500 mb-10 shadow-sm text-gray-700 italic">
            "Jamais sature um rosto com 'Stubble' (barba de 3 dias) em óleo espesso. Você vai ficar entupido de espinhas! A barba curta precisa tratar primeiramente o rosto, e secundariamente os fios!"
          </div>

          <p className="mb-6">
            Troque os cosméticos densos por <strong>Balms de toque seco/cítrico</strong> (aqueles à base de água ou cera leve). Eles contam com refrescância (ajudando a alergia da Gillette no pescoço), perfumam maravilhosamente bem com amadeirados leves, mas desaparecem na pele em 15 segundos prevenindo a caspa, sem você parecer que atolou o rosto na graxa no meio do escritório.
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para quem tem barba curta, o maior inimigo é a foliculite. Se você tem bolinhas vermelhas no pescoço, pare de usar lâminas de 3 ou 5 cortes. Use uma Safety Razor (aparelho clássico) com apenas uma lâmina. Menos passadas significam menos trauma, e uma barba curta com a pele limpa é o auge da elegância."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'o-jojoba', name: "Óleo de Jojoba 100% Incolor", desc: "A hidratação que sua barba frizada branca precisa sem risco de amarelar os fios.", link: AFF_OIL, icon: <Sparkles size={32} /> }
      ]
    },

    'como-fazer-barba-degrade-fade': {
      title: "Barba Degradê (Fade Blend): O Visual Mais Pedido nas Barbearias em 2026",
      subtitle: "O guia de mestre para criar a transição perfeita entre o cabelo raspado lateralmente e o volume inferior da sua barba. Não erre a máquina.",
      author: "Carlos Barbudo",
      date: "10 de Março de 2026",
      readTime: "10 min",
      category: "Tendências",
      image: "/assets/barba-degrade.webp",
      howToSteps: [
        { name: "A Linha Base", text: "Marque a linha base com o pente 1 alavanca fechada." },
        { name: "Transição Média", text: "Use o pente 2 alavanca aberta para suavizar o topo." },
        { name: "Remoção de Linhas", text: "Use o pente 1.5 alavanca média para apagar a marcação." },
        { name: "Acabamento de Pele", text: "Use a máquina zero alavanca aberta no topo da costeleta." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Seja em um escritório corporativo em São Paulo, nas ruas do Brooklyn ou nos cafés de Tóquio, se você observar os homens com as barbas mais impecáveis de 2026, todos eles têm um detalhe em comum: a lateral do rosto.
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Acabou a era da "Barba Bloco" – aquela costeleta quadrada e grossa que emenda brutalmente com o cabelo curto criando uma parede reta no seu rosto. O estilo absoluto que domina as melhores barbearias do mundo se chama <strong>Barba Degradê (ou Fade Blend)</strong>. É a arte mágica de derreter a pele quase lisa na altura da orelha até uma barba cheia, rústica e volumosa no maxilar. Parece fumaça se transformando em pelos.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina Profissional com Alavanca", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Pentes de Meio (0.5 e 1.5)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Escova de Limpeza (Espanador)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo Finalizador", link: "https://mercadolivre.com/sec/2Wo6ZWc" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Linha Base (O Marco Zero)",
                description: "Com o pente 1 da sua máquina e a alavanca totalmente FECHADA, limpe a área da costeleta até dois dedos acima do osso da mandíbula. Não suba demais.",
                tip: "Use movimentos curtos de 'C-stroke' (em formato de C) para não criar uma linha dura difícil de tirar depois."
              },
              {
                title: "O Pente de Segurança",
                description: "Troque para o pente 2 (alavanca aberta) e limpe a transição entre a barba média e o topo da bochecha. Isso garante que você não vai 'buracar' a barba.",
                tip: "Mantenha a máquina reta, não acompanhe as curvas do rosto com muita força."
              },
              {
                title: "O Ataque ao Degrau",
                description: "Agora vem o segredo: Use o pente 1.5 com a alavanca na METADE. Passe exatamente em cima da linha que sobrou entre o pente 1 e o pente 2.",
                tip: "Se a linha persistir, use apenas as 'quinas' da lâmina (os últimos 3 dentes)."
              },
              {
                title: "Zerar a Orelha",
                description: "Sem nenhum pente, com a alavanca totalmente ABERTA, limpe apenas o topo da costeleta, onde ela encontra o cabelo raspado.",
                tip: "Isso cria o efeito 'pele' que dá o contraste profissional."
              },
              {
                title: "Finalização e Brilho",
                description: "Penteie tudo para baixo com um pente de madeira e aplique 3 gotas de óleo para selar as cutículas que foram irritadas pela máquina.",
                tip: "Use uma escova de cerdas de javali para 'assentar' os fios teimosos."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Por Que Todo Mundo Está Fazendo Isso?</h2>
          <p className="mb-6">
            A resposta é Visagismo puro! Quando você esfuma a costeleta, você obriga quem está olhando a focar o peso visual todo no seu queixo e no seu bigode. Isso cria instantaneamente a ilusão de que o seu rosto é super quadrado, magro e forte.
          </p>

          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-12 shadow-xl border-l-8 border-brand-gold">
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">A Escada Perfeita</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-brand-gold text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">A Zero Absoluta</h4>
                  <p className="text-sm text-gray-300">Comece alinhando o "Skin Fade" do seu cabelo. Passe a Máquina Zero nua (sem pente) na exata altura de onde o lóbulo da orelha começa. Esse é o ponto de "pele limpa".</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-brand-gold text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Pente "Meio" (0.5)</h4>
                  <p className="text-sm text-gray-300">Desça meio centímetro em direção à barba. Use a alavanca da máquina fechada para fazer a primeira "sombra" sair da pele.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-brand-gold text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">A Escadaria Suave</h4>
                  <p className="text-sm text-gray-300">Agora a técnica ganha ritmo. Desça mais um centímetro e aplique o Pente "1". Desça mais um centímetro e aplique o "1.5" ... E vá descendo até encostar no grande volume natural da barba do seu maxilar (que talvez esteja no tamanho da máquina "3" ou "4" ou até na tesoura se for imensa).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-brand-gold text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0 mt-1">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Escovinha do Mestre (Fade Brush)</h4>
                  <p className="text-sm text-gray-300">O segredo que separa o amador do barbeiro. Entre a troca de CADA PENTE na máquina, pegue uma escovinha de cerdas duras de javali e escove todo o pelo ferozmente para baixo. O pelo "armado" vai baixar e você nunca vai criar "degraus" (linhas marcadas horizontais feias no meio do rosto).</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. Como Segurar a Obra de Arte</h2>
          <p className="mb-6">
            Esse degrade lindo e fumegante nas laterais repousa sob cerdas de barba... e a barba acorda todos os dias amassada com o travesseiro. Aquele efeito deslumbrante pode amassar e os pelos do tamanho da máquina "2" arrepiam, fazendo você parecer um palhaço bozo, se você não os domar de manhã.
          </p>
          <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/10 text-brand-dark italic mb-8">
            <strong className="block text-xl mb-2 font-bold not-italic">O Truque da Pomada Mate:</strong>
            "Pegue um pinguinho de Pomada de Cabelo Mate (Efeito Seco) ou cera de bigode pesada, esfregue nos dedos até ficar quente, e pressione suavemente apenas as costeletas e bochechas apontando elas pra baixo! Essa selagem amassa as laterais contra a pele. Elas não repuxarão independentemente do vento ou do Sol, mantendo aquele ângulo V perfeito o dia inteiro."
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O segredo do degradê não está na máquina, mas no espelho. Nunca tente fazer o fade olhando apenas de frente; use um segundo espelho de mão para enxergar a lateral em 45 graus. É nesse ângulo que as sombras 'mentem' e onde você precisa de precisão cirúrgica."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 't-will', name: "Kit Pentes Fade Preciso", desc: "Tesoura de precisão em pente fino para transições laterais magistrais.", link: AFF_TESOURA, icon: <Scissors size={32} /> }
      ]
    },
    'barba-balbo-estilo-homem-de-ferro': {
      title: "A Barba Balbo: O Visual do Tony Stark que Salva Rostos Redondos",
      subtitle: "Sem costeletas, ênfase no queixo duplo e bigode flutuante. Por que esse estilo descolado é o melhor amigo de quem tem o maxilar recuado.",
      author: "Carlos Barbudo",
      date: "10 de Março de 2026",
      readTime: "9 min",
      category: "Estilo",
      image: "/assets/barba-balbo.webp",
      howToSteps: [
        { name: "Remoção de Costeletas", text: "Raspe totalmente as costeletas e a parte superior das bochechas." },
        { name: "Desenho da Âncora", text: "Modele a barba no queixo em formato de âncora ou W." },
        { name: "Desconexão do Bigode", text: "Raspe a conexão entre o bigode e a barba lateral." },
        { name: "Ajuste da Mosca", text: "Apare o soul patch (mosca) para que fique centralizado e limpo." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se você perguntar a 10 barbeiros qual personagem de cinema trouxe mais homens correndo para as cadeiras de barbearia na última década, todos eles vão responder em coro: <strong>Tony Stark (Homem de Ferro)</strong>.
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            O Robert Downey Jr. pegou um estilo italiano milenar quase esquecido, a <strong>Barba Balbo</strong>, e a transformou no símbolo máximo do "Gênio, Bilionário, Playboy e Filantropo". Mas a verdade é que Hollywood não escolheu esse corte à toa: o Balbo tem um poder arquitetônico oculto de salvar o rosto de 90% dos homens comuns.
          </p>

          <ToolBox 
            tools={[
              { name: "Navalhete de Precisão", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shaving Gel Transparente", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Aparador de Pelos Nariz/Detalhe", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Grande Limpeza (Zerar Bochechas)",
                description: "O Balbo não tem costeletas. Use sua máquina no zero para remover todo o pelo da bochecha e as costeletas, descendo até a linha do maxilar.",
                tip: "Imagine uma linha reta que vai do topo da orelha até o canto da boca. Tudo acima disso deve sumir."
              },
              {
                title: "A Desconexão Vital",
                description: "Aqui é onde muitos erram: você deve raspar a conexão entre o bigode e a barba do queixo. Use o navalhete para criar um espaço de 1cm de pele lisa.",
                tip: "Isso é o que dá o visual 'Tony Stark'. Se eles se tocam, vira um cavanhaque comum."
              },
              {
                title: "Esculpindo a Âncora",
                description: "No queixo, deixe a barba em formato de 'W' ou âncora. A largura não deve passar da linha das pupilas dos seus olhos.",
                tip: "Mantenha a base do queixo um pouco mais cheia para dar volume frontal."
              },
              {
                title: "O Soul Patch (A Mosca)",
                description: "Apare o pelo exatamente abaixo do lábio inferior. Ele deve ter o formato de um triângulo invertido apontando para baixo.",
                tip: "Limpe bem as laterais da mosca para que ela pareça 'flutuar' no centro."
              },
              {
                title: "O Bigode Chevron",
                description: "O bigode deve ser robusto mas não pode cobrir o lábio. Use a tesoura para alinhar a base e deixe as pontas levemente inclinadas para baixo.",
                tip: "Use um pouco de cera de bigode para manter as pontas no lugar o dia todo."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Aviso: A Manutenção de Titânio</h2>
          <p className="mb-6">
            A Barba Balbo é magnífica, extremamente sedutora e mostra para as mulheres que você é criativo e muito confiante (pois foge do padrão homem-lenhador comum). Porém, eu serei cruelmente honesto com você: ela dá <strong>trabalho</strong>.
          </p>
          
          <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-10 shadow-sm text-gray-700 italic">
            "No momento em que o espaço vazio de pele nua (meio centímetro) entre o topo do queixo e o bigode enche de penugem, o Balbo perde todo o apelo de Engenheiro Ricasso e você volta a parecer um adolescente preguiçoso com um cavanhaque sujo de três semanas."
          </div>

          <p className="mb-6">
            Se você for adotar o estilo Tony Stark, terá que jogar fora qualquer Espuma de Barbear branca ou creme denso! Aquilo esconde tudo. Você precisa comprar hoje mesmo um <strong>Gel Shaving Transparente</strong> ou um Óleo de Barbear cristalino. Assim, com uma gillette ou navalhete em mãos a cada 48 horas, você verá <em>exatamente</em> o vão da lateral da boca e a quina do queixo onde a lâmina precisa passar, preservando as linhas da obra de arte em 2 minutos!
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Balbo é um estilo de 'manutenção de 48 horas'. Se você deixar passar 3 dias sem passar a lâmina no vão entre o bigode e o queixo, o visual vira um desleixo. Mantenha esse espaço limpo como um vidro de laboratório para manter a aura de bilionário."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'b-seco', name: "Gel de Barbear Transparente", desc: "Mande embora a espuma branca grossa para poder enxergar a risca que deverá cortar na lâmina diariamente.", link: AFF_BALM, icon: <Eye size={32} /> }
      ]
    },
    'barba-lenhador-guia-completo': {
      title: "Barba Lenhador (Lumberjack): Como Deixar o Fio Longo e Resistente",
      subtitle: "Volume agressivo não significa falta de higiene. Como superar as fases da coceira e moldar uma barba cheia de respeito que não perde a assimetria.",
      author: "Carlos Barbudo",
      date: "09 de Março de 2026",
      readTime: "14 min",
      category: "Estilo",
      image: "/assets/barba-lenhador.webp",
      howToSteps: [
        { name: "Crescimento Base", text: "Deixe a barba crescer por pelo menos 3 meses sem interrupções." },
        { name: "Alinhamento de Pescoço", text: "Limpe a área do pescoço mantendo a linha dois dedos acima do gogó." },
        { name: "Controle de Volume", text: "Use um balm para baixar os fios arrepiados e dar peso à barba." },
        { name: "Escovação Diária", text: "Escove a barba para baixo para treinar os fios e remover células mortas." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Seja muito honesto: toda vez que você vê um homem com uma daquelas barbas monumentais, quadradas e majestosas batendo no peito, você o respeita instantaneamente, não é? Aquele é o famoso <strong>Estilo Lenhador (Lumberjack)</strong>. 
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Estar diante de um Lenhador raiz não é apenas ver um estilo de rosto, é ver <strong>meses de paciência estoica</strong>. É por isso que, psicologicamente, esse modelo facial transmite "força inabalável" e "proteção" às mulheres e parceiros de negócios. Mas para você construir uma muralha dessa, não basta só jogar a lâmina no lixo e esquecer. Se você fizer isso, vai virar o "mendigo" da vizinhança.
          </p>

          <ToolBox 
            tools={[
              { name: "Escova de Cerdas Naturais", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Balm Modelador de Fixação Média", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo para Barba de Limpeza Profunda", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Fase da Paciência (Mês 1 a 3)",
                description: "Não encoste na máquina. Deixe a barba crescer livremente. Se a coceira bater, use óleo de barba diariamente para hidratar a pele.",
                tip: "Resista à vontade de aparar 'só as pontinhas' nas primeiras 4 semanas."
              },
              {
                title: "A Linha de Segurança do Pescoço",
                description: "Coloque dois dedos acima do seu 'gogó' (pomo de adão). Tudo abaixo dessa linha deve ser raspado para dar um aspecto limpo ao visual rústico.",
                tip: "Faça um formato de 'U' conectando as duas mandíbulas."
              },
              {
                title: "O Penteado de Domesticação",
                description: "Use uma escova de cerdas firmes para escovar a barba para baixo todos os dias após o banho. Isso 'treina' o folículo a crescer na direção certa.",
                tip: "Use um secador no modo morno enquanto escova para tirar o volume excessivo das laterais."
              },
              {
                title: "Contorno da Bochecha (High Line)",
                description: "No estilo lenhador, mantemos a linha da bochecha mais alta e natural. Apenas limpe os pelos isolados que crescem muito perto dos olhos.",
                tip: "Use um navalhete para manter essa linha sempre nítida."
              },
              {
                title: "Nutrição e Peso",
                description: "Uma barba longa é pesada. Use Balm para dar estrutura e evitar que ela fique parecendo uma 'nuvem' ou 'esponja' desordenada.",
                tip: "Aplique o balm com a barba levemente úmida para melhor absorção."
              }
            ]}
          />

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Verdade Sobre o Estilo Lenhador</h2>
          
          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-10 border-l-8 border-brand-gold shadow-lg relative">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">🛡️ Como Sobreviver a Esta Fase</h3>
            <p className="text-gray-300 leading-relaxed">
              Resista à tesoura! A sua única salvação nessa fase é usar <strong>Balms de Hidratação Profunda</strong> (para matar a coceira do pescoço) e portar sempre no bolso um <strong>Pente de Madeira de Lei</strong>. Diferente do plástico que arrepia e quebra os fios por energia estática, a madeira disciplina o pelo a criar "peso magnético" apontando para baixo e distribuindo uniformemente os óleos do rosto.
            </p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. O Triângulo de Ouro do Visagismo</h2>
          <p className="mb-6">
            O Lumberjack sedutor não é uma touceira redonda. Ele tem arquitetura! Uma barba de alto nível vira um "V" ou um quadrado de bordas fortes no queixo. Como criar isso?
          </p>
          <ul className="space-y-4 mb-10 pl-4 border-l-4 border-brand-gold">
            <li><strong className="text-brand-dark">Laterais "Chapadas":</strong> Você ou o seu barbeiro precisam pegar a tesoura ou a máquina (num pente alto como o 8) e tirar 100% do volume da bochecha (perto do lóbulo da orelha), descendo retinho. Isso deixa a lateral do seu rosto fina, matando o seu "rosto de trakinas".</li>
            <li><strong className="text-brand-dark">A Cortina Frontal Livre:</strong> Todo volume repousa do cavanhaque para baixo! Quando olhar de perfil, a lateral será lisa e rente ao maxilar, caindo até uma cortina de 10 centímetros de majestade puramente no queixo e maxilar inferior.</li>
            <li><strong className="text-brand-dark">A Cerca do Lábio:</strong> O bigode Lenhador é denso. Porém, ele nunca devora sua boca inteira. Mantenha os fios a um ou dois milímetros acima do lábio superior usando uma tesourinha na própria pia do banheiro semanalmente, para você não tragar seus próprios pelos tomando um café ou uma cerveja!</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. O Combate Contra as "Pontas-de-Palha" Duplas</h2>
          <p className="mb-6">
            À medida que sua barba atinge os ansiados 10, 15, ou até 20 centímetros no peito (estilo Viking), entra a física dura: <strong>A raiz não tem força para mandar o óleo natural que se produz na pele lá para as pontas da barba abaixo do queixo!</strong> 
          </p>
          <p className="mb-6">
            Resultado? Fios duplos, ressecados, estourados e que quebram à toa no travesseiro com Frizz incontrolável.
          </p>

          <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/20 text-brand-dark italic mb-8 shadow-sm">
            <strong className="block text-xl mb-2 font-bold not-italic">O Ritual Lenhador Real:</strong>
            "Se você quer um chassi brilhante, forte e espesso de dar inveja, seu ritual matinal de ouro é: Ao sair do banho e secar a barba com a toalha (ainda levemente úmida), passe de 6 a 10 gotas de um Óleo Botânico Puro (Argan, Menta, Rícino). Com o secador num ar morno apontado de cima para baixo e usando uma Escova Cilíndrica (ou de javali dura), estique essa fortaleza inteira para baixo massageando o óleo."
          </div>
          <p className="mb-6 text-gray-700 leading-relaxed font-medium">
            Pronto! A coceira vai sumir, os fios descerão feito uma cortina de peso, o aroma amadeirado do óleo vai fazer todos na rua te olharem com respeito, e a sua barba acaba de se transformar na armadura diária do seu caráter.
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para o Lenhador, o secador é mais importante que a tesoura. Nunca saia de casa com a barba longa secando ao vento; ela vai armar e ficar com aspecto de palha. Use o ar morno e uma escova de javali para 'derreter' o volume contra o seu peito."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'w-pente', name: "Escova de Cerdas de Javali Originais", desc: "Escova dura que redireciona folículos e limpa a pele muito abaixo do lenhador.", link: AFF_OIL, icon: <Droplets size={32} /> },
        { id: 'v-factor', name: "Tônico de Força e Volume", desc: "Cimentos vitamínicos proteicos para garantir fios pesados ​​que não encolhem fácil.", link: AFF_VIKING, icon: <Trophy size={32} /> }
      ]
    },
    'estilo-de-barba-tendencias-2026': {
      title: "Estilo de Barba: As 6 Maiores Tendências que Vão Dominar 2026",
      subtitle: "Do Classic Chevron ao 'Messy Beard'. O manual do que está em alta no grooming global e como escolher o estilo ideal para a sua rotina e personalidade.",
      author: "Carlos Barbudo",
      date: "09 de Março de 2026",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/visagismo-rostos.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se você acha que o mundo da moda masculina dorme no ponto militar, você pestanejou e perdeu a revolução. A década de 2020 começou com o domínio quase unânime da barba lenhador viking, mas agora que batemos na porta de <strong>2026</strong>, a barbearia de elite mudou o jogo de novo.
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            A palavra de ordem este ano é <strong>"Intencionalidade"</strong>. Não importa se a sua barba tem 1 milímetro ou 10 centímetros de comprimento, ela precisa parecer que foi esculpida com um propósito cirúrgico. Acabou a era do "deixei crescer e não fiz nada". Preparado para atualizar seu estilo e colher todos os olhares (e elogios)? Aqui estão as 6 Maiores Tendências Globais de Grooming Masculino:
          </p>

          <div className="space-y-12 my-12">
            
            {/* Tendência 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden group hover:border-brand-gold transition-colors duration-300">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark px-4 py-1 rounded-bl-3xl font-bold font-serif shadow-sm">#1</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-dark">A Sombra Pesada ("Heavy Stubble")</h3>
              <p className="text-gray-700 leading-relaxed">
                Esqueça o rosto totalmente limpo e também a barba grande. O <strong>Heavy Stubble</strong> é a famosa "Barba por fazer de 7 dias" em estado de perfeição. O truque psicológico dessa tendência é fazer você parecer o superastro de Hollywood de folga: perigosamente rústico, mas incrivelmente limpo. A lâmina do pescoço é muito bem desenhada, mas a bochecha não ganha linhas agressivas, passando a imagem mental de "eu naturalmente acordo lindo assim". Exige máquina de aparar com pente "2" ou "3" a cada três dias!
              </p>
            </div>

            {/* Tendência 2 */}
            <div className="bg-brand-charcoal p-8 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden group transition-colors duration-300">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark px-4 py-1 rounded-bl-3xl font-bold font-serif shadow-sm">#2</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">O Moustache "Handlebar" Isolado</h3>
              <p className="text-gray-300 leading-relaxed">
                Bigode deixou de ser piada do passado. A explosão da moda "Old Money" e Vintage trouxe o bigode europeu forte de volta ao ápice. <strong>Mas atenção:</strong> sem barba no rosto! O queixo é liso na gillette. A estrela do show é um bigodão denso que ultrapassa levemente o lábio (Classic Chevron à la Tom Selleck), que ganha asas curtas torcidas nas pontas pela manhã com uma pinguinho de cera modeladora. Demonstra uma autoconfiança colossal do homem que o usa.
              </p>
            </div>

            {/* Tendência 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden group hover:border-brand-gold transition-colors duration-300">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark px-4 py-1 rounded-bl-3xl font-bold font-serif shadow-sm">#3</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-dark">Degradê Lateral com Contorno Suave (Soft Fade)</h3>
              <p className="text-gray-700 leading-relaxed">
                As "barbas em formato de tijolo" (costeleta grossa quadrada emendando violentamente num cabelo curto) estão mortas. A febre de 2026 é o <strong>Degradê</strong>. A costeleta é raspada quase na Zero e vem ganhando cor como fumaça, descendo até um maxilar cheio e imponente. A grande sutilidade deste ano é não deixar a linha da bochecha marcada feito tinta de grafite, permitindo que os pelos da bochecha cresçam meio milímetro num "fade invisível" rumo aos olhos. Disfarça rostos redondos de forma fenomenal!
              </p>
            </div>

            {/* Tendência 4 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden group hover:border-brand-gold transition-colors duration-300">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark px-4 py-1 rounded-bl-3xl font-bold font-serif shadow-sm">#4</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-dark">A Ducktail Amendoada (Bico de Pato Curto)</h3>
              <p className="text-gray-700 leading-relaxed">
                Esqueça aquela ponta aguda no fundo do queixo que ameaçava furar o peito. A clássica barba <strong>Ducktail</strong> evoluiu. O excesso imenso das laterais da bochecha continua sendo aparado verticalmente em linha reta, mas a ponta inferiro ganhou um formato muito sofisticado em arco, parecendo uma letra "U" amendoada. Fica absurdamente simétrica e elegante com golas rulê e camisas sociais, vestindo o homem em classe pura.
              </p>
            </div>

            {/* Tendência 5 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden group hover:border-brand-gold transition-colors duration-300">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark px-4 py-1 rounded-bl-3xl font-bold font-serif shadow-sm">#5</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-dark">A Barba "Bagunçada" Arquiteta (Messy Groomed)</h3>
              <p className="text-gray-700 leading-relaxed">
                O "Oposto da Morte" da barba super engomada de barbeiro é a <strong>Messy Beard</strong>, mas entenda o detalhe mágico: <em>Ela não é bagunçada (hobo).</em> O lenhador urbano não penteia o fio de forma lisa como seda, em vez disso, ele usa pentes de dentes gigantes para amontoar texturas foscas e rústicas, usando pomadas Dry-Mate. O pescoço é rigidamente limpo a cada 2 dias na Navalha, gerando um contraste fascinante entre os "fios selvagens em cima" e a "pele clínica e polida contornando". Exige cuidado diuturno por trás dos bastidores.
              </p>
            </div>

            {/* Tendência 6 */}
            <div className="bg-brand-light p-8 rounded-3xl border-2 border-brand-gold/30 shadow-lg relative overflow-hidden group transition-colors duration-300">
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark px-4 py-1 rounded-bl-3xl font-bold font-serif shadow-sm">#6</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-dark">O Rosto de Vidro ("Quiet Luxury" Shave)</h3>
                  <p className="text-gray-800 leading-relaxed italic">
                A maior surpresa do cenário europeu de alta-renda de 2026: a elite financeira resgatou a estrita face <strong>Navalhada Meticulosa!</strong> O famoso Skin Care invadiu os banheiros com voracidade. Essa não é apenas a remoção da barba — é uma remoção sagrada com toalhas fumegantes e hidratantes intensos que transformam o rosto numa tela de espelho brilhante. Não ostenta fios, mas sinaliza saúde dérmica brutal de "Stealth Wealth" (A Riqueza Silenciosa). É uma opção poderosa se você tiver o "Queixo Duplo" naturalmente forte escondido por baixo!
              </p>
            </div>

          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Em 2026, a tendência não é o comprimento, é a textura. Se você quer estar à frente, invista em pomadas de efeito matte (seco). O brilho molhado do gel ficou no passado; o luxo silencioso agora é o pelo que parece natural, mas está milimetricamente controlado."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 't-will', name: "Tesoura de Titânio Dourado", desc: "A única maneira de abraçar as tendências de Bigodes complexos como Chevron ou Handlebar do ano.", link: AFF_TESOURA, icon: <Scissors size={32} /> }
      ]
    },
    'modelos-de-barba-classicos-e-modernos': {
      title: "Qual o Modelo de Barba Perfeito para o Seu Ambiente de Trabalho?",
      subtitle: "Nem toda barba se encaixa no código corporativo. Conheça 5 modelos clássicos, do Bandholz ao Garibaldi, e onde eles se adaptam melhor.",
      author: "Carlos Barbudo",
      date: "08 de Março de 2026",
      readTime: "10 min",
      category: "Cultura",
      image: "/assets/mitos-crescimento.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Nós gostamos de acreditar que a expressão pessoal na estética rompeu todas as fronteiras do conservadorismo corporativo (aquele antigo "mar de homens de rosto raspado e terno cinza" dos anos 80). Em grande parte, as leis mudaram a favor do pelo facial. Você raramente será demitido por <em>ter</em> barba.
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Mas, na prática nua e crua das disputas de salários e promoções: <strong>ser tolerado é diferente de ser promovido.</strong> A sua barba dita uma "frequência psicológica" para a mesa do RH e para o conselho da empresa antes mesmo de você abrir a boca na reunião de segunda-feira.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Regra da "Eficácia Subliminar"</h2>
          <p className="mb-6">
            Pense comigo: se a sua barba estiver desalinhada, com pelos voando em todas as direções, cobrindo seu lábio e a linha do pescoço emendando com o peito... qual é a mensagem biológica primária que o cérebro do seu chefe capta inconscientemente? 
          </p>
          <p className="mb-6">
            A mensagem é: <i>"Esse cara não consegue nem governar o próprio rosto de manhã com disciplina. Como eu vou entregar o controle de um balanço financeiro de R$ 5 milhões na mão dele?"</i>
          </p>

          <div className="space-y-12 my-12">
            
            {/* O Setor Tradicional */}
            <div className="bg-brand-charcoal text-white rounded-3xl p-8 border-l-8 border-brand-gold shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">⚖️ O Corporate Beard (Para Direito, Bancos e Alta Gestão)</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você trabalha processando contratos, lidando com o dinheiro dos outros ou no conselho fiscal, a <strong>Corporate Beard (Barba Corporativa Curta)</strong> é a sua única armadura segura.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ela tem cerca de meio a um centímetro de altura constante (Máquina 3). A linha da bochecha parece ter sido cortada a laser (alta geometria) e o pescoço é religiosamente raspado na navalha logo acima do gogó.
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                <li><strong>O que Comunica:</strong> "Eu sou minucioso, analítico, detalhista e respeito as regras do jogo."</li>
                <li><strong>O Perigo Mortal:</strong> Se você relaxar na lâmina do pescoço por dois dias, o visual de "banqueiro alinhado" vira "analista que virou a noite trabalhando e está cheirando a café velho".</li>
              </ul>
            </div>

            {/* O Setor Criativo/Tech */}
            <div className="bg-white text-brand-dark rounded-3xl p-8 border border-gray-200 shadow-lg relative group transition-colors duration-300 hover:border-brand-gold">
              <h3 className="text-2xl font-serif font-bold mb-4">🎨 O Bandholz & Lenhador Trimmado (Tech, Marketing e Design)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você é Desenvolvedor Full-Stack Sênior? Diretor de Arte? Arquiteto? Nesses ambientes, o "quadradinho perfeitinho do banco" joga contra você. Ambientes de alta criatividade cobram que o seu visual mostre rebeldia controlada e inovação. O volume é liberado!
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aqui entra o Bandholz (barbas imensas, arredondadas ou quadradas). Mas a regra de ouro se mantém: <strong>Volume não é falta de higiene.</strong> 
              </p>
              <ul className="list-disc pl-5 text-gray-500 space-y-2">
                <li><strong>O que Comunica:</strong> "Eu sou um mestre veterano no meu ofício. Tenho ideias próprias, senioridade e confiança inabalável."</li>
                <li><strong>O Perigo Mortal:</strong> O "Garibaldi" (volume solto arredondado) ganha muito poder desde que o bigode seja aparado milimetricamente para jamais tocar o café do escritório, e que a barba reluza hidratada. Se o fio estiver ressecado e caindo cinzas de cigarro ou bolachas no teclado... é rua!</li>
              </ul>
            </div>

          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O "Cheiro de Promoção" (Sândalo e Couro)</h2>
          <p className="mb-6">
            Poucos homens sabem usar isso: o olfato corporativo. Quando você entra no elevador do loby e as portas se fecham, ou quando você senta perto da mesa do seu diretor na reunião apertada... a sua barba está evaporando aromas que você exala pelo calor do próprio rosto.
          </p>
          <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/10 text-brand-dark italic mb-8">
            <strong className="block text-xl mb-2 font-bold not-italic">O Truque do Balm Seco:</strong>
            "Se você quer inspirar confiança madura e liderança no trabalho, evite pomadas de cheiro doce (baunilha ou tutti-frutti de barbearia de bairro, que passam ideia de infantilidade). Antes de vestir o paletó, sele os fios da barba com um Balm Seco de notas madeiras ricas, como Sândalo, Carvalho ou Cedro. Esses aromas disparam os mesmos gatilhos neurológicos de 'móveis caros' e 'bibliotecas antigas', injetando um ar de autoridade subconsciente massiva em tudo que você disser na sala de reuniões."
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No mundo corporativo, o cheiro da sua barba é o seu cartão de visitas silencioso. Evite óleos com cheiro de baunilha ou doces. Vá de Sândalo ou Cedro; esses aromas evocam maturidade e solidez, exatamente o que um líder precisa transmitir."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'b-seco', name: "Sérum Alinhador Fio Corporal Rápido", desc: "Aplique dois minutos antes dos elevadores do lobby e nunca pise na sala de reuniões desprotegido de desordem dos fios.", link: AFF_BALM, icon: <Briefcase size={32} /> }
      ]
    },
    'como-encontrar-seu-estilo-de-barba': {
      title: "Como Encontrar Seu Próprio Estilo de Barba (Manual Completo)",
      subtitle: "Cansado de seguir padrões inalcançáveis? Aprenda a analisar a genética dos seus fios, densidade folicular e achar a identidade perfeita para você.",
      author: "Carlos Barbudo",
      date: "07 de Março de 2026",
      readTime: "16 min",
      category: "Dicas",
      image: "/assets/crescimento-acelerado.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Nós vemos um ator de Hollywood com aquela barba lenhador viking densa e perfeita, corremos para o espelho do banheiro... e o que vemos? Uma penugem falha na bochecha, fios ásperos no pescoço e um buraco imenso no meio do queixo. A frustração bate forte, não é?
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            O maior erro do homem moderno não é a genética dele, é a <strong>teimosia</strong>. Lutar contra o próprio DNA tentando forçar um estilo que o seu rosto não nasceu para ter é a receita ideal para parecer desleixado. O segredo dos homens mais elegantes do mundo não é ter 100% dos fios, é ter a inteligência de moldar um estilo que valoriza exatamente o que eles já têm.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. A Regra das 3 Semanas (O Mapeamento Genético)</h2>
          <p className="mb-6">
            Antes de qualquer produto ou tesoura, você precisa saber com o que está lidando. A primeira fase do seu manual é jogar a lâmina fora por exatos <strong>21 dias</strong>. 
          </p>
          <p className="mb-6">
            Nas primeiras duas semanas, sua pele vai coçar e você vai achar que está horrível. Resista. Ao final da terceira semana, vá para um ambiente muito bem iluminado (luz reta sobre o rosto) e seja honesto na observação:
          </p>
          <ul className="space-y-4 mb-10 pl-4 border-l-4 border-brand-gold text-gray-700">
            <li><strong>Onde os fios cresceram rápido e fortes?</strong> No queixo e bigode (Cavanhaque natural)? No pescoço, mas faltou na bochecha (Perfil Chinstrap)?</li>
            <li><strong>Em qual direção eles nascem?</strong> Para baixo? Espetados para a frente? Fazem redemoinhos sob o maxilar?</li>
            <li><strong>Qual é o teto máximo da sua genética?</strong> Se passou 3 semanas e a bochecha está lisa como bumbum de bebê, pare de sonhar com Lenhador agora. Foque no estilo que destaca a parte inferior!</li>
          </ul>

          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-12 border-l-8 border-brand-gold shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">2. O Teste de Colisão (Visagismo Aplicado)</h3>
            <p className="text-gray-300 mb-6">Agora que você sabe onde tem pelos, precisamos bater isso com o formato do seu "crânio". A barba não é um acessório, é uma prótese biológica. Ela serve para criar a ilusão de um "rosto quadrado" (o símbolo universal de masculinidade).</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-gold text-xl">📐</span>
                <div>
                  <strong className="text-brand-gold block font-serif">Rosto Redondo ou com Queixo Duplo (Papada):</strong>
                  <span className="text-sm">Mantenha a lateral da bochecha (costeleta) muito aparada ou raspada na máquina 1. Deixe O DOBRO de volume crescer apenas no queixo e maxilar inferior. Isso puxa o rosto para baixo e apaga a bochecha gorda. (Exemplo: Ducktail, Cavanhaque, Balbo)</span>
                </div>
              </li>
              <li className="flex gap-3 mt-4">
                <span className="text-brand-gold text-xl">📏</span>
                <div>
                  <strong className="text-brand-gold block font-serif">Rosto Magro, Estreito ou Oval:</strong>
                  <span className="text-sm">Mantenha as laterais da bochecha grossas (Média ou Lenhador). A sua genética precisa produzir volume nas laterais das orelhas para alargar o seu rosto visualmente, senão você começa a parecer doente ou frágil. (Exemplo: Garibaldi, Short Boxed Beard)</span>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. Fibras Capilares: O Simulador da Vida Real</h2>
          <p className="mb-6">
            Não quer desperdiçar meses tentando um estilo se tem medo que fique ruim? Use a técnica dos barbeiros de elite! Compre um pote barato de <strong>Fibra Capilar (queratina em pó)</strong> da mesma cor da sua barba falha.
          </p>
          <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/10 text-brand-dark italic mb-8 shadow-sm">
            Numa sexta-feira à noite, fique na frente do espelho e comece a borrifar o pó nas áreas onde sua barba é rala, "pintando" o estilo que você quer experimentar (como um cavanhaque afiado ou um degradê escuro). Crie aquele volume falso. Gostou da ilusão de ótica e o seu maxilar ficou viril? Ótimo! Agora sim você pode investir dinheiro num tratamento definitivo (como um bom Minoxidil, tônicos ou até um transplante FUE) sabendo que o mapa para aquele formato exato funciona no SEU rosto.
          </div>
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Nunca escolha seu estilo de barba baseado em fotos de modelos nórdicos se você tem ascendência latina ou mediterrânea. Nossa densidade é diferente. O segredo é abraçar a sua 'mancha' folicular e transformá-la em design. Às vezes, um cavanhaque ralo mas bem desenhado impõe mais respeito que uma barba cheia e mal cuidada."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'v-factor', name: "Fator Viking Crescimento Mapeado em Fibras de Preenchimentos Sintéticos Finos de Lápiseira Profissional", desc: "Ferramenta para desenhar antes de efetuar os reais cortes agressivos do design planejado com simulação real de 24 horas no maxilar.", link: AFF_VIKING, icon: <FlaskConical size={32} /> }
      ]
    },
    'aprenda-fazer-cavanhaque-simples': {
      title: "Aprenda a Fazer um Cavanhaque Simples",
      subtitle: "Um guia prático e direto ao ponto para quem quer aderir ao cavanhaque clássico sem complicação na hora de aparar.",
      author: "Carlos Barbudo",
      date: "13 de Março de 2026",
      readTime: "7 min",
      category: "Dicas",
      image: "/assets/cavanhaque-ancora.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Sejamos sinceros: ficar dependente de barbearia toda semana só para limpar as bordas do rosto custa caro e toma um tempo que você não tem. Porém, tentar raspar os cantos fumando um cigarro na frente do espelho do banheiro... geralmente termina em desastre, sangue e uma bochecha torta.
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            E se eu te disser que o <strong>Cavanhaque Clássico</strong> foi inventado exatamente para ser o estilo mais rápido e infalível de ser esculpido pelo próprio dono? Não há linhas complexas na mandíbula para errar. Ao dominar os "4 Ângulos Cegos", você desenha seu cavanhaque simples em exatos 3 minutos antes do banho.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Por Que o Cavanhaque Salva Rostos Falhos?</h2>
          <p className="mb-6">
            O cavanhaque simples é aquele que concentra volume apenas ao redor da boca e do queixo. 
            Ele é a "arma secreta" para 80% dos homens brasileiros porque <strong>ignora a área da bochecha.</strong> Sabe aquelas falhas buracadas na lateral do rosto que te impedem de ter uma barba lenhador? O cavanhaque simplesmente manda você raspar tudo isso, usando apenas o "horário nobre" dos seus pelos: a maçã do queixo.
          </p>

          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-12 border-l-8 border-brand-gold shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-brand-gold mb-8">🛠️ O Método dos "4 Ângulos" (Faça em Casa)</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-brand-gold text-brand-dark font-black rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">1</div> 
                <div>
                  <strong className="text-lg text-brand-gold block font-serif mb-1">Crie a Floresta Bruta</strong>
                  <span className="text-gray-300 leading-relaxed">Deixe o cavanhaque crescer livremente por 14 a 20 dias, dependendo do crescimento do seu fio (e do Minoxidil se estiver usando). Nunca tente desenhar logo no dia 4; as linhas laterais precisam de "parede e de sombras para criar a ilusão gráfica e volume". Deixe sujo!</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-brand-gold text-brand-dark font-black rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">2</div> 
                <div>
                  <strong className="text-lg text-brand-gold block font-serif mb-1">A Máquina no Zero (A Limpeza Externa)</strong>
                  <span className="text-gray-300 leading-relaxed">Antes de tocar na gillette, pegue a máquina de aparar SEM PENTE. Raspe toda bochecha e pescoço deixando um "bife" gigante de pêlo ao redor da boca. <i>Atenção:</i> Não tente desenhar certinho com a máquina ainda, apenas tire o excesso selvagem a 2 dedos de distância da boca.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-brand-gold text-brand-dark font-black rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">3</div> 
                <div>
                  <strong className="text-lg text-brand-gold block font-serif mb-1">A "Linha do Sorriso" (O Segredo Mestre)</strong>
                  <span className="text-gray-300 leading-relaxed">Agora vem a Lâmina: Faça a espuma transparente (ou gel) em torno do que restou. Aqui o "bicho pega"! Como fazer a lateral descer reto perfeitamente? Sorria forte pro espelho. Viu aquela ruga da bochecha que desce para as laterais da boca? Essa é a sua medida! Use a lâmina cortando de fora para dentro até encostar perfeitamente nessa linha lateral de expressão. Repita do outro lado.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-brand-gold text-brand-dark font-black rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">4</div> 
                <div>
                  <strong className="text-lg text-brand-gold block font-serif mb-1">A Base do Queixo e "Gogó do Batman"</strong>
                  <span className="text-gray-300 leading-relaxed">Limpe todo o pescoço e levante a cabeça para o teto. Você não quer ver o pêlo parar exatamente na ponta do osso. Desça o corte com a navalha cerca de meio centímetro ou 1 polegada ALÉM da borda inferior do queixo maxilar em direção a laringe. Se você cortar seco no osso exposto, ao relatar com os olhos diretos você mostra uma papada gordosa escondida. O fundo um pouquinho mais baixo cria um "fundo falso" que alonga seu queixo milagrosamente como um Super-Herói!</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-brand-light p-6 rounded-2xl border-2 border-brand-gold/20 text-brand-dark italic mb-8 shadow-sm">
            <strong className="block text-xl mb-2 font-bold not-italic">Dica de Ouro Pós-Aparar:</strong>
            "Lembre-se: O pior erro de novato no Cavanhaque é cortar contra o espelho virando o rosto de lado... de um erro em um milímetro de um lado com a perna, você vai tentar 'arrumar o outro' e ao final dos 5 minutos raspou o cavanhaque que tinha sobrado inteiramente tentando alinhar a simetria."
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Quer um cavanhaque que pareça mais cheio? Nunca raspe a 'mosca' (o pelinho abaixo do lábio). Esse pequeno triângulo de pelos cria uma sombra que dá profundidade ao queixo, fazendo o cavanhaque parecer 3D e muito mais viril do que se você deixasse apenas o aro ao redor da boca."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'tesoura-stark', name: "Tesoura Stark de Precisão", desc: "Perfeita para acertar as arestas sem risco de cortar além da conta.", link: AFF_TESOURA, icon: <Scissors size={32} /> }
      ]
    },
    'como-fazer-cavanhaque-sem-errar': {
      title: "Como fazer o cavanhaque sem errar",
      subtitle: "Dicas essenciais e técnicas à prova de falhas para criar o desenho perfeito do seu cavanhaque na primeira tentativa.",
      author: "Carlos Barbudo",
      date: "13 de Março de 2026",
      readTime: "9 min",
      category: "Dicas",
      image: "/assets/visagismo-rostos.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Nós sabemos exatamente como a história começa: você está na frente do espelho num domingo à noite. Decide dar "só uma ajeitadinha" na lateral da barba que está torta. Você passa a gillette de um lado. Fica torto. Passa do outro lado para compensar. Fica mais curto. 
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Dez minutos depois... <strong>você raspou a barba inteira e está com cara de adolescente prestes a ir para a escola.</strong> Fazer o próprio cavanhaque e acertar "de primeira" não exige um dom divino enviado pelos deuses antigos, exige método militar. Barbeiros não fazem no "olhômetro", eles usam geometria básica.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Regra nº 1: Esconda a Espuma e a Gillette!</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            O pecado capital do homem tentando cuidar da própria aparência em casa é jogar água quente, encher o rosto de espuma de barbear branca grossa (parecendo um Papai Noel) e depois tentar "adivinhar" onde a lâmina vai cortar ali por debaixo. A espuma branca cega você.
          </p>
          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-10 border-l-8 border-brand-gold shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-4 text-brand-gold">✂️ O Método do "Esboço a Seco"</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pense num tatuador: ele jamais agulha a pele sem antes pôr o decalque de papel, certo? Você precisa desenhar o cavanhaque seco, olhando para a sua pele crua no espelho. Como?
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</span>
                <span><strong>A Máquina em “L”:</strong>  Segure sua máquina de aparar cabelos ou pelos virada de cabeça para baixo (com os dentes da lâmina batendo reto na sua pele). Faça pequenos “toques” secos demarcando onde você quer a fronteira do cavanhaque.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-brand-gold text-brand-dark w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</span>
                <span><strong>O Lápis Branco Roubado:</strong> Esse é o segredo de Mestre. Vá à bolsa de maquiagem da sua esposa/namorada (ou compre na farmácia por 5 reais) um “Lápis de Olho Branco”. Pinte uma linha branca grossa na pele exatamente onde o cavanhaque deve terminar e a bochecha lisa deve começar.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Prova dos 9: A Inclinação da Cabeça</h2>
          <p className="mb-6">
            Por que um lado sempre fica mais torto que o outro? Porque <strong>o seu pescoço mente para você</strong> no espelho do banheiro.
          </p>
          <p className="mb-6">
            Quando tentamos enxergar a lateral direita do nosso próprio rosto, nós naturalmente abaixamos o queixo e torcemos o pescoço, o que distorce a pele. Um corte reto vira um corte na diagonal.
          </p>

          <div className="space-y-6 my-10">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all duration-300 hover:border-brand-gold">
              <div className="text-3xl">🪞</div>
              <div>
                <strong className="text-brand-dark block text-lg mb-1">Solução do Espelho Duplo:</strong>
                <span className="text-gray-600 text-sm">Não tente virar o rosto como uma coruja. Mantenha o queixo totalmente congelado e reto para frente e levante o olhar. Pegue um espelho de mão, coloque de lado, e olhe o reflexo do reflexo para aparar.</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all duration-300 hover:border-brand-gold">
              <div className="text-3xl">🥶</div>
              <div>
                <strong className="text-brand-dark block text-lg mb-1">Esqueça o Banho Quente e a Toalha Fervendo no Rosto:</strong>
                <span className="text-gray-600 text-sm">Outro mito que destroi cavanhaques amadores: a toalha ultraquente dilata brutalmente a pele em volta da boca, que incha quase meio centímetro invisivelmente antes de você cortar. Quando a pele esfria e encolhe meia hora depois... você repara que a linha do cavanhaque entortou e entrou demais sob o lábio. Faça o seu molde base fora do banho enquanto os poros e sua anatomia estão congelados e reais. O banho quente de toalha de barbearia acontece Apenas PARA LIMPAR PELOS RESIDUAIS LONGES DO DESENHO NA BOCHECHA E PESCOÇO, jamais para criar o marco zero de simetria.</span>
              </div>
            </div>
          </div>
          
          <p className="mb-6 text-xl font-medium italic text-gray-800 border-l-4 border-brand-charcoal pl-4">
            A moral da história para jamais errar a mão é muito simples: Demarque as margens sem nenhum líquido atrapalhando sua visão. E o único gel aceito quando, finalmente, você encostar a gillette para "zerar" as bochechas, será um Shaving Gel Transparente, onde você vê cada fio minúsculo tombando antes da precisão assustadora do aço.
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para o cavanhaque sem erros, a respiração é sua aliada. Nunca passe a navalha no momento em que está inspirando; o peito sobe e o seu braço treme um milímetro. Prenda a respiração por 3 segundos no momento do corte longo. É a técnica dos atiradores de elite aplicada ao seu rosto."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'oleo-sand', name: "Óleo Premium Sândalo", desc: "Amolece a pele antes de passar a lâmina nas bochechas, reduzindo irritações.", link: AFF_OIL, icon: <Droplets size={32} /> }
      ]
    },
    'aprenda-fazer-cavanhaque-simples-eficaz': {
      title: "Aprenda a Fazer um Cavanhaque Simples e Eficaz",
      subtitle: "O equilíbrio perfeito entre estilo e praticidade. Descubra como manter um cavanhaque de presença com o mínimo de esforço diário.",
      author: "Carlos Barbudo",
      date: "13 de Março de 2026",
      readTime: "8 min",
      category: "Estilo",
      image: "/assets/cuidados-cavanhaque.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Acordar, tomar café correndo, vestir a camisa e encarar o trânsito (ou a primeira call do dia no Zoom). Você é um homem ocupado. Passar 40 minutos em frente ao espelho com uma navalha milimétrica fazendo o contorno de uma barba gigantesca simplesmente não cabe na sua rotina.
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Mas o mercado de trabalho (e as mulheres) não perdoam o visual de "urso recém-saído da caverna". Você precisa de um código de trapaça: um visual que exalte sua masculinidade madura, mas que exija apenas <strong>3 minutos de manutenção a cada três dias</strong>. Apresentamos a você: O Cavanhaque Eficaz.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Ciência da "Eficácia" na Barba</h2>
          <p className="mb-6">
            O que faz um estilo de barba ser "Eficaz"? É a tolerância ao erro e ao crescimento dos fios. Se você faz aquele cavanhaque super desenhado no formato quadrado perfeito, 24 horas depois os primeiros pelos que crescem espetados como "agulhas pretas" fora da linha já arruínam o desenho. Você fica escravo da lâmina diariamente.
          </p>
          <p className="mb-6 font-bold text-brand-dark">
            Para quebrar essa escravidão, o Cavanhaque Eficaz usa duas armas: O "Esmaecimento" e o Pente da Máquina.
          </p>

          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-10 border-t-4 border-brand-gold shadow-2xl relative overflow-hidden">
             {/* Decorativo */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CheckCircle2 size={120} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold relative z-10">O Manual Prático de 3 Minutos</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4">
                <div className="text-brand-gold flex-shrink-0 mt-1"><Zap size={24} /></div>
                <div>
                  <strong className="block text-brand-gold text-lg mb-1">Passo 1: Esqueça a Navalha Diária</strong>
                  <span className="text-gray-300 leading-relaxed">Abrace o estilo "Stubble Goatee" (O cavanhaque por fazer). Em vez de tentar raspar na pele viva, regule sua máquina de corte no Pente "0 Baixa" ou "1". Passe nas bochechas e pescoço. O visual fica como uma "sombra cinza de um dia", que é cientificamente comprovado como o visual mais atraente aos olhos femininos por mesclar rusticidade e limpeza. E o melhor: esconder falhas!</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-brand-gold flex-shrink-0 mt-1"><Briefcase size={24} /></div>
                <div>
                  <strong className="block text-brand-gold text-lg mb-1">Passo 2: O Contorno Arredondado (O Suave Circular)</strong>
                  <span className="text-gray-300 leading-relaxed">Não faça ângulos curvos de 90 graus na base do queixo. Linhas retas exigem manutenção feroz. Deixe a junta entre o bigode e o queixo fazer um desenho arredondado natural. Quando o pelo cresce num estilo circular (O clássico Van Dyke ou Cavanhaque Cheio Redondo), o crescimento de 4 dias não quebra a silhueta, parecendo apenas que a barba "encorpou".</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-brand-gold flex-shrink-0 mt-1"><CheckCircle2 size={24} /></div>
                <div>
                  <strong className="block text-brand-gold text-lg mb-1">Passo 3: A Lei da Tesoura do Lábio</strong>
                  <span className="text-gray-300 leading-relaxed">Você pode ser indulgente com as bochechas que ficam como sombra de 1 dia, mas o Bigode é implacável. Pelos entrando na boca gritam "sujeira e mendicância". Tenha uma pequena tesoura de design na pia. A cada 3 dias puxando o lábio, serre apenas um milímetro de cabelo pendurado acima da boca. Ficará milimetricamente limpo.</span>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">O Efeito "Executivo Casca-Grossa"</h2>
          <p className="mb-6">
            O Cavanhaque Eficaz de bordas esfumadas sinaliza dinamismo. Nos escritórios ou nas reuniões fechadas, ele passa a imagem do famoso arquétipo <em>"Líder que resolve problemas rápido demais para ficar preocupando-se com centímetros na frente do espelho"</em>. 
          </p>
          <div className="bg-brand-light p-6 rounded-2xl border border-gray-200 text-gray-700 italic flex items-center gap-4 hover:border-brand-gold transition-colors duration-300">
            <span className="text-4xl text-brand-gold">⏱️</span>
            <span>
              Ao final de um ano, se o homem normal gasta 15 minutos de segunda a sexta raspando agressivamente as lines de um goatee cravado a laser para ir trabalhar (e tratando a pele vermelha inflamada de gillette depois), você gastou apenas 3 minutos com pentes automáticos e ganhou <strong>52 horas inteiras da sua vida de volta no ano!</strong> Isso é eficácia real.
            </span>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A eficácia está na ferramenta. Se você usa uma máquina sem fio que está 'engasgando' porque a bateria está fraca, você vai puxar o fio e causar foliculite. Mantenha sua máquina sempre lubrificada com uma gota de óleo e carregada 100% para o corte ser cirúrgico e rápido."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'balm-seco', name: "Balm Seco Alinhador", desc: "Ideal para manter o volume controlado naqueles dias de pressa.", link: AFF_BALM, icon: <Briefcase size={32} /> }
      ]
    },
    'como-fazer-cavanhaque-bem-definido': {
      title: "COMO FAZER CAVANHAQUE BEM DEFINIDO",
      subtitle: "Domine a arte das linhas precisas e contornos nítidos. O segredo dos barbeiros profissionais para um cavanhaque de destaque.",
      author: "Carlos Barbudo",
      date: "13 de Março de 2026",
      readTime: "11 min",
      category: "Estilo",
      image: "/assets/historia-barba.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Alguns homens preferem o visual rústico ou "sombra de um dia" por preguiça. Mas se você é do time que não aceita menos que a perfeição, aquele visual de <strong>"recém-saído da barbearia"</strong> (com linhas tão retas que parecem cortadas a laser) é a sua marca registrada. 
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            O problema? As pessoas acham que para ter esse <em>Crispy Line-up</em> (linha afiada) você precisa pagar 50 reais ao barbeiro toda sexta-feira. Mentira. Com o arsenal correto e a puxada de pele certa na frente do seu próprio espelho, você constrói essa "borda de diamante" sozinho.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. A Ruína das "Múltiplas Lâminas"</h2>
          <p className="mb-6 leading-relaxed">
            O primeiro motivo de você nunca conseguir uma linha reta no Bigode ou na lateral do maxilar é a sua Gillette de supermercado com 4 ou 5 lâminas. Essas máquinas têm cabeças largas. A capinha protetora de plástico em volta da lâmina esconde quase meio centímetro da ponta do pelo. Você não enxerga exatamente onde a lâmina bate, e acaba cortando fatias invisíveis a mais da sua barba.
          </p>
          <p className="mb-6 leading-relaxed text-brand-dark font-medium">
            <strong>A Solução:</strong> O Navalhete Clássico (ou Shavette). Apenas uma única lâmina de aço exposta. A precisão é nanométrica. 
          </p>

          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-10 border-l-8 border-brand-gold shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">2. O Triângulo de Ouro da Definição (Técnica Profissional)</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-brand-gold text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">A</div>
                <div>
                  <strong className="text-brand-gold block font-serif text-lg mb-1">O Gel Translúcido (Proibido Espuma)</strong>
                  <span className="text-gray-300 leading-relaxed">Nunca, jamais use espuma branca aerossol se você quer alinhar o desenho. Uma gota de espuma no pelo esconde a linha marginal. Você vai atirar no escuro. Use estritamente um Shaving Gel Transparente. Ele lubrifica a lâmina a deslizar 3x mais liso sem arrancar a pele, e você vê os pelos perfeitamente sob o gel.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-brand-gold text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">B</div>
                <div>
                  <strong className="text-brand-gold block font-serif text-lg mb-1">O Esticamento "Pele de Tambor"</strong>
                  <span className="text-gray-300 leading-relaxed">O erro letal do corte: passar a lâmina na bochecha "mole". O navalhete engasga e faz a curva torta. A regra de ouro é: se a navalha desce, sua outra mão puxa a pele da bochecha (perto do olho) violentamente para CIMA. Deixe a pele tão esticada quanto um tambor. A lâmina vai varrer o pelo como se fosse manteiga fazendo uma linha geométrica indestrutível.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-brand-gold text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">C</div>
                <div>
                  <strong className="text-brand-gold block font-serif text-lg mb-1">O Truque do Contraste (O Reforço)</strong>
                  <span className="text-gray-300 leading-relaxed">Você raspaou? Excelente. Agora o detalhe final: aplique algumas gotas de óleo na massa central do cavanhaque e passe uma escova de dentes incrivelmente finas ou pente de madeira puxando todo o volume para dentro. Fazer o miolo do cavanhaque brilhar (mais escuro) em contraste fortíssimo com a bochecha "branca" e lisa que você acabou de raspar é o que dá aquele impacto fotográfico de revista de moda.</span>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Regra dos "Cantos da Boca"</h2>
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 border-l-brand-gold shadow-sm flex items-start gap-4 mb-8">
            <span className="text-3xl mt-1">🚨</span>
            <p className="text-gray-700 leading-relaxed text-sm">
              <strong className="block text-brand-dark text-lg mb-1">O abismo do Bigode com as Laterais:</strong> Para ter essa ultra-definição no maxilar, muitos homens afinam demais a ligação do bigode descendo pro queixo. A não ser que você seja o vilão dos quadrinhos, mantenha a "torre lateral" conectora com, pelo menos, a grossura da ponta do seu dedo indicador. Finas demais, qualquer deslize na navalha rasga a conexão e você ficará meses sem cavanhaque até consertar aquele buraco.
            </p>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A ultra-definição exige luz de estúdio. Se o seu banheiro é escuro, você vai errar. Compre uma fita de LED barata e cole em volta do espelho. A luz frontal 'achata' a barba e revela os fios que a sombra do teto esconde. É o segredo dos barbeiros de elite."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'gel-shave', name: "Kit Dermaroller e Pós-Barba", desc: "Aproveite a irritação pós-navalha para tratar os fios em vez de agredir a pele.", link: AFF_DERMAROLLER, icon: <Target size={32} /> }
      ]
    },
    'como-ter-um-cavanhaque-bonito': {
      title: "Como ter um cavanhaque bonito?",
      subtitle: "Da hidratação ao corte ideal. Tudo o que você precisa saber para transformar um simples projeto de barba em um cavanhaque invejável.",
      author: "Carlos Barbudo",
      date: "13 de Março de 2026",
      readTime: "9 min",
      category: "Dicas",
      image: "/assets/microagulhamento.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            E aí, meu amigo! Se você chegou até aqui, é porque decidiu que está na hora de dar aquele upgrade no visual e apostar no cavanhaque. E vou te dizer uma coisa: você fez uma excelente escolha. Ter um formato correto é metade da batalha; a outra metade é a <strong>qualidade do fio</strong>. Um cavanhaque bonito não se sustenta apenas na ponta da tesoura, ele requer brilho, maciez, higiene irretocável e, acima de tudo, atitude. Vamos juntos transformar esse projeto de barba em um cavanhaque de respeito, daquele que arranca elogios por onde você passa!
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. A Base de Tudo: Conheça o Seu Rosto</h2>
          <p className="mb-6">
            Antes de sair passando a máquina, a gente precisa bater um papo sério sobre proporção. O cavanhaque tem o poder mágico de mudar o formato do seu rosto. Se você tem um rosto mais redondo, um cavanhaque com linhas mais retas e compridas no queixo vai ajudar a alongar a sua face. Já se o seu rosto é longo ou quadrado, um cavanhaque um pouco mais preenchido nas laterais e aparado curto embaixo traz um equilíbrio fantástico aos seus traços. 
          </p>
          <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand-gold mb-8 shadow-sm">
            <p className="text-gray-700 italic">"Ah, mas a minha barba é falhada nas laterais, será que dá?". Amigo, o cavanhaque nasceu exatamente para salvar quem não tem a bochecha cheia! Ele concentra a força visual no centro do rosto, onde naturalmente costumamos ter uma maior densidade de fios.</p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. A Fase do Crescimento e a Paciência</h2>
          <p className="mb-6">
            Eu sei, a fase inicial é complicada. Aquela coceira nos primeiros dias dá vontade de raspar tudo, e o visual às vezes parece de quem esqueceu de se cuidar porque os fios espetam para todos os lados. Mas calma, isso passa! A primeira regra de ouro aqui é: <strong>deixe a natureza agir, fique longe da lâmina por pelo menos três a quatro semanas</strong>. 
          </p>
          <p className="mb-6">
            Não caia na tentação de tentar desenhar o cavanhaque logo no início. Você precisa de "massa capilar" para poder esculpir depois. Aguente firme e foque no resultado grandioso que está por vir.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. A Arte de Desenhar e Aparar as Linhas</h2>
          <p className="mb-6">
            Aqui é onde separamos os meninos dos homens. Chegou a hora de definir o seu cavanhaque. Para não errar e acabar tendo que raspar tudo por causa de assimetria, anote essa dica vital: <strong>use gel de barbear transparente</strong> (shaving gel) ou um óleo de barbear. A espuma branca da farmácia esconde o desenho natural e você acaba cortando onde não devia. A precisão é a alma de um rosto bem desenhado.
          </p>
          
          <div className="space-y-4 my-8 pl-6 border-l-2 border-brand-gold">
            <p className="text-gray-700"><strong className="text-brand-dark">Linha da Bochecha:</strong> Remova qualquer fio solto que esteja "invadindo" as maçãs do rosto ou as laterais da bochecha. O cavanhaque isolado ou conectado no bigode fica muito mais elegante se o resto da pele estiver intocável.</p>
            <p className="text-gray-700"><strong className="text-brand-dark">Linha do Pescoço:</strong> Atenção máxima aqui! Fios rastejando pelo pescoço dão uma aparência de total desleixo. Não deixe o pelo descer para a garganta. A linha correta é justamente marcar e raspar logo abaixo do osso do maxilar.</p>
            <p className="text-gray-700"><strong className="text-brand-dark">O Bigode:</strong> O seu bigode deve sorrir com você. Apare com uma tesourinha própria os fios superiores que começam a cair ou cobrir o lábio. Afinal, um cavalheiro deve manter os lábios livres para as refeições e brindes!</p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">4. Higiene e Nutrição: O Segredo do Fio Macio</h2>
          <p className="mb-6">
            Como os pelos do cavanhaque circundam a boca, eles são grandes ímãs para fumaça, resíduos, suor da respiração e oleosidade intensificada do nariz. Se você ainda usa o sabonete em barra do corpo para lavar a barba, nós precisamos consertar isso urgente! O shampoo de cabelo é agressivo para a pele do rosto sensível, e o sabonete em barra comum vai ressecar seus pelos, deixando o cavanhaque duro, fosco e espigado.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-300">
              <h4 className="font-bold text-brand-dark text-lg mb-3 flex items-center gap-2">🧼 A Lavagem Correta</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Lave o rosto <strong>duas vezes ao dia</strong> com um shampoo específico para barba. Ele tem o pH balanceado que limpa profundamente as bactérias e poeira acumulada sem arrancar a gordura boa do rosto que os folículos precisam para brilhar.</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-300">
              <h4 className="font-bold text-brand-dark text-lg mb-3 flex items-center gap-2">💧 Hidratação Suprema</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Após o banho tórno, estando a pele limpa com os poros abertos e o fio enxugado levemente na toalha, aplique algumas gotas de um bom <strong>óleo de barba premium</strong>. Aplique esfregando as mãos para aquecer e massageie desde a pele até as pontas afofando os fios. Vai sumir de vez com qualquer ressecamento ou friz, trazendo peso e disciplina.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">5. Para Finalizar: O Toque Rápido do Pente</h2>
          <p className="mb-6">
            Chegou até aqui e está com o cavanhaque impecável, aparado nas margens e cheiroso com um fragrância luxuosa? Falta apenas carregar no bolso a sua arma secreta: um <strong>pente de madeira pequeno</strong>. Evite usar os plásticos, o plástico acumula energia estática ("arrepiando" a barba quando atolada na camiseta). O pentezinho de madeira assenta os fios durante aquelas saídas para o trabalho ou eventos e ajuda a alinhar todo folículo na direção da gravidade.
          </p>

          <div className="bg-brand-dark text-brand-gold p-8 rounded-3xl mt-12 mb-6 text-center shadow-xl">
            <p className="text-xl font-bold italic">
              "Um homem com a barba desenhada não precisa justificar sua presença, o visual fala de antemão."
            </p>
            <p className="text-sm text-gray-300 mt-4 font-light">
              Mude a rotina de limpeza, tenha as ferramentas corretas e o seu cavanhaque vai parar o trânsito com segurança.
            </p>
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Cavanhaque bonito é cavanhaque cheiroso. Como ele está logo abaixo do nariz, use óleos com notas de hortelã ou eucalipto pela manhã. Isso ajuda a manter as vias aéreas livres e dá uma sensação de refrescância que dura horas."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'oleo-sand-p', name: "Óleo Premium de Sândalo", desc: "O perfume clássico amadeirado somado a fios que não quebram.", link: AFF_OIL, icon: <Droplets size={32} /> }
      ]
    },
    'cavanhaque-masculino': {
      title: "Cavanhaque masculino",
      subtitle: "O estilo que nunca sai de moda. Uma jornada pela versatilidade e o poder do cavanhaque na estética masculina contemporânea.",
      author: "Carlos Barbudo",
      date: "13 de Março de 2026",
      readTime: "12 min",
      category: "Cultura",
      image: "/assets/barbas-famosas.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se você olhar fotos antigas do seu avô, recortes de revistas dos anos 90, ou ligar a TV para ver o tapete vermelho de uma premiação de cinema ontem à noite, uma coisa estará sempre lá: o <strong>cavanhaque masculino</strong>. Enquanto modas bizarras de costeletas gigantes ou bigodes fininhos como lápis morreram no tempo, o cavanhaque permaneceu inabalável. 
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Mas o que faz esse estilo ser a arma visual número um dos homens há mais de um século? Não é sorte. É pura <strong>matemática facial e psicologia evolutiva</strong>. Vamos destrinchar por que o cavanhaque masculino não é apenas uma "barbinha", mas uma estrutura de poder.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Matemática da Realeza (Visagismo Aplicado)</h2>
          <p className="mb-6">
            O rosto humano perfeito, segundo os gregos antigos, é aquele que transmite agressividade controlada. O problema é que 70% dos homens modernos têm o <em>queixo retraído</em> ou rostos ovais suaves. 
          </p>
          <p className="mb-6 text-brand-dark font-medium leading-relaxed">
            Quando você deixa o cavanhaque crescer, está criando uma "extensão óssea" falsa de pêlo. Você adiciona centímetros extras de cor escura na ponta da mandíbula. O resultado? Seu rosto é imediatamente percebido pelo olho humano como mais longo, mais quadrado e mais simétrico. É o milagre da ótica pelo qual mulheres passam horas se maquiando, mas o homem só precisa de 20 dias longe da navalha!
          </p>

          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-12 border-t-8 border-brand-gold shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">Os 3 Arquétipos do Cavanhaque</h3>
            <p className="text-gray-300 leading-relaxed mb-6">Na psicologia da imagem, os formatos mandam mensagens subliminares para os cérebros de quem nos olha. Qual mensagem o SEU cavanhaque está emitindo hoje?</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-3xl mt-1">👑</span>
                <div>
                  <strong className="text-brand-gold block font-serif text-lg mb-1">O Real (Cavanhaque Clássico e Fino)</strong>
                  <span className="text-gray-300 leading-relaxed">Popularizado pela realeza francesa. Fios curtos, contornos raspados a laser. Transmite <em>Cálculo e Controle</em>. É o visual de advogados renomados e lobos de Wall Street. Diz para as pessoas: "Eu cuido de cada detalhe da minha vida".</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-3xl mt-1">🎸</span>
                <div>
                  <strong className="text-brand-gold block font-serif text-lg mb-1">O Balbo ou "Bad Boy" Moderno</strong>
                  <span className="text-gray-300 leading-relaxed">Bigode solto flutuando, sem conectar com a âncora grossa no queixo inferior. Eternizado por astros do rock e pelo Tony Stark. Transmite <em>Rebeldia Criativa e Risco</em>. Perfeito para homens que vestem jaqueta de couro sobre uma camiseta preta lisa e querem passar a impressão de estarem sempre 10 minutos atrasados porque estavam quebrando alguma regra.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-3xl mt-1">🪓</span>
                <div>
                  <strong className="text-brand-gold block font-serif text-lg mb-1">O Estendido (Goatee Lenhador)</strong>
                  <span className="text-gray-300 leading-relaxed">As bochechas são limpas, mas o queixo se alonga numa trança ou triângulo maciço caindo sobre o pescoço (Estilo Motoqueiro ou Biker). Transmite <em>Força Bruta e Territorialismo</em>. Ninguém corta a fila do pão na frente de um cara com um cavanhaque estendido.</span>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">A Genética que Perdoa o Homem Real</h2>
          <p className="mb-6">
            Vamos botar o dedo na ferida? A maioria esmagadora dos caras que desiste de ter barba o faz porque as bochechas são tão falhadas que parecem o mapa de um terreno bombardeado. Alguns recorrem ao transplante doloroso, outros litros de Minoxidil. 
          </p>
          <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand-gold shadow-sm mb-6">
            <p className="text-gray-700 italic">
              "O Cavanhaque Masculino é a salvação biológica para a genética falha brasileira. O corpo humano concentra mais de 75% dos folículos pilosos mais grossos ao redor da boca. Você pode ser quase imberbe, mas tem pêlo ali."
            </p>
          </div>
          <p className="mb-6 font-medium text-brand-charcoal">
            Raspar o vazio triste das laterais e preservar só a zona de poder no eixo central não é apenas uma técnica estética. É abraçar e potencializar a sua biologia a favor da masculinidade madura. Da próxima vez que o barbeiro perguntar "vai tirar tudo chefe?", faça o sinal que não e peça as bordas laterais no zero. Nasce ali um novo arquétipo.
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Se você tem o rosto muito magro, evite o cavanhaque muito longo (tipo chibo). Isso vai te deixar com aspecto de cansado. Mantenha-o mais largo nas laterais da boca para dar volume horizontal ao seu rosto."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'fator-viking', name: "Fator Viking Engrossador", desc: "A base de todo cavanhaque vigoroso começa no diâmetro do fio de dentro pra fora.", link: AFF_VIKING, icon: <FlaskConical size={32} /> }
      ]
    },
    'como-cuidar-do-seu-cavanhaque': {
      title: "Como cuidar do seu cavanhaque",
      subtitle: "Rotina de cuidados, produtos indispensáveis e dicas de manutenção para manter seu cavanhaque sempre limpo, cheiroso e alinhado.",
      author: "Carlos Barbudo",
      date: "13 de Março de 2026",
      readTime: "10 min",
      category: "Saúde",
      image: "/assets/aparar-barba-casa.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Existe um abismo entre ter um estilo de barba e carregar uma "esponja de bactérias" sob o queixo. O cavanhaque, por circular a nossa boca, está na zona de maior perigo do corpo humano: ele recebe fumaça, suor do nariz, e até aquele farelo do hambúrguer no fim de semana.
          </p>
          <p className="text-xl font-medium text-brand-charcoal mb-10 leading-relaxed">
            Se o seu cavanhaque pinica ao abraçar alguém, cheira mal no fim do dia, ou pior, solta pequenas "caspas brancas" (descamação) em cima da sua camisa preta, seu visual virou seu pior inimigo. Mas a solução não é a gillette; é um protocolo bélico de 3 minutos de banho.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">1. O "Crime" do Sabonete de Corpo</h2>
          <div className="bg-brand-charcoal text-white rounded-3xl p-8 my-8 border-l-8 border-brand-gold shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              Vamos acabar com o mito agora: o sabonete que você usa no corpo e no cabelo tem um fator de acidez brutal para destruir placas de gordura pesadas. A pele do rosto, escondida embaixo do cavanhaque, é fininha e frágil. 
              <br /><br />
              Quando você enfia a barra de sabão do chuveiro no cavanhaque, você derrete a proteção natural da raiz. O pêlo desesperado fica grosso como <strong>arame farpado</strong>, e a pele desidratada começa a jorrar fragmentos mortos (falsa caspa). No mínimo, você precisa de um Shampoo de Barba com pH balanceado.
            </p>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">2. O Protocolo Anti-Cheiro (A Toalha)</h2>
          <p className="mb-6 leading-relaxed">
            Você lava a barba e horas depois sente um cheiro de "cachorro molhado"? Isso se chama Proliferação Fúngica Oculta. Aquele tufo de pêlo no queixo é escuro e denso. Quando não seca direito, vira uma estufa para fungos minúsculos causados pela umidade do próprio banho.
          </p>
          <p className="mb-10 text-brand-dark font-medium pb-4 border-b border-brand-gold/30">
            <strong>O que os profissionais fazem:</strong> Após o banho, esfregue vigorosamente com uma toalha grossa as raízes (não as pontas). Se tiver paciência, 10 segundos de secador de cabelo no modo frio apontado de baixo para cima garante que a base da raiz da pele esteja selada e 100% seca.
          </p>

          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">3. Esfoliação Clandestina: Escova de Javali</h2>
          <p className="mb-6 leading-relaxed">
            Passar um pente de plástico barato na barba é pedir para os pêlos ficarem arrepiados e com nós estáticos. A escova que salva peles não é feita para o cabelo humano, ela é a Escova Firme (Geralmente de Cerdas Naturais).
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl shadow-md transition duration-300 hover:border-brand-gold">
              <h4 className="font-bold text-brand-dark text-lg mb-3 flex items-center gap-2">🔄 Movimento Circulatório</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Ao escovar pressionando fortemente a escova <strong>contra a pele do rosto sob a barba</strong> duas vezes ao dia, você arranca as células mortas encrustadas ali e irriga sangue novo na raiz, forçando mais grossura pro fio.</p>
            </div>
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-2xl shadow-md transition duration-300 hover:border-brand-gold">
              <h4 className="font-bold text-brand-dark text-lg mb-3 flex items-center gap-2">🛡️ A Capa de Defesa</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Óleo de barba não é "perfume". Quando você aplica 3 gotas numa barba recém-lavada, o óleo cria uma "tenda" em cima de cada fio que impede que os odores de poluição e fritura do restaurante penetrem na queratina.</p>
            </div>
          </div>

          <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand-dark italic text-gray-700 mt-12 shadow-sm">
            <h3 className="text-brand-dark font-serif font-bold text-xl not-italic mb-3">Conclusão Disciplinar</h3>
            Manter o cavanhaque impecável envia um forte sinal primitivo de confiabilidade. Um rosto desmazelado assusta, mas um rosto incrivelmente bem talhado e nutrido é o equivalente a vestir um terno italiano cortado sob medida, só que permanente, na sua própria face.
          </div>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O maior inimigo do cavanhaque é a toalha de rosto compartilhada. Seque sua barba com uma toalha de papel descartável ou uma toalha exclusiva e trocada a cada 2 dias. A umidade da toalha de rosto comum é o paraíso para bactérias que causam espinhas sob o pêlo."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'kit-skincare', name: "Kit Facial Cuidados de Banho e Pós", desc: "A linha com todas as fases completas em uma caixa elegante.", link: AFF_KIT_FACIAL, icon: <HeartPulse size={32} /> }
      ]
    },
    'high-fade-degrade-alto': {
      title: "High Fade (Degradê Alto): O Guia do Corte Mais Versátil de 2026",
      subtitle: "Aprenda como dominar o degradê alto, do pedido ao barbeiro à finalização matte em casa. O visual limpo que projeta modernidade.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/high-fade.webp",
      howToSteps: [
        { name: "Marcação Inicial", text: "Marcar a linha guia com a máquina 0, dois dedos acima da orelha." },
        { name: "Transição", text: "Subir com os pentes 0.5, 1 e 1.5, suavizando as marcas com o movimento 'C-Stroke'." },
        { name: "Topo", text: "Cortar o topo com tesoura, mantendo 5-7cm para modelar." },
        { name: "Finalização", text: "Aplicar pó texturizador ou pomada matte para volume e definição." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se você está procurando um corte que projete confiança e atitude logo de cara, o <strong>High Fade</strong> é o seu destino. Diferente dos degradês mais baixos e discretos, o "high" (alto) sobe a linha de raspagem até a curvatura do crânio, deixando as laterais extremamente limpas. Aqui no Cavanhaque, consideramos este o corte "coringa" para o homem moderno: funciona no escritório, na academia e na balada.
          </p>

          <ToolBox 
            tools={[
              { name: "Pó Texturizador para Volume", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pomada Matte de Alta Fixação", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Secador de Cabelo Profissional", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Como Pedir ao Barbeiro",
                description: "Diga: 'Quero um High Fade bem limpo, começando na zero baixa. No topo, quero manter o comprimento para jogar para o lado (ou para trás), tirando apenas as pontas'.",
                tip: "Peça para fazer o 'pezinho' frontal bem marcado para um visual mais agressivo e moderno."
              },
              {
                title: "A Lavagem Estratégica",
                description: "Lave o cabelo com água morna para abrir as cutículas. Use um shampoo de limpeza profunda para remover resíduos de produtos anteriores.",
                tip: "Finalize o enxágue com água fria para selar os fios e dar brilho natural."
              },
              {
                title: "Secagem com Volume",
                description: "Use o secador em temperatura média, direcionando o ar da raiz para as pontas. Use os dedos para levantar o topo enquanto seca.",
                tip: "O segredo do High Fade é o volume no topo para contrastar com as laterais raspadas."
              },
              {
                title: "Finalização Matte",
                description: "Aplique uma pequena quantidade de pó texturizador diretamente na raiz. Modele com as mãos para um visual 'messy' ou com pente para um visual clássico.",
                tip: "O pó texturizador é ideal para quem tem cabelos finos, pois dá corpo e fixação sem pesar."
              }
            ]}
          />

          <p className="mb-6">
            A versatilidade é o trunfo aqui. Você pode usar o topo arrepiado, para o lado ou até mesmo em um mini-pompadour. Além disso, o High Fade ajuda a disfarçar falhas nas laterais e dá um aspecto mais jovem ao visual.
          </p>

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O High Fade exige manutenção pesada. Em 7 dias, a 'zero' lateral já virou uma 'um' e o contraste se perde. Se você quer manter esse visual de alto impacto, precisará visitar o barbeiro semanalmente para o 'tapa' na lateral. É o preço da perfeição urbana."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'poda-matte', name: "Pomada Matte Premium", desc: "Efeito seco com alta fixação para o dia todo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'french-crop-cesar-moderno': {
      title: "French Crop: O Corte César Moderno para Homens com Entradas",
      subtitle: "Descubra por que o French Crop é a solução definitiva para disfarçar entradas e testa larga com muito estilo e textura.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "10 min",
      category: "Cabelo",
      image: "/assets/french-crop.webp",
      howToSteps: [
        { name: "Base Lateral", text: "Executar um Low Fade ou Mid Fade nas laterais." },
        { name: "Corte da Franja", text: "Cortar a franja reta ou levemente desfiada na altura do meio da testa." },
        { name: "Texturização", text: "Usar tesoura de desbaste no topo para criar camadas e movimento." },
        { name: "Finalização", text: "Secar para frente e aplicar cera matte com as pontas dos dedos." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se você está lutando contra o recuo da linha capilar (as famosas entradas), o <strong>French Crop</strong> é seu melhor aliado. Inspirado no corte dos imperadores romanos, esta versão moderna utiliza camadas texturizadas e uma franja frontal para camuflar imperfeições e projetar um visual contemporâneo.
          </p>

          <ToolBox 
            tools={[
              { name: "Cera Matte de Argila", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Spray de Sal Marinho", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente Garfo para Textura", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Segredo da Franja",
                description: "A franja deve ser cortada para cair naturalmente sobre a testa. Peça ao barbeiro para 'desfiar' as pontas para que não pareça um corte reto de tigela.",
                tip: "Se você tem o rosto redondo, deixe a franja um pouco mais curta para alongar a face."
              },
              {
                title: "Criando Textura com Sal Marinho",
                description: "Aplique spray de sal marinho no cabelo úmido. Isso dá volume e aquela aparência 'praiana' que o French Crop exige no topo.",
                tip: "Amasse os fios com as mãos enquanto seca para potencilizar o efeito ondulado."
              },
              {
                title: "A Finalização com Argila",
                description: "Use uma cera de argila (clay) que tenha efeito seco. Espalhe bem nas mãos e 'bagunce' o topo, trazendo tudo para frente.",
                tip: "Não use pentes! O French Crop fica muito melhor quando modelado apenas com os dedos."
              },
              {
                title: "Manutenção das Laterais",
                description: "Para manter o contraste, as laterais precisam estar sempre bem baixas. Visite o barbeiro a cada 15-20 dias.",
                tip: "O degradê baixo (Low Fade) ajuda a manter o foco no topo e na franja."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para quem tem entradas muito profundas, o segredo do French Crop é o 'crop' diagonal. Em vez de uma franja reta, peça para o barbeiro seguir a linha da sua entrada, criando uma camada que cobre a falha de forma natural, sem parecer que você está tentando esconder algo."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'clay-wax', name: "Cera de Argila Matte", desc: "Textura máxima e brilho zero para visuais modernos.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'corte-do-jaca-degrade-brasileiro': {
      title: "Corte do Jaca: O Ícone do Degradê Brasileiro Passo a Passo",
      subtitle: "O guia completo do corte que dominou as comunidades e agora é tendência global. Técnica de navalha e manutenção semanal.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "15 min",
      category: "Cabelo",
      image: "/assets/corte-do-jaca.webp",
      howToSteps: [
        { name: "Navalhado Inicial", text: "Limpar a base lateral com navalha ou shaver, criando a pele lisa." },
        { name: "Degradê Baixo", text: "Subir o fade em uma área curta (1 a 2 cm) para manter a base escura no topo." },
        { name: "Pezinho", text: "Delinear os contornos frontais e laterais com precisão milimétrica." },
        { name: "Polimento", text: "Remover qualquer sombra ou marcação com a ponta da máquina." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Diretamente do Jacarezinho para o mundo, o <strong>Corte do Jaca</strong> é sinônimo de precisão cirúrgica. Ele se diferencia pelo degradê extremamente baixo e 'disfarçado', onde a transição da pele para o cabelo acontece em um espaço minúsculo, exigindo uma técnica refinada. É a marca registrada da estética urbana brasileira.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina de Acabamento", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gel de Barbear Transparente", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Escovinha de Disfarce", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Identidade do Pezinho",
                description: "O 'pezinho' no Corte do Jaca é o que define o estilo. Ele deve ser reto e bem marcado, usando navalha para um acabamento nítido que molda o rosto.",
                tip: "Se você tem pele sensível, use um gel de barbear transparente antes de passar a navalha nos contornos."
              },
              {
                title: "A Escovação Diária",
                description: "Cabelos crespos e curtos devem ser escovados diariamente com uma escova de cerdas duras para manter os fios alinhados e o couro cabeludo saudável.",
                tip: "Escove sempre no sentido de crescimento para evitar inflamações e o aparecimento de pelos encravados."
              },
              {
                title: "Hidratação do Couro Cabeludo",
                description: "Como as laterais ficam totalmente expostas, é essencial manter a pele hidratada para evitar descamação que possa ser confundida com caspa.",
                tip: "Use um balm leve ou óleo pós-barba sem álcool nas áreas raspadas para manter a pele íntegra."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O segredo do 'Jaca' é a frequência. Para manter o efeito de pele lisa e o contraste do degradê baixo, o ideal é visitar o barbeiro toda semana. É um corte de alta manutenção, mas que garante um visual sempre impecável."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'shaver-prof', name: "Máquina Shaver Profissional", desc: "Para manter a pele lisa como navalha todos os dias.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'corte-americano-taper-moderno': {
      title: "Corte Americano (Taper Moderno): Naturalidade e Volume",
      subtitle: "Diferente do fade total, o Taper foca nos detalhes. Aprenda como manter o volume natural do seu cabelo com este corte orgânico.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "11 min",
      category: "Cabelo",
      image: "/assets/corte-americano.webp",
      howToSteps: [
        { name: "Taper nas Costeletas", text: "Fazer um degradê suave apenas na região das costeletas, preservando a lateral." },
        { name: "Taper na Nuca", text: "Executar o degradê na base da nuca para um acabamento limpo." },
        { name: "Ajuste do Topo", text: "Cortar o topo mantendo o volume natural, geralmente entre 8-10cm." },
        { name: "Finalização Orgânica", text: "Usar creme para pentear ou leave-in para definir a textura natural sem pesar." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Corte Americano</strong>, também conhecido como Taper Fade, é a antítese do degradê agressivo. Ele é focado na sutileza e na elegância. Em vez de raspar toda a lateral, o foco é criar transições suaves apenas nas costeletas e na nuca. Isso permite que você mantenha o volume e a textura natural do cabelo, criando um visual clássico e atemporal.
          </p>

          <ToolBox 
            tools={[
              { name: "Creme para Pentear Hidratante", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Leave-in com Proteção UV", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente de Madeira Anti-Estático", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Vantagem do Taper",
                description: "O Taper permite que o cabelo cresça de forma muito mais uniforme. Você não fica com aquela aparência de 'cabelo crescendo' desordenado quando o degradê começa a perder a forma.",
                tip: "É o corte ideal para quem quer um visual de baixa manutenção e que dure mais tempo entre as visitas ao barbeiro."
              },
              {
                title: "Definição de Cachos e Ondas",
                description: "Se você tem cabelo cacheado ou ondulado, o Corte Americano é perfeito para valorizar o seu volume natural. Aplique o creme para pentear com o cabelo ainda úmido.",
                tip: "Use a técnica de 'fitagem' com os dedos para definir melhor as mechas no topo e garantir movimento."
              },
              {
                title: "O Acabamento na Nuca",
                description: "A nuca deve ser limpa em formato de 'arco' ou 'quadrada', dependendo da sua preferência, mas sempre com o degradê subindo suavemente para não criar degraus.",
                tip: "Peça ao barbeiro para não subir muito o degradê na nuca para manter o aspecto clássico e masculino."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Corte Americano é o favorito de quem usa barba. A transição suave na costeleta permite uma conexão perfeita entre o cabelo e a barba, criando uma moldura harmoniosa para o rosto sem interrupções bruscas."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'leave-in-premium', name: "Leave-in Definição Total", desc: "Controle de frizz e hidratação para cabelos com volume.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'buzz-cut-design-risca-navalha': {
      title: "Buzz Cut com Risca: Minimalismo e Atitude na Navalha",
      subtitle: "Como transformar um corte raspado simples em uma obra de arte geométrica com riscas laterais e design de hair tattoo.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "8 min",
      category: "Cabelo",
      image: "/assets/buzz-cut.webp",
      howToSteps: [
        { name: "Raspagem Uniforme", text: "Passar a máquina 1 ou 2 em todo o crânio de forma homogênea." },
        { name: "Escolha do Design", text: "Decidir o local e o formato da risca ou desenho geométrico." },
        { name: "Marcação", text: "Usar a máquina de acabamento para traçar o rascunho do desenho." },
        { name: "Navalhado", text: "Finalizar a risca com navalha e gel de barbear para máxima nitidez." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Buzz Cut</strong> é o auge da praticidade masculina. Mas, para quem acha o visual raspado 'simples demais', a adição de uma risca lateral ou um design geométrico muda completamente o jogo. É uma forma de expressar personalidade e agressividade de maneira minimalista e estilosa.
          </p>

          <ToolBox 
            tools={[
              { name: "Gel de Barbear Transparente", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Lâminas de Navalha de Platina", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo Anticaspa Suave", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Simetria do Desenho",
                description: "A risca geralmente segue a linha natural da sobrancelha ou a curvatura lateral do crânio. Deve ser feita com firmeza e precisão para que a linha não fique tremida ou torta.",
                tip: "Desenhos mais simples, como uma linha única ou dupla, são mais fáceis de manter e projetam muito mais sofisticação."
              },
              {
                title: "Proteção do Couro Cabeludo",
                description: "Como o cabelo está extremamente curto, o couro cabeludo fica exposto aos raios UV. O uso de protetor solar ou bonés torna-se obrigatório para evitar queimaduras.",
                tip: "Aplique um hidratante facial leve após a lavagem para evitar que a pele do crânio descame e estrague o visual do corte."
              },
              {
                title: "Manutenção da Risca",
                description: "O desenho perde a nitidez em cerca de 7 a 10 dias. Para manter o visual impactante, você precisará retocar a risca com frequência no barbeiro.",
                tip: "Não tente retocar o desenho sozinho em casa se não tiver experiência com navalha; você pode acabar engrossando a linha por erro."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Buzz Cut com risca é um teste de formato de crânio. Se você tem cicatrizes ou irregularidades que quer esconder, a risca pode ser usada estrategicamente para desviar o olhar para o design e camuflar o que você deseja."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'sun-prot', name: "Protetor Solar Facial Matte", desc: "Proteção essencial para quem usa cabelo raspado.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'wolf-cut-masculino-tendencia': {
      title: "Wolf Cut Masculino: A Fusão Rebelde entre Mullet e Shag",
      subtitle: "Descubra como adotar o corte que é tendência absoluta no TikTok e entre a Geração Z. Volume, camadas e muita atitude.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "14 min",
      category: "Cabelo",
      image: "/assets/wolf-cut.webp",
      howToSteps: [
        { name: "Divisão de Camadas", text: "Criar camadas desconectadas desde o topo até a nuca." },
        { name: "Desfiado", text: "Usar navalha ou tesoura fio navalha para criar pontas irregulares e leves." },
        { name: "Volume na Nuca", text: "Manter o comprimento na parte de trás, cobrindo o pescoço." },
        { name: "Finalização Messy", text: "Usar spray de sal marinho e secador com difusor para textura bagunçada." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Se você quer fugir dos degradês tradicionais e busca algo com muito mais movimento e 'vibe' rockstar, o <strong>Wolf Cut</strong> é a sua escolha. Ele mistura o volume desordenado do Shag dos anos 70 com a estrutura alongada do Mullet, criando um visual 'selvagem' (daí o nome Wolf) que valoriza quem tem cabelos ondulados ou cacheados.
          </p>

          <ToolBox 
            tools={[
              { name: "Mousse de Volume", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pomada de Efeito Teia", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Difusor para Secador", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Corte em Camadas",
                description: "O segredo são as camadas curtas no topo e longas na nuca. Peça ao barbeiro para usar a técnica de navalha para criar pontas desfiadas que dão leveza ao corte.",
                tip: "Não deixe as camadas muito marcadas; o Wolf Cut deve parecer que você acordou assim, de forma natural."
              },
              {
                title: "Secagem com Difusor",
                description: "Para quem tem ondas, o difusor é obrigatório. Ele seca o cabelo sem desmanchar os cachos, mantendo o volume 'selvagem' no topo e nas laterais.",
                tip: "Seque com a cabeça abaixada para ganhar ainda mais volume na raiz."
              },
              {
                title: "Finalização com Teia",
                description: "Use uma pomada de efeito teia (fibrosa). Aplique nas pontas das camadas para dar definição sem deixar o cabelo duro. O objetivo é movimento.",
                tip: "Evite pomadas muito oleosas, pois o Wolf Cut precisa de leveza para não parecer 'pesado' ou sujo."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Wolf Cut é um corte de 'atitude'. Se você tem o rosto muito fino, ele ajuda a criar volume lateral, equilibrando as proporções. Mas atenção: ele exige que você finalize o cabelo quase todos os dias com spray de sal marinho para não perder o formato de 'lobo' e parecer apenas um cabelo descuidado."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'sea-salt-spray', name: "Spray de Sal Marinho Premium", desc: "Textura e volume instantâneo para o efeito Wolf Cut.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },

    'asa-delta-mullet-brasileiro': {
      title: "Asa Delta: A Reinterpretação Brasileira do Mullet Clássico",
      subtitle: "Conheça o corte que mistura o degradê moderno com a nuca alongada, criando um visual aerodinâmico e cheio de estilo.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "13 min",
      category: "Cabelo",
      image: "/assets/asa-delta-mullet.webp",
      howToSteps: [
        { name: "Raspagem Lateral", text: "Passar máquina 2 ou 3 nas laterais, subindo até a linha da têmpora." },
        { name: "Conexão do Topo", text: "Manter o topo médio, conectando suavemente com as laterais raspadas." },
        { name: "Preservação da Nuca", text: "Não cortar a parte de trás, deixando os fios crescerem até a base do pescoço ou além." },
        { name: "Estilização", text: "Secar o topo para trás e deixar a nuca com movimento natural ou levemente ondulada." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Asa Delta</strong> é a prova de que o Mullet nunca morreu, ele apenas se adaptou ao estilo brasileiro. Com as laterais em degradê (fade) e o topo conectado a uma nuca mais comprida e 'pontuda', este corte cria uma silhueta aerodinâmica que remete às asas de uma asa-delta. É o visual favorito de quem quer ousar sem perder a modernidade das barbearias atuais.
          </p>

          <ToolBox 
            tools={[
              { name: "Spray de Fixação Extra Forte", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Dentes Largos", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo Finalizador Leve", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Contraste das Laterais",
                description: "As laterais devem ter um fade limpo para que o volume da nuca e do topo se destaque. O degradê pode ser Mid ou High, dependendo do seu estilo.",
                tip: "Mantenha o pezinho atrás da orelha bem limpo para dar nitidez ao desenho do corte."
              },
              {
                title: "O Penteado em 'V'",
                description: "Penteie a nuca para baixo e para o centro, criando um efeito de ponta. No topo, você pode usar arrepiado ou para frente, conectando com a franja.",
                tip: "Use um pouco de spray de fixação na nuca para que o formato em 'V' não se desfaça com o vento ou movimento."
              },
              {
                title: "Hidratação da Nuca",
                description: "Como a nuca é a parte mais longa, ela tende a ressecar ou embaraçar. Use um condicionador de qualidade e um óleo finalizador para manter os fios saudáveis.",
                tip: "Lave bem a região da nuca para evitar o acúmulo de suor e oleosidade, que podem causar irritações na pele."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Asa Delta é um corte que 'fala'. Ele atrai olhares e transmite muita personalidade. Se você trabalha em ambientes muito formais, use uma versão mais discreta (com a nuca menos longa). Para o final de semana, abuse do volume e da definição usando uma pomada de efeito seco para manter a aerodinâmica."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'hair-mask-nutri', name: "Máscara de Nutrição Intensa", desc: "Ideal para manter a nuca longa do Mullet saudável.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'box-braids-masculina-afro': {
      title: "Box Braids Masculina: Estilo, Proteção e Identidade Afro",
      subtitle: "Tudo o que você precisa saber para adotar as tranças box braids: da escolha do material aos cuidados de manutenção diária.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "18 min",
      category: "Cabelo",
      image: "/assets/box-braids.webp",
      howToSteps: [
        { name: "Preparação", text: "Lavar e desembaraçar o cabelo crespo profundamente antes do processo." },
        { name: "Divisão Geométrica", text: "Separar o couro cabeludo em seções quadradas (box) precisas." },
        { name: "Trançado", text: "Trançar os fios naturais com material sintético (jumbo) ou apenas o próprio cabelo." },
        { name: "Selagem", text: "Finalizar as pontas com água quente para selar e evitar que desmanchem." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            As <strong>Box Braids</strong> são muito mais do que um penteado; são um símbolo de resistência, cultura e identidade. Além da estética impecável, elas funcionam como um 'penteado protetor', ajudando no crescimento saudável do cabelo afro ao reduzir a manipulação diária e a quebra. É o visual definitivo para quem busca versatilidade e impacto.
          </p>

          <ToolBox 
            tools={[
              { name: "Tônico Capilar Antisséptico", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Touca de Cetim para Dormir", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Spray de Brilho para Tranças", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Escolha do Material",
                description: "Você pode usar seu cabelo natural ou extensões sintéticas (como Jumbo ou Kanekalon) para dar mais comprimento e volume. Escolha uma cor que complemente seu tom de pele.",
                tip: "Opte por materiais mais leves para não sobrecarregar a raiz do seu cabelo natural e evitar a alopecia de tração."
              },
              {
                title: "A Lavagem do Couro Cabeludo",
                description: "Lave apenas o couro cabeludo com shampoo diluído em água. Use as pontas dos dedos suavemente entre as divisões (boxes) para não desmanchar o penteado.",
                tip: "Seque as tranças completamente com secador no modo frio para evitar mofo ou mau cheiro dentro da estrutura da trança."
              },
              {
                title: "O Ritual do Sono",
                description: "Use sempre uma touca ou fronha de cetim. O cetim reduz o atrito e evita o aparecimento do frizz, mantendo as tranças com aspecto de 'novas' por muito mais tempo.",
                tip: "Se não tiver touca, amarre um lenço de seda suavemente ao redor da cabeça antes de deitar."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Não exceda 8 semanas com as mesmas tranças. O peso e o acúmulo de resíduos podem enfraquecer os fios. Faça uma pausa de 15 dias entre uma aplicação e outra para hidratar profundamente o seu cabelo natural com óleos essenciais e máscaras de reconstrução."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'satin-cap', name: "Touca de Cetim Premium", desc: "Acessório indispensável para trançados e cabelos crespos.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'scumbag-fade-classico-retro': {
      title: "Scumbag Fade: O Charme Rebelde do Visual Vintage",
      subtitle: "Aprenda a domar o corte que mistura a elegância do penteado clássico com a agressividade do degradê moderno.",
      author: "Carlos Barbudo",
      date: "14 de Março de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/scumbag-fade.webp",
      howToSteps: [
        { name: "Fade Alto", text: "Executar um degradê alto e nítido nas laterais e nuca." },
        { name: "Risca de Navalha", text: "Marcar a repartição lateral com navalha, criando o 'Hard Part'." },
        { name: "Corte do Topo", text: "Manter o topo médio (6-8cm) with caimento para o lado oposto à risca." },
        { name: "Finalização Brilhosa", text: "Aplicar pomada de brilho e pentear com pente fino para alinhar cada fio." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Inspirado na estética 'greaser' e nos clássicos barbudos do cinema, o <strong>Scumbag Fade</strong> é o corte para quem não tem medo de usar pomada. Ele se caracteriza por um topo longo penteado para o lado ou para trás com muito brilho, contrastando com laterais em degradê bem marcado. É o equilíbrio perfeito entre o cavalheiro e o rebelde.
          </p>

          <ToolBox 
            tools={[
              { name: "Pomada à Base de Óleo (High Shine)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Acetato Clássico", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Escova Quiff Roller", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Risca Lateral (Hard Part)",
                description: "Muitas vezes o Scumbag Fade vem acompanhado de uma 'risca navalhada'. Isso dá um aspecto mais geométrico e facilita na hora de pentear o topo para o lado oposto.",
                tip: "Peça ao barbeiro para não deixar a risca muito grossa; o charme está na precisão de uma linha fina."
              },
              {
                title: "A Arte de Passar Pomada",
                description: "Para este estilo, o brilho é essencial. Use pomadas com alto brilho e fixação forte. Aplique no cabelo levemente úmido para facilitar a distribuição e o penteado.",
                tip: "Espalhe a pomada nas mãos até que fiquem quentes antes de aplicar nos fios para evitar grumos."
              },
              {
                title: "O Penteado Perfeito",
                description: "Use o pente para criar linhas paralelas e bem definidas. O topo deve estar impecavelmente assentado, sem fios soltos ou arrepiados.",
                tip: "Se quiser um visual mais volumoso (Pompadour), use a escova redonda e o secador antes de aplicar a pomada finalizadora."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Scumbag Fade exige 'manutenção de estilo'. Se você não gosta de passar tempo na frente do espelho com o pente e a pomada, este não é o corte para você. É um visual de impacto que precisa de cuidado diário e um navalhado fresco a cada 15 dias para não perder a essência vintage."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'pomade-shine', name: "Pomada de Brilho Clássica", desc: "Fixação forte com efeito molhado para visuais retrô.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'cabelo-platinado-nevou-guia': {
      title: "Nevou: O Guia Definitivo do Cabelo Platinado Masculino",
      subtitle: "Descubra como chegar ao branco absoluto sem destruir seus fios. Dicas de matização, reconstrução e o segredo para o 'nevou' perfeito.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "15 min",
      category: "Cabelo",
      image: "/assets/platinado-global.webp",
      howToSteps: [
        { name: "Descoloração", text: "Aplicar pó descolorante com água oxigenada (vol 30 ou 40) até atingir o tom 9 ou 10." },
        { name: "Matização", text: "Usar tonalizante ou shampoo roxo para remover o amarelo e chegar no branco platinado." },
        { name: "Reconstrução", text: "Realizar uma carga de queratina imediatamente após o processo químico." },
        { name: "Manutenção", text: "Usar shampoos matizadores e máscaras de hidratação profunda semanalmente." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O fenômeno <strong>'Nevou'</strong> transcendeu as comunidades e se tornou o visual mais desejado do verão brasileiro. Mas não se engane: platinar o cabelo é um processo químico agressivo que exige responsabilidade. Aqui no Cavanhaque, ensinamos você a conquistar o branco 'neve' mantendo a saúde do seu couro cabeludo e a integridade dos fios.
          </p>

          <ToolBox 
            tools={[
              { name: "Shampoo Matizador Violeta", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Máscara de Reconstrução com Queratina", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Argan Puro", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Teste de Mecha",
                description: "Antes de aplicar o descolorante em toda a cabeça, teste em uma pequena mecha na nuca. Isso garante que seu cabelo aguenta a química sem 'derreter' (o famoso corte químico).",
                tip: "Se a mecha ficar elástica ou quebrar ao ser puxada, não siga com o processo; seu cabelo precisa de reconstrução antes."
              },
              {
                title: "A Matização Correta",
                description: "O shampoo roxo (matizador) não clareia o cabelo; ele apenas neutraliza o amarelo. Use apenas 1 ou 2 vezes por semana para não deixar o cabelo com aspecto acinzentado ou roxo.",
                tip: "Deixe o matizador agir por no máximo 5 minutos. É melhor repetir o processo do que exagerar no tempo de pausa."
              },
              {
                title: "O Cronograma 'Nevou'",
                description: "Cabelo platinado precisa de um cronograma capilar rígido: Hidratação, Nutrição e Reconstrução. A queratina é sua melhor amiga para repor a massa perdida no descolorante.",
                tip: "Nunca lave o cabelo platinado com água muito quente; isso abre as cutículas e faz a cor 'amarelar' mais rápido."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O segredo do platinado de respeito é a raiz. Se você quer o efeito 'nevou' total, certifique-se de que o descolorante encostou suavemente no couro cabeludo (com proteção adequada), mas esteja pronto para a ardência. E nunca esqueça: o platinado sem hidratação vira palha em 48 horas."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'reconst-kit', name: "Kit Reconstrução S.O.S", desc: "Tudo o que seu cabelo precisa para sobreviver ao nevou.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'dreadlocks-curtos-taper-fade': {
      title: "Dreadlocks Curtos com Taper Fade: Ancestralidade e Estilo Urbano",
      subtitle: "A união perfeita entre o clássico e o moderno. Como iniciar seus dreads e manter o degradê lateral sempre em dia.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "14 min",
      category: "Cabelo",
      image: "/assets/dreadlocks-curto.webp",
      howToSteps: [
        { name: "Divisão de Mechas", text: "Separar o topo do cabelo em seções circulares ou quadradas." },
        { name: "Criação dos Dreads", text: "Usar agulha de crochê para compactar os fios e formar a estrutura do dread." },
        { name: "Degradê Lateral", text: "Executar um Taper Fade ou Mid Fade nas laterais e nuca." },
        { name: "Limpeza de Raiz", text: "Organizar os fios novos na base do dread mensalmente." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Os <strong>Dreadlocks Curtos</strong> com degradê lateral são a representação máxima da modernidade negra. Eles oferecem a praticidade de um corte curto nas laterais com a força visual e cultural dos dreads no topo. É um estilo de baixa manutenção diária, mas que exige visitas regulares a um profissional de dreads (loctician) para manter a raiz organizada.
          </p>

          <ToolBox 
            tools={[
              { name: "Agulha de Crochê 0.6mm", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Shampoo de Limpeza Profunda (Residue Free)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Spray de Brilho e Aroma para Dreads", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Lavagem de Dreads",
                description: "Dreads curtos secam rápido, mas o interior deve ser bem enxaguado. Use apenas shampoos que não deixem resíduos, para evitar mofo ou acúmulo de sujeira.",
                tip: "Lave seus dreads pela manhã e, se possível, use um secador para garantir que o centro de cada dread esteja seco."
              },
              {
                title: "Manutenção do Fade",
                description: "O contraste é o que faz este corte brilhar. Mantenha o degradê lateral sempre 'fresco' visitando o barbeiro a cada 15 dias.",
                tip: "Peça para o barbeiro não encostar a máquina na base dos dreads para não enfraquecer a estrutura."
              },
              {
                title: "Retwist da Raiz",
                description: "Conforme o cabelo cresce, a base do dread fica frouxa. O 'retwist' organiza esses fios novos para dentro do dread.",
                tip: "Não aperte demais a raiz no retwist para evitar alopecia de tração e dores de cabeça."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A paciência é a maior virtude de quem usa dreads. Nos primeiros meses, eles podem parecer 'bagunçados', mas é o processo natural de maturação. Use uma touca de cetim para dormir e aplique um tônico antisséptico no couro cabeludo para evitar coceiras e manter a saúde da raiz."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'dread-shampoo', name: "Shampoo Especial para Dreads", desc: "Livre de resíduos, mantém os dreads leves e cheirosos.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'corte-social-classico-corporativo': {
      title: "Corte Social Clássico: O Padrão Ouro para o Ambiente Corporativo",
      subtitle: "Seriedade e confiança em um corte atemporal. Aprenda a equilibrar o volume lateral para projetar liderança.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/social-classico.webp",
      howToSteps: [
        { name: "Laterais na Tesoura", text: "Cortar as laterais com técnica de pente sobre tesoura para um caimento natural." },
        { name: "Topo Equilibrado", text: "Manter o topo com 5-6cm, proporcional às laterais." },
        { name: "Acabamento de Nuca", text: "Limpar a nuca de forma quadrada ou arredondada, sem exagerar no raspado." },
        { name: "Penteado Clássico", text: "Repartir lateralmente e finalizar com creme ou pomada leve." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            No mundo dos negócios, a imagem é uma ferramenta de negociação. O <strong>Corte Social Clássico</strong> é o terno sob medida da barbearia. Ele não busca tendências passageiras, mas sim a harmonia das proporções faciais. É um corte que transmite estabilidade, maturidade e atenção aos detalhes.
          </p>

          <ToolBox 
            tools={[
              { name: "Pomada de Fixação Leve", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Tartaruga (Pente Clássico)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Creme Modelador com Brilho Discreto", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Poder da Repartição",
                description: "A linha de repartição deve ser limpa e seguir a curvatura natural do seu crânio. Use um pente para encontrar o ponto onde o cabelo 'abre' naturalmente.",
                tip: "Se você tem o rosto muito longo, evite dar muito volume no topo para não alongar ainda mais."
              },
              {
                title: "Finalização Executiva",
                description: "Aplique uma pequena quantidade de creme modelador. Penteie para o lado e para trás, mantendo os fios alinhados mas sem aquele aspecto 'duro' de gel.",
                tip: "Use as mãos após o pente para dar um toque mais natural e menos rígido ao visual."
              },
              {
                title: "A Importância da Nuca Limpa",
                description: "O que diferencia um corte social bem feito é a limpeza da nuca e das orelhas. Pelos crescendo nessas áreas passam imagem de desleixo.",
                tip: "Faça uma manutenção rápida em casa com um aparador apenas nas áreas periféricas a cada 10 dias."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O corte social clássico é sobre 'manutenibilidade'. Ele envelhece bem, o que significa que mesmo após 20 dias ele ainda mantém uma estrutura aceitável. É a escolha perfeita para homens que viajam muito a trabalho e precisam projetar autoridade constante sem depender de um barbeiro semanal."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'classic-comb', name: "Pente de Carbono Antiestático", desc: "O parceiro ideal para o penteado social perfeito.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'moicano-disfarcado-fade': {
      title: "Moicano Disfarçado: O Degradê que Cria Atitude sem Exageros",
      subtitle: "Uma crista suave no topo que desce até a nuca. O guia para quem quer ousadia com um toque de sofisticação no fade.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "11 min",
      category: "Cabelo",
      image: "/assets/moicano-disfarcado.webp",
      howToSteps: [
        { name: "Marcação da Crista", text: "Isolar a faixa central do topo, da testa até a nuca." },
        { name: "Fade Lateral", text: "Executar um degradê (fade) nas laterais, conectando com a barba se houver." },
        { name: "Texturização do Centro", text: "Usar tesoura de desbaste para dar leveza e permitir que os fios fiquem 'espetados'." },
        { name: "Finalização", text: "Aplicar gel de fixação forte ou pomada matte, direcionando os fios para o centro e para cima." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Moicano Disfarçado</strong> (ou Faux Hawk) é a versão 'civilizada' do moicano clássico. Em vez de raspar tudo lateralmente, usamos um degradê para criar uma transição suave, mantendo o foco no volume central que se estende até a nuca. É um corte dinâmico, que passa uma imagem de energia e atitude moderna.
          </p>

          <ToolBox 
            tools={[
              { name: "Gel de Fixação Ultra Forte", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pomada Matte de Alta Performance", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Secador com Bico Direcionador", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Segredo do Volume Central",
                description: "Para o moicano não 'cair' durante o dia, você precisa de uma base sólida. Aplique o produto com o cabelo seco e use o secador apontando para cima.",
                tip: "Use os dedos em formato de 'garra' para unir as pontas no centro e criar a crista característica."
              },
              {
                title: "A Linha da Nuca",
                description: "Diferente de outros cortes onde a nuca é raspada reta, no moicano disfarçado o volume deve descer acompanhando a coluna vertebral.",
                tip: "Peça ao barbeiro para fazer um degradê em 'V' na nuca para acentuar o formato do corte."
              },
              {
                title: "Versatilidade no Dia a Dia",
                description: "Nos dias em que não quiser usar o moicano, você pode simplesmente pentear o topo para o lado. O degradê lateral garante que o visual continue alinhado.",
                tip: "A textura desfiada no topo é o que permite essa versatilidade entre o 'espetado' e o 'comportado'."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Moicano Disfarçado é o corte perfeito para quem tem o rosto redondo, pois o volume no topo ajuda a alongar a face. O segredo da manutenção é usar um secador direcionando o ar de baixo para cima na base da crista, fixando o formato antes mesmo de passar qualquer pomada."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'strong-gel', name: "Gel de Fixação Blindada", desc: "Mantém o moicano intacto mesmo em condições extremas.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'surfer-shag-longo-ondulado': {
      title: "Surfer Shag: O Guia do Cabelo Longo com Textura Praiana",
      subtitle: "Movimento, leveza e luzes sun-kissed. Aprenda como finalizar o cabelo longo para um visual despojado e saudável.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "13 min",
      category: "Cabelo",
      image: "/assets/surfer-shag.webp",
      howToSteps: [
        { name: "Corte em Camadas", text: "Retirar o peso excessivo das pontas com camadas longas e fluidas." },
        { name: "Luzes Naturais", text: "Opcional: fazer mechas finíssimas em tons de mel ou dourado para simular o efeito do sol." },
        { name: "Hidratação", text: "Usar máscaras de nutrição para manter as pontas saudáveis e sem frizz." },
        { name: "Texturização", text: "Finalizar com spray de sal marinho e secagem natural." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Surfer Shag</strong> é a celebração do estilo livre. Perfeito para homens com cabelos ondulados ou cacheados, este corte foca no movimento natural. O objetivo é parecer que você acabou de sair da praia: um visual levemente bagunçado, volumoso e com fios que parecem clareados naturalmente pelo sol.
          </p>

          <ToolBox 
            tools={[
              { name: "Spray de Sal Marinho (Sea Salt Spray)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Óleo de Coco ou Argan", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo sem Sulfato (Low Poo)", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Lavagem para Cabelos Longos",
                description: "Cabelos longos sofrem mais com o ressecamento das pontas. Use shampoo apenas na raiz e deixe a espuma escorrer pelo comprimento.",
                tip: "Sempre use condicionador do meio para as pontas. Nunca aplique na raiz para evitar oleosidade excessiva."
              },
              {
                title: "O Ritual do Sal Marinho",
                description: "Com o cabelo úmido, borrife o spray de sal marinho generosamente. Amasse os fios com as mãos, de baixo para cima, para estimular as ondas.",
                tip: "Deixe secar naturalmente ao vento para um resultado mais autêntico e menos armado."
              },
              {
                title: "Proteção contra o Sol e Cloro",
                description: "Se você frequenta praia ou piscina, o cabelo longo exige proteção. Use leave-in com filtro solar para evitar que o fio fique 'elástico' e desbotado.",
                tip: "Enxágue o cabelo com água doce logo após sair do mar ou da piscina."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O cabelo longo masculino é uma jornada de paciência. Para o Surfer Shag, o segredo é o 'sal marinho' caseiro: misture água mineral com uma colher de sal grosso e borrife nos fios. Isso cria a textura áspera e volumosa da praia sem precisar de produtos químicos pesados."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'sun-leave-in', name: "Leave-in com Proteção Solar", desc: "Essencial para manter a cor e a saúde do cabelo longo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'top-knot-coque-samurai': {
      title: "Top Knot (Coque Samurai): Como Crescer e Estilizar o Topo",
      subtitle: "Paciência e estilo. O manual para quem quer adotar o coque samurai com undercut lateral sem perder a masculinidade.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/top-knot.webp",
      howToSteps: [
        { name: "Undercut Lateral", text: "Raspar as laterais e nuca na máquina 0 ou 1, criando uma linha de desconexão clara." },
        { name: "Crescimento do Topo", text: "Manter o topo crescendo até atingir no mínimo 15cm de comprimento." },
        { name: "O Nó", text: "Puxar todo o topo para trás e prender em um coque alto na coroa da cabeça." },
        { name: "Alinhamento", text: "Usar um pouco de pomada nas laterais do topo para baixar os fios 'rebeldes'." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Top Knot</strong>, ou Coque Samurai, é um visual de forte impacto visual. Ele exige paciência, pois a fase de crescimento do topo (o 'período estranho') pode durar meses. No entanto, o resultado é um visual que transmite força, foco e uma identidade artística única. Quando combinado com um undercut bem feito, o contraste é imbatível.
          </p>

          <ToolBox 
            tools={[
              { name: "Elásticos de Cabelo (Sem Metal)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pomada de Fixação Média", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Tônico de Crescimento Acelerado", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Superando a Fase de Crescimento",
                description: "Durante os primeiros 6 meses, o cabelo não terá comprimento para prender. Use pomadas e bonés para controlar o volume nesse período.",
                tip: "Mantenha as laterais (undercut) sempre em dia para que o visual pareça intencional e não apenas desleixo."
              },
              {
                title: "Como Fazer o Coque Perfeito",
                description: "Puxe o cabelo para trás como se fosse fazer um rabo de cavalo. Na última volta do elástico, não passe o cabelo todo, criando o 'nó' ou coque.",
                tip: "Não aperte demais o elástico para não causar dor de cabeça e nem quebrar os fios na base."
              },
              {
                title: "Saúde do Couro Cabeludo",
                description: "Cabelo preso o tempo todo pode abafar o couro cabeludo. Solte o cabelo ao dormir e lave profundamente para evitar caspa e oleosidade.",
                tip: "Massageie a raiz ao lavar para estimular a circulação e fortalecer os fios."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Nunca faça o coque samurai com o cabelo molhado. Isso apodrece o fio e causa fungos no couro cabeludo pelo abafamento. Seque bem com secador antes de prender, e use sempre elásticos de silicone que não 'cortam' a fibra capilar."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'hair-tie-set', name: "Kit Elásticos de Silicone", desc: "Não quebram o fio e mantêm o coque firme o dia todo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'fringe-fade-franja-masculina': {
      title: "Fringe Fade: A Franja Masculina que Dominou a Cultura E-Boy",
      subtitle: "O topo projetado para frente com degradê navalhado. Como estilizar a franja para esconder entradas e criar modernidade.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "10 min",
      category: "Cabelo",
      image: "/assets/fringe-fade.webp",
      howToSteps: [
        { name: "Degradê Navalhado", text: "Executar um High Fade ou Skin Fade nas laterais para máximo contraste." },
        { name: "Corte da Franja", text: "Projetar o topo para frente, cortando a franja na altura das sobrancelhas." },
        { name: "Texturização Fina", text: "Desfiar as pontas da franja para evitar o aspecto 'bloco'." },
        { name: "Finalização Matte", text: "Usar pomada em pó ou cera seca para manter o movimento frontal." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Fringe Fade</strong> é a escolha definitiva da geração Z. Ele combina o rigor das laterais raspadas com a fluidez de uma franja frontal texturizada. É um corte extremamente versátil para quem quer um visual jovem e moderno, além de ser a técnica perfeita para camuflar entradas laterais ou testa larga de forma estilosa.
          </p>

          <ToolBox 
            tools={[
              { name: "Pó Texturizador para Volume", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Secador com Jato de Ar Frio", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente de Dentes Finos", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Movimento Frontal",
                description: "A franja não deve ficar estática. O segredo é usar produtos que permitam o balanço do cabelo enquanto ele permanece no lugar.",
                tip: "Ao secar, use o jato de ar de trás para frente para 'empurrar' o volume para a testa."
              },
              {
                title: "Ajuste do Comprimento",
                description: "A altura ideal da franja é logo acima dos olhos. Se ficar muito longa, pode atrapalhar a visão e perder o formato do corte.",
                tip: "Peça ao barbeiro para 'picotar' as pontas com a ponta da tesoura para um acabamento mais natural."
              },
              {
                title: "Manutenção do Degradê",
                description: "Como o foco é o contraste, as laterais precisam estar sempre muito limpas. O ideal é retocar o fade a cada 10 dias.",
                tip: "Se você usa óculos, peça para o barbeiro limpar bem a área das hastes para evitar que o cabelo 'levante' o acessório."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para a franja perfeita no Fringe Fade, o segredo é o pó texturizador. Aplique apenas na raiz da franja e 'bagunce' com as pontas dos dedos. Isso cria volume sem deixar o cabelo com aspecto oleoso ou pesado, mantendo o movimento natural que o estilo exige."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'textur-powder', name: "Pó Modelador de Volume", desc: "Efeito matte instantâneo para franjas perfeitas.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'afro-nudred-textura-definicao': {
      title: "Afro com Nudred: Textura e Definição para Fios Crespos",
      subtitle: "A técnica da esponja que revolucionou a finalização afro. Como criar twists perfeitos em minutos com o protocolo Nudred.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "9 min",
      category: "Cabelo",
      image: "/assets/nudred-afro.webp",
      howToSteps: [
        { name: "Lavagem e Umidade", text: "Lavar o cabelo e manter levemente úmido (não encharcado)." },
        { name: "Aplicação de Ativador", text: "Espalhar ativador de cachos ou leave-in nutritivo por todo o topo." },
        { name: "Movimento Circular", text: "Passar a esponja Nudred em círculos, sempre no mesmo sentido, por todo o cabelo." },
        { name: "Fixação", text: "Deixar secar naturalmente ou usar secador com jato fraco para fixar os twists." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A técnica <strong>Nudred</strong> é a salvação para quem quer definição em cabelos crespos curtos ou médios (4B e 4C). Usando uma esponja perfurada, você consegue criar 'twists' (pequenos tornados de cabelo) de forma uniforme e rápida, dando uma textura incrível e um aspecto muito mais cuidado ao visual afro.
          </p>

          <ToolBox 
            tools={[
              { name: "Esponja Nudred Profissional", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Ativador de Cachos Intensivo", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Rícino para Fortalecimento", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Direção Única",
                description: "O erro mais comum é mudar o sentido do círculo com a esponja. Escolha um lado (horário ou anti-horário) e mantenha-o até o fim.",
                tip: "Se você mudar a direção, vai desmanchar os twists que acabou de criar."
              },
              {
                title: "Pressão Moderada",
                description: "Não aperte a esponja contra a cabeça. Deixe que os furos façam o trabalho. Pressão excessiva achata o cabelo e não forma o espiral.",
                tip: "Faça movimentos leves e rápidos. O processo todo não deve levar mais que 10 minutos."
              },
              {
                title: "Duração do Estilo",
                description: "Os twists duram até a próxima lavagem. Para manter a definição ao acordar, use sempre touca de cetim.",
                tip: "Se algum twist desmanchar, você pode refazê-lo individualmente usando apenas os dedos e um pouco de pomada."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para o Nudred perfeito, o segredo está na umidade do cabelo. Ele não deve estar nem seco, nem encharcado. Use um borrifador com água e um pouco de leave-in; o cabelo úmido tem a elasticidade necessária para que a esponja crie os twists sem quebrar a fibra capilar."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'nudred-sponge', name: "Esponja Nudred de Dupla Face", desc: "Dois tamanhos de furos para diferentes tipos de definição.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'side-swept-undercut-estilo': {
      title: "Side Swept Undercut: Elegância Desconectada e Volume Lateral",
      subtitle: "O topo longo jogado para o lado com laterais raspadas. Um visual de impacto para homens que não temem o secador.",
      author: "Carlos Barbudo",
      date: "15 de Março de 2026",
      readTime: "11 min",
      category: "Cabelo",
      image: "/assets/side-swept.webp",
      howToSteps: [
        { name: "Undercut Total", text: "Raspar as laterais de forma uniforme (máquina 1 ou 2) sem degradê suave." },
        { name: "Topo Desconectado", text: "Manter o topo bem longo (10-12cm), sem conexão com as laterais." },
        { name: "Penteado Lateral", text: "Secar direcionando todo o volume para um dos lados escolhidos." },
        { name: "Fixação de Volume", text: "Aplicar pomada de fixação média e spray fixador para manter o 'balanço' lateral." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Side Swept Undercut</strong> é o equilíbrio perfeito entre o rebelde e o sofisticado. Popularizado por celebridades e ícones de moda, ele se baseia na 'desconexão' total: as laterais são raspadas em um único tom, enquanto o topo longo cai dramaticamente para o lado. É um corte que exige manutenção e o uso constante de secador para garantir o volume.
          </p>

          <ToolBox 
            tools={[
              { name: "Pomada Modeladora Flexível", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Spray Fixador de Jato Seco", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Escova Redonda para Volume", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Escolha do Lado",
                description: "O cabelo sempre tem um lado que 'obedece' melhor. Penteie para os dois lados e veja onde o redemoinho da coroa favorece o caimento.",
                tip: "Evite lutar contra o nascimento do fio; isso só vai criar frizz e volume indesejado na raiz."
              },
              {
                title: "Volume na Raiz",
                description: "O segredo do Side Swept é a altura. Ao secar, levante a raiz com a escova redonda e direcione o ar quente na base do fio.",
                tip: "Finalize com um jato de ar frio para 'congelar' o volume no lugar por mais tempo."
              },
              {
                title: "O Ponto de Desconexão",
                description: "Peça ao barbeiro para não suavizar a linha onde termina o raspado e começa o longo. Essa 'quebra' brusca é a assinatura do undercut moderno.",
                tip: "Mantenha a lateral sempre raspada (retoque a cada 10 dias) para o contraste não sumir."
              }
            ]}
          />
        </>
      ),
      recommendedProducts: [
        { id: 'volume-brush', name: "Escova Térmica Redonda", desc: "Facilita a modelagem e dá volume profissional em casa.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'pompadour-moderno-fade-volume': {
      title: "Pompadour Moderno: Volume e Elegância com Fade",
      subtitle: "O topete icônico de Elvis atualizado para 2026. Como criar volume duradouro e equilibrar com um degradê agressivo.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "14 min",
      category: "Cabelo",
      image: "/assets/pompadour-fade.webp",
      howToSteps: [
        { name: "Crescimento do Topo", text: "Manter o topo com no mínimo 10cm para conseguir a curvatura do pompadour." },
        { name: "High Fade", text: "Executar um degradê alto para destacar o volume do topete." },
        { name: "Escovação", text: "Secar o cabelo para trás e para cima usando uma escova redonda." },
        { name: "Finalização", text: "Usar pomada de fixação forte e spray para garantir que o volume não caia." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Pompadour Moderno</strong> é a evolução de um clássico. Diferente da versão dos anos 50, que era mais arredondada e untuosa, a versão de 2026 foca na textura e na altura extrema, muitas vezes contrastada com um degradê (fade) nas laterais. É um corte que exige dedicação diária ao penteado, mas que garante uma presença marcante em qualquer ambiente.
          </p>

          <ToolBox 
            tools={[
              { name: "Pomada de Fixação Extra Forte", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Escova Redonda de Madeira", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Secador de 2000W", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Técnica da Escovação",
                description: "O volume do pompadour vem da raiz, não do produto. Ao secar, levante a raiz com a escova e direcione o calor por baixo da mecha.",
                tip: "Use o jato frio do secador após modelar cada mecha para fixar a forma antes de aplicar a pomada."
              },
              {
                title: "Equilíbrio das Proporções",
                description: "Se você tem o rosto muito alongado, evite topetes excessivamente altos. Tente um pompadour mais 'baixo' e largo para harmonizar.",
                tip: "O degradê lateral deve subir até a linha da coroa para que o topo pareça ainda mais volumoso."
              },
              {
                title: "Manutenção da Estrutura",
                description: "Cabelos pesados tendem a cair após algumas horas. O uso de um 'pre-styler' (como mousse ou spray de volume) antes da secagem é essencial.",
                tip: "Finalize com spray fixador a uma distância de 20cm para não deixar o cabelo com aspecto de 'molhado'."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O segredo do Pompadour eterno é a escovação circular. Use uma escova redonda e gire-a enquanto seca o topo para trás; isso cria uma 'curva' na fibra capilar que sustenta o peso do cabelo por muito mais tempo do que apenas 'empurrar' com os dedos."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'pomp-pomade', name: "Pomada Estruturante de Argila", desc: "Fixação máxima com efeito natural para topetes altos.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'slicked-back-undercut-classico': {
      title: "Slicked Back Undercut: O Visual 'Penteado para Trás'",
      subtitle: "Clássico dos filmes noir, agora nas ruas. O guia para usar o cabelo totalmente para trás com laterais raspadas.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/slicked-back.webp",
      howToSteps: [
        { name: "Raspagem Undercut", text: "Raspar as laterais uniformemente (máquina 1 ou 2) até a altura da têmpora." },
        { name: "Corte do Topo", text: "Manter o topo longo e nivelado, sem camadas curtas no meio." },
        { name: "Penteado para Trás", text: "Aplicar pomada de brilho e pentear todo o cabelo em direção à nuca." },
        { name: "Ajuste de Fios Soltos", text: "Usar pente fino para alinhar cada fio e garantir o aspecto 'liso'." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Slicked Back Undercut</strong> é o visual preferido de quem quer um estilo 'durão' e elegante ao mesmo tempo. Inspirado nos gângsteres dos anos 20 e 30, este corte foi modernizado com a desconexão total das laterais (undercut). É o penteado perfeito para eventos formais ou para quem quer projetar uma imagem de autoridade e seriedade.
          </p>

          <ToolBox 
            tools={[
              { name: "Pomada à Base de Água (Brilho Alto)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Bolso de Acetato", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo de Limpeza Profunda", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Penteado Molhado",
                description: "Para o efeito clássico, o cabelo deve ser penteado ainda úmido. Isso ajuda a pomada a selar os fios e manter o brilho vitrificado.",
                tip: "Se o cabelo secar durante o dia e começar a arrepiar, passe um pente úmido para reativar a pomada."
              },
              {
                title: "Lidando com Cabelos Rebeldes",
                description: "Se o seu cabelo é muito grosso, ele pode querer 'pular' para os lados. Use um secador para direcionar o calor para trás enquanto penteia.",
                tip: "Uma rede de cabelo (hair net) usada por 10 minutos após o penteado ajuda a assentar os fios mais teimosos."
              },
              {
                title: "A Nuca no Slicked Back",
                description: "Diferente de outros cortes, no slicked back o cabelo do topo chega até a nuca. Mantenha a base da nuca bem limpa para o contraste ser nítido.",
                tip: "Peça ao barbeiro para 'afilar' o final do cabelo do topo para que ele não fique com aspecto de 'rabo de pato'."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Slicked Back, o brilho é a sua assinatura. Se você tem o cabelo escuro, use pomadas à base de óleo para um visual clássico profundo. Se tem o cabelo claro, pomadas à base de água garantem o brilho sem escurecer demais os fios, mantendo a textura visível."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'water-pomade', name: "Pomada Classic Shine", desc: "Brilho impecável e fácil remoção no banho.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'corte-cesar-moderno-franja-curta': {
      title: "Corte César Moderno: Praticidade e Franja Curta",
      subtitle: "Inspirado no imperador, perfeito para o dia a dia. Como o corte César ajuda a disfarçar entradas de forma inteligente.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "10 min",
      category: "Cabelo",
      image: "/assets/cesar-moderno.webp",
      howToSteps: [
        { name: "Fade Médio", text: "Executar um degradê médio nas laterais." },
        { name: "Topo Curto", text: "Cortar o topo uniformemente, geralmente na máquina 3 ou 4." },
        { name: "Franja Reta", text: "Cortar a franja frontal em uma linha reta e curta, cerca de 1-2cm acima da sobrancelha." },
        { name: "Texturização", text: "Dar leves toques com a tesoura no topo para evitar que o cabelo fique muito plano." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Corte César</strong> é sinônimo de eficiência. É o corte ideal para o homem que não quer perder tempo com secadores ou pomadas complexas. Além da praticidade, ele é um dos melhores aliados para quem está começando a notar entradas nas têmporas, pois a franja reta e projetada para frente camufla essas áreas de forma natural e estilosa.
          </p>

          <ToolBox 
            tools={[
              { name: "Pomada Matte de Fixação Leve", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Escova de Cerdas de Javali", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo Revitalizante", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Franja do Imperador",
                description: "A linha da franja deve ser perfeitamente horizontal. Isso cria uma moldura forte para o rosto e destaca o olhar.",
                tip: "Se você tem o rosto muito redondo, peça para o barbeiro fazer a franja levemente 'picotada' em vez de uma linha sólida."
              },
              {
                title: "Baixa Manutenção",
                description: "Para finalizar, basta uma pequena quantidade de pomada matte. Espalhe nas mãos e passe no cabelo seco, direcionando para frente.",
                tip: "É o corte perfeito para quem pratica esportes ou usa capacete com frequência."
              },
              {
                title: "Cuidando do Couro Cabeludo",
                description: "Como o cabelo é curto, o couro cabeludo respira melhor. Aproveite para usar tônicos capilares se tiver tendência à queda.",
                tip: "Lave o cabelo diariamente para evitar o acúmulo de oleosidade que pode deixar o corte César com aspecto 'pesado'."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Corte César é o 'salvador de entradas'. Se você está começando a perder cabelo nas têmporas, peça ao barbeiro para não deixar a franja reta demais; uma franja levemente desconectada esconde o recuo capilar de forma muito mais natural e imperceptível."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'matte-clay', name: "Argila Finalizadora Dry Touch", desc: "Efeito seco e natural para o dia a dia agitado.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'iv-league-haircut-executivo': {
      title: "Ivy League Haircut: O Social de Elite",
      subtitle: "Um corte limpo, curto e extremamente versátil. O visual preferido de estudantes e executivos de sucesso.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "11 min",
      category: "Cabelo",
      image: "/assets/ivy-league.webp",
      howToSteps: [
        { name: "Taper Fade Baixo", text: "Executar um degradê bem baixo nas costeletas e nuca." },
        { name: "Topo Curto", text: "Manter o topo curto (3-4cm), mas longo o suficiente para ser penteado." },
        { name: "Penteado Lateral", text: "Dividir o cabelo levemente para o lado, sem uma risca marcada." },
        { name: "Acabamento Natural", text: "Finalizar com pomada de brilho médio para um aspecto saudável." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Ivy League Haircut</strong> é a versão mais refinada do corte militar (Crew Cut). Ele mantém a praticidade do cabelo curto, mas deixa comprimento suficiente no topo para que possa ser penteado. É um corte que transita perfeitamente entre a academia e a sala de reuniões, sendo o padrão de elegância discreta para o homem moderno.
          </p>

          <ToolBox 
            tools={[
              { name: "Pomada de Brilho Médio", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Madeira Anti-Estático", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo de Uso Diário Suave", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Versatilidade do Ivy League",
                description: "O diferencial deste corte é a frente. Você pode usá-la levemente levantada (como um mini topete) ou totalmente colada para o lado.",
                tip: "É o corte ideal para quem tem o rosto quadrado ou oval e quer destacar a mandíbula."
              },
              {
                title: "Manutenção Prática",
                description: "Como o cabelo é curto em toda a cabeça, você não precisa de secador. Basta secar com a toalha e aplicar o produto com os dedos.",
                tip: "Visite o barbeiro a cada 3 semanas para manter o Taper Fade lateral limpo e as proporções em dia."
              },
              {
                title: "Estilo de Elite",
                description: "O Ivy League não deve parecer 'raspado'. Ele deve parecer 'polido'. Evite usar máquinas muito baixas no topo.",
                tip: "Peça ao barbeiro para usar a tesoura no topo para um acabamento mais suave e menos ríspido que a máquina."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para o Ivy League perfeito, a finalização deve ser feita com as mãos, não com o pente. O pente deixa o visual muito 'engomado'. Use uma pomada de brilho médio, espalhe nas mãos e passe apenas para alinhar o topo para o lado. A elegância está na naturalidade."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'daily-shampoo', name: "Shampoo Equilíbrio Natural", desc: "Limpeza suave para cabelos curtos lavados diariamente.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'burst-fade-moicano-discreto': {
      title: "Burst Fade: O Degradê em Semicírculo na Orelha",
      subtitle: "Um estilo único que destaca as laterais de forma artística. Ideal para moicanos e cortes com volume na nuca.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/burst-fade.webp",
      howToSteps: [
        { name: "Marcação em Arco", text: "Criar a linha do degradê em formato de semicírculo ao redor da orelha." },
        { name: "Skin Fade Localizado", text: "Raspar até a pele na base do arco e subir suavizando." },
        { name: "Preservação da Nuca", text: "Manter o volume de cabelo na parte de trás da cabeça, sem degradê." },
        { name: "Estilização do Topo", text: "Definir o topo com textura ou volume, dependendo do comprimento." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Burst Fade</strong> é um dos cortes mais técnicos da barbearia moderna. Diferente do fade tradicional que dá a volta na cabeça, o Burst Fade foca apenas na região ao redor da orelha, 'explodindo' para fora desse centro. Ele é o parceiro perfeito para moicanos modernos e cortes 'South of France', onde o volume na nuca é preservado.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina de Acabamento de Precisão", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pomada Matte de Alta Fixação", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo Detox para Couro Cabeludo", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Formato do 'Burst'",
                description: "A curvatura deve ser perfeita. O barbeiro deve seguir o contorno da orelha, criando uma sombra que se dissipa rapidamente.",
                tip: "É um corte que valoriza muito quem tem tatuagens na região do pescoço ou atrás da orelha."
              },
              {
                title: "Cabelos Crespos e Cacheados",
                description: "O Burst Fade fica sensacional em texturas afro. Ele permite manter o volume do Black Power ou dos twists enquanto as laterais ficam super limpas.",
                tip: "Use um ativador de cachos no topo para dar destaque à textura em contraste com o fade."
              },
              {
                title: "Manutenção Crítica",
                description: "Por ser um fade muito localizado, qualquer crescimento de cabelo na área do semicírculo 'apaga' o desenho do corte rapidamente.",
                tip: "Recomendamos retoques a cada 7 a 10 dias para manter a nitidez do arco."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Burst Fade, o segredo é a conexão com a barba. Peça ao barbeiro para fazer um 'taper' na costeleta que se funde com o início da barba. Isso cria um visual contínuo e artístico que destaca tanto o corte de cabelo quanto o seu estilo facial."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'curl-activator', name: "Ativador de Cachos Definition", desc: "Define e hidrata, perfeito para usar no topo do Burst Fade.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'flat-top-militar-afro': {
      title: "Flat Top Militar: A Geometria Perfeita no Cabelo Afro",
      subtitle: "Linhas retas e topo plano. O guia para manter o Flat Top impecável e com a estrutura sempre firme.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "15 min",
      category: "Cabelo",
      image: "/assets/flat-top-afro.webp",
      howToSteps: [
        { name: "Corte Geométrico", text: "Usar máquina com pente de topo plano (flattop comb) para nivelar o topo horizontalmente." },
        { name: "High Fade Lateral", text: "Executar um degradê alto para sustentar visualmente a 'caixa' do topo." },
        { name: "Ajuste de Ângulos", text: "Certificar-se de que as quinas laterais do topo estão bem marcadas." },
        { name: "Finalização Estrutural", text: "Usar spray de fixação extra forte para garantir que o topo não 'curve'." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Flat Top</strong> é uma obra de arquitetura capilar. Muito popular na cultura hip-hop dos anos 80 e 90, e com raízes militares profundas, este corte exige um cabelo com textura afro (tipo 4) para sustentar a estrutura vertical. O objetivo é criar um plano perfeitamente reto no topo, desafiando a gravidade com precisão geométrica.
          </p>

          <ToolBox 
            tools={[
              { name: "Spray Fixador Extra Forte (Freeze)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente Grande de Topo Plano", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Máquina de Corte com Lâmina de Precisão", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Base da Estrutura",
                description: "O Flat Top só funciona se o cabelo estiver saudável e denso. O uso de shampoos que dão volume e encorpam o fio ajuda na sustentação.",
                tip: "Ao pentear, faça movimentos verticais para 'armar' o cabelo antes de passar a máquina niveladora."
              },
              {
                title: "Simetria é Tudo",
                description: "O barbeiro deve olhar o corte de todos os ângulos: frente, lados e topo. Qualquer desnível quebra a ilusão da geometria perfeita.",
                tip: "Se você dorme de lado, pode amassar o corte. Use uma touca protetora para manter o formato durante a noite."
              },
              {
                title: "Estilo e Atitude",
                description: "O Flat Top é um corte de declaração (statement). Ele atrai olhares e exige que você mantenha o visual sempre muito bem cuidado.",
                tip: "Combine com linhas de barba bem marcadas para acentuar o visual geométrico e agressivo."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para o Flat Top perfeito, você precisa de um spray de fixação que não deixe resíduos brancos. Aplique o spray e use o secador (no modo quente e fraco) para 'selar' o topo enquanto usa o pente plano para nivelar. É um trabalho de escultura em tempo real."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'freeze-spray', name: "Spray Fixador Sculpt Force", desc: "O único que segura o Flat Top o dia todo sem ceder.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'man-bun-undercut-estilo-samurai': {
      title: "Man Bun com Undercut: Estilo Samurai Contemporâneo",
      subtitle: "O coque masculino elevado a um novo nível. Como prender o cabelo longo mantendo as laterais sempre raspadas.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "11 min",
      category: "Cabelo",
      image: "/assets/man-bun.webp",
      howToSteps: [
        { name: "Raspagem Undercut", text: "Manter as laterais e nuca raspadas uniformemente." },
        { name: "Penteado Traseiro", text: "Puxar todo o volume do topo para o centro da coroa." },
        { name: "Fixação do Coque", text: "Prender com elástico resistente, criando um coque firme e circular." },
        { name: "Alinhamento de Fios", text: "Usar pomada para baixar os 'baby hairs' na linha de transição." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Man Bun com Undercut</strong> é a evolução urbana do coque samurai. Ele resolve o problema do volume lateral excessivo em cabelos longos, mantendo um visual limpo e agressivo. É o corte perfeito para o homem que quer a liberdade do cabelo longo sem abrir mão da praticidade e do frescor das laterais raspadas.
          </p>

          <ToolBox 
            tools={[
              { name: "Elásticos de Silicone Premium", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Creme para Pentear Hidratante", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Nutrição para Pontas", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Altura do Coque",
                description: "A posição ideal é exatamente na coroa da cabeça. Muito baixo parece um rabo de cavalo comum; muito alto pode parecer desproporcional.",
                tip: "Use o osso occipital como referência para encontrar a altura perfeita que valorize seu perfil."
              },
              {
                title: "Saúde dos Fios Longos",
                description: "O cabelo do topo sofre muito atrito com o elástico. Nunca prenda o cabelo enquanto ele estiver úmido; isso causa mofo e quebra severa.",
                tip: "Use óleos de finalização nas pontas para evitar que o coque pareça uma 'vassoura' ressecada."
              },
              {
                title: "Manutenção do Undercut",
                description: "O contraste é o que dá o estilo. Se as laterais crescerem demais, o visual perde a força. Retoque com máquina a cada 10-15 dias.",
                tip: "Você mesmo pode retocar o undercut em casa se tiver um espelho de mão e firmeza para seguir a linha do topo."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Nunca aperte demais o elástico do Man Bun; isso causa alopecia de tração (perda de cabelo na linha frontal). Use elásticos revestidos de tecido ou silicone. E lembre-se: o coque deve ser um nó natural, não um 'bolo' perfeitamente redondo, para manter a virilidade do estilo."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'hair-oil-nutri', name: "Óleo de Argan e Camelina", desc: "Brilho e maciez para o topo longo do seu Man Bun.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'taper-fade-cabelo-ondulado-textura': {
      title: "Taper Fade para Cabelos Ondulados: Textura e Controle",
      subtitle: "Como valorizar as ondas naturais sem perder a limpeza do degradê nas extremidades.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/taper-ondulado.webp",
      howToSteps: [
        { name: "Taper Suave", text: "Fazer um degradê discreto nas costeletas e nuca." },
        { name: "Corte em Camadas", text: "Cortar o topo ondulado em camadas para reduzir o volume lateral." },
        { name: "Ativação de Ondas", text: "Usar creme ativador ou spray de sal marinho para definir o movimento." },
        { name: "Secagem", text: "Secar com difusor ou naturalmente para não desmanchar as ondas." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Taper Fade para Cabelos Ondulados</strong> é o corte da 'naturalidade polida'. Ele permite que você use o seu cabelo como ele realmente é, mas com acabamentos dignos de uma barbearia de luxo. O foco é manter a textura orgânica no topo enquanto as bordas do cabelo são limpas com precisão milimétrica.
          </p>

          <ToolBox 
            tools={[
              { name: "Creme Ativador de Ondas Leve", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Difusor para Secador", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo Hidratante (Low Poo)", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Corte 'A Seco'",
                description: "Cabelos ondulados mudam muito de comprimento quando secam. Peça para o barbeiro finalizar o ajuste do topo com o cabelo seco.",
                tip: "Isso evita que o cabelo fique mais curto do que você planejou após a secagem."
              },
              {
                title: "Controle do Frizz",
                description: "Ondas tendem a ficar 'arrepiadas' com facilidade. O segredo é nunca esfregar a toalha no cabelo; apenas pressione para tirar a umidade.",
                tip: "Use uma camiseta de algodão velha para secar; as fibras são mais gentis que as de uma toalha comum."
              },
              {
                title: "Estilo Versátil",
                description: "Este corte funciona bem tanto bagunçado (messy) quanto levemente penteado para trás para uma ocasião mais séria.",
                tip: "Aplique o product sempre de trás para frente para distribuir melhor o peso e não sobrecarregar a franja."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Taper Fade ondulado, o segredo do controle é o óleo de argan. Com o cabelo ainda úmido, aplique duas gotas antes do creme de ondas. Isso cria uma barreira contra a umidade e evita que o seu cabelo dobre de volume ao longo do dia com o frizz."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'wave-cream', name: "Creme Modelador Wave Control", desc: "Definição de ondas sem deixar o cabelo duro ou pesado.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'bowl-cut-repaginado-moderno': {
      title: "Bowl Cut Repaginado: O 'Corte de Tigela' em 2026",
      subtitle: "Esqueça o visual infantil. Aprenda como a textura e o fade transformaram o bowl cut em um estilo avant-garde.",
      author: "Carlos Barbudo",
      date: "16 de Março de 2026",
      readTime: "13 min",
      category: "Cabelo",
      image: "/assets/bowl-cut-moderno.webp",
      imagePosition: "object-top",
      howToSteps: [
        { name: "Linha Circular", text: "Marcar a linha de base circular ao redor de toda a cabeça." },
        { name: "Undercut ou Skin Fade", text: "Raspar tudo abaixo da linha circular para criar a desconexão." },
        { name: "Desfiado de Camadas", text: "Texturizar o topo circular para dar movimento e evitar o aspecto 'chapéu'." },
        { name: "Finalização Matte", text: "Usar pó texturizador para dar volume e um aspecto moderno e seco." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Bowl Cut</strong> (Corte Tigela) voltou das cinzas com uma estética futurista. A versão moderna abandona a linha reta perfeita e o cabelo lambido, adotando texturas desconectadas e um fade agressivo na base. É um corte para quem busca se destacar na multidão e não tem medo de um visual geométrico e experimental.
          </p>

          <ToolBox 
            tools={[
              { name: "Pó Texturizador Matte", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Dentes Largos", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Spray de Fixação Seca", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Importância da Textura",
                description: "Sem textura, o Bowl Cut parece um capacete. O barbeiro deve usar a técnica de 'point cutting' para deixar as pontas irregulares.",
                tip: "Quanto mais 'bagunçado' no topo, mais moderno e menos datado o corte vai parecer."
              },
              {
                title: "O Formato do Rosto",
                description: "Este corte acentua as linhas da mandíbula e das maçãs do rosto. É perfeito para rostos com traços angulares e marcantes.",
                tip: "Se você tem o rosto muito redondo, peça um Bowl Cut com a linha lateral mais alta para 'alongar' a face."
              },
              {
                title: "Manutenção Estrita",
                description: "A linha circular perde o formato muito rápido. Para manter o visual vanguardista, você precisará visitar o barbeiro a cada 10 dias.",
                tip: "Use shampoos de limpeza profunda para que o topo fique sempre leve e com movimento."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Bowl Cut moderno não é para todos. Se você tem o rosto muito redondo, evite a franja reta; peça ao barbeiro para 'angular' a franja nas laterais para quebrar a simetria circular. O contraste com um Skin Fade lateral é o que salva o corte de parecer infantil."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'texture-dust', name: "Pó de Volume Estilo Urbano", desc: "O toque final essencial para o Bowl Cut moderno.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-degrade-fade': {
      title: "Barba Degradê (Fade): O Manual do Visual Ultra Limpo",
      subtitle: "Aprenda a dominar a tendência #1 das barbearias. Como criar a transição perfeita das costeletas ao queixo em casa.",
      author: "Carlos Barbudo",
      date: "11 de Maio de 2026",
      readTime: "12 min",
      category: "Barba",
      image: "/assets/barba-degrade-fade.webp",
      howToSteps: [
        { name: "Marcação das Costeletas", text: "Use a máquina no zero ou 0.5 para limpar a área das costeletas até a altura da orelha." },
        { name: "Transição Gradual", text: "Suba os pentes (1, 1.5, 2) à medida que desce em direção à mandíbula, criando o efeito 'fade'." },
        { name: "Linha da Bochecha", text: "Desenhe uma linha curva ou reta bem nítida usando um navalhete ou trimmer." },
        { name: "Pescoço e Acabamento", text: "Limpe todo o pescoço dois dedos acima do pomo de adão para destacar o degradê." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Barba Degradê</strong>, ou <em>Beard Fade</em>, é o estilo que separa os amadores dos profissionais. Ela exige precisão, mas o resultado é um visual extremamente limpo, moderno e que valoriza as linhas do seu rosto. O segredo está na paciência para esfumar as marcas entre os diferentes tamanhos de pente.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina de Acabamento com Pentes", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Shaving Gel Transparente", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Escovinha de Disfarce", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Ponto de Partida",
                description: "O degradê começa na conexão com o cabelo. Se o seu cabelo está curto (fade), a barba deve começar na mesma altura da máquina. Use a 0 ou 0.5 nas costeletas.",
                tip: "Sempre comece com um pente maior se estiver inseguro; você pode diminuir depois, mas não pode devolver o pelo cortado."
              },
              {
                title: "A Técnica do C-Stroke",
                description: "Ao passar a máquina, faça movimentos em 'C' para fora da pele. Isso ajuda a suavizar a transição entre os pentes e evita marcas de degraus.",
                tip: "Use a pontinha da máquina para polir as áreas de sombra."
              },
              {
                title: "Simetria é Tudo",
                description: "Verifique constantemente no espelho se o degradê de um lado está na mesma altura do outro. Use o lóbulo da orelha como ponto de referência.",
                tip: "Iluminação frontal forte é essencial para ver as sombras reais do fade."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para um degradê de barba perfeito em casa, use uma escovinha de cerdas duras para limpar os pelos soltos a cada passada da máquina. Isso permite que você veja exatamente onde o fade está 'marcado' e onde precisa suavizar com a ponta da lâmina."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'trimmer-pro', name: "Trimmer de Precisão Profissional", desc: "Motor de alta rotação para linhas cirúrgicas no seu fade.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-ducktail-cauda-de-pato': {
      title: "Ducktail (Cauda de Pato): Sofisticação e Geometria",
      subtitle: "O guia completo para esculpir a barba que alonga o rosto e transmite autoridade. O equilíbrio entre o rústico e o polido.",
      author: "Carlos Barbudo",
      date: "11 de Maio de 2026",
      readTime: "10 min",
      category: "Barba",
      image: "/assets/barba-ducktail.webp",
      howToSteps: [
        { name: "Crescimento de Base", text: "Ter pelo menos 4 a 6 semanas de crescimento de barba cheia." },
        { name: "Laterais Retas", text: "Aparar as bochechas verticalmente para reduzir o volume lateral." },
        { name: "Ponta do Queixo", text: "Modelar o queixo em formato de 'V' ou triângulo suave, mantendo o comprimento." },
        { name: "Limpeza de Pescoço", text: "Manter o pescoço raspado para destacar a ponta da Ducktail." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Barba Ducktail</strong> é um dos estilos mais elegantes da barbearia clássica. Ela recebe esse nome porque a ponta no queixo lembra a cauda de um pato. É o estilo ideal para homens com rostos redondos, pois alonga visualmente a face e cria uma linha de mandíbula mais definida.
          </p>

          <ToolBox 
            tools={[
              { name: "Balm Modelador de Forte Fixação", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Tesoura de Desbaste", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente de Madeira de Dentes Largos", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Arquitetura Lateral",
                description: "O segredo da Ducktail não é o queixo, mas as bochechas. Elas devem ser mantidas baixas e retas. Use a máquina no pente 2 ou 3 descendo verticalmente.",
                tip: "Não siga a curva natural do rosto; corte 'para fora' para criar uma silhueta angular."
              },
              {
                title: "Esculpindo a Ponta",
                description: "Com uma tesoura, apare as pontas do queixo para formar um bico suave. O comprimento deve ser maior no centro e diminuir em direção às mandíbulas.",
                tip: "Use Balm para unir os fios e ver o formato real antes de cortar."
              },
              {
                title: "Manutenção Diária",
                description: "Como é um estilo geométrico, qualquer fio fora do lugar aparece. Penteie sempre para baixo e para o centro.",
                tip: "Use um secador para direcionar os fios do queixo para a ponta."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A Ducktail exige peso. Se a sua barba é muito 'fofa', use um Balm de fixação forte misturado com duas gotas de óleo. Isso vai unir os fios do queixo em um bloco sólido, mantendo o formato em 'V' mesmo com o movimento do dia a dia."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'balm-premium', name: "Balm Modelador Ultra-Fix", desc: "Essencial para manter a ponta da sua Ducktail no lugar o dia todo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'bigode-chevron-vintage': {
      title: "Bigode Chevron: O Retorno do Clássico Atemporal",
      subtitle: "Aprenda a cultivar e manter o bigode grosso que domina o lábio superior. O visual de Tom Selleck e Freddie Mercury para o homem moderno.",
      author: "Carlos Barbudo",
      date: "11 de Maio de 2026",
      readTime: "8 min",
      category: "Barba",
      image: "/assets/bigode-chevron.webp",
      howToSteps: [
        { name: "Raspar o Rosto", text: "Manter o resto do rosto totalmente limpo ou com stubble muito baixo." },
        { name: "Comprimento do Lábio", text: "Deixar o bigode crescer até cobrir levemente o lábio superior." },
        { name: "Corte de Precisão", text: "Usar uma tesourinha para aparar os fios que entram na boca, seguindo a linha do lábio." },
        { name: "Densidade", text: "Pentear para baixo para garantir que o volume seja uniforme." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Bigode Chevron</strong> é a definição de masculinidade vintage. Grosso, largo e imponente, ele cobre todo o lábio superior e desce levemente nos cantos da boca. É um estilo que exige autoconfiança e uma manutenção simples, mas constante.
          </p>

          <ToolBox 
            tools={[
              { name: "Cera de Bigode (Mustache Wax)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Bigode Mini", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Tesoura de Precisão Stark", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Regra do Lábio",
                description: "O Chevron deve ser denso. Nunca apare o comprimento por cima. Deixe-o descer até o lábio e corte apenas o excesso que atrapalha a fala ou a alimentação.",
                tip: "Use a tesoura num ângulo de 45 graus para um acabamento mais natural."
              },
              {
                title: "Limpeza das Bochechas",
                description: "Para o bigode brilhar, o rosto deve estar limpo. Se preferir usar com barba, certifique-se de que o bigode seja significativamente mais longo que o resto.",
                tip: "O contraste é o que torna o Chevron icônico."
              },
              {
                title: "Nutrição e Brilho",
                description: "Aplique uma gota de óleo apenas no bigode para evitar que os fios fiquem espetados ou ressecados.",
                tip: "Cera de bigode ajuda a manter os fios alinhados sem parecer engomado."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Bigode Chevron perfeito deve ter o 'sorriso limpo'. Use uma tesourinha para cortar apenas os fios que encostam na linha superior do lábio. Isso evita que você coma o próprio bigode e mantém o visual higiênico e nítido sem perder a densidade superior."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'mustache-wax', name: "Cera de Bigode Extrema", desc: "Fixação total para manter o Chevron imponente e alinhado.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-van-dyke-classica': {
      title: "Van Dyke: O Estilo Artístico que Atravessa Séculos",
      subtitle: "Descubra como combinar o bigode e o cavanhaque desconectados para um visual criativo, sofisticado e cheio de personalidade.",
      author: "Carlos Barbudo",
      date: "11 de Maio de 2026",
      readTime: "9 min",
      category: "Barba",
      image: "/assets/barba-van-dyke.webp",
      howToSteps: [
        { name: "Desconexão Total", text: "Raspar as laterais (bochechas) e a área que liga o bigode ao queixo." },
        { name: "Cavanhaque Pontudo", text: "Modelar os pelos do queixo em formato de 'T' invertido ou gota pontuda." },
        { name: "Bigode Estilizado", text: "Manter o bigode separado, podendo ser um Handlebar leve ou Chevron fino." },
        { name: "Pele Lisa", text: "Garantir que as áreas raspadas estejam sempre sem sombra para destacar o desenho." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Inspirado no pintor do século XVII Anthony van Dyck, este estilo é a escolha de homens que buscam um visual artístico e sofisticado. A principal característica da <strong>Barba Van Dyke</strong> é que o bigode e o cavanhaque nunca se tocam, criando um desenho flutuante e muito nítido no rosto.
          </p>

          <ToolBox 
            tools={[
              { name: "Navalhete de Precisão", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Lápis de Contorno (Opcional)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Barba Leve", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Limpeza Estratégica",
                description: "O Van Dyke exige bochechas e pescoço totalmente limpos. Use gel transparente para ver exatamente onde termina o cavanhaque.",
                tip: "A 'mosca' (soul patch) sob o lábio inferior costuma fazer parte deste estilo."
              },
              {
                title: "Simetria do Bigode",
                description: "Como o bigode é isolado, qualquer assimetria aparece. Use o 'arco do cupido' do lábio como centro.",
                tip: "Se o seu bigode for ralo, mantenha-o mais curto para parecer mais denso."
              },
              {
                title: "O Formato do Queixo",
                description: "O cavanhaque deve ser centrado e pontudo. Evite formatos muito largos, pois isso descaracteriza o estilo clássico.",
                tip: "Mantenha o comprimento do queixo em cerca de 1 a 2 cm."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Van Dyke, o bigode Handlebar (com as pontas enroladas) é o complemento ideal. Use cera de bigode apenas nas pontas e enrole-as levemente para cima. O contraste do bigode estilizado com o cavanhaque em gota é o que dá a aura de 'artista' deste estilo."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'shave-gel', name: "Gel de Barbear Transparente", desc: "Visibilidade total para desenhar seu Van Dyke sem erros.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'cavanhaque-ancora-imponente': {
      title: "Cavanhaque Âncora: O Guia do Design de Alta Precisão",
      subtitle: "Aprenda a traçar as linhas que definem o maxilar e criam um visual imponente. O favorito de quem busca um rosto mais angular.",
      author: "Carlos Barbudo",
      date: "11 de Maio de 2026",
      readTime: "11 min",
      category: "Barba",
      image: "/assets/cavanhaque-ancora.webp",
      howToSteps: [
        { name: "Desenho da Base", text: "Traçar uma linha que segue o osso da mandíbula, conectando ao queixo." },
        { name: "Bigode Fino", text: "Modelar um bigode que não se conecta às laterais, preferencialmente fino e reto." },
        { name: "Soul Patch", text: "Manter a 'mosca' conectada ou não à base do queixo." },
        { name: "Laterais Raspadas", text: "Remover 100% dos pelos das bochechas e costeletas." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Cavanhaque Âncora</strong> recebe esse nome pelo seu formato que lembra uma âncora de navio. Ele combina um bigode fino com uma barba que acompanha a linha do queixo e sobe levemente em direção à mandíbula. É um dos estilos mais complexos de fazer em casa, mas um dos que mais valoriza o visagismo facial.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina Shaver para Pele Lisa", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente Guia de Barba", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Loção Pós-Barba sem Álcool", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Mapeando a Âncora",
                description: "Use a ponta do queixo como centro e trace a linha para os lados, seguindo o osso. A linha não deve subir muito nas bochechas.",
                tip: "Use um lápis de olho branco para desenhar o molde na pele antes de passar a lâmina."
              },
              {
                title: "A Conexão Labial",
                description: "A âncora clássica tem uma conexão fina no centro do queixo que sobe até o lábio inferior (o soul patch).",
                tip: "Mantenha essa conexão bem centralizada para não parecer torto."
              },
              {
                title: "O Acabamento Shaver",
                description: "Como a âncora tem muitas áreas de pele exposta, use uma máquina shaver ou navalha para deixar a pele 'lisinha', aumentando o contraste com o desenho.",
                tip: "Hidrate bem as áreas raspadas para evitar vermelhidão."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para o Cavanhaque Âncora perfeito, a simetria é o seu maior desafio. Use a 'mosca' sob o lábio como sua linha central absoluta. Se as laterais da âncora estiverem desiguais por apenas 1mm, o seu rosto vai parecer torto. Paciência e luz frontal são obrigatórias aqui."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'shaver-pro-2', name: "Máquina Shaver de Alta Performance", desc: "Pele lisa como navalha para destacar o desenho da sua Âncora.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-lenhador-viking-estilo': {
      title: "Barba Lenhador (Viking): O Guia do Volume Máximo",
      subtitle: "Como cultivar e manter uma barba longa, densa e saudável sem perder a elegância. O estilo rústico definitivo.",
      author: "Carlos Barbudo",
      date: "12 de Maio de 2026",
      readTime: "15 min",
      category: "Barba",
      image: "/assets/barba-lenhador.webp",
      howToSteps: [
        { name: "Crescimento Livre", text: "Deixar a barba crescer por pelo menos 3 a 6 meses sem aparar o comprimento." },
        { name: "Aparar Pontas Duplas", text: "Usar tesoura para remover fios rebeldes e pontas secas mensalmente." },
        { name: "Limpeza de Linha", text: "Manter a bochecha com uma linha natural, mas limpa." },
        { name: "Hidratação Intensa", text: "Aplicar óleo de barba diariamente para alcançar as camadas mais profundas." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Barba Lenhador</strong>, também conhecida como estilo Viking, é o ápice da paciência e cuidado. Não se engane: uma barba longa exige muito mais manutenção do que uma curta. O segredo para não parecer desleixado é a hidratação constante e o controle do volume nas laterais para não "arredondar" demais o rosto.
          </p>

          <ToolBox 
            tools={[
              { name: "Óleo de Barba Premium (Sândalo)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Escova de Cerdas de Javali", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Shampoo de Barba Hidratante", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Higiene Profunda",
                description: "Barbas longas acumulam resíduos. Lave com shampoo específico 2 a 3 vezes por semana, focando na pele sob os pelos.",
                tip: "Nunca durma com a barba úmida; use um secador no modo frio."
              },
              {
                title: "O Poder da Escovação",
                description: "Escovar a barba diariamente com cerdas naturais ajuda a distribuir a oleosidade natural da raiz até as pontas.",
                tip: "Sempre escove de baixo para cima primeiro para dar volume, e depois de cima para baixo para alinhar."
              },
              {
                title: "Controle de Volume",
                description: "Use um Balm denso para assentar os fios 'espetados' nas laterais, mantendo o foco no comprimento do queixo.",
                tip: "Se a barba estiver muito rebelde, use um pente de madeira para desembaraçar antes da escova."
              }
            ]}
          />
        </>
      ),
      recommendedProducts: [
        { id: 'viking-oil', name: "Kit Óleo Viking de Respeito", desc: "Fragrância amadeirada e hidratação profunda para barbas longas.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-corporativa-profissional': {
      title: "Barba Corporativa: Elegância e Autoridade no Trabalho",
      subtitle: "O manual para manter uma barba curta e impecável que projeta profissionalismo e confiança em qualquer ambiente.",
      author: "Carlos Barbudo",
      date: "12 de Maio de 2026",
      readTime: "9 min",
      category: "Barba",
      image: "/assets/barba-corporativa.webp",
      howToSteps: [
        { name: "Comprimento Uniforme", text: "Manter os fios entre 5mm e 1cm usando um pente de máquina constante." },
        { name: "Linhas Definidas", text: "A bochecha e o pescoço devem estar sempre com a linha nítida e sem sombra." },
        { name: "Higiene Diária", text: "Lavar o rosto e a barba todas as manhãs para evitar oleosidade excessiva." },
        { name: "Pós-Barba", text: "Usar balm ou loção para manter a pele hidratada e sem vermelhidão." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Barba Corporativa</strong> é o meio-termo perfeito entre o rosto limpo e a barba cheia. Ela é caracterizada pela uniformidade e pela limpeza extrema das bordas. Estudos de psicologia social indicam que uma barba bem cuidada pode projetar mais liderança e maturidade no ambiente corporativo.
          </p>

          <ToolBox 
            tools={[
              { name: "Barbeador Elétrico OneBlade", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Balm de Barba Anti-Frizz", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Esfoliante Facial Masculino", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Padrão de Comprimento",
                description: "Use o pente 2 ou 3 da sua máquina em todo o rosto. A ideia é que a barba cubra a pele, mas não esconda o formato da mandíbula.",
                tip: "Apare a barba a cada 3 dias para não perder o aspecto de 'sempre pronto'."
              },
              {
                title: "A Linha do Pescoço",
                description: "Esta é a parte mais importante. A linha deve estar exatamente dois dedos acima do pomo de adão. Nada de barba crescendo no pescoço.",
                tip: "Use um espelho de mão para conferir o ângulo lateral do pescoço."
              },
              {
                title: "O Toque de Mestre",
                description: "Use um balm hidratante de absorção rápida para que a barba fique macia e com brilho discreto, sem parecer engordurada.",
                tip: "Escolha fragrâncias leves que não briguem com o seu perfume."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Na barba corporativa, a precisão das linhas é o que separa o profissional do amador. Use um gel de barbear transparente para desenhar a linha das bochechas; isso garante que você veja exatamente onde está cortando e mantenha a simetria perfeita exigida em ambientes de alta diretoria."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'corporate-balm', name: "Balm Premium Matte Finish", desc: "Acabamento fosco e natural para o dia a dia no escritório.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-stubble-por-fazer': {
      title: "Stubble (Barba por Fazer): O Charme do Desalinhado Planejado",
      subtitle: "Aprenda a técnica para manter aquele visual de '3 dias' de forma eterna e simétrica. Praticidade sem perder o estilo.",
      author: "Carlos Barbudo",
      date: "12 de Maio de 2026",
      readTime: "7 min",
      category: "Barba",
      image: "/assets/barba-stubble.webp",
      howToSteps: [
        { name: "Pente de 1mm a 3mm", text: "Passar a máquina em todo o rosto usando o pente mais baixo." },
        { name: "Limpeza de Pescoço", text: "Remover totalmente os pelos que descem em direção ao peito." },
        { name: "Contorno Labial", text: "Limpar a área ao redor dos lábios para um sorriso mais nítido." },
        { name: "Hidratação de Pele", text: "Como o pelo é curto, o foco aqui é a saúde da pele do rosto." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Stubble</strong> é o estilo mais versátil e fácil de manter. Ele passa uma imagem de masculinidade moderna e relaxada. No entanto, o "por fazer" não significa "esquecido". Para não parecer desleixado, é essencial manter os contornos limpos e o comprimento uniforme.
          </p>

          <ToolBox 
            tools={[
              { name: "Aparador de Barba com Ajuste de 0.5mm", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Hidratante Facial com FPS", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Lâmina de Segurança (Safety Razor)", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Uniformidade é a Chave",
                description: "Passe a máquina em diferentes direções para garantir que todos os pelos (que crescem para lados diferentes) fiquem do mesmo tamanho.",
                tip: "O tamanho ideal costuma ser o 2mm (pente 1 da maioria das máquinas)."
              },
              {
                title: "Desenhando com Disfarce",
                description: "Mesmo sendo curta, você pode baixar um pouco mais o pente nas bochechas para criar um leve degradê visual.",
                tip: "Isso ajuda a afinar o rosto lateralmente."
              },
              {
                title: "Pele Impecável",
                description: "Com o stubble, sua pele está muito exposta. Use um esfoliante semanal para evitar pelos encravados.",
                tip: "O uso de hidratante facial é obrigatório para evitar a 'coceira do terceiro dia'."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O segredo do Stubble 'sexy' é o degradê no pescoço. Não termine a barba de forma brusca; use pentes de 1mm e 0.5mm para suavizar a transição da mandíbula para o pescoço liso. Isso evita que você pareça ter uma 'beard line' artificial e garante um visual muito mais natural."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'stubble-trimmer', name: "Aparador Philips Multigroom", desc: "A máquina definitiva para quem ama o visual stubble.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-balbo-guia': {
      title: "Estilo Balbo: O Visual Ícone de Personalidade",
      subtitle: "Tudo sobre o estilo que une bigode, cavanhaque e soul patch em um desenho único e desconectado. Elegância italiana clássica.",
      author: "Carlos Barbudo",
      date: "12 de Maio de 2026",
      readTime: "11 min",
      category: "Barba",
      image: "/assets/barba-balbo.webp",
      howToSteps: [
        { name: "Remover Costeletas", text: "Raspar totalmente as laterais e costeletas." },
        { name: "Bigode Isolado", text: "Modelar um bigode largo mas que não encosta na barba inferior." },
        { name: "Base Ampla", text: "Deixar a barba no queixo se estender um pouco para as laterais, como um 'T' invertido." },
        { name: "Soul Patch Central", text: "Manter o pequeno triângulo de pelo sob o lábio inferior." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Nomeado em homenagem a Italo Balbo, o <strong>Estilo Balbo</strong> é para quem não tem medo de ousar. Ele é sofisticado e exige uma mão firme no desenho. É o estilo ideal para quem tem o queixo mais estreito e quer dar uma aparência de base mais sólida e imponente ao rosto.
          </p>

          <ToolBox 
            tools={[
              { name: "Navalha de Barbeiro Profissional", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gel de Barbear de Precisão", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Mini Pente para Detalhes", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Desenho da Base",
                description: "A barba inferior do Balbo deve seguir a linha da mandíbula mas parar antes de chegar às costeletas. O desenho deve ser simétrico em relação ao centro do queixo.",
                tip: "Mantenha a altura da barba no queixo entre 5 e 10mm."
              },
              {
                title: "A Desconexão",
                description: "O espaço entre o bigode e a barba do queixo deve estar perfeitamente limpo. Use um trimmer de precisão para criar esse canal de 1cm de pele lisa.",
                tip: "Isso é o que diferencia o Balbo de um cavanhaque comum."
              },
              {
                title: "Manutenção de Linhas",
                description: "Como o Balbo tem muitas bordas, você precisará retocar o desenho a cada 2 dias para manter o visual 'sharp'.",
                tip: "Use uma loção pós-barba calmante para evitar irritação nas áreas de pele raspada."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Estilo Balbo, a simetria entre o bigode e a alma (soul patch) é o que define a classe do visual. Use um pente fino para alinhar o centro do bigode com o centro do queixo. Se as peças estiverem 'desalinhadas' mesmo que por milímetros, o rosto perde o equilíbrio. A precisão aqui é sua melhor amiga."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'shaving-kit-pro', name: "Kit de Barbear Vintage", desc: "Ferramentas clássicas para o homem que desenha o próprio estilo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-garibaldi-circular': {
      title: "Barba Garibaldi: O Equilíbrio da Barba Cheia e Redonda",
      subtitle: "Aprenda a modelar a barba robusta e circular que transmite força e naturalidade. O guia para o formato perfeito.",
      author: "Carlos Barbudo",
      date: "12 de Maio de 2026",
      readTime: "13 min",
      category: "Barba",
      image: "/assets/barba-garibaldi.webp",
      howToSteps: [
        { name: "Volume de Fundo", text: "Crescer a barba até atingir cerca de 15 a 20cm de comprimento." },
        { name: "Arredondamento", text: "Aparar a base da barba em um formato circular perfeito, sem pontas." },
        { name: "Bigode Integrado", text: "Manter o bigode longo mas que flui naturalmente para dentro da barba lateral." },
        { name: "Laterais Cheias", text: "Diferente da Ducktail, aqui as laterais mantêm o volume e a densidade." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Barba Garibaldi</strong> é imponente, larga e arredondada. Diferente de outros estilos longos que buscam ângulos, a Garibaldi celebra a forma circular e natural. É a escolha perfeita para quem quer um visual de impacto que pareça "esforço zero", embora exija uma modelagem precisa na base.
          </p>

          <ToolBox 
            tools={[
              { name: "Tesoura de Corte Profissional", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Madeira Grande", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Balm Cremoso para Volume", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Escultura da Base",
                description: "Penteie toda a barba para baixo. Com uma tesoura, corte os fios em um arco suave de orelha a orelha. A base deve ser larga e não pontuda.",
                tip: "Faça o corte com a barba seca para não ter surpresas após o encolhimento."
              },
              {
                title: "O Bigode Garibaldino",
                description: "O bigode deve ser mantido longo e pode ser levemente curvado para as laterais, integrando-se ao volume da bochecha.",
                tip: "Não use cera de fixação forte no bigode; ele deve parecer natural."
              },
              {
                title: "Cuidado com o Comprimento",
                description: "A Garibaldi clássica não passa dos 20cm. Se crescer demais, ela vira uma 'Viking'. O charme está no formato compacto e denso.",
                tip: "Use um condicionador de barba potente no banho para manter os fios macios."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Na Barba Garibaldi, o volume lateral é seu aliado. Não tente 'afinar' as bochechas. Deixe o pelo crescer para fora e apenas apare os fios rebeldes. O formato deve ser um semicírculo perfeito que emoldura o queixo, transmitindo uma aura de robustez e maturidade."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'garibaldi-shampoo', name: "Shampoo de Limpeza e Volume", desc: "Ideal para manter a densidade e o brilho da sua Garibaldi.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-viking-trancada': {
      title: "Barba Viking: Tranças, História e Autenticidade",
      subtitle: "Descubra como cultivar uma barba épica e aprender as técnicas de trançado que definem o visual dos guerreiros nórdicos.",
      author: "Carlos Barbudo",
      date: "13 de Maio de 2026",
      readTime: "14 min",
      category: "Barba",
      image: "/assets/barba-viking.webp",
      howToSteps: [
        { name: "Base Ultra Longa", text: "Ter pelo menos 15 a 20cm de comprimento no queixo." },
        { name: "Divisão de Mechas", text: "Separar a barba em 3 mechas iguais para iniciar a trança." },
        { name: "Trançado Firme", text: "Trançar os fios de forma firme e prender com anéis de metal (beads) ou elásticos discretos." },
        { name: "Finalização com Óleo", text: "Aplicar óleo nas pontas trançadas para evitar que se soltem ou quebrem." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Barba Viking</strong> é mais do que um estilo; é uma declaração de força e história. Diferente da barba lenhador comum, a Viking frequentemente incorpora tranças e adornos de metal. É um visual rústico que exige fios muito fortes e saudáveis para suportar o peso e a tração das tranças.
          </p>

          <ToolBox 
            tools={[
              { name: "Anéis de Barba (Beads) Estilo Nórdico", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Óleo de Crescimento Viking", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente de Osso ou Madeira", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Comprimento de Respeito",
                description: "Para uma trança visível, você precisa de tempo. O crescimento pode levar de 8 meses a um ano. Não corte nada além das laterais durante esse período.",
                tip: "Use tônicos de crescimento para fortalecer a raiz do fio."
              },
              {
                title: "A Técnica da Trança",
                description: "Comece a trança logo abaixo do queixo. Tente manter a tensão igual em todas as voltas para que a trança não fique torta.",
                tip: "Se sua barba for muito lisa, use um pouco de cera antes de trançar."
              },
              {
                title: "Adornos e Simbolismo",
                description: "Os anéis de metal não são apenas decorativos; eles ajudam a manter a trança no lugar sem a necessidade de elásticos que podem quebrar o fio.",
                tip: "Escolha beads de aço inoxidável ou prata para não irritar a pele do pescoço."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para trançar a barba Viking, o segredo é a umidade. Nunca transe com a barba totalmente seca; aplique um pouco de óleo de barba para dar aderência aos fios. Isso evita que a trança 'escorregue' e mantém o desenho firme por muito mais tempo, além de proteger os fios da tração."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'viking-kit', name: "Kit Barba Viking Completo", desc: "Shampoo, Óleo e Anéis de metal para sua barba épica.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-espartana-maxilar': {
      title: "Barba Espartana: O Design que Esculpe o Rosto",
      subtitle: "Aprenda a criar o ângulo perfeito no queixo enquanto mantém as laterais baixas para um visual guerreiro e definido.",
      author: "Carlos Barbudo",
      date: "13 de Maio de 2026",
      readTime: "11 min",
      category: "Barba",
      image: "/assets/barba-espartana.webp",
      howToSteps: [
        { name: "Laterais em Degradê", text: "Baixar o volume das bochechas com máquina pente 1 ou 2." },
        { name: "Queixo Pontudo", text: "Deixar o volume crescer para baixo no queixo, criando um bico angular." },
        { name: "Linha de Mandíbula", text: "Limpar a linha do pescoço de forma reta, acompanhando o osso da mandíbula." },
        { name: "Contorno do Bigode", text: "Bigode curto e integrado, sem cobrir os lábios." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Inspirada na estética dos antigos guerreiros da Grécia, a <strong>Barba Espartana</strong> foca na geometria. Ela é caracterizada por bochechas extremamente limpas e um queixo que se projeta para baixo em um formato triangular. É o estilo supremo para quem quer disfarçar um queixo retraído ou bochechas muito redondas.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina de Acabamento com Lâmina em T", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Modelagem Angular", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Balm Modelador com Efeito Seco", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Linha da Bochecha Alta",
                description: "A linha da bochecha deve ser mantida alta e reta. Use uma régua de barba se necessário. O contraste entre a pele limpa e o pelo escuro define o rosto.",
                tip: "Use uma navalha para dar o toque final de limpeza nas bordas superiores."
              },
              {
                title: "Esculpindo o Triângulo",
                description: "Tire o volume das laterais da barba (perto da mandíbula) e deixe o comprimento apenas na frente. Isso cria o efeito espartano clássico.",
                tip: "Penteie sempre para a frente e para baixo durante o corte."
              },
              {
                title: "Manutenção de Guerreiro",
                description: "A cada 15 dias, você deve retocar o ângulo do queixo. Como a barba cresce rápido, a ponta pode perder o formato em pouco tempo.",
                tip: "Use uma escova de cerdas firmes para direcionar os fios rebeldes."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A Barba Espartana é sobre 'projeção'. Ao aparar a ponta do queixo, não corte reto; faça um bico levemente voltado para a frente. Isso acentua o perfil e dá uma aparência muito mais agressiva e heróica ao seu rosto, disfarçando qualquer fraqueza na linha do maxilar."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'spartan-trimmer', name: "Trimmer de Alta Precisão 300", desc: "A ferramenta ideal para desenhar ângulos perfeitos no rosto.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-quadrada-short-boxed': {
      title: "Short Boxed: A Barba Quadrada para o Sucesso",
      subtitle: "O guia da barba executiva. Saiba como manter o formato retangular que transmite ordem, asseio e autoridade.",
      author: "Carlos Barbudo",
      date: "13 de Maio de 2026",
      readTime: "10 min",
      category: "Barba",
      image: "/assets/barba-short-boxed.webp",
      howToSteps: [
        { name: "Comprimento Médio", text: "Manter a barba com cerca de 1cm a 2cm de comprimento uniforme." },
        { name: "Linhas Verticais", text: "Aparar as laterais de forma que fiquem paralelas, criando o aspecto quadrado." },
        { name: "Base Plana", text: "Cortar a parte de baixo da barba (mandíbula) em uma linha reta horizontal." },
        { name: "Bigode Alinhado", text: "Bigode aparado na linha do lábio, sem volume excessivo." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Short Boxed</strong> é a versão polida da barba cheia. Ela é "encaixotada", ou seja, segue linhas muito retas e ângulos de 90 graus na mandíbula. É o estilo preferido de CEOs e profissionais que querem a presença de uma barba sem o visual rústico de um lenhador.
          </p>

          <ToolBox 
            tools={[
              { name: "Kit de Pentes Guia para Máquina", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Navalhete de Barbear Clássico", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Barba Sem Brilho", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Quadratura do Círculo",
                description: "Se o seu rosto é redondo, a Short Boxed é sua melhor amiga. Use a máquina para remover o volume das bochechas laterais, criando planos retos.",
                tip: "Use um espelho triplo para garantir que as laterais estejam paralelas."
              },
              {
                title: "O Canto da Mandíbula",
                description: "O ângulo onde a lateral encontra a base deve ser bem marcado. Use a máquina sem pente para definir esse ponto exato logo abaixo da orelha.",
                tip: "Mantenha a linha do pescoço limpa a exatamente dois dedos do pomo de adão."
              },
              {
                title: "Hidratação Sem Óleo",
                description: "Como é um visual corporativo, evite barbas muito brilhantes. Use um Balm leve que hidrate sem deixar aquele aspecto oleoso no terno.",
                tip: "Aplique o produto com a barba ainda levemente úmida."
              }
            ]}
          />
        </>
      ),
      recommendedProducts: [
        { id: 'boxed-balm', name: "Balm Executive Matte Finish", desc: "O toque final de classe para sua barba quadrada.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'cavanhaque-estendido-hollywoodian': {
      title: "Hollywoodian: O Cavanhaque das Estrelas",
      subtitle: "Descubra como adotar o estilo que une o cavanhaque à linha do maxilar, mantendo as costeletas raspadas. Sofisticação pura.",
      author: "Carlos Barbudo",
      date: "13 de Maio de 2026",
      readTime: "9 min",
      category: "Barba",
      image: "/assets/cavanhaque-estendido.webp",
      howToSteps: [
        { name: "Remoção de Costeletas", text: "Raspar totalmente as laterais do rosto desde a orelha até o início da mandíbula." },
        { name: "Linha de Maxilar", text: "Deixar a barba crescer apenas na linha inferior do rosto." },
        { name: "Conexão com Cavanhaque", text: "Integrar a linha do maxilar ao bigode e queixo." },
        { name: "Height of Bochecha", text: "Baixar a linha da bochecha significativamente, deixando apenas uma faixa estreita de barba." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Cavanhaque Estendido</strong>, ou Hollywoodian, é o favorito de celebridades que querem destacar o maxilar sem a densidade de uma barba cheia. A principal diferença é a ausência total de costeletas, o que cria um visual limpo perto das orelhas e focado na parte frontal do rosto.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina Shaver de Folha", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gel de Barbear Transparente", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pós-Barba Hidratante", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Ponto de Corte das Costeletas",
                description: "A barba deve parar cerca de 2 a 3 centímetros antes da orelha. A transição deve ser brusca e limpa, sem degradê.",
                tip: "Use uma máquina shaver para deixar as áreas laterais 'lisas como seda'."
              },
              {
                title: "A Linha da Bochecha Baixa",
                description: "Diferente da maioria dos estilos, no Hollywoodian a barba na bochecha é muito baixa. Ela deve acompanhar a curvatura da mandíbula de forma paralela.",
                tip: "Mantenha a espessura da faixa de barba entre 2 e 4 cm."
              },
              {
                title: "Manutenção da 'Ilha'",
                description: "Como há muita pele exposta, a manutenção deve ser diária. Qualquer penugem nas bochechas ou costeletas destrói o visual sofisticado do estilo.",
                tip: "Esfolie as áreas raspadas para evitar irritação constante."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Hollywoodian é o estilo da 'precisão lateral'. Onde o pelo termina antes da orelha, a linha deve ser perfeitamente vertical. Use um trimmer de alta precisão para garantir que esse limite seja nítido. É esse detalhe técnico que dá o ar de 'celebridade' ao corte e destaca o seu perfil."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'hollywood-gel', name: "Gel de Barbear Precision Clear", desc: "Visibilidade máxima para desenhar o cavanhaque das estrelas.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-verdi-giuseppe': {
      title: "Barba Verdi: O Equilíbrio entre a Arte e a Robustez",
      subtitle: "Aprenda a cultivar a barba arredondada com o bigode Handlebar destacado. O estilo do compositor Giuseppe Verdi.",
      author: "Carlos Barbudo",
      date: "13 de Maio de 2026",
      readTime: "12 min",
      category: "Barba",
      image: "/assets/barba-verdi.webp",
      howToSteps: [
        { name: "Comprimento Curto-Médio", text: "Manter a barba no queixo com no máximo 10cm, sempre arredondada." },
        { name: "Bigode Handlebar", text: "Deixar o bigode crescer longo para que as pontas possam ser curvadas para cima." },
        { name: "Desconexão Sutil", text: "O bigode pode ou não encostar na barba, mas deve ser claramente o destaque visual." },
        { name: "Laterais Aparadas", text: "As bochechas devem ter volume controlado para não brigar com o bigode." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Batizada em homenagem ao compositor de óperas Giuseppe Verdi, este estilo é pura arte facial. A <strong>Barba Verdi</strong> combina uma barba curta, cheia e arredondada com um bigode imponente, muitas vezes estilizado como um <em>Handlebar</em> (guidão de bicicleta). É o visual definitivo para o cavalheiro moderno que aprecia a estética clássica.
          </p>

          <ToolBox 
            tools={[
              { name: "Cera de Bigode de Alta Fixação", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Madeira para Bigode", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Barba Hidratante", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Arredondamento da Base",
                description: "Diferente da Ducktail, a Verdi nunca é pontuda. Use a tesoura para criar uma curva suave que acompanhe o formato do queixo.",
                tip: "Apare a barba a cada 10 dias para manter o comprimento compacto."
              },
              {
                title: "Estilizando o Handlebar",
                description: "O segredo está no bigode. Use cera nas pontas e enrole-as para cima e para fora. Ele deve parecer 'flutuar' sobre a barba.",
                tip: "Não corte o bigode no meio; penteie-o para as laterais desde o início do crescimento."
              },
              {
                title: "O Contraste Necessário",
                description: "Mantenha a linha do pescoço muito bem limpa. O contraste entre a barba robusta e o pescoço liso realça o desenho da Verdi.",
                tip: "Use um secador de cabelo e uma escova redonda pequena para dar volume ao bigode."
              }
            ]}
          />
        </>
      ),
      recommendedProducts: [
        { id: 'verdi-wax', name: "Mustache Wax Imperial Strong", desc: "A cera definitiva para manter seu Handlebar impecável o dia todo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-french-fork-garfo-frances': {
      title: "French Fork: O Estilo que Divide Opiniões e Rostos",
      subtitle: "Aprenda a esculpir e manter a barba que se divide em duas pontas, um visual clássico e excêntrico.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "11 min",
      category: "Barba",
      image: "/assets/barba-french-fork.webp",
      howToSteps: [
        { name: "Crescimento de Base", text: "Ter uma barba cheia com pelo menos 5cm no queixo." },
        { name: "Divisão Central", text: "Usar um pente para criar uma risca no meio exato do queixo." },
        { name: "Modelagem de Pontas", text: "Aplicar balm forte em cada lado para criar duas pontas separadas." },
        { name: "Limpeza Lateral", text: "Manter as laterais mais baixas para focar a atenção na divisão." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>French Fork</strong> (Garfo Francês) é uma barba para homens que não têm medo de serem o centro das atenções. Popularizada por figuras históricas e personagens de piratas, ela se caracteriza por uma barba cheia que é propositalmente dividida em duas pontas no queixo. É um estilo que exige fios grossos e uma boa dose de produto modelador.
          </p>

          <ToolBox 
            tools={[
              { name: "Balm Modelador de Alta Fixação", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Dentes Finos para Divisão", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Tesoura de Precisão para Pontas", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Simetria é Tudo",
                description: "A divisão deve começar exatamente no centro do lábio inferior e descer até a base da barba. Se ficar torto, o visual perde toda a elegância.",
                tip: "Use o 'arco do cupido' do lábio como referência para a linha central."
              },
              {
                title: "Criando as Pontas",
                description: "Penteie cada metade da barba para fora e para baixo. Use uma tesoura para aparar os fios de forma que cada lado termine em uma ponta suave.",
                tip: "Não corte demais na primeira vez; fios de barba encolhem quando secam."
              },
              {
                title: "Manutenção do Vão",
                description: "O espaço entre as duas pontas deve ser mantido limpo e definido. Use um pouco de cera de bigode para 'colar' os fios rebeldes que tentam fechar o buraco.",
                tip: "Aplique o product com os dedos, torcendo levemente as pontas."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para manter o French Fork perfeitamente dividido, o segredo é a escovação para fora. Ao secar a barba, use o bico do secador exatamente no meio do queixo, soprando o ar do centro para as laterais. Isso 'vicia' o fio a se afastar da linha central, facilitando a aplicação do Balm finalizador."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'french-wax', name: "Cera Modeladora Strong Hold", desc: "A fixação necessária para manter o seu garfo francês separado o dia todo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-chin-strap-faixa': {
      title: "Chin Strap: A Linha que Define o Maxilar",
      subtitle: "Descubra como desenhar a faixa de barba perfeita que acompanha o contorno do rosto sem bigode.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "9 min",
      category: "Barba",
      image: "/assets/barba-chin-strap.webp",
      howToSteps: [
        { name: "Barbear Total", text: "Raspar totalmente o bigode e as bochechas altas." },
        { name: "Desenho de Faixa", text: "Deixar apenas uma linha de pelos acompanhando o osso da mandíbula." },
        { name: "Simetria de Lados", text: "Garantir que a espessura da faixa seja idêntica em ambos os lados." },
        { name: "Limpeza de Pescoço", text: "Remover qualquer pelo abaixo da linha da mandíbula." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Chin Strap</strong> é um estilo minimalista que foca puramente na estrutura óssea do rosto. É a escolha ideal para homens com maxilar bem definido ou para aqueles que querem criar a ilusão de uma mandíbula mais forte. Exige uma manutenção quase diária para que as áreas raspadas não fiquem com 'sombra'.
          </p>

          <ToolBox 
            tools={[
              { name: "Barbeador de Precisão", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gel de Barbear Transparente", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Lâmina de Acabamento", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Caminho da Lâmina",
                description: "A faixa deve começar na costeleta e descer suavemente até o queixo. A largura ideal varia entre 0.5cm e 1.5cm.",
                tip: "Quanto mais fina a faixa, mais difícil é manter a simetria."
              },
              {
                title: "A Ausência do Bigode",
                description: "O Chin Strap clássico não tem bigode. Use uma máquina shaver para deixar a pele acima do lábio superior perfeitamente lisa.",
                tip: "Se quiser uma variação moderna, pode deixar um bigode bem ralo (stubble)."
              },
              {
                title: "Manutenção Diária",
                description: "Qualquer pelo fora da linha 'suja' o visual. Você precisará raspar as bochechas e o pescoço a cada 1 ou 2 dias.",
                tip: "Use um gel transparente para enxergar exatamente onde a lâmina está passando."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Chin Strap, a espessura deve ser constante da orelha ao queixo. O maior erro é deixar a faixa afinar no meio do caminho. Use um pente guia de máquina para garantir a mesma largura em toda a extensão. Se quiser um visual mais moderno, peça ao barbeiro para fazer um 'fade' apenas no início da costeleta."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'chin-shaver', name: "Shaver de Alta Precisão", desc: "Perfeito para manter as áreas ao redor da sua chin strap sempre limpas.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-bandholz-volume-maximo': {
      title: "Bandholz: O Estilo para os Pacientes e Poderosos",
      subtitle: "Tudo sobre o estilo que celebra o crescimento natural e o volume extremo. Saiba como chegar lá.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "15 min",
      category: "Barba",
      image: "/assets/barba-viking.webp",
      howToSteps: [
        { name: "O Ano de Ouro", text: "Deixar a barba crescer por pelo menos 1 ano sem cortes significativos." },
        { name: "Higiene Impecável", text: "Lavar e condicionar diariamente para evitar o ressecamento de barbas longas." },
        { name: "Bigode Integrado", text: "Deixar o bigode crescer livremente junto com a barba." },
        { name: "Escovação de Luxo", text: "Escovar 3 vezes ao dia para direcionar os fios e evitar nós." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Criado por Eric Bandholz, este estilo é o 'Santo Graal' das barbas cheias. A <strong>Bandholz</strong> foca no crescimento orgânico e no volume máximo. Diferente da Garibaldi, ela não tem um limite de comprimento definido. É uma jornada de paciência e cuidado genético que recompensa com um visual de autoridade inigualável.
          </p>

          <ToolBox 
            tools={[
              { name: "Escova de Cerdas de Javali Premium", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Condicionador de Barba Leave-in", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente de Chifre ou Madeira", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Fase da Coceira",
                description: "Nos primeiros meses, a barba vai incomodar. Resista à tentação de aparar. Use óleo de barba desde o primeiro dia para manter a pele macia.",
                tip: "A coceira geralmente passa após a 4ª semana de crescimento."
              },
              {
                title: "Nutrição de Dentro para Fora",
                description: "Uma barba Bandholz exige nutrientes. Mantenha uma dieta rica em biotina e vitaminas do complexo B para fios fortes.",
                tip: "Beba pelo menos 2 litros de água por dia para hidratar os folículos."
              },
              {
                title: "Aparando com Moderação",
                description: "Após 6 meses, apare apenas as pontas duplas. O objetivo é densidade, não apenas comprimento.",
                tip: "Use uma tesoura de barbeiro profissional, nunca use máquina no comprimento."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A Barba Bandholz é uma prova de resistência. O segredo para não desistir no 'período estranho' é a hidratação intensa. O peso do óleo ajuda a 'baixar' o volume lateral excessivo dos primeiros meses, dando à barba uma direção vertical mais controlada e menos bagunçada."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'bandholz-oil', name: "Óleo Ultra-Hidratante 100ml", desc: "A dose necessária de nutrição para barbas de longo prazo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-hulihee-estilo-vintage': {
      title: "Hulihee: A Extravagância das Costeletas Conectadas",
      subtitle: "Descubra o estilo clássico onde as costeletas volumosas se encontram no bigode, deixando o queixo livre.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "13 min",
      category: "Barba",
      image: "/assets/barba-garibaldi.webp",
      howToSteps: [
        { name: "Crescer Laterais", text: "Focar no volume máximo das bochechas e costeletas." },
        { name: "Raspar o Queixo", text: "Manter uma área de pelo menos 3 dedos no queixo totalmente lisa." },
        { name: "União com Bigode", text: "Deixar o bigode crescer para os lados até se fundir com as costeletas." },
        { name: "Penteado para Fora", text: "Escovar as costeletas para as laterais, criando um visual 'alado'." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Hulihee</strong> é um estilo de barba havaiano clássico que exala personalidade. É essencialmente um conjunto de mutton chops (costeletas de carneiro) extremamente longos e conectados por um bigode, mas com o queixo e a parte inferior do lábio totalmente raspados. É um visual teatral e muito impactante.
          </p>

          <ToolBox 
            tools={[
              { name: "Balm de Volume para Laterais", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Navalha Clássica", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Escova Redonda Pequena", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Desenho do 'Vazio'",
                description: "A parte mais importante é a limpeza do queixo. A linha deve ser nítida e simétrica. O queixo liso destaca o volume lateral.",
                tip: "Use um espelho de aumento para garantir que não restou nenhum fio no queixo."
              },
              {
                title: "Dando Volume às 'Asas'",
                description: "Penteie os pelos das bochechas para trás e para cima. Use um secador no modo morno para dar aquele aspecto cheio e imponente.",
                tip: "Aplique um pouco de fixador de cabelo leve para manter as 'asas' no lugar."
              },
              {
                title: "A Integração do Bigode",
                description: "O bigode não deve ser curto. Ele deve ser largo o suficiente para que seus fios se misturem com os fios das bochechas sem divisões visíveis.",
                tip: "Não apare a parte superior do bigode; deixe-o encostar no nariz se necessário."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Hulihee, a limpeza do queixo deve ser cirúrgica. Não raspe apenas os pelos; use uma máquina shaver para deixar a pele totalmente lisa. Esse contraste extremo entre a pele nua do queixo e as 'asas' laterais volumosas é o que define o estilo e evita que ele pareça apenas uma barba mal feita."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'hulihee-balm', name: "Balm de Volume e Brilho", desc: "Ideal para dar forma e destaque às laterais da sua Hulihee.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-imperial-realeza': {
      title: "Barba Imperial: O Visual da Realeza Europeia",
      subtitle: "Aprenda a combinar o bigode aristocrático com um cavanhaque pontudo e elegante.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "12 min",
      category: "Barba",
      image: "/assets/barba-van-dyke.webp",
      howToSteps: [
        { name: "Bigode Handlebar", text: "Crescer um bigode longo e curvar as pontas para cima com cera." },
        { name: "Cavanhaque Pontudo", text: "Aparar a barba do queixo em um formato de 'V' invertido." },
        { name: "Desconexão Total", text: "Raspar as áreas entre o bigode e o queixo para isolar os elementos." },
        { name: "Costeletas Curtas", text: "Manter as laterais do rosto muito baixas ou raspadas." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Barba Imperial</strong> é inspirada no Kaiser Wilhelm II e na aristocracia do século XIX. É um estilo que exige manutenção cirúrgica e o uso constante de cera de bigode. O objetivo é criar um visual de 'V' duplo: um no bigode apontando para cima e outro no queixo apontando para baixo.
          </p>

          <ToolBox 
            tools={[
              { name: "Cera de Bigode Extra-Forte", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Navalhete de Precisão", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Mini Ferro de Modelar Bigode", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Curvatura Imperial",
                description: "O bigode deve ser o protagonista. Penteie-o para fora e use cera para enrolar as pontas em círculos perfeitos voltados para as bochechas.",
                tip: "Aqueça a cera entre os dedos antes de aplicar para evitar grumos."
              },
              {
                title: "O Queixo em 'V'",
                description: "A barba no queixo deve ser estreita e longa o suficiente para ser modelada em uma ponta fina. Não deixe pelos nas laterais da mandíbula.",
                tip: "Use um pouco de cera também na ponta do queixo para manter o formato."
              },
              {
                title: "O Toque Final de Limpeza",
                description: "As bochechas devem estar sempre lisas. Qualquer sombra de pelo nessas áreas tira o foco do desenho Imperial.",
                tip: "Use uma loção pós-barba com álcool para um acabamento clássico e refrescante."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "A Barba Imperial é puro visagismo. O segredo para o queixo pontudo perfeito é o uso de um pouco de cera modeladora também na base da barba, não apenas no bigode. Isso evita que os fios 'abram' com o vento e mantém a elegância aristocrática que este estilo exige durante todo o dia."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'imperial-wax', name: "Mustache Wax Royal Gold", desc: "A cera preferida dos competidores de barba e bigode.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-mutton-chops-wolverine': {
      title: "Mutton Chops: O Estilo Feroz das Costeletas de Carneiro",
      subtitle: "Saiba como cultivar as costeletas mais icônicas da cultura pop e do visual rústico vintage.",
      author: "Carlos Barbudo",
      date: "15 de Maio de 2026",
      readTime: "10 min",
      category: "Barba",
      image: "/assets/barba-grisalha.webp",
      howToSteps: [
        { name: "Crescer Costeletas", text: "Deixar os pelos das laterais do rosto crescerem sem restrições." },
        { name: "Raspar o Centro", text: "Manter o queixo e a parte inferior da boca perfeitamente raspados." },
        { name: "Unir ao Bigode", text: "Permitir que as costeletas se conectem ao bigode, formando uma curva." },
        { name: "Volume Controlado", text: "Aparar apenas a altura dos fios para não parecer desleixado." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            As <strong>Mutton Chops</strong> são um retorno ao século XIX, mas com uma pegada moderna de rebeldia. Este estilo foca no volume lateral, onde as costeletas são deixadas largas e densas, muitas vezes conectadas ao bigode, enquanto o queixo permanece limpo. É o visual definitivo para quem quer um rosto mais largo e uma presença masculina marcante.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina de Corte Potente", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gel de Barbear Refrescante", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Barba Suavizante", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Definição do Queixo",
                description: "A área raspada no queixo deve ter pelo menos 3 a 5 cm de largura. Use uma navalha para garantir que a linha entre a pele lisa e os pelos seja reta e nítida.",
                tip: "Use o centro do lábio como guia para centralizar a raspagem."
              },
              {
                title: "O Formato da Ferradura lateral",
                description: "As costeletas devem descer pela bochecha e curvar-se em direção ao bigode. Mantenha a densidade alta perto da orelha e vá diminuindo levemente em direção à boca.",
                tip: "Penteie os pelos para baixo para ver o real comprimento antes de aparar."
              },
              {
                title: "Cuidados com a Pele Exposta",
                description: "Como o queixo é raspado constantemente, a pele pode sofrer. Use um bom pós-barba para evitar vermelhidão na área central do rosto.",
                tip: "Não esqueça de hidratar os pelos das bochechas com balm."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Mutton Chops, a conexão com o bigode deve ser suave. Se o seu bigode for muito mais ralo que as costeletas, mantenha-o mais curto para equilibrar a densidade visual. O segredo da masculinidade deste corte é o volume na parte de trás da mandíbula, perto da orelha."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'mutton-kit', name: "Kit de Manutenção Lateral", desc: "Tudo o que você precisa para manter suas costeletas alinhadas.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'bigode-ferradura-biker': {
      title: "Bigode Ferradura: O Visual de Impacto e Rebeldia",
      subtitle: "Aprenda a domar o estilo clássico dos motoqueiros e ícones da luta livre.",
      author: "Carlos Barbudo",
      date: "15 de Maio de 2026",
      readTime: "11 min",
      category: "Barba",
      image: "/assets/bigode-chevron.webp",
      howToSteps: [
        { name: "Crescimento Vertical", text: "Deixar o bigode crescer para baixo nos cantos da boca." },
        { name: "Linhas Paralelas", text: "Aparar as extensões verticais para que fiquem paralelas até o maxilar." },
        { name: "Queixo Limpo", text: "Raspar totalmente o centro do queixo e bochechas." },
        { name: "Volume Uniforme", text: "Manter a mesma espessura desde o lábio até o final da extensão." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Bigode Ferradura</strong> (Horseshoe) é um dos estilos mais agressivos e reconhecíveis do mundo. Caracterizado por um bigode que desce em linhas retas até a mandíbula, ele emoldura a boca e transmite uma imagem de força e atitude. É o estilo favorito de subculturas como motoqueiros e roqueiros.
          </p>

          <ToolBox 
            tools={[
              { name: "Máquina de Contorno Profissional", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Bigode e Barba", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Gel de Barbear para Pele Sensível", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Linha da Ferradura",
                description: "As duas linhas que descem da boca devem ser perfeitamente retas. Use a quina do seu maxilar como referência de fim da linha.",
                tip: "Cuidado para não deixar as linhas muito finas; a ferradura deve ter presença."
              },
              {
                title: "O Contraste do Queixo",
                description: "A área central do queixo deve estar sempre muito bem raspada. Qualquer pelo nessa área transforma o bigode em um cavanhaque, perdendo o estilo original.",
                tip: "Use uma lâmina de barbear clássica para garantir a limpeza total no centro."
              },
              {
                title: "Penteando para Baixo",
                description: "Penteie os fios verticalmente todos os dias. Isso treina o pelo a crescer na direção certa e evita que ele entre na boca.",
                tip: "Apare os fios que passarem da linha do lábio superior com uma tesoura pequena."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para o Bigode Ferradura perfeito, as linhas verticais devem ser paralelas. Use um pente encostado no canto da boca para marcar o limite externo. É um estilo de 'atitude'; se as linhas convergirem para dentro, o visual perde a força e parece um cavanhaque que deu errado."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'biker-kit', name: "Kit Bigode de Respeito", desc: "Tudo o que você precisa para manter sua ferradura alinhada e brilhante.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'bigode-handlebar-guidao': {
      title: "Bigode Guidão (Handlebar): A Arte da Curva Perfeita",
      subtitle: "Descubra como cultivar e modelar o bigode mais icônico da cultura hipster e clássica.",
      author: "Carlos Barbudo",
      date: "15 de Maio de 2026",
      readTime: "12 min",
      category: "Barba",
      image: "/assets/bigode-chevron.webp",
      howToSteps: [
        { name: "Crescer sem Cortar", text: "Não apare os pelos acima do lábio; penteie-os para os lados." },
        { name: "Treinar os Fios", text: "Usar cera diariamente para 'ensinar' o bigode a crescer para fora." },
        { name: "Enrolar as Pontas", text: "Quando houver comprimento suficiente, use os dedos para criar a espiral." },
        { name: "Limpeza Labial", text: "Aparar apenas os pelos que entrarem na boca, preservando o comprimento lateral." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Bigode Guidão</strong> (Handlebar) é mais do que um estilo; é um compromisso com a estética. Caracterizado por pontas longas e enroladas, ele evoca a elegância do século XIX e a modernidade hipster. É o visual definitivo para quem não tem medo de chamar a atenção e valoriza a precisão na modelagem.
          </p>

          <ToolBox 
            tools={[
              { name: "Cera de Bigode Extra Forte", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Bigode de Chifre ou Madeira", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Secador de Cabelo (para amolecer a cera)", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Fase do Crescimento",
                description: "O maior erro é aparar o meio do bigode. Você precisa deixar os pelos crescerem o suficiente para que possam ser penteados para os lados e alcancem as pontas.",
                tip: "Use um balm para controlar os fios rebeldes enquanto eles crescem."
              },
              {
                title: "A Técnica da Modelagem",
                description: "Aqueça uma pequena quantidade de cera entre os dedos. Aplique do centro para as pontas e use o secador no modo quente para ajudar a cera a penetrar, depois mude para o frio para 'congelar' a curva.",
                tip: "Enrole a ponta ao redor de um lápis se tiver dificuldade em fazer a curva com os dedos."
              },
              {
                title: "Higiene Constante",
                description: "Bigodes grandes acumulam resíduos de comida e bebida. Lave sempre após as refeições e use um condicionador de barba para manter os fios macios.",
                tip: "Tenha sempre um lenço à mão quando for beber café ou cerveja."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "No Bigode Guidão, a paciência é a sua maior ferramenta. Não use cera em excesso no início; deixe o pelo crescer livre até que as pontas alcancem a linha da bochecha. Só então comece a enrolar. O uso precoce de cera pesada pode quebrar o fio e impedir que ele atinja o comprimento épico necessário."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'handlebar-wax', name: "Cera Modeladora Extreme Hold", desc: "A cera definitiva para quem quer o guidão perfeito o dia todo.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'barba-old-dutch-holandes': {
      title: "Old Dutch: O Guia do Estilo 'Holandês' Tradicional",
      subtitle: "Descubra como dominar a barba rústica que dispensa o bigode para um visual de autoridade.",
      author: "Carlos Barbudo",
      date: "20 de Junho de 2026",
      readTime: "11 min",
      category: "Barba",
      image: "/assets/barba-old-dutch.webp",
      howToSteps: [
        { name: "Crescimento de Base", text: "Deixar a barba crescer por pelo menos 3 meses para ter volume lateral e frontal." },
        { name: "Remoção do Bigode", text: "Raspar completamente o lábio superior, mantendo a pele lisa e sem sombra de pelos." },
        { name: "Formato Quadrado", text: "Aparar as laterais e o fundo para criar uma base quadrada e larga." },
        { name: "Conexão com Costeletas", text: "Garantir que os pelos da mandíbula subam em linha reta até as costeletas." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O estilo <strong>Old Dutch</strong> (O Velho Holandês) é uma das marcas registradas da estética rústica e tradicional. Caracterizado por uma barba cheia, quadrada e sem o bigode, este visual remete à sobriedade dos colonos europeus e à autoridade clássica. É um corte para homens que não têm medo de volume e que buscam uma distinção clara entre os pelos do rosto e a região da boca.
          </p>

          <ToolBox 
            tools={[
              { name: "Shampoo para Barba de Limpeza Profunda", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Óleo para Barba (Fragrância Amadeirada)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Pente de Madeira com Dentes Largos", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Segredo da Base Quadrada",
                description: "Diferente da barba lenhador que pode ser arredondada, o Old Dutch brilha quando as linhas inferiores são retas. Use um aparador para nivelar o fundo da barba em relação ao pescoço.",
                tip: "Ao olhar de lado, a linha da mandíbula deve parecer uma continuação sólida das costeletas."
              },
              {
                title: "A Disciplina do Bigode",
                description: "Para manter a autenticidade, o lábio superior deve estar perfeitamente raspado. Qualquer crescimento nessa área descaracteriza o estilo e o transforma em uma 'Full Beard' comum.",
                tip: "Raspe a área do bigode diariamente com uma lâmina de precisão para evitar a sombra do pelo."
              },
              {
                title: "Volume Lateral Controlado",
                description: "Embora seja uma barba volumosa, ela não deve 'explodir' para os lados. Use um balm para manter os fios laterais alinhados e apontando para baixo.",
                tip: "Use o secador em temperatura média enquanto penteia para baixo para selar as cutículas do fio."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Old Dutch funciona incrivelmente bem para rostos com formato diamante ou oval, pois o volume lateral e a base quadrada ajudam a dar mais peso à mandíbula. Como a boca fica totalmente exposta, é essencial manter a higiene da barba impecável após as refeições, usando sempre um shampoo de qualidade para evitar o acúmulo de resíduos."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'old-dutch-kit', name: "Combo Barba de Respeito", desc: "Tudo o que você precisa para manter o volume e a limpeza do seu Old Dutch.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'transplante-capilar-valores-custos': {
      title: "Transplante Capilar: Quanto Custa Realmente em 2026? (Valores e Fatores)",
      subtitle: "Descubra os valores reais de um transplante capilar hoje. Analisamos os custos das técnicas FUE e FUT e o que você deve considerar antes de investir.",
      author: "Dr. Estilo (Ph.D)",
      date: "12 de Maio de 2026",
      readTime: "15 min",
      category: "Cabelo",
      image: "/assets/transplante-capilar-custos.webp",
      howToSteps: [
        { name: "Consulta Inicial", text: "Avaliação técnica da área doadora e receptora para determinar a viabilidade." },
        { name: "Escolha da Técnica", text: "Decidir entre FUE (extração individual) ou FUT (faixa de couro cabeludo)." },
        { name: "Cálculo de Folículos", text: "Definição da quantidade de unidades foliculares necessárias para a cobertura desejada." },
        { name: "Pós-Operatório", text: "Planejamento dos custos com medicamentos e loções para a fase de cicatrização." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Transplante Capilar</strong> deixou de ser um luxo inacessível para se tornar uma das cirurgias estéticas mais procuradas por homens em todo o mundo. No entanto, a pergunta principal permanece: <em>"Quanto custa?"</em>. Em 2026, os valores variam drasticamente dependendo da tecnologia utilizada, da reputação da clínica e da extensão da calvície.
          </p>

          <ToolBox 
            tools={[
              { name: "Shampoo Pós-Transplante (pH Neutro)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Loção de Minoxidil 5% (Grade Farmacêutica)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Travesseiro de Pescoço para Recuperação", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Técnica FUE (Follicular Unit Extraction)",
                description: "Atualmente a técnica mais buscada. Os folículos são extraídos um a um, sem deixar cicatrizes lineares. O custo por folículo costuma ser mais alto devido à precisão e tempo de cirurgia.",
                tip: "Ideal para quem usa cabelo curto, pois as marcas são praticamente imperceptíveis."
              },
              {
                title: "Técnica FUT (Follicular Unit Transplantation)",
                description: "Envolve a remoção de uma pequena faixa de couro cabeludo. Embora mais tradicional, permite a extração de grandes volumes em uma única sessão. Geralmente possui um valor mais acessível que a FUE.",
                tip: "Recomendada para casos de calvície avançada onde o volume é a prioridade."
              },
              {
                title: "Fatores que Influenciam o Preço",
                description: "A densidade desejada, a qualificação da equipe médica e a infraestrutura hospitalar são os pilares do orçamento. Clínicas premium oferecem hoje até robótica assistida.",
                tip: "Fuja de orçamentos muito abaixo da média; a saúde do seu couro cabeludo é o bem mais precioso."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Ao analisar os valores de um transplante capilar, considere que este é um investimento para a vida toda. O custo médio no Brasil em 2026 varia entre R$ 15.000 e R$ 45.000, dependendo da técnica. Lembre-se: o barato pode sair caro se a área doadora for desperdiçada por mãos inexperientes."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'hair-growth-kit', name: "Kit Crescimento Acelerado", desc: "Suplementação e loções essenciais para potencializar seu transplante.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'transplante-capilar-antes-e-depois-resultados': {
      title: "Transplante Capilar Antes e Depois: A Jornada da Recuperação Real",
      subtitle: "Veja o que esperar do antes e depois de um transplante capilar. Cronograma completo do crescimento e como garantir o melhor resultado final.",
      author: "Carlos Barbudo",
      date: "12 de Maio de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/transplante-capilar-antes-depois.webp",
      howToSteps: [
        { name: "Primeiros 10 Dias", text: "Fase crítica de cicatrização e fixação dos enxertos." },
        { name: "30 Dias (Eflúvio)", text: "Queda temporária dos cabelos transplantados (totalmente normal)." },
        { name: "3 a 6 Meses", text: "Início do crescimento dos novos fios, ainda finos e claros." },
        { name: "12 Meses", text: "Resultado final com densidade máxima e textura natural." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Nada gera mais ansiedade em quem decide fazer um transplante do que o <strong>Antes e Depois</strong>. A transformação física é impactante, mas a jornada emocional entre a cirurgia e o resultado final requer paciência e disciplina. Entender a evolução cronológica é a chave para uma recuperação tranquila.
          </p>

          <ToolBox 
            tools={[
              { name: "Vitaminas para Fortalecimento Capilar", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Escova de Cerdas Macias (Pós 3 meses)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Protetor Solar para Couro Cabeludo", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "O Choque da Queda (Shock Loss)",
                description: "Cerca de 3 a 4 semanas após o procedimento, os cabelos transplantados caem. Não entre em pânico: as raízes (bulbos) permanecem firmes sob a pele. É a fase de repouso antes do crescimento real.",
                tip: "Mantenha a hidratação recomendada pelo médico para acalmar o couro cabeludo nesta fase."
              },
              {
                title: "A Fase do 'Broto'",
                description: "Entre o 3º e o 4º mês, pequenos fios começam a romper a superfície. Eles podem parecer desalinhados ou finos no início, mas ganharão espessura conforme o ciclo capilar se estabiliza.",
                tip: "Evite química ou tinturas agressivas durante os primeiros 6 meses."
              },
              {
                title: "A Consolidação da Densidade",
                description: "Do 9º ao 12º mês, o 'Depois' finalmente se revela. A densidade aumenta e a linha frontal adquire o aspecto natural planejado na cirurgia.",
                tip: "Use um óleo finalizador para dar brilho e saúde aos novos fios permanentes."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Um transplante bem-sucedido não depende apenas do cirurgião, mas do cuidado pós-operatório. Fotos de antes e depois mostram apenas o fim, mas o segredo está em seguir a risca o uso de bloqueadores de DHT (como a Finasterida) para evitar que o cabelo nativo continue caindo ao redor dos novos fios."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'hair-maintenance', name: "Kit Pós-Op Premium", desc: "Shampoo e loções calmantes para uma cicatrização perfeita.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'soul-patch-mosca': {
      title: "Soul Patch: O Detalhe que Faz a Diferença",
      subtitle: "Saiba como usar e manter o pequeno triângulo de pelos abaixo do lábio para um visual artístico e minimalista.",
      author: "Carlos Barbudo",
      date: "15 de Maio de 2026",
      readTime: "8 min",
      category: "Barba",
      image: "/assets/soul-patch.webp",
      howToSteps: [
        { name: "Delimitação Central", text: "Identificar o centro exato abaixo do lábio inferior." },
        { name: "Raspagem Periférica", text: "Remover todos os pelos ao redor, deixando apenas o triângulo ou gota." },
        { name: "Ajuste de Altura", text: "Aparar os fios para que não fiquem excessivamente longos." },
        { name: "Hidratação da Pele", text: "Como a área é pequena, a pele ao redor deve estar impecável." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Soul Patch</strong>, carinhosamente conhecido no Brasil como "Mosca", é um dos estilos mais minimalistas e expressivos da barbearia. Localizado logo abaixo do lábio inferior, este pequeno detalhe pode mudar completamente a dinâmica do rosto, trazendo um ar artístico, boêmio e sofisticado sem o esforço de uma barba cheia.
          </p>

          <ToolBox 
            tools={[
              { name: "Trimmer de Alta Precisão", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gel de Barbear Transparente", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Barba Leve", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "Encontrando o Centro",
                description: "O Soul Patch deve estar perfeitamente centralizado com o arco do cupido e o centro do queixo. Use um espelho de aumento para garantir a simetria.",
                tip: "Comece com um formato maior e vá diminuindo até chegar ao tamanho ideal para o seu rosto."
              },
              {
                title: "O Formato Ideal",
                description: "Os formatos mais comuns são o triângulo invertido ou a 'gota'. Ele deve terminar antes de chegar à dobra do queixo.",
                tip: "Mantenha as bordas nítidas usando uma lâmina de acabamento ou navalhete."
              },
              {
                title: "Integração com Outros Estilos",
                description: "A mosca funciona muito bem sozinha, mas também é o complemento essencial para o Cavanhaque Van Dyke ou o Estilo Balbo.",
                tip: "Se usar com bigode, garanta que haja um espaço de pele limpa entre eles."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O segredo do Soul Patch de respeito é a densidade. Se os pelos forem muito claros ou finos, mantenha-os um pouco mais longos (cerca de 5-8mm) para que o desenho fique visível. Se forem escuros e grossos, um stubble curto já é o suficiente para criar o impacto desejado."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'precision-trimmer', name: "Aparador de Detalhes Pro", desc: "A ferramenta indispensável para manter os contornos da sua mosca sempre afiados.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'bigode-lapis-vintage': {
      title: "Bigode Lápis: Elegância e Precisão do Cinema Clássico",
      subtitle: "Aprenda a desenhar a linha fina de sofisticação que marcou a era de ouro de Hollywood.",
      author: "Dr. Estilo (Ph.D)",
      date: "15 de Maio de 2026",
      readTime: "10 min",
      category: "Barba",
      image: "/assets/bigode-lapis.webp",
      howToSteps: [
        { name: "Marcação da Linha", text: "Definir uma linha fina de cerca de 2-3mm acima do lábio superior." },
        { name: "Limpeza Total", text: "Raspar todos os pelos acima da linha escolhida até o nariz." },
        { name: "Simetria Labial", text: "Garantir que a espessura seja constante e centralizada." },
        { name: "Manutenção Diária", text: "Pela finura, qualquer crescimento fora da linha estraga o visual." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Bigode Lápis</strong> (Pencil Mustache) é a personificação do charme clássico de Hollywood. Eternizado por ícones como Clark Gable e Errol Flynn, este estilo exige uma mão firme e um olhar atento à simetria. Não se trata de volume, mas de <em>precisão gráfica</em>: uma linha fina e nítida que emoldura o lábio superior com sofisticação absoluta.
          </p>

          <ToolBox 
            tools={[
              { name: "Navalhete de Precisão", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gel de Barbear Transparente", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Lápis de Marcação (Opcional)", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />

          <TutorialSteps 
            steps={[
              {
                title: "A Linha de Separação",
                description: "O Bigode Lápis deve estar a uma distância de 2 a 4mm do lábio superior. Ele nunca deve tocar a boca. O segredo é o espaço de pele limpa entre o pelo e o lábio.",
                tip: "Use um gel transparente para que você possa ver exatamente onde a lâmina está passando."
              },
              {
                title: "Espessura Constante",
                description: "Diferente do Chevron, o lápis não tem volume vertical. Ele deve ser uma faixa fina e contínua. Se o seu pelo for muito ralo, você pode usar um pouco de rímel para barba para dar definição.",
                tip: "Não tente fazer o bigode muito fino na primeira tentativa; vá reduzindo aos poucos."
              },
              {
                title: "Limpeza Superior",
                description: "A área entre o bigode e o nariz deve estar perfeitamente lisa. Qualquer sombra de pelo descaracteriza o estilo e o deixa com aspecto de 'sujo'.",
                tip: "Finalize com uma loção pós-barba para fechar os poros e evitar vermelhidão na área raspada."
              }
            ]}
          />

          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O Bigode Lápis é o visual definitivo para homens de lábios finos ou médios. Ele traz um foco imediato para a boca sem sobrecarregar o rosto. A manutenção deve ser diária: por ser uma linha tão fina, o crescimento de apenas 24 horas já é suficiente para borrar os contornos e tirar a elegância do corte."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'precision-razor', name: "Navalhete Profissional em Aço", desc: "A ferramenta de precisão necessária para criar as linhas ultra-finas do estilo lápis.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'cabelos-cacheados-masculinos-guia-cortes': {
      title: "Cabelos Cacheados Masculinos: O Guia Definitivo de Cortes e Cuidados",
      subtitle: "Domine a definição dos seus cachos com os cortes mais modernos de 2026 e técnicas de finalização profissional.",
      author: "Carlos Barbudo",
      date: "13 de Maio de 2026",
      readTime: "14 min",
      category: "Cabelo",
      image: "/assets/cabelos-cacheados-guia.webp",
      howToSteps: [
        { name: "Lavagem Nutritiva", text: "Usar shampoo sem sulfato e condicionador liberado para manter a hidratação." },
        { name: "Finalização com Creme", text: "Aplicar creme de pentear ou ativador de cachos com o cabelo ainda bem úmido." },
        { name: "Técnica de Fitagem", text: "Separar o cabelo em fitas com os dedos para garantir definição mecha a mecha." },
        { name: "Secagem com Difusor", text: "Usar o secador com difusor em temperatura média para evitar o frizz." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Por muito tempo, o homem com <strong>cabelo cacheado</strong> foi incentivado a raspar as laterais ou manter o corte muito curto por "praticidade". Em 2026, a regra mudou: o volume e a textura natural são os novos símbolos de estilo e personalidade. Aprender a cuidar dos cachos não é apenas vaidade, é entender a geometria do seu próprio rosto e como valorizar a estrutura única dos seus fios.
          </p>
          <ToolBox 
            tools={[
              { name: "Creme de Pentear Ativador", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Dentes Largos", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Difusor de Secador Profissional", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <TutorialSteps 
            steps={[
              {
                title: "O Corte Ideal para Cachos",
                description: "O segredo do cabelo cacheado masculino é o corte em camadas. Isso evita o efeito 'pirâmide' (volume apenas nas pontas) e distribui o peso de forma harmônica.",
                tip: "Procure um barbeiro especialista em visagismo para ajustar o volume lateral de acordo com o seu formato de rosto."
              },
              {
                title: "A Lavagem Inteligente (Low Poo)",
                description: "O cabelo cacheado tende a ser mais seco. Use shampoos sem sulfatos agressivos para não remover a oleosidade natural que protege o cacho.",
                tip: "Enxágue com água fria no final para fechar as cutículas e aumentar o brilho natural."
              },
              {
                title: "Finalização e Fitagem",
                description: "Com o cabelo úmido, aplique o creme de pentear e use os dedos como se fossem um pente, separando as mechas. Isso cria 'fitas' que se transformam em cachos definidos após secar.",
                tip: "Nunca use toalha comum; prefira uma camiseta de algodão para secar o excesso de água sem gerar frizz."
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "O maior inimigo do cacho definido é o toque constante. Depois que você finalizou e o cabelo está secando, resista à tentação de passar as mãos. Deixe o 'durinho' do creme se formar e, só quando estiver 100% seco, amasse levemente os fios para dar balanço e naturalidade."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'curly-kit', name: "Kit Finalização Cachos Gold", desc: "Tudo o que você precisa para definição máxima e zero frizz.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Sparkles size={32} /> }
      ]
    },
    'botox-capilar-profissional-masculino-sem-formol': {
      title: "Botox Capilar Masculino: O Segredo para Fios Alinhados e Saudáveis",
      subtitle: "Descubra como reduzir o frizz e repor a massa capilar sem químicas agressivas e com resultado profissional.",
      author: "Dr. Estilo (Ph.D)",
      date: "13 de Maio de 2026",
      readTime: "14 min",
      category: "Cabelo",
      image: "/assets/botox-capilar-v2.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O nome pode assustar, mas o <strong>Botox Capilar</strong> não tem agulhas. É um tratamento de reconstrução profunda que preenche as 'falhas' da fibra capilar, devolvendo massa e selando as cutículas. Para o homem que sofre com cabelo volumoso demais, rebelde ou danificado por sol e cloro, o botox é a solução ideal para um visual alinhado sem o aspecto artificial das progressivas tradicionais.
          </p>
          <ToolBox 
            tools={[
              { name: "Botox Capilar Sem Formol", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pincel e Pente Fino", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Chapinha de Cerâmica (230°C)", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Passo a Passo: Como Fazer o Botox Capilar</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Limpeza Profunda (Preparação)",
                description: "Lave o cabelo duas vezes com um shampoo antirresíduos. Isso abre as cutículas para que o tratamento de botox consiga penetrar profundamente no córtex do fio.",
                tip: "Certifique-se de que o couro cabeludo está bem limpo e livre de óleos antes de prosseguir."
              },
              {
                title: "2. Aplicação Estratégica",
                description: "Divida o cabelo em mechas e aplique o produto com um pincel, respeitando a distância de 1cm da raiz para evitar irritações. Use um pente fino para espalhar uniformemente.",
                tip: "O segredo é não encharcar o cabelo, apenas umedecer as mechas com o produto."
              },
              {
                title: "3. Tempo de Pausa e Selagem",
                description: "Deixe agir por 40 minutos. Enxágue apenas 50% do produto e seque fazendo uma escova bem lisa. O calor é o que ativa as propriedades selantes do botox.",
                tip: "Passe a prancha (chapinha) em mechas finas pelo menos 10 vezes em cada uma para garantir a selagem térmica total."
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <ShieldCheck className="text-brand-gold" size={22} />
              Segurança em Primeiro Lugar
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Exija sempre o Botox Sem Formol. O botox real foca na nutrição e reposição de aminoácidos, não no alisamento químico permanente. O resultado deve ser um cabelo com movimento natural, não estático."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'botox-mask', name: "Máscara Repositora de Massa", desc: "Efeito botox em casa com queratina e óleos nobres.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <FlaskConical size={32} /> }
      ]
    },
    'dermatite-seborreica-couro-cabeludo-shampoo-tratamento': {
      title: "Dermatite Seborreica: Como Acabar com a Caspa e Irritação",
      subtitle: "Um guia médico e prático para controlar a descamação, coceira e oleosidade excessiva no couro cabeludo.",
      author: "Dr. Estilo (Ph.D)",
      date: "13 de Maio de 2026",
      readTime: "16 min",
      category: "Saúde",
      image: "/assets/dermatite-seborreica-v2.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Dermatite Seborreica</strong> é uma condição inflamatória crônica que afeta milhões de homens. Ela não tem cura definitiva, mas tem controle total. O excesso de oleosidade alimenta fungos naturais da pele, gerando inflamação e as incômodas 'plaquinhas' brancas ou amareladas. Entender o gatilho da sua dermatite é o primeiro passo para um couro cabeludo saudável e livre de coceira.
          </p>
          <ToolBox 
            tools={[
              { name: "Shampoo com Cetoconazol", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Loção Calmante Capilar", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Escova de Massagem de Silicone", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Guia de Tratamento: Como Controlar a Dermatite</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Escolha do Ativo Correto",
                description: "Não use qualquer shampoo anticaspa. Para dermatite real, procure produtos com Cetoconazol, Ácido Salicílico ou Piritionato de Zinco. Eles combatem o fungo Malassezia, responsável pela inflamação.",
                tip: "Alterne entre dois tipos de shampoo com ativos diferentes a cada 15 dias para evitar que o couro cabeludo 'se acostume'."
              },
              {
                title: "2. A Técnica dos 5 Minutos",
                description: "O erro mais comum é enxaguar o shampoo terapêutico imediatamente. Massageie suavemente com as pontas dos dedos e deixe a espuma agir por 5 minutos inteiros para que o ativo penetre nos poros.",
                tip: "Nunca use as unhas para coçar; isso cria microferidas que aumentam a inflamação."
              },
              {
                title: "3. Hábitos de Higiene e Sono",
                description: "Nunca durma com o cabelo úmido. A umidade e o calor do travesseiro criam o ambiente perfeito para a proliferação da dermatite. Use secador no modo morno ou frio após a lavagem.",
                tip: "Lave suas fronhas e bonés semanalmente. Eles acumulam fungos e resíduos de pele morta."
              }
            ]}
          />
          <div className="bg-red-50 border border-red-100 p-6 rounded-2xl my-10 flex items-start gap-4 shadow-sm">
            <AlertTriangle className="text-red-500 shrink-0 mt-1" size={24} />
            <div>
               <h4 className="font-bold text-red-900 mb-2">Aviso Médico Importante</h4>
               <p className="text-red-800 text-sm italic leading-relaxed">
                "Se a sua dermatite apresentar feridas abertas, sangramento ou perda de cabelo localizada, procure um dermatologista. O estresse e a má alimentação são gatilhos biológicos que podem anular o efeito dos shampoos."
               </p>
            </div>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'shampoo-dermatite', name: "Shampoo Anticaspa Profissional", desc: "Fórmula com piritionato de zinco para controle imediato.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Microscope size={32} /> }
      ]
    },
    'implante-capilar-masculino-precos-resultados': {
      title: "Implante Capilar: A Solução Definitiva Contra a Calvície",
      subtitle: "Entenda a diferença entre implante e transplante capilar, os custos envolvidos e a jornada da recuperação.",
      author: "Dr. Estilo (Ph.D)",
      date: "13 de Maio de 2026",
      readTime: "18 min",
      category: "Cabelo",
      image: "/assets/implante-capilar-estetica.webp",
      howToSteps: [
        { name: "Avaliação", text: "Consultar um cirurgião para analisar a área doadora e a extensão da calvície." },
        { name: "Procedimento", text: "Extração de unidades foliculares (FUE) e implante nas áreas receptoras." },
        { name: "Pós-Operatório", text: "Seguir rigorosamente o repouso e a higienização especial nos primeiros 15 dias." },
        { name: "Crescimento", text: "Acompanhar a evolução nos meses 3 a 12 para o resultado final definitivo." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Perder o cabelo é um dos maiores medos do homem moderno. Felizmente, o <strong>Implante Capilar</strong> evoluiu de tal forma que os resultados hoje são praticamente imperceptíveis. Esqueça o 'cabelo de boneca' do passado. Com a técnica FUE (Follicular Unit Extraction), cada fio é colocado respeitando a angulação e densidade natural, garantindo um visual denso e autêntico.
          </p>
          <div className="bg-brand-charcoal text-white p-8 rounded-3xl my-12 border-l-8 border-brand-gold shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">Vale o Investimento?</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              O custo de um transplante capilar de qualidade no Brasil varia entre R$ 15.000 e R$ 35.000. Embora o valor pareça alto, é uma solução de longo prazo que devolve a autoestima e elimina a dependência de loções paliativas pelo resto da vida.
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'pos-transp-kit', name: "Kit Pós-Transplante S.O.S", desc: "Produtos suaves para higienização sem agredir os folículos novos.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Trophy size={32} /> }
      ]
    },
    'ozonioterapia-capilar-beneficios-crescimento': {
      title: "Ozonioterapia Capilar: A Revolução na Saúde dos Fios",
      subtitle: "Descubra como o ozônio medicinal pode acelerar o crescimento e combater a queda capilar de forma natural.",
      author: "Dr. Estilo (Ph.D)",
      date: "13 de Maio de 2026",
      readTime: "10 min",
      category: "Cabelo",
      image: "/assets/ozonioterapia-capilar.webp",
      howToSteps: [
        { name: "Aplicação", text: "O ozônio é aplicado através de vapor ou injeção localizada no couro cabeludo." },
        { name: "Ação Germicida", text: "O gás elimina fungos e bactérias, limpando profundamente os folículos." },
        { name: "Oxigenação", text: "O tratamento aumenta a microcirculação sanguínea, levando mais nutrientes à raiz." },
        { name: "Revitalização", text: "Os fios nascem mais fortes, brilhantes e com crescimento acelerado." }
      ],
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            A <strong>Ozonioterapia Capilar</strong> é a nova aliada de quem busca tratamentos menos invasivos para a queda de cabelo. Ao combinar oxigênio e ozônio, este protocolo médico-estético regenera as células do couro cabeludo e combate o estresse oxidativo, um dos grandes vilões da perda capilar precoce.
          </p>
        </>
      ),
      recommendedProducts: [
        { id: 'ozonio-oil', name: "Óleo Ozonizado Premium", desc: "Potencialize a saúde do couro cabeludo com as propriedades do ozônio.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Droplets size={32} /> }
      ]
    },
    'penteado-infantil-cabelos-cacheados-estilos': {
      title: "Penteado Infantil para Cabelos Cacheados: Estilo para os Pequenos",
      subtitle: "Dicas práticas e divertidas para manter os cachos das crianças definidos, saudáveis e cheios de estilo.",
      author: "Carlos Barbudo",
      date: "13 de Maio de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/penteado-infantil-cacheado.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Cuidar do <strong>cabelo cacheado infantil</strong> deve ser um momento de diversão e reforço da autoestima. Evite prender o cabelo muito apertado ou tentar 'alisar' com escovas. O segredo é usar produtos hipoalergênicos e ensinar o pequeno a amar a textura natural dos fios desde cedo. Um cacho bem cuidado na infância é a base para um estilo forte no futuro.
          </p>
          <ToolBox 
            tools={[
              { name: "Creme de Pentear Infantil Soft", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente de Dentes Largos (Silicone)", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Borrifador de Água Contínua", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Passo a Passo: Rotina de Cachos para Crianças</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Desembaraço Sem Dor",
                description: "Nunca penteie o cabelo cacheado seco. Use um spray desembaraçante ou o próprio condicionador durante o banho. Use um pente de dentes largos e comece sempre pelas pontas, subindo gradualmente até a raiz.",
                tip: "Divida o cabelo em 4 partes para facilitar o processo e evitar que a criança fique impaciente."
              },
              {
                title: "2. Definição 'Dedoliss'",
                description: "Após a lavagem, aplique o creme de pentear e enrole pequenas mechas nos dedos (técnica dedoliss). Isso ajuda a memorizar o formato do cacho e garante uma definição que dura vários dias.",
                tip: "Ensine a criança a fazer o movimento de 'amassar' os cachos de baixo para cima; isso estimula a curvatura natural."
              },
              {
                title: "3. O Segredo do Day After",
                description: "Para não precisar lavar todo dia, use um borrifador com água e um pouco de leave-in. Umedeça levemente os fios pela manhã e amasse novamente para reativar o produto e a definição.",
                tip: "Use uma fronha de cetim no travesseiro da criança para reduzir o frizz durante o sono."
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Transforme o cuidado em brincadeira. Deixe a criança escolher o penteado ou ajudar a passar o creme. Isso cria uma relação positiva com o próprio cabelo e evita o trauma de 'puxões' que muitas crianças cacheadas sofrem."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'kids-curly-shampoo', name: "Shampoo Cachos Kids Soft", desc: "Fórmula suave que não arde os olhos e define os cachinhos.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <HeartPulse size={32} /> }
      ]
    },
    'corte-para-cabelo-cacheado-masculino': {
      title: "Corte para Cabelo Cacheado Masculino: 5 Estilos que Dominam 2026",
      subtitle: "Do volume clássico ao degradê moderno, encontre o corte para cabelo cacheado masculino que mais combina com seu estilo.",
      author: "Carlos Barbudo",
      date: "15 de Maio de 2026",
      readTime: "14 min",
      category: "Cabelo",
      image: "/assets/cabelos-cacheados-guia.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>corte para cabelo cacheado masculino</strong> passou por uma revolução nos últimos anos. Se antes o objetivo era apenas 'domar' o volume, hoje a tendência é abraçar a textura e usar técnicas de degradê (fade) para criar contraste e modernidade. Seja você um adepto do visual curto e prático ou do volume dramático, o corte certo é a base de um grooming de respeito. Carlos Barbudo selecionou as 5 apostas que estão fazendo a cabeça dos homens este ano.
          </p>
          <ToolBox 
            tools={[
              { name: "Pomada Modeladora Efeito Matte", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Pente Garfo para Volume", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Ativador de Cachos Masculino", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Top 5 Cortes para Homens Cacheados</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. High Fade com Cachos Definidos",
                description: "O degradê alto 'limpa' as laterais de forma agressiva e moderna, deixando todo o destaque para os cachos no topo da cabeça. É ideal para rostos redondos, pois ajuda a alongar a silhueta. Exige manutenção quinzenal para manter o fade nítido.",
                tip: "Finalize os cachos do topo com um pouco de gelatina para que eles fiquem bem firmes e não 'desabem' durante o dia.",
                image: "/assets/high-fade.webp"
              },
              {
                title: "2. Taper Fade Ondulado (O Clássico Moderno)",
                description: "Diferente do fade tradicional, o Taper foca apenas na nuca e nas costeiras. É um corte mais discreto e elegante, perfeito para ambientes corporativos que permitem um pouco de volume natural. Valoriza muito a textura de quem tem cachos do tipo 2C e 3A.",
                tip: "Use um leave-in hidratante para que as ondas tenham movimento e brilho saudável.",
                image: "/assets/taper-ondulado.webp"
              },
              {
                title: "3. Burst Fade / Moicano Disfarcado",
                description: "O degradê circular ao redor da orelha cria um visual de moicano muito estiloso para cabelos cacheados e crespos. É um corte com muita personalidade e que destaca a curvatura vertical do fio.",
                tip: "O pente garfo é o seu melhor amigo aqui para dar aquela 'subida' no volume do moicano após a secagem.",
                image: "/assets/burst-fade.webp"
              },
              {
                title: "4. Surfista Moderno (Shag Masculino)",
                description: "Para quem não abre mão do comprimento. O corte é feito em camadas para distribuir o volume por toda a cabeça, evitando o efeito pirâmide. Traz uma vibe relaxada e jovial, ideal para quem tem um estilo de vida mais despojado.",
                tip: "Finalize com spray de sal marinho para um visual 'podrinho' de praia que valoriza a textura.",
                image: "/assets/surfer-shag.webp"
              },
              {
                title: "5. Corte César com Textura Cacheada",
                description: "Uma variação do clássico César, com a franja reta mas mantendo a textura natural dos cachos. É um corte curto, prático e que disfarça muito bem entradas leves na testa, trazendo foco para o centro do rosto.",
                tip: "Use uma pomada de fixação média para manter a franja no lugar sem tirar o movimento natural.",
                image: "/assets/cesar-moderno.webp"
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-8 rounded-3xl my-16 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-4 flex items-center gap-2 text-xl">
              <Star className="text-brand-gold fill-brand-gold" size={28} />
              Dica do Carlos Barbudo
            </h4>
            <p className="text-gray-700 leading-relaxed italic text-lg">
              "O maior erro do homem cacheado é querer usar a mesma rotina de quem tem cabelo liso. Seu cabelo precisa de óleo, não de shampoo forte. Invista em um bom condicionador e nunca, em hipótese alguma, penteie o cabelo seco. O segredo do corte é a finalização."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'matte-pomade', name: "Pomada Viking Matte", desc: "Fixação forte sem brilho para um visual natural.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Zap size={32} /> },
        { id: 'curl-activator', name: "Ativador de Cachos Pro", desc: "Define e hidrata os fios masculinos o dia todo.", link: "https://mercadolivre.com/sec/28LNYBa", icon: <Droplets size={32} /> }
      ]
    },
    'penteado-cabelo-cacheado-infantil': {
      title: "Penteado Cabelo Cacheado Infantil: 5 Ideias Encantadoras",
      subtitle: "Descubra opções de penteado cabelo cacheado infantil para transformar qualquer ocasião em um momento de pura magia.",
      author: "Lara Estilo",
      date: "15 de Maio de 2026",
      readTime: "12 min",
      category: "Cabelo",
      image: "/assets/penteado-infantil-floral.png",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Escolher o <strong>penteado cabelo cacheado infantil</strong> ideal é mais do que apenas estética; é sobre valorizar a beleza natural e a autoestima desde cedo. Para festas, eventos formais ou até para um passeio especial, existem técnicas que destacam a curvatura dos cachinhos sem comprometer a saúde dos fios. Neste guia, Lara Estilo apresenta opções que unem elegância e praticidade para deixar os pequenos radiantes.
          </p>
          <ToolBox 
            tools={[
              { name: "Sérum Iluminador de Cachos", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Escova de Cerdas Macias para Acabamento", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Acessórios com Pérolas e Flores", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Sugestões de Penteados para Momentos Especiais</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Semipreso Floral Encantado",
                description: "Um estilo romântico que nunca sai de moda. Prenda as mechas laterais na parte de trás da cabeça e decore com pequenas flores naturais ou presilhas florais. Deixe o restante dos cachos bem definidos e soltos para um visual de 'fada'.",
                tip: "Use um spray de brilho leve para dar um acabamento luminoso que se destaca sob as luzes da festa.",
                image: "/assets/penteado-infantil-floral.png"
              },
              {
                title: "2. Coque Baixo com Detalhes de Pérolas",
                description: "Para eventos muito formais como casamentos, o coque baixo é a escolha de elite. Organize os cachos de forma frouxa na nuca e intercale pequenos grampos com pérolas para um toque de sofisticação clássica.",
                tip: "Aplique um pouco de balm nas mãos antes de montar o coque para evitar o frizz durante a manipulação.",
                image: "/assets/penteado-infantil-acessorios.png"
              },
              {
                title: "3. Trança Lateral com Cascata de Cachos",
                description: "Faça uma trança embutida apenas em um lado da cabeça, começando na têmpora e indo até atrás da orelha. Deixe o outro lado completamente solto e volumoso. É um penteado moderno que combina atitude e delicadeza.",
                tip: "Prenda o final da trança com um elástico invisível e esconda-o sob uma mecha de cabelo.",
                image: "/assets/penteado-infantil-trancas.png"
              },
              {
                title: "4. Coroa de Cachos com Tiara",
                description: "Use o volume a seu favor! Penteie o cabelo para trás e use uma tiara delicada para segurar os fios, permitindo que os cachos formem uma 'coroa' natural no topo e nas laterais. É simples, rápido e muito elegante.",
                tip: "Escolha tiaras que tenham proteção nas pontas para não incomodar a criança após algumas horas de uso.",
                image: "/assets/penteado-infantil-cacheado.webp"
              },
              {
                title: "5. Rabo de Cavalo com Laço de Cetim",
                description: "Um clássico reinventado. Faça um rabo de cavalo alto e bem volumoso. O detalhe final fica por conta de um laço de cetim luxuoso. É um visual limpo que destaca o rosto da criança e a definição dos fios.",
                tip: "Para um rabo de cavalo mais cheio, use dois elásticos em vez de um para dar mais sustentação à base.",
                image: "/assets/penteado-infantil-abacaxi.png"
              }
            ]}
          />
        </>
      ),
      recommendedProducts: [
        { id: 'styling-serum', name: "Sérum Glow Cachos Kids", desc: "Brilho instantâneo e proteção contra umidade.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Star size={32} /> },
        { id: 'flower-clips', name: "Kit Presilhas Florais Premium", desc: "Acessórios delicados que não puxam o fio.", link: "https://mercadolivre.com/sec/28LNYBa", icon: <HeartPulse size={32} /> }
      ]
    },
    'penteados-infantis-cabelo-cacheado': {
      title: "Penteados Infantis Cabelo Cacheado: 5 Estilos que são Tendência",
      subtitle: "Transforme o visual dos pequenos com penteados infantis para cabelo cacheado que celebram a textura natural com criatividade.",
      author: "Lara Estilo",
      date: "15 de Maio de 2026",
      readTime: "13 min",
      category: "Cabelo",
      image: "/assets/penteado-infantil-cacheado.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Criar <strong>penteados infantis para cabelo cacheado</strong> é uma oportunidade maravilhosa de fortalecer a conexão com as crianças e incentivar o amor pelos seus fios naturais. Esqueça os penteados que esticam ou agridem o couro cabeludo sensível; a tendência atual foca no volume, na cor e em acessórios que transformam o cuidado em uma verdadeira brincadeira. Com a curadoria da <strong>Lara Estilo</strong>, selecionamos 5 looks que são práticos para os pais e amados pelos pequenos.
          </p>
          <ToolBox 
            tools={[
              { name: "Elásticos de Silicone Coloridos (Sem Quebra)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Gelatina Infantil com Cheirinho de Frutas", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Escova Desembaraçante Flexível", link: "https://mercadolivre.com/sec/1exasrj" },
              { name: "Laços e Tiaras de Cetim", link: "https://mercadolivre.com/sec/2Wo6ZWc" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6 text-center">Top 5 Penteados para Arrasar em Qualquer Ocasião</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Coque Abacaxi Estilizado",
                description: "O clássico 'pineapple' ganha um toque de sofisticação com um laço gigante na base. É o penteado perfeito para festas ou para dias quentes, mantendo os cachos protegidos e o rosto livre. O segredo é não apertar muito o elástico para manter o balanço dos fios no topo.",
                tip: "Use uma gelatina leve nas laterais para abaixar os 'baby hairs' sem deixar o cabelo endurecido.",
                image: "/assets/penteado-infantil-abacaxi.png"
              },
              {
                title: "2. Tranças Laterais com Elásticos Coloridos",
                description: "Este visual é pura diversão! Faça pequenas tranças ou torcidinhos nas laterais da cabeça, prendendo cada seção com elásticos de cores diferentes. Deixe o restante do cabelo solto e bem volumoso atrás. É um sucesso garantido na escola.",
                tip: "Umedeça as mechas com um pouco de creme de pentear antes de trançar para garantir que o penteado dure o dia todo.",
                image: "/assets/penteado-infantil-trancas.png"
              },
              {
                title: "3. Maria-Chiquinha Alta com Volume",
                description: "Reinventamos a tradicional maria-chiquinha. Em vez de prender todo o comprimento, prenda apenas a base no topo da cabeça, permitindo que os cachos se abram como pompons gigantes. Traz um ar lúdico e destaca a curvatura natural da criança.",
                tip: "Penteie a raiz suavemente com uma escova de cerdas macias para um acabamento polido na base.",
                image: "/assets/penteado-infantil-chiquinha.png"
              },
              {
                title: "4. Semipreso com Space Buns (Mini Coques)",
                description: "Os 'space buns' são a febre do momento. Prenda apenas a parte frontal do cabelo em dois mini coques no topo da cabeça, deixando a parte de trás solta. É moderno, estiloso e muito confortável para brincar.",
                tip: "Decore os mini coques com glitter capilar biodegradável para eventos especiais ou aniversários.",
                image: "/assets/penteado-infantil-spacebuns.png"
              },
              {
                title: "5. Acessórios de Princesa e Tiaras",
                description: "Às vezes, menos é mais. Um cabelo solto e bem finalizado pode ser transformado com o acessório certo. Tiaras com flores, coroas delicadas ou presilhas de pérolas dão o toque final para casamentos e batizados.",
                tip: "Sempre verifique se o acessório não tem partes pontiagudas que possam machucar o couro cabeludo da criança.",
                image: "/assets/penteado-infantil-acessorios.png"
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-8 rounded-3xl my-16 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-4 flex items-center gap-2 text-xl">
              <Star className="text-brand-gold fill-brand-gold" size={28} />
              Dica da Lara Estilo
            </h4>
            <p className="text-gray-700 leading-relaxed italic text-lg">
              "A regra número um para penteados infantis é o conforto. Se a criança sentir que está puxando ou incomodando, ela terá uma relação negativa com o cuidado capilar. Use sempre produtos 'no tears' (sem lágrimas) e transforme o momento do penteado em uma história ou conversa prazerosa."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'kids-gel', name: "Gelatina Kids Brilho Mágico", desc: "Fixação suave e cheirinho de chiclete.", link: "https://mercadolivre.com/sec/28LNYBa", icon: <Zap size={32} /> },
        { id: 'kids-brush', name: "Escova Mágica Desembaraçante", desc: "Desata nós sem puxar e sem quebrar os cachinhos.", link: "https://mercadolivre.com/sec/1exasrj", icon: <Scissors size={32} /> }
      ]
    },
    'cabelos-loiros-masculinos-guia': {
      title: "Cabelos Loiros Masculinos: O Guia Completo de Estilo",
      subtitle: "Tudo o que você precisa saber sobre o universo dos loiros para homens. Do cuidado básico à escolha da tonalidade ideal.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "15 min",
      category: "Cabelo",
      image: "/assets/cabelos-loiros-guia.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>cabelo loiro masculino</strong> é uma afirmação de estilo. Seja natural ou tingido, o loiro traz luminosidade ao rosto e uma vibração de modernidade. Neste guia, exploramos as bases para quem quer entrar no mundo dos loiros, desde a preparação do fio até os cuidados diários para evitar o ressecamento.
          </p>
          <ToolBox 
            tools={[
              { name: "Shampoo Matizador Violeta", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Máscara de Reconstrução", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Argan Finalizador", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Guia Passo a Passo: Como Cuidar do Loiro</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. A Lavagem Inteligente (Matização)",
                description: "O maior inimigo do loiro é o tom amarelado 'ovo'. Use um shampoo matizador (roxo/violeta) uma vez por semana para neutralizar os reflexos quentes e manter a cor fria e moderna.",
                tip: "Não deixe o shampoo matizador por mais de 5 minutos, ou o cabelo pode ficar com reflexos azulados."
              },
              {
                title: "2. Cronograma de Hidratação",
                description: "A descoloração remove massa do fio. Você precisa repor água e queratina. Alterne entre máscaras de hidratação e nutrição a cada duas lavagens.",
                tip: "Use água morna ou fria. A água quente abre as cutículas e faz a cor desbotar muito mais rápido."
              },
              {
                title: "3. Proteção e Finalização",
                description: "O cabelo loiro é mais sensível ao sol e ao calor do secador. Sempre use um leave-in com proteção térmica e filtro UV antes de sair de casa ou usar ferramentas de calor.",
                tip: "Aplique duas gotas de óleo finalizador nas pontas diariamente para evitar o aspecto 'espigado'."
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Se você vai entrar na piscina, molhe o cabelo com água doce antes. O cabelo loiro é como uma esponja; se já estiver saturado de água limpa, ele absorverá menos cloro, evitando que o seu loiro fique esverdeado."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'blonde-shampoo-gen', name: "Shampoo Manutenção Loiros", desc: "Limpeza suave que preserva a cor e o brilho.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Sparkles size={32} /> }
      ]
    },
    'cabelos-loiros-mel-masculino': {
      title: "Cabelos Loiros Mel: O Tom Quente que é Tendência",
      subtitle: "Descubra por que o loiro mel é a escolha perfeita para um visual iluminado e natural.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "10 min",
      category: "Cabelo",
      image: "/assets/loiro-mel.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Loiro Mel</strong> é a tonalidade ideal para quem busca um visual 'sun-kissed' (beijado pelo sol). É um tom quente que combina perfeitamente com peles bronzeadas e traz um aspecto saudável e vibrante ao cabelo masculino.
          </p>
        </>
      ),
      recommendedProducts: [
        { id: 'honey-oil', name: "Óleo Iluminador Mel", desc: "Destaca os reflexos dourados e hidrata profundamente.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Droplets size={32} /> }
      ]
    },
    'cabelos-loiros-dourados-masculino': {
      title: "Cabelos Loiros Dourados: Brilho e Sofisticação",
      subtitle: "Como conquistar e manter o loiro dourado impecável. O guia para homens que buscam um visual solar.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "10 min",
      category: "Cabelo",
      image: "/assets/loiro-dourado.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Loiro Dourado</strong> exala confiança. É um tom clássico que nunca sai de moda e funciona muito bem em cortes com mais volume no topo, onde a luz pode refletir em diferentes ângulos, criando profundidade e movimento.
          </p>
        </>
      ),
      recommendedProducts: [
        { id: 'gold-mask', name: "Máscara de Brilho Dourado", desc: "Realça o pigmento dourado e sela as cutículas.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Sparkles size={32} /> }
      ]
    },
    'cabelos-loiros-escuros-masculino': {
      title: "Cabelos Loiros Escuros: Elegância Discreta e Natural",
      subtitle: "O loiro escuro é a tonalidade mais versátil para o homem moderno. Saiba como valorizar essa cor.",
      author: "Dr. Estilo (Ph.D)",
      date: "14 de Maio de 2026",
      readTime: "9 min",
      category: "Cabelo",
      image: "/assets/loiro-escuro.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Muitas vezes confundido com o castanho claro, o <strong>Loiro Escuro</strong> é uma cor rica e multidimensional. É a escolha perfeita para quem quer clarear o visual de forma sutil, mantendo uma aparência sóbria e profissional.
          </p>
        </>
      ),
      recommendedProducts: [
        { id: 'dark-blonde-wax', name: "Cera Modeladora Matte", desc: "Define o corte sem tirar a naturalidade do loiro escuro.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Scissors size={32} /> }
      ]
    },
    'cabelos-loiros-curtos-masculino': {
      title: "Cabelos Loiros Curtos: Praticidade com Estilo",
      subtitle: "Os melhores cortes curtos para quem tem cabelo loiro. Veja como destacar a cor no comprimento curto.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "8 min",
      category: "Cabelo",
      image: "/assets/loiro-curto-especifico.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Cortes curtos como o <strong>Buzz Cut</strong> ganham uma vida nova quando platinados ou loiros. A cor clara destaca as linhas do corte e o formato do crânio, criando um visual impactante e de baixa manutenção.
          </p>
        </>
      ),
      recommendedProducts: [
        { id: 'short-blonde-balm', name: "Balm Protetor de Couro", desc: "Hidrata a pele e o fio curto após a descoloração.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <HeartPulse size={32} /> }
      ]
    },
    'cabelos-loiros-cacheados-masculino': {
      title: "Cabelos Loiros Cacheados: Definição e Cor em Harmonia",
      subtitle: "Como cuidar da saúde dos cachos loiros e destacar a textura dos fios.",
      author: "Carlos Barbudo",
      date: "14 de Maio de 2026",
      readTime: "11 min",
      category: "Cabelo",
      image: "/assets/loiro-cacheado-curto.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Cachos loiros são visualmente impressionantes. A variação de tons entre as curvas do fio cria um efeito de luz e sombra natural que valoriza qualquer penteado. O foco aqui deve ser a <strong>hidratação extrema</strong>, pois o cacho e a descoloração tendem a ressecar o fio.
          </p>
        </>
      ),
      recommendedProducts: [
        { id: 'curly-blonde-cream', name: "Ativador de Cachos Loiros", desc: "Define e protege a cor com filtro UV.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Sparkles size={32} /> }
      ]
    },
    'cabelos-ruivos-masculinos-guia': {
      title: "Cabelos Ruivos Masculinos: Atitude e Personalidade",
      subtitle: "Um mergulho no mundo dos ruivos. Conheça as variações de tons e como cuidar da pigmentação.",
      author: "Dr. Estilo (Ph.D)",
      date: "14 de Maio de 2026",
      readTime: "14 min",
      category: "Cabelo",
      image: "/assets/cabelos-ruivos-guia.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            Ser ruivo é carregar uma cor rara e cheia de personalidade. Seja você um ruivo natural ou por escolha, a manutenção do pigmento vermelho é o maior desafio para manter o visual impecável. O ruivo desbota com mais facilidade que outras cores, exigindo uma rotina de cuidados específica para selar a cor dentro do fio.
          </p>
          <ToolBox 
            tools={[
              { name: "Shampoo Sem Sulfato (Color Protect)", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Máscara Acidificante", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Óleo de Brilho de Cranberry", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Passo a Passo: Como Manter o Ruivo Vibrante</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Lavagem com Água Fria",
                description: "O pigmento ruivo é uma molécula grande que sai fácil com água quente. Lave o cabelo sempre com água fria para manter as cutículas seladas e a cor vibrante por mais tempo.",
                tip: "Tente espaçar as lavagens. O uso diário de shampoo é o maior culpado pelo desbotamento do ruivo."
              },
              {
                title: "2. Acidificação e Selagem",
                description: "O cabelo colorido precisa estar com o PH equilibrado. Use um acidificante capilar uma vez por semana após o shampoo para garantir que o fio fique selado e brilhante.",
                tip: "Produtos com extrato de frutas vermelhas ajudam a manter a oxidação longe dos seus fios."
              },
              {
                title: "3. Proteção Solar Obrigatória",
                description: "O sol 'queima' o pigmento ruivo, deixando-o alaranjado sem brilho. Use finalizadores com filtro solar específico para cabelos sempre que for se expor ao ar livre.",
                tip: "Se você for à praia, reaplique o protetor capilar a cada mergulho."
              }
            ]}
          />
          <div className="bg-brand-gold/5 border-2 border-brand-gold/20 p-6 rounded-2xl my-10 shadow-sm border-l-8 border-l-brand-gold">
            <h4 className="font-bold text-brand-dark mb-3 flex items-center gap-2 text-lg">
              <Star className="text-brand-gold fill-brand-gold" size={22} />
              Dica do Mestre
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Para ruivos naturais: o seu cabelo costuma ser mais grosso e seco. Foque em óleos naturais como o de jojoba ou macadâmia. Para ruivos tingidos: o segredo é a reposição de massa proteica."
            </p>
          </div>
        </>
      ),
      recommendedProducts: [
        { id: 'red-shampoo-gen', name: "Shampoo Realce Ruivo", desc: "Evita o desbotamento e mantém o tom vibrante.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <FlaskConical size={32} /> }
      ]
    },
    'cabelos-ruivos-acobreado-escuro-masculino': {
      title: "Ruivo Acobreado Escuro: A Cor da Estação para Homens",
      subtitle: "O guia definitivo para o ruivo acobreado escuro. Saiba como chegar no tom e manter o brilho.",
      author: "Dr. Estilo (Ph.D)",
      date: "14 de Maio de 2026",
      readTime: "13 min",
      category: "Cabelo",
      image: "/assets/ruivo-acobreado-escuro.webp",
      content: (
        <>
          <p className="text-xl font-medium text-brand-charcoal mb-8 leading-relaxed">
            O <strong>Ruivo Acobreado Escuro</strong> é a escolha para quem quer sofisticação. É um tom sóbrio, com reflexos metálicos que aparecem sob a luz, ideal para cortes clássicos e barbas bem desenhadas. Diferente do ruivo laranjinha, o acobreado escuro traz um ar de mistério e elegância que combina muito com o outono/inverno.
          </p>
          <ToolBox 
            tools={[
              { name: "Máscara Tonalizante Cobre", link: "https://mercadolivre.com/sec/2Wo6ZWc" },
              { name: "Shampoo Antioxidante", link: "https://mercadolivre.com/sec/28LNYBa" },
              { name: "Leave-in Hidratante com Filtro UV", link: "https://mercadolivre.com/sec/1exasrj" }
            ]}
          />
          <h2 className="text-3xl font-serif font-bold text-brand-dark mt-12 mb-6">Passo a Passo: Como Manter o Tom Acobreado</h2>
          <TutorialSteps 
            steps={[
              {
                title: "1. Higienização de Baixo Impacto",
                description: "O cobre escuro desbota para um marrom sem vida se lavado incorretamente. Use shampoos com PH baixo e evite esfregar o comprimento do fio. Foque apenas na raiz.",
                tip: "Lave o cabelo no máximo 3 vezes por semana para preservar o pigmento profundo."
              },
              {
                title: "2. Banho de Brilho Mensal",
                description: "A cada 30 dias, use uma máscara tonalizante acobreada. Isso repõe o reflexo metálico que se perde com as lavagens, sem precisar recorrer à tinta com amônia novamente.",
                tip: "Misture a máscara tonalizante com um pouco de creme branco para um resultado mais natural e sutil."
              },
              {
                title: "3. Selagem de Brilho",
                description: "O segredo do acobreado é o reflexo da luz. Use óleos leves de finalização que contenham vitamina E para proteger contra a oxidação causada pela poluição e sol.",
                tip: "Finalize sempre com um jato de ar frio do secador para selar as cutículas e dar o brilho máximo."
              }
            ]}
          />
        </>
      ),
      recommendedProducts: [
        { id: 'copper-mask-dark', name: "Máscara Tonalizante Cobre Escuro", desc: "Repõe o pigmento e garante brilho metálico.", link: "https://mercadolivre.com/sec/2Wo6ZWc", icon: <Droplets size={32} /> }
      ]
    }
  };
  const article = slug && articlesData[slug] ? articlesData[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-light flex flex-col items-center justify-center p-4">
        <AlertCircle size={48} className="text-brand-gold mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-brand-dark uppercase tracking-widest">Artigo não encontrado</h1>
        <p className="text-gray-500 mb-8 text-center max-w-sm">O slug "{slug}" não corresponde a nenhum post em nossa base. <br /> Por favor, retorne ao blog para ver as postagens oficiais.</p>
        <button onClick={() => navigate('/blog')} className="bg-brand-dark text-white px-10 py-4 font-black uppercase tracking-[0.2em] text-[10px] rounded hover:bg-brand-gold hover:text-brand-dark transition-all shadow-xl">Voltar ao Blog</button>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen font-sans selection:bg-brand-gold selection:text-brand-dark">
      <SEO
        title={`${article.title} | Cavanhaque`}
        description={article.subtitle}
        keywords={`${article.category}, barba, grooming, ${article.title}`}
        image={article.image}
        article={true}
        author={article.author}
        publishedTime={article.date}
        canonicalUrl={`https://cavanhaque.com/blog/${slug}`}
        howToSteps={article.howToSteps}
        breadcrumbs={[
          { name: 'Home', url: 'https://cavanhaque.com/' },
          { name: 'Blog', url: 'https://cavanhaque.com/blog' },
          { name: article.category, url: `https://cavanhaque.com/blog?category=${article.category}` },
          { name: article.title, url: `https://cavanhaque.com/blog/${slug}` }
        ]}
      />
      <header className="bg-brand-dark pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.webp')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <button onClick={() => navigate('/blog')} className="inline-flex items-center gap-2 text-brand-gold text-[10px] font-black uppercase tracking-widest mb-12 hover:text-white transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" /> Voltar ao Blog
          </button>
          <span className="bg-brand-gold text-brand-dark text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.3em] mb-8 inline-block shadow-xl">{article.category}</span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tighter">{article.title}</h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">{article.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-500 border-t border-white/5 pt-10">
            <span className="flex items-center gap-2 text-white"><User size={14} className="text-brand-gold" /> {article.author}</span>
            <span className="flex items-center gap-2"><Calendar size={14} className="text-brand-gold" /> {article.date}</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-brand-gold" /> {article.readTime}</span>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20 pb-32">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] mb-8 border-8 border-white bg-brand-light/30">
          <OptimizedImage
            src={article.image}
            alt={`Capa: ${article.title}`}
            className={`w-full aspect-video max-h-[70vh] object-contain ${article.imagePosition || 'object-center'}`}
            priority={true}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        {/* TOP DISCLOSURES (GOOGLE POLICY COMPLIANCE) */}
        <div className="max-w-4xl mx-auto px-4 mb-12 space-y-4">
          {/* Affiliate Disclosure */}
          <div className="bg-brand-light/50 border border-brand-gold/10 p-4 rounded-xl flex items-center gap-3 text-[10px] md:text-xs text-gray-500 font-medium">
            <Info size={16} className="text-brand-gold shrink-0" />
            <p>
              <strong>Transparência de Afiliado:</strong> Este guia contém recomendações de produtos selecionados por nossa curadoria. Ao comprar através de nossos links, podemos ganhar uma pequena comissão do marketplace (como Mercado Livre), sem nenhum custo adicional para você. Isso nos ajuda a manter o projeto independente.
            </p>
          </div>

          {/* Medical/YMYL Disclaimer (Only for Science/Health) */}
          {(article.category === 'Ciência' || article.category === 'Saúde') && (
            <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3 text-[10px] md:text-xs text-red-800 font-medium">
              <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
              <p>
                <strong>Aviso de Isenção de Responsabilidade (YMYL):</strong> O conteúdo deste site, incluindo guias sobre Minoxidil e tratamentos capilares, tem caráter estritamente informativo e educacional. Não substituímos o diagnóstico ou aconselhamento de um médico ou dermatologista certificado. Sempre consulte um profissional antes de iniciar tratamentos farmacológicos.
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          <div className="lg:w-2/3">
            <AdUnit type="display" className="mb-8" />
            <div className="prose prose-lg prose-brand text-gray-700 leading-relaxed mb-24 max-w-none">
              {article.content}
            </div>
            <AdUnit type="in-article" />
          </div>
          
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark mb-6 uppercase tracking-wider border-b border-brand-gold pb-2">Publicidade</h3>
              <AdUnit type="sidebar" />
            </div>
            
            <div className="bg-brand-charcoal p-8 rounded-2xl text-white">
              <h3 className="text-xl font-serif font-bold text-brand-gold mb-4">Guia de Estilo</h3>
              <p className="text-gray-400 text-sm mb-6">Receba as melhores dicas de grooming e ofertas exclusivas diretamente no seu e-mail.</p>
              <button onClick={() => navigate('/blog')} className="w-full bg-brand-gold text-brand-dark py-3 rounded-lg font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-colors">Ver Mais Dicas</button>
            </div>

            <div className="sticky top-24">
               <h3 className="text-lg font-bold text-brand-dark mb-6 uppercase tracking-wider border-b border-brand-gold pb-2">Mais Lidos</h3>
               <div className="space-y-4">
                 {relatedArticles.slice(0, 2).map(ra => (
                   <Link to={`/blog/${ra.slug}`} key={ra.id} className="flex gap-4 group">
                     <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                       <img src={ra.imageUrl} alt={ra.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                     </div>
                     <div className="flex flex-col justify-center">
                       <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-gold transition-colors line-clamp-2">{ra.title}</h4>
                       <span className="text-[10px] text-gray-400 uppercase font-bold mt-1">{ra.category}</span>
                     </div>
                   </Link>
                 ))}
               </div>
            </div>
          </aside>
        </div>

        {/* --- GOOGLE ADSENSE E-E-A-T & CONTENT CURATION VALUE BOX --- */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          {/* Author Box */}
          <div className="bg-brand-light border-l-8 border-brand-gold p-8 rounded-r-3xl flex flex-col md:flex-row gap-8 items-center md:items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 rounded-full bg-brand-charcoal flex-shrink-0 flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
              {article.author.includes('Dr.') ? (
                <User size={40} className="text-brand-gold" />
              ) : (
                <UserCheck size={40} className="text-brand-gold" />
              )}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">{article.author}</h3>
              <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-4">Autor & Curador Especialista</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Especialista em grooming e estética masculina, com anos de experiência em análise de produtos para cuidados com a barba e rotinas de pele. Nosso processo editorial envolve a pesquisa aprofundada, curadoria original e testes práticos para levar a informação mais precisa até você.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="flex items-center gap-1 text-xs font-bold text-brand-dark uppercase"><ShieldCheck size={14} className="text-green-500" /> Curadoria Original</span>
              </div>
            </div>
          </div>

          {/* Editorial Disclaimer */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-700 block mb-2 uppercase tracking-wide">Diretrizes Editoriais e Curadoria</strong>
            Este conteúdo é 100% original, criado e revisado pelos nossos especialistas em grooming masculino. A Nossa equipe se dedica a adicionar valor real a cada artigo por meio de pesquisas científicas, experiências empíricas e curadoria rigorosa de métodos e produtos. Não publicamos conteúdo replicado de forma automatizada sem adicionar comentários valiosos e contexto útil para nossos leitores. As informações contidas neste artigo têm caráter informativo e educacional, não substituindo o conselho de um dermatologista certificado, especialmente em tratamentos capilares como o uso de Minoxidil.
          </div>
        </div>

        {/* Artigos Relacionados Section */}
        <div className="max-w-7xl mx-auto mt-24 mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-dark">Recomendado para Você</h2>
            <Link to="/blog" className="text-brand-gold font-bold text-xs uppercase tracking-widest hover:underline">Ver Todo o Blog</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((ra) => (
              <Link to={`/blog/${ra.slug}`} key={ra.id} className="group">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img src={ra.imageUrl} alt={ra.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-[10px] font-black px-2 py-1 uppercase">{ra.category}</div>
                </div>
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-gold transition-colors leading-snug">{ra.title}</h3>
                <p className="text-gray-500 text-xs mt-2 line-clamp-2">{ra.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        <AdUnit type="display" className="max-w-4xl mx-auto mb-16" />

        {article.recommendedProducts && (
          <aside className="max-w-5xl mx-auto mt-24 bg-brand-light p-10 md:p-16 rounded-[40px] border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark text-center mb-16 flex flex-col items-center justify-center gap-4">
              <Sparkles className="text-brand-gold" size={40} />
              Arsenal Recomendado
              <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Curadoria Exclusiva Mercado Livre</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {article.recommendedProducts.map((prod: any) => (
                <div key={prod.id} className="bg-white hover:border-brand-gold border-2 border-transparent transition-all duration-500 p-10 rounded-3xl flex flex-col items-center text-center shadow-sm group">
                  <div className="w-20 h-20 bg-brand-light rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    {prod.icon}
                  </div>
                  <h3 className="font-black text-brand-dark uppercase text-[11px] tracking-[0.2em] mb-4 min-h-[2rem]">{prod.name}</h3>
                  <p className="text-gray-500 text-xs mb-8 leading-relaxed font-medium">{prod.desc}</p>
                  <a href={prod.link} target="_blank" rel="noopener noreferrer" className="mt-auto bg-brand-dark text-white w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:bg-brand-gold hover:text-brand-dark transition-all flex items-center justify-center gap-3 group/btn">
                    Ver Oferta Oficial <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </aside>
        )}
      </section>
    </article>
  );
};

export default ArticleDetailPage;

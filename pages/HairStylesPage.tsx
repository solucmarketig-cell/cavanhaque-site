import React, { useEffect } from 'react';
import { Scissors, User, Info, CheckCircle2, ArrowRight, HelpCircle, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const hairStyles = [
  {
    id: 'high-fade',
    slug: 'high-fade-degrade-alto',
    name: 'High Fade (Degradê Alto)',
    description: 'O corte mais versátil da atualidade. O degradê começa bem no topo das laterais (acima da têmpora), criando um contraste nítido e um visual ultra limpo. Perfeito para quem quer um visual moderno e profissional.',
    howTo: 'COMO PEDIR: "Quero um High Fade com o degradê começando 2 dedos acima da orelha, máquina 0 na base subindo até máquina 2 no topo. Deixar o topo com 5-6cm para pentear." FINALIZAÇÃO: Use pomada à base de água para um visual clássico ou pó texturizador para efeito matte moderno.',
    faceShape: 'Redondo e Oval',
    hairType: 'Todos',
    maintenance: 'Alta (2 semanas)',
    img: '/assets/high-fade.webp',
    alt: 'Corte de cabelo masculino High Fade degradê alto'
  },
  {
    id: 'french-crop',
    slug: 'french-crop-cesar-moderno',
    name: 'French Crop (César Moderno)',
    description: 'Caracterizado por uma franja curta e horizontal com laterais em degradê. É a escolha perfeita para homens com entradas ou testa larga, pois a franja disfarça essas características. O topo é texturizado para dar movimento.',
    howTo: 'COMO PEDIR: "Quero um French Crop com franja reta na altura da testa, laterais em Low Fade e topo texturizado com 3-4cm." FINALIZAÇÃO: Seque a franja para frente com secador, aplique cera matte e finalize com as mãos para criar textura.',
    faceShape: 'Oval e Comprido',
    hairType: 'Liso e Ondulado',
    maintenance: 'Média',
    img: '/assets/french-crop.webp',
    alt: 'Corte de cabelo French Crop masculino com franja'
  },
  {
    id: 'corte-do-jaca',
    slug: 'corte-do-jaca-degrade-brasileiro',
    name: 'Corte do Jaca',
    description: 'O ícone das barbearias brasileiras. Um degradê (fade) extremamente baixo e limpo, geralmente com o "pezinho" muito bem desenhado na navalha. O topo pode variar de 1cm a 5cm dependendo do estilo. Exige manutenção frequente para manter o visual impecável.',
    howTo: 'COMO PEDIR: "Quero um Corte do Jaca com degradê baixíssimo, começando na máquina 0 (ou navalha) e subindo até máquina 1.5. Pezinho desenhado e topo com 2-3cm." MANUTENÇÃO: Retoque semanal nas laterais e pezinho para manter sempre limpo.',
    faceShape: 'Todos',
    hairType: 'Crespo e Liso',
    maintenance: 'Muito Alta (Semanal)',
    img: '/assets/corte-do-jaca.webp',
    alt: 'Corte do Jaca masculino degradê brasileiro'
  },
  {
    id: 'americano',
    slug: 'corte-americano-taper-moderno',
    name: 'Corte Americano (Taper Moderno)',
    description: 'O estilo que dominou 2026. Diferente do fade tradicional, o Taper foca no degradê apenas nas costeletas e na nuca, mantendo o volume natural nas laterais e topo. Resultado: visual mais orgânico e menos "cortado". Ideal para cabelos cacheados e crespos que precisam de volume.',
    howTo: 'COMO PEDIR: "Quero um Taper Americano com degradê suave só na nuca e costeletas, mantendo volume nas laterais. Topo com 8-10cm para modelar." FINALIZAÇÃO: Use creme para cachos ou leave-in para definir textura natural. Evite pomadas pesadas.',
    faceShape: 'Oval e Quadrado',
    hairType: 'Cacheado e Crespo',
    maintenance: 'Média',
    img: '/assets/corte-americano.webp',
    alt: 'Corte Americano masculino Taper Fade'
  },
  {
    id: 'buzz-cut-design',
    slug: 'buzz-cut-design-risca-navalha',
    name: 'Buzz Cut com Risca (Hair Tattoo)',
    description: 'O corte raspado ganha personalidade com desenhos geométricos ou riscas laterais feitas na navalha. Minimalista, mas com um toque artístico agressivo. Perfeito para quem quer praticidade sem perder estilo. Comum em atletas e militares modernos.',
    howTo: 'COMO PEDIR: "Quero um Buzz Cut máquina 1 ou 2 em todo o cabelo, com uma risca lateral feita na navalha (ou desenho geométrico de sua escolha)." MANUTENÇÃO: Refazer o desenho a cada 10-15 dias. O buzz cresce rápido e perde definição.',
    faceShape: 'Diamante e Quadrado',
    hairType: 'Todos',
    maintenance: 'Baixa',
    img: '/assets/buzz-cut.webp',
    alt: 'Buzz cut masculino com risca de navalha'
  },
  {
    id: 'wolf-cut',
    slug: 'wolf-cut-masculino-tendencia',
    name: 'Wolf Cut Masculino',
    description: 'Uma mistura de Mullet com Shaggy. Volume desestruturado e muitas camadas que criam movimento. Ideal para quem busca um visual andrógino e artístico. Popular entre músicos, artistas e influencers. Requer cabelo médio a longo (mínimo 10cm no topo).',
    howTo: 'COMO PEDIR: "Quero um Wolf Cut com muitas camadas no topo e laterais, mantendo comprimento na nuca. Franja longa e desfiada." FINALIZAÇÃO: Spray de sal marinho + secador com difusor para criar textura bagunçada. Evite pentear demais.',
    faceShape: 'Finos e Angulares',
    hairType: 'Ondulado',
    maintenance: 'Baixa (Uso de spray de sal)',
    img: '/assets/wolf-cut.webp',
    alt: 'Wolf cut masculino cabelo ondulado longo'
  },
  {
    id: 'mullet-brasileiro',
    slug: 'asa-delta-mullet-brasileiro',
    name: 'Asa Delta (Mullet Brasileiro)',
    description: 'Sucesso absoluto no interior e agora nas grandes cidades. Laterais batidas (geralmente máquina 2-3) e a parte de trás longa e volumosa, criando o formato de "asa delta". Versão brasileira do Mullet clássico, mais discreta e adaptada ao clima tropical.',
    howTo: 'COMO PEDIR: "Quero um Asa Delta com laterais na máquina 2, topo médio (5-6cm) e nuca longa (10-15cm)." FINALIZAÇÃO: Secar a nuca para trás com escova ou secador. Use pomada leve no topo e deixe a nuca natural.',
    faceShape: 'Redondo e Oval',
    hairType: 'Liso e Ondulado',
    maintenance: 'Média',
    img: '/assets/asa-delta-mullet.webp',
    alt: 'Corte de cabelo masculino Asa Delta Mullet'
  },
  {
    id: 'box-braids',
    slug: 'box-braids-masculina-afro',
    name: 'Box Braids Masculina',
    description: 'Tranças quadradas que oferecem estilo e proteção para fios crespos. Podem ser usadas soltas, presas em coque ou rabo. Duram de 4 a 8 semanas e protegem o cabelo de quebra. Exigen cabelo com no mínimo 8-10cm de comprimento.',
    howTo: 'COMO FAZER: Procure um profissional especializado em tranças afro. O processo leva 4-6 horas. MANUTENÇÃO: Hidratar o couro cabeludo com óleo de coco 2-3x por semana. Dormir com touca de cetim. Refazer a cada 6-8 semanas.',
    faceShape: 'Todos',
    hairType: 'Crespo (Tipo 4)',
    maintenance: 'Mensal',
    img: '/assets/box-braids.webp',
    alt: 'Tranças masculinas Box Braids afro'
  },
  {
    id: 'scumbag-fade',
    slug: 'scumbag-fade-classico-retro',
    name: 'Scumbag Fade',
    description: 'Um clássico do barbeiro old-school. Topo médio (5-7cm) penteado para o lado com uma risca de navalha profunda e degradê total nas laterais. Visual retrô que remete aos anos 50-60, mas com técnicas modernas de fade. Exige finalização com pomada de brilho.',
    howTo: 'COMO PEDIR: "Quero um Scumbag Fade com risca lateral na navalha, topo 6cm penteado para o lado e degradê alto." FINALIZAÇÃO: Pomada à base de água com brilho médio-alto. Pentear para o lado com pente fino.',
    faceShape: 'Quadrado',
    hairType: 'Grosso e Liso',
    maintenance: 'Alta',
    img: '/assets/scumbag-fade.webp',
    alt: 'Scumbag fade corte clássico masculino'
  },
  {
    id: 'platinado-global',
    slug: 'cabelo-platinado-nevou-guia',
    name: 'Cabelo Platinado (Nevou)',
    description: 'A tendência que vira febre todo final de ano no Brasil. O corte (geralmente degradê ou buzz) recebe uma descoloração total até o branco/platinado. ATENÇÃO: Processo agressivo que exige cuidados intensos de hidratação. Não recomendado para cabelos já danificados.',
    howTo: 'COMO FAZER: Procure um colorista profissional. Processo leva 3-5 horas e pode precisar de múltiplas sessões. MANUTENÇÃO: Shampoo roxo 2-3x por semana para evitar amarelamento. Hidratação profunda semanal. Retoque de raiz mensal.',
    faceShape: 'Todos',
    hairType: 'Todos',
    maintenance: 'Muito Alta (Hidratação intensa)',
    img: '/assets/platinado-global.webp',
    alt: 'Cabelo masculino platinado nevou'
  },
  {
    id: 'dreadlocks-curto',
    slug: 'dreadlocks-curtos-taper-fade',
    name: 'Dreadlocks Curtos (Taper)',
    description: 'Dreads curtos no topo (5-10cm) com laterais em degradê. Unifica a ancestralidade com o estilo urbano moderno. Processo de criação leva 6-8 horas. Dreads precisam de manutenção mensal para não desfazer.',
    howTo: 'COMO FAZER: Procure um loctician (profissional de dreads). Método twist ou crochet. MANUTENÇÃO: Retwist mensal na raiz. Lavar com shampoo específico para dreads 1x por semana. Hidratar com óleo de coco.',
    faceShape: 'Oval e Triangular',
    hairType: 'Crespo',
    maintenance: 'Média',
    img: '/assets/dreadlocks-curto.webp',
    alt: 'Dreadlocks masculinos com degradê'
  },
  {
    id: 'social-classico',
    slug: 'corte-social-classico-corporativo',
    name: 'Corte Social Clássico',
    description: 'O "padrão" que nunca morre. Laterais na tesoura ou máquina 3, topo equilibrado com 4-6cm. Transmite seriedade e confiança. Ideal para ambientes corporativos conservadores. Versátil e fácil de manter.',
    howTo: 'COMO PEDIR: "Quero um corte social clássico com laterais na máquina 3, topo 5cm e pente para o lado." FINALIZAÇÃO: Pomada leve ou creme para pentear. Visual limpo e profissional.',
    faceShape: 'Todos',
    hairType: 'Todos',
    maintenance: 'Baixa',
    img: '/assets/social-classico.webp',
    alt: 'Corte social clássico masculino'
  },
  {
    id: 'moicano-disfarcado',
    slug: 'moicano-disfarcado-fade',
    name: 'Moicano Disfarçado',
    description: 'Um clássico moderno. O degradê é feito nas laterais, mas preservando o volume que desce do topo até a nuca. Visual de impacto.',
    howTo: 'COMO PEDIR: "Quero um Moicano Disfarçado com degradê médio nas laterais." FINALIZAÇÃO: Pomada de fixação forte no topo.',
    faceShape: 'Oval e Quadrado',
    hairType: 'Liso e Ondulado',
    maintenance: 'Média',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2025/02/Corte-Moicano-Disfarcado-18.jpg',
    alt: 'Moicano disfarçado degradê masculino'
  },
  {
    id: 'surfer-shag',
    slug: 'surfer-shag-longo-ondulado',
    name: 'Surfer Shag (Longo)',
    description: 'Cabelo médio a longo (15-25cm) com luzes "sun-kissed" e finalização praiana. Movimento e leveza para homens despojados. Corte em camadas para criar volume e textura.',
    howTo: 'COMO PEDIR: "Quero um Shaggy com muitas camadas e textura natural." FINALIZAÇÃO: Spray de sal marinho.',
    faceShape: 'Angular',
    hairType: 'Ondulado',
    maintenance: 'Baixa',
    img: 'https://www.thefashionisto.com/wp-content/uploads/2024/01/Surfer-Curly-Hair.jpg',
    alt: 'Cabelo longo masculino estilo surfista'
  },
  {
    id: 'top-knot',
    slug: 'top-knot-coque-samurai',
    name: 'Top Knot (Samurai)',
    description: 'Laterais raspadas (undercut) com o topo longo preso em um nó/coque. Um visual de impacto e personalidade forte.',
    howTo: 'COMO PEDIR: "Quero undercut nas laterais e manter o topo longo para fazer coque." FINALIZAÇÃO: Pomada forte e elástico.',
    faceShape: 'Oval e Quadrado',
    hairType: 'Liso e Ondulado',
    maintenance: 'Média',
    img: 'https://images.unsplash.com/photo-1512663150964-d8f43c899f76?q=80&w=800&auto=format&fit=crop',
    alt: 'Coque samurai masculino top knot'
  },
  {
    id: 'fringe-fade',
    slug: 'fringe-fade-franja-masculina',
    name: 'Fringe Fade (Franja Caída)',
    description: 'O topo é projetado para frente, criando uma franja que cobre a testa, com as laterais em degradê navalhado.',
    howTo: 'COMO PEDIR: "Quero um Fringe Fade com franja longa e degradê alto." FINALIZAÇÃO: Secar para frente.',
    faceShape: 'Comprido e Testa Larga',
    hairType: 'Liso e Médio',
    maintenance: 'Média',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEictWOogUAxYlSTvlQZOaUBUbbqQGAoYfX9hvd3xsjPY1wie8wfmJPOCCVvawN5QFNoSoe-3CcvMaEUBLuvpYtVRzd6m1zSkWgS9t-I8ULZhv1CSesMU8w6PJEmA0CsDoYuaVoUr18QptDN/s1600/corte-masculino-sidepart-com-franja+%25281%2529.jpg',
    alt: 'Cabelo masculino com franja e degradê'
  },
  {
    id: 'nudred-afro',
    slug: 'afro-nudred-textura-definicao',
    name: 'Afro com Nudred',
    description: 'Fios crespos moldados com a esponja Nudred para criar pequenos "twists" definidos e cheios de textura.',
    howTo: 'COMO FAZER: Usar esponja Nudred em movimentos circulares. FINALIZAÇÃO: Leave-in ativador.',
    faceShape: 'Oval',
    hairType: 'Crespo (4C)',
    maintenance: 'Diária (Finalização)',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2019/04/afro-nudred.jpg',
    alt: 'Cabelo afro masculino finalizado com nudred'
  },
  {
    id: 'side-swept',
    slug: 'side-swept-undercut-estilo',
    name: 'Side Swept Undercut',
    description: 'Laterais desconectadas e o topo longo jogado para um dos lados com volume e movimento natural.',
    howTo: 'COMO PEDIR: "Quero undercut nas laterais e topo longo para jogar para o lado." FINALIZAÇÃO: Pomada matte.',
    faceShape: 'Diamante',
    hairType: 'Liso e Fino',
    maintenance: 'Média',
    img: 'https://www.gatsbyglobal.com/en/technique/undercut-hairstyles-men-classics-hottest-trends/images/img16.jpg',
    alt: 'Undercut masculino jogado para o lado'
  },
  {
    id: 'flat-top-vintage',
    slug: 'flat-top-militar-afro',
    name: 'Flat Top Militar Afro',
    description: 'Topo perfeitamente plano e horizontal, criando uma "mesa" no topo da cabeça. Laterais raspadas.',
    howTo: 'COMO PEDIR: "Quero um Flat Top militar com topo plano." FINALIZAÇÃO: Spray extra forte.',
    faceShape: 'Oval',
    hairType: 'Grosso e Crespo',
    maintenance: 'Muito Alta',
    img: 'https://www.menshairstylestoday.com/wp-content/uploads/2016/09/Flat-Top-Haircut.jpg',
    alt: 'Flat top masculino corte quadrado vintage'
  },
  {
    id: 'disfarcado-navalhado',
    slug: 'burst-fade-moicano-discreto',
    name: 'Burst Fade (Navalhado Local)',
    description: 'Degradê em semicírculo ao redor da orelha. Ideal para moicanos e cortes que preservam o volume na nuca.',
    howTo: 'COMO PEDIR: "Quero um Burst Fade ao redor da orelha." FINALIZAÇÃO: Pomada matte.',
    faceShape: 'Todos',
    hairType: 'Todos',
    maintenance: 'Alta',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2025/02/Corte-Burst-Fade-21.jpg',
    alt: 'Degradê navalhado masculino disfarçado'
  },
  {
    id: 'pompadour-moderno',
    slug: 'pompadour-moderno-fade-volume',
    name: 'Pompadour Moderno',
    description: 'Topo volumoso penteado para trás e para cima, laterais em degradê. Clássico reinventado.',
    howTo: 'COMO PEDIR: "Quero Pompadour com topo longo e degradê alto." FINALIZAÇÃO: Escova e pomada forte.',
    faceShape: 'Oval e Comprido',
    hairType: 'Liso e Grosso',
    maintenance: 'Alta',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2025/02/Corte-de-Cabelo-Masculino-Pompadour-19.jpg',
    alt: 'Pompadour moderno masculino com volume'
  },
  {
    id: 'slicked-back',
    slug: 'slicked-back-undercut-classico',
    name: 'Slicked Back Undercut',
    description: 'Visual "penteado para trás" com laterais raspadas. Elegância de gângster moderno.',
    howTo: 'COMO PEDIR: "Quero Slicked Back com undercut lateral." FINALIZAÇÃO: Pomada de brilho.',
    faceShape: 'Todos',
    hairType: 'Liso',
    maintenance: 'Média',
    img: 'https://www.gatsbyglobal.com/en/hairstyles/slicked-back-undercut/images/main.jpg',
    alt: 'Slicked back undercut masculino'
  },
  {
    id: 'cesar-moderno',
    slug: 'corte-cesar-moderno-franja-curta',
    name: 'César Moderno',
    description: 'Praticidade extrema com franja curta e reta. Ideal para disfarçar entradas.',
    howTo: 'COMO PEDIR: "Quero corte César com franja reta e degradê médio." FINALIZAÇÃO: Pomada matte leve.',
    faceShape: 'Oval',
    hairType: 'Todos',
    maintenance: 'Baixa',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2025/02/Corte-de-Cabelo-Masculino-Cesar-17.jpg',
    alt: 'Corte César moderno'
  },
  {
    id: 'ivy-league',
    slug: 'iv-league-haircut-executivo',
    name: 'Ivy League',
    description: 'O social de elite. Curto, limpo e extremamente versátil para o trabalho.',
    howTo: 'COMO PEDIR: "Quero Ivy League com degradê baixo." FINALIZAÇÃO: Creme leve ou pomada brilho médio.',
    faceShape: 'Quadrado',
    hairType: 'Todos',
    maintenance: 'Baixa',
    img: 'https://www.thetrendspotter.net/wp-content/uploads/2018/02/Ivy-League-Haircut-Men.jpg',
    alt: 'Ivy league haircut executivo'
  },
  {
    id: 'man-bun',
    slug: 'man-bun-undercut-estilo-samurai',
    name: 'Man Bun Undercut',
    description: 'Coque samurai com laterais raspadas. Força e estilo para cabelos longos.',
    howTo: 'COMO PEDIR: "Quero manter o topo longo para coque e raspar as laterais." FINALIZAÇÃO: Prender com elástico na coroa.',
    faceShape: 'Oval',
    hairType: 'Liso e Ondulado',
    maintenance: 'Média',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2025/02/Corte-de-Cabelo-Masculino-Coque-Samurai-ou-Man-Bun-16.jpg',
    alt: 'Man bun undercut samurai'
  },
  {
    id: 'taper-ondulado',
    slug: 'taper-fade-cabelo-ondulado-textura',
    name: 'Taper Ondulado',
    description: 'Volume natural com degradê suave apenas nas bordas. O equilíbrio perfeito.',
    howTo: 'COMO PEDIR: "Quero Taper Fade suave e manter volume no topo." FINALIZAÇÃO: Leave-in.',
    faceShape: 'Todos',
    hairType: 'Ondulado',
    maintenance: 'Baixa',
    img: 'https://www.menshairstyletrends.com/wp-content/uploads/2021/05/Wavy-hair-taper-fade-low-man_puebla.jpg',
    alt: 'Taper ondulado masculino textura natural'
  },
  {
    id: 'bowl-cut',
    slug: 'bowl-cut-repaginado-moderno',
    name: 'Bowl Cut (Tigela Moderno)',
    description: 'O clássico retrô com acabamento em fade. Para quem não tem medo de ousar.',
    howTo: 'COMO PEDIR: "Quero Bowl Cut moderno com degradê alto." FINALIZAÇÃO: Pomada matte.',
    faceShape: 'Finos',
    hairType: 'Liso',
    maintenance: 'Alta',
    img: 'https://www.menshairstyletrends.com/wp-content/uploads/2021/01/Bowl-cut-fade-edwardklipperhands.jpg',
    alt: 'Bowl cut moderno masculino tigela'
  }
];

// Tipos de Importação
import { finishingTips } from '../data/finishingTips';

const HairStylesPage: React.FC = () => {
  const [activeModal, setActiveModal] = React.useState<string | null>(null);
  const [modalContent, setModalContent] = React.useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openTipModal = (id: string) => {
    setActiveModal(id);
    setModalContent(finishingTips[id]);
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeTipModal = () => {
    setActiveModal(null);
    setModalContent(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Cortes de Cabelo Masculino 2026 | Enciclopédia Visual do Fade ao Mullet"
        description="Do Fade ao Mullet, descubra os cortes de cabelo masculino tendência para 2026. Guia completo de visagismo com Americano, Jaca e muito mais."
        keywords="cortes de cabelo masculino, high fade, corte do jaca, mullet masculino, corte americano, buzz cut, cabelo platinado"
        canonicalUrl="https://cavanhaque.com/cabelo"
        breadcrumbs={[
          { name: 'Home', url: 'https://cavanhaque.com/' },
          { name: 'Estilos de Cabelo', url: 'https://cavanhaque.com/cabelo' }
        ]}
      />
      {/* MEGA SEO HEADER */}
      <header className="bg-brand-dark py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-black mb-6 block animate-bounce">
            Tudo sobre Cabelo Masculino
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            Enciclopédia Visual <br /><span className="text-brand-gold italic">Corte de Cabelo</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Descubra os cortes de cabelo masculino mais buscados no Brasil.
            Do <em>Fade</em> ao <em>Corte do Jaca</em>, aprenda como escolher o estilo perfeito para o seu rosto.
          </p>
        </div>
      </header>

      {/* SEO ARTICLE: O GUIA DEFINITIVO */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-8 text-center">Como escolher o corte de cabelo ideal em 2026?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <p>
                O segredo para um <strong>corte de cabelo masculino</strong> de sucesso não está apenas na habilidade do barbeiro, mas no <em>visagismo</em>. Rostos redondos pedem ângulos retos e volume no topo, enquanto rostos quadrados podem abusar de degradês suaves.
              </p>
              <p>
                Nesta enciclopédia, separamos os estilos por categorias: <strong>Cortes Curtos (Buzz e Fade)</strong>, <strong>Médios (Crops)</strong> e <strong>Longos (Shaggy)</strong>, além dos clássicos brasileiros como o <strong>Corte do Jaca</strong>.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <span className="bg-brand-light border border-brand-gold/20 px-4 py-2 rounded-full text-xs font-bold uppercase text-brand-dark">#CabeloMasculino</span>
              <span className="bg-brand-light border border-brand-gold/20 px-4 py-2 rounded-full text-xs font-bold uppercase text-brand-dark">#Tendência2026</span>
              <span className="bg-brand-light border border-brand-gold/20 px-4 py-2 rounded-full text-xs font-bold uppercase text-brand-dark">#Visagismo</span>
              <span className="bg-brand-light border border-brand-gold/20 px-4 py-2 rounded-full text-xs font-bold uppercase text-brand-dark">#CorteDoJaca</span>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {hairStyles.map((style, idx) => (
            <article key={style.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:-translate-y-4 transition-all duration-700 border border-gray-100 flex flex-col h-full">
              <div className="relative h-96 overflow-hidden">
                <OptimizedImage
                  src={style.img}
                  alt={style.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  width={600}
                  height={600}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute top-6 right-6 bg-brand-dark/80 backdrop-blur-md text-brand-gold w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl font-bold border border-brand-gold/30">
                  {idx + 1}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">{style.name}</h3>
                  <div className="flex gap-2">
                    <span className="bg-brand-gold text-brand-dark text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-widest">
                      {style.hairType}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <p className="text-gray-600 mb-10 leading-relaxed text-sm flex-1">
                  {style.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10 pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-brand-light rounded-xl text-brand-gold">
                      <User size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Visagismo</span>
                      <span className="text-xs font-bold text-brand-charcoal">{style.faceShape}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-brand-light rounded-xl text-brand-gold">
                      <Scissors size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Barbearia</span>
                      <span className="text-xs font-bold text-brand-charcoal">{style.maintenance}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    onClick={() => openTipModal(style.id)}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-brand-light text-brand-dark font-black uppercase text-xs tracking-[0.2em] hover:bg-brand-gold transition-all rounded-2xl group/btn transform active:scale-95"
                  >
                    Dicas de Finalização <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    to={`/blog/${style.slug}`}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-brand-charcoal text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-brand-gold hover:text-brand-dark transition-all rounded-2xl flex items-center justify-center gap-2 group/tutorial transform active:scale-95"
                  >
                    Ver Tutorial Completo <Sparkles size={14} className="group-hover/tutorial:scale-125 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL DE FINALIZAÇÃO */}
      {activeModal && modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeTipModal}></div>
          <div className="bg-white text-brand-dark w-full max-w-lg rounded-3xl overflow-hidden relative z-10 shadow-2xl animate-reveal-up">
            <div className="bg-brand-charcoal p-6 flex justify-between items-center text-white">
              <h3 className="font-serif font-bold text-xl flex items-center gap-2">
                <Sparkles className="text-brand-gold" size={20} />
                Protocolo de Finalização
              </h3>
              <button onClick={closeTipModal} className="hover:text-brand-gold transition-colors p-2 text-white">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-brand-light p-3 rounded-xl h-fit text-brand-gold shrink-0">
                    <span className="font-black text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">Preparação</h4>
                    <p className="text-sm font-medium leading-relaxed">{modalContent.preparation}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-brand-light p-3 rounded-xl h-fit text-brand-gold shrink-0">
                    <span className="font-black text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">Produto Ideal</h4>
                    <p className="text-sm font-medium leading-relaxed">{modalContent.product}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-brand-light p-3 rounded-xl h-fit text-brand-gold shrink-0">
                    <span className="font-black text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">Técnica Profissional</h4>
                    <p className="text-sm font-medium leading-relaxed">{modalContent.technique}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button onClick={closeTipModal} className="w-full bg-brand-gold text-brand-dark font-black uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-brand-dark hover:text-white transition-colors text-xs">
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ SECTION */}
      <section className="bg-brand-charcoal py-28 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full blur-3xl -mb-48 -mr-48"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <HelpCircle size={48} className="text-brand-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-400">As dúvidas mais comuns sobre cabelo masculino respondidas por especialistas.</p>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-dark/50 p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Qual o corte de cabelo masculino que está na moda em 2026?</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                As maiores tendências são o <strong>Corte Americano (Taper Fade)</strong>, focado na naturalidade das laterais, e o <strong>Buzz Cut com Design</strong>, para quem busca praticidade. Para cabelos médios, o <strong>Wolf Cut</strong> e o <strong>Modern Mullet</strong> continuam em alta.
              </p>
            </div>

            <div className="bg-brand-dark/50 p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Como fazer o degradê durar mais tempo?</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                A manutenção do degradê (fade) geralmente é feita a cada 15 dias. Para fazê-lo parecer "limpo" por mais tempo, use shampoos detox para evitar resíduos no couro cabeludo e apare o "pezinho" em casa com cuidado, se tiver habilidade.
              </p>
            </div>

            <div className="bg-brand-dark/50 p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Qual o melhor produto para finalizar o cabelo?</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Para um visual clássico (brilho), use <strong>Pomada à base de água</strong>. Para um visual moderno e bagunçado (matte), use <strong>Pó Texturizador</strong> ou <strong>Cera de Efeito Seco</strong>. O spray de sal marinho é excelente para dar volume inicial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HairStylesPage;
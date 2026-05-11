import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight, Scissors, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const styles = [
  // --- Atualizações Solicitadas Anteriormente ---
  {
    id: 'faded',
    name: 'Barba Degradê (Fade)',
    description: 'A tendência #1 das barbearias modernas. As costeletas começam raspadas e o volume aumenta gradualmente até o queixo. Visual ultra limpo e urbano.',
    faceShape: 'Quadrado e Redondo',
    maintenance: 'Muito Alta',
    img: 'https://vitacheckup.com.br/wp-content/uploads/2022/05/Barba-Degrade.jpg',
    alt: 'Barba com corte degradê fade lateral perfeito',
    imagePosition: 'object-top'
  },
  {
    id: 'ducktail',
    name: 'Ducktail (Cauda de Pato)',
    description: 'Uma variação elegante da barba cheia, onde os pelos do queixo são aparados em ponta, lembrando a cauda de um pato. Alonga o rosto e transmite sofisticação.',
    faceShape: 'Redondo e Retangular',
    maintenance: 'Alta',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2019/10/Barba-Ducktail-8.jpg',
    alt: 'Barba estilo Ducktail pontuda no queixo',
    imagePosition: 'object-center'
  },
  {
    id: 'chevron',
    name: 'Bigode Chevron',
    description: 'O bigode grosso e largo que cobre todo o lábio superior, estilo Freddie Mercury. Voltou com força total na cultura pop e moda vintage.',
    faceShape: 'Oval e Quadrado',
    maintenance: 'Média',
    img: 'https://comoterbarba.com/wp-content/uploads/2023/11/Bigode-Chevron.jpg.webp',
    alt: 'Bigode grosso estilo Chevron vintage',
    imagePosition: 'object-top'
  },

  // --- Estilos Clássicos e Populares ---
  {
    id: 'van-dyke',
    name: 'O Van Dyke',
    description: 'Um clássico artístico que separa o bigode do cavanhaque no queixo. Popularizado por pintores do século 17 e astros de Hollywood como Johnny Depp.',
    faceShape: 'Oval e Redondo',
    maintenance: 'Alta',
    img: 'https://estilosmasculinos.com/wp-content/uploads/2024/05/Barba-Van-Dyke-3-1024x700.webp',
    alt: 'Close-up de cavanhaque estilo Van Dyke com bigode separado',
    imagePosition: 'object-top'
  },
  {
    id: 'ancora',
    name: 'Cavanhaque Âncora',
    description: 'Um estilo sofisticado que traça a linha do maxilar. Nesta variação "Full", o volume é mantido alto no queixo e bigode, criando um visual imponente.',
    faceShape: 'Quadrado e Triangular',
    maintenance: 'Média',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2019/10/Barba-Ancora-5.jpg',
    alt: 'Detalhe de barba desenhada estilo âncora',
    imagePosition: 'object-top'
  },
  {
    id: 'lumberjack',
    name: 'Barba Lenhador (Lumberjack)',
    description: 'O símbolo máximo de virilidade. Uma barba cheia, longa e volumosa. Exige paciência para crescer e muita higiene para não parecer desleixo.',
    faceShape: 'Oval e Diamante',
    maintenance: 'Média',
    img: 'https://comoterbarba.com/wp-content/uploads/2023/10/barba-lenhador-classica.webp',
    alt: 'Homem com barba longa e cheia estilo lenhador',
    imagePosition: 'object-center'
  },
  {
    id: 'full-goatee',
    name: 'Cavanhaque Cheio (Real)',
    description: 'O design mais tradicional onde o bigode se conecta à barba do queixo, formando um círculo ao redor da boca. Ideal para esconder falhas.',
    faceShape: 'Diamante e Quadrado',
    maintenance: 'Média',
    img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Homem bonito com rosto em destaque usando cavanhaque cheio e barba desenhada',
    imagePosition: 'object-[center_55%]',
    extraClasses: 'scale-[1.1] group-hover:scale-[1.15]'
  },
  {
    id: 'stubble',
    name: 'Barba Por Fazer (Stubble)',
    description: 'A famosa "barba de 3 dias". Transmite masculinidade rústica mas cuidada. Exige aparador elétrico frequente para não parecer desleixo.',
    faceShape: 'Todos os formatos',
    maintenance: 'Baixa',
    img: 'https://estilosmasculinos.com/wp-content/uploads/2024/05/Barba-Por-Fazer-Stubble-2-1024x700.webp',
    alt: 'Homem com barba rala estilo stubble masculina bem cuidada',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/1iKoWFz',
    affiliateName: 'Combo Shampoo Bomba + Óleo'
  },
  {
    id: 'balbo',
    name: 'Estilo Balbo',
    description: 'Similar ao Âncora, mas com uma base mais larga no queixo e bigode flutuante. Robert Downey Jr. (Tony Stark) imortalizou este estilo.',
    faceShape: 'Queixo estreito',
    maintenance: 'Alta',
    img: 'https://64.media.tumblr.com/087ee35c6cd9275f851d9aeea84c7152/tumblr_pno4ryvII51uiyzn8_500.jpg',
    alt: 'Robert Downey Jr usando barba estilo Balbo',
    imagePosition: 'object-[center_60%]',
    extraClasses: 'scale-[1.25] group-hover:scale-[1.35]'
  },
  {
    id: 'garibaldi',
    name: 'O Garibaldi',
    description: 'Uma barba cheia, larga e arredondada na base. Para quem quer volume máximo mas com aparência natural e levemente aparada.',
    faceShape: 'Oval e Retangular',
    maintenance: 'Média',
    img: 'https://reinodabarba.com.br/wp-content/uploads/2025/05/Barba-Cheia-Tradicional.jpg',
    alt: 'Barba cheia e volumosa estilo Garibaldi em destaque',
    imagePosition: 'object-top'
  },

  // --- NOVOS ESTILOS ADICIONADOS PARA SEO ---
  {
    id: 'viking',
    name: 'Barba Viking',
    description: 'Estilo longo, denso e muitas vezes trançado. Inspirado nos guerreiros nórdicos, transmite força e brutalidade. Requer óleos potentes para hidratação.',
    faceShape: 'Oval e Triangular',
    maintenance: 'Média',
    img: 'https://reinodabarba.com.br/wp-content/uploads/2025/05/Barba-Viking-com-Acessorios.jpg',
    alt: 'Homem com barba viking longa e trançada estilo nórdico',
    imagePosition: 'object-top'
  },
  {
    id: 'spartan',
    name: 'Barba Espartana',
    description: 'Similar à Viking e à Full Beard, mas com as bochechas mais aparadas e o queixo pontudo e anguloso, acentuando a linha do maxilar.',
    faceShape: 'Redondo e Oval',
    maintenance: 'Média/Alta',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2019/09/Barba-Estilo-Espartana-8.jpg',
    alt: 'Barba espartana com maxilar definido e queixo pontudo',
    imagePosition: 'object-top'
  },
  {
    id: 'short-boxed',
    name: 'Short Boxed (Barba Quadrada)',
    description: 'A versão corporativa da barba cheia. Cuidadosamente aparada com linhas retas nas bochechas e pescoço. Ideal para ambiente de trabalho.',
    faceShape: 'Todos os formatos',
    maintenance: 'Alta',
    img: 'https://blog.cuecastore.com.br/wp-content/uploads/2019/07/Barba-quadrada.jpg',
    alt: 'Barba quadrada curta estilo executivo business',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  },
  {
    id: 'extended-goatee',
    name: 'Cavanhaque Estendido',
    description: 'Também chamado de "Hollywoodian". É um cavanhaque que se estende pela linha do maxilar, mas sem as costeletas. Um meio termo elegante.',
    faceShape: 'Quadrado e Oval',
    maintenance: 'Média',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgX6eC8mXxtKAHwy9Gm9bZerEKm3rvepbeIjSiF_rBfwlwiSkRt_EnfAlYRfHdvR8FNZ75mBui_j0uY8d9Zj1eWeONxpWqIgZALoN3aYX13WLFc5eLkK8GZw_6ACYSLwe_FSIj5raFSY9VV/s1600/cavanhaque-estendido-estilos-de-barba-2017+%25282%2529.jpg',
    alt: 'Cavanhaque estendido sem costeletas estilo hollywood',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/1iKoWFz',
    affiliateName: 'Combo Shampoo Bomba + Óleo'
  },
  {
    id: 'mutton-chops',
    name: 'Mutton Chops (Costeletas)',
    description: 'Um estilo ousado e vintage onde as costeletas crescem até encontrar o bigode, mas o queixo fica raspado. Estilo Wolverine.',
    faceShape: 'Redondo e Oval',
    maintenance: 'Alta',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaH2JazOHYXrLPnlblN2JMVDyLiRzbIu2bQxoG7CJbKKYeV1XWMOsNC_xjeGk7-ZBFSH1VNk3Imdw4IsaVPg_qiTSVQQuixZkkOb_SI4XNrfsFjRU5psN5dTsRcMEUSjpnlfExr4gDjJo/s1600/Barba+Mutton+Chops.jpg',
    alt: 'Estilo de barba mutton chops com costeletas largas',
    imagePosition: 'object-[center_75%]',
    affiliateLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  },
  {
    id: 'pencil-moustache',
    name: 'Bigode Lápis (Pencil)',
    description: 'Uma linha fina e elegante logo acima do lábio superior. Ícone do cinema dos anos 40 e 50. Requer precisão cirúrgica no barbear.',
    faceShape: 'Oval e Coração',
    maintenance: 'Diária',
    img: 'https://pbs.twimg.com/media/Ef0pt2RWkAEI0sx.jpg',
    alt: 'Bigode fino estilo lápis vintage',
    imagePosition: 'object-[center_60%]', // Foco ajustado para baixo (boca) para cortar olhos
    extraClasses: 'scale-[2.5] group-hover:scale-[2.7]', // Zoom extremo para detalhe apenas do bigode
    affiliateLink: 'https://mercadolivre.com/sec/1iKoWFz',
    affiliateName: 'Combo Shampoo Bomba + Óleo'
  },
  {
    id: 'soul-patch',
    name: 'A Mosca (Soul Patch)',
    description: 'Um pequeno tufo de pelos logo abaixo do lábio inferior. Minimalista, artístico e fácil de manter. Frequentemente combinado com bigodes.',
    faceShape: 'Todos os formatos',
    maintenance: 'Baixa',
    img: 'https://barbologia.wordpress.com/wp-content/uploads/2014/10/mike-and-his-soul-patch.jpg',
    alt: 'Homem com estilo de barba mosca soul patch',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/1iKoWFz',
    affiliateName: 'Combo Shampoo Bomba + Óleo'
  },
  {
    id: 'verdi',
    name: 'Estilo Verdi',
    description: 'Inspirado em Giuseppe Verdi. Uma barba redonda e cheia, porém curta, com um bigode estilizado e separado da barba.',
    faceShape: 'Triangular e Oval',
    maintenance: 'Alta',
    img: 'https://www.beautymarket.es/peluqueria/fotos/17780_notbmp3grande.jpg',
    alt: 'Barba estilo Verdi com bigode estilizado',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  },
  {
    id: 'french-fork',
    name: 'French Fork (Garfo Francês)',
    description: 'Uma barba cheia que se divide em duas pontas na região do queixo. Um visual muito distinto e original para quem quer se destacar.',
    faceShape: 'Retangular',
    maintenance: 'Média',
    img: 'https://cdn.shopify.com/s/files/1/0368/4342/1740/files/French_Fork_Goatee_Style_480x480.webp?v=1743458216',
    alt: 'Barba French Fork dividida no meio do queixo',
    imagePosition: 'object-center',
    affiliateLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  },
  {
    id: 'chin-strap',
    name: 'Chin Strap (Faixa)',
    description: 'Uma linha fina de pelos que segue a linha do maxilar de uma orelha à outra. Não cobre o bigode. Destaca muito o contorno do rosto.',
    faceShape: 'Oval e Forte Maxilar',
    maintenance: 'Muito Alta',
    img: 'https://fashionistodiaries.com/wp-content/uploads/2022/02/tp-chin-strap-beard.jpg',
    alt: 'Barba fina no contorno do rosto estilo chin strap',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/1iKoWFz',
    affiliateName: 'Combo Shampoo Bomba + Óleo'
  },
  {
    id: 'bandholz',
    name: 'O Estilo Bandholz',
    description: 'Para quem tem paciência. Deixe crescer livremente por meses antes de aparar. Volume máximo e naturalidade. Requer muita limpeza.',
    faceShape: 'Triangular e Diamante',
    maintenance: 'Média (Hidratação)',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2019/09/Barba-Bandholz-2.jpg',
    alt: 'Barba enorme estilo Bandholz hipster',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  },
  {
    id: 'hulihee',
    name: 'Hulihee',
    description: 'O oposto do cavanhaque: barba cheia e costeletas largas, mas sem pelos no queixo. Um estilo vitoriano clássico e excêntrico.',
    faceShape: 'Oval',
    maintenance: 'Alta',
    img: 'https://live.staticflickr.com/2626/3976155491_a2077c0500_z.jpg',
    alt: 'Estilo de barba Hulihee clássico vitoriano',
    imagePosition: 'object-center',
    extraClasses: 'scale-[1.2] group-hover:scale-[1.3]',
    affiliateLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  },
  {
    id: 'old-dutch',
    name: 'Old Dutch (O Holandês)',
    description: 'Estilo rústico e tradicional. Uma barba cheia e quadrada, conectada às costeletas, mas com o lábio superior totalmente raspado (sem bigode).',
    faceShape: 'Oval e Diamante',
    maintenance: 'Alta (Raspar bigode)',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2019/10/Barba-Old-Dutch.jpg',
    alt: 'Estilo Old Dutch barba cheia sem bigode',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  },
  {
    id: 'horseshoe',
    name: 'Bigode Ferradura',
    description: 'Um bigode grosso com extensões verticais longas que descem pelos cantos da boca até o maxilar. O estilo clássico dos "Biker" e do Hulk Hogan.',
    faceShape: 'Quadrado e Redondo',
    maintenance: 'Média',
    img: 'https://blog.newoldman.com.br/wp-content/uploads/2018/10/Tipos-de-bigode-mais-estilosos-6.jpg',
    alt: 'Homem com bigode estilo ferradura horseshoe',
    imagePosition: 'object-top',
    affiliateLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
  }
];

const BeardStylesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-light min-h-screen font-sans">
      <SEO
        title="Enciclopédia da Barba | Estilos e Modelos de Cavanhaque 2026"
        description="Descubra o estilo de cavanhaque ou barba ideal para o formato do seu rosto. Guia visual completo com Fade, Ducktail, Van Dyke e os melhores estilos."
        keywords="estilos de barba, tipos de cavanhaque, barba degrade, barba lenhador, visagismo barba, modelos de barba"
        canonicalUrl="https://cavanhaque.com/estilos"
        breadcrumbs={[
          { name: 'Home', url: 'https://cavanhaque.com/' },
          { name: 'Estilos de Barba', url: 'https://cavanhaque.com/barba' }
        ]}
      />
      {/* SEO Optimized Header */}
      <header className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
            Guia Visual 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Enciclopédia da Barba
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Descubra o estilo de <strong>cavanhaque</strong> ou barba ideal para o formato do seu rosto.
            O guia definitivo para o homem que busca sua melhor versão.
          </p>
        </div>
      </header>

      {/* Intro Content - SEO Rich Text */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-4">
            Como escolher o desenho da barba?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A escolha do estilo não deve ser aleatória. O <strong>visagismo masculino</strong> ensina que a barba é a "maquiagem do homem": ela pode alongar rostos redondos, suavizar mandíbulas quadradas ou esconder imperfeições. Abaixo, listamos os estilos mais buscados e tecnicamente aprovados por barbeiros profissionais.
          </p>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {styles.map((style: any) => (
            <article key={style.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <OptimizedImage
                  src={style.img}
                  alt={style.alt}
                  className={`w-full h-full object-cover ${style.imagePosition || 'object-center'} ${style.extraClasses || 'group-hover:scale-110'} transition-transform duration-700`}
                  width={600}
                  height={400}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                  <h3 className="text-2xl font-serif font-bold text-white">{style.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm h-20 overflow-hidden">
                  {style.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-brand-light rounded-full text-brand-dark">
                      <User size={16} />
                    </div>
                    <div>
                      <span className="block font-bold text-xs text-brand-gold uppercase">Ideal para Rosto</span>
                      <span className="text-brand-charcoal font-medium">{style.faceShape}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="p-2 bg-brand-light rounded-full text-brand-dark">
                      <Scissors size={16} />
                    </div>
                    <div>
                      <span className="block font-bold text-xs text-brand-gold uppercase">Nível de Manutenção</span>
                      <span className="text-brand-charcoal font-medium">{style.maintenance}</span>
                    </div>
                  </div>
                </div>

                {style.affiliateLink ? (
                  <a href={style.affiliateLink} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 border border-brand-dark text-brand-dark font-bold uppercase text-xs tracking-wider hover:bg-brand-dark hover:text-white transition-colors">
                    Produtos para esse estilo
                  </a>
                ) : (
                  <Link to="/" className="block text-center w-full py-3 border border-brand-dark text-brand-dark font-bold uppercase text-xs tracking-wider hover:bg-brand-dark hover:text-white transition-colors">
                    Produtos para esse estilo
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEO Text Block - Bottom of page */}
      <section className="bg-brand-charcoal py-16 text-gray-300 text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-white mb-6 text-center">
            A Importância da Manutenção do Cavanhaque
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Manter um <strong>cavanhaque desenhado</strong> exige mais do que apenas uma lâmina de barbear. A hidratação da pele por baixo dos pelos é crucial para evitar caspa na barba e coceira. O uso de <strong>Óleo para Barba</strong> (preferencialmente com óleos essenciais como sândalo ou cedro) ajuda a alinhar os fios rebeldes.
              </p>
              <p>
                Para estilos como o <em>Van Dyke</em> ou <em>Bigode Imperial</em>, o uso de Cera ou Balm Modelador é indispensável para manter a estrutura ao longo do dia, especialmente em climas tropicais.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand-gold shrink-0" size={18} />
                  <span>Lave a barba diariamente com Shampoo específico (pH neutro).</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand-gold shrink-0" size={18} />
                  <span>Apare as pontas a cada 2 semanas para estimular o crescimento saudável.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand-gold shrink-0" size={18} />
                  <span>Use pente de madeira para evitar a eletricidade estática (frizz).</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand-gold shrink-0" size={18} />
                  <span>Consuma alimentos ricos em Proteína e Biotina.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest hover:text-white transition-colors">
              Ver Kit Completo de Manutenção <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Articles Section */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-brand-dark text-center mb-12">Leia Também</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Minoxidil Funciona? A Verdade Científica", slug: "minoxidil-funciona-verdade", category: "Ciência" },
              { title: "Como Corrigir Falhas na Barba: Guia Completo", slug: "como-corrigir-falhas", category: "Dicas" },
              { title: "Os Melhores Óleos para Barba em 2026", slug: "melhores-oleos-2024", category: "Reviews" }
            ].map((rel, idx) => (
              <Link to={`/blog/${rel.slug}`} key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-3 block">{rel.category}</span>
                <h4 className="font-bold text-brand-dark group-hover:text-brand-gold transition-colors">{rel.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeardStylesPage;
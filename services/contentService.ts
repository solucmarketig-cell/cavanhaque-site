
import { Article, Product, Review } from '../types';

export const fetchArticles = async (): Promise<Article[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'hair-blonde-gen',
          title: 'Cabelos Loiros Masculinos: O Guia Completo de Estilo',
          excerpt: 'Tudo o que você precisa saber sobre o universo dos loiros para homens. Do cuidado básico à escolha da tonalidade ideal.',
          imageUrl: '/assets/cabelos-loiros-guia.png',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'cabelos-loiros-masculinos-guia',
          category: 'Cabelo'
        },
        {
          id: 'hair-blonde-mel',
          title: 'Cabelos Loiros Mel: O Tom Quente que é Tendência',
          excerpt: 'Descubra por que o loiro mel é a escolha perfeita para um visual iluminado e natural. Dicas de manutenção e produtos.',
          imageUrl: '/assets/loiro-mel.png',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'cabelos-loiros-mel-masculino',
          category: 'Cabelo'
        },
        {
          id: 'hair-blonde-dourado',
          title: 'Cabelos Loiros Dourados: Brilho e Sofisticação',
          excerpt: 'Como conquistar e manter o loiro dourado impecável. O guia para homens que buscam um visual solar e marcante.',
          imageUrl: '/assets/loiro-dourado.png',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'cabelos-loiros-dourados-masculino',
          category: 'Cabelo'
        },
        {
          id: 'hair-blonde-escuro',
          title: 'Cabelos Loiros Escuros: Elegância Discreta e Natural',
          excerpt: 'O loiro escuro é a tonalidade mais versátil para o homem moderno. Saiba como valorizar essa cor com o corte certo.',
          imageUrl: '/assets/loiro-escuro.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '14 Mai 2026',
          slug: 'cabelos-loiros-escuros-masculino',
          category: 'Cabelo'
        },
        {
          id: 'hair-blonde-curto',
          title: 'Cabelos Loiros Curtos: Praticidade com Estilo',
          excerpt: 'Os melhores cortes curtos para quem tem cabelo loiro. Do Buzz Cut ao Crew Cut, veja como destacar a cor no comprimento curto.',
          imageUrl: '/assets/loiro-curto-especifico.png',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'cabelos-loiros-curtos-masculino',
          category: 'Cabelo'
        },
        {
          id: 'hair-blonde-cacheado',
          title: 'Cabelos Loiros Cacheados: Definição e Cor em Harmonia',
          excerpt: 'Como cuidar da saúde dos cachos loiros. Técnicas de finalização para destacar a textura e a tonalidade dos fios.',
          imageUrl: '/assets/loiro-cacheado-curto.png',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'cabelos-loiros-cacheados-masculino',
          category: 'Cabelo'
        },
        {
          id: 'hair-red-gen',
          title: 'Cabelos Ruivos Masculinos: Atitude e Personalidade',
          excerpt: 'Um mergulho no mundo dos ruivos. Conheça as variações de tons e como cuidar da pigmentação ruiva.',
          imageUrl: '/assets/cabelos-ruivos-guia.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '14 Mai 2026',
          slug: 'cabelos-ruivos-masculinos-guia',
          category: 'Cabelo'
        },
        {
          id: 'hair-red-acobreado',
          title: 'Ruivo Acobreado Escuro: A Cor da Estação para Homens',
          excerpt: 'O guia definitivo para o ruivo acobreado escuro. Saiba como chegar no tom e manter o brilho metálico por mais tempo.',
          imageUrl: '/assets/ruivo-acobreado-escuro.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '14 Mai 2026',
          slug: 'cabelos-ruivos-acobreado-escuro-masculino',
          category: 'Cabelo'
        },
        {
          id: 'hair-curly-1',
          title: 'Cabelos Cacheados Masculinos: O Guia Definitivo de Cortes e Cuidados',
          excerpt: 'Descubra os melhores cortes para cabelos cacheados masculinos em 2026. Aprenda técnicas de finalização e os produtos essenciais para definição e brilho.',
          imageUrl: '/assets/cabelos-cacheados-guia.png',
          author: 'Carlos Barbudo',
          date: '13 Mai 2026',
          slug: 'cabelos-cacheados-masculinos-guia-cortes',
          category: 'Cabelo'
        },
        {
          id: 'botox-capilar-1',
          title: 'Botox Capilar Masculino: O Segredo para Fios Alinhados e Saudáveis (Sem Formol)',
          excerpt: 'Tudo sobre o botox capilar profissional para homens. Descubra como reduzir o frizz e repor a massa capilar sem o uso de químicas agressivas.',
          imageUrl: '/assets/botox-capilar-v2.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '13 Mai 2026',
          slug: 'botox-capilar-profissional-masculino-sem-formol',
          category: 'Cabelo'
        },
        {
          id: 'dermatite-1',
          title: 'Dermatite Seborreica: Como Acabar com a Caspa e Irritação no Couro Cabeludo',
          excerpt: 'Sofrendo com dermatite seborreica no couro cabeludo? Conheça os melhores shampoos e tratamentos para controlar a descamação e a coceira de vez.',
          imageUrl: '/assets/dermatite-seborreica-v2.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '13 Mai 2026',
          slug: 'dermatite-seborreica-couro-cabeludo-shampoo-tratamento',
          category: 'Cabelo'
        },
        {
          id: 'implante-1',
          title: 'Implante Capilar: A Solução Definitiva Contra a Calvície Masculina',
          excerpt: 'Entenda a diferença entre implante e transplante capilar. Custos, recuperação e o que esperar dos resultados para recuperar sua autoestima.',
          imageUrl: '/assets/implante-capilar-v2.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '13 Mai 2026',
          slug: 'implante-capilar-masculino-precos-resultados',
          category: 'Cabelo'
        },
        {
          id: 'ozonio-1',
          title: 'Ozonioterapia Capilar: A Nova Fronteira do Tratamento para Queda e Saúde dos Fios',
          excerpt: 'Descubra como a ozonioterapia capilar pode acelerar o crescimento, combater a queda e revitalizar profundamente a saúde do seu couro cabeludo.',
          imageUrl: '/assets/ozonioterapia-capilar.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '13 Mai 2026',
          slug: 'ozonioterapia-capilar-beneficios-crescimento',
          category: 'Cabelo'
        },
        {
          id: 'penteado-feminino-cacheado',
          title: 'Penteado Cabelo Cacheado: Guia Completo de Estilo e Definição',
          excerpt: 'Descubra as melhores técnicas de penteado para cabelos cacheados femininos. Aprenda a valorizar seu volume natural com definição impecável.',
          imageUrl: '/assets/penteado-feminino-cacheado.webp',
          author: 'Lara Estilo',
          date: '14 Mai 2026',
          slug: 'penteado-cabelo-cacheado',
          category: 'Cabelo'
        },
        {
          id: 'kids-curly-1',
          title: 'Penteado Infantil para Cabelos Cacheados: Estilo e Praticidade para os Pequenos',
          excerpt: 'Dicas de penteados para crianças com cabelos cacheados. Como manter os cachos definidos e saudáveis de forma simples e divertida.',
          imageUrl: '/assets/penteado-infantil-cacheado.png',
          author: 'Carlos Barbudo',
          date: '13 Mai 2026',
          slug: 'penteado-infantil-cabelos-cacheados-estilos',
          category: 'Cabelo'
        },
        {
          id: 'transp-1',
          title: 'Transplante Capilar: Quanto Custa Realmente em 2026? (Valores e Fatores)',
          excerpt: 'Descubra os valores reais de um transplante capilar hoje. Analisamos os custos das técnicas FUE e FUT e o que você deve considerar antes de investir.',
          imageUrl: '/assets/transplante-capilar-custos.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '12 Mai 2026',
          slug: 'transplante-capilar-valores-custos',
          category: 'Cabelo'
        },
        {
          id: 'transp-2',
          title: 'Transplante Capilar Antes e Depois: A Jornada da Recuperação Real',
          excerpt: 'Veja o que esperar do antes e depois de um transplante capilar. Cronograma completo do crescimento e como garantir o melhor resultado final.',
          imageUrl: '/assets/transplante-capilar-antes-depois.webp',
          author: 'Carlos Barbudo',
          date: '12 Mai 2026',
          slug: 'transplante-capilar-antes-e-depois-resultados',
          category: 'Cabelo'
        },
        {
          id: 'minox-1',
          title: 'Minoxidil Funciona? A Verdade Científica sobre o Crescimento de Barba',
          excerpt: 'Um mergulho na ciência por trás do Minoxidil. O que o seu folículo realmente sente e como ter resultados reais baseados em curadoria técnica do Cavanhaque.',
          imageUrl: '/assets/minoxidil-science.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '10 Mar 2026',
          slug: 'minoxidil-funciona-verdade',
          category: 'Ciência'
        },
        {
          id: 'beard-1',
          title: 'Barba Degradê (Fade): O Manual do Visual Ultra Limpo',
          excerpt: 'Aprenda a dominar a tendência #1 das barbearias. Como criar a transição perfeita das costeletas ao queixo em casa.',
          imageUrl: '/assets/barba-degrade-fade.webp',
          author: 'Carlos Barbudo',
          date: '11 Mai 2026',
          slug: 'barba-degrade-fade',
          category: 'Barba'
        },
        {
          id: 'beard-2',
          title: 'Ducktail (Cauda de Pato): Sofisticação e Geometria',
          excerpt: 'O guia completo para esculpir a barba que alonga o rosto e transmite autoridade. O equilíbrio entre o rústico e o polido.',
          imageUrl: '/assets/barba-ducktail.webp',
          author: 'Carlos Barbudo',
          date: '11 Mai 2026',
          slug: 'barba-ducktail-cauda-de-pato',
          category: 'Barba'
        },
        {
          id: 'beard-3',
          title: 'Bigode Chevron: O Retorno do Clássico Atemporal',
          excerpt: 'Aprenda a cultivar e manter o bigode grosso que domina o lábio superior. O visual de Tom Selleck e Freddie Mercury.',
          imageUrl: '/assets/bigode-chevron.webp',
          author: 'Carlos Barbudo',
          date: '11 Mai 2026',
          slug: 'bigode-chevron-vintage',
          category: 'Barba'
        },
        {
          id: 'beard-4',
          title: 'Van Dyke: O Estilo Artístico que Atravessa Séculos',
          excerpt: 'Descubra como combinar o bigode e o cavanhaque desconectados para um visual criativo, sofisticado e cheio de personalidade.',
          imageUrl: '/assets/barba-van-dyke.webp',
          author: 'Carlos Barbudo',
          date: '11 Mai 2026',
          slug: 'barba-van-dyke-classica',
          category: 'Barba'
        },
        {
          id: 'beard-old-dutch',
          title: "Old Dutch: O Guia do Estilo 'Holandês' Tradicional",
          excerpt: 'Descubra como dominar a barba rústica que dispensa o bigode para um visual de autoridade.',
          imageUrl: '/assets/barba-espartana.webp',
          author: 'Carlos Barbudo',
          date: '20 Jun 2026',
          slug: 'barba-old-dutch-holandes',
          category: 'Barba'
        },
        {
          id: 'beard-5',
          title: 'Cavanhaque Âncora: O Guia do Design de Alta Precisão',
          excerpt: 'Aprenda a traçar as linhas que definem o maxilar e criam um visual imponente. O favorito de quem busca um rosto angular.',
          imageUrl: '/assets/cavanhaque-ancora.webp',
          author: 'Carlos Barbudo',
          date: '11 Mai 2026',
          slug: 'cavanhaque-ancora-imponente',
          category: 'Barba'
        },
        {
          id: 'beard-6',
          title: 'Barba Lenhador (Viking): O Guia do Volume Máximo',
          excerpt: 'Como cultivar e manter uma barba longa, densa e saudável sem perder a elegância. O estilo rústico definitivo.',
          imageUrl: '/assets/barba-lenhador.webp',
          author: 'Carlos Barbudo',
          date: '12 Mai 2026',
          slug: 'barba-lenhador-viking-estilo',
          category: 'Barba'
        },
        {
          id: 'beard-7',
          title: 'Barba Corporativa: Elegância e Autoridade no Trabalho',
          excerpt: 'O manual para manter uma barba curta e impecável que projeta profissionalismo e confiança.',
          imageUrl: '/assets/barba-corporativa.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '12 Mai 2026',
          slug: 'barba-corporativa-profissional',
          category: 'Barba'
        },
        {
          id: 'beard-8',
          title: 'Stubble (Barba por Fazer): O Charme do Desalinhado Planejado',
          excerpt: 'Aprenda a técnica para manter aquele visual de "3 dias" de forma eterna e simétrica.',
          imageUrl: '/assets/barba-stubble.webp',
          author: 'Carlos Barbudo',
          date: '12 Mai 2026',
          slug: 'barba-stubble-por-fazer',
          category: 'Barba'
        },
        {
          id: 'beard-9',
          title: 'Estilo Balbo: O Visual Ícone de Personalidade',
          excerpt: 'Tudo sobre o estilo que une bigode, cavanhaque e soul patch em um desenho único e desconectado.',
          imageUrl: '/assets/barba-balbo.webp',
          author: 'Carlos Barbudo',
          date: '12 Mai 2026',
          slug: 'barba-balbo-guia',
          category: 'Barba'
        },
        {
          id: 'beard-10',
          title: 'Barba Garibaldi: O Equilíbrio da Barba Cheia e Redonda',
          excerpt: 'Aprenda a modelar a barba robusta e circular que transmite força e naturalidade.',
          imageUrl: '/assets/barba-garibaldi.webp',
          author: 'Carlos Barbudo',
          date: '12 Mai 2026',
          slug: 'barba-garibaldi-circular',
          category: 'Barba'
        },
        {
          id: 'beard-11',
          title: 'Barba Viking: Tranças, História e Autenticidade',
          excerpt: 'Descubra como cultivar uma barba épica e aprender as técnicas de trançado nórdico.',
          imageUrl: '/assets/barba-viking.webp',
          author: 'Carlos Barbudo',
          date: '13 Mai 2026',
          slug: 'barba-viking-trancada',
          category: 'Barba'
        },
        {
          id: 'beard-12',
          title: 'Barba Espartana: O Design que Esculpe o Rosto',
          excerpt: 'Aprenda a criar o ângulo perfeito no queixo enquanto mantém as laterais baixas.',
          imageUrl: '/assets/barba-espartana.webp',
          author: 'Carlos Barbudo',
          date: '13 Mai 2026',
          slug: 'barba-espartana-maxilar',
          category: 'Barba'
        },
        {
          id: 'beard-13',
          title: 'Short Boxed: A Barba Quadrada para o Sucesso',
          excerpt: 'O guia da barba executiva. Saiba como manter o formato retangular que transmite autoridade.',
          imageUrl: '/assets/barba-short-boxed.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '13 Mai 2026',
          slug: 'barba-quadrada-short-boxed',
          category: 'Barba'
        },
        {
          id: 'beard-14',
          title: 'Hollywoodian: O Cavanhaque das Estrelas',
          excerpt: 'Descubra como adotar o estilo que une o cavanhaque à linha do maxilar sem costeletas.',
          imageUrl: '/assets/cavanhaque-estendido.webp',
          author: 'Carlos Barbudo',
          date: '13 Mai 2026',
          slug: 'cavanhaque-estendido-hollywoodian',
          category: 'Barba'
        },
        {
          id: 'beard-15',
          title: 'Barba Verdi: O Equilíbrio entre a Arte e a Robustez',
          excerpt: 'Aprenda a cultivar a barba arredondada com o bigode Handlebar destacado.',
          imageUrl: '/assets/barba-verdi.webp',
          author: 'Carlos Barbudo',
          date: '13 Mai 2026',
          slug: 'barba-verdi-giuseppe',
          category: 'Barba'
        },
        {
          id: 'beard-16',
          title: 'French Fork: O Estilo que Divide Opiniões e Rostos',
          excerpt: 'Aprenda a esculpir e manter a barba que se divide em duas pontas no queixo.',
          imageUrl: '/assets/barba-french-fork.webp',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'barba-french-fork-garfo-frances',
          category: 'Barba'
        },
        {
          id: 'beard-17',
          title: 'Chin Strap: A Linha que Define o Maxilar',
          excerpt: 'Descubra como desenhar a faixa de barba perfeita que acompanha o contorno do rosto.',
          imageUrl: '/assets/barba-chin-strap.webp',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'barba-chin-strap-faixa',
          category: 'Barba'
        },
        {
          id: 'beard-18',
          title: 'Bandholz: O Estilo para os Pacientes e Poderosos',
          excerpt: 'Tudo sobre o estilo que celebra o crescimento natural e o volume extremo.',
          imageUrl: '/assets/barba-viking.webp',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'barba-bandholz-volume-maximo',
          category: 'Barba'
        },
        {
          id: 'beard-19',
          title: 'Hulihee: A Extravagância das Costeletas Conectadas',
          excerpt: 'Descubra o estilo clássico onde as costeletas volumosas se encontram no bigode.',
          imageUrl: '/assets/barba-garibaldi.webp',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'barba-hulihee-estilo-vintage',
          category: 'Barba'
        },
        {
          id: 'beard-20',
          title: 'Barba Imperial: O Visual da Realeza Europeia',
          excerpt: 'Aprenda a combinar o bigode aristocrático com um cavanhaque pontudo e elegante.',
          imageUrl: '/assets/barba-van-dyke.webp',
          author: 'Carlos Barbudo',
          date: '14 Mai 2026',
          slug: 'barba-imperial-realeza',
          category: 'Barba'
        },
        {
          id: 'beard-21',
          title: 'Mutton Chops: O Estilo Feroz das Costeletas de Carneiro',
          excerpt: 'Saiba como cultivar as costeletas mais icônicas da cultura pop e do visual rústico.',
          imageUrl: '/assets/barba-grisalha.webp',
          author: 'Carlos Barbudo',
          date: '15 Mai 2026',
          slug: 'barba-mutton-chops-wolverine',
          category: 'Barba'
        },
        {
          id: 'beard-22',
          title: 'Bigode Lápis: Elegância e Precisão do Cinema Clássico',
          excerpt: 'Aprenda a desenhar a linha fina de sofisticação que marcou a era de ouro de Hollywood.',
          imageUrl: '/assets/bigode-lapis.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '15 Mai 2026',
          slug: 'bigode-lapis-vintage',
          category: 'Barba'
        },
        {
          id: 'beard-23',
          title: 'Soul Patch: O Detalhe que Faz a Diferença',
          excerpt: 'Saiba como usar e manter o pequeno triângulo de pelos abaixo do lábio para um visual artístico.',
          imageUrl: '/assets/soul-patch.webp',
          author: 'Carlos Barbudo',
          date: '15 Mai 2026',
          slug: 'soul-patch-mosca',
          category: 'Barba'
        },
        {
          id: 'beard-24',
          title: 'Bigode Ferradura: O Visual de Impacto e Rebeldia',
          excerpt: 'Aprenda a domar o estilo clássico dos motoqueiros e ícones da luta livre.',
          imageUrl: '/assets/bigode-chevron.webp',
          author: 'Carlos Barbudo',
          date: '15 Mai 2026',
          slug: 'bigode-ferradura-biker',
          category: 'Barba'
        },
        {
          id: 'beard-25',
          title: 'Bigode Guidão (Handlebar): A Arte da Curva Perfeita',
          excerpt: 'Descubra como cultivar e modelar o bigode mais icônico da cultura hipster e clássica.',
          imageUrl: '/assets/bigode-chevron.webp',
          author: 'Carlos Barbudo',
          date: '15 Mai 2026',
          slug: 'bigode-handlebar-guidao',
          category: 'Barba'
        },
        {
          id: 'willian-bigode-article',
          title: 'Willian Bigode: A Anatomia do Visual que Marcou uma Geração no Futebol',
          excerpt: 'Aprenda como o atacante transformou um bigode clássico em uma identidade de marca pessoal. Um guia prático do Cavanhaque sobre o estilo Chevron.',
          imageUrl: '/assets/willian-bigode-premium.webp',
          author: 'Carlos Barbudo',
          date: '09 Mar 2026',
          slug: 'willian-bigode-estilo-e-legado',
          category: 'Cultura'
        },
        {
          id: 'falhas-1',
          title: 'Como Corrigir Falhas na Barba: O Guia Definitivo do Microagulhamento',
          excerpt: 'De técnicas de preenchimento com dermaroller até o uso de tônicos de crescimento. Saiba como preencher buracos na barba de forma definitiva e segura.',
          imageUrl: '/assets/crescimento-acelerado.png',
          author: 'Carlos Barbudo',
          date: '08 Mar 2026',
          slug: 'como-corrigir-falhas',
          category: 'Dicas'
        },
        {
          id: 'cav-definitivo',
          title: 'Cavanhaque Masculino: O Guia Definitivo de Estilos e Tendências para 2026',
          excerpt: 'Domine o estilo que será tendência absoluta em 2026. Aprenda a escolher o desenho ideal para o seu formato de rosto com técnicas de visagismo.',
          imageUrl: '/assets/cavanhaque-guia.webp',
          author: 'Carlos Barbudo',
          date: '08 Mar 2026',
          slug: 'cavanhaque-masculino-guia-completo',
          category: 'Estilo'
        },
        {
          id: 'cinema-goatee',
          title: 'O Cavanhaque no Cinema: Dos Vilões aos Heróis de Estilo',
          excerpt: 'Como Hollywood transformou o cavanhaque de um símbolo de vilania em marca registrada de personagens icônicos como Tony Stark.',
          imageUrl: '/assets/cavanhaque-cinema.webp',
          author: 'Carlos Barbudo',
          date: '08 Mar 2026',
          slug: 'origem-cavanhaque-cinema',
          category: 'Cultura'
        },
        {
          id: 'oleos-2024',
          title: 'Os Melhores Óleos para Barba em 2026: Guia de Hidratação Profunda',
          excerpt: 'Testamos as principais marcas para definir quais óleos realmente hidratam sem pesar. O ranking definitivo para sua barba.',
          imageUrl: '/assets/melhores-oleos-premium.webp',
          author: 'Carlos Barbudo',
          date: '07 Mar 2026',
          slug: 'melhores-oleos-2024',
          category: 'Reviews'
        },
        {
          id: 'carecas-1',
          title: 'Guia de Visagismo para Carecas: Como a Barba Equilibra o Rosto',
          excerpt: 'A regra de ouro do visagismo: quanto menos cabelo no topo, mais importante é o desenho da barba. Aprenda a moldar sua mandíbula.',
          imageUrl: '/assets/visagismo-carecas.webp',
          author: 'Carlos Barbudo',
          date: '06 Mar 2026',
          slug: 'visagismo-carecas-barbudos',
          category: 'Estilo'
        },
        {
          id: 'cav-mestre',
          title: 'O Guia Mestre do Cavanhaque: Anatomia de um Estilo Imortal',
          excerpt: 'Descubra por que o cavanhaque é o estilo mais democrático e poderoso da barbearia. Proporções, ângulos e dicas de manutenção.',
          imageUrl: '/assets/guia-mestre.webp',
          author: 'Carlos Barbudo',
          date: '05 Mar 2025',
          slug: 'guia-mestre-cavanhaque',
          category: 'Estilo'
        },
        {
          id: 'bigode-1',
          title: 'O Guia Definitivo do Bigode: Dos Clássicos aos Modernos',
          excerpt: 'Do clássico Chevron ao excêntrico Handlebar, descubra como manter um bigode que impõe respeito e personalidade única.',
          imageUrl: '/assets/guia-bigode.webp',
          author: 'Carlos Barbudo',
          date: '04 Mar 2025',
          slug: 'guia-definitivo-bigode',
          category: 'Estilo'
        },
        {
          id: 'carreira-1',
          title: 'Barba e Carreira: O Impacto do Visual no Ambiente de Trabalho',
          excerpt: 'Estudos de psicologia social mostram como uma barba bem cuidada projeta liderança e competência em ambientes corporativos.',
          imageUrl: '/assets/barba-carreira.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '03 Mar 2026',
          slug: 'barba-carreira-impacto',
          category: 'Cultura'
        },
        {
          id: 'bc-1',
          title: 'Bigode Chinês em Homens: O Guia para Eliminar o Ar de Cansaço',
          excerpt: 'Entenda por que o sulco nasogeniano surge e quais as melhores técnicas de prevenção e tratamento cosmético para homens.',
          imageUrl: '/assets/bigode-chines.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '02 Mar 2025',
          slug: 'bigode-chines-homens-guia',
          category: 'Ciência'
        },
        {
          id: 'caspa-barba',
          title: 'Caspa na Barba? O Guia Definitivo para Curar a Dermatite Seborreica',
          excerpt: 'Descamação, coceira e vermelhidão sob os fios? Descubra as causas reais da caspa na barba e os tratamentos mais eficazes para recuperar a pele do rosto.',
          imageUrl: '/assets/caspa-barba.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '10 Mar 2026',
          slug: 'caspa-na-barba-dermatite-seborreica',
          category: 'Saúde'
        },
        {
          id: 'visagismo-rosto',
          title: 'Visagismo Masculino: Qual o Estilo de Barba Ideal para o Seu Formato de Rosto?',
          excerpt: 'Rosto redondo, quadrado, oval ou triangular? Aprenda a usar a barba a seu favor para criar ângulos, disfarçar imperfeições e harmonizar as proporções.',
          imageUrl: '/assets/visagismo-rostos.webp',
          author: 'Carlos Barbudo',
          date: '10 Mar 2026',
          slug: 'barba-para-cada-formato-de-rosto-visagismo',
          category: 'Estilo'
        },
        {
          id: 'grisalha-1',
          title: 'Barba Grisalha de Respeito: Dicas para Assumir os Fios Brancos com Elegância',
          excerpt: 'O guia completo para homens maduros (ou jovens grisalhos). Descubra como hidratar, evitar o amarelamento e ostentar uma barba branca impecável.',
          imageUrl: '/assets/barba-grisalha.webp',
          author: 'Carlos Barbudo',
          date: '09 Mar 2026',
          slug: 'barba-grisalha-como-cuidar-e-estilizar',
          category: 'Dicas'
        },
        {
          id: 'fue-transplante',
          title: 'Transplante de Barba (FUE): Quanto Custa, Como Funciona e Se Vale a Pena',
          excerpt: 'Tudo o que você precisa saber sobre a cirurgia definitiva para ter barba: da extração fio a fio no couro cabeludo até o resultado final no rosto.',
          imageUrl: '/assets/transplante-barba.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '09 Mar 2026',
          slug: 'transplante-de-barba-fue-vale-a-pena',
          category: 'Ciência'
        },
        {
          id: 'mitos-lamina',
          title: 'Raspar a Barba com Gilete Engrossa os Fios? Desvendando Mitos',
          excerpt: 'A ciência por trás dos mitos capilares mais famosos. Entenda por que a lâmina não muda a grossura do fio e o que realmente funciona para dar volume.',
          imageUrl: '/assets/mitos-crescimento.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '08 Mar 2026',
          slug: 'mitos-crescimento-barba-lamina-engrossa-fios',
          category: 'Dicas'
        },
        {
          id: 'italiana-1',
          title: 'A Barba Italiana: O Segredo do Visual Clássico e Sedutor',
          excerpt: 'Conhecida por suas linhas perfeitas e sombreado inconfundível. Descubra como adotar o estilo dos galãs italianos com precisão e elegância.',
          imageUrl: '/assets/barba-italiana.webp',
          author: 'Carlos Barbudo',
          date: '11 Mar 2026',
          slug: 'barba-italiana-estilo-sedutor',
          category: 'Estilo'
        },
        {
          id: 'negra-1',
          title: 'Barba Negra Intensa: Como Escurecer Fios Claros ou Queimados de Sol',
          excerpt: 'Seus fios estão ruivos, castanhos ou opacos? O guia definitivo para ter uma barba preta, densa e com volume visual sem parecer artificial.',
          imageUrl: '/assets/barba-negra.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '11 Mar 2026',
          slug: 'como-ter-barba-negra-intensa',
          category: 'Estilo'
        },
        {
          id: 'branca-1',
          title: 'Barba Branca como a Neve: Como Evitar o Efeito Amarelado e Frizz',
          excerpt: 'Esqueça o visual "Papai Noel Descuidado". Um homem com barba branca bem cuidada exige protocolo de hidratação intensa e pigmentação correta.',
          imageUrl: '/assets/barba-grisalha.webp',
          author: 'Carlos Barbudo',
          date: '11 Mar 2026',
          slug: 'barba-branca-cuidados-estilo',
          category: 'Dicas'
        },
        {
          id: 'curta-1',
          title: 'Estilos de Barba Curta: Elegância e Praticidade para Homens Modernos',
          excerpt: 'Do Stubble de 3 dias ao Short Boxed Beard. Os melhores cortes para quem não quer perder horas de manutenção mas exige estar alinhado.',
          imageUrl: '/assets/barba-curta.webp',
          author: 'Carlos Barbudo',
          date: '10 Mar 2026',
          slug: 'melhores-estilos-de-barba-curta',
          category: 'Estilo'
        },
        {
          id: 'degrade-1',
          title: 'Barba Degradê (Fade Blend): O Visual Mais Pedido nas Barbearias em 2026',
          excerpt: 'O guia de mestre para criar a transição perfeita entre o cabelo raspado lateralmente e o volume inferior da sua barba. Não erre a máquina.',
          imageUrl: '/assets/barba-degrade.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '10 Mar 2026',
          slug: 'como-fazer-barba-degrade-fade',
          category: 'Tendências'
        },
        {
          id: 'balbo-1',
          title: 'A Barba Balbo: O Visual do Tony Stark que Salva Rostos Redondos',
          excerpt: 'Sem costeletas, ênfase no queixo duplo e bigode flutuante. Por que esse estilo descolado é o melhor amigo de quem tem o maxilar recuado.',
          imageUrl: '/assets/barba-balbo.webp',
          author: 'Carlos Barbudo',
          date: '10 Mar 2026',
          slug: 'barba-balbo-estilo-homem-de-ferro',
          category: 'Estilo'
        },
        {
          id: 'lenhador-1',
          title: 'Barba Lenhador (Lumberjack): Como Deixar o Fio Longo e Resistente',
          excerpt: 'Volume agressivo não significa falta de higiene. Como superar as fases da coceira e moldar uma barba cheia de respeito que não perde a assimetria.',
          imageUrl: '/assets/barba-lenhador.webp',
          author: 'Carlos Barbudo',
          date: '09 Mar 2026',
          slug: 'barba-lenhador-guia-completo',
          category: 'Estilo'
        },
        {
          id: 'estilos-geral-1',
          title: 'Estilo de Barba: As 6 Maiores Tendências que Vão Dominar 2026',
          excerpt: 'Do Classic Chevron ao "Messy Beard". O manual do que está em alta no grooming global e como escolher o estilo ideal para a sua rotina e personalidade.',
          imageUrl: '/assets/visagismo-rostos.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '09 Mar 2026',
          slug: 'estilo-de-barba-tendencias-2026',
          category: 'Tendências'
        },
        {
          id: 'modelos-1',
          title: 'Qual o Modelo de Barba Perfeito para o Seu Ambiente de Trabalho?',
          excerpt: 'Nem toda barba se encaixa no código corporativo. Conheça 5 modelos clássicos, do Bandholz ao Garibaldi, e onde eles se adaptam melhor.',
          imageUrl: '/assets/social-classico.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '08 Mar 2026',
          slug: 'modelos-de-barba-classicos-e-modernos',
          category: 'Cultura'
        },
        {
          id: 'estilos-geral-2',
          title: 'Como Encontrar Seu Próprio Estilo de Barba (Manual Completo)',
          excerpt: 'Cansado de seguir padrões inalcançáveis? Aprenda a analisar a genética dos seus fios, densidade folicular e achar a identidade perfeita para você.',
          imageUrl: '/assets/visagismo-rostos.webp',
          author: 'Carlos Barbudo',
          date: '07 Mar 2026',
          slug: 'como-encontrar-seu-estilo-de-barba',
          category: 'Dicas'
        },
        {
          id: 'cav-simples-1',
          title: 'Aprenda a Fazer um Cavanhaque Simples',
          excerpt: 'Um guia prático e direto ao ponto para quem quer aderir ao cavanhaque clássico sem complicação na hora de aparar.',
          imageUrl: '/assets/cavanhaque-ancora.webp',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'aprenda-fazer-cavanhaque-simples',
          category: 'Dicas'
        },
        {
          id: 'cav-sem-errar',
          title: 'Como fazer o cavanhaque sem errar',
          excerpt: 'Dicas essenciais e técnicas à prova de falhas para criar o desenho perfeito do seu cavanhaque na primeira tentativa.',
          imageUrl: '/assets/visagismo-rostos.webp',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'como-fazer-cavanhaque-sem-errar',
          category: 'Dicas'
        },
        {
          id: 'cav-simples-eficaz',
          title: 'Aprenda a Fazer um Cavanhaque Simples e Eficaz',
          excerpt: 'O equilíbrio perfeito entre estilo e praticidade. Descubra como manter um cavanhaque de presença com o mínimo de esforço diário.',
          imageUrl: '/assets/cuidados-cavanhaque.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '13 Mar 2026',
          slug: 'aprenda-fazer-cavanhaque-simples-eficaz',
          category: 'Estilo'
        },
        {
          id: 'cav-bem-definido',
          title: 'COMO FAZER CAVANHAQUE BEM DEFINIDO',
          excerpt: 'Domine a arte das linhas precisas e contornos nítidos. O segredo dos barbeiros profissionais para um cavanhaque de destaque.',
          imageUrl: '/assets/historia-barba.png',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'como-fazer-cavanhaque-bem-definido',
          category: 'Estilo'
        },
        {
          id: 'cav-bonito',
          title: 'Como ter um cavanhaque bonito?',
          excerpt: 'Da hidratação ao corte ideal. Tudo o que você precisa saber para transformar um simples projeto de barba em um cavanhaque invejável.',
          imageUrl: '/assets/microagulhamento.webp',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'como-ter-um-cavanhaque-bonito',
          category: 'Dicas'
        },
        {
          id: 'cav-masculino-2',
          title: 'Cavanhaque masculino',
          excerpt: 'O estilo que nunca sai de moda. Uma jornada pela versatilidade e o poder do cavanhaque na estética masculina contemporânea.',
          imageUrl: '/assets/barbas-famosas.png',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'cavanhaque-masculino',
          category: 'Cultura'
        },
        {
          id: 'cuidar-cav',
          title: 'Como cuidar do seu cavanhaque',
          excerpt: 'Rotina de cuidados, produtos indispensáveis e dicas de manutenção para manter seu cavanhaque sempre limpo, cheiroso e alinhado.',
          imageUrl: '/assets/aparar-barba-casa.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '13 Mar 2026',
          slug: 'como-cuidar-do-seu-cavanhaque',
          category: 'Saúde'
        },
        {
          id: 'hair-1',
          title: 'High Fade (Degradê Alto): O Guia do Corte Mais Versátil de 2026',
          excerpt: 'Aprenda como dominar o degradê alto, do pedido ao barbeiro à finalização matte em casa. O visual limpo que projeta modernidade.',
          imageUrl: '/assets/high-fade.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'high-fade-degrade-alto',
          category: 'Cabelo'
        },
        {
          id: 'hair-2',
          title: 'French Crop: O Corte César Moderno para Homens com Entradas',
          excerpt: 'Descubra por que o French Crop é a solução definitiva para disfarçar entradas e testa larga com muito estilo e textura.',
          imageUrl: '/assets/french-crop.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'french-crop-cesar-moderno',
          category: 'Cabelo'
        },
        {
          id: 'hair-3',
          title: 'Corte do Jaca: O Ícone do Degradê Brasileiro Passo a Passo',
          excerpt: 'O guia completo do corte que dominou as comunidades e agora é tendência global. Técnica de navalha e manutenção semanal.',
          imageUrl: '/assets/corte-do-jaca.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'corte-do-jaca-degrade-brasileiro',
          category: 'Cabelo'
        },
        {
          id: 'hair-4',
          title: 'Corte Americano (Taper Moderno): Naturalidade e Volume',
          excerpt: 'Diferente do fade total, o Taper foca nos detalhes. Aprenda como manter o volume natural do seu cabelo com este corte orgânico.',
          imageUrl: '/assets/corte-americano.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'corte-americano-taper-moderno',
          category: 'Cabelo'
        },
        {
          id: 'hair-5',
          title: 'Buzz Cut com Risca: Minimalismo e Atitude na Navalha',
          excerpt: 'Como transformar um corte raspado simples em uma obra de arte geométrica com riscas laterais e design de hair tattoo.',
          imageUrl: '/assets/buzz-cut.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'buzz-cut-design-risca-navalha',
          category: 'Cabelo'
        },
        {
          id: 'hair-6',
          title: 'Wolf Cut Masculino: O Visual Artístico e Desestruturado',
          excerpt: 'Uma mistura de Mullet com Shaggy. Aprenda a estilizar o corte mais popular entre músicos e influencers em 2026.',
          imageUrl: '/assets/wolf-cut.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'wolf-cut-masculino-tendencia',
          category: 'Cabelo'
        },
        {
          id: 'hair-7',
          title: 'Asa Delta (Mullet Brasileiro): A Evolução do Clássico Rural',
          excerpt: 'O guia definitivo do Mullet adaptado ao Brasil. Laterais batidas e nuca longa para um visual de impacto e personalidade.',
          imageUrl: '/assets/asa-delta-mullet.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'asa-delta-mullet-brasileiro',
          category: 'Cabelo'
        },
        {
          id: 'hair-8',
          title: 'Box Braids Masculina: Estilo, Proteção e Ancestralidade',
          excerpt: 'Tudo sobre tranças afro masculinas. Do processo de criação à rotina de higienização e manutenção do couro cabeludo.',
          imageUrl: '/assets/box-braids.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '14 Mar 2026',
          slug: 'box-braids-masculina-afro',
          category: 'Cabelo'
        },
        {
          id: 'hair-9',
          title: 'Scumbag Fade: O Clássico Old-School com Risca de Navalha',
          excerpt: 'O visual dos anos 50 reinventado com técnicas modernas de fade. Como manter o penteado lateral impecável com brilho.',
          imageUrl: '/assets/scumbag-fade.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'scumbag-fade-classico-retro',
          category: 'Cabelo'
        },
        {
          id: 'hair-10',
          title: 'Cabelo Platinado (Nevou): O Guia de Sobrevivência Pós-Descoloração',
          excerpt: 'A tendência que vira febre no Brasil. Como platinar o cabelo sem destruir os fios e quais produtos usar para manter o branco absoluto.',
          imageUrl: '/assets/platinado-global.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '15 Mar 2026',
          slug: 'cabelo-platinado-nevou-guia',
          category: 'Cabelo'
        },
        {
          id: 'hair-11',
          title: 'Dreadlocks Curtos com Taper Fade: Ancestralidade e Estilo Urbano',
          excerpt: 'A união perfeita entre o clássico e o moderno. Como iniciar seus dreads e manter o degradê lateral sempre em dia.',
          imageUrl: '/assets/dreadlocks-curto.webp',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'dreadlocks-curtos-taper-fade',
          category: 'Cabelo'
        },
        {
          id: 'hair-12',
          title: 'Corte Social Clássico: O Padrão Ouro para o Ambiente Corporativo',
          excerpt: 'Seriedade e confiança em um corte atemporal. Aprenda a equilibrar o volume lateral para projetar liderança.',
          imageUrl: '/assets/social-classico.webp',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'corte-social-classico-corporativo',
          category: 'Cabelo'
        },
        {
          id: 'hair-13',
          title: 'Moicano Disfarçado: O Degradê que Cria Atitude sem Exageros',
          excerpt: 'Uma crista suave no topo que desce até a nuca. O guia para quem quer ousadia com um toque de sofisticação no fade.',
          imageUrl: '/assets/moicano-disfarcado.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'moicano-disfarcado-fade',
          category: 'Cabelo'
        },
        {
          id: 'hair-14',
          title: 'Surfer Shag: O Guia do Cabelo Longo com Textura Praiana',
          excerpt: 'Movimento, leveza e luzes sun-kissed. Aprenda como finalizar o cabelo longo para um visual despojado e saudável.',
          imageUrl: '/assets/surfer-shag.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'surfer-shag-longo-ondulado',
          category: 'Cabelo'
        },
        {
          id: 'hair-15',
          title: 'Top Knot (Coque Samurai): Como Crescer e Estilizar o Topo',
          excerpt: 'Paciência e estilo. O manual para quem quer adotar o coque samurai com undercut lateral sem perder a masculinidade.',
          imageUrl: '/assets/top-knot.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'top-knot-coque-samurai',
          category: 'Cabelo'
        },
        {
          id: 'hair-16',
          title: 'Fringe Fade: A Franja Masculina que Dominou a Cultura E-Boy',
          excerpt: 'O topo projetado para frente com degradê navalhado. Como estilizar a franja para esconder entradas e criar modernidade.',
          imageUrl: '/assets/fringe-fade.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'fringe-fade-franja-masculina',
          category: 'Cabelo'
        },
        {
          id: 'hair-17',
          title: 'Afro com Nudred: Textura e Definição para Fios Crespos',
          excerpt: 'A técnica da esponja que revolucionou a finalização afro. Como criar twists perfeitos em minutos com o protocolo Nudred.',
          imageUrl: '/assets/nudred-afro.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '15 Mar 2026',
          slug: 'afro-nudred-textura-definicao',
          category: 'Cabelo'
        },
        {
          id: 'hair-18',
          title: 'Side Swept Undercut: Elegância Desconectada e Volume Lateral',
          excerpt: 'O topo longo jogado para o lado com laterais raspadas. Um visual de impacto para homens que não temem o secador.',
          imageUrl: '/assets/side-swept.webp',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'side-swept-undercut-estilo',
          category: 'Cabelo'
        },
        {
          id: 'hair-19',
          title: 'Pompadour Moderno: Volume e Elegância com Fade',
          excerpt: 'O topete icônico de Elvis atualizado para 2026. Como criar volume duradouro e equilibrar com um degradê agressivo.',
          imageUrl: '/assets/pompadour-fade.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'pompadour-moderno-fade-volume',
          category: 'Cabelo'
        },
        {
          id: 'hair-20',
          title: 'Slicked Back Undercut: O Visual "Penteado para Trás"',
          excerpt: 'Clássico dos filmes noir, agora nas ruas. O guia para usar o cabelo totalmente para trás com laterais raspadas.',
          imageUrl: '/assets/slicked-back.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'slicked-back-undercut-classico',
          category: 'Cabelo'
        },
        {
          id: 'hair-21',
          title: 'Corte César Moderno: Praticidade e Franja Curta',
          excerpt: 'Inspirado no imperador, perfeito para o dia a dia. Como o corte César ajuda a disfarçar entradas de forma inteligente.',
          imageUrl: '/assets/cesar-moderno.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'corte-cesar-moderno-franja-curta',
          category: 'Cabelo'
        },
        {
          id: 'hair-22',
          title: 'Ivy League Haircut: O Social de Elite',
          excerpt: 'Um corte limpo, curto e extremamente versátil. O visual preferido de estudantes e executivos de sucesso.',
          imageUrl: '/assets/ivy-league.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'iv-league-haircut-executivo',
          category: 'Cabelo'
        },
        {
          id: 'hair-23',
          title: 'Burst Fade: O Degradê em Semicírculo na Orelha',
          excerpt: 'Um estilo único que destaca as laterais de forma artística. Ideal para moicanos e cortes com volume na nuca.',
          imageUrl: '/assets/burst-fade.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'burst-fade-moicano-discreto',
          category: 'Cabelo'
        },
        {
          id: 'hair-24',
          title: 'Flat Top Militar: A Geometria Perfeita no Cabelo Afro',
          excerpt: 'Linhas retas e topo plano. O guia para manter o Flat Top impecável e com a estrutura sempre firme.',
          imageUrl: '/assets/flat-top-afro.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '16 Mar 2026',
          slug: 'flat-top-militar-afro',
          category: 'Cabelo'
        },
        {
          id: 'hair-25',
          title: 'Man Bun com Undercut: Estilo Samurai Contemporâneo',
          excerpt: 'O coque masculino elevado a um novo nível. Como prender o cabelo longo mantendo as laterais sempre raspadas.',
          imageUrl: '/assets/man-bun.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'man-bun-undercut-estilo-samurai',
          category: 'Cabelo'
        },
        {
          id: 'hair-26',
          title: 'Taper Fade para Cabelos Ondulados: Textura e Controle',
          excerpt: 'Como valorizar as ondas naturais sem perder a limpeza do degradê nas extremidades.',
          imageUrl: '/assets/taper-ondulado.webp',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'taper-fade-cabelo-ondulado-textura',
          category: 'Cabelo'
        },
        {
          id: 'hair-27',
          title: 'Bowl Cut Repaginado: O "Corte de Tigela" em 2026',
          excerpt: 'Esqueça o visual infantil. Aprenda como a textura e o fade transformaram o bowl cut em um estilo avant-garde.',
          imageUrl: '/assets/bowl-cut-moderno.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'bowl-cut-repaginado-moderno',
          category: 'Cabelo'
        }
      ]);
    }, 400);
  });
};

export const fetchProducts = async (): Promise<Product[]> => {
  return [
    {
      id: 'k-dermaroller-aff',
      name: 'Kit Dermaroller Facial Profissional + Tônico de Crescimento',
      price: 89.90,
      originalPrice: 129.90,
      rating: 5,
      reviews: 4250,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_887695-MLA99845460091_112025-F.webp',
      badges: ['MAIS VENDIDO', 'RECOMENDADO'],
      externalLink: 'https://mercadolivre.com/sec/28LNYBa'
    },
    {
      id: 'k-elite-180',
      name: 'Preenchedor De Falhas Fator Viking - Kit 6 Meses (Premium)',
      price: 503.58,
      originalPrice: 719.40,
      rating: 5,
      reviews: 4250,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_753415-MLB92697620363_092025-F.webp',
      badges: ['ULTRA DENSIDADE', 'OFERTA'],
      externalLink: 'https://mercadolivre.com/sec/1exasrj'
    },
    {
      id: 'o1',
      name: 'Óleo para Barba Premium Sândalo Amadeirado',
      price: 78.89,
      originalPrice: 112.71,
      rating: 4.9,
      reviews: 450,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_719213-MLA99338536468_112025-F.webp',
      badges: ['HIDRATAÇÃO EXTREMA'],
      externalLink: 'https://mercadolivre.com/sec/2Wo6ZWc'
    }
  ];
};

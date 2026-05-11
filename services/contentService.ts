
import { Article, Product, Review } from '../types';

export const fetchArticles = async (): Promise<Article[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
          imageUrl: '/assets/microagulhamento.webp',
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
          imageUrl: '/assets/cavanhaque-guia.webp',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'aprenda-fazer-cavanhaque-simples',
          category: 'Dicas'
        },
        {
          id: 'cav-sem-errar',
          title: 'Como fazer o cavanhaque sem errar',
          excerpt: 'Dicas essenciais e técnicas à prova de falhas para criar o desenho perfeito do seu cavanhaque na primeira tentativa.',
          imageUrl: '/assets/cavanhaque-guia.webp',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'como-fazer-cavanhaque-sem-errar',
          category: 'Dicas'
        },
        {
          id: 'cav-simples-eficaz',
          title: 'Aprenda a Fazer um Cavanhaque Simples e Eficaz',
          excerpt: 'O equilíbrio perfeito entre estilo e praticidade. Descubra como manter um cavanhaque de presença com o mínimo de esforço diário.',
          imageUrl: '/assets/cavanhaque-guia.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '13 Mar 2026',
          slug: 'aprenda-fazer-cavanhaque-simples-eficaz',
          category: 'Estilo'
        },
        {
          id: 'cav-bem-definido',
          title: 'COMO FAZER CAVANHAQUE BEM DEFINIDO',
          excerpt: 'Domine a arte das linhas precisas e contornos nítidos. O segredo dos barbeiros profissionais para um cavanhaque de destaque.',
          imageUrl: '/assets/cavanhaque-guia.webp',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'como-fazer-cavanhaque-bem-definido',
          category: 'Estilo'
        },
        {
          id: 'cav-bonito',
          title: 'Como ter um cavanhaque bonito?',
          excerpt: 'Da hidratação ao corte ideal. Tudo o que você precisa saber para transformar um simples projeto de barba em um cavanhaque invejável.',
          imageUrl: '/assets/cavanhaque-guia.webp',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'como-ter-um-cavanhaque-bonito',
          category: 'Dicas'
        },
        {
          id: 'cav-masculino-2',
          title: 'Cavanhaque masculino',
          excerpt: 'O estilo que nunca sai de moda. Uma jornada pela versatilidade e o poder do cavanhaque na estética masculina contemporânea.',
          imageUrl: '/assets/cavanhaque-guia.webp',
          author: 'Carlos Barbudo',
          date: '13 Mar 2026',
          slug: 'cavanhaque-masculino',
          category: 'Cultura'
        },
        {
          id: 'cuidar-cav',
          title: 'Como cuidar do seu cavanhaque',
          excerpt: 'Rotina de cuidados, produtos indispensáveis e dicas de manutenção para manter seu cavanhaque sempre limpo, cheiroso e alinhado.',
          imageUrl: '/assets/cuidados-cavanhaque.webp',
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
          category: 'Estilo'
        },
        {
          id: 'hair-2',
          title: 'French Crop: O Corte César Moderno para Homens com Entradas',
          excerpt: 'Descubra por que o French Crop é a solução definitiva para disfarçar entradas e testa larga com muito estilo e textura.',
          imageUrl: '/assets/french-crop.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'french-crop-cesar-moderno',
          category: 'Dicas'
        },
        {
          id: 'hair-3',
          title: 'Corte do Jaca: O Ícone do Degradê Brasileiro Passo a Passo',
          excerpt: 'O guia completo do corte que dominou as comunidades e agora é tendência global. Técnica de navalha e manutenção semanal.',
          imageUrl: '/assets/corte-do-jaca.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'corte-do-jaca-degrade-brasileiro',
          category: 'Estilo'
        },
        {
          id: 'hair-4',
          title: 'Corte Americano (Taper Moderno): Naturalidade e Volume',
          excerpt: 'Diferente do fade total, o Taper foca nos detalhes. Aprenda como manter o volume natural do seu cabelo com este corte orgânico.',
          imageUrl: '/assets/corte-americano.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'corte-americano-taper-moderno',
          category: 'Tendências'
        },
        {
          id: 'hair-5',
          title: 'Buzz Cut com Risca: Minimalismo e Atitude na Navalha',
          excerpt: 'Como transformar um corte raspado simples em uma obra de arte geométrica com riscas laterais e design de hair tattoo.',
          imageUrl: '/assets/buzz-cut.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'buzz-cut-design-risca-navalha',
          category: 'Estilo'
        },
        {
          id: 'hair-6',
          title: 'Wolf Cut Masculino: O Visual Artístico e Desestruturado',
          excerpt: 'Uma mistura de Mullet com Shaggy. Aprenda a estilizar o corte mais popular entre músicos e influencers em 2026.',
          imageUrl: '/assets/wolf-cut.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'wolf-cut-masculino-tendencia',
          category: 'Cultura'
        },
        {
          id: 'hair-7',
          title: 'Asa Delta (Mullet Brasileiro): A Evolução do Clássico Rural',
          excerpt: 'O guia definitivo do Mullet adaptado ao Brasil. Laterais batidas e nuca longa para um visual de impacto e personalidade.',
          imageUrl: '/assets/asa-delta-mullet.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'asa-delta-mullet-brasileiro',
          category: 'Estilo'
        },
        {
          id: 'hair-8',
          title: 'Box Braids Masculina: Estilo, Proteção e Ancestralidade',
          excerpt: 'Tudo sobre tranças afro masculinas. Do processo de criação à rotina de higienização e manutenção do couro cabeludo.',
          imageUrl: '/assets/box-braids.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '14 Mar 2026',
          slug: 'box-braids-masculina-afro',
          category: 'Cultura'
        },
        {
          id: 'hair-9',
          title: 'Scumbag Fade: O Clássico Old-School com Risca de Navalha',
          excerpt: 'O visual dos anos 50 reinventado com técnicas modernas de fade. Como manter o penteado lateral impecável com brilho.',
          imageUrl: '/assets/scumbag-fade.webp',
          author: 'Carlos Barbudo',
          date: '14 Mar 2026',
          slug: 'scumbag-fade-classico-retro',
          category: 'Estilo'
        },
        {
          id: 'hair-10',
          title: 'Cabelo Platinado (Nevou): O Guia de Sobrevivência Pós-Descoloração',
          excerpt: 'A tendência que vira febre no Brasil. Como platinar o cabelo sem destruir os fios e quais produtos usar para manter o branco absoluto.',
          imageUrl: '/assets/platinado-global.webp',
          author: 'Dr. Estilo (Ph.D)',
          date: '15 Mar 2026',
          slug: 'cabelo-platinado-nevou-guia',
          category: 'Tendências'
        },
        {
          id: 'hair-11',
          title: 'Dreadlocks Curtos com Taper Fade: Ancestralidade e Estilo Urbano',
          excerpt: 'A união perfeita entre o clássico e o moderno. Como iniciar seus dreads e manter o degradê lateral sempre em dia.',
          imageUrl: '/assets/dreadlocks-curto.webp',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'dreadlocks-curtos-taper-fade',
          category: 'Cultura'
        },
        {
          id: 'hair-12',
          title: 'Corte Social Clássico: O Padrão Ouro para o Ambiente Corporativo',
          excerpt: 'Seriedade e confiança em um corte atemporal. Aprenda a equilibrar o volume lateral para projetar liderança.',
          imageUrl: '/assets/social-classico.webp',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'corte-social-classico-corporativo',
          category: 'Estilo'
        },
        {
          id: 'hair-13',
          title: 'Moicano Disfarçado: O Degradê que Cria Atitude sem Exageros',
          excerpt: 'Uma crista suave no topo que desce até a nuca. O guia para quem quer ousadia com um toque de sofisticação no fade.',
          imageUrl: '/assets/moicano-disfarcado.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'moicano-disfarcado-fade',
          category: 'Estilo'
        },
        {
          id: 'hair-14',
          title: 'Surfer Shag: O Guia do Cabelo Longo com Textura Praiana',
          excerpt: 'Movimento, leveza e luzes sun-kissed. Aprenda como finalizar o cabelo longo para um visual despojado e saudável.',
          imageUrl: '/assets/surfer-shag.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'surfer-shag-longo-ondulado',
          category: 'Dicas'
        },
        {
          id: 'hair-15',
          title: 'Top Knot (Coque Samurai): Como Crescer e Estilizar o Topo',
          excerpt: 'Paciência e estilo. O manual para quem quer adotar o coque samurai com undercut lateral sem perder a masculinidade.',
          imageUrl: '/assets/top-knot.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'top-knot-coque-samurai',
          category: 'Estilo'
        },
        {
          id: 'hair-16',
          title: 'Fringe Fade: A Franja Masculina que Dominou a Cultura E-Boy',
          excerpt: 'O topo projetado para frente com degradê navalhado. Como estilizar a franja para esconder entradas e criar modernidade.',
          imageUrl: '/assets/fringe-fade.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'fringe-fade-franja-masculina',
          category: 'Tendências'
        },
        {
          id: 'hair-17',
          title: 'Afro com Nudred: Textura e Definição para Fios Crespos',
          excerpt: 'A técnica da esponja que revolucionou a finalização afro. Como criar twists perfeitos em minutos com o protocolo Nudred.',
          imageUrl: '/assets/nudred-afro.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '15 Mar 2026',
          slug: 'afro-nudred-textura-definicao',
          category: 'Dicas'
        },
        {
          id: 'hair-18',
          title: 'Side Swept Undercut: Elegância Desconectada e Volume Lateral',
          excerpt: 'O topo longo jogado para o lado com laterais raspadas. Um visual de impacto para homens que não temem o secador.',
          imageUrl: '/assets/side-swept.png',
          author: 'Carlos Barbudo',
          date: '15 Mar 2026',
          slug: 'side-swept-undercut-estilo',
          category: 'Estilo'
        },
        {
          id: 'hair-19',
          title: 'Pompadour Moderno: Volume e Elegância com Fade',
          excerpt: 'O topete icônico de Elvis atualizado para 2026. Como criar volume duradouro e equilibrar com um degradê agressivo.',
          imageUrl: '/assets/pompadour-fade.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'pompadour-moderno-fade-volume',
          category: 'Estilo'
        },
        {
          id: 'hair-20',
          title: 'Slicked Back Undercut: O Visual "Penteado para Trás"',
          excerpt: 'Clássico dos filmes noir, agora nas ruas. O guia para usar o cabelo totalmente para trás com laterais raspadas.',
          imageUrl: '/assets/slicked-back.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'slicked-back-undercut-classico',
          category: 'Estilo'
        },
        {
          id: 'hair-21',
          title: 'Corte César Moderno: Praticidade e Franja Curta',
          excerpt: 'Inspirado no imperador, perfeito para o dia a dia. Como o corte César ajuda a disfarçar entradas de forma inteligente.',
          imageUrl: '/assets/cesar-moderno.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'corte-cesar-moderno-franja-curta',
          category: 'Dicas'
        },
        {
          id: 'hair-22',
          title: 'Ivy League Haircut: O Social de Elite',
          excerpt: 'Um corte limpo, curto e extremamente versátil. O visual preferido de estudantes e executivos de sucesso.',
          imageUrl: '/assets/ivy-league.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'iv-league-haircut-executivo',
          category: 'Estilo'
        },
        {
          id: 'hair-23',
          title: 'Burst Fade: O Degradê em Semicírculo na Orelha',
          excerpt: 'Um estilo único que destaca as laterais de forma artística. Ideal para moicanos e cortes com volume na nuca.',
          imageUrl: '/assets/burst-fade.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'burst-fade-moicano-discreto',
          category: 'Tendências'
        },
        {
          id: 'hair-24',
          title: 'Flat Top Militar: A Geometria Perfeita no Cabelo Afro',
          excerpt: 'Linhas retas e topo plano. O guia para manter o Flat Top impecável e com a estrutura sempre firme.',
          imageUrl: '/assets/flat-top-afro.png',
          author: 'Dr. Estilo (Ph.D)',
          date: '16 Mar 2026',
          slug: 'flat-top-militar-afro',
          category: 'Cultura'
        },
        {
          id: 'hair-25',
          title: 'Man Bun com Undercut: Estilo Samurai Contemporâneo',
          excerpt: 'O coque masculino elevado a um novo nível. Como prender o cabelo longo mantendo as laterais sempre raspadas.',
          imageUrl: '/assets/man-bun.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'man-bun-undercut-estilo-samurai',
          category: 'Estilo'
        },
        {
          id: 'hair-26',
          title: 'Taper Fade para Cabelos Ondulados: Textura e Controle',
          excerpt: 'Como valorizar as ondas naturais sem perder a limpeza do degradê nas extremidades.',
          imageUrl: '/assets/taper-ondulado.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'taper-fade-cabelo-ondulado-textura',
          category: 'Dicas'
        },
        {
          id: 'hair-27',
          title: 'Bowl Cut Repaginado: O "Corte de Tigela" em 2026',
          excerpt: 'Esqueça o visual infantil. Aprenda como a textura e o fade transformaram o bowl cut em um estilo avant-garde.',
          imageUrl: '/assets/bowl-cut-moderno.png',
          author: 'Carlos Barbudo',
          date: '16 Mar 2026',
          slug: 'bowl-cut-repaginado-moderno',
          category: 'Tendências'
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

const fs = require('fs');
const path = 'c:\\Users\\marke\\Downloads\\cavanhaque\\pages\\ArticleDetailPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Find the start of the messed up section
const startPattern = "'barba-mutton-chops-wolverine': {";
const startIndex = content.indexOf(startPattern);

if (startIndex === -1) {
    console.error("Could not find start pattern");
    process.exit(1);
}

// Find the start of the constant definition for 'article'
const endPattern = "const article = slug && articlesData[slug]";
const endIndex = content.indexOf(endPattern);

if (endIndex === -1) {
    console.error("Could not find end pattern");
    process.exit(1);
}

const head = content.substring(0, startIndex);
const tail = content.substring(endIndex);

const middle = `'barba-mutton-chops-wolverine': {
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
    }
  };\n  `;

fs.writeFileSync(path, head + middle + tail);
console.log("File fixed successfully");

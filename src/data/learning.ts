export interface LearningPath {
  id: string;
  title: string;
  level: string;
  description: string;
  outcome: string;
  materials: { productId: string; quantity: number }[];
  extraMaterials: string;
  steps: { title: string; text: string; check: string }[];
}

export const learningPaths: LearningPath[] = [
  {
    id: 'eletronica-basica',
    title: 'Eletrônica básica e bancada',
    level: 'Primeiros passos',
    description: 'Reconheça componentes, leia suas características e organize uma montagem de estudo antes de energizar o circuito.',
    outcome: 'Uma lista de componentes identificados e um registro das medições de resistência feitas com o circuito desligado.',
    materials: [{ productId: 'pote-resistores', quantity: 1 }, { productId: 'protoboard', quantity: 1 }, { productId: 'multimetro', quantity: 1 }],
    extraMaterials: 'Caderno para registrar referências e medições. Esta atividade usa componentes soltos, sem conexão à rede elétrica.',
    steps: [
      { title: 'Identifique cada componente', text: 'Separe alguns resistores do conjunto. Registre as marcações e procure o valor nominal e a tolerância na identificação do item. Compare peças do mesmo valor antes de montar.', check: 'Você consegue distinguir referência, valor nominal e tolerância?' },
      { title: 'Conheça a protoboard', text: 'Com a placa sem alimentação, identifique os grupos de contatos interligados. Consulte a identificação do modelo para entender as divisões das linhas e dos barramentos. Desenhe a disposição antes de inserir os resistores.', check: 'Seu desenho mostra quais terminais ficam conectados entre si?' },
      { title: 'Compare resistência e valor nominal', text: 'Com os resistores fora de qualquer circuito energizado, siga o manual do multímetro para selecionar a função de resistência. Meça peças diferentes, registre os valores e compare com a tolerância indicada. Não use a função de resistência em circuito ligado.', check: 'As medições e a unidade estão registradas para cada peça?' },
    ],
  },
  {
    id: 'arduino',
    title: 'Arduino e programação',
    level: 'Iniciante',
    description: 'Entenda a relação entre uma placa programável, seu programa e o comportamento observado no projeto.',
    outcome: 'Um exemplo de LED integrado executado na placa e anotações sobre como as mudanças no programa alteram o comportamento.',
    materials: [{ productId: 'arduino-uno', quantity: 1 }],
    extraMaterials: 'Computador com ambiente de programação compatível e cabo USB de dados adequado à placa. Confira se o cabo acompanha o produto. Componentes externos não são necessários para estudar o LED integrado.',
    steps: [
      { title: 'Reconheça a placa', text: 'Compare o nome e a revisão da sua placa com a documentação. Localize a conexão USB, os pinos e o LED integrado. Observe as indicações de alimentação e níveis de sinal antes de conectar acessórios.', check: 'O modelo selecionado no ambiente de programação corresponde à sua placa?' },
      { title: 'Execute um exemplo simples', text: 'No ambiente compatível com a placa, abra o exemplo de piscar o LED integrado. Confira a placa e a porta de conexão antes de transferir o programa. Observe a diferença entre verificar o código e enviá-lo ao hardware.', check: 'O programa foi transferido e o LED apresenta o comportamento esperado?' },
      { title: 'Faça uma alteração por vez', text: 'Mude o intervalo do exemplo e observe o resultado. Registre o valor usado e o que mudou. Depois, descreva com suas palavras o papel da repetição e das instruções de espera no programa.', check: 'Você consegue prever o efeito da próxima alteração antes de executá-la?' },
    ],
  },
  {
    id: 'iot',
    title: 'Sensores e projetos IoT',
    level: 'Após os fundamentos',
    description: 'Planeje um protótipo de monitoramento, confira as conexões e organize a leitura dos dados antes de conectá-lo a outros serviços.',
    outcome: 'Um diagrama de conexão revisado e uma tabela com leituras de teste, unidades e condições do ambiente.',
    materials: [{ productId: 'esp32', quantity: 1 }, { productId: 'dht22', quantity: 1 }, { productId: 'protoboard', quantity: 1 }, { productId: 'jumpers', quantity: 1 }],
    extraMaterials: 'Computador, cabo USB de dados e ambiente de programação compatíveis com a placa. Verifique o formato do sensor adquirido: componentes adicionais podem ser necessários conforme a documentação da versão.',
    steps: [
      { title: 'Defina o que deseja observar', text: 'Descreva a variável a acompanhar e como os dados serão usados. Comece com leituras locais no computador. Registre quais unidades e condições ambientais precisam acompanhar cada leitura.', check: 'Seu objetivo pode ser verificado sem depender de uma conexão com a nuvem?' },
      { title: 'Revise a compatibilidade', text: 'Consulte os documentos da placa e da versão do sensor. Confira alimentação, níveis de sinal, ordem dos pinos e componentes auxiliares. Desenhe as conexões e revise tudo com a alimentação desligada.', check: 'Cada conexão do desenho tem uma referência na documentação do modelo?' },
      { title: 'Valide primeiro a leitura local', text: 'Use um exemplo compatível com a placa e o sensor para observar os dados pelo monitor serial. Registre leituras e eventuais erros. Só avance para rede e serviços externos depois de entender a aquisição local e definir como tratar falhas de leitura.', check: 'Você distingue uma leitura válida, uma unidade incorreta e uma falha de comunicação?' },
    ],
  },
];

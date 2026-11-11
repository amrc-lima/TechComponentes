export interface Product {
  id: string;
  nome: string;
  preco: string;
  precoNumerico: number;
  desc: string;
  img: string;
  tag: string;
  featured?: boolean;
  tier: 'High-End' | 'Standard';
  specs: {
    label: string;
    value: string;
  }[];
  datasheetUrl: string;
  category: string;
  audiences: string[];
  applications: string[];
  availability: string;
  compatibility: string;
  imageNote?: string;
  certification?: { label: string; reference: string; url?: string };
}

type BaseProduct = Omit<Product, 'category' | 'audiences' | 'applications' | 'availability' | 'compatibility'>;

const baseProducts: BaseProduct[] = [
  // --- HIGH-END ROBOTICS & IMPORTED (10-15%) ---
  {
    id: "jetson-nano",
    nome: "NVIDIA Jetson Nano Developer Kit",
    preco: "R$ 1.250,00",
    precoNumerico: 1250.00,
    desc: "Importado (USA). IA de borda com GPU Maxwell de 128 núcleos. O cérebro para robôs autônomos e visão computacional avançada.",
    img: "/file.svg",
    imageNote: "Imagem do modelo ainda não disponível",
    tag: "IA & Visão",
    featured: true,
    tier: 'High-End',
    datasheetUrl: "https://developer.nvidia.com/embedded/jetson-nano-developer-kit",
    specs: [
      { label: "GPU", value: "128-core Maxwell" },
      { label: "CPU", value: "Quad-core ARM A57" },
      { label: "Memória", value: "4 GB 64-bit LPDDR4" },
      { label: "Encoder", value: "4K @ 30 | 4x 1080p @ 30" }
    ]
  },
  {
    id: "rplidar-a1",
    nome: "LiDAR 360° Slamtec RPLIDAR A1",
    preco: "R$ 890,00",
    precoNumerico: 890.00,
    desc: "Importado (China). Scanner laser 360 graus para mapeamento SLAM e navegação de robôs autônomos.",
    img: "https://m.media-amazon.com/images/I/515P0yY+uxL.jpg",
    tag: "Sensores Pro",
    featured: true,
    tier: 'High-End',
    datasheetUrl: "https://www.slamtec.com/en/Lidar/A1",
    specs: [
      { label: "Alcance", value: "12 Metros" },
      { label: "Frequência", value: "5.5 - 10 Hz" },
      { label: "Resolução Angular", value: "1 Grau" },
      { label: "Interface", value: "UART" }
    ]
  },
  {
    id: "lorawan-gateway",
    nome: "Gateway LoRaWAN Dragino LPS8",
    preco: "R$ 1.150,00",
    precoNumerico: 1150.00,
    desc: "Importado (Europa/China). Gateway industrial para redes IoT de longo alcance. Conecta centenas de sensores a quilômetros de distância.",
    img: "https://cdn.xingosoftware.com/elektor/images/fetch/dpr_1/https%3A%2F%2Fwww.elektormagazine.com%2Fassets%2Fupload%2Fimages%2F17%2F210680-002-94-original-lps8-10jpg.png",
    tag: "Comunicação",
    tier: 'High-End',
    datasheetUrl: "https://www.dragino.com/products/lora-lorawan-gateway/item/148-lps8.html",
    specs: [
      { label: "Canais", value: "8 Canais Paralelos" },
      { label: "Protocolo", value: "LoRaWAN v1.0.3" },
      { label: "Alcance", value: "Até 15km (Rural)" },
      { label: "Conexão", value: "Ethernet / Wi-Fi" }
    ]
  },

  // --- STANDARD / HIGH-ESCAPEMENT (BASIC STOCK) ---
  {
    id: "raspberry-pi-4",
    nome: "Raspberry Pi 4 Model B - 4GB RAM",
    preco: "R$ 580,00",
    precoNumerico: 580.00,
    desc: "Importado (UK). Computador completo do tamanho de um cartão de crédito. Ideal para servidores e mídia center.",
    img: "https://www.saravati.com.br/media/catalog/product/cache/ff61517d26ace703648229d56c081b52/4/9/49b3991b6d.jpg",
    tag: "SBC",
    tier: 'Standard',
    datasheetUrl: "https://datasheets.raspberrypi.com/rpi4/raspberry-pi-4-datasheet.pdf",
    specs: [
      { label: "CPU", value: "Broadcom BCM2711" },
      { label: "RAM", value: "4 GB LPDDR4" },
      { label: "Saída", value: "2x Micro HDMI 4K" }
    ]
  },
  {
    id: "esp32",
    nome: "Módulo ESP32 NodeMCU Wi-Fi",
    preco: "R$ 48,00",
    precoNumerico: 48.00,
    desc: "Placa de desenvolvimento para estudar conectividade Wi-Fi e Bluetooth em projetos IoT.",
    img: "https://cdn.awsli.com.br/600x700/468/468162/produto/40224659/491fa7b39e.jpg",
    tag: "Módulos",
    tier: 'Standard',
    datasheetUrl: "https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf",
    specs: [
      { label: "Processador", value: "Dual-Core 240MHz" },
      { label: "Conectividade", value: "Wi-Fi + BT" }
    ]
  },
  {
    id: "arduino-uno",
    nome: "Placa Arduino Uno R3 Atmega328",
    preco: "R$ 65,00",
    precoNumerico: 65.00,
    desc: "A porta de entrada universal para o mundo maker.",
    img: "https://images.tcdn.com.br/img/img_prod/650361/placa_uno_smd_r3_atmega328_sem_cabo_compativel_com_arduino_773_1_24257def585099792978f0dff62d0b24.jpg",
    tag: "Microcontroladores",
    tier: 'Standard',
    datasheetUrl: "https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf",
    specs: [
      { label: "Microcontrolador", value: "ATmega328P" },
      { label: "Tensão", value: "5V" }
    ]
  },
  {
    id: "kit-iniciante",
    nome: "Arduino Starter Kit",
    preco: "R$ 195,00",
    precoNumerico: 195.00,
    desc: "Kit de componentes para atividades introdutórias de eletrônica e robótica. Confira o conteúdo antes de planejar a atividade.",
    img: "https://m.media-amazon.com/images/I/617sMRpfODL.jpg",
    tag: "Kits Maker",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Itens", value: "65+ Componentes" }
    ]
  },
  {
    id: "hc-sr04",
    nome: "Sensor Ultrassônico HC-SR04",
    preco: "R$ 12,50",
    precoNumerico: 12.50,
    desc: "Essencial para detecção de obstáculos em robótica móvel.",
    img: "https://cdn.awsli.com.br/600x700/468/468162/produto/194140941c77bec2e9.jpg",
    tag: "Sensores",
    tier: 'Standard',
    datasheetUrl: "https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf",
    specs: [
      { label: "Alcance", value: "400cm" }
    ]
  },
  {
    id: "jumpers",
    nome: "Kit Jumpers Macho-Fêmea 65un",
    preco: "R$ 15,00",
    precoNumerico: 15.00,
    desc: "Insumo básico de alta rotatividade para protoboard.",
    img: "https://http2.mlstatic.com/D_NQ_NP_609188-MLB82745874633_022025-O.webp",
    tag: "Acessórios",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Quant", value: "65un" }
    ]
  },
  {
    id: "ferro-40w",
    nome: "Ferro de Solda 40W 110V",
    preco: "R$ 35,00",
    precoNumerico: 35.00,
    desc: "Ferramenta essencial para estudantes de eletrônica.",
    img: "https://images.tcdn.com.br/img/img_prod/651731/ferro_de_solda_40w_127v_3511_1_778f8537f031e2d15746f506db32a179.png",
    tag: "Ferramentas",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Potência", value: "40W" }
    ]
  },
  {
    id: "multimetro",
    nome: "Multímetro Digital Portátil",
    preco: "R$ 45,00",
    precoNumerico: 45.00,
    desc: "Instrumento de bancada para atividades de medição e estudo de eletrônica.",
    img: "https://m.media-amazon.com/images/I/61PuUTq9GSL._AC_UF894,1000_QL80_.jpg",
    tag: "Ferramentas",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Display", value: "3 1/2 Dígitos" }
    ]
  },
  {
    id: "protoboard",
    nome: "Protoboard 830 Pontos",
    preco: "R$ 28,00",
    precoNumerico: 28.00,
    desc: "Base para organizar circuitos de estudo e protótipos sem solda.",
    img: "https://cdn.awsli.com.br/600x700/468/468162/produto/19414406cc45ede84a.jpg",
    tag: "Acessórios",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Pontos", value: "830" }
    ]
  },
  {
    id: "suporte-ferro",
    nome: "Suporte para Ferro de Solda com Esponja",
    preco: "R$ 22,00",
    precoNumerico: 22.00,
    desc: "Organização e segurança para bancadas.",
    img: "https://www.usinainfo.com.br/1019812-thickbox_default/suporte-para-ferro-de-solda-hikari-hsf-10-esponja.jpg",
    tag: "Ferramentas",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Base", value: "Metálica" }
    ]
  },
  {
    id: "motor-dc-amarelo",
    nome: "Motor DC 3-6V com Caixa de Redução",
    preco: "R$ 12,00",
    precoNumerico: 12.00,
    desc: "Motor com redução para explorar mecanismos e movimentação em projetos de robótica.",
    img: "https://cdn.awsli.com.br/600x700/1158/1158247/produto/194008490/1-face-motor-roda3-27c67efb5d.jpg",
    tag: "Robótica",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Tensão", value: "3V a 6V" },
      { label: "Redução", value: "48:1" }
    ]
  },
  {
    id: "sg90-servo",
    nome: "Micro Servo Motor SG90 9g",
    preco: "R$ 18,00",
    precoNumerico: 18.00,
    desc: "Insumo essencial para braços robóticos e pequenos mecanismos.",
    img: "https://cdn.awsli.com.br/2500x2500/468/468162/produto/19414380b5df929301.jpg",
    tag: "Robótica",
    tier: 'Standard',
    datasheetUrl: "http://www.ee.ic.ac.uk/pcheung/teaching/DE1_EE/stores/sg90_datasheet.pdf",
    specs: [
      { label: "Torque", value: "1.8kg/cm" },
      { label: "Peso", value: "9g" }
    ]
  },
  {
    id: "oled-display",
    nome: "Display OLED 0.96 pol I2C Azul/Amarelo",
    preco: "R$ 29,00",
    precoNumerico: 29.00,
    desc: "Interface visual para projetos IoT e wearables.",
    img: "https://www.makerhero.com/wp-content/uploads/2017/07/SKU195523a.jpg",
    tag: "Displays",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Resolução", value: "128x64" },
      { label: "Interface", value: "I2C" }
    ]
  },
  {
    id: "pote-resistores",
    nome: "Kit Resistores 1/4W (20 valores x 20 unidades)",
    preco: "R$ 35,00",
    precoNumerico: 35.00,
    desc: "Conjunto de resistores de diferentes valores para estudar circuitos e organizar a bancada.",
    img: "https://http2.mlstatic.com/D_NQ_NP_850263-MLB87069914718_072025-O.webp",
    tag: "Componentes",
    tier: 'Standard',
    datasheetUrl: "#",
    specs: [
      { label: "Total", value: "400 un" },
      { label: "Tolerância", value: "5%" }
    ]
  },
  {
    id: "esp-cam",
    nome: "Módulo ESP32-CAM com Câmera OV2640",
    preco: "R$ 68,00",
    precoNumerico: 68.00,
    desc: "Importado. Adicione visão aos seus projetos IoT por um preço acessível.",
    img: "https://cdn.awsli.com.br/600x700/468/468162/produto/59299977/abd15f497b.jpg",
    tag: "Módulos",
    tier: 'Standard',
    datasheetUrl: "https://www.espressif.com/sites/default/files/documentation/esp32-cam_datasheet_en.pdf",
    specs: [
      { label: "Resolução", value: "2MP" },
      { label: "Slot", value: "MicroSD" }
    ]
  },
  {
    id: "dht22",
    nome: "Sensor de Temperatura e Umidade DHT22",
    preco: "R$ 32,00",
    precoNumerico: 32.00,
    desc: "Versão de precisão do clássico DHT11. Para estações meteorológicas profissionais.",
    img: "https://cdn.awsli.com.br/600x700/2539/2539636/produto/216166889/sensor-de-temperatura-e-umidade---dht22_2-yqn72266hg.jpg",
    tag: "Sensores",
    tier: 'Standard',
    datasheetUrl: "https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf",
    specs: [
      { label: "Precisão Umidade", value: "2-5%" },
      { label: "Faixa Temp", value: "-40 a 80C" }
    ]
  },
  {
    id: "sim800l",
    nome: "Módulo GSM/GPRS SIM800L",
    preco: "R$ 55,00",
    precoNumerico: 55.00,
    desc: "Importado. Conectividade celular para rastreadores e alarmes remotos.",
    img: "https://cdn.awsli.com.br/600x700/468/468162/produto/19414186fc147053c1.jpg",
    tag: "Comunicação",
    tier: 'Standard',
    datasheetUrl: "https://www.exploreembedded.com/wiki/SIM800L_GSM_Module_Datasheet",
    specs: [
      { label: "Rede", value: "Quad-band" },
      { label: "Interface", value: "Serial UART" }
    ]
  }
];

export const productCategories = [
  { value: 'kits', label: 'Kits educacionais' },
  { value: 'componentes', label: 'Componentes básicos' },
  { value: 'placas', label: 'Placas de desenvolvimento' },
  { value: 'sensores', label: 'Sensores' },
  { value: 'comunicacao', label: 'Comunicação' },
  { value: 'robotica', label: 'Robótica' },
  { value: 'ferramentas', label: 'Ferramentas de bancada' },
  { value: 'acessorios', label: 'Acessórios e prototipagem' },
  { value: 'displays', label: 'Displays' },
];

export const productAudiences = [
  { value: 'estudantes', label: 'Estudantes e educação' },
  { value: 'tecnicos', label: 'Técnicos e makers' },
  { value: 'empresas', label: 'Empresas e instituições' },
];

export const productApplications = [
  { value: 'aprendizado', label: 'Aprendizado' },
  { value: 'prototipagem', label: 'Prototipagem' },
  { value: 'manutencao', label: 'Manutenção e bancada' },
  { value: 'automacao', label: 'Automação' },
  { value: 'robotica', label: 'Robótica' },
  { value: 'iot', label: 'IoT e conectividade' },
  { value: 'ia', label: 'Visão e IA' },
];

type ProductMetadata = Pick<Product, 'category' | 'audiences' | 'applications'>;
const allAudiences = ['estudantes', 'tecnicos', 'empresas'];
const productMetadata: Record<string, ProductMetadata> = {
  'jetson-nano': { category: 'placas', audiences: ['estudantes', 'tecnicos', 'empresas'], applications: ['prototipagem', 'ia', 'robotica'] },
  'rplidar-a1': { category: 'sensores', audiences: allAudiences, applications: ['robotica', 'prototipagem'] },
  'lorawan-gateway': { category: 'comunicacao', audiences: ['tecnicos', 'empresas'], applications: ['iot', 'automacao'] },
  'raspberry-pi-4': { category: 'placas', audiences: allAudiences, applications: ['aprendizado', 'prototipagem', 'iot'] },
  esp32: { category: 'placas', audiences: allAudiences, applications: ['aprendizado', 'iot', 'automacao'] },
  'arduino-uno': { category: 'placas', audiences: allAudiences, applications: ['aprendizado', 'prototipagem', 'robotica'] },
  'kit-iniciante': { category: 'kits', audiences: allAudiences, applications: ['aprendizado', 'prototipagem'] },
  'hc-sr04': { category: 'sensores', audiences: allAudiences, applications: ['aprendizado', 'robotica', 'prototipagem'] },
  jumpers: { category: 'acessorios', audiences: allAudiences, applications: ['aprendizado', 'prototipagem', 'manutencao'] },
  'ferro-40w': { category: 'ferramentas', audiences: ['tecnicos', 'empresas'], applications: ['manutencao', 'prototipagem'] },
  multimetro: { category: 'ferramentas', audiences: allAudiences, applications: ['aprendizado', 'manutencao', 'prototipagem'] },
  protoboard: { category: 'acessorios', audiences: allAudiences, applications: ['aprendizado', 'prototipagem'] },
  'suporte-ferro': { category: 'ferramentas', audiences: ['tecnicos', 'empresas'], applications: ['manutencao', 'prototipagem'] },
  'motor-dc-amarelo': { category: 'robotica', audiences: allAudiences, applications: ['aprendizado', 'robotica'] },
  'sg90-servo': { category: 'robotica', audiences: allAudiences, applications: ['aprendizado', 'robotica', 'prototipagem'] },
  'oled-display': { category: 'displays', audiences: allAudiences, applications: ['iot', 'prototipagem', 'aprendizado'] },
  'pote-resistores': { category: 'componentes', audiences: allAudiences, applications: ['aprendizado', 'prototipagem', 'manutencao'] },
  'esp-cam': { category: 'placas', audiences: allAudiences, applications: ['iot', 'ia', 'prototipagem'] },
  dht22: { category: 'sensores', audiences: allAudiences, applications: ['iot', 'automacao', 'aprendizado'] },
  sim800l: { category: 'comunicacao', audiences: ['tecnicos', 'empresas'], applications: ['iot', 'prototipagem'] },
};

export const products: Product[] = baseProducts.map((product) => ({
  ...product,
  ...productMetadata[product.id],
  availability: 'Disponibilidade a consultar',
  compatibility: 'Confirme o modelo exato, a alimentação e as interfaces com os demais componentes do seu projeto. Consulte a documentação da peça antes da montagem.',
}));

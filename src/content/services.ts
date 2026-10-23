import type { Service, ServicePage } from "@/types/content";

export const services: readonly Service[] = [
  {
    id: "alongamento-f1",
    name: "Alongamento em gel · Molde F1",
    price: 120,
    category: "alongamento-de-unhas",
    duration: "3 a 4 horas",
    description:
      "Comprimento, estrutura e um acabamento pensado para o seu estilo.",
  },
  {
    id: "banho-de-gel",
    name: "Banho de gel",
    price: 100,
    category: "banho-de-gel",
    duration: "3 a 4 horas",
    description:
      "Uma camada de gel sobre suas unhas naturais, com resistência e brilho.",
  },
  {
    id: "manicure-pro",
    name: "Manicure pró · Em gel",
    price: 60,
    category: "manicure",
    duration: "1h30 a 2h30",
    description: "Cuidado com as unhas naturais e esmaltação em gel.",
  },
  {
    id: "pedicure-pro",
    name: "Pedicure pró · Em gel",
    price: 60,
    category: "pedicure",
    description: "O cuidado dos pés com o acabamento da esmaltação em gel.",
  },
  {
    id: "manicure-tradicional",
    name: "Manicure tradicional",
    price: 30,
    category: "manicure",
    duration: "1h30 a 2h30",
    description: "Cutilagem e esmaltação tradicional para valorizar suas mãos.",
  },
  {
    id: "pedicure-tradicional",
    name: "Pedicure tradicional",
    price: 35,
    category: "pedicure",
    description: "Cuidado dos pés com esmaltação tradicional.",
  },
  {
    id: "manutencao-banho",
    name: "Manutenção de banho de gel",
    price: 80,
    category: "banho-de-gel",
    description:
      "Renovação do banho de gel, respeitando o crescimento das unhas.",
  },
  {
    id: "manutencao-alongamento",
    name: "Manutenção de alongamento",
    price: 100,
    category: "alongamento-de-unhas",
    description: "Reequilíbrio da estrutura e renovação do acabamento.",
  },
  {
    id: "remocao",
    name: "Remoção",
    price: 35,
    description:
      "Remoção do procedimento. Informe a técnica anterior ao agendar.",
  },
  {
    id: "conserto",
    name: "Conserto fora da manutenção",
    price: 10,
    unit: "por unha",
    description: "Reparo pontual, conforme avaliação e disponibilidade.",
  },
];

export const servicePages: readonly ServicePage[] = [
  {
    slug: "alongamento-de-unhas",
    name: "Alongamento de unhas",
    eyebrow: "Comprimento com personalidade",
    headline: "O formato dos seus sonhos. O cuidado que você merece.",
    description:
      "Alongamento de unhas em gel com molde F1 em Barnabés, Juquitiba. Estrutura, comprimento e acabamento personalizados por Amanda Camargo.",
    detail:
      "A técnica com molde F1 permite construir o alongamento em gel e criar o comprimento desejado. O formato e a proposta são conversados no atendimento para combinar com suas preferências e sua rotina. Cada etapa pede tempo e atenção aos detalhes.",
    image: "/images/unhas-04.webp",
    imageAlt:
      "Alongamento com francesinha e detalhes florais realizado por Amanda Camargo",
    benefits: [
      "Aplicação em gel com molde F1",
      "Formato escolhido com você",
      "Atendimento de 3 a 4 horas",
      "Manutenção de 15 a 30 dias, conforme crescimento",
    ],
    faqs: [
      {
        question: "Qual técnica de alongamento a Amanda utiliza?",
        answer:
          "Amanda trabalha com alongamento em gel utilizando molde F1. A escolha do formato e comprimento é feita de acordo com a sua preferência e avaliação das unhas.",
      },
      {
        question: "Quanto custa a aplicação e a manutenção?",
        answer:
          "A aplicação custa R$ 120 e a manutenção de alongamento custa R$ 100. Para reparos fora da manutenção, o valor é de R$ 10 por unha.",
      },
      {
        question: "O alongamento dura quanto tempo?",
        answer:
          "A manutenção é indicada de 15 a 30 dias, de acordo com o crescimento da unha. Os cuidados diários e a rotina também influenciam a conservação do resultado.",
      },
    ],
  },
  {
    slug: "banho-de-gel",
    name: "Banho de gel",
    eyebrow: "Suas unhas, valorizadas",
    headline: "A beleza das suas unhas naturais, com um cuidado a mais.",
    description:
      "Banho de gel em unhas naturais em Barnabés, Juquitiba. Conheça a técnica, os valores e a manutenção com Amanda Camargo.",
    detail:
      "O banho de gel é feito sobre as unhas naturais, sem acrescentar comprimento. A camada de gel oferece resistência e recebe o acabamento escolhido para você. É uma opção para quem quer valorizar o próprio comprimento com o cuidado de uma nail designer.",
    image: "/images/unhas-02.webp",
    imageAlt:
      "Detalhes do acabamento das unhas em um trabalho real de Amanda Camargo",
    benefits: [
      "Aplicação sobre a unha natural",
      "Sem acréscimo de comprimento",
      "Atendimento de 3 a 4 horas",
      "Manutenção a partir do crescimento das unhas",
    ],
    faqs: [
      {
        question: "Banho de gel alonga a unha?",
        answer:
          "Não. O banho de gel acompanha o comprimento da unha natural. Se você quer acrescentar comprimento, conheça o alongamento em gel com molde F1.",
      },
      {
        question: "Quanto custa o banho de gel?",
        answer:
          "A aplicação custa R$ 100 e a manutenção custa R$ 80. A manutenção é indicada de 15 a 30 dias, conforme o crescimento das unhas.",
      },
    ],
  },
  {
    slug: "manicure",
    name: "Manicure",
    eyebrow: "Seu momento de cuidado",
    headline: "Das cores clássicas aos detalhes que são só seus.",
    description:
      "Manicure tradicional e manicure pró com esmaltação em gel em Barnabés, Juquitiba. Veja preços e agende com Amanda Camargo.",
    detail:
      "Escolha entre a manicure tradicional, com cutilagem e esmaltação, e a manicure pró, com esmaltação em gel nas unhas naturais. Um atendimento com tempo para escolher sua cor, cuidar das mãos e valorizar os detalhes.",
    image: "/images/unhas-01.webp",
    imageAlt:
      "Esmaltação e detalhes de manicure do portfólio de Amanda Camargo",
    benefits: [
      "Manicure tradicional ou em gel",
      "Cores para diferentes estilos",
      "Atendimento de 1h30 a 2h30",
      "Escolha do serviço antes de agendar",
    ],
    faqs: [
      {
        question: "Qual é o valor da manicure?",
        answer:
          "A manicure tradicional custa R$ 30. A manicure pró, com esmaltação em gel, custa R$ 60.",
      },
      {
        question: "Quanto tempo leva a manicure?",
        answer:
          "Reserve de 1h30 a 2h30 para a manicure tradicional ou em gel. O tempo varia conforme o trabalho escolhido e as condições das unhas.",
      },
    ],
  },
  {
    slug: "pedicure",
    name: "Pedicure",
    eyebrow: "Cuidado até a ponta dos pés",
    headline: "Um detalhe de beleza. Um momento para você.",
    description:
      "Pedicure tradicional e pedicure pró com esmaltação em gel em Barnabés, Juquitiba. Consulte os valores e agende com Amanda Camargo.",
    detail:
      "O atendimento de pedicure está disponível com esmaltação tradicional ou em gel. Escolha a opção que combina com você e consulte os horários disponíveis. Se já tem um procedimento nos pés, informe no agendamento para receber a orientação adequada.",
    image: "/images/unhas-10.webp",
    imageAlt: "Pedicure com esmaltação branca realizado por Amanda Camargo",
    benefits: [
      "Esmaltação tradicional ou em gel",
      "Atendimento individual com horário marcado",
      "Orientação sobre procedimentos anteriores",
      "Agendamento online ou contato pelo WhatsApp",
    ],
    faqs: [
      {
        question: "Quanto custa a pedicure?",
        answer:
          "A pedicure tradicional custa R$ 35 e a pedicure pró, com esmaltação em gel, custa R$ 60.",
      },
      {
        question: "Como saber o tempo necessário para a pedicure?",
        answer:
          "Consulte Amanda pelo WhatsApp antes de agendar se tiver dúvidas sobre o serviço ou algum procedimento anterior.",
      },
    ],
  },
];

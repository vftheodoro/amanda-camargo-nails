import type { Business } from "@/types/content";

export const business: Business = {
  name: "Amanda Camargo Nails",
  domain: "https://amandacamargonails.com.br",
  phone: "5513996747426",
  displayPhone: "(13) 99674-7426",
  bookingUrl: "https://online.maapp.com.br/Amandacahnails",
  instagramUrl: "https://www.instagram.com/amandacah_nails/",
  address: {
    street: "Rua Antônio Soares Godinho, 75",
    neighborhood: "Barnabés",
    city: "Juquitiba",
    state: "SP",
    postalCode: "06950-000",
  },
};

export const policies = [
  "Agende antecipadamente, conforme os horários disponíveis.",
  "Se você tem alongamento ou outro procedimento feito por outra profissional, informe no agendamento.",
  "Escolha o serviço com atenção para reservarmos o tempo adequado para você.",
  "Se precisar cancelar, avise com pelo menos 24 horas de antecedência.",
  "A tolerância de atraso é de 10 minutos. Após esse período, o atendimento poderá ser reduzido ou remarcado, conforme a disponibilidade.",
] as const;

export const faqs = [
  {
    question: "Onde fica o atendimento?",
    answer:
      "O atendimento acontece na Rua Antônio Soares Godinho, 75, no bairro Barnabés, em Juquitiba–SP. É necessário agendar seu horário antecipadamente.",
  },
  {
    question: "Qual é a diferença entre alongamento e banho de gel?",
    answer:
      "O alongamento em gel com molde F1 acrescenta comprimento às unhas. O banho de gel é aplicado sobre as unhas naturais, mantendo o comprimento e oferecendo uma camada de resistência. Na dúvida, converse com Amanda antes de escolher seu serviço.",
  },
  {
    question: "Quanto tempo preciso reservar?",
    answer:
      "Alongamento e banho de gel levam de 3 a 4 horas. A manicure tradicional e a manicure em gel levam de 1h30 a 2h30. O tempo pode variar conforme as condições das unhas e o trabalho escolhido.",
  },
  {
    question: "Quando devo fazer a manutenção?",
    answer:
      "A manutenção é indicada entre 15 e 30 dias, de acordo com o crescimento das unhas. Amanda orienta o intervalo adequado para cada cliente durante o atendimento.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Clique em Agendar horário para consultar a disponibilidade na MinhaAgenda. Se tiver dúvidas sobre a técnica ou um procedimento anterior, fale pelo WhatsApp. O atendimento é das 08h às 17h, somente com horário marcado.",
  },
  {
    question: "Posso ir com alongamento de outra profissional?",
    answer:
      "Sim, mas é importante informar isso no momento do agendamento. Assim, Amanda poderá orientar sobre avaliação, eventual remoção e o tempo necessário para seu atendimento.",
  },
] as const;

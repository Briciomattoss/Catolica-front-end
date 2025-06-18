                                                                                                                                                                                                                                                                                      // Alert de boas-vindas só na primeira visita
if (!localStorage.getItem('welcomeShown')) {
  alert('Bem-vindo ao Tech Index! Explore nossos projetos e equipe.');
  localStorage.setItem('welcomeShown', 'true');
}

// Função para alternar modo claro/escuro
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
}

// Criar botão de toggle dinamicamente no navbar
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav .container');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.textContent = 'Modo Claro/Escuro';
  btn.className = 'btn btn-sm btn-outline-info ms-3';
  btn.style.cursor = 'pointer';

  btn.addEventListener('click', () => {
    toggleDarkMode();
  });

  nav.appendChild(btn);
});

// Objeto com descrições detalhadas para cada projeto
const descriptionDetalhadas = {
  "Projeto Alpha": `📦 Detalhes Externos (Visão Geral do Projeto)
    •    Design Moderno e Minimalista: A residência automatizada possui uma arquitetura integrada com sensores discretos, câmeras de vigilância IP e iluminação inteligente, sem comprometer a estética do ambiente.
    •    Integração com Assistentes Virtuais: O sistema é compatível com Amazon Alexa, Google Assistente e Apple Siri, permitindo total controle por voz.
    •    Controle Remoto e Monitoramento: Através de um aplicativo mobile, o usuário pode gerenciar a residência mesmo estando fora de casa. Comandos de voz podem ser emitidos pelo celular ou smartwatch.
    •    Conectividade e IoT: Todos os dispositivos são interconectados via Wi-Fi ou Zigbee, com um hub central controlando rotinas automatizadas como “modo noturno”, “modo cinema” ou “modo viagem”.
    •    Segurança e Acesso: Portas e janelas com sensores magnéticos, fechaduras digitais com reconhecimento facial ou por comando de voz, câmeras com detecção de movimento e alertas em tempo real.
    •    Eficiência Energética: Sensores de presença que desligam luzes e aparelhos automaticamente. Controle de temperatura com termostatos inteligentes integrados ao sistema de voz.
    •    Personalização por Cômodo: O usuário pode configurar comandos por ambiente — por exemplo: “Acender luz do quarto”, “Fechar cortina da sala”, “Ativar alarme do portão”.
    •    Escalabilidade: Sistema preparado para expansão futura com novos dispositivos, como irrigação automatizada, controle de eletrodomésticos, climatização e mais.`,

    "Projeto Beta": `📱 Detalhes Externos (Visão Geral do Projeto)
    •    Interface Intuitiva e Moderna: O app possui um design clean, com dashboards personalizáveis, gráficos claros e alertas visuais para facilitar a visualização de dados de saúde.
    •    Sincronização com Dispositivos Wearables: Integração com smartwatches e pulseiras inteligentes para monitoramento contínuo da frequência cardíaca, sono, passos, oxigenação do sangue (SpO₂), pressão arterial e mais.
    •    Alertas e Notificações: O sistema envia lembretes para tomar medicamentos, se hidratar, realizar pausas e fazer alongamentos, além de alertas em caso de anomalias detectadas nos sinais vitais.
    •    Histórico de Saúde e Relatórios: Geração de relatórios semanais e mensais que podem ser compartilhados com médicos. Armazena informações como consultas, exames, sintomas e alergias.
    •    Monitoramento Personalizado: Permite o cadastro de metas individuais (como perda de peso, controle glicêmico ou prática de exercícios) com acompanhamento em tempo real.
    •    Seção de Bem-estar Mental: Inclui exercícios de respiração, meditação guiada, controle de humor e registro emocional, visando equilíbrio emocional e qualidade de vida.
    •    Camada de Segurança: Todos os dados são criptografados e protegidos por autenticação biométrica ou senha. O app respeita a LGPD e fornece controle total ao usuário sobre seus dados.
    •    Compatibilidade e Acessibilidade: Funciona em Android e iOS, com suporte para acessibilidade (voz, contraste e tamanhos de fonte), tornando o app inclusivo para todas as idades.
    •    Conectividade com Profissionais: Possui funcionalidade de compartilhamento de dados com médicos, nutricionistas, psicólogos e treinadores físicos via QR Code ou login seguro.`,

    "Projeto Gamma": `Detalhes Externos (Visão Geral do Projeto)
    •    Interface Organizada e Responsiva: A plataforma oferece uma experiência amigável tanto em desktop quanto em dispositivos móveis, com painéis organizados por listas, prazos, status e prioridades.
    •    Quadros Kanban e Listas Dinâmicas: Os usuários podem visualizar suas tarefas por meio de quadros interativos estilo Kanban, listas simples ou calendário, permitindo o gerenciamento visual do progresso.
    •    Criação e Atribuição de Tarefas: É possível adicionar novas tarefas com poucos cliques, atribuir responsáveis, definir datas de entrega, níveis de prioridade e adicionar descrições detalhadas.
    •    Alertas e Lembretes Automatizados: O sistema envia notificações personalizadas por push ou e-mail lembrando o usuário de prazos, alterações em tarefas compartilhadas e metas pendentes.
    •    Colaboração em Tempo Real: Permite que equipes colaborem simultaneamente, deixando comentários em tarefas, anexando arquivos e visualizando atualizações em tempo real.
    •    Integrações Inteligentes: A plataforma é compatível com ferramentas como Google Calendar, Microsoft Outlook, Slack e Trello, ampliando as possibilidades de uso no dia a dia corporativo ou acadêmico.
    •    Painel de Desempenho e Relatórios: Geração automática de relatórios com gráficos de produtividade, tempo médio de execução por tarefa e taxa de conclusão individual ou da equipe.
    •    Personalização Visual: O usuário pode escolher temas, cores, modo escuro e arrastar elementos livremente para criar um ambiente de trabalho mais confortável.
    •    Acesso Seguro e Multinível: Sistema de autenticação segura com níveis de permissão distintos (admin, colaborador, visualizador), ideal para organizações de qualquer porte.
    •    Versatilidade de Uso: Indicado para uso pessoal (como listas de tarefas diárias ou metas) até ambientes profissionais (gerenciamento de projetos, equipes, entregas e metas de produção).`,

    "Projeto Delta": `Detalhes Externos (Visão Geral do Projeto)
    •    Visual Dinâmico e Intuitivo: O dashboard apresenta uma interface moderna, com gráficos responsivos e animações suaves que facilitam a compreensão dos dados em tempo real.
    •    Diversidade de Gráficos: Oferece suporte a diversos tipos de visualizações, como gráficos de barras, linhas, pizza, radar, mapas de calor, indicadores de performance (KPIs), entre outros.
    •    Filtros Inteligentes e Personalização: O usuário pode filtrar os dados por período, categorias, localização ou parâmetros específicos, além de customizar o layout conforme suas necessidades.
    •    Atualização em Tempo Real: A dashboard se conecta com APIs e bancos de dados para atualizar automaticamente os gráficos com os dados mais recentes, sem necessidade de recarregar a página.
    •    Acesso Multiplataforma: Pode ser acessada por computadores, tablets e smartphones, com interface adaptada para todos os tamanhos de tela.
    •    Modo Escuro e Claro: Inclui opção de alternância entre modos claro e escuro para conforto visual durante o uso prolongado.
    •    Exportação e Compartilhamento de Dados: Possibilita exportar gráficos em PDF, Excel, PNG ou link para compartilhamento rápido com outros usuários ou equipes.
    •    Integração com Fontes de Dados Populares: Compatível com ferramentas como Google Sheets, MySQL, PostgreSQL, Excel, APIs RESTful, e plataformas como Power BI e Tableau.
    •    Notificações e Alertas de Indicadores: Permite configurar alertas visuais ou por e-mail quando determinados valores ultrapassam metas, padrões ou limites pré-estabelecidos.
    •    Segurança e Acesso Restrito: A plataforma conta com autenticação por login e permissões de acesso diferenciadas para administradores, editores e visualizadores.`
};

// Função para exibir informações dos projeto
  function ShowInfo(imgElement) {
    const cardBody = imgElement.closest('.card').querySelector('.card-body');
    const title = cardBody.querySelector('.card-title').innerText;
    // Se existir descrição detalhada para o projeto, usa ela, senão usa o texto do card
    const description = descriptionDetalhadas[title]|| cardBody.querySelector('.card-text').innerText;

    alert(`🛈 ${title}\n\n${description}`);
  }
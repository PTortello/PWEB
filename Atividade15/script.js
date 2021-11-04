function selecao(curso) {
  if (confirm(`Abrir janela com o curso ${curso}?`)) {
    let conteudo;
    switch (curso) {
      case "ADS":
        conteudo = descricao.ADS;
        break;
      case 'ELETRONICA':
        conteudo = descricao.ELETRONICA;
        break;
      case 'FABRICACAO':
        conteudo = descricao.FABRICACAO;
        break;
      case 'QUALIDADE':
        conteudo = descricao.QUALIDADE;
        break;
      case 'LOGISTICA':
        conteudo = descricao.LOGISTICA;
        break;
      default:
        conteudo = "Sem descrição.";
        break;
    }
    window.open("", curso, "width=600, height=300").document.write(conteudo);
  }
}

const descricao = {
  ADS: "<h1>Análise e Desenvolvimento de Sistemas</h1>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.",
  ELETRONICA: "<h1>Eletrônica Automotiva</h1>O tecnólogo em Eletrônica Automotiva: participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva; supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio; especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio;",
  FABRICACAO: "<h1>Fabricação Mecânica</h1>O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros.",
  QUALIDADE: "<h1>Gestão da Qualidade</h1>O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade.",
  LOGISTICA: "<h1>Logística</h1>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte. Atuando na área logística de uma empresa, planeja e coordena a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos. Ele gerencia redes de distribuição e unidades logísticas, estabelecendo processos de compras, identificando fornecedores, negociando e estabelecendo padrões de recebimento, armazenamento, movimentação e embalagem de materiais, podendo ainda ocupar-se do inventário de estoques, sistemas de abastecimento, programação e monitoramento do fluxo de pedidos."
}

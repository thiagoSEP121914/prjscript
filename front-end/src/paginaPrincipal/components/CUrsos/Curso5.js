import React, { useState, useEffect, Children } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Estilos com styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* ocupa a altura da tela
  width:100vw; /*ocupa toda a largura da tela
  padding: 20px;
  background-color:#ecf0f1;
`;

const ContentBox = styled.div`
  width: 70%;
  max-width: 900px;
  padding: 150px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  margin-top:50px;
  font-family: 'montserrat', sans-serif;
  font-size:40px;
  font-weight:bold;
  line-height: 1.2;
  letter-spacing: 1px;
  text-transform: uppercase;
  color:#2980b9;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1)
`;

const Text = styled.p`
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;
  color: #333;
  line-weight:normal;
  letter-spacing:0px;
  `;

const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  margin-top: 20px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #3498db;
  border-radius: 5px;
  width: ${(props) => props.width}%;
`;
const StyledAccessButton = styled.button`
  margin-top: 20px;
  text-decoration: none;
  color: #ecf0f1;
  background-color:#2980b9;
  padding: 10px 20px;
  border: 1px solid;
  border-radius: 8px;
  transition: background 0.3s;
  cursor:pointer;

  &:hover {
    background:#3498db;
    color: white;
  }
`;

const CourseContent = () => {
  const [progress, setProgress] = useState(0); // Barra de progresso
  const [currentSection, setCurrentSection] = useState(0); // Seção atual

  const sections = [
    { 
      title: "Gestão de Experiência do Cliente - Curso Completo", 
      content: `Introdução à Gestão de Experiência do Cliente
      O que é Gestão de Experiência do Cliente (CEM)?
      A Gestão de Experiência do Cliente (CEM) refere-se ao processo de gerenciar a interação de uma empresa com seus clientes, com foco em melhorar todos os aspectos da experiência para criar um relacionamento mais satisfatório, leal e produtivo.

      Por que a Experiência do Cliente é Importante?
      A experiência do cliente é um fator decisivo para a fidelização e a satisfação dos consumidores. Empresas que oferecem uma experiência superior conseguem aumentar a lealdade, melhorar a imagem da marca e obter vantagem competitiva no mercado.` 
    },
    { 
      title: "Fundamentos de Customer Experience", 
      content: `Definição e Componentes da Experiência do Cliente
      A experiência do cliente abrange todas as interações entre um cliente e uma empresa, desde o primeiro contato até o pós-venda. Ela inclui fatores como:
      - Experiência no ponto de contato (site, loja física, atendimento ao cliente)
      - Qualidade do produto ou serviço
      - Interações digitais (sites, aplicativos, redes sociais)
      - Atendimento ao cliente e suporte pós-venda

      Por que CEM é Crucial para Empresas?
      A boa gestão da experiência do cliente ajuda a aumentar a retenção de clientes, promover o boca-a-boca positivo e aumentar o valor do ciclo de vida do cliente. Empresas que se destacam nesse aspecto têm mais chances de sucesso e crescimento a longo prazo.`
    },
    { 
      title: "Pesquisa e Mapeamento da Jornada do Cliente", 
      content: `Mapeamento da Jornada do Cliente
      A jornada do cliente é o caminho percorrido pelo cliente desde o primeiro contato com a marca até a pós-compra. O mapeamento dessa jornada é essencial para entender os pontos de contato e identificar oportunidades de melhorar a experiência.

      Pesquisa de Satisfação do Cliente
      Realizar pesquisas de satisfação (como NPS – Net Promoter Score) é uma das melhores formas de medir a experiência do cliente. Esses dados ajudam a identificar áreas de melhoria e a compreender melhor as expectativas dos consumidores.

      Ferramentas para Mapear a Jornada
      Ferramentas como Customer Journey Mapping, análise de feedback de clientes e dashboards de dados podem ajudar as empresas a visualizar e entender os diferentes estágios da jornada do cliente.`
    },
    { 
      title: "Estratégias para Melhorar a Experiência do Cliente", 
      content: `Personalização da Experiência
      Oferecer uma experiência personalizada é uma das maneiras mais eficazes de aumentar a satisfação do cliente. Isso pode incluir recomendações de produtos baseadas em dados de compras passadas, bem como campanhas de marketing direcionadas.

      Multicanalidade
      Proporcionar uma experiência consistente em todos os canais de contato com a empresa (telefone, e-mail, chat, redes sociais) é fundamental. A abordagem multicanal permite que os clientes escolham o canal mais conveniente e tenham uma experiência contínua.

      Atendimento Proativo
      Antecipar as necessidades dos clientes e oferecer um atendimento proativo é uma estratégia importante. Isso pode envolver o envio de atualizações ou lembretes, bem como a resolução de problemas antes que o cliente os perceba.` 
    },
    { 
      title: "Tecnologias e Ferramentas para CEM", 
      content: `Ferramentas de Gestão de Relacionamento com o Cliente (CRM)
      O uso de sistemas de CRM como Salesforce, HubSpot e Zoho permite que as empresas acompanhem todas as interações com os clientes, identifiquem padrões e personalizem a comunicação.

      Automação de Marketing
      Ferramentas de automação de marketing como Mailchimp, Marketo e ActiveCampaign podem ajudar a otimizar campanhas e personalizar a experiência do cliente de maneira mais eficiente, segmentando o público e criando campanhas automatizadas baseadas em comportamentos.

      Análise de Dados e Feedback em Tempo Real
      Ferramentas como Google Analytics, Hotjar e outras plataformas de análise ajudam a monitorar a interação do cliente com os canais digitais da empresa, identificando áreas que precisam de melhorias e medindo o impacto das mudanças implementadas.`
    },
    { 
      title: "Medição e Avaliação da Experiência do Cliente", 
      content: `Métricas de CEM
      As métricas mais comuns para medir a experiência do cliente incluem:
      - NPS (Net Promoter Score): Mede a lealdade do cliente e a probabilidade de recomendação.
      - CSAT (Customer Satisfaction Score): Avalia a satisfação do cliente com um produto ou serviço específico.
      - CES (Customer Effort Score): Mede o esforço que o cliente teve que fazer para resolver um problema ou realizar uma ação.

      Avaliação de Desempenho e Melhoria Contínua
      A avaliação constante da experiência do cliente e a implementação de melhorias contínuas são essenciais. Isso pode ser feito através de revisões regulares das métricas, feedback dos clientes e benchmarking em relação aos concorrentes.`
    },
    { 
      title: "Gestão de Experiência em Diferentes Setores", 
      content: `CEM no Varejo
      No setor de varejo, a experiência do cliente pode ser melhorada com a oferta de compras online e offline integradas, como o modelo "click and collect", atendimento rápido, e facilidades de pagamento.

      CEM em Serviços Financeiros
      No setor bancário e de serviços financeiros, a experiência do cliente é frequentemente focada em conveniência e confiança. Isso inclui serviços como chatbots para atendimento rápido, apps móveis e processos digitais simplificados.

      CEM em Telecomunicações
      No setor de telecomunicações, os clientes esperam suporte contínuo e soluções rápidas para problemas técnicos. Estratégias de CEM podem incluir a personalização das ofertas e a resolução eficiente de problemas.`
    },
    { 
      title: "Desafios na Gestão da Experiência do Cliente", 
      content: `Desafios na Implementação de CEM
      A implementação de uma estratégia de CEM pode ser desafiadora devido a fatores como a falta de alinhamento entre departamentos, a dificuldade de personalização em grande escala e a falta de dados de qualidade.

      Superando os Desafios
      As empresas devem investir em treinamento de equipes, utilizar tecnologias integradas para unificar dados de clientes, e ouvir o feedback constantemente. Além disso, a alta liderança deve estar comprometida com a visão de uma experiência do cliente excepcional.

      A Experiência do Cliente em um Mundo Digital
      A crescente digitalização das interações exige que as empresas repensem suas estratégias de CEM para garantir que a experiência online seja tão rica e personalizada quanto a experiência no ponto de venda.`
    },
    { 
      title: "Tendências Futuras em Gestão de Experiência do Cliente", 
      content: `Inteligência Artificial e Chatbots
      O uso de IA e chatbots está crescendo para oferecer respostas rápidas e personalizadas aos clientes. Ferramentas de IA ajudam a prever as necessidades dos clientes, melhorar o atendimento e fornecer soluções em tempo real.

      Realidade Aumentada e Virtual (AR/VR)
      AR e VR estão transformando a experiência do cliente, principalmente no varejo. A possibilidade de visualizar produtos em 3D ou experimentar virtualmente pode ser uma vantagem competitiva para as marcas.

      Experiência Omnicanal
      A experiência omnicanal, onde o cliente tem uma interação fluida e integrada entre todos os canais de comunicação e vendas, será cada vez mais importante para as empresas que desejam garantir uma experiência satisfatória e consistente.`
    },
    { 
      title: "Conclusão e Certificação", 
      content: `Este curso de Gestão de Experiência do Cliente oferece uma visão abrangente das estratégias, ferramentas e tendências que estão moldando a forma como as empresas gerenciam a experiência de seus clientes. Ele aborda desde os conceitos fundamentais até as inovações tecnológicas que estão moldando o futuro da gestão de experiência.

      Ao concluir o curso, você obterá uma certificação que ajudará a fortalecer sua carreira, capacitando-o com habilidades essenciais para melhorar a experiência do cliente em qualquer organização.`
    }
];
  // Função para atualizar o progresso com base na seção
  useEffect(() => {
    const calculatedProgress = ((currentSection + 1) / sections.length) * 100;
    setProgress(calculatedProgress);
  }, [currentSection]);

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const AccessButton = ({children}) => {
    const navigate = useNavigate();

    const voltar = () => {
        navigate(-1);
    };

    return <StyledAccessButton onClick={voltar}>{children}</StyledAccessButton>;
  };

  return (
    <Container>
      <ContentBox>
        <Title>{sections[currentSection].title}</Title>
        <Text>{sections[currentSection].content}</Text>

        {/* Botões de navegação */}
        <PrevButton onClick={prevSection}>&lt;</PrevButton>
        <NextButton onClick={nextSection}>&gt;</NextButton>

        {/* Barra de Progresso */}
        <ProgressBar>
          <Progress width={progress} />
        </ProgressBar>

        <p>{Math.round(progress)}% - Progresso</p>
        <AccessButton>Sair</AccessButton>
      </ContentBox>
      
    </Container>
  );
};

export default CourseContent;

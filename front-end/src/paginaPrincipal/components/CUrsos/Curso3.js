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
      title: "Business Intelligence & AI - Curso Completo", 
      content: `Introdução ao Business Intelligence & Inteligência Artificial
      O que é Business Intelligence (BI)?
      Business Intelligence (BI) refere-se ao uso de ferramentas, tecnologias e práticas para coletar, analisar e transformar dados brutos em informações úteis para apoiar a tomada de decisões empresariais estratégicas.

      O que é Inteligência Artificial (IA)?
      Inteligência Artificial (IA) envolve a criação de algoritmos e modelos que permitem que as máquinas aprendam com dados, tomem decisões e realizem tarefas que, normalmente, exigiriam inteligência humana, como reconhecimento de padrões e previsão de tendências.

      Por que BI e IA são importantes?
      BI e IA são fundamentais para melhorar a eficiência operacional, otimizar decisões empresariais e prever tendências de mercado. As empresas usam essas tecnologias para ganhar uma vantagem competitiva, identificar oportunidades de negócios e melhorar a experiência do cliente.`
    },
    { 
      title: "Fundamentos de Business Intelligence", 
      content: `Definição e Características de Business Intelligence
      O BI envolve a coleta e análise de dados para fornecer insights que ajudam as empresas a tomar decisões informadas. Ele inclui ferramentas como dashboards, relatórios e visualizações que facilitam a compreensão de grandes volumes de dados.

      Arquitetura de BI
      A arquitetura de BI inclui componentes como bancos de dados, Data Warehouses (DW), ferramentas de ETL (Extração, Transformação e Carga) e sistemas de visualização de dados. Esses componentes trabalham juntos para processar dados e apresentar insights acessíveis.`
    },
    { 
      title: "Tecnologias Utilizadas em Business Intelligence", 
      content: `Ferramentas de BI
      Existem diversas ferramentas de BI no mercado, como Power BI, Tableau e Qlik, que permitem a análise de dados e a criação de dashboards interativos para visualização e interpretação dos dados.

      Banco de Dados e Data Warehouses
      Os bancos de dados relacionais e Data Warehouses são usados para armazenar grandes volumes de dados históricos, que são necessários para análise e relatórios de BI. Eles permitem consultas rápidas e eficazes para obter insights sobre o desempenho da empresa.

      ETL (Extração, Transformação e Carga)
      O processo ETL é fundamental para a integração de dados de diferentes fontes. Ele envolve a extração de dados, a transformação para um formato utilizável e a carga para sistemas de armazenamento como Data Warehouses.`
    },
    { 
      title: "Introdução à Inteligência Artificial", 
      content: `O que é Inteligência Artificial?
      IA envolve a criação de modelos de aprendizado de máquina e algoritmos que permitem que as máquinas aprendam a partir de dados e tomem decisões autônomas. A IA é usada em uma variedade de aplicativos, incluindo reconhecimento de padrões, análise preditiva e automação de processos.

      Aprendizado de Máquina (Machine Learning)
      O aprendizado de máquina é uma subárea da IA que utiliza algoritmos para analisar dados, identificar padrões e aprender com esses dados para fazer previsões ou tomar decisões sem intervenção humana. Ele é amplamente utilizado em sistemas de recomendação, diagnóstico médico e análise de fraudes.`
    },
    { 
      title: "Análise de Dados e Visualização", 
      content: `Análise Descritiva de Dados
      A análise descritiva de dados envolve sumarizar os dados para identificar padrões e tendências. Isso inclui métricas como média, mediana, desvio padrão e outras análises que ajudam a entender o comportamento de um negócio.

      Ferramentas de Visualização de Dados
      Ferramentas como Tableau, Power BI e D3.js são amplamente usadas para criar gráficos e dashboards que ajudam as empresas a visualizar e compreender seus dados de forma intuitiva, facilitando a tomada de decisões.

      Análise Preditiva com IA
      A análise preditiva usa algoritmos de IA para prever resultados futuros com base em dados históricos. As empresas usam esses modelos para prever vendas, identificar fraudes e otimizar inventários.`
    },
    { 
      title: "Integração de BI e IA para Decisões Estratégicas", 
      content: `BI e IA para Tomada de Decisão
      Integrando BI e IA, as empresas podem melhorar a tomada de decisões, prever tendências e identificar oportunidades de negócios. Ferramentas de BI alimentadas por IA podem automatizar a criação de relatórios e ajudar os gestores a identificar padrões significativos de maneira mais rápida.

      Casos de Uso de BI e IA
      - Previsão de Demanda: Utilizando IA para prever a demanda de produtos e ajustar os níveis de estoque.
      - Análise de Sentimentos: Usando IA para analisar opiniões de clientes em mídias sociais e fornecer insights sobre a satisfação do cliente.
      - Personalização: BI e IA ajudam a personalizar ofertas de produtos e serviços para os clientes, com base em seu comportamento e preferências.` 
    },
    { 
      title: "Desafios e Soluções em BI e IA", 
      content: `Desafios de Implementação de BI e IA
      A implementação de soluções de BI e IA pode enfrentar desafios, como a qualidade dos dados, a integração de sistemas, a escalabilidade e o custo de implementação. Além disso, pode ser difícil obter insights precisos se os dados não forem tratados e preparados corretamente.

      Soluções de BI e IA
      Para superar esses desafios, as empresas devem investir em governança de dados, treinamento de equipes e adoção de ferramentas flexíveis e escaláveis. O uso de plataformas em nuvem também pode ajudar a lidar com a escalabilidade e reduzir custos.`
    },
    { 
      title: "Casos de Uso Avançados em BI e IA", 
      content: `BI e IA no Varejo
      No setor de varejo, BI e IA são usados para otimizar o inventário, personalizar ofertas, prever tendências de vendas e analisar o comportamento dos consumidores.

      BI e IA em Saúde
      No setor da saúde, as soluções de BI e IA ajudam a melhorar o diagnóstico médico, prever surtos de doenças e personalizar tratamentos para os pacientes.

      BI e IA em Finanças
      No setor financeiro, BI e IA são usados para detectar fraudes, gerenciar riscos, otimizar investimentos e melhorar a experiência do cliente com serviços financeiros personalizados.` 
    },
    { 
      title: "Tendências Futuras em BI e IA", 
      content: `Automação com IA e BI
      A automação de processos de negócios usando IA e BI está se tornando cada vez mais comum. Isso inclui desde a automação de tarefas simples até a automação de decisões estratégicas.

      IA Explicável (XAI)
      A IA explicável está ganhando destaque, especialmente em negócios, pois permite que os modelos de IA expliquem suas decisões, tornando-os mais transparentes e confiáveis.

      BI em Tempo Real
      As soluções de BI em tempo real permitem que as empresas tomem decisões rápidas e baseadas em dados atualizados, utilizando tecnologias como streaming de dados e análise em tempo real.`
    },
    { 
      title: "Conclusão e Certificação", 
      content: `Este curso de Business Intelligence e Inteligência Artificial proporciona uma compreensão aprofundada das tecnologias e práticas essenciais para integrar BI e IA em negócios. Ele cobre desde os fundamentos até as últimas tendências e inovações na área.

      Ao concluir o curso, você obterá uma certificação que será um grande diferencial em sua carreira, com habilidades valiosas no mercado de trabalho, onde a demanda por especialistas em BI e IA continua a crescer.`
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

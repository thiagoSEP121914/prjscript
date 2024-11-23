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
      title: "Big Data & Analytics - Curso Completo", 
      content: `Introdução ao Big Data & Analytics
      O que é Big Data?
      O conceito de Big Data refere-se ao grande volume de dados gerados diariamente a partir de diversas fontes, como dispositivos móveis, redes sociais, sensores e sistemas de transações. A análise desses dados pode fornecer insights valiosos para a tomada de decisões estratégicas.
  
      Por que Big Data é importante?
      Big Data permite que empresas identifiquem tendências, padrões e associações para otimizar suas operações e melhorar a experiência do cliente. Empresas como Google, Amazon e Facebook usam Big Data para personalizar seus serviços e aumentar a eficiência.`
    },
    { 
      title: "Fundamentos de Big Data", 
      content: `Definição e Características de Big Data
      Big Data é caracterizado pelas "3 Vs": Volume, Velocidade e Variedade. Esses dados são gerados em grande quantidade, com uma velocidade de processamento acelerada e variando entre diferentes formatos (estruturados, semi-estruturados e não estruturados).
  
      Arquitetura de Big Data
      A arquitetura de Big Data envolve ferramentas e frameworks como Hadoop, Spark, e NoSQL para processar e armazenar dados em grande escala. Aprenda a estrutura de distribuição de dados e como esses frameworks podem ser usados para processamento em paralelo e análise em tempo real.`
    },
    { 
      title: "Tecnologias Utilizadas em Big Data", 
      content: `Hadoop e o ecossistema de Big Data
      Hadoop é uma das plataformas mais populares para o processamento e armazenamento de Big Data. Ele permite o processamento de dados em clusters distribuídos, o que facilita o manuseio de grandes volumes de dados de forma eficiente. Além disso, o Hadoop inclui componentes como o HDFS (Hadoop Distributed File System) e o MapReduce.
  
      Apache Spark
      Apache Spark é uma framework de processamento de dados em larga escala. Com maior velocidade que o Hadoop, o Spark é ideal para análise de dados em tempo real. Ele oferece APIs para processamento de dados em memória e análise avançada, como machine learning e processamento de gráficos.`
    },
    { 
      title: "Análise de Dados e Machine Learning", 
      content: `Análise Descritiva de Dados
      A análise descritiva envolve sumarizar e descrever os dados coletados para identificar padrões e tendências. Isso inclui métricas como média, mediana, desvio padrão, entre outras.
  
      Introdução ao Machine Learning
      O aprendizado de máquina (Machine Learning) é uma técnica usada para criar modelos que podem aprender a partir de dados e fazer previsões ou classificações. O Big Data é uma excelente fonte para alimentar algoritmos de Machine Learning, ajudando a melhorar a precisão dos modelos ao longo do tempo.
  
      Ferramentas de Visualização de Dados
      Ferramentas como Tableau, Power BI e D3.js são amplamente utilizadas para criar dashboards interativos e relatórios baseados em dados. Elas permitem que analistas visualizem insights e tomem decisões informadas de forma intuitiva.`
    },
    { 
      title: "Processamento de Dados em Tempo Real", 
      content: `Stream Processing com Apache Kafka
      Apache Kafka é uma plataforma de streaming que permite o processamento de dados em tempo real. Usado para monitoramento de eventos, como cliques em sites ou transações financeiras, o Kafka é amplamente utilizado para criar pipelines de dados em tempo real.
  
      Processamento de Dados em Tempo Real com Apache Flink
      Apache Flink é outra plataforma de processamento de dados em tempo real, ideal para aplicações que exigem baixa latência e alto desempenho. Ele pode ser integrado com o Hadoop e o Spark para uma análise de dados em tempo real mais robusta.`
    },
    { 
      title: "Casos de Uso em Big Data & Analytics", 
      content: `Big Data no Setor Financeiro
      No setor financeiro, Big Data é usado para detectar fraudes, analisar risco de crédito, otimizar investimentos e melhorar a experiência do cliente. Algoritmos de Machine Learning são aplicados para detectar padrões de comportamento em transações financeiras.
  
      Big Data na Saúde
      No setor da saúde, Big Data pode ser usado para melhorar diagnósticos, prever epidemias, personalizar tratamentos e otimizar a gestão de hospitais. O processamento de grandes volumes de dados de pacientes pode resultar em tratamentos mais eficazes e melhor qualidade de vida.
  
      Big Data no Varejo
      O varejo utiliza Big Data para analisar o comportamento de compra dos consumidores, otimizar estoques, melhorar o marketing personalizado e prever tendências de vendas. Com a análise de grandes volumes de dados, empresas podem oferecer uma experiência de compra mais personalizada e eficiente.`
    },
    { 
      title: "Tendências Futuras em Big Data & Analytics", 
      content: `Inteligência Artificial e Big Data
      A combinação de Big Data com Inteligência Artificial (IA) tem o potencial de transformar muitos setores. A IA pode automatizar processos de análise de dados, oferecendo insights em tempo real e permitindo decisões mais informadas e rápidas.
  
      IoT (Internet das Coisas) e Big Data
      A Internet das Coisas (IoT) é um dos principais impulsionadores do crescimento de Big Data. Dispositivos conectados geram grandes volumes de dados que podem ser analisados para melhorar a eficiência operacional, monitorar condições ambientais e otimizar processos de manufatura.`
    },
    { 
      title: "Conclusão e Certificação", 
      content: `O curso de Big Data & Analytics proporciona um conhecimento aprofundado sobre como manipular, processar e analisar grandes volumes de dados. Com uma base sólida nas tecnologias e ferramentas utilizadas no setor, você estará preparado para aplicar esses conceitos em desafios reais de análise de dados.
  
      Ao concluir o curso, você receberá uma certificação que pode ser um diferencial importante no seu desenvolvimento profissional, com habilidades valorizadas no mercado de trabalho.` 
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
        navigate('/pagina');
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

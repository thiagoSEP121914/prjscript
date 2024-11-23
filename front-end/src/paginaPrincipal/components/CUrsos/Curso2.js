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
      title: "Blockchain Avançado - Curso Completo", 
      content: `Introdução ao Blockchain Avançado
      O que é Blockchain?
      Blockchain é uma tecnologia que permite o registro descentralizado de transações de maneira segura e transparente. Cada transação é registrada em um bloco, e os blocos são encadeados para formar uma cadeia, garantindo integridade e imutabilidade.

      Por que Blockchain é importante?
      Blockchain é fundamental para garantir segurança em transações digitais sem a necessidade de intermediários, sendo utilizado em criptomoedas, contratos inteligentes, e outras aplicações descentralizadas. A tecnologia está transformando setores como finanças, saúde, supply chain e mais.`
    },
    { 
      title: "Fundamentos de Blockchain", 
      content: `Definição e Características de Blockchain
      Blockchain é caracterizado pela descentralização, imutabilidade e transparência. As transações são validadas por meio de algoritmos de consenso e uma vez registradas, não podem ser alteradas.

      Arquitetura de Blockchain
      A arquitetura de blockchain inclui nós (computadores participantes da rede), mineradores ou validadores, e o mecanismo de consenso que garante a validação das transações, como Proof-of-Work (PoW) ou Proof-of-Stake (PoS).`
    },
    { 
      title: "Tecnologias Utilizadas em Blockchain", 
      content: `Proof-of-Work (PoW)
      PoW é o algoritmo de consenso usado por blockchains como o Bitcoin. Ele requer que os mineradores resolvam um problema matemático complexo para validar transações e adicionar blocos à cadeia.

      Proof-of-Stake (PoS)
      PoS é uma alternativa ao PoW, onde os validadores são selecionados com base na quantidade de criptomoeda que possuem e estão dispostos a "apostar" como garantia. PoS é mais eficiente em termos de energia e escalabilidade.

      Plataformas de Blockchain
      Plataformas como Ethereum e Polkadot suportam a criação de contratos inteligentes e aplicações descentralizadas (DApps). Essas plataformas oferecem uma infraestrutura para programadores criarem e executarem contratos na blockchain.`
    },
    { 
      title: "Contratos Inteligentes e DApps", 
      content: `Contratos Inteligentes
      Contratos inteligentes são códigos executáveis na blockchain que facilitam transações automáticas sem a necessidade de intermediários. Eles são usados em diversas indústrias, como finanças, seguros e supply chain.

      DApps (Aplicações Descentralizadas)
      DApps operam sobre blockchains e utilizam contratos inteligentes para funcionar. Diferentemente de aplicações tradicionais, DApps não dependem de servidores centrais, tornando-os mais seguros e resistentes a censura.`
    },
    { 
      title: "Escalabilidade e Soluções de Camada 2", 
      content: `Desafios de Escalabilidade em Blockchain
      A escalabilidade é um desafio fundamental em blockchains, como o Ethereum, devido ao limite de transações por segundo (TPS). Isso pode resultar em congestionamento e taxas altas.

      Soluções de Escalabilidade
      Soluções de camada 2 como Rollups, Lightning Network, e Sharding são usadas para melhorar a eficiência de transações. Rollups permitem que transações sejam feitas fora da cadeia principal e os resultados sejam apenas registrados nela, aumentando a capacidade de processamento.
      Sharding divide a blockchain em várias partes menores (shards) que podem processar transações em paralelo, aumentando a escalabilidade da rede.`
    },
    { 
      title: "Governança em Blockchain", 
      content: `Modelos de Governança
      A governança em blockchain refere-se a como as mudanças no protocolo são decididas e implementadas. Existem modelos como:
      - Governança On-Chain: Alterações no protocolo são votadas e decididas pela comunidade, como no caso do Tezos.
      - Governança Off-Chain: As decisões são tomadas por um grupo centralizado ou fórum, mas com a participação da comunidade, como ocorre no Bitcoin.

      Desafios de Governança
      A coordenação de mudanças e a resolução de disputas podem ser desafiadoras em sistemas descentralizados, especialmente quando surgem divergências sobre a direção da rede.`
    },
    { 
      title: "Segurança e Privacidade em Blockchain", 
      content: `Segurança em Blockchain
      Blockchain é considerado seguro devido ao uso de criptografia e algoritmos de consenso. No entanto, ele não é imune a ataques, como ataques de 51% ou phishing.

      Privacidade em Blockchain
      Alguns blockchains, como o Monero e Zcash, utilizam técnicas avançadas de privacidade, como zk-SNARKs, para ocultar informações de transações, garantindo que apenas as partes envolvidas possam ver os detalhes da transação.`
    },
    { 
      title: "Casos de Uso Avançados em Blockchain", 
      content: `Blockchain em Finanças (DeFi)
      As Finanças Descentralizadas (DeFi) utilizam contratos inteligentes em blockchain para criar soluções financeiras sem intermediários, como empréstimos, trocas de criptomoedas, e mais.

      Blockchain na Saúde
      A tecnologia blockchain pode ser usada para garantir a privacidade e segurança dos dados de saúde, além de rastrear o fornecimento de medicamentos e dispositivos médicos.

      Blockchain no Supply Chain
      Blockchain pode ser usado para aumentar a transparência e rastreabilidade nas cadeias de suprimentos, permitindo que as empresas monitorem o fluxo de bens e detectem fraudes.`
    },
    { 
      title: "Tendências Futuras em Blockchain", 
      content: `Integração com IA e Blockchain
      A combinação de Inteligência Artificial (IA) com blockchain pode melhorar a eficiência das redes descentralizadas, fornecendo análise preditiva e automação em processos complexos.

      Blockchain e Computação Quântica
      A computação quântica pode ameaçar a segurança dos algoritmos de criptografia usados em blockchain, o que está levando a pesquisa de soluções criptográficas resistentes à computação quântica.

      Regulação de Blockchain
      A regulação de criptomoedas e blockchain é uma área em desenvolvimento. Os governos estão buscando formas de regulamentar o uso da tecnologia sem sufocar a inovação, com uma ênfase crescente na proteção contra crimes financeiros.`
    },
    { 
      title: "Conclusão e Certificação", 
      content: `O curso de Blockchain Avançado fornece uma compreensão profunda das tecnologias e conceitos essenciais para trabalhar com blockchain em um nível avançado. Ele cobre desde os fundamentos até as últimas tendências e inovações.

      Ao concluir o curso, você obterá uma certificação que pode ser um diferencial importante em sua carreira no setor de blockchain, onde a demanda por especialistas continua a crescer.`
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

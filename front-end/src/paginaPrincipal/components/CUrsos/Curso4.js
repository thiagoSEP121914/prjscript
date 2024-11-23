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
      title: "Cloud Computing - Curso Completo", 
      content: `Introdução ao Cloud Computing
      O que é Cloud Computing?
      Cloud Computing, ou computação em nuvem, refere-se ao uso de servidores remotos na internet para armazenar, gerenciar e processar dados, em vez de depender de servidores locais ou dispositivos pessoais.

      Por que a Nuvem é Importante?
      A computação em nuvem oferece flexibilidade, escalabilidade e acesso remoto aos recursos computacionais. Empresas podem reduzir custos de infraestrutura, melhorar a colaboração e acessar serviços de forma mais eficiente. A nuvem está transformando setores como tecnologia, saúde, educação e mais.`
    },
    { 
      title: "Fundamentos da Nuvem", 
      content: `Definição e Características da Nuvem
      A computação em nuvem é caracterizada pela elasticidade, escalabilidade e acessibilidade. Ela permite que empresas e usuários acessem recursos sob demanda, pagando apenas pelo que usam.

      Modelos de Serviço em Nuvem
      Os principais modelos de serviço em nuvem incluem:
      - IaaS (Infraestrutura como Serviço): Oferece recursos de infraestrutura como servidores, armazenamento e redes.
      - PaaS (Plataforma como Serviço): Fornece uma plataforma para o desenvolvimento e execução de aplicações.
      - SaaS (Software como Serviço): Oferece softwares prontos para uso através da nuvem, sem necessidade de instalação ou manutenção.`
    },
    { 
      title: "Modelos de Implantação em Nuvem", 
      content: `Modelos de Nuvem
      Existem diferentes modelos de implantação para atender às necessidades das organizações:
      - Nuvem Pública: Recursos compartilhados com outras organizações, acessíveis via internet pública (ex: AWS, Microsoft Azure, Google Cloud).
      - Nuvem Privada: Nuvem dedicada a uma única organização, geralmente implantada internamente ou por um provedor externo.
      - Nuvem Híbrida: Combinação de nuvens públicas e privadas, permitindo maior flexibilidade e otimização de recursos.

      Vantagens de cada Modelo
      A nuvem pública oferece baixo custo e escalabilidade. A nuvem privada oferece maior controle e segurança, enquanto a nuvem híbrida oferece flexibilidade para balancear custos e necessidades de segurança.`
    },
    { 
      title: "Arquitetura e Serviços da Nuvem", 
      content: `Arquitetura de Nuvem
      A arquitetura de nuvem envolve a configuração de recursos de rede, armazenamento, e processamento de dados. Ela é projetada para fornecer escalabilidade, redundância e alta disponibilidade.

      Serviços de Computação em Nuvem
      - Computação: Máquinas virtuais (VMs), containers e funções serverless para processamento de dados.
      - Armazenamento: Soluções de armazenamento escaláveis, como blocos de dados, objetos e arquivos.
      - Banco de Dados: Serviços gerenciados de banco de dados SQL e NoSQL para escalabilidade e alta performance.

      Exemplos de plataformas de nuvem incluem AWS (Amazon Web Services), Microsoft Azure e Google Cloud Platform.`
    },
    { 
      title: "Segurança em Cloud Computing", 
      content: `Segurança na Nuvem
      A segurança na nuvem envolve práticas para proteger os dados e recursos acessados pela internet. Isso inclui criptografia de dados, autenticação multifatorial, firewalls, e políticas de acesso.

      Desafios de Segurança
      Embora os provedores de nuvem invistam fortemente em segurança, as organizações ainda enfrentam desafios relacionados à proteção de dados sensíveis e conformidade regulatória. A segurança deve ser uma responsabilidade compartilhada entre o provedor de nuvem e o cliente.

      Boas Práticas de Segurança
      - Criptografia de dados em trânsito e em repouso.
      - Monitoramento constante e auditoria de acessos.
      - Implementação de políticas de acesso e controle rigorosos.`
    },
    { 
      title: "Gerenciamento de Recursos na Nuvem", 
      content: `Gerenciamento de Custos na Nuvem
      O gerenciamento de custos é uma consideração crítica em ambientes de nuvem. As empresas devem monitorar o uso de recursos para evitar custos excessivos e otimizar a alocação de recursos.

      Ferramentas de Gerenciamento
      - Ferramentas de monitoramento de desempenho e custo, como AWS CloudWatch, Google Cloud Monitoring e Azure Monitor.
      - Automação de escalabilidade para ajustar recursos conforme a demanda.

      Estratégias de Gerenciamento
      - Implementação de orçamentos e alertas de custo.
      - Uso de instâncias reservadas para economizar em longo prazo.`
    },
    { 
      title: "Serviços de Computação em Nuvem para Desenvolvimento de Aplicações", 
      content: `Desenvolvimento na Nuvem
      Plataformas de nuvem oferecem uma variedade de ferramentas para desenvolvimento de aplicações, incluindo PaaS e recursos de containerização como Docker e Kubernetes.

      Benefícios para os Desenvolvedores
      - Escalabilidade automática: as aplicações podem ser dimensionadas automaticamente com base na demanda.
      - CI/CD: integração contínua e entrega contínua com ferramentas na nuvem como Jenkins, GitLab CI e AWS CodePipeline.

      Exemplos de Ferramentas
      - AWS Lambda (serverless)
      - Google Cloud Functions
      - Azure Functions`
    },
    { 
      title: "Tendências Futuras em Cloud Computing", 
      content: `Computação Serverless
      A computação serverless permite que os desenvolvedores executem código sem se preocupar com a infraestrutura subjacente. Isso permite uma maior flexibilidade e menor custo de operação.

      Nuvem de Baixa Latência
      A computação em nuvem está evoluindo para suportar aplicações de baixa latência, como realidade aumentada, jogos em nuvem e inteligência artificial em tempo real.

      Inteligência Artificial e Nuvem
      A integração da IA com a nuvem está crescendo, permitindo que as empresas aproveitem modelos de aprendizado de máquina sem a necessidade de infraestrutura local.

      Quantum Computing e Nuvem
      A computação quântica na nuvem é uma tendência emergente, com plataformas como IBM Q e AWS Braket permitindo o acesso a computadores quânticos.`
    },
    { 
      title: "Conclusão e Certificação", 
      content: `O curso de Fundamentos de Cloud Computing oferece uma compreensão abrangente das tecnologias e práticas essenciais para trabalhar com computação em nuvem. Ele aborda desde os conceitos básicos até as tendências mais recentes na indústria.

      Ao concluir o curso, você obterá uma certificação que demonstrará suas habilidades no campo da computação em nuvem, preparando-o para uma carreira em um setor em rápido crescimento.`
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

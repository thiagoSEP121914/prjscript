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
      title: "Cibersegurança - Curso Completo", 
      content: `Introdução à Cibersegurança
      O que é Cibersegurança?
      Cibersegurança refere-se à proteção de sistemas, redes e dados contra ataques digitais, danos ou acessos não autorizados. Envolve práticas, tecnologias e processos para garantir a confidencialidade, integridade e disponibilidade da informação.

      Por que a Cibersegurança é Crucial?
      Em um mundo cada vez mais digital, as ameaças cibernéticas estão em constante evolução, e uma violação de segurança pode ter consequências devastadoras para as organizações. A cibersegurança ajuda a proteger dados sensíveis, prevenir ataques e garantir a continuidade dos negócios.`
    },
    { 
      title: "Fundamentos de Cibersegurança", 
      content: `Princípios Básicos de Cibersegurança
      A cibersegurança se baseia em três princípios principais:
      - Confidencialidade: Garantir que a informação seja acessível apenas por pessoas autorizadas.
      - Integridade: Assegurar que os dados não sejam alterados ou corrompidos de maneira não autorizada.
      - Disponibilidade: Garantir que os sistemas e dados estejam acessíveis quando necessário.

      Tipos Comuns de Ameaças Cibernéticas
      - Malware: Programas maliciosos, como vírus e ransomware, que prejudicam sistemas.
      - Phishing: Técnicas fraudulentas para obter dados pessoais, como senhas ou números de cartão de crédito.
      - Ataques DDoS (Distributed Denial of Service): Tentativas de sobrecarregar um sistema com tráfego para torná-lo inacessível.
      - Roubo de Identidade: O uso não autorizado de informações pessoais para cometer fraudes.`
    },
    { 
      title: "Ameaças Cibernéticas e Vulnerabilidades", 
      content: `Ameaças Internas e Externas
      As ameaças cibernéticas podem ser tanto internas (de funcionários ou parceiros de confiança) quanto externas (ataques de hackers). As ameaças internas podem ser difíceis de detectar, já que os invasores têm acesso a redes e sistemas legítimos.

      Vulnerabilidades Comuns em Sistemas
      As vulnerabilidades em sistemas de TI são frequentemente causadas por falhas de segurança em software, configurações inadequadas ou falta de atualização de sistemas. Ferramentas de análise de vulnerabilidades podem ser usadas para identificar riscos antes que eles sejam explorados por atacantes.

      Exemplos de Vulnerabilidades:
      - Sistemas desatualizados
      - Senhas fracas
      - Falta de criptografia
      - Configurações inseguras de redes e firewalls`
    },
    { 
      title: "Controles de Segurança em Cibersegurança", 
      content: `Controles de Acesso
      Os controles de acesso são usados para garantir que apenas usuários autorizados possam acessar sistemas e dados sensíveis. Isso inclui autenticação multifatorial (MFA), controle de acesso baseado em funções (RBAC) e senhas fortes.

      Criptografia
      A criptografia é uma técnica de segurança essencial para proteger a integridade e a confidencialidade dos dados. Ela é usada para codificar informações, garantindo que apenas pessoas autorizadas possam acessá-las.

      Firewalls e Sistemas de Detecção de Intrusão (IDS)
      Firewalls são usados para monitorar e controlar o tráfego de rede, bloqueando acessos não autorizados. Já os IDS (Intrusion Detection Systems) detectam atividades suspeitas que possam indicar uma tentativa de invasão.

      Backup e Recuperação de Dados
      A realização de backups regulares é uma prática fundamental em cibersegurança. Caso um ataque, como ransomware, ocorra, ter backups seguros permite a recuperação dos dados sem pagar resgates.` 
    },
    { 
      title: "Cibersegurança em Nuvem", 
      content: `Segurança em Ambientes de Nuvem
      A computação em nuvem oferece flexibilidade e escalabilidade, mas também apresenta desafios em termos de segurança. As empresas precisam garantir que os dados armazenados na nuvem estejam protegidos contra acessos não autorizados, com o uso de criptografia, autenticação forte e controles de acesso adequados.

      Modelos de Implantação de Nuvem
      Existem três principais modelos de implantação de nuvem:
      - Nuvem Pública: Infraestrutura compartilhada com outros clientes.
      - Nuvem Privada: Infraestrutura dedicada para uma única organização.
      - Nuvem Híbrida: Combinação de nuvem pública e privada.

      Provedores de Serviços de Nuvem
      Os provedores de serviços de nuvem, como Amazon Web Services (AWS), Microsoft Azure e Google Cloud, oferecem uma variedade de soluções de segurança para ajudar a proteger os dados e a infraestrutura na nuvem.` 
    },
    { 
      title: "Resposta a Incidentes de Segurança", 
      content: `Plano de Resposta a Incidentes
      Ter um plano de resposta a incidentes bem definido é essencial para lidar rapidamente com violações de segurança. Esse plano deve incluir a identificação de incidentes, comunicação com as partes interessadas, contenção do ataque, investigação e recuperação.

      Tipos Comuns de Incidentes de Segurança
      - Vazamento de Dados: Quando dados sensíveis são acessados ou divulgados sem autorização.
      - Ransomware: Quando os dados são sequestrados por cibercriminosos, exigindo um pagamento para liberá-los.
      - Acesso não autorizado: Quando um atacante ganha acesso a sistemas sem permissão.

      Como Mitigar e Responder a Incidentes
      A mitigação inclui a implementação de medidas preventivas e a detecção precoce de ataques, enquanto a resposta envolve a contenção, erradicação e recuperação após um ataque. Uma comunicação eficaz e transparente é essencial durante todo o processo.` 
    },
    { 
      title: "Gestão de Riscos em Cibersegurança", 
      content: `Avaliação de Riscos em Cibersegurança
      A avaliação de riscos é uma parte fundamental da cibersegurança, pois ajuda as organizações a identificar, avaliar e priorizar riscos, e a implementar controles adequados para mitigá-los. Isso pode incluir a avaliação de vulnerabilidades, ameaças e impactos potenciais.

      Frameworks de Cibersegurança
      Frameworks como NIST Cybersecurity Framework, ISO/IEC 27001 e CIS Controls são usados para ajudar as empresas a gerenciar seus riscos e implementar boas práticas de segurança.

      Plano de Continuidade de Negócios
      A continuidade de negócios envolve garantir que os processos essenciais da organização possam continuar funcionando durante e após um incidente de segurança. Isso inclui a criação de planos de recuperação de desastres e contingências.`
    },
    { 
      title: "Cibersegurança em Diferentes Setores", 
      content: `Cibersegurança no Setor Financeiro
      No setor financeiro, a cibersegurança é crucial devido à sensibilidade dos dados e à necessidade de proteger transações financeiras. A proteção contra fraudes financeiras, ataques a sistemas bancários e roubo de dados pessoais são prioridades.

      Cibersegurança na Saúde
      O setor de saúde lida com dados sensíveis, como registros médicos, e precisa de controles rigorosos para evitar vazamentos de dados de pacientes e ataques cibernéticos a sistemas de saúde, como hospitais e clínicas.

      Cibersegurança em Governos
      Os governos também são alvos frequentes de ataques cibernéticos. A segurança de informações confidenciais e a proteção de infraestruturas críticas, como redes de energia e comunicações, são primordiais para a segurança nacional.`
    },
    { 
      title: "Tendências Futuras em Cibersegurança", 
      content: `Inteligência Artificial e Cibersegurança
      A inteligência artificial (IA) está sendo cada vez mais utilizada para melhorar a detecção de ameaças e automatizar processos de resposta a incidentes. Algoritmos de IA podem identificar padrões de comportamento suspeitos e responder rapidamente a ataques.

      Computação Quântica e Desafios de Segurança
      A computação quântica tem o potencial de quebrar muitas das técnicas de criptografia atualmente usadas. Isso representa um grande desafio para a cibersegurança, mas também cria novas oportunidades para desenvolver métodos de segurança mais avançados.

      Automação em Cibersegurança
      A automação é uma tendência crescente em cibersegurança, com ferramentas que automatizam a detecção, resposta e mitigação de ataques, melhorando a eficiência e a velocidade de reação das equipes de segurança.`
    },
    { 
      title: "Conclusão e Certificação", 
      content: `Este curso de Cibersegurança fornece uma compreensão completa dos conceitos, práticas e tecnologias essenciais para proteger sistemas e dados contra ameaças cibernéticas. Ele aborda desde os fundamentos da segurança até as tecnologias emergentes que estão moldando o futuro da cibersegurança.

      Ao concluir o curso, você receberá uma certificação que validará suas habilidades em cibersegurança e permitirá que você contribua para a proteção de dados e sistemas em qualquer organização.`
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

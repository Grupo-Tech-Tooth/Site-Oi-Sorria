import React from 'react';
import ProcedureStep from '../../../components/ProcedureStep/ProcedureStep';
import styles from './ProcedureList.module.css';
import chat from "../../../utils/assets/chat.png";
import tooth from "../../../utils/assets/tooth.png";
import house from "../../../utils/assets/house.png";

const ProcedureList = ({ id }) => {
  const steps = [
    {
      id: 1,
      title: 'Consultoria Personalizada',
      icon: chat,
      description: 'Realizamos uma consulta detalhada para entender suas necessidades e traçar o melhor plano de tratamento para o seu sorriso.'
    },
    {
      id: 2,
      title: 'Prototipagem do Sorriso',
      icon: tooth,
      description: 'Apresentamos uma visualização do tratamento proposto, permitindo que você veja como seu sorriso ficará ao final do processo.',
      highlight: true
    },
    {
      id: 3,
      title: 'Início do Tratamento',
      icon: house,
      description: 'Damos início ao seu tratamento, com acompanhamento profissional em todas as etapas para garantir o melhor resultado.'
    },
    {
      id: 4,
      title: 'Avaliação de Resultados',
      icon: chat,
      description: 'Ao longo do tratamento, realizamos avaliações para garantir que os objetivos estão sendo alcançados e ajustar detalhes, se necessário.'
    },
    {
      id: 5,
      title: 'Ajustes e Personalização',
      icon: tooth,
      description: 'Fazemos os ajustes necessários para garantir que o tratamento seja o mais adequado e personalizado possível.',
      highlight: true
    },
    {
      id: 6,
      title: 'Conclusão e Manutenção',
      icon: house,
      description: 'Finalizamos o tratamento e orientamos sobre cuidados e manutenção para que você continue com um sorriso saudável e bonito.'
    },
  ];

  return (
    <section className={styles.procedureListContainer} id={id}>
      <h2 className={styles.sectionTitle}>
        <img src={tooth} alt="Ícone de Dente" className={styles.icon} />
        Nossos Procedimentos
      </h2>
      <div className={`${styles.steps} row`}>
        {steps.map((step) => (
          <ProcedureStep
            key={step.id}
            title={step.title}
            icon={step.icon}
            description={step.description}
            highlight={step.highlight}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcedureList;
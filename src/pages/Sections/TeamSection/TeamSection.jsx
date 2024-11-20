import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TeamMember from '../../../components/TeamMember/TeamMember';
import styles from './TeamSection.module.css';
import dentista from '../../../utils/assets/dentist.png';

const TeamSection = ({ id }) => {
  const teamMembers = [
    { id: 1, image: dentista, name: 'Dra. Yeda Uyema', description: 'Especialista em clínica geral, destaca-se pelo atendimento humanizado e atenção aos detalhes.' },
    { id: 2, image: dentista, name: 'Dra. Suele Silva', description: 'Especialista em ortodontia, alia tecnologia avançada a um atendimento amigável.' },
    { id: 3, image: dentista, name: 'Dra. Bruna Lima', description: 'Especialista em endodontia, é reconhecida por sua habilidade em tratamentos de canal.' },
    { id: 4, image: dentista, name: 'Dr. Hsu Uyema', description: 'Especializado em clínica geral, cria um ambiente acolhedor e divertido para crianças.' },
    { id: 5, image: dentista, name: 'Dra. Gabriela Rosa', description: 'Especialista em implantodontia, é focada na recuperação de sorrisos.' },
    { id: 6, image: dentista, name: 'Dra. Thalita Victoria', description: 'Especialista em implantodontia, realiza implantes para devolver a autoestima aos pacientes.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : 3;

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - slidesToShow ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? teamMembers.length - slidesToShow : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className={styles.teamSection} id={id}>
      <h2 className={styles.sectionTitle}>Equipe</h2>
      <div className={styles.carouselContainer}>
        <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevSlide}>&lt;</button>
        <div className={styles.carouselWrapper}>
          <div
            className={styles.carousel}
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none',
            }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamMemberWrapper}>
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
};
TeamSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TeamSection;

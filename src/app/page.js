'use client'
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

export default function Home() {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0.1 });
const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: false, threshold: 0.1 });
const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <ParallaxProvider>
      <Main>
        {/*SECCION 1 */}
        <Section ref={ref1}>
          <BackgroundImageContainer>
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container10-881d2f59.jpg?v=912baa28"
              alt="Background Image 1"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 7, delay:1, repeat: Infinity, repeatType: "reverse"}}
            />
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container10-960dbb54.jpg?v=912baa28"
              alt="Background Image 2"
              initial={{  opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 7, delay:1, repeat: Infinity, repeatType: "reverse"}}
            />
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container10-587d4d02.jpg?v=912baa28https://0a11683f6f701c36.demo.carrd.co/assets/images/container10-960dbb54.jpg?v=912baa28"
              alt="Background Image 3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 7, delay:1, repeat: Infinity, repeatType: "reverse" }}
            />
          </BackgroundImageContainer>
          <Overlay>
           <AnimatedTitle
              initial={{ y: -100, opacity: 0 }}
              animate={inView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Everto
            </AnimatedTitle>
            <AnimatedSubtitle
              initial={{ y: -100, opacity: 0 }}
              animate={inView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
            </AnimatedSubtitle>
            {/* Botón para ir a la sección 2 */}
            <Link to="section2" smooth={true} duration={500}>
              <ButtonScrollDown>
                ICONO BOTON {/* Asegúrate de tener FontAwesome o reemplaza este ícono */}
              </ButtonScrollDown>
            </Link>
          </Overlay>
        </Section>
        {/*SECCION 2 */}
        <Section ref={ref4} id="section2">
           <AnimatedTitle
              initial={{ y: -200, opacity: 0 }}
              animate={inView4 ? { y: -100, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Sapien
            </AnimatedTitle>
            <AnimatedSubtitle
              initial={{ y: -200, opacity: 0 }}
              animate={inView4 ? { y: -100, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
          </AnimatedSubtitle>
          <SubtitlesGrid>
    <SmallSubtitle
      initial={{ opacity: 0 }}
      animate={inView4 ? { opacity: 1 } : {}}
      transition={{ ease: "easeOut", duration: 1 }}
    >
              Subtítulo 1
              <AnimatedSubtitle
              initial={{ y: 0, opacity: 0 }}
              animate={inView4 ? { y: 50, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
          </AnimatedSubtitle>
    </SmallSubtitle>
    <SmallSubtitle
      initial={{ opacity: 0 }}
      animate={inView4 ? { opacity: 1 } : {}}
      transition={{ ease: "easeOut", duration: 1 }}
    >
              Subtítulo 2
              <AnimatedSubtitle
              initial={{ y: 0, opacity: 0 }}
              animate={inView4 ? { y: 50, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
          </AnimatedSubtitle>
      
    </SmallSubtitle>
    <SmallSubtitle
      initial={{ opacity: 0 }}
      animate={inView4 ? { opacity: 1 } : {}}
      transition={{ ease: "easeOut", duration: 1 }}
    >
              Subtítulo 3
              <AnimatedSubtitle
              initial={{ y: 0, opacity: 0 }}
              animate={inView4 ? { y: 50, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
          </AnimatedSubtitle>
    </SmallSubtitle>
          </SubtitlesGrid>
        </Section>
        {/*SECCION 3 */}
        <Section ref={ref2}>
          <BackgroundImageContainer>
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container15-cbe1b1b6.jpg?v=912baa28"
              alt="Background Image 1"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 11.25, delay:1, repeat: Infinity, repeatType: "reverse"}}
            />
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container15-f269efbb.jpg?v=912baa28"
              alt="Background Image 2"
              initial={{  opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 11.25, delay:1, repeat: Infinity, repeatType: "reverse"}}
            />
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container15-97608726.jpg?v=912baa28"
              alt="Background Image 3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 11.25, delay:1, repeat: Infinity, repeatType: "reverse" }}
            />
          </BackgroundImageContainer>
          <Overlay>
            <AnimatedTitle
              initial={{ y: -100, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Actus
            </AnimatedTitle>
            <AnimatedSubtitle
              initial={{ y: -100, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros. Socis natoque penatibus et magnis. Maecenas pharetra convallis posuere adipiscing elit. Duis dapibus rutrum facilisis.
            </AnimatedSubtitle>
          </Overlay>
        </Section>
        {/*Seccion 4 */}
        <Section ref={ref5}>
           <AnimatedTitle
              initial={{ y: -200, opacity: 0 }}
              animate={inView5 ? { y: -100, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Sapien
            </AnimatedTitle>
            <AnimatedSubtitle
              initial={{ y: -200, opacity: 0 }}
              animate={inView5 ? { y: -100, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
          </AnimatedSubtitle>
          <SubtitlesGrid>
    <SmallSubtitle
      initial={{ opacity: 0 }}
      animate={inView5 ? { opacity: 1 } : {}}
      transition={{ ease: "easeOut", duration: 1 }}
    >
              Subtítulo 1
              <AnimatedSubtitle
              initial={{ y: 0, opacity: 0 }}
              animate={inView5 ? { y: 50, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
          </AnimatedSubtitle>
    </SmallSubtitle>
    <SmallSubtitle
      initial={{ opacity: 0 }}
      animate={inView5 ? { opacity: 1 } : {}}
      transition={{ ease: "easeOut", duration: 1 }}
    >
              Subtítulo 2
              <AnimatedSubtitle
              initial={{ y: 0, opacity: 0 }}
              animate={inView5 ? { y: 50, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
          </AnimatedSubtitle>
      
    </SmallSubtitle>
    <SmallSubtitle
      initial={{ opacity: 0 }}
      animate={inView5 ? { opacity: 1 } : {}}
      transition={{ ease: "easeOut", duration: 1 }}
    >
              Subtítulo 3
              <AnimatedSubtitle
              initial={{ y: 0, opacity: 0 }}
              animate={inView5 ? { y: 50, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros.
          </AnimatedSubtitle>
    </SmallSubtitle>
          </SubtitlesGrid>
        </Section>
        {/*Seccion 5 */}
        <Section ref={ref3}>
             <BackgroundImageContainer>
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container15-cbe1b1b6.jpg?v=912baa28https://0a11683f6f701c36.demo.carrd.co/assets/images/container07-85c814fd.jpg?v=912baa28"
              alt="Background Image 1"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 11.25, delay:1, repeat: Infinity, repeatType: "reverse", }}
            />
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container07-6eaeca76.jpg?v=912baa28"
              alt="Background Image 2"
              initial={{  opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 11.25, delay:1, repeat: Infinity, repeatType: "reverse"}}
            />
            <BackgroundImage
              src="https://0a11683f6f701c36.demo.carrd.co/assets/images/container07-d8e40bfb.jpg?v=912baa28"
              alt="Background Image 3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 11.25, delay:1, repeat: Infinity, repeatType: "reverse" }}
            />
          </BackgroundImageContainer>
          <Overlay>
            <AnimatedTitle
              initial={{ y: -100, opacity: 0 }}
              animate={inView3 ? { y: 0, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Porta
            </AnimatedTitle>
            <AnimatedSubtitle
              initial={{ y: -100, opacity: 0 }}
              animate={inView3 ? { y: 0, opacity: 1 } : {}}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              Interdum varius vincit omnia dum spiro lorem ipsum dolor veroeros. Socis natoque penatibus et magnis. Maecenas pharetra convallis posuere adipiscing elit. Duis dapibus rutrum facilisis.
            </AnimatedSubtitle>
          </Overlay>
        </Section>
        <Section>
          <h2>Section 6</h2>
        </Section>
      </Main>
    </ParallaxProvider>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: #212224;
  &:nth-child(even) {
    background: #212224;
  }
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const BackgroundImage = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
`;

const AnimatedTitle = styled(motion.h1)`
  font-size: 10rem;
  margin: 0;
  color: yellow;
`;

const AnimatedSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-top: 1rem;
  color: gray;
`;

const SubtitlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

const SmallSubtitle = styled(motion.p)`
  font-size: 1rem;
  color: gray;
  text-align: center;
`;

const ButtonScrollDown = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  bottom: 20px;
  animation: bounce 2s infinite;
  //ANIMACION SI QUIERES
  /* @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  } */
`;

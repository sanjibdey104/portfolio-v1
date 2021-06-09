import styled from 'styled-components';
import Image from 'next/image';


const Homepage = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const Intro = styled.section`

  min-height: 25rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  justify-content:center;
  align-items: center;
  gap: 2rem;
  overflow: hidden;

  .about-self {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0 0.5rem;

    transform: translateX(0%);
    animation-name: slideIn;
    animation-duration: 1.5s;
    animation-iteration-count: 1;

    @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0%);
    }
    }

    h2 {
      font-size: calc(1.2rem + 1vw);

      span {
        color: ${({theme}) => theme.primary};
        font-size: calc(1.75rem + 1.2vw);
        display: block;
        text-shadow: inset 0 0 3px rgba(0,0,0,0.5);
      }
    }
  }

  .hero-image {
    position: relative;

    &::after {
      content: "";
      max-height: 20rem;
      max-width: 26rem;
      border-radius: 1rem;
      z-index: -1;

      background-color: ${({theme}) => theme.primary};
      padding: 1rem;
      box-shadow: inset 0 0 8px rgba(0,0,0,0.5);
      border-top-right-radius: 50%;
      border-bottom-left-radius: 50%;

      position: absolute;
      top: 5rem;
      left: 0;
      right: 0;
      bottom: 0;
    }

    img {
    transform: translateY(0%);
    animation-name: wave;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    border-bottom-left-radius: 60%;
    }
    
  }

  @keyframes wave {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0%);
    }
  }
`

const Experience = styled.section`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Home = () => {

  return (
    <Homepage>

        <Intro>
        <div className="about-self">
          <h2>Hey, I'm <span>Sanjib</span></h2>
          <h2>A front-end developer based in Delhi</h2>
        </div>

        <div className="hero-image">
        <Image src="/waving.png" height={440} width={390} />
        </div>
      </Intro>

      <Experience>
        <h2>Experience</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet autem dolor expedita a ex?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet autem dolor expedita a ex?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam eveniet nemo debitis veritatis quaerat! Ratione, suscipit excepturi. Nulla et, magni delectus incidunt laudantium in architecto assumenda. Repellat fugiat quibusdam repellendus.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam eveniet nemo debitis veritatis quaerat! Ratione, suscipit excepturi. Nulla et, magni delectus incidunt laudantium in architecto assumenda. Repellat fugiat quibusdam repellendus.</p>
      </Experience>

    </Homepage>
  )
}


export default Home;
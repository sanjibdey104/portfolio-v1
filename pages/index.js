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
`

export default function Home() {
  return (
    <Homepage>

      <Intro>
        <div className="about-self">
          <h2>Hey, I'm <span>Sanjib</span></h2>
          <h2>A front-end developer based in Delhi</h2>
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

import { FiBookOpen } from "react-icons/fi";
import styled from "styled-components";

const StyledCurrentlyReading = styled.section`
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  line-height: 1;

  a {
    display: inline-block;
  }

  .current-read-stat {
    .pulsating-dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-right: 8px;

      background-color: var(--green-100);
      border-radius: 50%;

      box-shadow: 0 0 0 var(--green-100);
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 var(--green-100);
      }
      70% {
        box-shadow: 0 0 0 8px rgba(255, 0, 0, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
      }
    }
  }
`;

const CurrentlyReading = () => {
  return (
    <StyledCurrentlyReading className="flex-row">
      <section className="current-read-stat">
        <div class="pulsating-dot"></div>
        <span>Currently reading: </span>
        <a
          className="current-title-link"
          href="https://www.goodreads.com/book/show/11588.The_Shining"
          target="_blank"
        >
          The Shining.
        </a>
      </section>

      <section className="goodreads-connect-cta">
        <span>Let's connect on</span>{" "}
        <a
          className="goodreads-profile-link"
          href="https://www.goodreads.com/user/show/108653272-sanjib-dey"
          target="_blank"
        >
          Goodreads.
        </a>
      </section>
    </StyledCurrentlyReading>
  );
};

export default CurrentlyReading;

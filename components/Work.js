import styled from "styled-components";

const WorkComponent = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .company-list {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .company {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .company-info {
        display: flex;
        flex-direction: column;

        .company-name {
          color: var(--fg-bold);
          font-weight: 600;
          font-size: 1.2rem;
        }

        .job-duration {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--fg-lighter);
        }
      }

      .job-desc {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p,
        li,
        h4 {
          font-size: 0.9rem;
        }

        .tools-desc {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          h4 {
            color: var(--fg-lightest);
            font-weight: 400;
          }

          .tools-used {
            color: var(--fg-lighter);
            font-weight: 500;
          }
        }
      }
    }
  }
`;

const Work = () => {
  return (
    <WorkComponent>
      <ul className="company-list">
        <li className="company qoruz">
          <div className="company-info">
            <p className="company-name">Qoruz</p>

            <p className="job-duration">Oct 2021 - Present</p>
          </div>

          <div className="job-desc">
            <p>
              Working as a Senior Frontend Developer primarily focused on React
              JS.
            </p>
            <p>Delivering design to code with complete ownership.</p>

            <div className="tools-desc">
              <h4>Tools used:</h4>

              <p className="tools-used">
                JavaScript, TypeScript, ReactJS, NextJS, Bootstrap
              </p>
            </div>
          </div>
        </li>

        <li className="company tcs">
          <div className="company-info">
            <p className="company-name">TCS (Tata Consultancy Services)</p>

            <p className="job-duration">Sep 2017 - Jan 2020</p>
          </div>

          <div className="job-desc">
            <p>Worked as a Middleware Engineer for a UK based retail client.</p>

            <p>
              - Primarily focused on acquiring business-level understanding and
              investigate data flow and mapping logic issues
            </p>

            <p>
              - Work in collaboration and ensure proper handover with engineers
              from DBMS, Inventory Management, eCommerce Team
            </p>

            <p>- Track, troubleshoot and document recurring production bugs</p>

            <p>- Engaged with Development Team over DevOps migration phase</p>

            <div className="tools-desc">
              <h4>Tools used:</h4>

              <p className="tools-used">
                IBM IB, WMS, IBM Tivoli Monitoring, Mule, Jenkins
              </p>
            </div>
          </div>
        </li>
      </ul>
    </WorkComponent>
  );
};

export default Work;

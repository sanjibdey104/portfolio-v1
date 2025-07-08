import styled from "styled-components";

const StyledWorkHistory = styled.ul`
  gap: 4rem;

  .company {
    gap: 1rem;

    .company-info {
      .company-name {
        font-size: 1.2rem;
      }

      .job-duration {
        font-size: 0.8rem;
        color: var(--fg-lighter);
      }
    }

    .job-desc {
      gap: 1rem;

      p,
      li,
      h4 {
        font-size: 0.9rem;
      }

      .tools-desc {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .desc-title {
          color: var(--fg-lighter);
        }

        .tools-used {
          color: var(--fg-deep);
          font-weight: 500;
        }
      }
    }
  }
`;

const WorkHistory = () => {
  return (
    <StyledWorkHistory className="flex-col">
      <li className="company flex-col qoruz">
        <div className="company-info flex-col">
          <h3 className="company-name">Qoruz</h3>

          <p className="job-duration">Oct 2021 - Present</p>
        </div>

        <div className="job-desc flex-col">
          <p>
            Working as a Senior Frontend Developer primarily working with React
            JS.
          </p>
          <p>Delivering design to code with complete ownership.</p>

          <div className="tools-desc">
            <p className="desc-title">Tools used:</p>

            <p className="tools-used">
              JavaScript, TypeScript, React.js, Next.js, Bootstrap
            </p>
          </div>
        </div>
      </li>

      <li className="company flex-col tcs">
        <div className="company-info flex-col">
          <h3 className="company-name">TCS (Tata Consultancy Services)</h3>

          <p className="job-duration">Sep 2017 - Jan 2020</p>
        </div>

        <div className="job-desc flex-col">
          <p>Worked as a Middleware Engineer for a UK based retail client.</p>

          <p>
            - Acquired business flow understanding to assist with data flow and
            mapping logic issues.
          </p>

          <p>
            - Work with DBMS, Inventory and E-Commerce Teams to help
            troubleshoot and document recurring production bugs.
          </p>

          <div className="tools-desc">
            <p className="desc-title">Tools used:</p>

            <p className="tools-used">
              IBM IB, WMS, IBM Tivoli Monitoring, Mule, Jenkins
            </p>
          </div>
        </div>
      </li>
    </StyledWorkHistory>
  );
};

export default WorkHistory;

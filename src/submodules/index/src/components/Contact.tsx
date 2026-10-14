import React from 'react'
import reactLogo from '/images/react.svg'
import viteLogo from '/images/vite.svg'
import email from '/images/MailIcon.png'
import patreonLogo from '/images/PATREON_SYMBOL_1_BLACK_RGB.png'

interface incomingParams{}

const Contact: React.FC<incomingParams> = () => {
    return (
    <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Haven't made yet, i guess</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>First page for free!  </p>
          <ul>
            <li>
              <a href="https://github.com/jepuli124" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub 
              </a>
            </li>
            <li>
              
              <a href="mailto:jepuli124@outlook.com" target="_blank">
                <img src={email} alt="" style={{height: "25px", width: "25px"}}/>
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >

                </svg>
                Email
              </a>
            </li>
            <li>
              <a href="https://patreon.com/MincedMeatGoblin?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" target="_blank">
                <img src={patreonLogo} alt="" style={{height: "25px", width: "25px"}}/>
                
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >

                </svg>
                Patreon
              </a>
            </li>
            
          </ul>
        </div>
      </section>
    )
}

export default Contact
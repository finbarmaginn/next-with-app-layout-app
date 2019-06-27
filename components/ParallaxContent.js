import React from 'react'
import { Parallax } from 'react-parallax'

import plx2 from '../static/plx2.jpg'
import plx3 from '../static/plx3.jpg'

class ParallaxContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="parallax-wrap">
          <Parallax
            bgImage={plx3}
            strength={500}
            blur={{ min: -5, max: 5 }}
          >
            <div className="lax-item wrapper"><h2>Parallax content goes here</h2></div>
          </Parallax>
          <Parallax
            bgImage={plx2}
            strength={500}
          >
            <div className="lax-item wrapper">
              <h2>More content here</h2>
              <p>this is a paragraph tag</p>
            </div>
          </Parallax>
          <Parallax
            bgImage={plx3}
            strength={500}
          >
            <div className="lax-item wrapper">
              <h2>More content here</h2>
              <p>this is a paragraph tag</p>
              <ul>
                <li>This is</li>
                <li>An unordered</li>
                <li>list</li>
              </ul>
            </div>
          </Parallax>
        </div>
        <style jsx global>
          {`
          div.react-parallax-content {
            background: rgba(255, 255, 255, 0.7);
            display:block;
            max-width:320px;
            padding:calc(100vh / 14) 10px;
            text-align:center;
            margin:calc(100vh / 3.5) auto;
          }
          img.react-parallax-bgimage {
            height: auto !important;
            width: 110vw !important;
          }
          div.react-parallax-content ul {
            text-align: left;
          }
          @media screen and (max-width:720px){
            img.react-parallax-bgimage {
              {/* width: 130vw !important; */}
            }
          }
          @media screen and (max-width:520px){
            img.react-parallax-bgimage {
              {/* width: 260vw !important; */}
            }
          }
        `}
        </style>

      </div>
    )
  }
}

export default ParallaxContent
import { Parallax } from 'react-parallax'
import plx1 from '../static/plx1.jpg'
import plx2 from '../static/plx2.jpg'
import plx3 from '../static/plx3.jpg'
export default () => {
  return (
    <div>
      <h2>Home</h2>
      <div className="parallax-wrap">
        <Parallax
          bgImage={plx1}
          strength={200}
        >
          <div className="lax-item"><h2>Parallax content goes here</h2></div>
        </Parallax>
        <Parallax
          bgImage={plx2}
          strength={400}
        >
          <div className="lax-item">
            <h2>More content here</h2>
            <p>this is a paragraph tag</p>
          </div>
        </Parallax>
        <Parallax
          bgImage={plx3}
          strength={200}
        >
          <div className="lax-item">
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
            padding:10px;
            text-align:center;
            margin:40vh auto;
          }
          div.react-parallax-content ul {
            text-align: left;
          }
        `}
      </style>
    </div>
  )
}

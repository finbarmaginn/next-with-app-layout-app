import React from 'react'
import Link from 'next/link'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      active: !state.active
    }));
  }
  render() {
    return (
      <div className="main-menu">
        <button onClick={this.handleClick} className={(this.state.active ? "active" : "")}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <nav className={(this.state.active ? "active" : "")}>
          <ul>
            <li><Link href="/"><a onClick={this.handleClick}>Home</a></Link></li>
            <li><Link href="/about"><a onClick={this.handleClick}>About</a></Link></li>
          </ul>
        </nav>
        <style jsx>
          {`
            div.main-menu {
              position: absolute;
              top: 5px;
              right: 5px;
              z-index: 999999;
            }
            div.main-menu button {
              min-width: 48px;
              min-height: 48px;
              box-sizing: border-box;
              background: none;
              margin: 0;
              padding: 0;
              cursor: pointer;
              border: 0;
            }
            div.main-menu button div {
              height: calc(48px / 5);
              width: 100%;
              background: white;
              position: absolute;
              top: 0;
              right:0;
              transition: all 0.3s ease-out;
            }
            div.main-menu button div:nth-child(2) {
              top: calc(48px - calc(calc(48px / 5) * 3));
            }
            div.main-menu button div:nth-child(3) {
              top: calc(48px - calc(48px / 5));
            }
            div.main-menu button.active div:nth-child(1) {
              transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
              top: calc(calc(48px / 5) * 2)
            }
            div.main-menu button.active div:nth-child(2) {
              width: 0;
            }
            div.main-menu button.active div:nth-child(3) {
              transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              top: calc(calc(48px / 5) * 2)
            }
            nav {
              -webkit-transition: all 0.3s ease-out;
                 -moz-transition: all 0.3s ease-out;
                  -ms-transition: all 0.3s ease-out;
                   -o-transition: all 0.3s ease-out;
                      transition: all 0.3s ease-out;
              max-height: 0;
              overflow: hidden;
              background: rgba(127,88,144,0.9);
              display:block;
              position: absolute;
              right: 0;
              min-width: 200px;
            }
            nav.active {
              max-height: 100px;
            }
            nav ul {
              padding: 0;
              margin: 0;
              list-style-type: none;
              text-align: center;
            }
            nav ul li {
              display:block;
              padding: 1px 0;
            }
            nav ul li a {
              display:block;
              line-height: 48px;
              color: white;
              font-weight:bold;
              font-family: "Niconne";
              font-size:22px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Nav
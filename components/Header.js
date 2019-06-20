import Nav from './Nav.js'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <Link href="/"><a><h1>Finbar Maginn 2019</h1></a></Link>
        </div>
        <Nav />
      </div>
      <style jsx>
        {`
          header div.logo a,
          header div.logo a h1 {
            display: inline-block;
          }
        `}
      </style>
    </header>
  )
}

export default Header
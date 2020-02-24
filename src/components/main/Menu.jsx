import React from "react"
import { Link } from "gatsby"
import "../../css/menu.scss"
const Menu = () => {
  return (
    <menu>
      <Link to="/" className="logo">
        Christina Gorton
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <a
              href="https://www.notion.so/christinagorton/8e54b57f206c4a3ca3fa6799d5875548?v=6db17ff55e924619b4de5ca7887a1796"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work
            </a>
          </li>
          <li>
            <Link to="#thoughts">Thoughts</Link>
          </li>
        </ul>
      </nav>
    </menu>
  )
}
export default Menu

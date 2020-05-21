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
              href="https://www.notion.so/christinagorton/74d42c3299e34332981ca8ec3c155dec?v=89340ff3e4f9480db47372264f547d25"
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

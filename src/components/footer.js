import React from "react"

import iconSet from '../utils/selection.json'
import IcomoonReact from 'icomoon-react'
import './footer.scss'

const Footer = () => (
  <footer>
    <span>
      © {new Date().getFullYear()}, Built with
    </span>
    <span role="img" aria-label="heart">❤️</span>
    <a href="https://github.com/eldolar">
      <IcomoonReact
        iconSet={iconSet}
        color="#221425"
        size={22}
        icon="github" />
        {` `}Github
    </a>
  </footer>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer

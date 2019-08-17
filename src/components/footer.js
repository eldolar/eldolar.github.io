import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    <span role="img" aria-label="heart">❤️</span>
  </footer>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer

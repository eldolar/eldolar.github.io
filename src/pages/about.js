import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Sobre la aplicación.</h1>
    <p>
      El Dólar, muestra la cotización de los bancos más importantes del país.
    </p>
    <p>
      Extrayendo la información de las páginas de los mismos.
    </p>
    <p>
      La cotización se mantiene actulizada.
    </p>

    <div className="navigation">
      <Link to="/">
        {`< `}Volver a la página de inicio.
      </Link>
      {` `} | {` `}
      <Link to="/about-us">
        Sobre nosotros. >
      </Link>
    </div>    
  </Layout>
)

export default About

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Sobre nostros.</h1>
    <p>
      We are 
      {` `}<span role="img" aria-label="man">👨</span>
      <span role="img" aria-label="man">👨</span>
      brothers and 
      {` `}<span role="img" aria-label="ruby">💎</span>
      on Rails developers willing to learn a little more about other techs.
    </p>
    <p>
      Just for 
      {` `}<span role="img" aria-label="man_dancing">🕺</span>
      <span role="img" aria-label="tada">🎉</span>
      and in our weekends 
      {` `}<span role="img" aria-label="beer">🍻</span>
      We've been learning and developing:
    </p>
    <p>
      The most fancy 
      {` `}<span role="img" aria-label="fancy">🧐</span>
      dollar exchanger in the
      {` `}<span role="img" aria-label="world">🌎</span>
    </p>
    <p>
      {` `}<span role="img" aria-label="alert">⚠️</span>
      Just use this cutting edge tool in this
      {` `}<a href="https://www.google.com/maps/place/R%C3%ADo+Cuarto,+Cordoba/@-33.1244019,-64.377209,13z/data=!3m1!4b1!4m5!3m4!1s0x95d2000fbdd02247:0xc58d0a705d7cc0e3!8m2!3d-33.1231585!4d-64.3493441" rel="nofollow">area</a>
    </p>

      <div className="navigation">
      <Link to="/">
        {`< `}Volver a la página de inicio.
      </Link>
    </div>    
  </Layout>
)

export default AboutUs

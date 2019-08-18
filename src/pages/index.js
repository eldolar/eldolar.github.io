import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import iconSet from '../utils/selection.json'
import IcomoonReact from 'icomoon-react'

import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="🏦" />
    <h1>
      El precio del dólar tomado de diferentes bancos.
    </h1>
    <p>
      Consúltalo acá {` `}
      <span role="img" aria-label="down">👇</span>
    </p>
    <div className="apps">
      <ul>
        <li>
          <a href="https://eldolar.github.io/web/">
            <IcomoonReact
              iconSet={iconSet}
              color="#221425"
              size={25}
              icon="embed" />
              {` `} Web app.
          </a>
        </li>
        <li>
          <a href="/">
            <IcomoonReact
              iconSet={iconSet}
              color="#221425"
              size={25}
              icon="appleinc" />
              {` `} IOS app.
          </a>
        </li>
        <li>
          <a href="/">
            <IcomoonReact
              iconSet={iconSet}
              color="#221425"
              size={25}
              icon="android" />
              {` `} Android app.
          </a>
        </li>
      </ul>
    </div>
    <div className="navigation">
      <Link to="/about/">
        Más información sobre El Dólar >
      </Link>
    </div>

  </Layout>
)

export default IndexPage

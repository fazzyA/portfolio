import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navbar />
        {/* <Navigation /> */}
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Template

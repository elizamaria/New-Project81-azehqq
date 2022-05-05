import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project81</title>
        <meta property="og:title" content="New Project81" />
      </Helmet>
    </div>
  )
}

export default Home

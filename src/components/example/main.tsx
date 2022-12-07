import React from 'react'
import styles from './main.module.scss'

type mainProps = {

}

const main: React.FC<mainProps> = () => {
  return (
      <div className={styles.container}>
        <h1>Kasper Juhani Kukkonen</h1>
        <p>Shrimptrimp</p>
      </div>
    
  )
}

export default main

import React from 'react'
import styles from './main.module.scss'

type mainProps = {

}

const main: React.FC<mainProps> = () => {
  return (
      <div className={styles.container}>
        <h1>Kasper Juhani Kukkonen</h1>
        <a href='https://github.com/shrimptrimp' target="_blank">Github</a>
      </div>
    
  )
}

export default main

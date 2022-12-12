import React from 'react'
import styles from './main.module.scss'

type mainProps = {

}

const main: React.FC<mainProps> = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Kasper Juhani Kukkonen</h1>
       <a href='https://github.com/shrimptrimp' target="_blank" rel="noreferrer">Github</a>
      </div>

    </div>
  )
}

export default main
import React from 'react'
import styles from './main.module.scss'

type mainProps = {

}

const main: React.FC<mainProps> = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Kasper Juhani Kukkonen 
        <h2>Shrimptrimp</h2>
        <h2>Aspiring Software Engineer</h2>
        </h1>
       <a href='https://github.com/shrimptrimp' target="_blank" rel="noreferrer">Github</a>
       <a href='https://www.linkedin.com/in/kasper-juhani-kukkonen/' target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

    </div>
  )
}

export default main

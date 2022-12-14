import React from 'react'
import styles from './projects.module.scss'
type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <html>
    <div className={styles.container}>  
      <a href='https://play.unity.com/u/Shrimptrimp' target="_blank" rel="noreferrer">Unity Games</a>
      </div>
      <div className={styles.container2}>
      <a href='https://github.com/shrimptrimp/portfolio-project' target="_blank" rel="noreferrer">This Page</a>
    </div>
    </html>
  )
}

export default Projects

import React from 'react'
import styles from './projects.module.scss'
type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>  
      <a href='https://play.unity.com/u/Shrimptrimp' target="_blank" rel="noreferrer">Unity Games</a>
    </div>
  )
}

export default Projects

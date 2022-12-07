import React from 'react'
import styles from './someExampleComponent.module.scss'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
	<div className={styles.container}>
  <h1>Kasper Juhani Kukkonen</h1>
  <p>Shrimptrimp</p>
</div>
  )
}

export default SomeExampleComponent

import React from 'react'
import styles from './someExampleComponent.module.scss'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
	<div className={styles.container}>
  <h1>Header</h1>
  <p>Sqaduplerous swag</p>
  <img src="image0.gif" alt="goose">
  </img>
</div>
  )
}

export default SomeExampleComponent

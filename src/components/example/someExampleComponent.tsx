import React from 'react'
import styles from './someExampleComponent.module.scss'
import goose from './image0.gif'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
	<div className={styles.container}>
  <h1>Header</h1>
  <p>Sqaduplerous swag</p>
  <img src={goose} alt="this should be a goose" />
</div>
  )
}

export default SomeExampleComponent

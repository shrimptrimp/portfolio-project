import React from 'react'
import styles from './someExampleComponent.module.scss'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
	<div className={styles.container}>
  <h1>Header</h1>
  <p>Sqaduplerous swag</p>
  <img src="https://tenor.com/view/dance-swan-pigeon-goose-gif-16042892" alt="goose">
  </img>
</div>
  )
}

export default SomeExampleComponent

import React from 'react'
import styles from './navbar.module.scss'
import { Link } from "react-router-dom";
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      Navbar
      <Link to="/"> Home</Link>
      <Link to="/first"> My First Component</Link>
      <Link to="/example"> Example</Link>
    </div>
  )
}

export default Navbar


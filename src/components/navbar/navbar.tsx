import React from 'react'
import styles from './navbar.module.scss'
import { Link } from "react-router-dom";
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.topnav}>
      <p><Link to="/"> Main </Link></p>
      <p><Link to="/first"> CV </Link></p>
      <p><Link to="/example"> Projects </Link></p>
    </div>
  )
}

export default Navbar


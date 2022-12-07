import React from 'react'
import styles from './navbar.module.scss'
import { Link } from "react-router-dom";
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.topnav}>
      <button><Link to="/main"> Main </Link></button>
      <button><Link to="/cv"> CV </Link></button>
      <button><Link to="/projects"> Projects </Link></button>
    </div>
  )
}

export default Navbar


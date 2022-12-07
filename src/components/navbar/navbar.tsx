import React from 'react'
import styles from './navbar.module.scss'
import { Link } from "react-router-dom";
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.topnav}>
      <a><Link to="/"> Main </Link></a>
      <a><Link to="/first"> CV </Link></a>
      <a><Link to="/example"> Projects </Link></a>
    </div>
  )
}

export default Navbar


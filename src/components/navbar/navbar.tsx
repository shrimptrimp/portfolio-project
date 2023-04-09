import React from 'react'
import styles from './navbar.module.scss'
import { Link } from "react-router-dom";
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.topnav}>
      <Link to="/main">
        <button>Main</button>
      </Link>
      <Link to="/cv">
        <button>CV</button>
      </Link>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
    </div>
  )
}

export default Navbar


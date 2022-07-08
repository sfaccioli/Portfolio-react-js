import { Link, NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className={styles.navBar}>
    <Link className={styles.logo} to="/">
      <img src={LogoS} alt="logo" />
      <img className={styles.subLogo} src={LogoSubtitle} alt="sfaccioli" />
    </Link>
    <nav>
      <NavLink
        exact="true"
        className={({ isActive }) => (isActive ? styles.active : '')}
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className={({ isActive }) =>
          isActive
            ? `${styles.active} ${styles.aboutLink}`
            : `${styles.aboutLink}`
        }
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className={({ isActive }) =>
          isActive
            ? `${styles.active} ${styles.contactLink}`
            : `${styles.contactLink}`
        }
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/selene-faccioli-13389a107/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/selene-faccioli-13389a107/"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar

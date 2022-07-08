import { className } from '../../helpers/classNames'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import styles from './index.module.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const name = 'elene faccioli'
  const job = 'web developer'

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 4000)
  }, [])

  return (
    <div {...className(styles.container, styles.homePage)}>
      <div className={styles.textZone}>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...name]}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...job]}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer</h2>
        <Link to="/contact" className={styles.flatButton}>
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home

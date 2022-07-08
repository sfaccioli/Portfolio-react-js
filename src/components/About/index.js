import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { className } from '../../helpers/classNames'
import AnimatedLetters from '../AnimatedLetters'
import styles from './index.module.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 3000)
  }, [])

  return (
    <>
      <div {...className(styles.container, styles.aboutPage)}>
        <div className={styles.textZone}>
          <h1 className={styles.title}>
            <AnimatedLetters
              letterClass={`${letterClass} ${styles.textAnimateHover}`}
              strArray={[...'About me']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className={styles.stageCubeCont}>
          <div className={styles.cubeSpinner}>
            <div className={styles.face1}>
              <FontAwesomeIcon icon={faAngular} />
            </div>

            <div className={styles.face2}>
              <FontAwesomeIcon icon={faHtml5} />
            </div>

            <div className={styles.face3}>
              <FontAwesomeIcon icon={faCss3} />
            </div>

            <div className={styles.face4}>
              <FontAwesomeIcon icon={faReact} />
            </div>

            <div className={styles.face5}>
              <FontAwesomeIcon icon={faJsSquare} />
            </div>

            <div className={styles.face6}>
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" className={styles.loaderActive} />
    </>
  )
}

export default About

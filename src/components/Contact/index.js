import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { className } from '../../helpers/classNames'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 3000)
  }, [])

  const sentEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xoz5e69',
        'template_kfcqr1j',
        refForm.current,
        'm7sZHlvKj4EIyAdTk'
      )
      .then(
        () => {
          alert('Message successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again')
        }
      )
  }

  return (
    <>
      <div {...className(styles.container, styles.contactPage)}>
        <div className={styles.textZone}>
          <h1 className={styles.title}>
            <AnimatedLetters
              letterClass={`${letterClass} ${styles.textAnimateHover}`}
              strArray={[...'Contact me']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className={styles.contactForm}>
            <form ref={refForm} onSubmit={sentEmail}>
              <ul>
                <li className={styles.half}>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className={styles.half}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className={styles.flatButton}
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className={styles.infoMap}>
          Selene Faccioli,
          <br />
          Argentina,
          <br />
          Rosario,
          <span>selefaccioli@gmail.com</span>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.3977552033816!2d-60.653060684277115!3d-32.940506478908674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6c6ea7cf4a5796b!2zMzLCsDU2JzI1LjgiUyA2MMKwMzknMDMuMSJX!5e0!3m2!1ses-419!2sar!4v1654717502848!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Loader type="ball-pulse" className={styles.loaderActive} />
    </>
  )
}

export default Contact

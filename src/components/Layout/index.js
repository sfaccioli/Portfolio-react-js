import { Outlet } from 'react-router-dom'
import { className } from '../../helpers/classNames'
import Sidebar from '../Sidebar'
import styles from './index.module.scss'

const Layout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.page}>
        <span {...className(styles.tags, styles.topTags)}>&lt;body&gt;</span>

        <Outlet />

        <span {...className(styles.tags, styles.bottomTags)}>
          &lt;body&gt;
          <br />
          <span {...className(styles.tags, styles.bottomTagHtml)}>
            &lt;/html&gt;
          </span>
        </span>
      </div>
    </div>
  )
}

export default Layout

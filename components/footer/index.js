import { useRouter } from 'next/router'
import { BsHouse, BsPerson } from 'react-icons/bs'

import NavLink from './Link'
import MapIcon from './Icon.js'

import * as Routes from '../../routePath'
import styles from '../../styles/footer.module.scss'

function Footer() {
  const router = useRouter()

  return (
    <div className={styles.footer}>
      <NavLink href={Routes.map} router={router}>
        <MapIcon />
      </NavLink>

      <NavLink href={Routes.home} router={router}>
        <BsHouse className={styles.footerIcons} />
      </NavLink>

      <NavLink href={Routes.profile} router={router}>
        <BsPerson className={styles.footerIcons} />
      </NavLink>
    </div>
  )
}

export default Footer
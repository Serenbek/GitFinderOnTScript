import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import styles from "./TheHeader.module.scss"

const TheHeader = () =>  (
    <div className={styles.header}>
        <div className={styles.logo}>
            GitHubFinder
        </div>
        <ThemeSwitcher/>
    </div>
  )

export default TheHeader

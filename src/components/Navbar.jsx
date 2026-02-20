import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.logo}>Junior Barros</div>
      </div>
    </nav>
  )
}
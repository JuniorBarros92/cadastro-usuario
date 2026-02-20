import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.name}>Junior Barros</h1>
        <p className={styles.subtitle}>Front-End Developer</p>
      </div>
    </section>
  )
}
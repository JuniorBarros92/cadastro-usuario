import styles from "./About.module.css"

export default function About() {
  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>Sobre mim</h2>
        <p className={styles.text}>
          Desenvolvedor focado em criar interfaces modernas e performáticas.
        </p>
      </div>
    </section>
  )
}
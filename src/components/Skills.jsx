import styles from "./Skills.module.css"

export default function Skills() {
  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>React</h3>
            <div className={styles.bar}>
              <div className={styles.progress} style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
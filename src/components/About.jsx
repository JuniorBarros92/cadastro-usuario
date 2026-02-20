import styles from "./About.module.css"
import { useScrollReveal } from "../hooks/useScrollReveal"

export default function About() {
  const [imageRef, imageVisible] = useScrollReveal()
  const [textRef, textVisible] = useScrollReveal()

  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>Sobre Mim</h2>

        <div className={styles.content}>
          <div
            ref={imageRef}
            className={`${styles.image} ${imageVisible ? styles.showLeft : ""}`}
          >
            <img src="/sua-foto.jpg" alt="Junior" />
          </div>

          <div
            ref={textRef}
            className={`${styles.text} ${textVisible ? styles.showRight : ""}`}
          >
            <p>
              Estudante de ADS focado em Front-End e UI moderna.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
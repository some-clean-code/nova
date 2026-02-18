import styles from './Hero.module.css'

type HeroProps = {
  eyebrow?: string
  title: string
  description?: string
  handwritten?: boolean
}

export function Hero({ eyebrow, title, description, handwritten = false }: HeroProps) {
  const titleClassName = handwritten ? `${styles.title} ${styles.handwritten}` : styles.title
  const titleTextClassName = handwritten ? `${styles.titleText} ${styles.handwrittenText}` : styles.titleText

  return (
    <section className={styles.hero}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h1 className={titleClassName}>
        <span className={titleTextClassName}>{title}</span>
      </h1>
      {description ? <p className={styles.description}>{description}</p> : null}
    </section>
  )
}

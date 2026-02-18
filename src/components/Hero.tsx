import styles from './Hero.module.css'

type HeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function Hero({ eyebrow, title, description }: HeroProps) {
  return (
    <section className={styles.hero}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </section>
  )
}

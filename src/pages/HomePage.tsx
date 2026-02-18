export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-label="Hero">
        <h1 className="home-brand">Nero</h1>
      </section>

      <section className="stack home-placeholder scroll-reveal" aria-label="Placeholder content">
        <h2 className="page-title">Placeholder Section</h2>
        <p>
          This is temporary content so you can test scrolling, sticky navbar behavior, and page rhythm
          while designing the rest of the landing page.
        </p>

        <div className="home-placeholder-grid">
          <article className="product-card">
            <h2>Feature Block</h2>
            <p>Use this space for a concise headline and a one-paragraph value proposition.</p>
          </article>
          <article className="product-card">
            <h2>Proof Point</h2>
            <p>Add metrics, testimonials, or short case-study snippets once available.</p>
          </article>
          <article className="product-card">
            <h2>Next Step</h2>
            <p>Reserve this for CTA copy, onboarding details, or launch timeline notes.</p>
          </article>
        </div>
      </section>

      <section className="stack home-placeholder scroll-reveal" aria-label="Placeholder workflow section">
        <h2 className="page-title">Workflow Placeholder</h2>
        <p>Use this area for a 3-step process overview once you define onboarding and delivery flow.</p>

        <div className="home-placeholder-grid">
          <article className="product-card">
            <h2>1. Discovery</h2>
            <p>Collect requirements, business goals, constraints, and timeline expectations.</p>
          </article>
          <article className="product-card">
            <h2>2. Build</h2>
            <p>Implement core user flows with weekly milestones and quality checks.</p>
          </article>
          <article className="product-card">
            <h2>3. Launch</h2>
            <p>Harden, ship, and monitor usage while prioritizing high-impact iterations.</p>
          </article>
        </div>
      </section>

      <section className="stack home-placeholder scroll-reveal" aria-label="Placeholder faq section">
        <h2 className="page-title">FAQ Placeholder</h2>
        <p>Reserve this for practical answers users need before reaching out or starting a project.</p>

        <div className="home-placeholder-grid">
          <article className="product-card">
            <h2>How long does a build take?</h2>
            <p>Typical MVP projects run in short phases with clear weekly checkpoints.</p>
          </article>
          <article className="product-card">
            <h2>Can scope evolve?</h2>
            <p>Yes, scope can be adjusted as long as tradeoffs are documented and prioritized.</p>
          </article>
          <article className="product-card">
            <h2>What do you need to start?</h2>
            <p>A short brief, goals, audience, and a rough timeline is enough for kickoff.</p>
          </article>
        </div>
      </section>
    </>
  )
}

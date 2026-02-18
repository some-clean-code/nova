const products = [
  {
    name: 'Starter Kit',
    description: 'A lightweight foundation for MVP development.',
  },
  {
    name: 'Growth Suite',
    description: 'Scaling tools for teams shipping weekly.',
  },
  {
    name: 'Enterprise Core',
    description: 'Security-first workflows for larger organizations.',
  },
]

export function ProductsPage() {
  return (
    <section className="stack">
      <span className="eyebrow">Products</span>
      <h1>Built for every stage.</h1>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.name} className="card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

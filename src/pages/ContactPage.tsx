import { useEffect, useRef, useState, type FormEvent } from 'react'

type ChatMessage = {
  id: number
  role: 'assistant' | 'user'
  content: string
}

const assistantReplies = [
  'Great, I can help with that. What are your top 3 must-have features?',
  'Understood. Do you already have branding and copy, or should we include that in scope?',
  'Thanks. I can turn that into a phased launch plan next.',
]

const suggestedPrompts = [
  'Define project scope',
  'Estimate a launch timeline',
  'Identify key milestones',
]

export function ContactPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const messagesRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const canSend = input.trim().length > 0

  useEffect(() => {
    const container = messagesRef.current
    if (!container) {
      return
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages.length])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = input.trim()

    if (!trimmed) {
      return
    }

    setInput('')
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', content: trimmed }])

    window.setTimeout(() => {
      setMessages((prev) => {
        const reply = assistantReplies[prev.length % assistantReplies.length]
        return [...prev, { id: Date.now() + 1, role: 'assistant', content: reply }]
      })
    }, 450)
  }

  function handleInputChange(value: string) {
    setInput(value)

    const node = inputRef.current
    if (!node) {
      return
    }

    node.classList.remove('chat-input-typing')
    void node.offsetWidth
    node.classList.add('chat-input-typing')
  }

  function handleSuggestionClick(prompt: string) {
    handleInputChange(prompt)
    inputRef.current?.focus()
  }

  return (
    <section className="stack contact-page">
      <h1 className="page-title">Chat</h1>
      <p className="chat-subtitle">How can I help you today?</p>

      <section className="chat-shell" aria-label="Chat preview">
        <div ref={messagesRef} className="chat-messages">
          {messages.map((message) => (
            <article
              key={message.id}
              className={
                message.role === 'assistant'
                  ? 'chat-bubble chat-bubble-assistant'
                  : 'chat-bubble chat-bubble-user'
              }
            >
              {message.content}
            </article>
          ))}
        </div>

        <div className="chat-suggestions" aria-label="Predicted interactions">
          {suggestedPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              className="chat-suggestion-chip"
              onClick={() => handleSuggestionClick(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        <form className="chat-input-row" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => handleInputChange(event.target.value)}
            placeholder="Type your message..."
            aria-label="Message input"
          />
          <button type="submit" disabled={!canSend}>
            Send
          </button>
        </form>
      </section>
    </section>
  )
}

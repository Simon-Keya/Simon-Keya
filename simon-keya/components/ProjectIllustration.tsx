export default function ProjectIllustration({ kind }: { kind: 'ai' | 'go' }) {
  if (kind === 'ai') {
    return (
      <div className="illus" role="img" aria-label="Illustration of the RestFlow AI request flow: a question, a permission-checked tool call and a grounded answer.">
        <div className="chat" aria-hidden="true">
          <div className="bubble me">Which items need reordering this week?</div>
          <div className="toolcall">inventory.low_stock(shop_id) · read-only</div>
          <div className="bubble">Seven items are below their reorder point. Want them grouped by supplier?</div>
        </div>
        <span className="illus-tag">Illustration</span>
      </div>
    )
  }
  return (
    <div className="illus" role="img" aria-label="Illustration of Go service code that processes an event inside a database transaction.">
      <div className="code-card" aria-hidden="true">
        <header><i /><i /><i /><span>service.go</span></header>
<pre>{`func (s *Service) Process(ctx, e) error {
    tx, err := s.db.Begin(ctx)
    if err != nil { return err }
    defer tx.Rollback(ctx)
    `}<span className="c">{`// apply the event, then update projections`}</span>{`
    if err := s.apply(ctx, tx, e); err != nil {
        return err
    }
    return tx.Commit(ctx)
}`}</pre>
      </div>
      <span className="illus-tag">Illustration</span>
    </div>
  )
}

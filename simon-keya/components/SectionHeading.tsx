export default function SectionHeading({
    children,
    id,
  }: {
    children: React.ReactNode
    id?: string
  }) {
    return (
      <h2
        id={id}
        className="text-4xl font-extrabold mb-8 text-yellow-400 text-center drop-shadow-lg"
      >
        {children}
      </h2>
    )
  }
  
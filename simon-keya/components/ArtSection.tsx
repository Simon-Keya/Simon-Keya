import BrowserShot from './BrowserShot'
import { ArrowUpRight } from './Icons'
import { archive, contact } from '@/lib/projects'

export default function ArtSection() {
  const keyart = archive.find((a) => a.name === 'Keyart')!
  return (
    <section className="section art" id="art" aria-labelledby="art-title">
      <div className="wrap art-grid">
        <div>
          <p className="eyebrow">Beyond the code</p>
          <h2 id="art-title">Engineering meets <span>visual imagination.</span></h2>
          <p>Outside software development, I explore painting, drawing and digital art. Making art gives me another way to think about composition, colour, balance and visual storytelling, sensibilities I bring into interface design and the way I present digital products.</p>
          <p>I see art and engineering as complementary practices: one strengthens visual expression, the other turns ideas into systems people can use.</p>
          <a className="btn btn-primary" href={contact.art} target="_blank" rel="noopener noreferrer">Explore my art portfolio <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <a className="art-feature" href={contact.art} target="_blank" rel="noopener noreferrer" aria-label="Visit Keyart, my art portfolio (opens in a new tab)">
          <BrowserShot image={keyart.image} url={keyart.liveUrl} sizes="(max-width: 900px) 100vw, 640px" />
          <div className="art-caption"><span>Painting, drawing and digital design</span><b>Keyart</b></div>
        </a>
      </div>
    </section>
  )
}

import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap not-found">
        <h1>404</h1>
        <p>That page doesn’t exist or has moved. The work and contact details are all on the home page.</p>
        <Link className="btn btn-primary" href="/">Back to home</Link>
      </main>
      <SiteFooter />
    </>
  )
}

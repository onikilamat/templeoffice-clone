export default function BioPage() {
  return (
    <main className="collection-page">
      <div className="collection-header">
        <a href="/" className="back-link">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/magnezyum-logo.png" alt="Magnezyum" className="back-logo" />
        </a>
        <h1 className="collection-title">About</h1>
      </div>
      <div className="collection-content ilseraglio-layout">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/magnezyum-logo.png" alt="Magnezyum" className="bio-logo" />
        <div>
          <p>FAST FASHION giving us &apos;probably nothing&apos; vibes and we hate it.</p>
          <p>Drop it, &apos;cause we&apos;re about to make slow fashion history.</p>
          <p>Keep an eye out – we&apos;re rebooting production.</p>
          <p>Get ready to vibe with fashion that&apos;s actually lasting.</p>
        </div>
      </div>
    </main>
  );
}

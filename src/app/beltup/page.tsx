export default function BeltUpPage() {
  return (
    <main className="collection-page">
      <div className="collection-header">
        <a href="/" className="back-link">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/magnezyum-logo.png" alt="Magnezyum" className="back-logo" />
        </a>
        <h1 className="collection-title">Belt Up!</h1>
      </div>
      <div className="collection-content ilseraglio-layout">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/DSCN5866.JPG" alt="Belt Up!" className="collection-photo" />
        <div>
          <p>A functional yet stunning accessory crafted from upcycled faux leather with eyelets. Wear it around your waist, body, or chest—however you like. It&apos;s as versatile as it gets.</p>
          <p>Designed in Istanbul. Handmade in Istanbul.</p>
        </div>
      </div>
    </main>
  );
}

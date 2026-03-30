export default function LaceLegacyPage() {
  return (
    <main className="collection-page">
      <div className="collection-header">
        <a href="/" className="back-link">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/magnezyum-logo.png" alt="Magnezyum" className="back-logo" />
        </a>
        <h1 className="collection-title">Lace Legacy</h1>
      </div>
      <div className="collection-content ilseraglio-layout">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/DSCN6279.JPG" alt="Lace Legacy" className="collection-photo" />
        <p>This collection has been designed using the upcycling technique by combining fabric remnants with minimal cutting. Each piece features lace inherited from our family, making every item unique and one-of-a-kind. Handcrafted by our designer.</p>
      </div>
    </main>
  );
}

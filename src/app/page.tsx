const BG_IMAGES = [
  "/images/DSCF3450.JPG",
  "/images/DSCF3544.JPG",
  "/images/DSCF4055.JPG",
  "/images/DSCF4093.JPG",
  "/images/DSCF4279.JPG",
  "/images/DSCN5866.JPG",
  "/images/DSCN6279.JPG",
];

const NAV_LINKS = [
  { label: "About", href: "/bio" },
  { label: "Il Seraglio", href: "/ilseraglio" },
  { label: "Lace Legacy", href: "/lacelegacy" },
  { label: "Belt Up!", href: "/beltup" },
  { label: "Star Piece", href: "/starpiece" },
  {
    label: "Shop",
    href: "https://www.shopier.com/ShowProductNew/storefront.php?shop=Magnezyumx&sid=ZUkxV3M0WDMwekRHblJ6TTBfLTFfIF8g",
  },
];

export default function Home() {
  return (
    <main>
      {/* Background slideshow */}
      <div className="bg-slideshow">
        {BG_IMAGES.map((src, i) => (
          <div key={i} className="bg-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      {/* Logo — fixed center-top, independent of overlay for correct mix-blend-mode */}
      <div className="home-logo" style={{ position: "fixed", top: "1rem", left: "50%", transform: "translateX(-50%)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/magnezyum logo yeni.png" alt="Magnezyum" style={{ width: "300px", height: "auto", maxWidth: "80vw" }} />
      </div>

      {/* Navigation overlay */}
      <div className="home-overlay">
        <span className="menu-homepage">
          {NAV_LINKS.map(({ label, href }, i) => (
            <span key={href}>
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </a>
              {i < NAV_LINKS.length - 1 && <br />}
            </span>
          ))}
        </span>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <a
          href="https://www.instagram.com/mag.nezyum/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram"
        >
          Instagram
        </a>
        <span className="footer-copy">© 2024 by Magnezyum</span>
      </footer>
    </main>
  );
}

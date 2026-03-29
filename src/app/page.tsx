const BG_IMAGES = [
  "/images/bg-01.jpg",
  "/images/bg-02.jpg",
  "/images/bg-03.png",
  "/images/bg-04.jpg",
  "/images/bg-05.jpg",
  "/images/bg-06.jpg",
  "/images/bg-07.jpg",
  "/images/bg-08.jpg",
  "/images/bg-09.jpg",
  "/images/bg-10.jpg",
  "/images/bg-11.jpg",
  "/images/bg-12.jpg",
  "/images/bg-13.jpg",
  "/images/bg-14.jpg",
  "/images/bg-15.jpg",
  "/images/bg-16.jpg",
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

      {/* Navigation overlay */}
      <div className="home-overlay">
        {/* Logo — centered top, inside overlay so it inherits mix-blend-mode stacking context */}
        <div className="home-logo">
          <span className="home-logo-text">MAGNEZYUM</span>
        </div>

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

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
  { label: "Fashion", href: "/fashion" },
  { label: "Institution", href: "/institution" },
  { label: "Design", href: "/design" },
  { label: "Tech", href: "/tech" },
  { label: "Music", href: "/music" },
  { label: "Temple Magazine", href: "/temple-magazine" },
  { label: "Contact", href: "/contact" },
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/temple-logo.png" alt="Temple" />
        </div>

        <span className="menu-homepage">
          {NAV_LINKS.map(({ label, href }, i) => (
            <span key={href}>
              <a href={href}>{label}</a>
              {i < NAV_LINKS.length - 1 && <br />}
            </span>
          ))}
        </span>
      </div>
    </main>
  );
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {year} <a href="#hero">Prabin Adhikari</a>. Built with React &amp; Vite.
          {' '}University of Florida · Gainesville, FL.
        </p>
      </div>
    </footer>
  )
}

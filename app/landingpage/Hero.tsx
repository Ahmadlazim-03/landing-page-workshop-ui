import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="company-badge mb-4">
                <i className="bi bi-gear-fill me-2"></i>
                Belanja Nyaman, Cepat, dan Aman
              </div>

              <h1 className="mb-4">
                Temukan Produk <br />
                Terbaik untuk Anda <br />
                <span className="accent-text">Belanja Nyaman & Mudah</span>
              </h1>

              <p className="mb-4 mb-md-5">
                Nikmati pengalaman belanja online terbaik dengan pilihan produk berkualitas, harga terjangkau, dan layanan cepat. Semua yang Anda butuhkan ada di sini.
              </p>

              <div className="hero-buttons">
                <Link href="/products" className="btn btn-primary me-0 me-sm-2 mx-1">
                  Lihat Produk
                </Link>
                <a className="btn btn-link mt-2 mt-sm-0 glightbox">
                  <i className="bi bi-play-circle me-1"></i>
                  Lihat Video
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image">
              <Image
                src="/assets/img/illustration-1.webp"
                alt="Hero Image"
                className="img-fluid"
                width={500}
                height={500}
              />

              <div className="customers-badge">
                <div className="customer-avatars">
                  <Image src="/assets/img/avatar-1.webp" alt="Customer 1" className="avatar" width={40} height={40} />
                  <Image src="/assets/img/avatar-2.webp" alt="Customer 2" className="avatar" width={40} height={40} />
                  <Image src="/assets/img/avatar-3.webp" alt="Customer 3" className="avatar" width={40} height={40} />
                  <Image src="/assets/img/avatar-4.webp" alt="Customer 4" className="avatar" width={40} height={40} />
                  <Image src="/assets/img/avatar-5.webp" alt="Customer 5" className="avatar" width={40} height={40} />
                  <span className="avatar more">12+</span>
                </div>
                <p className="mb-0 mt-2">Dipercaya oleh 12,000+ pelanggan puas di seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row stats-row gy-4 mt-5">
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-trophy"></i>
              </div>
              <div className="stat-content">
                <h4>3x Penghargaan</h4>
                <p className="mb-0">Layanan e-commerce terbaik</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <div className="stat-content">
                <h4>6.5k Produk Tersedia</h4>
                <p className="mb-0">Kategori lengkap & variatif</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <div className="stat-content">
                <h4>80k Transaksi</h4>
                <p className="mb-0">Dilayani dengan cepat & aman</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-award"></i>
              </div>
              <div className="stat-content">
                <h4>6x Terpercaya</h4>
                <p className="mb-0">Oleh pelanggan dan mitra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

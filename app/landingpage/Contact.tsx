import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: "",
    success: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ loading: true, error: "", success: false })

    try {
      // Simulate successful submission
      setTimeout(() => {
        setFormStatus({ loading: false, error: "", success: true })
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 1000)
    } catch (error) {
      setFormStatus({
        loading: false,
        error: "Gagal mengirim pesan. Silakan coba lagi.",
        success: false,
      })
    }
  }

  return (
    <section id="contact" className="contact section light-background">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Hubungi Kami</h2>
        <p>Butuh bantuan atau memiliki pertanyaan? Tim kami siap membantu Anda.</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="info-box">
              <h3>Informasi Kontak</h3>
              <p>Silakan hubungi kami melalui salah satu saluran berikut. Kami akan merespons secepat mungkin.</p>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content">
                  <h4>Alamat Toko</h4>
                  <p>Jl. Merdeka No. 123</p>
                  <p>Jakarta, Indonesia</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content">
                  <h4>Nomor Telepon</h4>
                  <p>+62 812 3456 7890</p>
                  <p>+62 821 9876 5432</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <p>support@tokoku.com</p>
                  <p>cs@tokoku.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form">
              <h3>Kirim Pesan</h3>
              <p>Isi formulir di bawah ini dan kami akan segera menghubungi Anda.</p>

              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Nama Anda"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Anda"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subjek"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Tulis pesan Anda di sini..."
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    {formStatus.loading && <div className="loading">Mengirim...</div>}
                    {formStatus.error && <div className="error-message">{formStatus.error}</div>}
                    {formStatus.success && <div className="sent-message">Pesan Anda berhasil dikirim. Terima kasih!</div>}

                    <button type="submit" className="btn" disabled={formStatus.loading}>
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
              ShopBlog
            </h3>
            <p className="text-sm text-gray-300">
              Temukan produk berkualitas dan artikel informatif untuk gaya hidup modern Anda.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5 hover:scale-110 transition-transform" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5 hover:scale-110 transition-transform" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5 hover:scale-110 transition-transform" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-pink-300">Produk</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Semua Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=fashion"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=electronics"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Elektronik
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=home"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Rumah Tangga
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-pink-300">Artikel</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/articles" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Semua Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=lifestyle"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Gaya Hidup
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=technology"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Teknologi
                </Link>
              </li>
              <li>
                <Link
                  href="/articles?category=health"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Kesehatan
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-pink-300">Bantuan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} ShopBlog. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

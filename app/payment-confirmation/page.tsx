"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Download, Printer, Share2, ArrowLeft, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"

export default function PaymentConfirmation() {
  const [isLoaded, setIsLoaded] = useState(false)
  const receiptRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock order data
  const order = {
    id: "ORD-12345678",
    date: "15 Mei 2023, 14:30 WIB",
    status: "Pembayaran Berhasil",
    paymentMethod: "Kartu Kredit/Debit",
    paymentDetails: "**** **** **** 3456",
    items: [
      {
        id: 1,
        name: "Smartphone Premium",
        price: 8999000,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100&text=Smartphone",
      },
      {
        id: 2,
        name: "Sneakers Modern",
        price: 1299000,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100&text=Sneakers",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: 2499000,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100&text=Smartwatch",
      },
    ],
    shipping: {
      address: "Jl. Contoh No. 123, Jakarta Selatan",
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
      postalCode: "12345",
      method: "Regular (2-3 hari)",
      cost: 15000,
    },
    subtotal: 13896000,
    total: 13911000,
  }

  const handlePrint = () => {
    const printContents = receiptRef.current?.innerHTML
    const originalContents = document.body.innerHTML

    if (printContents) {
      document.body.innerHTML = `
        <html>
          <head>
            <title>Bukti Pembayaran - ${order.id}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .receipt-header { text-align: center; margin-bottom: 20px; }
              .receipt-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
              .receipt-total { font-weight: bold; margin-top: 10px; }
              .receipt-footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            ${printContents}
            <div class="receipt-footer">
              <p>Terima kasih telah berbelanja di ShopBlog</p>
              <p>Untuk pertanyaan, hubungi customer service kami di cs@shopblog.com</p>
            </div>
          </body>
        </html>
      `
      window.print()
      document.body.innerHTML = originalContents
    }
  }

  const handleDownload = () => {
    toast({
      title: "Bukti pembayaran diunduh",
      description: "File PDF telah berhasil diunduh",
    })
  }

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(order.id)
    toast({
      title: "ID Pesanan disalin",
      description: "ID Pesanan telah disalin ke clipboard",
    })
  }

  return (
    <div className="container px-4 py-8 md:py-12 bg-gradient-to-b from-purple-50 to-white">
      <div
        className={`max-w-4xl mx-auto ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-t-lg text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-green-500" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Pembayaran Berhasil!</h1>
          <p className="text-white/90">Terima kasih atas pesanan Anda. Pembayaran telah dikonfirmasi.</p>
        </div>

        {/* Order Details */}
        <Card className="border-t-0 rounded-t-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-purple-900">ID Pesanan: {order.id}</h2>
                  <button
                    onClick={handleCopyOrderId}
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                    title="Salin ID Pesanan"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-gray-500 text-sm">{order.date}</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-300 text-purple-600 hover:bg-purple-100"
                  onClick={handlePrint}
                >
                  <Printer className="h-4 w-4 mr-2" />
                  Cetak
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-300 text-purple-600 hover:bg-purple-100"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Unduh PDF
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-300 text-purple-600 hover:bg-purple-100"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    toast({
                      title: "Link disalin",
                      description: "Link bukti pembayaran telah disalin ke clipboard",
                    })
                  }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Bagikan
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Informasi Pembayaran</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-green-600">{order.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Metode Pembayaran:</span>
                    <span>{order.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Detail:</span>
                    <span>{order.paymentDetails}</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Informasi Pengiriman</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Alamat:</span>
                    <span className="text-right">{order.shipping.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kota/Provinsi:</span>
                    <span>
                      {order.shipping.city}, {order.shipping.province} {order.shipping.postalCode}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Metode:</span>
                    <span>{order.shipping.method}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt */}
            <div ref={receiptRef}>
              <h3 className="font-semibold text-purple-900 mb-4">Rincian Pesanan</h3>
              <div className="space-y-4 mb-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 hover:bg-purple-50 p-2 rounded-lg transition-colors">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-purple-900">{item.name}</h4>
                      <div className="text-sm text-gray-500">Jumlah: {item.quantity}</div>
                    </div>
                    <div className="font-medium text-purple-900">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6 bg-purple-100" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>Rp {order.subtotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Biaya Pengiriman</span>
                  <span>Rp {order.shipping.cost.toLocaleString("id-ID")}</span>
                </div>
                <Separator className="my-2 bg-purple-100" />
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-purple-900">Total</span>
                  <span className="text-purple-900">Rp {order.total.toLocaleString("id-ID")}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-all"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali ke Beranda
                </Button>
              </Link>
              <Link href="/products">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105">
                  Lanjutkan Belanja
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Order Tracking */}
        <div
          className={`mt-8 bg-white p-6 rounded-lg shadow-md border border-purple-100 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="font-semibold text-purple-900 mb-4">Status Pesanan</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-purple-200"></div>
            <div className="space-y-8">
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-green-600">Pembayaran Berhasil</h4>
                  <p className="text-sm text-gray-500">15 Mei 2023, 14:30 WIB</p>
                </div>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="h-5 w-5 text-purple-700 text-sm font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600">Pesanan Diproses</h4>
                  <p className="text-sm text-gray-500">Estimasi: 15 Mei 2023</p>
                </div>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="h-5 w-5 text-purple-700 text-sm font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600">Pesanan Dikirim</h4>
                  <p className="text-sm text-gray-500">Estimasi: 16 Mei 2023</p>
                </div>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="h-5 w-5 text-purple-700 text-sm font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600">Pesanan Diterima</h4>
                  <p className="text-sm text-gray-500">Estimasi: 18 Mei 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

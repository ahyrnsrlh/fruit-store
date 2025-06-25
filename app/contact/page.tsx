"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Headphones,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon",
    details: ["+62 812-3456-7890", "+62 21-1234-5678"],
    description: "Senin - Minggu, 08:00 - 22:00 WIB",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@buahnesia.com", "support@buahnesia.com"],
    description: "Respon dalam 24 jam",
  },
  {
    icon: MapPin,
    title: "Alamat",
    details: ["Bandar Lampung, Indonesia"],
    description: "Kunjungi toko kami",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 08:00 - 20:00", "Sabtu - Minggu: 09:00 - 18:00"],
    description: "Customer service 24/7",
  },
];

const faqData = [
  {
    question: "Bagaimana cara menjamin kesegaran buah?",
    answer:
      "Kami memiliki sistem cold chain yang menjaga suhu optimal dari kebun hingga sampai ke tangan Anda. Semua buah dipetik fresh dan langsung dikemas dengan standar food grade.",
  },
  {
    question: "Apakah ada garansi jika buah tidak segar?",
    answer:
      "Ya, kami memberikan garansi 100% fresh atau uang kembali. Jika Anda tidak puas dengan kualitas buah, hubungi customer service dalam 24 jam setelah penerimaan.",
  },
  {
    question: "Berapa lama waktu pengiriman?",
    answer:
      "Untuk area Jabodetabek: 1-2 hari kerja. Untuk luar Jabodetabek: 2-3 hari kerja. Pengiriman gratis untuk pembelian di atas Rp 100.000.",
  },
  {
    question: "Apakah bisa pesan dalam jumlah besar?",
    answer:
      "Tentu saja! Kami melayani pemesanan grosir dan korporat. Hubungi tim sales kami untuk mendapatkan harga khusus dan layanan yang disesuaikan.",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pesan terkirim!",
        description:
          "Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan atau butuh bantuan? Tim customer service kami siap
            membantu Anda 24/7
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nama Depan</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nama Belakang</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subjek</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih subjek" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Pertanyaan Umum</SelectItem>
                        <SelectItem value="order">Terkait Pesanan</SelectItem>
                        <SelectItem value="quality">
                          Keluhan Kualitas
                        </SelectItem>
                        <SelectItem value="partnership">Kemitraan</SelectItem>
                        <SelectItem value="wholesale">
                          Pembelian Grosir
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tuliskan pesan Anda di sini..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-md border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700 mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-500 mt-2">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Support */}
            <Card className="shadow-md border-0 bg-green-50">
              <CardContent className="p-6 text-center">
                <Headphones className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Butuh Bantuan Cepat?
                </h3>
                <p className="text-gray-600 mb-4">
                  Tim customer service kami siap membantu via WhatsApp
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Chat WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-600">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="shadow-md border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lokasi Toko Kami
            </h2>
            <p className="text-gray-600">
              Kunjungi Toko kami di Bandar Lampung untuk melihat langsung
              kualitas buah-buahan segar
            </p>
          </div>
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254988.15473094243!2d105.15827144453125!3d-5.429723199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40daaaf2b5ed3b%3A0x4e2b9bb2b2b2b2b2!2sBandar%20Lampung%2C%20Kota%20Bandar%20Lampung%2C%20Lampung!5e0!3m2!1sid!2sid!4v1735216329234!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Toko Buahnesia - Bandar Lampung"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Toko Buahnesia
                    </h3>
                    <p className="text-gray-600 text-xs mt-1">
                      Jl. ZA. Pagar Alam No. 123
                    </p>
                    <p className="text-gray-600 text-xs">
                      Kedaton, Bandar Lampung
                    </p>
                    <p className="text-gray-600 text-xs">Lampung 35142</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Location Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="shadow-md border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  Alamat Lengkap
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Jl. ZA. Pagar Alam No. 123</p>
                  <p>Kedaton, Bandar Lampung</p>
                  <p>Lampung 35142, Indonesia</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Petunjuk Arah
                </h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>• Dari Bandara Radin Inten II: 45 menit berkendara</p>
                  <p>• Dari Terminal Rajabasa: 25 menit berkendara</p>
                  <p>• Dekat dengan Mall Boemi Kedaton</p>
                  <p>• Area parkir luas tersedia</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

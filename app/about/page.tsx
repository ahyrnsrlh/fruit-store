import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Award, Truck, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "100% Organik",
    description:
      "Semua produk kami berasal dari kebun organik bersertifikat tanpa pestisida berbahaya.",
  },
  {
    icon: Users,
    title: "Mendukung Petani",
    description:
      "Kami bermitra langsung dengan petani lokal untuk memberikan harga yang adil.",
  },
  {
    icon: Award,
    title: "Kualitas Premium",
    description:
      "Setiap buah dipilih dengan standar kualitas tinggi untuk kepuasan pelanggan.",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description:
      "Sistem logistik yang efisien memastikan buah sampai dalam kondisi segar.",
  },
  {
    icon: Shield,
    title: "Jaminan Kualitas",
    description: "Garansi 100% fresh atau uang kembali untuk setiap pembelian.",
  },
  {
    icon: Heart,
    title: "Kepuasan Pelanggan",
    description:
      "Lebih dari 1000+ pelanggan puas dengan layanan dan kualitas produk kami.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
              Tentang Buahnesia
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Misi Kami Menghadirkan
              <span className="text-green-600"> Buah Segar Berkualitas</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Buahnesia didirikan dengan visi menjadi platform terdepan dalam
              menyediakan buah-buahan segar berkualitas premium langsung dari
              kebun ke meja makan keluarga Indonesia. Kami berkomitmen mendukung
              petani lokal dan memberikan pengalaman berbelanja buah yang tak
              terlupakan.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Berawal dari keprihatinan terhadap sulitnya mendapatkan buah
                  segar berkualitas di perkotaan, Buahnesia hadir sebagai
                  solusi inovatif yang menghubungkan konsumen langsung dengan
                  petani terbaik.
                </p>
                <p>
                  Sejak 2020, kami telah melayani lebih dari 1000+ keluarga di
                  seluruh Indonesia dengan komitmen memberikan buah-buahan
                  segar, organik, dan berkualitas premium dengan harga yang
                  terjangkau.
                </p>
                <p>
                  Kami bangga menjadi bagian dari ekosistem pertanian Indonesia
                  yang berkelanjutan, mendukung kesejahteraan petani lokal, dan
                  berkontribusi pada gaya hidup sehat masyarakat Indonesia.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Our Story - Fresh Fruits Farm"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">4+</div>
                <div className="text-sm">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Komitmen kami terhadap kualitas, keberlanjutan, dan kepuasan
              pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-0 shadow-md"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Petani Mitra</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-100">Kota Terjangkau</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-green-100">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

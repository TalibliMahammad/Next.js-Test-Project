import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RefreshCw,
} from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    name: string;
  };
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Məhsul tapılmadı");
  return res.json();
}
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  try{
    const item = await getProduct(id)
    const seoDescription = item.description
    ? item.description.slice(0,150)+ "..."
    :"Premiumm məhsul haqqında məlumat";

    return{
      title: item.title, // layout.js-də template varsa: "Məhsul Adı | Sayt Adı" olacaq
      description: seoDescription,
      openGraph: {
        title: item.title,
        description: seoDescription,
        images: [{ url: item.images[0] }],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: item.title,
        description: seoDescription,
        images: [item.images[0]],
      }
    }
  } catch(error){
return{
      title: "Məhsul Tapılmadı",
      description: "Axtardığınız məhsul mövcud deyil."
    };
}
}

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const item = await getProduct(id);

  
  const cleanImageUrl = (url: string) => {
    if (url.startsWith("[")) {
      try {
        return JSON.parse(url)[0];
      } catch {
        return url;
      }
    }
    return url;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Geri Dönüş Düyməsi */}
        <Link
          href="/Home"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-10 group"
        >
          <div className="p-2 bg-white dark:bg-zinc-900 rounded-full shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold text-sm uppercase tracking-widest">
            Mağazaya Qayıt
          </span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* SOL TƏRƏF: Şəkil Bölməsi */}
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
            <Image
              src={cleanImageUrl(item.images[0])}
              alt={item.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 border border-white">
                {item.category?.name || "Premium"}
              </span>
            </div>
          </div>

          {/* SAĞ TƏRƏF: Detallar */}
          <div className="space-y-8 py-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {item.title}
              </h1>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                ${item.price}
              </span>
              <span className="text-slate-400 font-medium">USD</span>
            </div>

            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              {item.description ||
                "Bu məhsul üçün hələ ki, geniş təsvir əlavə olunmayıb. Lakin keyfiyyət və dizayn baxımından ən yüksək standartlara cavab verir."}
            </p>

            {/* Özəlliklər Siyahısı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Truck className="text-blue-600" size={20} />
                <span className="text-sm font-medium">Pulsuz Çatdırılma</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <ShieldCheck className="text-blue-600" size={20} />
                <span className="text-sm font-medium">2 İllik Zəmanət</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <RefreshCw className="text-blue-600" size={20} />
                <span className="text-sm font-medium">30 Günlük İadə</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="flex-1 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-200 dark:shadow-none hover:-translate-y-1">
                <ShoppingCart size={20} />
                Səbətə Əlavə Et
              </button>
              <button className="flex-1 h-16 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-bold transition-all hover:-translate-y-1">
                İndi Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

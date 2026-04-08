import Image from "next/image";
import LikeButton from "../Button/LikeButton";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import { getImageUrl } from "../utils/getImageUrl";

export default async function HomePage() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=40",
    { next: { revalidate: 60 } }
  );

  const data = await res.json();

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-zinc-950 p-6 md:p-12">
      {/* Səhifə Başlığı */}
      <div className="mb-12">
        <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
          Trenddə Olan <span className="text-blue-600">Məhsullar</span>
        </h2>
        <p className="text-slate-500 mt-2">Ən son gələn kolleksiyaları kəşf edin.</p>
      </div>

      {/* Grid Sistemi - Daha səliqəli və responziv */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((item: any) => (
          <div key={item.id} className="group relative">
            {/* Like Button üçün mütləq mövqe (z-index ilə) */}
            <div className="absolute top-4 right-4 z-10 transition-transform group-hover:scale-110">
              <LikeButton item={item} />
            </div>

            <Link href={`Detail/${item.id}`} className="block">
              <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-zinc-800 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2">
                
                {/* Şəkil Konteyneri */}
                <div className="relative h-72 w-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                  <Image
                    src={getImageUrl(item.images)}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay Effekt */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Məzmun Hissəsi */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-200 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Qiymət</span>
                      <span className="text-2xl font-black text-slate-900 dark:text-white">
                        {item.price}<span className="text-blue-600 text-sm ml-1">$</span>
                      </span>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-slate-900 dark:bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-slate-200 dark:shadow-none group-hover:bg-blue-600 transition-colors">
                      <ShoppingBag size={20} />
                    </div>
                  </div>
                  
                  {/* Reytinq simvolu */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] text-slate-400 ml-2 font-medium">(4.8)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
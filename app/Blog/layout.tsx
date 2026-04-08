import React from 'react';
import { Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import SideBar from './page';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Süni İntellektlə Dizayn: Gələcəyin Yaradıcı Alətləri",
      excerpt: "Generativ dizayn və AI alətləri dizaynerlərin iş axınını necə kökündən dəyişdirir? 2026-cı ilin əsas trendləri.",
      category: "Texnologiya",
      date: "7 Aprel, 2026",
      readTime: "6 dəq",
      imageColor: "bg-indigo-500/10",
      author: "Orxan Vəliyev"
    },
    {
      id: 2,
      title: "Minimalist Həyat Tərzi: Rəqəmsal Detoks Nədir?",
      excerpt: "Ekran asılılığından qurtulmağın və daha məhsuldar olmağın elmi sübut olunmuş yolları.",
      category: "Həyat Tərzi",
      date: "5 Aprel, 2026",
      readTime: "4 dəq",
      imageColor: "bg-emerald-500/10",
      author: "Aysel Məmmədova"
    },
    {
      id: 3,
      title: "Next.js 15 və Server Components: Yeni Era",
      excerpt: "Modern veb proqramlaşdırmada performansın artırılması üçün yeni arxitektura yanaşmaları.",
      category: "Proqramlaşdırma",
      date: "2 Aprel, 2026",
      readTime: "8 dəq",
      imageColor: "bg-amber-500/10",
      author: "Elvin Həsənli"
    }
  ];

  return (
    <div className='flex'>
<SideBar/>
    <div className="p-10 ml-10">

      {/* Featured Post (Önə Çıxan) */}
      <section className="relative group cursor-pointer">
        <div className="h-[400px] w-full rounded-[2rem] bg-gradient-to-br from-indigo-600 to-violet-700 overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white mb-4 inline-block uppercase tracking-wider">
              Həftənin Yazısı
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
              Rəqəmsal Transformasiya: Biznesinizi Necə Hazırlamalı?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl line-clamp-2 mb-6">
              Veb 3.0 və avtomatlaşdırma dövründə şirkətlərin sağ qalması üçün lazım olan 5 əsas strategiya.
            </p>
            <div className="flex items-center gap-6 text-white/90 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16}/> 7 Aprel, 2026</span>
              <span className="flex items-center gap-2"><Clock size={16}/> 10 dəq oxu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List (Məqalələr) */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Son Yazılar</h3>
            <div className="h-1.5 w-12 bg-indigo-600 rounded-full" />
          </div>
          <button className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
            Hamısına bax <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col bg-white dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
              {/* Image Placeholder */}
              <div className={`h-52 w-full ${post.imageColor} relative flex items-center justify-center`}>
                 <span className="text-slate-400 font-medium opacity-50 uppercase tracking-widest text-xs">Vizuallaşdırma</span>
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white dark:bg-slate-900 rounded-lg text-[10px] font-bold text-indigo-600 shadow-sm">
                     {post.category}
                   </span>
                 </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{post.author}</span>
                  </div>
                  <button className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-indigo-600 transition-colors">
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pagination (Səhifələmə) */}
      <div className="flex justify-center pt-10">
        <nav className="flex gap-2">
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${n === 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50'}`}>
              {n}
            </button>
          ))}
        </nav>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
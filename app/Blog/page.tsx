import React from 'react'
import { LayoutGrid, BookOpen, Sparkles, ChevronRight, Home, Settings } from 'lucide-react'

const SideBar = () => {
  const menuItems = [
    { id: 1, title: "Ana Səhifə", icon: <Home size={18} />, active: false },
    { id: 2, title: "Blog Yazıları", icon: <BookOpen size={18} />, active: true },
    { id: 3, title: "Texnologiya", icon: <LayoutGrid size={18} />, active: false },
    { id: 4, title: "Yeni Məzmun", icon: <Sparkles size={18} />, active: false },
  ];

  return (
    <aside className="w-80 h-screen sticky top-0 bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 p-6 flex flex-col shadow-sm">
      
      {/* Logo / Başlıq Hissəsi */}
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
          BLOG<span className="text-blue-600">HUB</span>
        </h1>
        <div className="h-1 w-8 bg-blue-600 rounded-full mt-1"></div>
      </div>

      {/* Menyu Naviqasiyası */}
      <nav className="flex-1 space-y-2">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3 mb-4">
          Əsas Menyu
        </p>
        
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 group ${
              item.active 
              ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20" 
              : "text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`${item.active ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`}>
                {item.icon}
              </span>
              <span className="text-sm font-semibold">{item.title}</span>
            </div>
            {item.active && <ChevronRight size={14} className="animate-pulse" />}
          </a>
        ))}
      </nav>

      {/* Alt Hissə - Məlumat Kartı */}
      <div className="mt-auto">
        <div className="bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 p-5 rounded-2xl">
          <p className="text-xs font-bold text-gray-400 uppercase mb-2">Status</p>
          <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed italic">
            "Yeni məlumatlar tezliklə əlavə olunacaq."
          </p>
          <button className="w-full mt-4 py-2 text-xs font-bold bg-gray-900 dark:bg-blue-600 text-white rounded-xl hover:bg-blue-600 transition-colors">
            Yeniliklərə Bax
          </button>
        </div>
        
        <div className="mt-6 flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600"></div>
          <div className="text-left">
            <p className="text-xs font-bold text-gray-900 dark:text-white">Admin Panel</p>
            <p className="text-[10px] text-gray-500">v1.0.4 Beta</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
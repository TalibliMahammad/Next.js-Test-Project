import React from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Üst Başlıq Hissəsi */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Bizimlə <span className="text-blue-600">Əlaqə</span> Saxlayın
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Sualınız var, yoxsa yeni bir layihə üzərində düşünürsünüz? Komandamız sizə kömək etməyə hər zaman hazırdır.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* SOL TƏRƏF: Əlaqə Kartları */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: <Mail size={24} />, title: "Email", value: "info@example.com", color: "bg-blue-50 text-blue-600" },
              { icon: <Phone size={24} />, title: "Telefon", value: "+994 (50) 123 45 67", color: "bg-emerald-50 text-emerald-600" },
              { icon: <MapPin size={24} />, title: "Ünvan", value: "Bakı ş., Nizami küç. 102", color: "bg-rose-50 text-rose-600" },
              { icon: <MessageCircle size={24} />, title: "Canlı Dəstək", value: "7/24 Aktiv", color: "bg-amber-50 text-amber-600" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-5 p-6 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-4 rounded-2xl ${item.color} dark:bg-opacity-10`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.title}</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-zinc-200">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SAĞ TƏRƏF: Əlaqə Forması */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Mesaj Göndərin</h3>
              
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-2">Ad və Soyad</label>
                  <input 
                    type="text" 
                    placeholder="Məs: Əli Əliyev" 
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-2">Email Ünvanı</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-2">Mövzu</label>
                  <input 
                    type="text" 
                    placeholder="Necə kömək edə bilərik?" 
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-2">Mesajınız</label>
                  <textarea 
                    rows={5}
                    placeholder="Mesajınızı bura yazın..." 
                    className="w-full p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 pt-4">
                  <button className="w-full md:w-auto px-10 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-100 dark:shadow-none hover:-translate-y-1">
                    <Send size={18} />
                    Mesajı Göndər
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Alt Hissə: Xəritə Placeholder */}
        <div className="mt-20 h-96 w-full rounded-[3rem] bg-slate-200 dark:bg-zinc-800 overflow-hidden relative group">
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin size={48} className="text-slate-400 mx-auto animate-bounce" />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Interaktiv Xəritə Tezliklə</p>
              </div>
           </div>
           {/* Reallıqda buraya Google Maps Iframe və ya Mapbox əlavə olunur */}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
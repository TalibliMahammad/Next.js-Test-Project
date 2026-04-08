import React from 'react';
import { Users, Target, Award, CheckCircle2 } from 'lucide-react'; // İkonlar üçün

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Biz gələcəyi <span className="text-blue-600">birlikdə</span> qururuq
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            2010-cu ildən bəri innovativ həllərimizlə müştərilərimizin rəqəmsal dünyadakı izini böyüdürük.
          </p>
        </div>
      </section>

      {/* Missiya və Vizyon */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-blue-600 pl-4">Missiyamız</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Texnologiyanın gücündən istifadə edərək mürəkkəb problemləri sadə və effektiv həllərə çevirmək. 
              Hər bir layihədə mükəmməlliyə can atırıq və müştəri məmnuniyyətini əsas meyar hesab edirik.
            </p>
            <div className="flex flex-col gap-3">
              {['Yüksək Keyfiyyət', 'İnnovativ Yanaşma', 'Daimi Dəstək'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 h-80 rounded-2xl overflow-hidden shadow-xl">
             {/* Buraya real bir şəkil (img tag) əlavə edə bilərsiniz */}
             <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-400">
                <Users size={80} />
             </div>
          </div>
        </div>
      </section>

      {/* Statistikalar */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">12+</div>
            <div className="text-blue-100">İllik Təcrübə</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">250+</div>
            <div className="text-blue-100">Uğurlu Layihə</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-blue-100">Peşəkar Komanda</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-blue-100">Müştəri Razılığı</div>
          </div>
        </div>
      </section>

      {/* Dəyərlərimiz */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Niyə Biz?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition duration-300 bg-white">
            <Target className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Dəqiqlik</h3>
            <p className="text-gray-600">Hər bir detala xüsusi diqqət yetirərək, xətasız nəticələr təqdim edirik.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition duration-300 bg-white">
            <Award className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Keyfiyyət</h3>
            <p className="text-gray-600">Dünya standartlarına uyğun proqram təminatı və dizayn xidmətləri.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition duration-300 bg-white">
            <Users className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Şəffaflıq</h3>
            <p className="text-gray-600">Müştərilərimizlə dürüst və açıq kommunikasiya qurmağa üstünlük veririk.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import { doctorsList } from './doctorsData';

// ----------------------------------------------------
// 1. مكون بطاقة الطبيب (بالحجم الجديد المناسب للهاتف)
// ----------------------------------------------------
const VIPDoctorCard = (doctor: any) => {
  return (
    <div className="glass rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-white/50 relative">

      {/* قسم الصورة (أصغر ومناسب للهاتف) */}
      <div className="relative h-40 md:h-56 w-full">
        <img src={doctor.images[0]} alt={doctor.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* شارات العروض والمجاني */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {doctor.isFree && (
            <span className="bg-green-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-green-400">
              ✨ خدمة مجانية
            </span>
          )}
          {doctor.specialOffer && (
            <span className="bg-medical-vip/90 backdrop-blur text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-yellow-300">
              🎁 {doctor.specialOffer}
            </span>
          )}
        </div>

        {/* التقييم والشكر */}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="text-yellow-500 text-xs">⭐</span>
            <span className="font-bold text-xs">{doctor.rating}</span>
          </div>
          <button className="bg-rose-500/90 backdrop-blur text-white px-2 py-1 rounded-full flex items-center gap-1 shadow-sm hover:bg-rose-600 transition-colors">
            <span className="text-xs">❤️</span>
            <span className="font-bold text-xs">{doctor.thanksCount}</span>
          </button>
        </div>
      </div>

      {/* قسم المعلومات (مضغوط ومرتب) */}
      <div className="p-4 md:p-5 flex flex-col flex-grow bg-white/60">
        <div className="flex gap-3 items-start mb-3">
          <div className="w-12 h-12 bg-white rounded-xl shadow-md p-2 flex-shrink-0 border border-gray-100">
            <img src={doctor.logo} alt="logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
            <p className="text-medical-primary text-xs font-bold">{doctor.specialty}</p>
            <p className="text-gray-500 text-[11px] mt-0.5">{doctor.degree} | {doctor.university}</p>
          </div>
        </div>

        {/* أوقات الدوام والمستشفى */}
        <div className="flex flex-wrap gap-2 mb-3">
          {doctor.workingHours && (
            <span className="bg-blue-50 text-blue-700 text-[11px] px-2 py-1 rounded-md border border-blue-100 flex items-center gap-1">
              ⏰ {doctor.workingHours}
            </span>
          )}
          {doctor.workingDays && (
            <span className="bg-gray-100 text-gray-700 text-[11px] px-2 py-1 rounded-md border border-gray-200 flex items-center gap-1">
              📅 {doctor.workingDays}
            </span>
          )}
          {doctor.hospitalShift && (
            <span className="bg-purple-50 text-purple-700 text-[11px] px-2 py-1 rounded-md border border-purple-100 flex items-center gap-1 w-full mt-1">
              🏥 مستشفى: {doctor.hospitalShift}
            </span>
          )}
        </div>

        {/* النصيحة الطبية */}
        <div className="bg-medical-bg p-3 rounded-xl mb-4 border border-blue-50/50">
          <p className="text-gray-600 text-xs leading-relaxed">
            <span className="text-medical-primary font-bold">💡 نصيحة: </span>
            {doctor.tip}
          </p>
        </div>

        <div className="mt-auto pt-3 border-t border-gray-100 flex gap-2">
          <a href={`tel:${doctor.phone}`} className="flex-1 bg-medical-primary hover:bg-blue-600 text-white py-2 rounded-xl font-bold flex justify-center items-center gap-2 transition-colors text-sm shadow-md shadow-blue-200">
            <span>📞</span> اتصال
          </a>
          <a href={`https://wa.me/${doctor.whatsapp}`} target="_blank" rel="noreferrer" className="flex-1 bg-medical-action hover:bg-green-600 text-white py-2 rounded-xl font-bold flex justify-center items-center gap-2 transition-colors text-sm shadow-md shadow-green-200">
            <span>💬</span> واتساب
          </a>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 2. الواجهة الرئيسية للموقع (App Component)
// ----------------------------------------------------
const App = () => {
  return (
    <div className="min-h-screen bg-medical-bg font-sans text-right" dir="rtl">

      {/* القسم العلوي (الترحاب) */}
      <header className="bg-medical-primary text-white py-12 px-4 rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">دليل عيادات سامراء</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            بوابتك للوصول إلى أفضل الأطباء، الصيدليات، والمختبرات في مدينتنا بسهولة وسرعة.
          </p>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto max-w-7xl px-4 py-10">

        {/* شريط البحث */}
        <div className="flex justify-center mb-10">
          <div className="glass-search p-2 rounded-2xl w-full max-w-2xl flex shadow-lg border border-white/50">
            <input
              type="text"
              placeholder="ابحث عن طبيب، تخصص، أو عيادة..."
              className="w-full bg-transparent outline-none px-4 text-gray-700 font-medium placeholder-gray-400"
            />
            <button className="bg-medical-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-md">
              بحث
            </button>
          </div>
        </div>

        {/* شبكة الأطباء (تجلب البيانات من الخزنة) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctorsList.map((doctor) => (
            <VIPDoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>

      </main>

      {/* التذييل (حقوق الملكية) */}
      <footer className="bg-white py-8 text-center border-t border-gray-200 mt-10">
        <p className="text-gray-500 font-bold mb-2">
          صُنع بحب لخدمة أهل سامراء © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-medical-primary font-bold">
          إدارة وتطوير: د. مؤمن عدي
        </p>
      </footer>

    </div>
  );
};

export default App;
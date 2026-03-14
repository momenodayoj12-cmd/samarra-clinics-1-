import React from 'react';
import { doctorsList } from './doctorsData';

// ----------------------------------------------------
// 1. مكون بطاقة الطبيب (تصميم عالمي، نظيف، بدون تداخل)
// ----------------------------------------------------
const VIPDoctorCard = (doctor: any) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col relative group">

      {/* 1. قسم الصورة (مساحة نظيفة وتدرج لوني خفيف) */}
      <div className="relative h-48 w-full bg-gray-50">
        <img src={doctor.images[0]} alt={doctor.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />

        {/* التقييم (أعلى اليمين - ناعم جداً) */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-2xl flex items-center gap-1 shadow-sm">
            <span className="text-yellow-500 text-sm">⭐</span>
            <span className="font-bold text-sm text-gray-800">{doctor.rating}</span>
          </div>
        </div>

        {/* شارة المجاني (أعلى اليسار - أنيقة وواضحة) */}
        {doctor.isFree && (
          <div className="absolute top-4 left-4">
            <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-2xl shadow-md">
              خدمة مجانية
            </span>
          </div>
        )}
      </div>

      {/* 2. قسم المعلومات الرئيسي (ترتيب عمودي يمنع التداخل) */}
      <div className="p-5 flex flex-col flex-grow relative">

        {/* الشعار والاسم (تصميم متداخل مع الصورة يعطي طابعاً احترافياً) */}
        <div className="flex gap-4 items-end mb-5 -mt-12 relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-md p-2 flex-shrink-0 border border-gray-50">
            <img src={doctor.logo} alt="logo" className="w-full h-full object-contain" />
          </div>
          <div className="pb-1">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{doctor.name}</h3>
            <p className="text-blue-600 text-sm font-bold mt-1">{doctor.specialty}</p>
          </div>
        </div>

        {/* خط فاصل ناعم */}
        <hr className="border-gray-100 mb-4" />

        {/* 3. قائمة التفاصيل (أيقونات ناعمة ونصوص واضحة لا تتداخل) */}
        <div className="flex flex-col gap-3 mb-5 text-sm text-gray-600 font-medium">
          {doctor.workingHours && (
            <div className="flex items-center gap-3">
              <span className="text-xl">🕒</span>
              <span>{doctor.workingHours} <span className="text-gray-400 font-normal mx-1">|</span> {doctor.workingDays}</span>
            </div>
          )}

          {doctor.hospitalShift && (
            <div className="flex items-center gap-3">
              <span className="text-xl">🏥</span>
              <span>{doctor.hospitalShift}</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="text-xl">🎓</span>
            <span className="truncate">{doctor.degree}</span>
          </div>
        </div>

        {/* 4. عرض خاص (صندوق أنيق ومستقل لا يزاحم بقية العناصر) */}
        {doctor.specialOffer && (
          <div className="bg-amber-50/80 border border-amber-200 text-amber-800 p-3.5 rounded-2xl mb-5 flex items-start gap-3 text-sm">
            <span className="text-amber-500 mt-0.5 text-lg">🎁</span>
            <span className="font-bold leading-relaxed">{doctor.specialOffer}</span>
          </div>
        )}

        {/* 5. أزرار التواصل (تصميم حديث بألوان مريحة) */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-2">
          <a href={`tel:${doctor.phone}`} className="bg-blue-50 hover:bg-blue-500 text-blue-600 hover:text-white py-3 rounded-2xl font-bold flex justify-center items-center gap-2 transition-all duration-300 text-sm">
            <span className="text-lg">📞</span> اتصال
          </a>
          <a href={`https://wa.me/${doctor.whatsapp}`} target="_blank" rel="noreferrer" className="bg-green-50 hover:bg-green-500 text-green-600 hover:text-white py-3 rounded-2xl font-bold flex justify-center items-center gap-2 transition-all duration-300 text-sm">
            <span className="text-lg">💬</span> واتساب
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
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">

      {/* القسم العلوي (الترحاب - تصميم هادئ) */}
      <header className="bg-white border-b border-gray-100 py-12 px-4 shadow-sm relative">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">دليل عيادات سامراء</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            بوابتك للوصول إلى أفضل الأطباء، الصيدليات، والمختبرات في مدينتنا بسهولة وسرعة.
          </p>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto max-w-7xl px-4 py-12">

        {/* شريط البحث (تصميم Apple-like) */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl w-full max-w-2xl flex shadow-sm border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
            <input
              type="text"
              placeholder="ابحث عن طبيب، تخصص، أو عيادة..."
              className="w-full bg-transparent outline-none px-4 text-gray-700 font-medium placeholder-gray-400"
            />
            <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
              بحث
            </button>
          </div>
        </div>

        {/* شبكة الأطباء */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsList.map((doctor) => (
            <VIPDoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>

      </main>

      {/* التذييل */}
      <footer className="bg-white py-10 text-center border-t border-gray-100 mt-10">
        <p className="text-gray-500 font-medium mb-2">
          صُنع بحب لخدمة أهل سامراء © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-gray-900 font-bold">
          إدارة وتطوير: د. مؤمن عدي
        </p>
      </footer>

    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { doctorsList } from './doctorsData';

// ==========================================
// 1. مكون تقليب الصور التلقائي (Auto Slider)
// ==========================================
const AutoSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // تقليب كل 3 ثوانٍ
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-100">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
  );
};

// ==========================================
// 2. الواجهة الرئيسية والتطبيق (App Component)
// ==========================================
const App = () => {
  // --- إدارة الحالة (State) ---
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // --- سحر "زر الرجوع" في الهاتف ---
  useEffect(() => {
    const handleBackButton = (e: PopStateEvent) => {
      if (selectedDoctor) {
        setSelectedDoctor(null); // العودة للقائمة بدل الخروج من الموقع
      }
    };
    window.addEventListener('popstate', handleBackButton);
    return () => window.removeEventListener('popstate', handleBackButton);
  }, [selectedDoctor]);

  const openDoctorProfile = (doctor: any) => {
    setSelectedDoctor(doctor);
    window.history.pushState({ profileOpen: true }, '', '#profile');
    window.scrollTo(0, 0); // رفع الشاشة للأعلى
  };

  const closeProfile = () => {
    setSelectedDoctor(null);
    window.history.back(); // تحديث سجل المتصفح
  };

  // --- محرك الفلترة والبحث ---
  const filteredDoctors = doctorsList.filter((doc) => {
    const matchesSearch = doc.name.includes(searchQuery) || doc.specialty.includes(searchQuery);
    const matchesFilter =
      activeFilter === 'all' ? true :
        activeFilter === 'free' ? doc.isFree :
          doc.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // ==========================================
  // شاشة 1: تفاصيل الطبيب (The Detail/Profile View)
  // ==========================================
  if (selectedDoctor) {
    const doc = selectedDoctor;
    return (
      <div className="min-h-screen bg-gray-50 font-sans text-right pb-20" dir="rtl">
        {/* زر العودة العلوي */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md p-4 shadow-sm flex items-center gap-3">
          <button onClick={closeProfile} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition">
            <span className="text-xl">➡️</span>
          </button>
          <h2 className="font-bold text-lg text-gray-800">الملف الشخصي</h2>
        </div>

        {/* غلاف الصور (سلايدر) */}
        <div className="h-64 md:h-80 w-full relative shadow-inner">
          <AutoSlider images={doc.images} />
          {/* الشعار المتداخل */}
          <div className="absolute -bottom-10 right-6 w-24 h-24 bg-white p-2 rounded-2xl shadow-xl border-2 border-white">
            <img src={doc.logo} alt="logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* البيانات الأساسية */}
        <div className="container mx-auto max-w-3xl px-6 pt-14 pb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">{doc.name}</h1>
          <p className="text-medical-primary font-bold text-lg mb-4">{doc.specialty}</p>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6 space-y-4">
            {/* الحقول الثابتة (7 حقول) */}
            <div className="flex gap-3 items-center text-gray-700">
              <span className="text-xl">🎓</span> <p><span className="font-bold">الشهادة:</span> {doc.degree}</p>
            </div>
            <div className="flex gap-3 items-center text-gray-700">
              <span className="text-xl">🏛️</span> <p><span className="font-bold">الجامعة:</span> {doc.university}</p>
            </div>
            <div className="flex gap-3 items-center text-gray-700">
              <span className="text-xl">📍</span> <p><span className="font-bold">العنوان:</span> {doc.landmark}</p>
            </div>
            <div className="flex gap-3 items-center text-gray-700">
              <span className="text-xl">⭐</span> <p><span className="font-bold">التقييم:</span> {doc.rating} ({doc.thanksCount} شكر)</p>
            </div>
            <div className="flex gap-3 items-center text-gray-700">
              <span className="text-xl">📅</span> <p><span className="font-bold">الأيام:</span> {doc.workingDays}</p>
            </div>
            <div className="flex gap-3 items-center text-gray-700">
              <span className="text-xl">⏰</span> <p><span className="font-bold">الوقت:</span> {doc.workingHours}</p>
            </div>
            {doc.hospitalShift && (
              <div className="flex gap-3 items-center text-gray-700">
                <span className="text-xl">🏥</span> <p><span className="font-bold">المستشفى:</span> {doc.hospitalShift}</p>
              </div>
            )}
          </div>

          {/* الحقول الاختيارية (تظهر فقط إن وجدت) */}
          {doc.specialOffer && (
            <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-5 rounded-2xl border border-amber-200 mb-6 shadow-sm">
              <h3 className="font-bold text-amber-800 flex gap-2 items-center mb-2">
                <span>🎁</span> عرض خاص
              </h3>
              <p className="text-amber-700 text-sm">{doc.specialOffer}</p>
            </div>
          )}

          {doc.tip && (
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 mb-6">
              <h3 className="font-bold text-blue-800 flex gap-2 items-center mb-2">
                <span>💡</span> نصيحة طبية
              </h3>
              <p className="text-blue-700 text-sm leading-relaxed">{doc.tip}</p>
            </div>
          )}

          {/* أزرار الاتصال الثابتة في الأسفل */}
          <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 border-t border-gray-200 flex gap-4 z-40">
            <a href={`tel:${doc.phone}`} className="flex-1 bg-medical-primary text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-blue-200">
              📞 اتصال
            </a>
            <a href={`https://wa.me/${doc.whatsapp}`} target="_blank" rel="noreferrer" className="flex-1 bg-green-500 text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-green-200">
              💬 واتساب
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // شاشة 2: الواجهة الرئيسية (The Master/List View)
  // ==========================================
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right pb-10" dir="rtl">

      {/* الترحاب والبحث */}
      <header className="bg-white pt-10 pb-6 px-4 shadow-sm rounded-b-3xl mb-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">دليل سامراء</h1>

          {/* شريط البحث */}
          <div className="bg-gray-100 p-2 rounded-2xl flex items-center mb-4">
            <span className="px-3 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="ابحث عن اسم، تخصص..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* أزرار الفلترة الأنيقة */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button onClick={() => setActiveFilter('all')} className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition ${activeFilter === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}>الكل</button>
            <button onClick={() => setActiveFilter('free')} className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition flex gap-1 ${activeFilter === 'free' ? 'bg-green-500 text-white' : 'bg-green-50 text-green-700'}`}>✨ مجاني</button>
            <button onClick={() => setActiveFilter('dentist')} className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition ${activeFilter === 'dentist' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-700'}`}>🦷 أسنان</button>
            <button onClick={() => setActiveFilter('doctor')} className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition ${activeFilter === 'doctor' ? 'bg-rose-500 text-white' : 'bg-rose-50 text-rose-700'}`}>🩺 أطباء</button>
          </div>
        </div>
      </header>

      {/* شبكة البطاقات (2 في الهاتف، 4 في الحاسوب) */}
      <main className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => openDoctorProfile(doctor)}
              className="bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-sm border border-white hover:shadow-xl transition cursor-pointer flex flex-col relative"
            >
              {/* الصور مع السلايدر */}
              <div className="h-32 md:h-48 w-full relative">
                <AutoSlider images={doctor.images} />
                {doctor.isFree && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-1 rounded-full z-10 font-bold shadow">
                    مجاني
                  </span>
                )}
              </div>

              {/* معلومات الخطف السريعة */}
              <div className="p-3 flex flex-col flex-grow text-center items-center">
                <div className="w-10 h-10 bg-white rounded-full shadow-md p-1 -mt-8 relative z-10 mb-2">
                  <img src={doctor.logo} alt="logo" className="w-full h-full object-contain rounded-full" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 truncate w-full">{doctor.name}</h3>
                <p className="text-[10px] md:text-sm text-blue-600 font-bold mt-1 truncate w-full">{doctor.specialty}</p>
                <div className="mt-2 text-[10px] text-gray-500 flex items-center gap-1 justify-center">
                  <span>⭐ {doctor.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
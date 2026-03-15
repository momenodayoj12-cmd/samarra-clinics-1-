import React, { useState, useEffect } from 'react';
import { doctorsList } from './doctorsData';

// قائمة الأقسام للفلترة
const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'dentist', name: 'طب أسنان' },
  { id: 'doctor', name: 'أطباء وعيادات' },
  { id: 'pharmacy', name: 'صيدليات' },
  { id: 'lab', name: 'مختبرات' },
  { id: 'center', name: 'مراكز طبية' },
];

// ==========================================
// 1. مكون بطاقة الطبيب (VIP Doctor Card)
// ==========================================
const VIPDoctorCard = (doctor: any) => {
  // استخراج أول حرفين من الاسم
  const initials = doctor.name.replace('د. ', '').substring(0, 2);

  // حالة تقليب الصور
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // حالة زر الشكر التفاعلي
  const [thanksCount, setThanksCount] = useState(doctor.thanksCount || 0);
  const [isThanked, setIsThanked] = useState(false);

  // تأثير تقليب الصور التلقائي
  useEffect(() => {
    if (doctor.images && doctor.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === doctor.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // تتغير كل 3 ثواني
      return () => clearInterval(interval);
    }
  }, [doctor.images]);

  // دالة الضغط على زر الشكر
  const handleThanksClick = () => {
    if (!isThanked) {
      setThanksCount(thanksCount + 1);
      setIsThanked(true);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-lg shadow-blue-900/5 dark:shadow-black/20 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col relative group">

      {/* قسم الصورة مع التقليب التلقائي */}
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {doctor.images.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={doctor.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"; }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* شارة المجاني */}
        {doctor.isFree && (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            ✨ خدمة مجانية
          </div>
        )}

        {/* زر الشكر والتقييم فوق الصورة */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="text-yellow-500 text-xs">⭐</span>
            <span className="font-bold text-xs text-gray-800 dark:text-white">{doctor.rating}</span>
          </div>
          <button
            onClick={handleThanksClick}
            className={`backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm transition-colors ${isThanked ? 'bg-rose-500 text-white' : 'bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white hover:bg-rose-100 dark:hover:bg-rose-900'}`}
          >
            <span className="text-xs">{isThanked ? '❤️' : '🤍'}</span>
            <span className="font-bold text-xs">{thanksCount}</span>
          </button>
        </div>
      </div>

      {/* قسم المعلومات */}
      <div className="p-5 flex flex-col flex-grow relative bg-white dark:bg-gray-800 transition-colors">

        {/* الحرف الأول والاسم */}
        <div className="flex gap-4 items-center mb-4 -mt-12 relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold border-4 border-white dark:border-gray-800">
            {initials}
          </div>
          <div className="pt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{doctor.name}</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-bold">{doctor.specialty}</p>
          </div>
        </div>

        {/* التفاصيل المختصرة */}
        <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
          {doctor.workingHours && <p className="flex items-center gap-2"><span className="text-lg">🕒</span> {doctor.workingHours} | {doctor.workingDays}</p>}
          {doctor.hospitalShift && <p className="flex items-center gap-2"><span className="text-lg">🏥</span> {doctor.hospitalShift}</p>}
          {doctor.landmark && <p className="flex items-center gap-2"><span className="text-lg">📍</span> {doctor.landmark}</p>}
        </div>

        {/* عرض خاص (إن وجد) */}
        {doctor.specialOffer && (
          <p className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold p-3 rounded-xl mb-4 text-center border border-yellow-100 dark:border-yellow-800">
            🎁 {doctor.specialOffer}
          </p>
        )}

        {/* أزرار التواصل */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <a href={`tel:${doctor.phone}`} className="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-500 dark:hover:bg-blue-600 text-blue-600 dark:text-blue-400 hover:text-white py-2.5 rounded-xl font-bold flex justify-center items-center gap-2 transition-colors text-sm">
            📞 اتصال
          </a>
          <a href={`https://wa.me/${doctor.whatsapp}`} target="_blank" rel="noreferrer" className="bg-green-50 dark:bg-green-900/20 hover:bg-green-500 dark:hover:bg-green-600 text-green-600 dark:text-green-400 hover:text-white py-2.5 rounded-xl font-bold flex justify-center items-center gap-2 transition-colors text-sm">
            💬 واتساب
          </a>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. الواجهة الرئيسية (App Component)
// ==========================================
const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // حالة الوضع الليلي
  const [isDarkMode, setIsDarkMode] = useState(false);

  // تفعيل الوضع الليلي على مستوى المتصفح
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // فلترة الأطباء حسب القسم والبحث
  const filteredDoctors = doctorsList.filter(doctor => {
    const matchesCategory = activeCategory === 'all' || doctor.category === activeCategory;
    const matchesSearch = doctor.name.includes(searchQuery) ||
      doctor.specialty.includes(searchQuery) ||
      (doctor.landmark && doctor.landmark.includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-right transition-colors duration-300" dir="rtl">

      {/* الشريط العلوي مع زر الوضع الليلي */}
      <header className="bg-white dark:bg-gray-800 py-8 px-4 shadow-sm text-center relative transition-colors duration-300">
        {/* زر التبديل بين الليلي والنهاري */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute top-6 left-4 md:left-8 bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-xl shadow-sm hover:scale-110 transition-transform"
          title="تغيير المظهر"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 mt-4 md:mt-0">دليل عيادات سامراء</h1>
        <p className="text-gray-500 dark:text-gray-400">المنصة الطبية الأولى في مدينتنا</p>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-8">

        {/* شريط البحث الذكي */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="ابحث عن طبيب، تخصص، أو منطقة (مثال: حي المعلمين)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-5 py-4 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <span className="absolute left-4 top-4 text-gray-400 text-xl">🔍</span>
          </div>
        </div>

        {/* أزرار الفلترة (الأقسام) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-blue-200 dark:shadow-blue-900/50'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <VIPDoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>

        {/* رسالة عند عدم وجود نتائج */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 dark:text-gray-500 font-bold text-xl mb-2">لا توجد نتائج مطابقة لبحثك.</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">حاول البحث بكلمة أخرى أو تغيير القسم.</p>
          </div>
        )}

      </main>

      {/* التذييل */}
      <footer className="bg-white dark:bg-gray-800 py-8 text-center border-t border-gray-100 dark:border-gray-700 mt-10 transition-colors duration-300">
        <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">
          صُنع بحب لخدمة أهل سامراء © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-gray-900 dark:text-white font-bold">
          إدارة وتطوير: د. مؤمن عدي
        </p>
      </footer>
    </div>
  );
};

export default App;
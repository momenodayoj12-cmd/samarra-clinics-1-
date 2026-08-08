import React, { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, Camera, Scissors, Mic, Play, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // يبدأ ليلي لجمال الزجاج
  const phoneNumber = "07704519695";

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/964${phoneNumber.substring(1)}`, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans selection:bg-emerald-500/30" dir="rtl">

      {/* خلفيات مضيئة لتعزيز التأثير الزجاجي */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* الشريط العلوي الزجاجي */}
      <nav className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between px-6 py-4 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 shadow-lg shadow-black/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">إ</div>
          <span className="text-2xl font-black tracking-tight">إزميل</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 backdrop-blur-md transition-all border border-white/50 dark:border-slate-600/50"
          >
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>

          <button
            onClick={handleWhatsApp}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <MessageCircle size={18} />
            <span dir="ltr">{phoneNumber}</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-20">

        {/* القسم الرئيسي (Hero) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-sm backdrop-blur-md">
              الإنتاج الطبي الاحترافي في سامراء
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              واقعك <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-500 to-teal-300">مبهر</span>،<br />
              ننقله للشاشة.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 font-bold max-w-md">
              لا نستخدم الكلمات الكثيرة. عدساتنا ومونتاجنا يتحدثان عن مهارة عيادتك الطبية بصمت واحتراف.
            </p>

            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20 dark:hover:shadow-white/20"
            >
              <Play size={24} className="text-emerald-500" />
              ابدأ بإنتاج محتواك
            </button>
          </div>

          {/* صورة الكاميرا الزجاجية */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-teal-500/30 rounded-[3rem] transform rotate-3 transition-transform group-hover:rotate-6"></div>
            <div className="relative p-2 bg-white/20 dark:bg-slate-800/20 backdrop-blur-2xl rounded-[3rem] border border-white/40 dark:border-slate-700/50 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="عدسة كاميرا احترافية"
                className="rounded-[2.5rem] object-cover h-[500px] w-full"
              />
              <div className="absolute bottom-8 right-8 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-4 rounded-2xl border border-white/50 dark:border-slate-700 flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <Camera size={24} />
                </div>
                <div>
                  <p className="font-black">جودة 4K</p>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400">معدات سينمائية</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* كروت الخدمات الزجاجية المفرغة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { icon: <Camera size={32} />, title: "تصوير سينمائي", desc: "نبرز أدق تفاصيل عملك الطبي بعدسات احترافية وإضاءة مدروسة." },
            { icon: <Scissors size={32} />, title: "مونتاج حديث", desc: "إيقاع بصري يجذب المراجعين بدون ملل أو حشو زائد." },
            { icon: <Mic size={32} />, title: "هندسة صوتية", desc: "صوت نقي وواضح يضيف طابع الثقة والهدوء لمقاطعك." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/50 shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 border border-emerald-500/20">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="font-bold text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* قسم قبل وبعد مبسط جداً */}
        <div className="rounded-[3rem] bg-white/30 dark:bg-slate-900/30 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 p-8 md:p-12 shadow-2xl mb-20 relative overflow-hidden">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-black mb-4">الفرق البصري</h2>
            <p className="font-bold text-slate-600 dark:text-slate-400">تحويل العادي إلى استثنائي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* قبل */}
            <div className="relative group rounded-3xl overflow-hidden border-2 border-transparent">
              <img src="https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="تصوير عادي" className="w-full h-64 object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-slate-900/40 flex flex-col justify-end p-6">
                <span className="text-white font-black text-xl">تصوير الهاتف (باهت)</span>
              </div>
            </div>

            {/* بعد */}
            <div className="relative group rounded-3xl overflow-hidden border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/20">
              <img src="https://images.pexels.com/photos/3762495/pexels-photo-3762495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="تصوير إزميل" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-white font-black text-xl flex items-center gap-2">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                  لمسة وكالة إزميل
                </span>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* الفوتر المختصر */}
      <footer className="relative z-10 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/10 dark:bg-slate-900/10 backdrop-blur-md py-8 text-center">
        <h3 className="text-xl font-black mb-2">وكالة إزميل</h3>
        <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-4">للإنتاج البصري والمونتاج الطبي - سامراء</p>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-6 py-2 rounded-full font-bold hover:bg-emerald-500/20 transition-colors"
        >
          <MessageCircle size={18} />
          <span dir="ltr">{phoneNumber}</span>
        </button>
      </footer>

      {/* زر الواتساب العائم للموبايل */}
      <button
        onClick={handleWhatsApp}
        className="sm:hidden fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-2xl shadow-emerald-500/40 flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-all"
      >
        <MessageCircle size={28} />
      </button>

    </div>
  );
}
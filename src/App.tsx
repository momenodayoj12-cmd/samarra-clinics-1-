import React, { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, ChevronDown, PlayCircle, ArrowLeft } from 'lucide-react';
import { CHISEL_INFO, PRICING_PACKAGES, VALUE_PILLARS, BEFORE_AFTER_DEMOS, HOOK_STRATEGIES, FAQS } from './data/chiselData';
import { PricingCard, ValuePillarCard, BeforeAfterCard, HookComparison } from './components/ChiselComponents';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CHISEL_INFO.whatsapp}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden text-slate-900 dark:text-slate-100" dir="rtl">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-emerald-600/20 text-2xl">
              ش
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-black leading-none tracking-tight">شَزِل</h1>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">Medical Production</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
            <button
              onClick={handleWhatsApp}
              className="hidden md:flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-full font-black text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle size={18} />
              احجز استشارة لعيادتك
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH IMAGE */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Hero Text */}
          <div className="text-right space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-black text-sm rounded-full mb-2 border border-emerald-200 dark:border-emerald-800">
              {CHISEL_INFO.tagline}
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight md:leading-tight">
              شغلك بالعيادة يبين بالواقع، <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-400">
                وإحنا نخليه يبين على الشاشة.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-bold leading-relaxed">
              {CHISEL_INFO.mainPitch}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button onClick={handleWhatsApp} className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 hover:-translate-y-1">
                <MessageCircle size={24} />
                تواصل معنا الآن
              </button>
              <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2">
                <PlayCircle size={24} className="text-emerald-500" />
                شاهد نموذج عملنا
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in fade-in slide-in-from-left-8 duration-1000 delay-200 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1585644026365-bcf78cc68379?auto=format&fit=crop&q=80&w=1200"
              alt="تصوير سينمائي للعيادات"
              className="rounded-[3rem] shadow-2xl object-cover h-[500px] w-full border-4 border-white dark:border-slate-800"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
                <PlayCircle className="text-emerald-600" size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">جودة الإنتاج</p>
                <p className="font-black text-slate-900 dark:text-white">4K Cinematic</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="py-20 px-6 bg-white/50 dark:bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">ليش شَزِل تختلف؟</h2>
            <p className="text-slate-500 dark:text-slate-400 font-bold">إحنا ما نبيع "مونتاج وتصوير"، إحنا نصمم لغة بصرية تحترم مهنتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PILLARS.map(pillar => (
              <ValuePillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER DEMO */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <BeforeAfterCard demo={BEFORE_AFTER_DEMOS[0]} />
        </div>
      </section>

      {/* HOOK STRATEGIES */}
      <section className="py-20 px-6 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">كيف نصطاد المشاهد بدون ابتذال؟</h2>
            <p className="text-slate-500 dark:text-slate-400 font-bold max-w-2xl mx-auto">لا نستخدم العناوين المزعجة (Clickbait). نستخدم استراتيجية "الفجوة المعرفية" التي تظهرك كخبير وتجبر المراجع على المتابعة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOOK_STRATEGIES.map((strategy, idx) => (
              <HookComparison key={idx} strategy={strategy} />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">باقات مصممة لعيادتك</h2>
            <p className="text-slate-500 dark:text-slate-400 font-bold">الدفع يتم بعد تسليم أول مقطع. الفكرة أن ترى الجودة بنفسك أولاً.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PACKAGES.map(pkg => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-10 text-center">أسئلة تتكرر علينا</h2>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-black text-right">{faq.question}</span>
                  <ChevronDown size={20} className={`transform transition-transform ${openFaq === index ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
                </button>

                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 py-5 bg-white dark:bg-slate-900' : 'max-h-0 py-0'}`}>
                  <p className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-slate-200 dark:border-slate-800">
        <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg mx-auto text-3xl mb-6">ش</div>
        <h3 className="text-2xl font-black mb-2">{CHISEL_INFO.name}</h3>
        <p className="text-slate-500 font-bold mb-8">{CHISEL_INFO.tagline}</p>
        <p className="text-sm text-slate-400 font-bold">© {new Date().getFullYear()} جميع الحقوق محفوظة لوكالة شَزِل للإنتاج الطبي.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="md:hidden fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-transform"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { doctorsList } from './doctorsData'; // استدعاء الخزنة
import {
  Stethoscope, Moon, Heart, Search, MapPin, Phone,
  MessageCircle, Star, Lightbulb, ChevronDown, Activity,
  ShieldCheck, GraduationCap, Award, Calendar, Quote, ChevronRight, ChevronLeft
} from 'lucide-react';

// --- المكونات الفرعية (نفس الجمال السابق) ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 glass px-6 py-4 flex justify-between items-center border-b border-white/20">
    <div className="flex items-center gap-3 text-medical-primary">
      <div className="bg-medical-primary p-2 rounded-xl text-white shadow-lg shadow-blue-500/20">
        <Stethoscope size={24} />
      </div>
      <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-l from-slate-800 to-slate-500">دليل عيادات سامراء</span>
    </div>
    <div className="flex gap-3">
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-all font-bold text-sm border border-indigo-100">
        <Moon size={16} />
        <span className="hidden sm:inline">الصيدليات الخافرة</span>
      </button>
    </div>
  </nav>
);

const VIPDoctorCard = ({
  name, specialty, degree, university, experience,
  rating, thanksCount, images, landmark, tip, logo,
  phone, whatsapp
}: any) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImg = (e: any) => { e.stopPropagation(); setCurrentImg((prev) => (prev + 1) % images.length); };
  const prevImg = (e: any) => { e.stopPropagation(); setCurrentImg((prev) => (prev - 1 + images.length) % images.length); };

  return (
    // أضفنا خاصية layout لكي تتحرك البطاقة بنعومة عند البحث
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-amber-200/40 relative group flex flex-col h-full"
    >
      <div className="relative h-72 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg} src={images[currentImg]}
            initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} className="w-full h-full object-cover" referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={prevImg} className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg text-slate-800 hover:bg-white"><ChevronRight size={20} /></button>
          <button onClick={nextImg} className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg text-slate-800 hover:bg-white"><ChevronLeft size={20} /></button>
        </div>
        <div className="absolute top-4 right-4 z-10"><div className="bg-white/90 backdrop-blur-md p-1 rounded-2xl border border-white shadow-xl"><img src={logo} alt="Logo" className="w-12 h-12 rounded-xl object-contain" /></div></div>
      </div>

      <div className="p-8 flex-1 flex flex-col text-right">
        <h3 className="text-2xl font-black text-slate-800 mb-1">{name}</h3>
        <p className="text-medical-primary font-bold text-sm mb-4">{specialty}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-100"><GraduationCap size={18} className="text-indigo-500" /><div className="text-[11px]"><p className="text-slate-400 font-bold leading-none mb-1">الجامعة</p><p className="text-slate-700 font-black">{university}</p></div></div>
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-100"><Calendar size={18} className="text-emerald-500" /><div className="text-[11px]"><p className="text-slate-400 font-bold leading-none mb-1">الخبرة</p><p className="text-slate-700 font-black">{experience} سنوات</p></div></div>
          <div className="col-span-2 flex items-center gap-2 bg-blue-50/50 p-2.5 rounded-2xl border border-blue-100/50"><Award size={18} className="text-amber-500" /><p className="text-xs font-bold text-slate-700">{degree}</p></div>
        </div>

        <div className="flex items-start gap-2 mb-6 bg-slate-50 p-3 rounded-2xl border-r-4 border-r-rose-400">
          <MapPin size={18} className="text-rose-500 shrink-0 mt-0.5" />
          <p className="text-xs font-bold text-slate-600 leading-relaxed">{landmark}</p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="col-span-2 bg-medical-action hover:bg-[#20bd5a] text-white rounded-2xl py-4 font-black flex items-center justify-center gap-2 transition-all shadow-xl shadow-green-500/20 active:scale-95">
            <MessageCircle size={22} /><span>حجز موعد واتساب</span>
          </a>
          <a href={`tel:${phone}`} className="bg-white hover:bg-slate-50 text-slate-700 rounded-2xl py-3.5 font-bold flex items-center justify-center gap-2 transition-all border-2 border-slate-100">
            <Phone size={18} /><span>اتصال</span>
          </a>
          <a href={`https://www.google.com/maps/search/?api=1&query=${landmark}`} target="_blank" rel="noreferrer" className="bg-white hover:bg-slate-50 text-slate-700 rounded-2xl py-3.5 font-bold flex items-center justify-center gap-2 transition-all border-2 border-slate-100">
            <MapPin size={18} /><span>الخريطة</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- المكون الرئيسي الذي يضم الذكاء والفلترة ---

export default function App() {
  // 1. هنا نزرع "العقل الإلكتروني" (الذاكرة)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  // 2. محرك البحث الذكي (يشتغل تلقائياً مع كل حرف يُكتب)
  const filteredDoctors = doctorsList.filter((doctor) => {
    // البحث بالاسم أو النقطة الدالة
    const matchesSearch = doctor.name.includes(searchTerm) || doctor.landmark.includes(searchTerm) || doctor.specialty.includes(searchTerm);
    // البحث بالتخصص من القائمة المنسدلة
    const matchesSpecialty = selectedSpecialty === "" || doctor.specialty.includes(selectedSpecialty);

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-['Tajawal']" dir="rtl">
      <Navbar />

      {/* قسم البحث السحري */}
      <section className="relative pt-20 pb-20 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-black mb-8 inline-block shadow-lg tracking-widest uppercase">سامراء المقدسة</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              طبيبك <span className="text-blue-600">بلمسة</span> واحدة
            </h1>

            {/* شريط البحث المربوط بالذاكرة الحية */}
            <div className="glass-search bg-white/80 p-3 rounded-[2rem] shadow-xl flex flex-col md:flex-row gap-3 max-w-3xl mx-auto border border-white">

              {/* حقل الكتابة الحر */}
              <div className="flex-1 flex items-center bg-slate-50 rounded-2xl px-4 py-4 border border-slate-100 focus-within:border-blue-500 transition-colors">
                <Search className="text-slate-400 ml-3" size={20} />
                <input
                  type="text"
                  placeholder="ابحث عن اسم طبيب، أو مكان (مثل: القاطول)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // تحديث الذاكرة فوراً
                  className="w-full bg-transparent outline-none text-slate-700 font-bold placeholder:font-medium"
                />
              </div>

              {/* قائمة التخصصات */}
              <div className="md:w-64 flex items-center bg-rose-50/50 rounded-2xl px-4 py-4 border border-rose-100 cursor-pointer relative">
                <Stethoscope className="text-rose-400 ml-3" size={20} />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)} // تحديث ذاكرة التخصص
                  className="w-full bg-transparent outline-none text-slate-700 font-bold appearance-none cursor-pointer"
                >
                  <option value="">كل التخصصات</option>
                  <option value="أسنان">طب الأسنان</option>
                  <option value="قلب">أمراض القلب</option>
                  <option value="أطفال">طب الأطفال</option>
                </select>
                <ChevronDown className="text-rose-400 absolute left-4" size={16} />
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* قسم عرض الأطباء (يتأثر بالبحث فوراً) */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-2">نتائج البحث</h2>
          <p className="text-slate-500 font-bold">وجدنا ({filteredDoctors.length}) أطباء يطابقون بحثك</p>
        </div>

        {/* AnimatePresence تجعل البطاقات تتلاشى وتظهر بنعومة سينمائية */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <VIPDoctorCard key={doctor.id} {...doctor} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="col-span-full text-center py-20"
              >
                <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={40} className="text-slate-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-700 mb-2">عذراً، لم نجد ما تبحث عنه!</h3>
                <p className="text-slate-500">جرب كتابة اسم آخر أو تقليل كلمات البحث.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
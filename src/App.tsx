import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Stethoscope, Moon, Heart, Search, MapPin, Phone,
  MessageCircle, Star, Lightbulb, ChevronDown, Activity,
  ShieldCheck, GraduationCap, Award, Calendar, Quote, ChevronRight, ChevronLeft
} from 'lucide-react';

// السطر السحري: هنا نخبر التصميم أن يجلب الأطباء من ملف الخزنة
import { doctorsList } from './doctorsData';

// --- المكونات الفرعية ---

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
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-all font-bold text-sm border border-rose-100">
        <Heart size={16} />
        <span className="hidden sm:inline">أطبائي</span>
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

  const nextImg = (e: any) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e: any) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 border border-amber-200/40 relative group flex flex-col h-full"
    >
      {/* 1. معرض الصور الثلاثي */}
      <div className="relative h-72 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg}
            src={images[currentImg]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={prevImg} className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg text-slate-800 hover:bg-white"><ChevronRight size={20} /></button>
          <button onClick={nextImg} className="p-2 rounded-full bg-white/80 backdrop-blur-md shadow-lg text-slate-800 hover:bg-white"><ChevronLeft size={20} /></button>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-md p-1 rounded-2xl border border-white shadow-xl">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-xl object-contain" />
          </div>
        </div>

        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold border border-white/20">
          {currentImg === 0 ? "صورة الطبيب" : currentImg === 1 ? "العيادة من الخارج" : "العيادة من الداخل"}
        </div>
      </div>

      {/* 2. تفاصيل الطبيب */}
      <div className="p-8 flex-1 flex flex-col text-right">
        <div className="flex justify-between items-start mb-4">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all"
          >
            <Heart size={20} className={isFavorite ? "fill-rose-500 text-rose-500" : ""} />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[11px] font-black border border-amber-200 uppercase tracking-wider">
            <ShieldCheck size={14} />
            <span>رعاية مميزة VIP</span>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-800 mb-1">{name}</h3>
        <p className="text-medical-primary font-bold text-sm mb-4">{specialty}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
            <GraduationCap size={18} className="text-indigo-500" />
            <div className="text-[11px]">
              <p className="text-slate-400 font-bold leading-none mb-1">الجامعة</p>
              <p className="text-slate-700 font-black">{university}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
            <Calendar size={18} className="text-emerald-500" />
            <div className="text-[11px]">
              <p className="text-slate-400 font-bold leading-none mb-1">الخبرة</p>
              <p className="text-slate-700 font-black">{experience} سنوات</p>
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-2 bg-blue-50/50 p-2.5 rounded-2xl border border-blue-100/50">
            <Award size={18} className="text-amber-500" />
            <p className="text-xs font-bold text-slate-700">{degree}</p>
          </div>
        </div>

        <div className="flex items-start gap-2 mb-6 bg-slate-50 p-3 rounded-2xl border-r-4 border-r-rose-400">
          <MapPin size={18} className="text-rose-500 shrink-0 mt-0.5" />
          <p className="text-xs font-bold text-slate-600 leading-relaxed">{landmark}</p>
        </div>

        <div className="mb-6 relative">
          <Quote size={24} className="absolute -top-2 -right-2 text-slate-100 -z-0" />
          <div className="relative z-10 bg-amber-50/30 p-4 rounded-2xl border border-amber-100/50 italic">
            <p className="text-sm text-amber-800 font-medium leading-relaxed">"{tip}"</p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
              <span className="text-slate-800 font-black text-sm mr-2">{rating}</span>
            </div>
            <div className="text-xs font-bold text-slate-400">
              <span className="text-medical-primary">{thanksCount}</span> شخص قدّموا شكرهم
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a href={`https://wa.me/${whatsapp}`} className="col-span-2 bg-medical-action hover:bg-[#20bd5a] text-white rounded-2xl py-4 font-black flex items-center justify-center gap-2 transition-all shadow-xl shadow-green-500/20 active:scale-95">
              <MessageCircle size={22} />
              <span>حجز موعد واتساب</span>
            </a>
            <a href={`tel:${phone}`} className="bg-white hover:bg-slate-50 text-slate-700 rounded-2xl py-3.5 font-bold flex items-center justify-center gap-2 transition-all border-2 border-slate-100">
              <Phone size={18} />
              <span>اتصال</span>
            </a>
            <button className="bg-white hover:bg-slate-50 text-slate-700 rounded-2xl py-3.5 font-bold flex items-center justify-center gap-2 transition-all border-2 border-slate-100">
              <MapPin size={18} />
              <span>الخريطة</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- المكونات الرئيسية ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-['Tajawal']" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-black mb-8 inline-block shadow-lg shadow-blue-500/30 tracking-widest uppercase">سامراء المقدسة</span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              طبيبك <span className="text-blue-600">بلمسة</span><br />واحدة
            </h1>
            <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto mb-12">
              الدليل الطبي الأذكى لمدينة سامراء.. نخبة الأطباء، الصيدليات الخافرة، والخدمات الطبية في مكان واحد.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VIP Doctors Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-3">نخبة سامراء الطبية</h2>
            <p className="text-slate-500 font-bold">أطباء متميزون بخدمات رعاية متكاملة</p>
          </div>
          <button className="bg-white px-6 py-3 rounded-2xl font-black text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 transition-all">تصفية التخصصات</button>
        </div>

        {/* السحر يحدث هنا: قراءة البيانات من ملف الخزنة وعرضها تلقائياً */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctorsList.map((doctor) => (
            <VIPDoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>

      </section>

      <footer className="mt-32 text-center py-12 border-t border-slate-200">
        <div className="flex items-center justify-center gap-2 mb-4 text-medical-primary opacity-50">
          <Stethoscope size={20} />
          <span className="font-black">دليل عيادات سامراء</span>
        </div>
        <p className="text-slate-400 font-bold">© 2026 جميع الحقوق محفوظة لأبي لقمان</p>
      </footer>
    </div>
  );
}
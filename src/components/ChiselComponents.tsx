import React from 'react';
import { Check, X, Scissors, Mic, Camera, Video, ArrowLeft, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PricingPackage, ValuePillar, BeforeAfterDemo } from '../types';

export const PricingCard: React.FC<{ pkg: PricingPackage }> = ({ pkg }) => {
    const colorMap = {
        emerald: 'bg-emerald-500 text-white',
        blue: 'bg-blue-600 text-white',
        purple: 'bg-purple-600 text-white'
    };

    const badgeColorMap = {
        emerald: 'text-emerald-500 bg-emerald-500/10',
        blue: 'text-blue-500 bg-blue-500/10',
        purple: 'text-purple-500 bg-purple-500/10'
    };

    return (
        <div className={`relative flex flex-col p-8 bg-white dark:bg-slate-900 rounded-[2rem] border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${pkg.popular ? 'border-emerald-500 shadow-emerald-500/20' : 'border-slate-100 dark:border-slate-800'}`}>

            {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald-500 text-white text-xs font-black rounded-full shadow-lg whitespace-nowrap">
                    الأكثر طلباً للعيادات
                </div>
            )}

            <span className={`self-start px-3 py-1.5 text-xs font-black rounded-full mb-4 ${badgeColorMap[pkg.badgeColor]}`}>
                {pkg.badge}
            </span>

            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{pkg.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px] leading-relaxed">{pkg.description}</p>

            <div className="mb-6">
                <span className="text-3xl font-black text-slate-900 dark:text-white">{pkg.priceFormatted.split(' / ')[0]}</span>
                <span className="text-sm font-bold text-slate-400"> / {pkg.priceFormatted.split(' / ')[1]}</span>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl mb-8 border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="text-emerald-500 font-black">النتيجة: </span>
                    {pkg.targetAudience}
                </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${feature.highlighted ? 'text-emerald-500' : 'text-slate-300 dark:text-slate-600'}`} />
                        <span className={`font-bold ${feature.highlighted ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-lg ${colorMap[pkg.badgeColor]}`}>
                {pkg.ctaText}
                <ArrowLeft size={18} />
            </button>
        </div>
    );
};

export const ValuePillarCard: React.FC<{ pillar: ValuePillar }> = ({ pillar }) => {
    const getIcon = (name: string) => {
        switch (name) {
            case 'editing': return <Scissors size={28} className="text-emerald-500" />;
            case 'audio': return <Mic size={28} className="text-emerald-500" />;
            case 'camera': return <Camera size={28} className="text-emerald-500" />;
            case 'video': return <Video size={28} className="text-emerald-500" />;
            default: return <Check size={28} className="text-emerald-500" />;
        }
    };

    return (
        <div className="flex flex-col items-start p-6 bg-white dark:bg-slate-800/50 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-inner flex items-center justify-center mb-6">
                {getIcon(pillar.iconName)}
            </div>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1">{pillar.title}</h4>
            <p className="text-xs font-black text-emerald-500 mb-4">{pillar.subtitle}</p>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
            </p>
        </div>
    );
};

export const BeforeAfterCard: React.FC<{ demo: BeforeAfterDemo }> = ({ demo }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 text-center bg-slate-50 dark:bg-slate-950">
                <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black rounded-full mb-3 shadow-sm">نموذج حي للفرق</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">كيف نحول المقطع العادي إلى محتوى مبهر؟</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold">موضوع المقطع: <span className="text-emerald-600 dark:text-emerald-400">{demo.topic}</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-l border-slate-100 dark:border-slate-800 bg-red-50/30 dark:bg-red-950/10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center shadow-inner">
                            <AlertCircle size={24} className="text-red-500" />
                        </div>
                        <h4 className="text-xl font-black text-slate-900 dark:text-white">الفيديو الخام (المعتاد)</h4>
                    </div>
                    <ul className="space-y-4">
                        {demo.rawIssues.map((issue, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                                <X size={20} className="text-red-400 mt-0.5 shrink-0" />
                                <span className="font-bold text-slate-600 dark:text-slate-300 leading-relaxed">{issue}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-8 bg-emerald-50/30 dark:bg-emerald-950/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shadow-inner">
                            <CheckCircle2 size={24} className="text-emerald-500" />
                        </div>
                        <h4 className="text-xl font-black text-slate-900 dark:text-white">بعد معالجة (شَزِل)</h4>
                    </div>
                    <ul className="space-y-4 relative z-10">
                        {demo.chiselFixes.map((fix, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                                <Check size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                                <span className="font-bold text-slate-900 dark:text-emerald-50 leading-relaxed">{fix}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 p-5 bg-white dark:bg-slate-800 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 relative z-10 text-center shadow-lg">
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-bold mb-2 uppercase tracking-widest">الـ Hook الجديد</p>
                        <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">"{demo.hookText}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const HookComparison: React.FC<{ strategy: { title: string, bad: string, good: string } }> = ({ strategy }) => {
    return (
        <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-black text-slate-900 dark:text-white mb-5 text-center text-lg">{strategy.title}</h5>
            <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-2xl">
                    <X size={18} className="text-red-500 mt-0.5 shrink-0" />
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="text-red-500 font-black block mb-1">أسلوب تقليدي:</span>
                        {strategy.bad}
                    </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 shadow-inner">
                    <Check size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-sm font-bold text-slate-900 dark:text-emerald-50 leading-relaxed">
                        <span className="text-emerald-600 font-black block mb-1">أسلوب شَزِل:</span>
                        {strategy.good}
                    </p>
                </div>
            </div>
        </div>
    );
};
// تعريف أنواع البيانات الخاصة بوكالة شَزِل

export interface PackageFeature {
    text: string;
    highlighted?: boolean;
}

export interface PricingPackage {
    id: string;
    title: string;
    badge: string;
    priceIQD: string;
    priceFormatted: string;
    badgeColor: 'emerald' | 'blue' | 'purple';
    description: string;
    targetAudience: string;
    features: PackageFeature[];
    popular?: boolean;
    ctaText: string;
}

export interface BeforeAfterDemo {
    id: string;
    doctorName: string;
    specialty: string;
    topic: string;
    rawIssues: string[]; // مشاكل الفيديو الخام
    chiselFixes: string[]; // المعالجة التي قامت بها شَزِل
    hookText: string;
    visualStyle: string;
}

export interface ValuePillar {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    iconName: string;
}

export interface FAQItem {
    question: string;
    answer: string;
    category: 'pricing' | 'process' | 'quality';
}
export const doctorsList = [
    // ================= 1. طب الأسنان =================
    {
        id: 1,
        name: "د. مؤمن عدي",
        category: "dentist", specialty: "طالب طب أسنان", degree: "جامعة تكريت - المرحلة الثالثة",
        university: "جامعة تكريت", experience: "العيادات التعليمية", rating: "5.0", thanksCount: 450,
        landmark: "سامراء - حي المعلمين", tip: "تفريش الأسنان قبل النوم أهم من تفريش الصباح.",
        logo: "https://cdn-icons-png.flaticon.com/512/3481/3481061.png",
        images: ["https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800"],
        phone: "07700000001", whatsapp: "07700000001", workingDays: "الأحد إلى الخميس", workingHours: "8:00 ص - 2:00 م",
        hospitalShift: "الاستشارية التعليمية - تكريت", isFree: true, specialOffer: "حشوات وتنظيف مجاني بإشراف الأساتذة 🎁"
    },
    {
        id: 2,
        name: "د. حمودي", category: "dentist", specialty: "طالب طب أسنان", degree: "جامعة تكريت",
        university: "جامعة تكريت", experience: "العيادات التعليمية", rating: "4.9", thanksCount: 120,
        landmark: "سامراء - حي الضباط", tip: "لا تكثر من السكريات وحافظ على المضمضة.",
        logo: "https://cdn-icons-png.flaticon.com/512/3481/3481061.png",
        images: ["https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800"],
        phone: "07800000002", whatsapp: "07800000002", workingDays: "يومياً", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "جامعة تكريت", isFree: false, specialOffer: "جسر للطيبين 🎁"
    },
    {
        id: 3,
        name: "د. ياسر محمود", category: "dentist", specialty: "أخصائي جراحة الوجه والفكين", degree: "البورد العراقي",
        university: "جامعة بغداد", experience: "12 سنة", rating: "4.8", thanksCount: 310,
        landmark: "سامراء - شارع الأطباء", tip: "قلع ضرس العقل مبكراً يمنع تزاحم الأسنان.",
        logo: "https://cdn-icons-png.flaticon.com/512/3481/3481061.png",
        images: ["https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800"],
        phone: "07700000003", whatsapp: "07700000003", workingDays: "السبت إلى الأربعاء", workingHours: "3:00 ع - 7:00 م",
        hospitalShift: "مستشفى سامراء العام", isFree: false, specialOffer: ""
    },

    // ================= 2. الباطنية والقلب =================
    {
        id: 4,
        name: "د. عمر طارق", category: "doctor", specialty: "أخصائي أمراض القلب والتخطيط", degree: "البورد العربي",
        university: "الجامعة المستنصرية", experience: "15 سنة", rating: "4.9", thanksCount: 520,
        landmark: "سامراء - حي الشرطة", tip: "تجنب التوتر ومارس المشي نصف ساعة يومياً.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1551076805-e18690c5e561?w=800"],
        phone: "07700000004", whatsapp: "07700000004", workingDays: "السبت - الخميس", workingHours: "4:00 ع - 9:00 م",
        hospitalShift: "مستشفى سامراء - الطوارئ", isFree: false, specialOffer: "تخطيط قلب مجاني لكبار السن يوم الإثنين"
    },
    {
        id: 5,
        name: "د. خالد وليد", category: "doctor", specialty: "طبيب ممارس باطنية", degree: "دبلوم عالي",
        university: "جامعة تكريت", experience: "8 سنوات", rating: "4.6", thanksCount: 180,
        landmark: "سامراء - الجبيرية", tip: "شرب الماء بكميات كافية يحمي كليتيك.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800"],
        phone: "07800000005", whatsapp: "07800000005", workingDays: "يومياً", workingHours: "5:00 ع - 10:00 م",
        hospitalShift: "", isFree: false, specialOffer: ""
    },
    {
        id: 6,
        name: "د. زيد عبد الرحمن", category: "doctor", specialty: "استشاري الغدد الصماء والسكري", degree: "زمالة بريطانية",
        university: "جامعة الكوفة", experience: "20 سنة", rating: "5.0", thanksCount: 890,
        landmark: "سامراء - شارع الأطباء الرئيسي", tip: "فحص السكر التراكمي ضروري كل 3 أشهر.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800"],
        phone: "07700000006", whatsapp: "07700000006", workingDays: "الأحد - الأربعاء", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء العام", isFree: false, specialOffer: ""
    },

    // ================= 3. الصيدليات =================
    {
        id: 7,
        name: "صيدلية الرازي", category: "pharmacy", specialty: "توفير الأدوية النادرة والمزمنة", degree: "بإدارة د. أحمد",
        university: "جامعة بغداد", experience: "مفتوحة منذ 2010", rating: "4.9", thanksCount: 1200,
        landmark: "سامراء - حي المعلمين", tip: "لا تتوقف عن أخذ دواء الضغط دون استشارة الطبيب.",
        logo: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
        images: ["https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800"],
        phone: "07700000007", whatsapp: "07700000007", workingDays: "يومياً", workingHours: "8:00 ص - 12:00 ليلاً",
        hospitalShift: "", isFree: false, specialOffer: "قياس ضغط وسكر مجاني 🎁"
    },
    {
        id: 8,
        name: "صيدلية الشفاء", category: "pharmacy", specialty: "أدوية ومستحضرات تجميل طبية", degree: "بإدارة د. سعد",
        university: "جامعة تكريت", experience: "تأسست 2018", rating: "4.7", thanksCount: 450,
        landmark: "سامراء - القلعة", tip: "احفظ الأدوية بعيداً عن أشعة الشمس المباشرة.",
        logo: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
        images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800"],
        phone: "07800000008", whatsapp: "07800000008", workingDays: "يومياً", workingHours: "9:00 ص - 11:00 م",
        hospitalShift: "", isFree: false, specialOffer: "توصيل مجاني داخل سامراء"
    },
    {
        id: 9,
        name: "صيدلية سامراء الحديثة", category: "pharmacy", specialty: "أدوية وعلاجات أطفال", degree: "بإدارة د. مصطفى",
        university: "جامعة الموصل", experience: "خبرة 5 سنوات", rating: "4.8", thanksCount: 300,
        landmark: "سامراء - حي الضباط", tip: "التزم بجرعة المضاد الحيوي كاملة.",
        logo: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
        images: ["https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800"],
        phone: "07700000009", whatsapp: "07700000009", workingDays: "يومياً", workingHours: "24 ساعة",
        hospitalShift: "", isFree: false, specialOffer: ""
    },

    // ================= 4. المختبرات =================
    {
        id: 10,
        name: "مختبر البيان المركزي", category: "lab", specialty: "كافة التحليلات المرضية والهرمونات", degree: "بإدارة د. قاسم",
        university: "جامعة بغداد", experience: "أجهزة ألمانية حديثة", rating: "4.9", thanksCount: 600,
        landmark: "سامراء - شارع الأطباء", tip: "يُفضل الصيام 10 ساعات قبل فحص الدهون.",
        logo: "https://cdn-icons-png.flaticon.com/512/1046/1046269.png",
        images: ["https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800"],
        phone: "07700000010", whatsapp: "07700000010", workingDays: "يومياً عدا الجمعة", workingHours: "8:00 ص - 8:00 م",
        hospitalShift: "", isFree: false, specialOffer: "خصم 20% لحاملي بطاقة الرعاية"
    },
    {
        id: 11,
        name: "مختبر الحياة", category: "lab", specialty: "تحليلات شاملة وفحوصات زواج", degree: "بإدارة م. بايلوجي علي",
        university: "جامعة سامراء", experience: "دقة وسرعة بالإنجاز", rating: "4.6", thanksCount: 220,
        landmark: "سامراء - حي المثنى", tip: "تأكد من شرب الماء قبل فحص الإدرار.",
        logo: "https://cdn-icons-png.flaticon.com/512/1046/1046269.png",
        images: ["https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800"],
        phone: "07800000011", whatsapp: "07800000011", workingDays: "يومياً", workingHours: "4:00 ع - 9:00 م",
        hospitalShift: "", isFree: false, specialOffer: ""
    },
    {
        id: 12,
        name: "مختبر المستقبل", category: "lab", specialty: "فحوصات الفيتامينات والمعادن", degree: "بإدارة د. ليث",
        university: "جامعة الأنبار", experience: "10 سنوات", rating: "4.8", thanksCount: 410,
        landmark: "سامراء - حي الشرطة", tip: "نقص فيتامين D يسبب خمولاً وآلاماً في العظام.",
        logo: "https://cdn-icons-png.flaticon.com/512/1046/1046269.png",
        images: ["https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800"],
        phone: "07700000012", whatsapp: "07700000012", workingDays: "يومياً", workingHours: "3:00 ع - 10:00 م",
        hospitalShift: "", isFree: false, specialOffer: "خدمة سحب الدم من المنزل مجاناً 🎁"
    },

    // ================= 5. المراكز الطبية =================
    {
        id: 13,
        name: "مركز النور للأشعة والمفراس", category: "center", specialty: "أشعة رقمية، رنين مغناطيسي، سونار", degree: "كادر متخصص",
        university: "أجهزة سيمنز", experience: "أدق تشخيص", rating: "4.9", thanksCount: 750,
        landmark: "سامراء - الشارع العام", tip: "تجنب لبس المعادن عند إجراء الرنين المغناطيسي.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800"],
        phone: "07700000013", whatsapp: "07700000013", workingDays: "يومياً عدا الجمعة", workingHours: "8:00 ص - 8:00 م",
        hospitalShift: "", isFree: false, specialOffer: ""
    },
    {
        id: 14,
        name: "مركز الأمل للعلاج الطبيعي", category: "center", specialty: "تأهيل طبي، إصابات ملاعب، انزلاق", degree: "د. عبد الله",
        university: "جامعة بغداد", experience: "برامج تأهيلية متكاملة", rating: "4.8", thanksCount: 290,
        landmark: "سامراء - حي الجبيرية", tip: "الجلوس الصحيح يجنبك آلام أسفل الظهر.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1576091160550-2173ff9e5952?w=800"],
        phone: "07800000014", whatsapp: "07800000014", workingDays: "السبت - الأربعاء", workingHours: "3:00 ع - 9:00 م",
        hospitalShift: "", isFree: false, specialOffer: "الجلسة الأولى بنصف السعر"
    },
    {
        id: 15,
        name: "مجمع سامراء التخصصي", category: "center", specialty: "عيادات شاملة، طوارئ مصغرة", degree: "نخبة من الأطباء",
        university: "بإشراف وزارة الصحة", experience: "خدمة متكاملة", rating: "4.5", thanksCount: 880,
        landmark: "سامراء - حي المعلمين", tip: "راجع الطوارئ فوراً عند الشعور بألم حاد في الصدر.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"],
        phone: "07700000015", whatsapp: "07700000015", workingDays: "يومياً", workingHours: "24 ساعة",
        hospitalShift: "", isFree: false, specialOffer: ""
    },

    // ================= 6. طب الأطفال =================
    {
        id: 16,
        name: "د. إبراهيم يوسف", category: "doctor", specialty: "أخصائي طب الأطفال وحديثي الولادة", degree: "البورد العراقي",
        university: "جامعة الموصل", experience: "14 سنة", rating: "4.9", thanksCount: 430,
        landmark: "سامراء - حي الضباط", tip: "الرضاعة الطبيعية هي المناعة الأولى لطفلك.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1584515933487-779824d29309?w=800"],
        phone: "07700000016", whatsapp: "07700000016", workingDays: "السبت - الأربعاء", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء", isFree: false, specialOffer: "فحص مجاني للأيتام يوم السبت 🎁"
    },
    {
        id: 17,
        name: "د. محمود قحطان", category: "doctor", specialty: "طبيب أطفال وتغذية", degree: "دبلوم عالي",
        university: "جامعة تكريت", experience: "8 سنوات", rating: "4.7", thanksCount: 210,
        landmark: "سامراء - شارع الأطباء", tip: "لا تعطِ العسل للطفل قبل إتمامه عامه الأول.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"],
        phone: "07800000017", whatsapp: "07800000017", workingDays: "يومياً", workingHours: "3:00 ع - 9:00 م",
        hospitalShift: "", isFree: false, specialOffer: ""
    },
    {
        id: 18,
        name: "د. سرمد خليل", category: "doctor", specialty: "استشاري أطفال وخدج", degree: "البورد العربي",
        university: "جامعة بغداد", experience: "22 سنة", rating: "5.0", thanksCount: 650,
        landmark: "سامراء - القلعة", tip: "مراقبة حرارة الطفل أهم من إعطاء المضاد الحيوي فوراً.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800"],
        phone: "07700000018", whatsapp: "07700000018", workingDays: "الأحد - الخميس", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء العام", isFree: false, specialOffer: ""
    },

    // ================= 7. العيون =================
    {
        id: 19,
        name: "د. حسن صباح", category: "doctor", specialty: "أخصائي طب وجراحة العيون", degree: "البورد العراقي",
        university: "جامعة بغداد", experience: "11 سنة", rating: "4.8", thanksCount: 340,
        landmark: "سامراء - شارع الأطباء", tip: "أرِح عينيك من الشاشات كل 20 دقيقة.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1588600878108-578307a3cc9d?w=800"],
        phone: "07700000019", whatsapp: "07700000019", workingDays: "السبت - الخميس", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء", isFree: false, specialOffer: "فحص مجاني لضعاف البصر الخميس 🎁"
    },
    {
        id: 20,
        name: "د. عثمان جاسم", category: "doctor", specialty: "ليزك وتصحيح بصر", degree: "زميل كلية الجراحين",
        university: "جامعة الكوفة", experience: "16 سنة", rating: "4.9", thanksCount: 510,
        landmark: "سامراء - حي المعلمين", tip: "ارتداء النظارة الشمسية يقي من الماء الأبيض.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=800"],
        phone: "07800000020", whatsapp: "07800000020", workingDays: "يومياً عدا الجمعة", workingHours: "3:00 ع - 7:00 م",
        hospitalShift: "", isFree: false, specialOffer: ""
    },
    {
        id: 21,
        name: "د. بلال طه", category: "doctor", specialty: "طبيب عيون ممارس", degree: "دبلوم",
        university: "جامعة تكريت", experience: "6 سنوات", rating: "4.5", thanksCount: 130,
        landmark: "سامراء - حي الشرطة", tip: "القطرات المرطبة ضرورية في الصيف الحار.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800"],
        phone: "07700000021", whatsapp: "07700000021", workingDays: "يومياً", workingHours: "4:00 ع - 9:00 م",
        hospitalShift: "الاستشارية", isFree: false, specialOffer: ""
    },

    // ================= 8. العظام والمفاصل =================
    {
        id: 22,
        name: "د. طارق شاكر", category: "doctor", specialty: "أخصائي جراحة العظام والمفاصل", degree: "البورد العربي",
        university: "جامعة الموصل", experience: "18 سنة", rating: "4.9", thanksCount: 620,
        landmark: "سامراء - الجبيرية", tip: "حافظ على وزنك المثالي لتقليل الضغط على ركبتيك.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800"],
        phone: "07700000022", whatsapp: "07700000022", workingDays: "السبت - الأربعاء", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء العام", isFree: false, specialOffer: ""
    },
    {
        id: 23,
        name: "د. ليث حامد", category: "doctor", specialty: "كسور وإصابات ملاعب", degree: "البورد العراقي",
        university: "جامعة بغداد", experience: "9 سنوات", rating: "4.7", thanksCount: 280,
        landmark: "سامراء - شارع الأطباء", tip: "التمارين الصباحية تمنع تيبس المفاصل.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800"],
        phone: "07800000023", whatsapp: "07800000023", workingDays: "يومياً", workingHours: "3:00 ع - 9:00 م",
        hospitalShift: "", isFree: false, specialOffer: ""
    },
    {
        id: 24,
        name: "د. قيس عبد الرزاق", category: "doctor", specialty: "استشاري المفاصل والعمود الفقري", degree: "زمالة بريطانية",
        university: "جامعة البصرة", experience: "25 سنة", rating: "5.0", thanksCount: 810,
        landmark: "سامراء - القلعة", tip: "احذر من حمل الأشياء الثقيلة بطريقة خاطئة.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800"],
        phone: "07700000024", whatsapp: "07700000024", workingDays: "الأحد - الخميس", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء", isFree: false, specialOffer: ""
    },

    // ================= 9. الجلدية =================
    {
        id: 25,
        name: "د. فيصل حازم", category: "doctor", specialty: "أخصائي الأمراض الجلدية", degree: "البورد العربي",
        university: "الجامعة المستنصرية", experience: "13 سنة", rating: "4.8", thanksCount: 390,
        landmark: "سامراء - حي المعلمين", tip: "واقي الشمس ضرورة وليس رفاهية في جونا.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1532938911079-1b06ac7ceef7?w=800"],
        phone: "07700000025", whatsapp: "07700000025", workingDays: "السبت - الخميس", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء العام", isFree: false, specialOffer: ""
    },
    {
        id: 26,
        name: "د. سيف الدين علي", category: "doctor", specialty: "حساسية وتجميل طبي", degree: "دبلوم عالي",
        university: "جامعة تكريت", experience: "7 سنوات", rating: "4.6", thanksCount: 200,
        landmark: "سامراء - شارع الأطباء", tip: "ترطيب الجلد يومياً يمنع التشققات والحكة.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=800"],
        phone: "07800000026", whatsapp: "07800000026", workingDays: "يومياً", workingHours: "3:00 ع - 7:00 م",
        hospitalShift: "", isFree: false, specialOffer: "استشارة ليزر مجانية 🎁"
    },
    {
        id: 27,
        name: "د. عمار يونس", category: "doctor", specialty: "استشاري الأمراض الجلدية والتناسلية", degree: "البورد العراقي",
        university: "جامعة بغداد", experience: "20 سنة", rating: "4.9", thanksCount: 470,
        landmark: "سامراء - حي الضباط", tip: "عالج حب الشباب مبكراً لتجنب الندبات الدائمة.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800"],
        phone: "07700000027", whatsapp: "07700000027", workingDays: "الأحد - الأربعاء", workingHours: "4:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء", isFree: false, specialOffer: ""
    },

    // ================= 10. الجراحة العامة =================
    {
        id: 28,
        name: "د. معاذ سالم", category: "doctor", specialty: "أخصائي الجراحة العامة والناظورية", degree: "البورد العربي",
        university: "جامعة الكوفة", experience: "15 سنة", rating: "4.9", thanksCount: 550,
        landmark: "سامراء - شارع الأطباء", tip: "آلام البطن الحادة المستمرة تستوجب فحصاً فورياً.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1551076805-e18690c5e561?w=800"],
        phone: "07700000028", whatsapp: "07700000028", workingDays: "السبت - الخميس", workingHours: "4:00 ع - 9:00 م",
        hospitalShift: "مستشفى سامراء - صالة العمليات", isFree: false, specialOffer: ""
    },
    {
        id: 29,
        name: "د. فراس عبد الجبار", category: "doctor", specialty: "جراحة الجهاز الهضمي والغدد", degree: "زميل كلية الجراحين",
        university: "جامعة بغداد", experience: "22 سنة", rating: "5.0", thanksCount: 780,
        landmark: "سامراء - الجبيرية", tip: "تناول الألياف يقي من مشاكل القولون والجراحة.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800"],
        phone: "07800000029", whatsapp: "07800000029", workingDays: "الأحد - الأربعاء", workingHours: "5:00 ع - 8:00 م",
        hospitalShift: "مستشفى سامراء العام", isFree: false, specialOffer: ""
    },
    {
        id: 30,
        name: "د. لؤي شاكر", category: "doctor", specialty: "طبيب ممارس جراحة", degree: "بكالوريوس طب وجراحة",
        university: "جامعة تكريت", experience: "5 سنوات", rating: "4.6", thanksCount: 160,
        landmark: "سامراء - القلعة", tip: "تعقيم الجروح البسيطة يمنع مضاعفات خطيرة.",
        logo: "https://cdn-icons-png.flaticon.com/512/3004/3004416.png",
        images: ["https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800"],
        phone: "07700000030", whatsapp: "07700000030", workingDays: "يومياً", workingHours: "4:00 ع - 9:00 م",
        hospitalShift: "الطوارئ الجراحية", isFree: false, specialOffer: "خياطة الجروح البسيطة مجاناً 🎁"
    }
];
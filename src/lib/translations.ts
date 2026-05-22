export interface ProductTranslation {
  id: string;
  name: string;
  category: "nutrition" | "accessories" | "aquariums" | "wellness";
  categoryLabel: string;
  price: number; // Numeric price for easy cart calculations
  priceLabel: string;
  image: string;
  description: string;
  badge?: string;
}

export const productsList: { ar: ProductTranslation[]; en: ProductTranslation[] } = {
  ar: [
    {
      id: "prod-1",
      name: "رويال كانين لطعام الكلاب المخصص",
      category: "nutrition",
      categoryLabel: "التغذية والأنظمة الغذائية",
      price: 28.00,
      priceLabel: "28.00 دينار",
      image: "https://images.unsplash.com/photo-1589924691106-07a3c0d5b5cc?q=80&w=500&auto=format&fit=crop",
      description: "تركيبة غذائية عضوية مخصصة لسلالات معينة لتعزيز لمعان الفراء وسلامة الهضم.",
      badge: "الأكثر مبيعاً",
    },
    {
      id: "prod-2",
      name: "مجموعة لجام وصدرية جلدية فاخرة",
      category: "accessories",
      categoryLabel: "مستلزمات وإكسسوارات",
      price: 42.00,
      priceLabel: "42.00 دينار",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=500&auto=format&fit=crop",
      description: "مصنوعة من الجلد الإيطالي الطبيعي الفاخر مع أبازيم نحاسية متينة ومريحة للتنفس.",
      badge: "حصري",
    },
    {
      id: "prod-3",
      name: "برج تسلق القطط الفاخر (قصر السيزال الهادئ)",
      category: "accessories",
      categoryLabel: "مستلزمات وإكسسوارات",
      price: 85.00,
      priceLabel: "85.00 دينار",
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=500&auto=format&fit=crop",
      description: "قصر تسلق وخدش فاخر للقطط مصنوع من خشب البلوط الطبيعي وحبل السيزال المستدام عالي الجودة.",
      badge: "شائع حالياً",
    },
    {
      id: "prod-4",
      name: "حوض سمك زجاجي نقي بدون حواف (كريستالي)",
      category: "aquariums",
      categoryLabel: "أحواض ومستلزمات مائية",
      price: 145.00,
      priceLabel: "145.00 دينار",
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=500&auto=format&fit=crop",
      description: "زجاج شفاف منخفض الحديد وذو نقاء استثنائي لعرض مناظر مائية غامرة وكريستالية.",
      badge: "فاخر",
    },
    {
      id: "prod-5",
      name: "شامبو الصبار العضوي للعناية والتنظيف",
      category: "wellness",
      categoryLabel: "العناية والصحة",
      price: 14.50,
      priceLabel: "14.50 دينار",
      image: "https://images.unsplash.com/photo-1608454367599-c133fcabfb65?q=80&w=500&auto=format&fit=crop",
      description: "شامبو خالي من الكبريتات بتركيبة الصبار الطبيعية لتهدئة البشرة الحساسة ومنح الشعر لمعاناً حريرياً.",
    },
    {
      id: "prod-6",
      name: "لعبة ليزر تفاعلية ذكية للقطط (بالذكاء الاصطناعي)",
      category: "accessories",
      categoryLabel: "مستلزمات وإكسسوارات",
      price: 35.00,
      priceLabel: "35.00 دينار",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=500&auto=format&fit=crop",
      description: "مؤشر ليزر ذكي ذو مسارات عشوائية تفاعلية لإبقاء قطتك نشيطة ومستمتعة طوال اليوم.",
    },
    {
      id: "prod-7",
      name: "أعواد العناية بالأسنان والإنزيمات الوقائية",
      category: "wellness",
      categoryLabel: "العناية والصحة",
      price: 12.00,
      priceLabel: "12.00 دينار",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500&auto=format&fit=crop",
      description: "أعواد مضغ طبية بنكهة لذيذة تمنع تراكم الجير وتنعش أنفاس أليفك يومياً بشكل مثبت طبياً.",
      badge: "نوصي به",
    },
    {
      id: "prod-8",
      name: "سرير تقويم العظام الفاخر (ميموري فوم)",
      category: "accessories",
      categoryLabel: "مستلزمات وإكسسوارات",
      price: 60.00,
      priceLabel: "60.00 دينار",
      image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=500&auto=format&fit=crop",
      description: "سرير رغوي ذكي مزدوج الكثافة لتخفيف الضغط على المفاصل ومساعدة حيوانك الأليف على الاسترخاء العميق.",
    },
    {
      id: "prod-9",
      name: "أوريجين طعام الكلاب البالغة بالأسماك الستة الممتاز",
      category: "nutrition",
      categoryLabel: "التغذية والأنظمة الغذائية",
      price: 32.00,
      priceLabel: "32.00 دينار",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=500&auto=format&fit=crop",
      description: "غذاء طبيعي كامل وخالي من الحبوب يحتوي على 85% من الأسماك البرية الطازجة الغنية بأوميغا 3 لمناعة وفراء صحي.",
      badge: "جديد",
    },
    {
      id: "prod-10",
      name: "ويسكس طعام القطط الرطب الفاخر (مجموعة 12 قطعة)",
      category: "nutrition",
      categoryLabel: "التغذية والأنظمة الغذائية",
      price: 16.00,
      priceLabel: "16.00 دينار",
      image: "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?q=80&w=500&auto=format&fit=crop",
      description: "قطع غنية بالمرق اللذيذ بنكهات الدجاج والسلمون الطازج، مثالية للتغذية اليومية المتوازنة.",
      badge: "موفّر",
    },
    {
      id: "prod-11",
      name: "وعاء مزدوج فاخر من الفولاذ المقاوم للصدأ",
      category: "accessories",
      categoryLabel: "مستلزمات وإكسسوارات",
      price: 19.50,
      priceLabel: "19.50 دينار",
      image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=500&auto=format&fit=crop",
      description: "حامل خشبي أنيق مضاد للانزلاق مع وعاءين من الستانلس ستيل المقاوم للصدأ لسهولة التنظيف وتناول الطعام.",
    },
    {
      id: "prod-12",
      name: "نظام إضاءة LED الذكي لأحواض النباتات المائية",
      category: "aquariums",
      categoryLabel: "أحواض ومستلزمات مائية",
      price: 58.00,
      priceLabel: "58.00 دينار",
      image: "https://images.unsplash.com/photo-1507682531662-421b17ac4f83?q=80&w=500&auto=format&fit=crop",
      description: "إضاءة طيفية كاملة قابلة للتخصيص عبر الهاتف الذكي لتعزيز نمو النباتات وإبراز جمال الأسماك.",
      badge: "تقنية ذكية",
    }
  ],
  en: [
    {
      id: "prod-1",
      name: "Royal Canin Breed Specific Formulation",
      category: "nutrition",
      categoryLabel: "Pet Nutrition",
      price: 28.00,
      priceLabel: "JD 28.00",
      image: "https://images.unsplash.com/photo-1589924691106-07a3c0d5b5cc?q=80&w=500&auto=format&fit=crop",
      description: "Organic breed-specific recipe promoting coat longevity and sound digestion.",
      badge: "Best Seller",
    },
    {
      id: "prod-2",
      name: "Luxury Leather Harness & Leash Set",
      category: "accessories",
      categoryLabel: "Premium Accessories",
      price: 42.00,
      priceLabel: "JD 42.00",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=500&auto=format&fit=crop",
      description: "Full grain Italian leather with brass buckles. Elegant, strong, and breathable.",
      badge: "Exclusive",
    },
    {
      id: "prod-3",
      name: "Ultra-Quiet Cat Climbing Sisal Palace",
      category: "accessories",
      categoryLabel: "Premium Accessories",
      price: 85.00,
      priceLabel: "JD 85.00",
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=500&auto=format&fit=crop",
      description: "Premium oak wood scratching posts wrapped in premium sustainable sisal.",
      badge: "Trending",
    },
    {
      id: "prod-4",
      name: "Rimless Crystal Glass Aquarium Set",
      category: "aquariums",
      categoryLabel: "Aquarium Supplies",
      price: 145.00,
      priceLabel: "JD 145.00",
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=500&auto=format&fit=crop",
      description: "High-transparency low-iron glass for pristine, immersive aquatic views.",
      badge: "Luxury",
    },
    {
      id: "prod-5",
      name: "Organic Aloe Grooming & Coat Shampoo",
      category: "wellness",
      categoryLabel: "Wellness & Grooming",
      price: 14.50,
      priceLabel: "JD 14.50",
      image: "https://images.unsplash.com/photo-1608454367599-c133fcabfb65?q=80&w=500&auto=format&fit=crop",
      description: "Sulfate-free formulation soothing sensitive skin and adding silk luster.",
    },
    {
      id: "prod-6",
      name: "Interactive AI Laser Cat Toy",
      category: "accessories",
      categoryLabel: "Premium Accessories",
      price: 35.00,
      priceLabel: "JD 35.00",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=500&auto=format&fit=crop",
      description: "Smart laser pathing keeping cats engaged and active throughout the day.",
    },
    {
      id: "prod-7",
      name: "Premium Dental Enzyme Chewing Sticks",
      category: "wellness",
      categoryLabel: "Wellness & Grooming",
      price: 12.00,
      priceLabel: "JD 12.00",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500&auto=format&fit=crop",
      description: "Clinically proven plaque defense and breath freshening daily sticks.",
      badge: "Recommended",
    },
    {
      id: "prod-8",
      name: "Orthopedic Memory Foam Bed",
      category: "accessories",
      categoryLabel: "Premium Accessories",
      price: 60.00,
      priceLabel: "JD 60.00",
      image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=500&auto=format&fit=crop",
      description: "Double density memory foam relieving joint pressure and fostering deep rest.",
    },
    {
      id: "prod-9",
      name: "Orijen Six Fish Premium Adult Dog Food",
      category: "nutrition",
      categoryLabel: "Pet Nutrition",
      price: 32.00,
      priceLabel: "JD 32.00",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=500&auto=format&fit=crop",
      description: "Grain-free, natural diet with 85% fresh wild-caught fish rich in Omega-3 for immune and skin health.",
      badge: "New",
    },
    {
      id: "prod-10",
      name: "Whiskas Premium Wet Cat Food (Pack of 12)",
      category: "nutrition",
      categoryLabel: "Pet Nutrition",
      price: 16.00,
      priceLabel: "JD 16.00",
      image: "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?q=80&w=500&auto=format&fit=crop",
      description: "Tender chunks in rich gravy with chicken and fresh salmon. Perfectly balanced daily meals.",
      badge: "Value Pack",
    },
    {
      id: "prod-11",
      name: "Premium Stainless Steel Double Diner",
      category: "accessories",
      categoryLabel: "Premium Accessories",
      price: 19.50,
      priceLabel: "JD 19.50",
      image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=500&auto=format&fit=crop",
      description: "Elegant, non-slip wooden riser with dual dishwasher-safe stainless steel bowls.",
    },
    {
      id: "prod-12",
      name: "Smart LED Aquascaping Aquarium Light",
      category: "aquariums",
      categoryLabel: "Aquarium Supplies",
      price: 58.00,
      priceLabel: "JD 58.00",
      image: "https://images.unsplash.com/photo-1507682531662-421b17ac4f83?q=80&w=500&auto=format&fit=crop",
      description: "App-controlled full-spectrum light ideal for plant growth and fish color enhancement.",
      badge: "Smart Tech",
    }
  ]
};

export const translations = {
  ar: {
    meta: {
      title: "بيت بوينت | متجر الحيوانات الأليفة الفاخر في عمان، الأردن",
      description: "بيت بوينت في شارع عامر بن مالك، عمان. طعام حيوانات ممتاز، إكسسوارات فاخرة، أحواض سمك مخصصة، وعناية متكاملة بأسعار مميزة. مفتوح يومياً حتى 11 مساءً."
    },
    nav: {
      brandName: "بيت بوينت",
      brandSub: "بوتيك الحيوانات الأليفة الفاخر",
      home: "الرئيسية",
      about: "عن المتجر",
      products: "المنتجات",
      whyChooseUs: "لماذا نحن",
      reviews: "آراء العملاء",
      gallery: "المعرض",
      contact: "اتصل بنا",
      langToggle: "English",
      cartTooltip: "عرض السلة"
    },
    hero: {
      badge: "المتجر الأعلى تقييماً للحيوانات الأليفة في عمان",
      headlinePrefix: "كل ما يحتاجه",
      headlineHighlight: "أليفك في مكان واحد",
      subheadline: "أطعمة ممتازة، إكسسوارات فاخرة، ألعاب تفاعلية، أحواض سمك مخصصة، ومنتجات عناية متميزة في قلب عمان. مصممة خصيصاً لأصحاب الحيوانات الأليفة ذوي الذوق الرفيع.",
      btnProducts: "استكشف منتجاتنا",
      btnWhatsApp: "استفسار مباشر",
      badgeRating: "تقييم 4.5 ★",
      badgeRatingSub: "أكثر من 12 مراجعة موثقة",
      badgeHours: "مفتوح لساعات متأخرة",
      badgeHoursSub: "حتى 11:00 مساءً يومياً",
      badgeQuality: "جودة فائقة وممتازة",
      badgeQualitySub: "أفخم الماركات العالمية المختارة",
      scrollText: "مرر للأسفل للاستكشاف",
      slides: [
        { title: "كل ما يحتاجه أليفك في مكان واحد", tag: "الكلاب والجراء" },
        { title: "عناية فائقة لأصدقائنا من القطط الكيوت", tag: "القطط والهررة" },
        { title: "أسماك غريبة وتصاميم أحواض فاخرة", tag: "الحياة المائية" }
      ]
    },
    about: {
      tag: "قصتنا ورؤيتنا",
      title: "عن بيت بوينت",
      subtitle: "المقصد الأول للفخامة والرفاهية لحيوانك الأليف في الأردن.",
      text1: "تأسس متجر بيت بوينت (Pet Point) ليكون بمثابة ملاذ متميز لمالكي الحيوانات الأليفة الباحثين عن التفرد والجودة الاستثنائية. من خلال موقعنا الاستراتيجي في شارع عامر بن مالك في عمان، نلتزم بتقديم أرقى مستويات الخدمة وأحدث المنتجات العالمية.",
      text2: "نحن لا نبيع المستلزمات فحسب، بل نصمم تجربة حياة متكاملة وسعيدة لأليفك. بدءاً من الاستشارات التغذوية المتخصصة، مروراً بتصميم وبناء أحواض السمك الكريستالية الفاخرة المخصصة، وحتى توفير الإكسسوارات الجلدية الإيطالية التي تمنح أليفك حضوراً أنيقاً ولافتاً.",
      statHours: "11 ص – 11 م",
      statHoursSub: "ساعات العمل اليومية (الجمعة 2 ظهراً)",
      statRating: "4.5 / 5 ★",
      statRatingSub: "تقييم جوجل مع أكثر من 12 مراجعة",
      statBrands: "40+ علامة",
      statBrandsSub: "ماركات عالمية فاخرة وحصرية",
      statCustomers: "1000+",
      statCustomersSub: "عميل سعيد وراضٍ في عمان"
    },
    products: {
      tag: "بوتيك المنتجات الحصرية",
      title: "أفخم منتجات الحيوانات الأليفة",
      all: "جميع المنتجات",
      nutrition: "تغذية وأطعمة ممتازة",
      accessories: "مستلزمات وإكسسوارات فاخرة",
      aquariums: "أحواض أسماك ومستلزمات",
      wellness: "عناية وصحة الحيوان",
      priceLabel: "السعر",
      btnAddToCart: "أضف إلى السلة",
      btnAdded: "تمت الإضافة",
      btnInquire: "استفسر عبر واتساب",
      viewFullCatalog: "طلب الكتالوج الكامل والأسعار",
      catalogWhatsAppText: "مرحباً بيت بوينت! أرغب في الاطلاع على كتالوج المنتجات الكامل والأسعار لفرعكم في شارع عامر بن مالك. هل يمكنكم تزويدي به؟"
    },
    whyChooseUs: {
      tag: "لماذا يثق بنا أصحاب الحيوانات؟",
      title: "معايير التميز لدينا",
      features: [
        {
          title: "منتجات نخب أول عالمية",
          desc: "نستورد أرقى العلامات التجارية للأطعمة والإكسسوارات مباشرة لنضمن لأليفك الصحة والراحة والجمال."
        },
        {
          title: "خبراء الأحواض المائية المخصصة",
          desc: "نصمم ونركب أحواض أسماك كريستالية فاخرة بلمسة فنية تحول منزلك أو مكتبك إلى لوحة طبيعية حية."
        },
        {
          title: "فريق مؤهل ومستشارون ودودون",
          desc: "طاقمنا يضم خبراء شغوفين بالحيوانات لمساعدتك في اختيار التغذية المناسبة والإجابة على كل استفساراتك."
        },
        {
          title: "موقع مميز وساعات عمل مرنة",
          desc: "نقع في شارع عامر بن مالك، عمان. ونستقبلكم يومياً حتى الساعة 11 مساءً لتلبية احتياجاتكم في أي وقت."
        }
      ]
    },
    reviews: {
      tag: "شهادات نفخر بها",
      title: "ماذا يقول أصدقاؤنا؟",
      reviewsList: [
        {
          name: "أحمد التميمي",
          role: "مربي كلاب هاسكي",
          comment: "أفضل متجر حيوانات أليفة في عمان بلا منازع! الإكسسوارات الجلدية التي اشتريتها متينة للغاية ومظهرها غاية في الفخامة. المعاملة هنا راقية جداً والشباب متعاونون لأبعد حد.",
          rating: 5
        },
        {
          name: "لينا النابلسي",
          role: "مربية قطط شيرازية",
          comment: "طعام رويال كانين متوفر دائماً وبأفضل الأسعار. كما أنهم ساعدوني في اختيار شامبو الصبار العضوي المناسب لقطتي، وقد أحدث فرقاً شاسعاً في لمعان ونعومة شعرها. أنصح بهم بشدة!",
          rating: 5
        },
        {
          name: "عمر الكردي",
          role: "عاشق الأحواض المائية",
          comment: "لقد قام فريق بيت بوينت بتصميم وتركيب حوض أسماك كريستالي مخصص في صالون منزلي. النتيجة كانت تحفة فنية تخطف الأنفاس! نظام الفلترة والإضاءة ذكي وهادئ جداً.",
          rating: 5
        }
      ]
    },
    gallery: {
      tag: "جولة بصرية في عالمنا",
      title: "معرض الصور الفاخر",
      filterAll: "الكل",
      filterShowroom: "المعرض والبوتيك",
      filterPets: "أصدقاؤنا اللطيفون",
      filterAquariums: "تصاميم مائية",
      imageTags: {
        showroom: "البوتيك الفاخر",
        pets: "أليفك السعيد",
        aquariums: "التصميم المائي"
      }
    },
    contact: {
      tag: "تواصل معنا اليوم",
      title: "يسعدنا دائماً لقاؤك",
      infoTitle: "تفاصيل الاتصال بالبوتيك",
      addressLabel: "العنوان والفرع الرئيسي",
      addressValue: "شارع عامر بن مالك، خلدا / عمان، الأردن",
      phoneLabel: "رقم الهاتف والواتساب",
      phoneValue: "+962 78 903 0091",
      hoursLabel: "ساعات العمل الرسمية",
      hoursValueDaily: "يومياً: 11:00 صباحاً – 11:00 مساءً",
      hoursValueFriday: "الجمعة: 2:00 ظهراً – 11:00 مساءً",
      formTitle: "أرسل لنا استفساراً سريعاً",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formSubject: "الموضوع / نوع الاستفسار",
      formMessage: "تفاصيل رسالتك أو طلبك الخاص",
      formBtnSubmit: "إرسال الرسالة الفاخرة",
      formBtnSending: "جاري الإرسال...",
      formSuccess: "شكرًا لتواصلك معنا! لقد تم إرسال رسالتك بنجاح وسيتصل بك مستشارونا بأقرب وقت ممكن.",
      formError: "عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة عبر الهاتف.",
      mapBtn: "افتح في خرائط Google",
      mapInstructions: "انقر على الخريطة لعرض الاتجاهات الدقيقة وتوجيهات الملاحة مباشرة إلى متجرنا في عمان."
    },
    footer: {
      tagline: "حيث تبدأ رعاية أليفك الفاخرة بأرقى المعايير العالمية.",
      quickLinks: "روابط سريعة",
      ourServices: "خدماتنا المتميزة",
      service1: "استشارات التغذية المتخصصة",
      service2: "تصميم أحواض السمك الفاخرة",
      service3: "توفير الإكسسوارات الحصرية",
      service4: "الصحة والنظافة الفائقة",
      locationName: "عمان، الأردن",
      rights: "جميع الحقوق محفوظة. متجر بيت بوينت عمان © ٢٠٢٦.",
      agencySignature: "تصميم وتطوير وكالة ريادة الفخامة الرقمية."
    },
    cart: {
      title: "سلة المشتريات الفاخرة",
      emptyMsg: "سلة مشترياتك فارغة حالياً. أضف بعض المنتجات المميزة لتبدأ الطلب!",
      subtotal: "المجموع الفرعي",
      deliveryLabel: "التوصيل",
      deliveryValue: "توصيل سريع داخل عمان (2-3 دينار أو مجاني للطلبات الكبيرة)",
      customerName: "اسم العميل الكريم",
      customerNamePlaceholder: "اكتب اسمك هنا...",
      phoneLabel: "رقم الهاتف للتواصل",
      phonePlaceholder: "مثال: 079XXXXXXXX",
      addressLabel: "عنوان التوصيل في عمان",
      addressPlaceholder: "المنطقة، اسم الشارع، رقم العمارة...",
      notesLabel: "مربع ملاحظات وتفضيلات الطلب",
      notesPlaceholder: "اكتب أي ملاحظات خاصة بالتوصيل، تغليف الهدايا، أو تفضيلات الطعام والمقاسات هنا...",
      btnCheckout: "إرسال الفاتورة وإتمام الطلب عبر WhatsApp",
      btnAddProduct: "أضف للسلة",
      toastAdded: "تمت إضافة المنتج إلى السلة بنجاح!",
      toastQuantityUpdated: "تم تحديث كمية المنتج!",
      toastRemoved: "تمت إزالة المنتج من السلة.",
      checkoutConfirm: "سيتم تحضير الطلب وتجهيز الفاتورة للتأكيد الفوري عبر واتساب الفرع.",
      itemSingular: "منتج",
      currency: "دينار أردني",
      invoiceTitle: "🧾 فاتورة طلب شراء من متجر Pet Point Amman 🧾"
    }
  },
  en: {
    meta: {
      title: "Pet Point | Premium Pet Store, Supplies & Care in Amman, Jordan",
      description: "Experience premium pet care at Pet Point on Amer bin Malek Street, Amman. Explore high-quality pet food, custom aquariums, premium accessories, toys, and grooming products. Open daily until 11 PM."
    },
    nav: {
      brandName: "Pet Point",
      brandSub: "Premium Pet Boutique",
      home: "Home",
      about: "About Us",
      products: "Products",
      whyChooseUs: "Why Us",
      reviews: "Reviews",
      gallery: "Gallery",
      contact: "Contact Us",
      langToggle: "العربية",
      cartTooltip: "View Cart"
    },
    hero: {
      badge: "Top-Rated Pet Store in Amman",
      headlinePrefix: "Everything Your Pet",
      headlineHighlight: "Needs in One Place",
      subheadline: "Premium pet food, elegant accessories, interactive toys, custom aquariums, and dedicated care products in the heart of Amman. Crafted for discerning pet parents.",
      btnProducts: "Explore Products",
      btnWhatsApp: "Direct WhatsApp",
      badgeRating: "4.5 ★ Rating",
      badgeRatingSub: "12+ Verified Reviews on Google",
      badgeHours: "Open Late Hours",
      badgeHoursSub: "Until 11:00 PM Daily",
      badgeQuality: "Premium Quality",
      badgeQualitySub: "Hand-picked Pet Brands",
      scrollText: "Scroll to Explore",
      slides: [
        { title: "Everything Your Pet Needs in One Place", tag: "Dogs & Puppies" },
        { title: "Premium Care for Your Feline Friends", tag: "Cats & Kittens" },
        { title: "Exotic Fish & Luxury Aquarium Setups", tag: "Aquatic Life" }
      ]
    },
    about: {
      tag: "OUR STORY & VISION",
      title: "About Pet Point",
      subtitle: "The ultimate luxury destination for your pet’s ultimate lifestyle in Jordan.",
      text1: "Pet Point Boutique was founded to stand out as a sanctuary for passionate pet owners seeking the absolute best. Strategically situated on Amer bin Malek Street in Amman, we are committed to delivering elite-tier service and premium global products.",
      text2: "We don't just sell supplies; we design a holistic, happy lifestyle for your pets. From specialist nutrition advice, to custom crystal aquariums tailored to your home or office space, all the way to hand-picked Italian leather accessories that highlight your pet's noble presence.",
      statHours: "11 AM – 11 PM",
      statHoursSub: "Official Daily Hours (Friday from 2 PM)",
      statRating: "4.5 / 5 ★",
      statRatingSub: "Google Rating with 12+ Verified Reviews",
      statBrands: "40+ Brands",
      statBrandsSub: "Premium Global Exclusive Labels",
      statCustomers: "1,000+",
      statCustomersSub: "Happy Pet Parents in Amman"
    },
    products: {
      tag: "BOUTIQUE SHOWROOM",
      title: "Premium Pet Products",
      all: "All Products",
      nutrition: "Pet Nutrition",
      accessories: "Premium Accessories",
      aquariums: "Aquarium Supplies",
      wellness: "Wellness & Grooming",
      priceLabel: "Price",
      btnAddToCart: "Add to Cart",
      btnAdded: "Added",
      btnInquire: "Inquire via WhatsApp",
      viewFullCatalog: "Request Full PDF Catalog & Prices",
      catalogWhatsAppText: "Hello Pet Point! I would like to request your full catalog and price list for the Amer bin Malek Street branch. Can you please share it with me?"
    },
    whyChooseUs: {
      tag: "WHY DISCERNING PET PARENTS TRUST US?",
      title: "Our Pillars of Excellence",
      features: [
        {
          title: "Elite World-Class Selection",
          desc: "We curate only the finest premium dry foods, healthy snacks, and designer accessories direct from premium global makers."
        },
        {
          title: "Custom Aquascaping Masters",
          desc: "We design, install, and service bespoke low-iron rimless glass aquariums that convert your home into a living canvas."
        },
        {
          title: "Dedicated Pet Consultants",
          desc: "Our highly trained staff is composed of pet owners who treat your animal with love and provide expert guidance."
        },
        {
          title: "Prime Location & Long Hours",
          desc: "Perfectly located on Amer bin Malek Street, Amman. Open late daily until 11 PM to serve you whenever needed."
        }
      ]
    },
    reviews: {
      tag: "WORDS FROM DISCERNING CUSTOMERS",
      title: "Client Testimonials",
      reviewsList: [
        {
          name: "Ahmad Al-Tamimi",
          role: "Husky Owner",
          comment: "Unmatched pet store experience in Amman! The leather harness I bought is exceptionally durable and looks outstandingly luxurious. The staff is extremely professional.",
          rating: 5
        },
        {
          name: "Lina Nabulsi",
          role: "Shirazi Cat Breeder",
          comment: "Royal Canin specific diets are always in stock. They also recommended the organic aloe shampoo which made my cat's coat unbelievably shiny and soft. Best shop ever!",
          rating: 5
        },
        {
          name: "Omar Kordi",
          role: "Aquarium Hobbyist",
          comment: "Pet Point team custom-designed a beautiful low-iron crystal aquarium for my main lobby. The layout is breathtaking! The filtration and light systems are ultra-quiet.",
          rating: 5
        }
      ]
    },
    gallery: {
      tag: "A VISUAL VOYAGE INTO OUR WORLD",
      title: "Visual Gallery Showcase",
      filterAll: "All",
      filterShowroom: "Boutique & Showroom",
      filterPets: "Happy Pets",
      filterAquariums: "Aquascapes",
      imageTags: {
        showroom: "Luxury Showroom",
        pets: "Happy Friends",
        aquariums: "Custom Aquarium"
      }
    },
    contact: {
      tag: "GET IN TOUCH TODAY",
      title: "We Are Always Happy to Connect",
      infoTitle: "Boutique Contact Info",
      addressLabel: "Showroom Address",
      addressValue: "Amer bin Malek Street, Khalda / Amman, Jordan",
      phoneLabel: "Phone / WhatsApp",
      phoneValue: "+962 78 903 0091",
      hoursLabel: "Store Hours",
      hoursValueDaily: "Daily: 11:00 AM – 11:00 PM",
      hoursValueFriday: "Friday: 2:00 PM – 11:00 PM",
      formTitle: "Send a Direct Inquiry",
      formName: "Full Name",
      formEmail: "Email Address",
      formSubject: "Subject / Inquiry Type",
      formMessage: "Detailed message or special requests",
      formBtnSubmit: "Send Luxury Message",
      formBtnSending: "Sending Message...",
      formSuccess: "Thank you for reaching out! Your message was sent successfully. Our consultants will contact you shortly.",
      formError: "Oops, an error occurred while sending your message. Please try again or call us directly.",
      mapBtn: "Open in Google Maps",
      mapInstructions: "Click on the map to get turn-by-turn driving directions directly to our boutique shop in Amman."
    },
    footer: {
      tagline: "Where premium pet care meets world-class quality in Amman.",
      quickLinks: "Quick Navigation",
      ourServices: "Our Specialized Services",
      service1: "Specialist Nutrition Guidance",
      service2: "Custom Luxury Aquascaping",
      service3: "Exclusive Leather Goods",
      service4: "Grooming & Wellness Consultation",
      locationName: "Amman, Jordan",
      rights: "All rights reserved. Pet Point Amman © 2026.",
      agencySignature: "Designed & developed by Luxury Digital Agency."
    },
    cart: {
      title: "Premium Shopping Cart",
      emptyMsg: "Your shopping cart is currently empty. Add exclusive items to get started!",
      subtotal: "Subtotal",
      deliveryLabel: "Delivery",
      deliveryValue: "Express delivery within Amman (JD 2-3 or free for large orders)",
      customerName: "Customer Name",
      customerNamePlaceholder: "Type your name here...",
      phoneLabel: "Contact Phone Number",
      phonePlaceholder: "e.g., 079XXXXXXXX",
      addressLabel: "Delivery Address in Amman",
      addressPlaceholder: "Area, street name, building number...",
      notesLabel: "Special Order Notes & Requests",
      notesPlaceholder: "Enter any delivery requests, gift wrapping needs, specific sizing, or food flavor preferences here...",
      btnCheckout: "Send Invoice & Complete Order via WhatsApp",
      btnAddProduct: "Add to Cart",
      toastAdded: "Item added to cart successfully!",
      toastQuantityUpdated: "Item quantity updated!",
      toastRemoved: "Item removed from cart.",
      checkoutConfirm: "We will compile your order items and open WhatsApp to finalize your delivery details.",
      itemSingular: "item",
      currency: "JD",
      invoiceTitle: "🧾 PURCHASE ORDER INVOICE - PET POINT AMMAN 🧾"
    }
  }
};

// scripts.js
// Multi-page shared script: language switching, animations, forms

document.addEventListener('DOMContentLoaded', () => {
  // --- Language dictionary ---
  // Keys map to strings used across pages.
  // Add translations here. If you need edits, change the string values.
  const TRANSLATIONS = {
    en: {
      nav_home: "Home",
       brand_title: "Thobe Al Ezza",
      nav_about: "About",
      nav_products: "Products",
      nav_manufacturing: "Manufacturing",
      nav_b2b: "B2B & Export",
      nav_markets: "Markets",
      nav_partner: "Partner",
      nav_contact: "Contact",
      nav_company: "Company",
      eyebrow: "B2B • EXPORT • FACTORY",
      headline: "Industrial manufacturing excellence for premium thobes",
      lead: "From fabric selection to final inspection — high-volume production with luxury-grade finishes, export documentation, and global logistics.",
      panel1_title: "Factory-grade Capacity",
      panel1_text: "Automated lines + skilled tailoring for consistent output.",
      panel2_title: "Quality Control",
      panel2_text: "Multi-stage inspections, fabric testing, and size audits.",
      panel3_title: "Export-Ready",
      panel3_text: "Documentation, packaging and shipping support.",
      request_catalogue: "Request Catalogue",
      start_enquiry: "Start B2B Enquiry",
      products_title: "Products & Collections",
      product_classic_title: "Classic Thobes",
      product_classic_text: "Durable daily collections in standard sizes.",
      product_premium_title: "Premium / Occasion",
      product_premium_text: "High-finish thobes for premium retailers.",
      product_seasonal_title: "Seasonal Collections",
      product_seasonal_text: "Summer & winter fabrics tailored for comfort.",
      mfg_title: "Manufacturing & Quality",
      mfg_process_title: "Our Process",
      mfg_qc_title: "Quality Control",
      b2b_title: "Start a B2B Order",
      b2b_sub: "Tell us your requirements — we will respond within 48 hours",
      b2b_company_placeholder: "Company / Brand",
      b2b_country_placeholder: "Country",
      b2b_qty_placeholder: "Approx quantity (e.g., 1000)",
      b2b_product_label: "Product interest",
      b2b_message_placeholder: "Additional requirements / trims / timelines",
      b2b_send: "Send B2B Enquiry",
      contact_title: "Contact",
      contact_email_label: "Email",
      contact_phone: "WhatsApp: +966 5X XXX XXXX",
      company_legal: "Thoub Al Ezzah for Industry Co. (One Person LLC)",
      cr_label: "CR No.: 1010915057",
      toast_sent: "Message sent — we'll contact you soon",
      toast_fill: "Please complete required fields.",
      partner_title: "Partner — Star Angel (India)",
      partner_cta: "Visit Star Angel India Website",
      footer_rights: "All rights reserved",
      // form labels
      form_name: "Full name",
      form_email: "Email",
      form_message: "Message",
      form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone Number",
    form_company: "Company / Organization",
    form_subject: "Subject",
    form_message: "Your Message",
    form_submit: "Send Message",
    form_viewmap: "View Map",
      // small labels used elsewhere
      years_label: "15+ Years",
      industrial_label: "Industrial Scale",
      export_label: "Export Ready",
       products_title: "Products",
        brand_name: "Thoub Al Ezzah",
        brand_sub: "Industrial Thobe Manufacturer — Riyadh",

        // Product 1 - Saudi
        p1_name: "Saudi Thobe",
        p1_desc: "Premium Saudi thobe crafted with breathable fabric and classic tailoring.",
        p1_q1: "Premium cotton blends (GSM options)",
        p1_q2: "Traditional collar with reinforced stitching",
        p1_q3: "Moisture-wicking for hot climates",
        p1_q4: "Industrial-grade seams & consistency",
        p1_q5: "Available in standard & custom sizing",

        // Product 2 - Emirati
        p2_name: "Emirati Thobe",
        p2_desc: "Elegant Emirati-style thobe with refined finishes and premium trims.",
        p2_q1: "Luxurious fabric options",
        p2_q2: "Refined collar & cuff details",
        p2_q3: "Premium button & piping options",
        p2_q4: "Tailored cuts for a modern fit",
        p2_q5: "Available in premium packaging",

        // Product 3 - Qatari
        p3_name: "Qatari Thobe",
        p3_desc: "Qatari-style thobe with focus on structure and neat finishes.",
        p3_q1: "Structured silhouette",
        p3_q2: "High-quality stitching",
        p3_q3: "Breathable fabric variants",
        p3_q4: "Precision patterning",
        p3_q5: "Multiple color options",

        // Product 4 - Kuwaiti
        p4_name: "Kuwaiti Thobe",
        p4_desc: "Kuwaiti-styled thobe focusing on comfort and elegance.",
        p4_q1: "Soft touch fabrics",
        p4_q2: "Relaxed fit for everyday wear",
        p4_q3: "Wrinkle-resistant options",
        p4_q4: "Reinforced seams & hems",
        p4_q5: "Available in bulk packaging",

        // Product 5 - Bahraini
        p5_name: "Bahraini Thobe",
        p5_desc: "Bahraini-style thobe crafted for refined taste and durability.",
        p5_q1: "Elegant finishes",
        p5_q2: "Durable stitching",
        p5_q3: "Fine fabric blends",
        p5_q4: "Custom trim options",
        p5_q5: "Available in sizes XS–XXL",

        // Product 6 - Saba Style
        p6_name: "Saba Style Thobe",
        p6_desc: "Saba-style thobe with classic trims and comfortable fit.",
        p6_q1: "Traditional Saba craftsmanship",
        p6_q2: "Soft & breathable fabrics",
        p6_q3: "Durable stitching standards",
        p6_q4: "Available in seasonal variants",
        p6_q5: "Custom colour matching",

        // Product 7 - Noon Style
        p7_name: "Noon Style Thobe",
        p7_desc: "Noon-style thobe with contemporary cuts and durable finishes.",
        p7_q1: "Modern cut & fit",
        p7_q2: "Reinforced collar & pocket stitching",
        p7_q3: "Easy-care fabric options",
        p7_q4: "Consistent sizing across batches",
        p7_q5: "Available for private-label orders",
        p_company_desc_en: "Thobe Al Ezza for Industrial Company. <br> Industrial thobe manufacturer based in Riyadh, serving B2B clients and export markets."

    },
    ar: {
      nav_home: "الرئيسية",
      brand_title: "ثوب العِزّة",
      
      nav_about: "من نحن",
      nav_products: "المنتجات",
      nav_manufacturing: "التصنيع والجودة",
      nav_b2b: "الشركات والتصدير",
      nav_markets: "الأسواق",
      nav_partner: "الشريك",
      nav_contact: "اتصل بنا",
      nav_company: "الشركة والمعلومات",

      eyebrow: "العمل للجملة • التصدير • المصنع",
      headline: "تميز التصنيع الصناعي للثوب الفاخر",
      lead: "من اختيار القماش إلى الفحص النهائي — إنتاج ضخم بتشطيبات فاخرة، مستندات تصدير، ودعم لوجيستي.",
      panel1_title: "طاقة إنتاجية صناعية",
      panel1_text: "خطوط آلية + فرق تفصيل ماهرة لإنتاج متسق.",
      panel2_title: "ضمان الجودة",
      panel2_text: "فحوصات متعددة المراحل، اختبار الأقمشة ومراجعات القياسات.",
      panel3_title: "جاهز للتصدير",
      panel3_text: "الوثائق والتعبئة ودعم الشحن.",
      request_catalogue: "طلب الكتالوج",
      start_enquiry: "ابدأ استفسار شركات",
      products_title: "المنتجات والمجموعات",
      product_classic_title: "ثياب كلاسيكية",
      product_classic_text: "مجموعات يومية متينة بمقاسات قياسية.",
      product_premium_title: "فاخر / للمناسبات",
      product_premium_text: "ثياب فاخرة لتجار التجزئة الراقيين.",
      product_seasonal_title: "مجموعات موسمية",
      product_seasonal_text: "أقمشة صيفية وشتوية مصممة للراحة.",
      mfg_title: "التصنيع والجودة",
      mfg_process_title: "عملية الإنتاج",
      mfg_qc_title: "مراقبة الجودة",
      b2b_title: "بدء طلب شركات",
      b2b_sub: "أخبرنا بمتطلباتك — سنرد خلال 48 ساعة",
      b2b_company_placeholder: "الشركة / الماركة",
      b2b_country_placeholder: "البلد",
      b2b_qty_placeholder: "الكمية التقريبية (مث: 1000)",
      b2b_product_label: "المنتج المهتم به",
      b2b_message_placeholder: "متطلبات إضافية / تشطيبات / مواعيد",
      b2b_send: "إرسال استفسار شركات",
      contact_title: "اتصل بنا",
      contact_email_label: "البريد الإلكتروني",
      contact_phone: "واتساب: +966 5X XXX XXXX",
      company_legal: "ثوب العزة للصناعة (شركة ذات شخص واحد)",
      cr_label: "السجل التجاري: 1010915057",
      toast_sent: "تم إرسال الرسالة — سنعاود التواصل قريباً",
      toast_fill: "يرجى استكمال الحقول المطلوبة.",
      partner_title: "الشريك — Star Angel (الهند)",
      partner_cta: "زيارة موقع Star Angel الهند",
      footer_rights: "جميع الحقوق محفوظة",
      form_name: "الاسم الكامل",
      form_email: "البريد الإلكتروني",
      form_message: "الرسالة",
      years_label: "أكثر من 15 سنة",
      industrial_label: "إنتاج صناعي",
      export_label: "جاهز للتصدير",
       form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني",
    form_phone: "رقم الجوال",
    form_company: "الشركة / المؤسسة",
    form_subject: "الموضوع",
    form_message: "رسالتك",
    form_submit: "إرسال الرسالة",
    form_viewmap: "عرض الموقع",
     products_title: "المنتجات",
        brand_name: "ثوب العزة",
        brand_sub: "مصنع ثياب صناعي — الرياض",

        // Product 1 - Saudi
        p1_name: "الثوب السعودي",
        p1_desc: "ثوب سعودي فاخر مصمم بقماش قابل للتنفس وخياطة تقليدية أنيقة.",
        p1_q1: "خليط قطن فاخر (خيارات GSM)",
        p1_q2: "ياقة تقليدية مع خياطة معززة",
        p1_q3: "ماص للرطوبة للمناخ الحار",
        p1_q4: "خياطة صناعية ومتانة متسقة",
        p1_q5: "متوفر بمقاسات قياسية ومخصصة",

        // Product 2 - Emirati
        p2_name: "الثوب الإماراتي",
        p2_desc: "ثوب إماراتي أنيق بتشطيبات راقية وتطريز فخم.",
        p2_q1: "خيارات أقمشة فاخرة",
        p2_q2: "تفاصيل ياقة وأساور مصقولة",
        p2_q3: "أزرار وتشطيبات راقية",
        p2_q4: "قصات مفصلة لمظهر عصري",
        p2_q5: "متوفر بتغليف فخم",

        // Product 3 - Qatari
        p3_name: "الثوب القطري",
        p3_desc: "ثوب قطري يركز على البنية والتشطيبات النظيفة.",
        p3_q1: "قصة مصممة بشكل منظم",
        p3_q2: "خياطة عالية الجودة",
        p3_q3: "أقمشة قابلة للتنفس",
        p3_q4: "نمذجة دقيقة",
        p3_q5: "عدة ألوان متاحة",

        // Product 4 - Kuwaiti
        p4_name: "الثوب الكويتي",
        p4_desc: "ثوب كويتي يركز على الراحة والأناقة.",
        p4_q1: "أقمشة ناعمة الملمس",
        p4_q2: "قصة مريحة للاستخدام اليومي",
        p4_q3: "خيارات مقاومة للتجاعيد",
        p4_q4: "درزات وحواف معززة",
        p4_q5: "متوفر بتعبئة بالجملة",

        // Product 5 - Bahraini
        p5_name: "الثوب البحريني",
        p5_desc: "ثوب بحريني مصمم بذوق رفيع ومتانة عالية.",
        p5_q1: "تشطيبات أنيقة",
        p5_q2: "خياطة متينة",
        p5_q3: "خليطات أقمشة فاخرة",
        p5_q4: "خيارات تطريز مخصصة",
        p5_q5: "متوفر بمقاسات XS–XXL",

        // Product 6 - Saba Style
        p6_name: "ثوب ستايل سابا",
        p6_desc: "ثوب سابا بتشطيبات تقليدية وملاءمة مريحة.",
        p6_q1: "حرفية سابا التقليدية",
        p6_q2: "أقمشة ناعمة وقابلة للتنفس",
        p6_q3: "معايير خياطة متينة",
        p6_q4: "متوفر بنسخ حسب المواسم",
        p6_q5: "ممكن مطابقة ألوان مخصصة",

        // Product 7 - Noon Style
        p7_name: "ثوب ستايل نون",
        p7_desc: "ثوب نون بقصات معاصرة وتشطيبات متينة.",
        p7_q1: "قصة حديثة ومناسبة",
        p7_q2: "ياقة وجيوب بخياطة معززة",
        p7_q3: "خيارات أقمشة سهلة العناية",
        p7_q4: "مقاسات متناسقة عبر الدفعات",
        p7_q5: "متوفر لطلبات الملصق الخاص",
        p_company_desc_ar: "شركة ثوب العِزّة للصناعة. <br> مصنع متخصص في إنتاج الثياب الصناعية في الرياض، ويخدم عملاء قطاع الأعمال وأسواق التصدير."

    }
  };


  // Utility: set language on page by scanning elements with data-key attr
  function applyLanguage(lang) {
    // set direction and lang attr
    if(lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }

    // find all elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      const txt = TRANSLATIONS[lang][key];
      if(txt === undefined) return; // missing translation: skip
      // If element is input/textarea placeholder
      if(el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea' || el.tagName.toLowerCase() === 'select') {
        el.placeholder = txt;
      } else {
        el.textContent = txt;
      }
    });

    // adjust text alignment for forms etc.
    if(lang === 'ar') {
      document.body.style.textAlign = 'right';
      document.querySelectorAll('input, textarea, select').forEach(i => i.style.textAlign = 'right');
    } else {
      document.body.style.textAlign = 'left';
      document.querySelectorAll('input, textarea, select').forEach(i => i.style.textAlign = 'left');
    }

    // store preference
    localStorage.setItem('site_lang', lang);
  }

  // Hook language buttons
  const enBtn = document.getElementById('btn-en');
  const arBtn = document.getElementById('btn-ar');
  const langToggle = document.getElementById('langToggle');

  function setActiveButton(lang) {
    if(!enBtn || !arBtn) return;
    if(lang === 'ar') {
      enBtn.classList.remove('active');
      arBtn.classList.add('active');
    } else {
      arBtn.classList.remove('active');
      enBtn.classList.add('active');
    }
  }

  // click handlers
  if(enBtn) enBtn.addEventListener('click', ()=>{ applyLanguage('en'); setActiveButton('en'); });
  if(arBtn) arBtn.addEventListener('click', ()=>{ applyLanguage('ar'); setActiveButton('ar'); });
  if(langToggle) {
    langToggle.addEventListener('click', () => {
      const current = localStorage.getItem('site_lang') || 'en';
      const next = current === 'en' ? 'ar' : 'en';
      applyLanguage(next);
      setActiveButton(next);
    });
  }

  // if saved preference exists
  const saved = localStorage.getItem('site_lang') || 'en';
  applyLanguage(saved);
  setActiveButton(saved);

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      
      const target = document.querySelector(a.getAttribute('href'));
      if(!target) return;
      target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Toast helper (shared)
  const toastEl = document.getElementById('toast');
  function showToast(msg) {
    if(!toastEl) return;
    toastEl.textContent = msg;
    toastEl.style.opacity = '1';
    toastEl.style.transform = 'translateY(0)';
    setTimeout(()=>{ toastEl.style.opacity='0'; toastEl.style.transform='translateY(12px)'; }, 3000);
  }

  // Form handlers (basic, override with fetch if you have API)
 document.getElementById("contactForm").addEventListener("submit", async function(e){
    e.preventDefault(); // page reload stop

    const form = this;
    const data = new FormData(form);

    // SheetDB POST API
    fetch("https://sheetdb.io/api/v1/pgy2dwwu9d8zn", {
        method: "POST",
        body: data
    })
    .then(response => response.json())
    .then(result => {
        alert("Thank you! ✅ Your message has been sent.");
        form.reset(); // form clear
    })
    .catch(error => {
        alert("Error, please try again!");
        console.error(error);
    });
     const lang = localStorage.getItem('site_lang') || 'en';
      showToast(TRANSLATIONS[lang].toast_sent || 'Message sent');
      form.reset();
});




      


  // GSAP small inits if available
 gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.section').forEach((s) => {
  gsap.from(s, {
    scrollTrigger: { trigger: s, start: "top 85%" },
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
  });
});
});

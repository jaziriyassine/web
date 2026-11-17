/* ===========================================================
   ads.js — إعدادات الإعلانات / Ad settings
   عدّل هذا الملف فقط. لا تحتاج لتغيير index.html
   Slots (الأماكن):  top = أعلى الصفحة | below = تحت المشغّل | sidebar = أعلى قائمة القنوات
   Types (الأنواع):  none | image | adsense | html
   =========================================================== */
window.ADS_CONFIG = {
  enabled: true,        // false = إيقاف كل الإعلانات
  adsenseClient: "ca-pub-6147183179563540",   // رقم الناشر في AdSense
  label: "إعلان",       // النص الصغير فوق كل إعلان

  slots: {

    /* ---- 1) بانر صورة (يدعم عدة بانرات تتبدل عشوائياً) ----
    top: {
      type: "image",
      items: [
        { src: "ads/banner1.jpg", href: "https://example.com", alt: "Sponsor 1" },
        { src: "ads/banner2.jpg", href: "https://example.org", alt: "Sponsor 2" }
      ]
    },
    */
    top: { type: "none" },

    /* ---- 2) Google AdSense ----
    below: {
      type: "adsense",
      slot:   "1234567890",                // رقم وحدة الإعلان من AdSense (Ads → By ad unit)
      format: "auto"
    },
    */
    below: { type: "none" },

    /* ---- 3) كود HTML/سكربت جاهز من أي شبكة إعلانية ----
    sidebar: {
      type: "html",
      code: '<a href="https://example.com" target="_blank" rel="sponsored"><img src="ads/side.png" style="max-width:100%"></a>'
    },
    */
    sidebar: { type: "none" }
  }
};

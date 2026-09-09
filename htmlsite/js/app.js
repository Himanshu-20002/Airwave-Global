/**
 * Airsurge Logistics - Main Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Mobile Menu & Navigation Dropdowns
  // -------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileServicesBtn = document.getElementById('mobile-services-button');
  const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');
  const mobileServicesChevron = document.getElementById('mobile-services-chevron');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (mobileServicesBtn && mobileServicesDropdown) {
    mobileServicesBtn.addEventListener('click', () => {
      mobileServicesDropdown.classList.toggle('hidden');
      if (mobileServicesChevron) {
        mobileServicesChevron.classList.toggle('rotate-180');
      }
    });
  }

  // -------------------------------------------------------------
  // 2. Hero Slider with Progress Bar & Content Sync
  // -------------------------------------------------------------
  const heroSlider = document.getElementById('hero-slider');
  const heroContents = document.querySelectorAll('.hero-content');
  const navDots = document.querySelectorAll('.slider-nav-dot');
  const progressFill = document.getElementById('slider-progress-fill');
  const totalSlides = heroContents.length || 4;
  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 6000; // 6 seconds
  let progressTimer = null;
  let progressStart = Date.now();

  function startProgress() {
    if (!progressFill) return;
    progressStart = Date.now();
    clearInterval(progressTimer);
    progressTimer = setInterval(() => {
      const elapsed = Date.now() - progressStart;
      const pct = Math.min((elapsed / slideDuration) * 100, 100);
      progressFill.style.width = `${pct}%`;
    }, 50);
  }

  function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    if (heroSlider) {
      heroSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    heroContents.forEach((content, i) => {
      if (i === currentSlide) {
        content.classList.remove('hidden', 'opacity-0', 'translate-y-4');
        content.classList.add('opacity-100', 'translate-y-0');
      } else {
        content.classList.add('hidden', 'opacity-0', 'translate-y-4');
        content.classList.remove('opacity-100', 'translate-y-0');
      }
    });

    navDots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.remove('bg-white/40', 'w-3');
        dot.classList.add('bg-[#fe7f25]', 'w-8');
      } else {
        dot.classList.remove('bg-[#fe7f25]', 'w-8');
        dot.classList.add('bg-white/40', 'w-3');
      }
    });

    startProgress();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideDuration);
    startProgress();
  }

  navDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(idx);
      resetAutoSlide();
    });
  });

  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  // Initialize first slide
  if (heroSlider) {
    goToSlide(0);
    resetAutoSlide();

    // Pause on hover
    heroSlider.parentElement.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
      clearInterval(progressTimer);
    });
    heroSlider.parentElement.addEventListener('mouseleave', () => {
      resetAutoSlide();
    });
  }

  // -------------------------------------------------------------
  // 3. Hero Interactive Quick Tools Tabs
  // -------------------------------------------------------------
  const toolTabBtns = document.querySelectorAll('.hero-tab-btn');
  const toolTabPanes = document.querySelectorAll('.hero-tab-pane');

  toolTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      toolTabBtns.forEach(b => {
        b.classList.remove('active', 'bg-[#fe7f25]', 'text-white');
        b.classList.add('text-slate-300', 'hover:text-white');
      });
      btn.classList.add('active', 'bg-[#fe7f25]', 'text-white');
      btn.classList.remove('text-slate-300', 'hover:text-white');

      toolTabPanes.forEach(pane => {
        if (pane.id === `tab-${target}`) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });
    });
  });

  // -------------------------------------------------------------
  // 4. Interactive Live Shipment Tracking Simulator
  // -------------------------------------------------------------
  const trackingForm = document.getElementById('quick-tracking-form');
  const trackingResultBox = document.getElementById('tracking-result-box');

  if (trackingForm && trackingResultBox) {
    trackingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const trackingInput = document.getElementById('tracking-input');
      const query = (trackingInput ? trackingInput.value.trim() : '') || 'ASG-8942-IN';

      trackingResultBox.innerHTML = `
        <div class="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-white animate-fadeIn">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3 mb-3">
            <div>
              <span class="text-xs uppercase text-[#fe7f25] font-bold">Consignment ID</span>
              <h4 class="text-base font-bold text-white tracking-wide">${query.toUpperCase()}</h4>
            </div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span> In Transit (On Schedule)
            </span>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-4">
            <div class="bg-slate-900/60 p-2.5 rounded-lg">
              <span class="text-slate-400 block text-[10px] uppercase">Origin Port</span>
              <strong class="text-slate-200">INNSA (Nhava Sheva)</strong>
            </div>
            <div class="bg-slate-900/60 p-2.5 rounded-lg">
              <span class="text-slate-400 block text-[10px] uppercase">Destination</span>
              <strong class="text-slate-200">DXB (Jebel Ali, UAE)</strong>
            </div>
            <div class="bg-slate-900/60 p-2.5 rounded-lg">
              <span class="text-slate-400 block text-[10px] uppercase">Carrier</span>
              <strong class="text-slate-200">Maersk Line (Vessel 42E)</strong>
            </div>
            <div class="bg-slate-900/60 p-2.5 rounded-lg">
              <span class="text-slate-400 block text-[10px] uppercase">Est. Delivery</span>
              <strong class="text-[#fe7f25]">Tomorrow, 14:00 GST</strong>
            </div>
          </div>

          <!-- Timeline Steps -->
          <div class="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
            <div class="flex items-start gap-3 relative z-10">
              <span class="w-6 h-6 rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
              <div>
                <p class="text-xs font-bold text-white">Customs Clearance Export Passed</p>
                <span class="text-[10px] text-slate-400">06 Sep 2026, 11:30 IST • Nhava Sheva Terminal</span>
              </div>
            </div>
            <div class="flex items-start gap-3 relative z-10">
              <span class="w-6 h-6 rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
              <div>
                <p class="text-xs font-bold text-white">Vessel Departed Port of Loading</p>
                <span class="text-[10px] text-slate-400">07 Sep 2026, 04:15 IST • High Seas Corridor</span>
              </div>
            </div>
            <div class="flex items-start gap-3 relative z-10">
              <span class="w-6 h-6 rounded-full bg-[#fe7f25] text-white flex items-center justify-center text-xs font-bold shrink-0">●</span>
              <div>
                <p class="text-xs font-bold text-[#fe7f25]">Arriving at Destination Hub Anchorage</p>
                <span class="text-[10px] text-slate-400">Currently cruising • Speed 18.2 knots</span>
              </div>
            </div>
            <div class="flex items-start gap-3 relative z-10 opacity-50">
              <span class="w-6 h-6 rounded-full bg-slate-700 text-slate-400 flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <div>
                <p class="text-xs font-bold text-slate-300">Final Consignee Door Delivery</p>
                <span class="text-[10px] text-slate-400">Pending arrival</span>
              </div>
            </div>
          </div>
        </div>
      `;
      trackingResultBox.classList.remove('hidden');
    });
  }

  // -------------------------------------------------------------
  // 5. Interactive CBM & Volumetric Freight Calculator
  // -------------------------------------------------------------
  const cbmCalcForm = document.getElementById('cbm-calculator-form');
  const cbmResultBox = document.getElementById('cbm-result-box');

  function calculateFreight() {
    const mode = document.querySelector('input[name="calc_mode"]:checked')?.value || 'air';
    const length = parseFloat(document.getElementById('calc-length')?.value) || 0;
    const width = parseFloat(document.getElementById('calc-width')?.value) || 0;
    const height = parseFloat(document.getElementById('calc-height')?.value) || 0;
    const weight = parseFloat(document.getElementById('calc-weight')?.value) || 0;
    const qty = parseInt(document.getElementById('calc-qty')?.value, 10) || 1;

    // CBM in cubic meters: (L * W * H in cm) / 1,000,000 * qty
    const totalVolumeCbm = ((length * width * height) / 1000000) * qty;
    const grossWeightTotal = weight * qty;

    let volumetricWeight = 0;
    let chargeableWeight = 0;
    let rateEstimate = 0;

    if (mode === 'air') {
      // Air cargo standard ratio: 1 CBM = 167 kg or (L*W*H)/6000
      volumetricWeight = totalVolumeCbm * 167;
      chargeableWeight = Math.max(grossWeightTotal, volumetricWeight);
      // Rough benchmark rate per kg (~$3.50 - $4.20/kg depending on lane)
      rateEstimate = Math.max(chargeableWeight * 3.8, 120);
    } else {
      // Ocean freight: 1 CBM = 1000 kg (standard W/M rule)
      const oceanVolumeWeight = totalVolumeCbm * 1000;
      chargeableWeight = Math.max(grossWeightTotal, oceanVolumeWeight);
      // Benchmark ocean LCL base rate (~$65/CBM)
      rateEstimate = Math.max(totalVolumeCbm * 65, 180);
    }

    if (cbmResultBox) {
      cbmResultBox.innerHTML = `
        <div class="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white">
          <div class="flex items-center justify-between mb-2 pb-2 border-b border-slate-700">
            <span class="text-xs text-slate-300 font-medium">Estimated CBM Volume:</span>
            <span class="text-sm font-bold text-[#fe7f25]">${totalVolumeCbm.toFixed(3)} m³</span>
          </div>
          <div class="flex items-center justify-between mb-2 pb-2 border-b border-slate-700">
            <span class="text-xs text-slate-300 font-medium">Chargeable Weight:</span>
            <span class="text-sm font-bold text-white">${chargeableWeight.toFixed(1)} kg</span>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <span class="text-[10px] text-slate-400 block uppercase">Est. Freight Budget</span>
              <strong class="text-lg font-black text-emerald-400">$${rateEstimate.toFixed(0)} - $${(rateEstimate * 1.25).toFixed(0)} <span class="text-xs font-normal text-slate-300">USD</span></strong>
            </div>
            <a href="#contact-section" class="px-3 py-1.5 rounded-lg bg-[#fe7f25] hover:bg-orange-600 text-white text-xs font-bold transition-all">
              Lock Rate
            </a>
          </div>
        </div>
      `;
      cbmResultBox.classList.remove('hidden');
    }
  }

  if (cbmCalcForm) {
    cbmCalcForm.addEventListener('input', calculateFreight);
    cbmCalcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateFreight();
    });
  }

  // -------------------------------------------------------------
  // 6. Services Category Filter
  // -------------------------------------------------------------
  const serviceFilterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-item-card');

  serviceFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      serviceFilterBtns.forEach(b => {
        b.classList.remove('bg-[#fe7f25]', 'text-white', 'shadow-md');
        b.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      });
      btn.classList.add('bg-[#fe7f25]', 'text-white', 'shadow-md');
      btn.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
    });
  });

  // -------------------------------------------------------------
  // 7. Animated Statistics Counter
  // -------------------------------------------------------------
  const statElements = document.querySelectorAll('.stat-counter');
  let animatedStats = false;

  function animateCounters() {
    if (animatedStats) return;
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      animatedStats = true;
      statElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const duration = 2000;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.innerText = target.toLocaleString();
            clearInterval(timer);
          } else {
            el.innerText = Math.floor(current).toLocaleString();
          }
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  animateCounters(); // Initial check

  // -------------------------------------------------------------
  // 8. Contact & RFQ Form Handler with Feedback Modal
  // -------------------------------------------------------------
  const quoteForm = document.getElementById('contact-form');
  const quoteModal = document.getElementById('quote-success-modal');
  const quoteRefId = document.getElementById('quote-ref-id');
  const closeQuoteModalBtn = document.getElementById('close-quote-modal');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'SUBMIT';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Processing Request...
        `;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        // Generate Random Reference ID
        const refNumber = 'ASG-RFQ-' + Math.floor(100000 + Math.random() * 900000);
        if (quoteRefId) {
          quoteRefId.innerText = refNumber;
        }

        if (quoteModal) {
          quoteModal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
          quoteModal.classList.add('flex', 'opacity-100');
        }

        quoteForm.reset();
      }, 900);
    });
  }

  if (closeQuoteModalBtn && quoteModal) {
    closeQuoteModalBtn.addEventListener('click', () => {
      quoteModal.classList.add('hidden', 'opacity-0', 'pointer-events-none');
      quoteModal.classList.remove('flex', 'opacity-100');
    });
  }

  // -------------------------------------------------------------
  // 9. Back to Top Button
  // -------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-6');
        backToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
      } else {
        backToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-6');
        backToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------------
  // 10. Initialize Marquee Swipers
  // -------------------------------------------------------------
  if (typeof Swiper !== 'undefined') {
    new Swiper('.marquee-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      speed: 4500,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });

    new Swiper('.marquee-swiper2', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });

    new Swiper('.marquee-swiper3', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      speed: 4800,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
    });

    new Swiper('.marquee-swiper4', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      speed: 4200,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  }
});

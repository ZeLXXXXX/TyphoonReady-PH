
document.addEventListener('DOMContentLoaded', function () {

  // ============================================================
  // SHARED: NAVIGATION (all pages)
  // ============================================================
  (function initNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked// Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });

    // Mark active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  })();


  // ============================================================
  // INDEX PAGE: Flood Risk Checker
  // ============================================================
  (function initFloodChecker() {
    const select = document.getElementById('flood-province');
    const btn = document.getElementById('flood-check-btn');
    const result = document.getElementById('flood-checker-result');

    if (!select || !btn || !result) return;

    const floodData = {
      'metro-manila': {
        name: 'Metro Manila',
        risk: 'high',
        riskLabel: 'HIGH RISK',
        icon: '🌊',
        details: 'Metro Manila sits on lowland terrain with limited drainage infrastructure. Areas like Marikina, Pasig, and Malabon are especially prone to severe flooding during typhoons and heavy monsoon rains. Storm surge from Manila Bay can also affect coastal barangays.',
        tips: [
          'Know your evacuation route before typhoon season',
          'Monitor PAGASA bulletins and NDRRMC advisories',
          'Never attempt to cross flooded roads on foot or by vehicle',
          'Keep emergency go-bag ready at all times',
          'Store drinking water and dry goods for at least 3 days',
        ]
      },
      'cebu': {
        name: 'Cebu Province',
        risk: 'med',
        riskLabel: 'MODERATE RISK',
        icon: '⚠️',
        details: 'Cebu has a mountainous interior that reduces widespread flooding, but coastal communities and areas along river systems face significant risk. Typhoon-induced storm surge poses the greatest threat to low-lying coastal municipalities.',
        tips: [
          'Flash floods can occur rapidly in coastal and river-adjacent areas',
          'Move to higher ground immediately upon storm surge warnings',
          'Inspect home foundations and drainage before typhoon season',
          'Coordinate with barangay DRRM officers',
        ]
      },
      'pampanga': {
        name: 'Pampanga',
        risk: 'high',
        riskLabel: 'HIGH RISK',
        icon: '🌊',
        details: 'Pampanga is historically one of the most flood-prone provinces in the Philippines, sitting in the low-lying Central Luzon plain. The Pampanga River watershed and proximity to Laguna de Bay increase vulnerability significantly during La Niña and typhoon seasons.',
        tips: [
          'Elevate furniture and valuables before typhoon arrival',
          'Know the nearest evacuation center in your barangay',
          'Maintain contact with local DRRM offices for updates',
          'Avoid low-lying areas and riverbeds during heavy rain',
          'Prepare flotation devices as a precaution',
        ]
      },
      'leyte': {
        name: 'Leyte',
        risk: 'high',
        riskLabel: 'HIGH RISK',
        icon: '🌊',
        details: 'Leyte is one of the most typhoon-exposed provinces in the Philippines, positioned in the Eastern Visayas typhoon belt. The province was devastated by Super Typhoon Haiyan (Yolanda) in 2013. Storm surge, flash floods, and landslides are all major threats.',
        tips: [
          'Immediately heed mandatory evacuation orders — do not wait',
          'Typhoon storm surges can reach 3–6 meters in exposed areas',
          'Avoid coastal areas and riverbeds once typhoon signal is raised',
          'Prepare emergency supplies for up to 7 days',
          'Know your DRRM officer and barangay shelter location',
        ]
      },
      'cagayan': {
        name: 'Cagayan Valley',
        risk: 'high',
        riskLabel: 'HIGH RISK',
        icon: '🌊',
        details: 'Cagayan Valley is frequently struck by typhoons making landfall on the Pacific coast of Northern Luzon. The Cagayan River, the longest in the Philippines, floods extensively. Typhoons Ulysses (2020) caused catastrophic inundation in Cagayan and Isabela.',
        tips: [
          'Monitor Cagayan River water levels during typhoon watches',
          'Evacuate riverside communities at first flood warnings',
          'Keep emergency boats or flotation devices accessible',
          'Pre-position supplies at designated evacuation sites',
        ]
      },
      'batangas': {
        name: 'Batangas',
        risk: 'med',
        // ============================================================
        // TYPHOON READY PH — main.js
        // SDG 13 Climate Action | Philippines
        // All interactivity for all pages
        // ============================================================

        document.addEventListener('DOMContentLoaded', function () {

          // ============================================================
          // SHARED: NAVIGATION (all pages)
          // ============================================================
          (function initNav() {
            const hamburger = document.getElementById('nav-hamburger');
            const mobileMenu = document.getElementById('mobile-menu');
            if (!hamburger || !mobileMenu) return;

            hamburger.addEventListener('click', function () {
              const isOpen = mobileMenu.classList.toggle('open');
              hamburger.setAttribute('aria-expanded', isOpen);
            });

            mobileMenu.querySelectorAll('a').forEach(function (link) {
              link.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
              });
            });

            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (link) {
              const href = link.getAttribute('href');
              if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
              }
            });
          })();


          // ============================================================
          // INDEX PAGE: Flood Risk Checker
          // ============================================================
          (function initFloodChecker() {
            const select = document.getElementById('flood-province');
            const btn = document.getElementById('flood-check-btn');
            const result = document.getElementById('flood-checker-result');

            if (!select || !btn || !result) return;

            const floodData = {
              'metro-manila': {
                name: 'Metro Manila',
                risk: 'high',
                riskLabel: 'HIGH RISK',
                icon: '🌊',
                details: 'Metro Manila sits on lowland terrain with limited drainage infrastructure. Areas like Marikina, Pasig, and Malabon are especially prone to severe flooding during typhoons and heavy monsoon rains. Storm surge from Manila Bay can also affect coastal barangays.',
                tips: [
                  'Know your evacuation route before typhoon season',
                  'Monitor PAGASA bulletins and NDRRMC advisories',
                  'Never attempt to cross flooded roads on foot or by vehicle',
                  'Keep emergency go-bag ready at all times',
                  'Store drinking water and dry goods for at least 3 days',
                ]
              },
              'cebu': {
                name: 'Cebu Province',
                risk: 'med',
                riskLabel: 'MODERATE RISK',
                icon: '⚠️',
                details: 'Cebu has a mountainous interior that reduces widespread flooding, but coastal communities and areas along river systems face significant risk. Typhoon-induced storm surge poses the greatest threat to low-lying coastal municipalities.',
                tips: [
                  'Flash floods can occur rapidly in coastal and river-adjacent areas',
                  'Move to higher ground immediately upon storm surge warnings',
                  'Inspect home foundations and drainage before typhoon season',
                  'Coordinate with barangay DRRM officers',
                ]
              },
              'pampanga': {
                name: 'Pampanga',
                risk: 'high',
                riskLabel: 'HIGH RISK',
                icon: '🌊',
                details: 'Pampanga is historically one of the most flood-prone provinces in the Philippines, sitting in the low-lying Central Luzon plain. The Pampanga River watershed and proximity to Laguna de Bay increase vulnerability significantly during La Niña and typhoon seasons.',
                tips: [
                  'Elevate furniture and valuables before typhoon arrival',
                  'Know the nearest evacuation center in your barangay',
                  'Maintain contact with local DRRM offices for updates',
                  'Avoid low-lying areas and riverbeds during heavy rain',
                  'Prepare flotation devices as a precaution',
                ]
              },
              'leyte': {
                name: 'Leyte',
                risk: 'high',
                riskLabel: 'HIGH RISK',
                icon: '🌊',
                details: 'Leyte is one of the most typhoon-exposed provinces in the Philippines, positioned in the Eastern Visayas typhoon belt. The province was devastated by Super Typhoon Haiyan (Yolanda) in 2013. Storm surge, flash floods, and landslides are all major threats.',
                tips: [
                  'Immediately heed mandatory evacuation orders — do not wait',
                  'Typhoon storm surges can reach 3–6 meters in exposed areas',
                  'Avoid coastal areas and riverbeds once typhoon signal is raised',
                  'Prepare emergency supplies for up to 7 days',
                  'Know your DRRM officer and barangay shelter location',
                ]
              },
              'cagayan': {
                name: 'Cagayan Valley',
                risk: 'high',
                riskLabel: 'HIGH RISK',
                icon: '🌊',
                details: 'Cagayan Valley is frequently struck by typhoons making landfall on the Pacific coast of Northern Luzon. The Cagayan River, the longest in the Philippines, floods extensively. Typhoons Ulysses (2020) caused catastrophic inundation in Cagayan and Isabela.',
                tips: [
                  'Monitor Cagayan River water levels during typhoon watches',
                  'Evacuate riverside communities at first flood warnings',
                  'Keep emergency boats or flotation devices accessible',
                  'Pre-position supplies at designated evacuation sites',
                ]
              },
              'batangas': {
                name: 'Batangas',
                risk: 'med',
                riskLabel: 'MODERATE RISK',
                icon: '⚠️',
                details: 'Batangas faces compound risks from typhoons, volcanic activity near Taal Volcano, and coastal flooding. Flash floods in mountainous areas and storm surge in coastal towns are the primary typhoon-related threats.',
                tips: [
                  'Monitor Taal Volcano alerts alongside typhoon bulletins',
                  'Coastal areas should observe storm surge warnings closely',
                  'Flash floods can occur rapidly in upland barangays',
                  'Participate in barangay DRRM preparedness drills',
                ]
              },
              'quezon-province': {
                name: 'Quezon Province',
                risk: 'high',
                riskLabel: 'HIGH RISK',
                icon: '🌊',
                details: 'Quezon Province faces the Pacific Ocean directly and is frequently in the path of typhoons crossing Southern Luzon. Combined with mountainous terrain, landslide and flash flood risks are elevated, particularly in Aurora and the Sierra Madre foothills.',
                tips: [
                  'Landslide risk is high in mountainous interior barangays',
                  'Avoid river crossings and mountain roads during typhoons',
                  'Monitor PHIVOLCS and PAGASA jointly for combined risks',
                  'Prepare a week\'s supply of water, food, and medicines',
                ]
              },
              'davao': {
                name: 'Davao Region',
                risk: 'low',
                riskLabel: 'LOWER RISK',
                icon: '✅',
                details: 'The Davao region sits in Mindanao\'s typhoon shadow zone, making it one of the least typhoon-exposed areas in the Philippines. However, seasonal flooding along rivers and flash floods during intense monsoon rains still occur and should not be dismissed.',
                tips: [
                  'Localized flash floods can still occur during heavy monsoons',
                  'Remain updated with PAGASA regional advisories year-round',
                  'Maintain basic emergency preparedness regardless of lower risk',
                  'Climate change is altering traditional weather patterns nationwide',
                ]
              }
            };

            function renderResult(key) {
              const data = floodData[key];
              if (!data) return;

              const riskClass = data.risk === 'high' ? 'risk-high' : data.risk === 'med' ? 'risk-med' : 'risk-low';
              const tipsHTML = data.tips.map(function (tip) {
                return '<div class="flood-tip"><span class="flood-tip-icon">›</span><span>' + tip + '</span></div>';
              }).join('');

              result.innerHTML = [
                '<div class="flood-result-header ' + riskClass + '">',
                '  <div class="flood-result-icon ' + riskClass + '">' + data.icon + '</div>',
                '  <div>',
                '    <div class="flood-result-location">' + data.name + '</div>',
                '    <div class="flood-result-risk">' + data.riskLabel + '</div>',
                '  </div>',
                '</div>',
                '<p class="flood-result-details">' + data.details + '</p>',
                '<div class="flood-result-tips">' + tipsHTML + '</div>'
              ].join('');

              result.classList.add('show');
            }

            btn.addEventListener('click', function () {
              const key = select.value;
              if (!key) {
                result.classList.remove('show');
                return;
              }
              renderResult(key);
            });

            select.addEventListener('change', function () {
              if (result.classList.contains('show')) {
                renderResult(select.value);
              }
            });
          })();


          // ============================================================
          // FEATURES PAGE — TOOL 1: Go-Bag Checklist
          // ============================================================
          (function initGoBagChecklist() {
            const container = document.getElementById('checklist-grid');
            const progressBar = document.getElementById('checklist-progress-bar');
            const progressPercent = document.getElementById('checklist-percent');
            const statusMsg = document.getElementById('readiness-status');

            if (!container) return;

            const items = [
              { id: 'water', icon: '💧', name: 'Water (3-day supply)' },
              { id: 'food', icon: '🥫', name: 'Non-perishable food' },
              { id: 'flashlight', icon: '🔦', name: 'Flashlight & batteries' },
              { id: 'firstaid', icon: '🩹', name: 'First aid kit' },
              { id: 'meds', icon: '💊', name: 'Prescription medicines' },
              { id: 'documents', icon: '📄', name: 'Important documents' },
              { id: 'cash', icon: '💵', name: 'Emergency cash' },
              { id: 'radio', icon: '📻', name: 'Battery-powered radio' },
              { id: 'clothes', icon: '👕', name: 'Change of clothes (3 days)' },
              { id: 'whistle', icon: '📯', name: 'Emergency whistle' },
              { id: 'charger', icon: '🔋', name: 'Power bank / charger' },
              { id: 'blanket', icon: '🛏️', name: 'Blanket / emergency tarp' },
              { id: 'knife', icon: '🔪', name: 'Multi-tool / pocket knife' },
              { id: 'sanitizer', icon: '🧴', name: 'Hand sanitizer & hygiene kit' },
              { id: 'mask', icon: '😷', name: 'Face masks (N95/surgical)' },
              { id: 'contacts', icon: '📞', name: 'Emergency contact list' },
            ];

            const checked = {};

            function renderChecklist() {
              container.innerHTML = items.map(function (item) {
                const isChecked = checked[item.id] ? 'checked' : '';
                const checkMark = checked[item.id] ? '✓' : '';
                return [
                  '<div class="checklist-item ' + isChecked + '" data-id="' + item.id + '" tabindex="0" role="checkbox" aria-checked="' + (!!checked[item.id]) + '">',
                  '  <div class="check-box">' + checkMark + '</div>',
                  '  <span class="check-item-icon">' + item.icon + '</span>',
                  '  <span class="check-item-name">' + item.name + '</span>',
                  '</div>'
                ].join('');
              }).join('');

              container.querySelectorAll('.checklist-item').forEach(function (el) {
                el.addEventListener('click', function () {
                  const id = this.getAttribute('data-id');
                  checked[id] = !checked[id];
                  renderChecklist();
                  updateProgress();
                });
                el.addEventListener('keydown', function (e) {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    this.click();
                  }
                });
              });
            }

            function updateProgress() {
              const total = items.length;
              const done = Object.values(checked).filter(Boolean).length;
              const pct = Math.round((done / total) * 100);

              if (progressBar) progressBar.style.width = pct + '%';
              if (progressPercent) progressPercent.textContent = pct + '%';

              if (statusMsg) {
                if (pct === 0) {
                  statusMsg.textContent = 'Start checking items to assess your readiness';
                  statusMsg.style.color = 'var(--slate-400)';
                } else if (pct < 30) {
                  statusMsg.textContent = '⚠️ Minimal readiness — your go-bag needs work';
                  statusMsg.style.color = 'var(--red-400)';
                } else if (pct < 60) {
                  statusMsg.textContent = '🔶 Partial readiness — keep adding critical items';
                  statusMsg.style.color = 'var(--yellow-400)';
                } else if (pct < 85) {
                  statusMsg.textContent = '🟠 Good progress — almost fully prepared!';
                  statusMsg.style.color = 'var(--orange-400)';
                } else if (pct < 100) {
                  statusMsg.textContent = '🟢 Nearly ready — a few items left to pack!';
                  statusMsg.style.color = 'var(--green-400)';
                } else {
                  statusMsg.textContent = '✅ Fully prepared! Your go-bag is disaster-ready!';
                  statusMsg.style.color = 'var(--green-400)';
                }
              }
            }

            renderChecklist();
            updateProgress();
          })();


          // ============================================================
          // FEATURES PAGE — TOOL 2: Flood Height Vehicle Simulator
          // ============================================================
          (function initFloodSimulator() {
            const slider = document.getElementById('depth-slider');
            const depthDisplay = document.getElementById('flood-depth-display');
            const waterFill = document.getElementById('flood-water-fill');
            const vehicleIcon = document.getElementById('flood-vehicle-icon');
            const statusBox = document.getElementById('flood-status-box');
            const warningMsg = document.getElementById('flood-warning-msg');

            if (!slider) return;

            const levels = [
              {
                maxDepth: 0.15,
                label: '✅ PASSABLE',
                color: 'var(--green-400)',
                borderColor: 'var(--green-400)',
                vehicle: '🚗',
                fillPct: 5,
                message: 'Water depth is low. Roads remain passable for most vehicles. Exercise caution and reduce speed. Monitor conditions — depths can rise rapidly during active rainfall.',
                bgColor: 'rgba(46,204,113,0.08)'
              },
              {
                maxDepth: 0.30,
                label: '⚠️ CAUTION',
                color: 'var(--yellow-400)',
                borderColor: 'var(--yellow-400)',
                vehicle: '🚗',
                fillPct: 15,
                message: 'Ankle-deep water. Small, low-clearance vehicles may encounter intake problems. Wet brakes are a risk. Begin routing to alternate roads. Do not attempt crossing if depth is increasing.',
                bgColor: 'rgba(241,196,15,0.08)'
              },
              {
                maxDepth: 0.45,
                label: '🟠 RISKY',
                color: 'var(--orange-400)',
                borderColor: 'var(--orange-500)',
                vehicle: '🚗',
                fillPct: 25,
                message: 'Knee-deep water. Most standard vehicles face risk of stalling. SUVs and trucks may still pass but risk hydraulic lock in the engine. Avoid unless absolutely necessary.',
                bgColor: 'rgba(242,108,0,0.08)'
              },
              {
                maxDepth: 0.70,
                label: '🔴 DANGEROUS',
                color: 'var(--red-400)',
                borderColor: 'var(--red-500)',
                vehicle: '🚙',
                fillPct: 42,
                message: 'Waist-deep water. Vehicle doors cannot be opened against water pressure. Engine will stall in most vehicles. Water is beginning to enter passenger cabins of sedans. EVACUATE ON FOOT IF STILL POSSIBLE.',
                bgColor: 'rgba(231,76,60,0.1)'
              },
              {
                maxDepth: 1.0,
                label: '🆘 ABANDON VEHICLE',
                color: 'var(--red-500)',
                borderColor: 'var(--red-600)',
                vehicle: '🚙',
                fillPct: 60,
                message: '⚠️ CRITICAL: Chest-deep water. Abandon your vehicle immediately. Move to roof or high ground. Current can pull vehicles off roads. Do NOT try to drive through.',
                bgColor: 'rgba(192,57,43,0.15)'
              },
              {
                maxDepth: 1.5,
                label: '🆘 LIFE THREATENING',
                color: '#ff3333',
                borderColor: '#ff3333',
                vehicle: '🌊',
                fillPct: 82,
                message: '🚨 EXTREME DANGER: Vehicle completely submerged. Loss of control is certain. Swift water rescue required. NEVER attempt to cross flood water at this level. Evacuate by foot to high ground NOW.',
                bgColor: 'rgba(192,57,43,0.2)'
              },
              {
                maxDepth: 99,
                label: '☠️ FATAL HAZARD',
                color: '#cc0000',
                borderColor: '#cc0000',
                vehicle: '🌊',
                fillPct: 100,
                message: '🚨 FATAL LEVEL: Water has submerged all standard vehicles. Any attempt to move through water is life-threatening. Call 911 or 143 (Red Cross). Seek immediate shelter on highest available floor or rooftop.',
                bgColor: 'rgba(150,0,0,0.25)'
              }
            ];

            function getLevel(depth) {
              for (var i = 0; i < levels.length; i++) {
                if (depth <= levels[i].maxDepth) return levels[i];
              }
              return levels[levels.length - 1];
            }

            function updateSimulator() {
              const rawVal = parseFloat(slider.value);
              const depth = rawVal / 100;
              const level = getLevel(depth);

              if (depthDisplay) {
                depthDisplay.innerHTML = depth.toFixed(2) + '<span class="flood-depth-unit">m</span>';
                depthDisplay.style.color = level.color;
              }

              if (waterFill) {
                waterFill.style.height = level.fillPct + '%';
                waterFill.style.borderTopColor = level.color;
              }

              if (vehicleIcon) {
                vehicleIcon.textContent = level.vehicle;
              }

              if (statusBox) {
                statusBox.textContent = level.label;
                statusBox.style.color = level.color;
              }

              if (warningMsg) {
                warningMsg.textContent = level.message;
                warningMsg.style.borderLeftColor = level.borderColor;
                warningMsg.style.background = level.bgColor;
              }
            }

            slider.addEventListener('input', updateSimulator);
            updateSimulator();
          })();


          // ============================================================
          // FEATURES PAGE — TOOL 3: Evacuation Center Finder
          // ============================================================
          (function initEvacFinder() {
            const districtSelect = document.getElementById('evac-district');
            const findBtn = document.getElementById('evac-find-btn');
            const resultsContainer = document.getElementById('evac-results');

            if (!districtSelect || !findBtn || !resultsContainer) return;

            const evacuationCenters = {
              'manila': [
                {
                  name: 'Rizal Memorial Coliseum',
                  address: 'Pablo Ocampo Sr. St., Malate, Manila',
                  capacity: 2500,
                  occupied: 210,
                  status: 'available',
                  type: 'Primary'
                },
                {
                  name: 'Manila City Hall Covered Court',
                  address: 'Padre Burgos Ave., Manila',
                  capacity: 800,
                  occupied: 95,
                  status: 'available',
                  type: 'Secondary'
                },
                {
                  name: 'Manila Science High School Gymnasium',
                  address: 'Taft Ave., Malate, Manila',
                  capacity: 600,
                  occupied: 600,
                  status: 'full',
                  type: 'Secondary'
                }
              ],
              'quezon-city': [
                {
                  name: 'Quezon City Sports Club',
                  address: 'Kalayaan Ave., Diliman, Quezon City',
                  capacity: 3000,
                  occupied: 480,
                  status: 'available',
                  type: 'Primary'
                },
                {
                  name: 'Batasan Hills National High School',
                  address: 'Batasan Rd., Batasan Hills, QC',
                  capacity: 1200,
                  occupied: 1050,
                  status: 'limited',
                  type: 'Secondary'
                },
                {
                  name: 'QC Memorial Circle Grounds',
                  address: 'Elliptical Rd., Diliman, Quezon City',
                  capacity: 5000,
                  occupied: 600,
                  status: 'available',
                  type: 'Primary'
                }
              ],
              'marikina': [
                {
                  name: 'Marikina Sports Center',
                  address: 'Felix Avenue, Marikina City',
                  capacity: 2000,
                  occupied: 1880,
                  status: 'limited',
                  type: 'Primary'
                },
                {
                  name: 'Barangay Tumana Multi-Purpose Hall',
                  address: 'Tumana St., Marikina City',
                  capacity: 400,
                  occupied: 280,
                  status: 'available',
                  type: 'Barangay'
                }
              ],
              'pasig': [
                {
                  name: 'Pasig City Sports Complex',
                  address: 'Caruncho Ave., Pasig City',
                  capacity: 1800,
                  occupied: 720,
                  status: 'available',
                  type: 'Primary'
                },
                {
                  name: 'Pasig City General Hospital Annex',
                  address: 'Estrella St., Pasig City',
                  capacity: 300,
                  occupied: 300,
                  status: 'full',
                  type: 'Medical'
                }
              ],
              'taguig': [
                {
                  name: 'Taguig City University Gymnasium',
                  address: 'Gen. Santos Ave., Central Bicutan, Taguig',
                  capacity: 1500,
                  occupied: 200,
                  status: 'available',
                  type: 'Primary'
                },
                {
                  name: 'Signal Village Barangay Hall',
                  address: 'Signal Village, Taguig City',
                  capacity: 350,
                  occupied: 350,
                  status: 'full',
                  type: 'Barangay'
                },
                {
                  name: 'SM Aura Evacuation Area (Parking Level B1)',
                  address: 'McKinley Pkwy, Taguig City',
                  capacity: 800,
                  occupied: 120,
                  status: 'available',
                  type: 'Commercial'
                }
              ],
              'caloocan': [
                {
                  name: 'Caloocan City Sports Complex',
                  address: 'Lapu-Lapu St., Caloocan City',
                  capacity: 2200,
                  occupied: 900,
                  status: 'available',
                  type: 'Primary'
                },
                {
                  name: 'North Caloocan National High School',
                  address: 'Deparo Rd., Caloocan City',
                  capacity: 700,
                  occupied: 640,
                  status: 'limited',
                  type: 'Secondary'
                }
              ],
              'valenzuela': [
                {
                  name: 'Valenzuela Astrodome',
                  address: 'Maysan Rd., Valenzuela City',
                  capacity: 4000,
                  occupied: 1100,
                  status: 'available',
                  type: 'Primary'
                },
                {
                  name: 'Karuhatan Barangay Evacuation Site',
                  address: 'Karuhatan, Valenzuela City',
                  capacity: 450,
                  occupied: 90,
                  status: 'available',
                  type: 'Barangay'
                }
              ],
              'malabon': [
                {
                  name: 'Malabon City Multi-Purpose Complex',
                  address: 'Gov. Pascual Ave., Malabon City',
                  capacity: 1000,
                  occupied: 980,
                  status: 'limited',
                  type: 'Primary'
                }
              ]
            };

            function getStatusLabel(status) {
              const map = { available: 'Available', limited: 'Limited Space', full: 'At Capacity' };
              return map[status] || status;
            }

            function renderEvacCenters(key) {
              const centers = evacuationCenters[key];
              if (!centers || centers.length === 0) {
                resultsContainer.innerHTML = '<div class="evac-no-results">No centers found for this district. Contact your local DRRMO.</div>';
                return;
              }

              resultsContainer.innerHTML = centers.map(function (center) {
                const pct = Math.round((center.occupied / center.capacity) * 100);
                return [
                  '<div class="evac-card">',
                  '  <div class="evac-card-icon">🏫</div>',
                  '  <div class="evac-card-body">',
                  '    <div class="evac-card-name">' + center.name + '</div>',
                  '    <div class="evac-card-address">📍 ' + center.address + '</div>',
                  '    <div class="evac-card-meta">',
                  '      <span class="evac-meta-item">👥 Capacity: <strong style="color:var(--white);margin-left:4px">' + center.capacity.toLocaleString() + '</strong></span>',
                  '      <span class="evac-meta-item">🏷️ Type: <strong style="color:var(--white);margin-left:4px">' + center.type + '</strong></span>',
                  '      <span class="evac-meta-item">📊 Occupancy: <strong style="color:var(--orange-300);margin-left:4px">' + pct + '%</strong></span>',
                  '      <span class="evac-status ' + center.status + '">' + getStatusLabel(center.status) + '</span>',
                  '    </div>',
                  '  </div>',
                  '</div>'
                ].join('');
              }).join('');
            }

            findBtn.addEventListener('click', function () {
              const key = districtSelect.value;
              if (!key) {
                resultsContainer.innerHTML = '<div class="evac-no-results">Please select a district to search.</div>';
                return;
              }
              renderEvacCenters(key);
            });

            districtSelect.addEventListener('change', function () {
              if (resultsContainer.innerHTML.trim() !== '') {
                if (this.value) {
                  renderEvacCenters(this.value);
                }
              }
            });
          })();


          // ============================================================
          // FEATURES PAGE — TOOL 4: Community Situation Report Feed
          // ============================================================
          (function initSitRepFeed() {
            const form = document.getElementById('sitrep-form');
            const reportInput = document.getElementById('sitrep-report');
            const locationInput = document.getElementById('sitrep-location');
            const reporterInput = document.getElementById('sitrep-reporter');
            const feedList = document.getElementById('sitrep-feed');
            const submitBtn = document.getElementById('sitrep-submit');

            if (!form || !feedList) return;

            const reports = [
              {
                reporter: 'Brgy. Tanod Unit 5',
                location: 'Barangay 23, Tondo, Manila',
                message: 'Water level at Estero de Vitas has risen to knee level. Residents in low-lying areas being advised to move to the covered court. Situation being monitored.',
                timestamp: getTimestamp(-18)
              },
              {
                reporter: 'MDRRMO Marikina',
                location: 'Sto. Niño, Marikina City',
                message: 'Marikina River currently at Level 18.2 meters. Mandatory evacuation issued for residents within critical zone. 3 evacuation sites now open.',
                timestamp: getTimestamp(-35)
              },
              {
                reporter: 'Community Volunteer - Ana R.',
                location: 'Bagong Silang, Caloocan City',
                message: 'Flood waters receding in our area. Main road now accessible by foot. Distribution of food packs ongoing at the basketball court. Families still need drinking water.',
                timestamp: getTimestamp(-57)
              }
            ];

            function getTimestamp(minutesAgo) {
              const d = new Date(Date.now() + (minutesAgo * 60000));
              const h = d.getHours().toString().padStart(2, '0');
              const m = d.getMinutes().toString().padStart(2, '0');
              const mo = (d.getMonth() + 1).toString().padStart(2, '0');
              const day = d.getDate().toString().padStart(2, '0');
              return mo + '/' + day + ' ' + h + ':' + m;
            }

            function renderFeed() {
              if (reports.length === 0) {
                feedList.innerHTML = '<div class="feed-empty">No reports yet. Be the first to submit.</div>';
                return;
              }
              feedList.innerHTML = reports.map(function (r) {
                return [
                  '<div class="feed-item">',
                  '  <div class="feed-item-header">',
                  '    <span class="feed-item-user">' + escapeHtml(r.reporter) + '</span>',
                  '    <span class="feed-item-time">' + r.timestamp + '</span>',
                  '  </div>',
                  '  <div class="feed-item-location">📍 ' + escapeHtml(r.location) + '</div>',
                  '  <div class="feed-item-msg">' + escapeHtml(r.message) + '</div>',
                  '</div>'
                ].join('');
              }).join('');
            }

            function escapeHtml(str) {
              return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
            }

            if (submitBtn) {
              submitBtn.addEventListener('click', function (e) {
                e.preventDefault();

                const msg = reportInput ? reportInput.value.trim() : '';
                const loc = locationInput ? locationInput.value.trim() : '';
                const rep = reporterInput ? reporterInput.value.trim() : '';

                if (!msg) {
                  reportInput.focus();
                  reportInput.style.borderColor = 'var(--red-400)';
                  setTimeout(function () { reportInput.style.borderColor = ''; }, 2000);
                  return;
                }
                if (!loc) {
                  locationInput.focus();
                  locationInput.style.borderColor = 'var(--red-400)';
                  setTimeout(function () { locationInput.style.borderColor = ''; }, 2000);
                  return;
                }

                const newReport = {
                  reporter: rep || 'Anonymous Resident',
                  location: loc,
                  message: msg,
                  timestamp: getTimestamp(0)
                };

                reports.unshift(newReport);
                renderFeed();

                if (reportInput) reportInput.value = '';
                if (locationInput) locationInput.value = '';
                if (reporterInput) reporterInput.value = '';

                if (feedList) feedList.scrollTop = 0;

                const origText = submitBtn.textContent;
                submitBtn.textContent = '✓ Report Submitted';
                submitBtn.style.background = 'var(--green-500)';
                setTimeout(function () {
                  submitBtn.textContent = origText;
                  submitBtn.style.background = '';
                }, 2000);
              });
            }

            renderFeed();
          })();


          // ============================================================
          // CONTACT PAGE: Feedback Form Submission
          // ============================================================
          (function initContactForm() {
            const submitBtn = document.getElementById('contact-submit');
            const form = document.getElementById('contact-form');
            const successBox = document.getElementById('form-success');

            if (!submitBtn || !form) return;

            submitBtn.addEventListener('click', function (e) {
              e.preventDefault();

              const nameField = document.getElementById('contact-name');
              const emailField = document.getElementById('contact-email');
              const msgField = document.getElementById('contact-message');

              let valid = true;

              [nameField, emailField, msgField].forEach(function (field) {
                if (!field) return;
                if (!field.value.trim()) {
                  field.style.borderColor = 'var(--red-400)';
                  field.style.boxShadow = '0 0 0 3px rgba(231,76,60,0.15)';
                  valid = false;
                  setTimeout(function () {
                    field.style.borderColor = '';
                    field.style.boxShadow = '';
                  }, 2500);
                }
              });

              if (!valid) return;

              form.style.display = 'none';
              if (successBox) successBox.classList.add('show');

              if (successBox) successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
          })();


          // ============================================================
          // CONTACT PAGE: Click-to-Call hotline button handlers
          // ============================================================
          (function initHotlineButtons() {
            document.querySelectorAll('[data-call]').forEach(function (btn) {
              btn.addEventListener('click', function () {
                const number = this.getAttribute('data-call');
                if (number) window.location.href = 'tel:' + number;
              });
            });
          })();


          // ============================================================
          // SHARED: Scroll-reveal animation (mild entrance effect)
          // ============================================================
          (function initScrollReveal() {
            if (!window.IntersectionObserver) return;

            const targets = document.querySelectorAll('.card, .tool-panel, .hotline-card, .stat-block, .evac-card');
            const observer = new IntersectionObserver(function (entries) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

            targets.forEach(function (el) {
              el.style.opacity = '0';
              el.style.transform = 'translateY(20px)';
              el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              observer.observe(el);
            });
          })();

        });
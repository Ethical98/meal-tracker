/* ============================================
   MEAL TRACKER APP — Core Logic
   ============================================ */

// ——— NUTRITION PLAN DEFINITION ———
const PLAN = {
    meals: [
        {
            id: 'morning', name: 'Wake-Up Drink', icon: '☀️', type: 'morning',
            subtitle: 'Hydration + Gut Health',
            simple: true,
            description: '500ml Water + 2ml ACV + 5ml Aloe Vera + 1 Lemon Slice'
        },
        {
            id: 'meal1', name: 'Meal 1', icon: '🥗', type: 'meal1',
            subtitle: 'Protein + Healthy Fats + Veggies',
            groups: [
                {
                    name: 'Protein', pick: 1, options: [
                        { id: 'paneer100', name: 'Low-Fat Paneer', qty: '100g', hint: '~4-5 cubes', grams: 100, unit: 'g', step: 10 },
                        { id: 'tofu120', name: 'Tofu', qty: '120g', hint: '~½ block', grams: 120, unit: 'g', step: 10 },
                        { id: 'whey', name: 'Whey Protein', qty: '1.25 scoops', hint: '', grams: 38, unit: 'g', step: 5 },
                        { id: 'sprouts', name: 'Sprouts', qty: '80g', hint: '~½ cup', grams: 80, unit: 'g', step: 10 },
                    ]
                },
                {
                    name: 'Fats', pick: 1, options: [
                        { id: 'walnuts', name: 'Walnut Halves', qty: '5 pcs', hint: '', grams: 5, unit: 'pcs', step: 1 },
                        { id: 'almonds', name: 'Almonds', qty: '10 pcs', hint: '', grams: 10, unit: 'pcs', step: 1 },
                    ]
                },
            ],
            hasVeggies: true,
        },
        { id: '_cardio', separator: true, label: '🚶 Cardio / Walk' },
        {
            id: 'meal2', name: 'Meal 2', icon: '🍛', type: 'meal2',
            subtitle: 'Protein + Carbs + Veggies',
            groups: [
                {
                    name: 'Protein', pick: 1, options: [
                        { id: 'dal_curd', name: 'Dal + Curd/Yogurt', qty: '25g dal + 150g', hint: '~⅓ katori dal', grams: 175, unit: 'g', step: 10 },
                        { id: 'soya30', name: 'Soya Nuggets', qty: '30g dry', hint: '~20 pcs soaked', grams: 30, unit: 'g', step: 5 },
                        { id: 'paneer100b', name: 'Low-Fat Paneer', qty: '100g', hint: '~4-5 cubes', grams: 100, unit: 'g', step: 10 },
                        { id: 'tempeh', name: 'Tempeh', qty: '100g', hint: '', grams: 100, unit: 'g', step: 10 },
                    ]
                },
                {
                    name: 'Carbs', pick: 1, options: [
                        { id: 'chapati', name: 'Bran Flour Chapati', qty: '40g flour', hint: '~1.5-2 small', grams: 40, unit: 'g', step: 5 },
                        { id: 'brownpasta', name: 'Brown Pasta', qty: '40g', hint: '~½ cup cooked', grams: 40, unit: 'g', step: 5 },
                        { id: 'whitebrice', name: 'White / Brown Rice', qty: '40g', hint: '~⅓ cup cooked', grams: 40, unit: 'g', step: 5 },
                        { id: 'potatoes150', name: 'Potatoes', qty: '150g', hint: '~1 medium', grams: 150, unit: 'g', step: 10 },
                        { id: 'vermicelli', name: 'Vermicelli', qty: '40g', hint: '~½ cup cooked', grams: 40, unit: 'g', step: 5 },
                    ]
                },
            ],
            hasVeggies: true,
        },
        {
            id: 'meal3', name: 'Meal 3', icon: '🫐', type: 'meal3',
            subtitle: 'Dairy + Fruit + Nuts (Smoothie OK!)',
            groups: [
                {
                    name: 'Base', pick: 1, options: [
                        { id: 'milk150', name: 'Low-Fat Milk', qty: '150ml', hint: '', grams: 150, unit: 'ml', step: 10 },
                        { id: 'yogurt120', name: 'Greek Yogurt', qty: '120g', hint: '~½ cup', grams: 120, unit: 'g', step: 10 },
                    ]
                },
                {
                    name: 'Fruit', pick: 1, options: [
                        { id: 'fruit1', name: 'Fruit of Choice', qty: '1 pc', hint: '', grams: 1, unit: 'pc', step: 1 },
                        { id: 'berries', name: 'Berries', qty: '180g', hint: '~1 cup', grams: 180, unit: 'g', step: 10 },
                    ]
                },
                {
                    name: 'Nuts', pick: 1, options: [
                        { id: 'nuts5', name: 'Nuts of Choice', qty: '5 pcs', hint: '', grams: 5, unit: 'pcs', step: 1 },
                    ]
                },
            ],
        },
        { id: '_workout', separator: true, label: '🏋️ Workout' },
        {
            id: 'meal4', name: 'Meal 4', icon: '🍲', type: 'meal4',
            subtitle: 'Post-Workout Protein + Carbs',
            groups: [
                {
                    name: 'Protein', pick: 1, options: [
                        { id: 'paneer120', name: 'Low-Fat Paneer', qty: '120g', hint: '~5-6 cubes', grams: 120, unit: 'g', step: 10 },
                        { id: 'tofu120b', name: 'Tofu', qty: '120g', hint: '~½ block', grams: 120, unit: 'g', step: 10 },
                        { id: 'soya30b', name: 'Soya Nuggets', qty: '30g dry', hint: '~20 pcs soaked', grams: 30, unit: 'g', step: 5 },
                    ]
                },
                {
                    name: 'Carbs', pick: 1, options: [
                        { id: 'chapati2', name: 'Bran Flour Chapati', qty: '40g flour', hint: '~1.5-2 small', grams: 40, unit: 'g', step: 5 },
                        { id: 'oats', name: 'Masala Oats', qty: '40g', hint: '~½ cup (1 pkt)', grams: 40, unit: 'g', step: 5 },
                        { id: 'rice40', name: 'Rice', qty: '40g', hint: '~⅓ cup cooked', grams: 40, unit: 'g', step: 5 },
                        { id: 'brownpasta2', name: 'Brown Pasta', qty: '40g', hint: '~½ cup cooked', grams: 40, unit: 'g', step: 5 },
                        { id: 'potatoes150b', name: 'Potatoes', qty: '150g', hint: '~1 medium', grams: 150, unit: 'g', step: 10 },
                        { id: 'noodles', name: 'Whole Wheat Noodles', qty: '40g', hint: '~½ cup cooked', grams: 40, unit: 'g', step: 5 },
                        { id: 'bread2', name: 'Brown Bread', qty: '2 slices', hint: '~60g', grams: 60, unit: 'g', step: 10 },
                    ]
                },
            ],
            hasVeggies: true,
            altOption: {
                label: 'OR — Eating Out',
                name: 'Subway 6" — Fat-Free Topping + Fat-Free Sauces · No Cheese',
                id: 'subway',
            },
        },
        {
            id: 'presleep', name: 'Pre-Sleep', icon: '🌙', type: 'sleep',
            subtitle: 'Wind down',
            simple: true,
            description: 'A cup of Chamomile Tea'
        },
    ]
};

// ——— APP STATE ———
const App = {
    today: new Date().toISOString().split('T')[0],
    data: {},      // All tracking data { days: { "2026-03-06": { meals: {}, checkin: {} } } }
    water: 0,
    openCards: new Set(),  // Track which meal cards are expanded

    // ——— INIT ———
    init() {
        this.loadData();
        this.renderDate();
        this.renderMealCards();
        this.renderWater();
        this.restoreCheckin();
        this.updateProgress();
        this.renderPending();
        this.setupNav();
        this.setupNav();

        // Auto-navigate to coach view if hash
        if (location.hash === '#coach') {
            this.switchView('viewCoach');
            this.loadCoachData();
        }
    },

    // ——— NAVIGATION ———
    setupNav() {
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const view = btn.dataset.view;
                this.switchView(view);
                if (view === 'viewCoach') this.loadCoachData();
            });
        });
    },

    switchView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        const navBtn = document.querySelector(`[data-view="${viewId}"]`);
        if (navBtn) navBtn.classList.add('active');
        window.scrollTo({ top: 0 });
    },

    // ——— DATA PERSISTENCE ———
    loadData() {
        const raw = localStorage.getItem('mealtracker_data');
        this.data = raw ? JSON.parse(raw) : { days: {} };
        if (!this.data.days[this.today]) {
            this.data.days[this.today] = { meals: {}, checkin: {} };
        }
        this.water = this.data.days[this.today].checkin?.water || 0;
    },

    saveData() {
        this.data.lastSync = new Date().toISOString();
        localStorage.setItem('mealtracker_data', JSON.stringify(this.data));
        this.setSyncStatus('pending');
    },

    // ——— DATE DISPLAY ———
    renderDate() {
        const d = new Date();
        const opts = { weekday: 'short', month: 'short', day: 'numeric' };
        document.getElementById('todayDate').textContent = d.toLocaleDateString('en-IN', opts);
    },

    // ——— RENDER MEAL CARDS ———
    renderMealCards() {
        const container = document.getElementById('mealCardsContainer');
        const todayMeals = this.data.days[this.today].meals;
        const isInitialRender = container.children.length === 0;

        // Initialize DOM structure once
        if (isInitialRender) {
            PLAN.meals.forEach(meal => {
                if (meal.separator) {
                    const sep = document.createElement('div');
                    sep.className = 'activity-sep';
                    sep.textContent = meal.label;
                    container.appendChild(sep);
                    return;
                }
                const card = document.createElement('div');
                card.className = `meal-card ${meal.type}`;
                card.id = `meal-card-${meal.id}`;
                container.appendChild(card);
            });
        }

        // Update content of existing cards in place
        PLAN.meals.forEach(meal => {
            if (meal.separator) return;

            const card = document.getElementById(`meal-card-${meal.id}`);
            if (!card) return;

            if (this.openCards.has(meal.id)) {
                card.classList.add('open');
            } else {
                card.classList.remove('open');
                card.classList.remove('animate-open');
            }

            if (meal.simple) {
                const isDone = todayMeals[meal.id]?.done || false;
                card.innerHTML = `
          <div class="meal-card-header" onclick="App.toggleSimpleMeal('${meal.id}', this)">
            <div class="meal-card-left">
              <div class="meal-icon">${meal.icon}</div>
              <div><div class="meal-card-title">${meal.name}</div><div class="meal-card-subtitle">${meal.subtitle}</div></div>
            </div>
            <span class="meal-card-status ${isDone ? 'done' : ''}">${isDone ? '✓ Done' : 'Tap to log'}</span>
          </div>
          <div class="meal-card-body" style="display:block;padding:0.3rem 1rem 0.8rem;">
            <div style="font-size:0.8rem;color:var(--text-secondary);padding-left:2.8rem;">${meal.description}</div>
          </div>`;
            } else {
                const status = this.getMealStatus(meal.id);
                // By updating just the innerHTML of the card, we keep the card element itself stable
                card.innerHTML = `
          <div class="meal-card-header">
            <div class="meal-card-left" onclick="App.toggleCard('${meal.id}', this)" style="cursor:pointer;flex:1;">
              <div class="meal-icon">${meal.icon}</div>
              <div><div class="meal-card-title">${meal.name}</div><div class="meal-card-subtitle">${meal.subtitle}</div></div>
            </div>
            <div style="display:flex;align-items:center;gap:0.5rem;" onclick="App.toggleCard('${meal.id}', this)" style="cursor:pointer;">
              <span class="meal-card-status ${status.class}">${status.label}</span>
              <span class="meal-chevron">▾</span>
            </div>
          </div>
          <div class="meal-card-body">${this.renderMealBody(meal)}</div>`;
            }
        });
    },

    renderMealBody(meal) {
        let html = '';
        const todayMeals = this.data.days[this.today].meals;
        const mealData = todayMeals[meal.id] || {};

        meal.groups.forEach(group => {
            const gk = group.name.toLowerCase();
            html += `<div class="option-group">
        <div class="option-label">${group.name} <span class="pick-badge">Pick ${group.pick}</span></div>`;
            group.options.forEach(opt => {
                // Support both old format (string) and new format ({id, consumed})
                const selData = mealData[gk];
                const sel = selData && (typeof selData === 'string' ? selData === opt.id : selData.id === opt.id);
                const consumed = sel && typeof selData === 'object' ? selData.consumed : (sel ? opt.grams : 0);
                const pct = sel ? Math.round((consumed / opt.grams) * 100) : 0;

                html += `<button class="option-item ${sel ? 'selected' : ''}"
          onclick="App.selectOption('${meal.id}','${gk}','${opt.id}', this)">
          <span class="option-radio"></span>
          <span class="option-name">${opt.name}</span>
          <span class="option-hint">${opt.qty}${opt.hint ? ' · ' + opt.hint : ''}</span>
        </button>`;

                // Show quantity stepper when selected
                if (sel) {
                    html += `<div class="qty-stepper">
            <button class="qty-btn" onclick="event.stopPropagation();App.adjustQty('${meal.id}','${gk}',-${opt.step})">−</button>
            <div class="qty-display">
              <div class="qty-val">${consumed}${opt.unit}</div>
              <div class="qty-total">of ${opt.grams}${opt.unit}</div>
            </div>
            <div class="qty-bar"><div class="qty-bar-fill" style="width:${pct}%"></div></div>
            <button class="qty-btn" onclick="event.stopPropagation();App.adjustQty('${meal.id}','${gk}',${opt.step})">+</button>
          </div>`;
                }
            });
            html += '</div>';
        });

        if (meal.hasVeggies) {
            const vegDone = mealData.veggies || false;
            html += `<div class="veggies-toggle">
        <span>🥬 Veggies Added</span>
        <label class="toggle"><input type="checkbox" ${vegDone ? 'checked' : ''}
          onchange="App.toggleVeggies('${meal.id}', this.checked)"><span class="toggle-slider"></span></label>
      </div>`;
        }

        if (meal.altOption) {
            const altSel = mealData.alt === meal.altOption.id;
            html += `<div style="margin-top:0.6rem;padding-top:0.6rem;border-top:1px solid var(--border);">
        <button class="option-item ${altSel ? 'selected' : ''}" style="background:rgba(249,115,22,0.08)"
          onclick="App.selectAlt('${meal.id}','${meal.altOption.id}', this)">
          <span class="option-check"></span>
          <span class="option-name">${meal.altOption.label}</span>
        </button>
        ${altSel ? `<div style="font-size:0.75rem;color:var(--text-secondary);padding:0.3rem 0.7rem 0;">${meal.altOption.name}</div>` : ''}
      </div>`;
        }
        return html;
    },

    getMealStatus(mealId) {
        const mealData = this.data.days[this.today].meals[mealId];
        if (!mealData) return { label: 'Pending', class: '' };
        const keys = Object.keys(mealData).filter(k => k !== 'veggies' && k !== 'alt');
        const meal = PLAN.meals.find(m => m.id === mealId);
        if (!meal || !meal.groups) return { label: 'Pending', class: '' };

        if (mealData.alt) return { label: '✓ Done', class: 'done' };
        const totalGroups = meal.groups.length;
        if (keys.length >= totalGroups) return { label: '✓ Done', class: 'done' };
        if (keys.length > 0) return { label: `${keys.length}/${totalGroups}`, class: '' };
        return { label: 'Pending', class: '' };
    },

    // ——— OPTION SELECTION ———
    selectOption(mealId, groupKey, optionId, el) {
        if (!this.data.days[this.today].meals[mealId]) {
            this.data.days[this.today].meals[mealId] = {};
        }
        const currentVal = this.data.days[this.today].meals[mealId][groupKey];
        const currentId = currentVal && typeof currentVal === 'object' ? currentVal.id : currentVal;

        // If re-selecting same, deselect
        if (currentId === optionId) {
            delete this.data.days[this.today].meals[mealId][groupKey];
        } else {
            // Find the option definition to get default grams
            const mealDef = PLAN.meals.find(m => m.id === mealId);
            const group = mealDef?.groups?.find(g => g.name.toLowerCase() === groupKey);
            const opt = group?.options.find(o => o.id === optionId);
            const defaultGrams = opt ? opt.grams : 0;

            // Store as object with consumed quantity (default = full amount)
            this.data.days[this.today].meals[mealId][groupKey] = { id: optionId, consumed: defaultGrams };
            // Clear alt if selecting normal options
            delete this.data.days[this.today].meals[mealId].alt;
        }
        this.saveData();
        this.renderMealCards();
        this.updateProgress();
        this.renderPending();
    },

    // ——— QUANTITY ADJUSTMENT ———
    adjustQty(mealId, groupKey, delta) {
        const mealData = this.data.days[this.today].meals[mealId];
        if (!mealData || !mealData[groupKey]) return;

        const selData = mealData[groupKey];
        // Migrate old string format
        if (typeof selData === 'string') {
            const mealDef = PLAN.meals.find(m => m.id === mealId);
            const group = mealDef?.groups?.find(g => g.name.toLowerCase() === groupKey);
            const opt = group?.options.find(o => o.id === selData);
            mealData[groupKey] = { id: selData, consumed: opt ? opt.grams : 0 };
        }

        const current = mealData[groupKey];
        // Find max from plan
        const mealDef = PLAN.meals.find(m => m.id === mealId);
        const group = mealDef?.groups?.find(g => g.name.toLowerCase() === groupKey);
        const opt = group?.options.find(o => o.id === current.id);
        const maxGrams = opt ? opt.grams : 999;

        current.consumed = Math.max(0, Math.min(maxGrams, current.consumed + delta));
        this.saveData();
        this.renderMealCards();
        this.updateProgress();
        this.renderPending();
    },

    // ——— PENDING SUMMARY ———
    renderPending() {
        const container = document.getElementById('pendingSection');
        if (!container) return;

        const todayMeals = this.data.days[this.today].meals;
        // Aggregate: for each food item across all meals, sum prescribed vs consumed
        const aggregate = {}; // keyed by base option name => { name, totalPrescribed, totalConsumed, unit }

        PLAN.meals.forEach(meal => {
            if (meal.separator || meal.simple) return;
            const mealData = todayMeals[meal.id] || {};
            if (mealData.alt) return; // alt meals are fully done

            meal.groups.forEach(group => {
                const gk = group.name.toLowerCase();
                const selData = mealData[gk];
                const selId = selData ? (typeof selData === 'object' ? selData.id : selData) : null;
                const consumed = selData ? (typeof selData === 'object' ? selData.consumed : (selId ? (group.options.find(o => o.id === selId)?.grams || 0) : 0)) : 0;

                // Get the selected option's definition (or null if not selected)
                const selOpt = selId ? group.options.find(o => o.id === selId) : null;

                if (selOpt) {
                    // Use the base food name (strip trailing numbers for grouping)
                    const baseName = selOpt.name;
                    const key = baseName + '|' + selOpt.unit;

                    if (!aggregate[key]) {
                        aggregate[key] = { name: baseName, totalPrescribed: 0, totalConsumed: 0, unit: selOpt.unit };
                    }
                    aggregate[key].totalPrescribed += selOpt.grams;
                    aggregate[key].totalConsumed += consumed;
                } else {
                    // Not selected yet — show each option's prescribed amount as pending (use first option as placeholder)
                    // Don't show unselected meals in pending (too noisy)
                }
            });
        });

        const items = Object.values(aggregate);

        if (items.length === 0) {
            container.innerHTML = '';
            return;
        }

        let html = `<div class="pending-section">
      <div class="pending-title">📊 Today's Intake Summary</div>
      <div class="pending-grid">`;

        items.forEach(item => {
            const remaining = item.totalPrescribed - item.totalConsumed;
            const pct = item.totalPrescribed > 0 ? Math.round((item.totalConsumed / item.totalPrescribed) * 100) : 0;
            const isDone = remaining <= 0;
            const barClass = isDone ? '' : (pct > 0 ? 'partial' : 'empty');

            html += `<div class="pending-item ${isDone ? 'done' : ''}">
        <div class="pi-name">${item.name}</div>
        <div class="pi-qty">${item.totalConsumed}/${item.totalPrescribed}${item.unit} ${isDone ? '✓' : `· ${remaining}${item.unit} left`}</div>
        <div class="pi-bar"><div class="pi-bar-fill ${barClass}" style="width:${Math.min(pct, 100)}%"></div></div>
      </div>`;
        });

        html += '</div></div>';
        container.innerHTML = html;
    },

    selectAlt(mealId, altId, el) {
        if (!this.data.days[this.today].meals[mealId]) {
            this.data.days[this.today].meals[mealId] = {};
        }
        if (this.data.days[this.today].meals[mealId].alt === altId) {
            delete this.data.days[this.today].meals[mealId].alt;
        } else {
            // Clear normal selections, set alt
            this.data.days[this.today].meals[mealId] = { alt: altId };
        }
        this.saveData();
        this.renderMealCards();
        this.updateProgress();
        this.renderPending();
    },

    toggleVeggies(mealId, checked) {
        if (!this.data.days[this.today].meals[mealId]) {
            this.data.days[this.today].meals[mealId] = {};
        }
        this.data.days[this.today].meals[mealId].veggies = checked;
        this.saveData();
    },

    toggleSimpleMeal(mealId, el) {
        const mealData = this.data.days[this.today].meals;
        if (!mealData[mealId]) mealData[mealId] = {};
        mealData[mealId].done = !mealData[mealId].done;
        this.saveData();
        this.renderMealCards();
        this.updateProgress();
    },

    toggleCard(mealId, clickEl) {
        const card = clickEl.closest('.meal-card');
        card.classList.toggle('open');

        if (card.classList.contains('open')) {
            this.openCards.add(mealId);
            card.classList.add('animate-open'); // Only animate on user click
        } else {
            this.openCards.delete(mealId);
            card.classList.remove('animate-open');
        }
    },

    // ——— PROGRESS ———
    updateProgress() {
        const todayMeals = this.data.days[this.today].meals;
        const trackableMeals = PLAN.meals.filter(m => !m.separator);
        let done = 0;

        trackableMeals.forEach(meal => {
            if (meal.simple) {
                if (todayMeals[meal.id]?.done) done++;
            } else {
                const status = this.getMealStatus(meal.id);
                if (status.class === 'done') done++;
            }
        });

        const total = trackableMeals.length;
        const pct = Math.round((done / total) * 100);

        // Update ring
        const circumference = 175.93;
        const offset = circumference - (pct / 100) * circumference;
        document.getElementById('progressCircle').style.strokeDashoffset = offset;
        document.getElementById('progressPct').textContent = pct + '%';

        // Update text
        const titles = ['Let\'s get started! 💪', 'Good progress! 🔥', 'Almost there! 🚀', 'All done! 🎉'];
        const idx = pct === 100 ? 3 : pct >= 66 ? 2 : pct >= 33 ? 1 : 0;
        document.getElementById('progressTitle').textContent = titles[idx];
        document.getElementById('progressSubtitle').textContent = `${done} of ${total} items completed`;
    },

    // ——— WATER COUNTER ———
    adjustWater(delta) {
        this.water = Math.max(0, Math.min(12, this.water + delta));
        this.data.days[this.today].checkin.water = this.water;
        this.saveData();
        this.renderWater();
    },

    renderWater() {
        const container = document.getElementById('waterGlasses');
        container.innerHTML = '';
        for (let i = 0; i < 12; i++) {
            const glass = document.createElement('div');
            glass.className = `water-glass ${i < this.water ? 'filled' : ''}`;
            container.appendChild(glass);
        }
        document.getElementById('waterCount').textContent = `${this.water} / 12`;
    },

    // ——— CHECKIN ———
    saveCheckin() {
        const checkin = {
            dayNumber: parseInt(document.getElementById('ciDay').value) || 0,
            weight: parseFloat(document.getElementById('ciWeight').value) || 0,
            workout: document.getElementById('ciWorkout').value || '',
            steps: parseInt(document.getElementById('ciSteps').value) || 0,
            water: this.water,
            energy: parseInt(document.getElementById('ciEnergy').value) || 5,
            motivation: parseInt(document.getElementById('ciMotivation').value) || 5,
            sleep: parseFloat(document.getElementById('ciSleep').value) || 0,
        };
        this.data.days[this.today].checkin = checkin;
        this.saveData();
        this.toast('Check-in saved! ✓', 'success');
    },

    restoreCheckin() {
        const ci = this.data.days[this.today].checkin || {};
        if (ci.dayNumber) document.getElementById('ciDay').value = ci.dayNumber;
        if (ci.weight) document.getElementById('ciWeight').value = ci.weight;
        if (ci.workout) document.getElementById('ciWorkout').value = ci.workout;
        if (ci.steps) document.getElementById('ciSteps').value = ci.steps;
        if (ci.energy) { document.getElementById('ciEnergy').value = ci.energy; document.getElementById('energyVal').textContent = ci.energy; }
        if (ci.motivation) { document.getElementById('ciMotivation').value = ci.motivation; document.getElementById('motivationVal').textContent = ci.motivation; }
        if (ci.sleep) document.getElementById('ciSleep').value = ci.sleep;
    },

    copyDailyUpdate() {
        this.saveCheckin(); // ensure latest values saved
        const ci = this.data.days[this.today].checkin;
        const meals = this.data.days[this.today].meals;

        const getMealText = (mealId) => {
            const m = meals[mealId];
            if (!m) return '❌ Not logged';
            if (m.done) return '✅ Done';
            if (m.alt) return '✅ Subway (eating out)';
            const parts = Object.entries(m).filter(([k]) => k !== 'veggies' && k !== 'alt')
                .map(([k, v]) => {
                    const mealDef = PLAN.meals.find(x => x.id === mealId);
                    if (!mealDef?.groups) return typeof v === 'object' ? v.id : v;
                    const group = mealDef.groups.find(g => g.name.toLowerCase() === k);
                    const optId = typeof v === 'object' ? v.id : v;
                    const consumed = typeof v === 'object' ? v.consumed : null;
                    const opt = group?.options.find(o => o.id === optId);
                    if (!opt) return optId;
                    const qtyText = consumed !== null && consumed < opt.grams ? ` (${consumed}/${opt.grams}${opt.unit})` : '';
                    return opt.name + qtyText;
                });
            return parts.length ? '✅ ' + parts.join(' + ') + (m.veggies ? ' + Veggies' : '') : '❌ Not logged';
        };

        const text = `Day number: ${ci.dayNumber || '—'}
Weight: ${ci.weight || '—'} kg
Workout: ${ci.workout || '—'}
Meal 1: ${getMealText('meal1')}
Meal 2: ${getMealText('meal2')}
Meal 3: ${getMealText('meal3')}
Meal 4: ${getMealText('meal4')}
Water intake: ${ci.water || 0} glasses
Energy: ${ci.energy || '—'}/10
Motivation: ${ci.motivation || '—'}/10
Sleep: ${ci.sleep || '—'} hrs
Steps: ${ci.steps || '—'}`;

        navigator.clipboard.writeText(text).then(() => {
            this.toast('Daily update copied! 📋', 'success');
        }).catch(() => {
            // Fallback
            prompt('Copy this text:', text);
        });
    },

    async syncToGitHub() {
        const token = typeof CONFIG !== 'undefined' ? CONFIG.GITHUB_TOKEN : '';
        const repo = 'Ethical98/meal-tracker'; // Hardcoded repository name
        if (!token || !repo) {
            this.toast('⚠️ Set GitHub token & repo in config.js first');
            return;
        }

        this.saveCheckin();
        this.setSyncStatus('syncing');

        try {
            const path = 'data/tracker.json';
            const content = btoa(unescape(encodeURIComponent(JSON.stringify(this.data, null, 2))));

            // Get current file SHA if exists
            let sha;
            try {
                const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const json = await res.json();
                    sha = json.sha;
                }
            } catch (e) { /* file doesn't exist yet */ }

            const body = {
                message: `Sync: ${new Date().toLocaleDateString('en-IN')}`,
                content,
                ...(sha && { sha }),
            };

            const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                this.setSyncStatus('synced');
                this.toast('☁️ Synced to GitHub! Coach can see your updates.', 'success');
            } else {
                throw new Error(`HTTP ${res.status}`);
            }
        } catch (err) {
            this.setSyncStatus('error');
            this.toast('❌ Sync failed: ' + err.message);
        }
    },

    setSyncStatus(status) {
        const el = document.getElementById('syncStatus');
        const dot = el.querySelector('.sync-dot');
        if (status === 'synced') {
            dot.className = 'sync-dot';
            el.querySelector('span:last-child') && (el.lastChild.textContent = ' Synced');
        } else if (status === 'pending') {
            dot.className = 'sync-dot pending';
        } else if (status === 'syncing') {
            dot.className = 'sync-dot pending';
        }
    },

    // ——— COACH VIEW ———
    async loadCoachData() {
        const container = document.getElementById('coachDayCards');

        // Try fetching from GitHub
        const repo = 'Ethical98/meal-tracker'; // Hardcoded repository name
        let coachData = null;

        if (repo) {
            try {
                container.innerHTML = '<div class="empty-state"><div class="empty-icon">📡</div><h3>Loading...</h3></div>';

                const token = typeof CONFIG !== 'undefined' ? CONFIG.GITHUB_TOKEN : '';
                const headers = { 'Accept': 'application/vnd.github.v3.raw' };
                if (token) headers['Authorization'] = `Bearer ${token}`;

                const res = await fetch(`https://api.github.com/repos/${repo}/contents/data/tracker.json?t=${Date.now()}`, { headers });
                if (res.ok) {
                    coachData = await res.json();
                } else {
                    // Fallback to raw if API fails or rate limits
                    const resRaw = await fetch(`https://raw.githubusercontent.com/${repo}/main/data/tracker.json?t=${Date.now()}`);
                    if (resRaw.ok) coachData = await resRaw.json();
                }
            } catch (e) { /* fallback to local */ }
        }

        // Fallback to localStorage
        if (!coachData) coachData = this.data;

        if (!coachData?.days || Object.keys(coachData.days).length === 0) {
            container.innerHTML = '<div class="empty-state"><div class="empty-icon">📭</div><h3>No data yet</h3><p>Start tracking to see data here.</p></div>';
            return;
        }

        this.renderCoachView(coachData);
    },

    renderCoachView(data) {
        const days = Object.entries(data.days).sort((a, b) => b[0].localeCompare(a[0]));

        // Calculate summary stats
        let totalAdherence = 0, totalWater = 0, totalSleep = 0, totalEnergy = 0, totalMotivation = 0, count = 0;

        days.forEach(([date, day]) => {
            const meals = day.meals || {};
            const trackable = PLAN.meals.filter(m => !m.separator);
            let done = 0;
            trackable.forEach(m => {
                if (m.simple && meals[m.id]?.done) done++;
                else if (!m.simple && this.getMealStatusFromData(m.id, meals) === 'done') done++;
            });
            totalAdherence += (done / trackable.length) * 100;
            totalWater += day.checkin?.water || 0;
            totalSleep += day.checkin?.sleep || 0;
            totalEnergy += day.checkin?.energy || 0;
            totalMotivation += day.checkin?.motivation || 0;
            count++;
        });

        document.getElementById('csAdherence').textContent = count ? Math.round(totalAdherence / count) + '%' : '—';
        document.getElementById('csAvgWater').textContent = count ? (totalWater / count).toFixed(1) : '—';
        document.getElementById('csAvgSleep').textContent = count ? (totalSleep / count).toFixed(1) + 'h' : '—';
        document.getElementById('csAvgEnergy').textContent = count ? (totalEnergy / count).toFixed(1) : '—';
        document.getElementById('csAvgMotivation').textContent = count ? (totalMotivation / count).toFixed(1) : '—';
        document.getElementById('csDaysTracked').textContent = count;

        // Render day cards
        const container = document.getElementById('coachDayCards');
        container.innerHTML = '';

        days.forEach(([date, day]) => {
            const ci = day.checkin || {};
            const meals = day.meals || {};
            const trackable = PLAN.meals.filter(m => !m.separator);
            let done = 0;
            trackable.forEach(m => {
                if (m.simple && meals[m.id]?.done) done++;
                else if (!m.simple && this.getMealStatusFromData(m.id, meals) === 'done') done++;
            });
            const adh = Math.round((done / trackable.length) * 100);
            const adhClass = adh >= 80 ? 'high' : adh >= 50 ? 'med' : 'low';

            const dateStr = new Date(date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });

            const card = document.createElement('div');
            card.className = 'day-review-card';
            card.innerHTML = `
        <div class="day-review-header" onclick="this.parentElement.classList.toggle('open')">
          <h3>${ci.dayNumber ? 'Day ' + ci.dayNumber + ' · ' : ''}${dateStr}</h3>
          <span class="adherence-badge ${adhClass}">${adh}% adherence</span>
        </div>
        <div class="day-review-body">
          ${ci.weight ? this.reviewRow('⚖️ Weight', ci.weight + ' kg') : ''}
          ${ci.workout ? this.reviewRow('🏋️ Workout', ci.workout) : ''}
          ${this.reviewMealRow('☀️ Morning', meals.morning)}
          ${this.reviewMealRow('🥗 Meal 1', meals.meal1, 'meal1')}
          ${this.reviewMealRow('🍛 Meal 2', meals.meal2, 'meal2')}
          ${this.reviewMealRow('🫐 Meal 3', meals.meal3, 'meal3')}
          ${this.reviewMealRow('🍲 Meal 4', meals.meal4, 'meal4')}
          ${this.reviewMealRow('🌙 Pre-Sleep', meals.presleep)}
          ${this.reviewRow('💧 Water', (ci.water || 0) + ' glasses')}
          ${ci.energy ? this.reviewRow('⚡ Energy', ci.energy + '/10') : ''}
          ${ci.motivation ? this.reviewRow('🔥 Motivation', ci.motivation + '/10') : ''}
          ${ci.sleep ? this.reviewRow('😴 Sleep', ci.sleep + ' hrs') : ''}
          ${ci.steps ? this.reviewRow('👟 Steps', ci.steps.toLocaleString()) : ''}
        </div>`;
            container.appendChild(card);
        });
    },

    getMealStatusFromData(mealId, meals) {
        const mealData = meals[mealId];
        if (!mealData) return 'pending';
        if (mealData.alt) return 'done';
        const meal = PLAN.meals.find(m => m.id === mealId);
        if (!meal?.groups) return 'pending';
        const keys = Object.keys(mealData).filter(k => k !== 'veggies' && k !== 'alt');
        return keys.length >= meal.groups.length ? 'done' : 'partial';
    },

    reviewRow(label, value) {
        return `<div class="review-row"><span class="review-label">${label}</span><span class="review-value">${value}</span></div>`;
    },

    reviewMealRow(label, mealData, mealId) {
        if (!mealData) return `<div class="review-row"><span class="review-label">${label}</span><span class="review-value miss">✗ Missed</span></div>`;
        if (mealData.done) return `<div class="review-row"><span class="review-label">${label}</span><span class="review-value check">✓ Done</span></div>`;
        if (mealData.alt) return `<div class="review-row"><span class="review-label">${label}</span><span class="review-value check">✓ Subway</span></div>`;

        if (mealId) {
            const parts = Object.entries(mealData).filter(([k]) => k !== 'veggies' && k !== 'alt')
                .map(([k, v]) => {
                    const mealDef = PLAN.meals.find(x => x.id === mealId);
                    const group = mealDef?.groups?.find(g => g.name.toLowerCase() === k);
                    const optId = typeof v === 'object' ? v.id : v;
                    const consumed = typeof v === 'object' ? v.consumed : null;
                    const opt = group?.options.find(o => o.id === optId);
                    if (!opt) return optId;
                    const qtyText = consumed !== null && consumed < opt.grams ? ` (${consumed}/${opt.grams}${opt.unit})` : '';
                    return opt.name + qtyText;
                });
            const text = parts.join(', ') + (mealData.veggies ? ' + 🥬' : '');
            return `<div class="review-row"><span class="review-label">${label}</span><span class="review-value check">${text || '✓'}</span></div>`;
        }

        return `<div class="review-row"><span class="review-label">${label}</span><span class="review-value check">✓</span></div>`;
    },

    // ——— EXPORT/IMPORT ———
    exportJSON() {
        const blob = new Blob([JSON.stringify(this.data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `mealtracker_${this.today}.json`;
        a.click(); URL.revokeObjectURL(url);
        this.toast('Data exported! 📥', 'success');
    },

    importJSON(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                if (imported.days) {
                    this.data = imported;
                    this.saveData();
                    this.renderMealCards();
                    this.updateProgress();
                    this.restoreCheckin();
                    this.toast('Data imported! 📤', 'success');
                }
            } catch (err) {
                this.toast('❌ Invalid JSON file');
            }
        };
        reader.readAsText(file);
    },

    // ——— TOAST ———
    toast(msg, type) {
        const el = document.getElementById('toast');
        el.textContent = msg;
        el.className = `toast show ${type || ''}`;
        setTimeout(() => el.className = 'toast', 2500);
    },
};

// ——— Init on DOM ready ———
document.addEventListener('DOMContentLoaded', () => App.init());

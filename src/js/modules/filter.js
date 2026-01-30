/* ======================
   DOM
====================== */
const filter = document.querySelector('.catalog__filter');
const filterWrps = document.querySelectorAll('.filter__wrp');
const cards = document.querySelectorAll('.card');
const resetBtn = document.querySelector('.filter__reset');
const emptyBlock = document.querySelector('.catalog__empty');
const catalogGrid = document.querySelector('.catalog__grid');

/* ======================
   HELPERS
====================== */
const parseNumber = val =>
  Number(
    String(val)
      .replace(',', '.')
      .replace(/[^\d.]/g, '')
  ) || null;

function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
    .map(i => i.value);
}

/* ======================
   UI: OPEN / CLOSE
====================== */
filterWrps.forEach(wrp => {
  const btn = wrp.querySelector('button');
  const inner = wrp.querySelector('.filter__wrp-inner');
  if (!btn || !inner) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    closeAll();
    inner.classList.toggle('active');
    btn.classList.toggle('active');
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.filter__wrp')) closeAll();
});

function closeAll() {
  document.querySelectorAll('.filter__wrp-inner.active')
    .forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.filter__wrp button.active')
    .forEach(btn => btn.classList.remove('active'));
}

/* ======================
   GET FILTERS
====================== */
function getFilters() {
  return {
    priceMin: parseNumber(document.querySelector('[name="priceMin"]')?.value),
    priceMax: parseNumber(document.querySelector('[name="priceMax"]')?.value),

    areaMin: parseNumber(document.querySelector('[name="areaMin"]')?.value),
    areaMax: parseNumber(document.querySelector('[name="areaMax"]')?.value),

    spalni: getCheckedValues('spalni'),
    etazh: getCheckedValues('etazh'),
    project: getCheckedValues('project'),
    location: getCheckedValues('location'),
    material: getCheckedValues('material'),
  };
}

/* ======================
   ACTIVE BUTTON STATE
====================== */
function updateFilterButtonsState() {
  filterWrps.forEach(wrp => {
    const btn = wrp.querySelector('button');
    const inputs = wrp.querySelectorAll('input');

    const isActive = [...inputs].some(input =>
      input.type === 'checkbox'
        ? input.checked
        : input.value.trim() !== ''
    );

    btn.classList.toggle('is-active', isActive);
  });
}

/* ======================
   APPLY FILTER
====================== */
function applyFilter() {
  const f = getFilters();
  let visibleCount = 0;

  cards.forEach(card => {
    let visible = true;

    const price = parseNumber(card.dataset.price);
    const area = parseNumber(card.dataset.area);
    const spalni = card.dataset.spalni;
    const etazh = card.dataset.etazh;
    const project = card.dataset.project;
    const location = card.dataset.location;
    const material = card.dataset.material;

    // RANGE
    if (f.priceMin !== null && price <= f.priceMin) visible = false;
    if (f.priceMax !== null && price >= f.priceMax) visible = false;

    if (f.areaMin !== null && area <= f.areaMin) visible = false;
    if (f.areaMax !== null && area >= f.areaMax) visible = false;

    // MULTI CHECKBOX (OR внутри группы)
    if (f.spalni.length && !f.spalni.includes(spalni)) visible = false;
    if (f.material.length && !f.material.includes(material)) visible = false;
    if (f.etazh.length && !f.etazh.includes(etazh)) visible = false;
    if (f.project.length && !f.project.includes(project)) visible = false;
    if (f.location.length && !f.location.includes(location)) visible = false;

    card.style.display = visible ? '' : 'none';
    if (visible) visibleCount++;
  });

  updateFilterButtonsState();
  toggleReset();
  toggleEmpty(visibleCount);
}

/* ======================
   RESET / EMPTY
====================== */
function toggleReset() {
  const f = getFilters();
  const hasFilters = Object.values(f).some(v =>
    Array.isArray(v) ? v.length : v !== null
  );
  resetBtn.classList.toggle('active', hasFilters);
}

function toggleEmpty(count) {
  if (!emptyBlock) return;
  catalogGrid.style.display = count ? '' : 'none';
  emptyBlock.classList.toggle('active', !count);
}

/* ======================
   EVENTS
====================== */
filter?.addEventListener('input', applyFilter);
filter?.addEventListener('change', applyFilter);

resetBtn?.addEventListener('click', () => {
  document.querySelectorAll('.catalog__filter input').forEach(i => {
    i.type === 'checkbox' ? i.checked = false : i.value = '';
  });

  cards.forEach(c => (c.style.display = ''));

  updateFilterButtonsState();
  resetBtn.classList.remove('active');
  toggleEmpty(cards.length);
});

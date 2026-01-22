const filterBtns = document.querySelectorAll(".filter__btn");
const filterCards = document.querySelectorAll('.card');


const getFilters = () => {
  return {
    location: document.querySelector('input[name="location"]')?.value || '',
    project: document.querySelector('input[name="project"]')?.value || '',
    price: document.querySelector('input[name="price"]')?.value || '',
    etazh: document.querySelector('input[name="etazh"]')?.value || '',
    sanuzly: document.querySelector('input[name="sanuzly"]')?.value || '',
    spalny: document.querySelector('input[name="spalny"]')?.value || '',
    udobstva: document.querySelector('input[name="udobstva"]')?.value || '',
    material: document.querySelector('input[name="material"]')?.value || '',
    komnaty: document.querySelector('input[name="komnaty"]')?.value || '',
    krysha: document.querySelector('input[name="krysha"]')?.value || '',
    area: document.querySelector('input[name="area"]')?.value || '',
  };
};

const applyFilter = () => {
  const filters = getFilters();

  filterCards.forEach(card => {
    let isVisible = true;

    if (filters.location && card.dataset.location !== filters.location) isVisible = false;
    if (filters.project && card.dataset.project !== filters.project) isVisible = false;
    if (filters.price && card.dataset.price !== filters.price) isVisible = false;
    if (filters.etazh && card.dataset.etazh !== filters.etazh) isVisible = false;
    if (filters.sanuzly && card.dataset.sanuzly !== filters.sanuzly) isVisible = false;
    if (filters.spalny && card.dataset.spalny !== filters.spalny) isVisible = false;
    if (filters.udobstva && card.dataset.udobstva !== filters.udobstva) isVisible = false;
    if (filters.material && card.dataset.material !== filters.material) isVisible = false;
    if (filters.komnaty && card.dataset.komnaty !== filters.komnaty) isVisible = false;
    if (filters.krysha && card.dataset.krysha !== filters.krysha) isVisible = false;
    if (filters.area && card.dataset.area !== filters.area) isVisible = false;

    card.style.display = isVisible ? '' : 'none';
  });

  toggleResetButton();
  toggleEmptyState();
};


/*const applyFilter = () => {
  const filters = getFilters();

  filterCards.forEach(card => {
    let isVisible = true;

    if (filters.location.trim() && card.dataset.location !== filters.location.trim()) {
      isVisible = false;
    }

    if (filters.project.trim() && card.dataset.project !== filters.project.trim()) {
      isVisible = false;
    }

    if (filters.price.trim() && card.dataset.price !== filters.price.trim()) {
      isVisible = false;
    }

    if (filters.etazh.trim() && card.dataset.etazh !== filters.etazh.trim()) {
      isVisible = false;
    }

    if (filters.sanuzly.trim() && card.dataset.sanuzly !== filters.sanuzly.trim()) {
      isVisible = false;
    }

    if (filters.spalny.trim() && card.dataset.spalny !== filters.spalny.trim()) {
      isVisible = false;
    }

    if (filters.udobstva.trim() && card.dataset.udobstva !== filters.udobstva.trim()) {
      isVisible = false;
    }

    if (filters.material.trim() && card.dataset.material !== filters.material.trim()) {
      isVisible = false;
    }

    if (filters.komnaty.trim() && card.dataset.komnaty !== filters.komnaty.trim()) {
      isVisible = false;
    }

    if (filters.krysha.trim() && card.dataset.krysha !== filters.krysha.trim()) {
      isVisible = false;
    }

    if (filters.area.trim() && card.dataset.area !== filters.area.trim()) {
      isVisible = false;
    }

    card.style.display = isVisible ? '' : 'none';

  });
};*/

const filterHandler = (e) => {
  e.stopPropagation();
  const value = e.currentTarget.dataset.value || e.currentTarget.textContent.trim();
  const parent = e.currentTarget.closest('.filter__wrp');
  const input = parent.querySelector('input');
  const btnName = parent.querySelector('.filter__btn-name');
  const list = parent.querySelector('.filter__list');

  if (input) input.value = value;
  if (btnName) btnName.textContent = value;
  if (list) list.classList.remove('active');

  applyFilter();
};

filterBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();

    const currentList = btn.nextElementSibling;
    const isOpen = currentList.classList.contains('active');

    closeAllFilters();

    if (!isOpen) {
      currentList.classList.add('active');
    }
  });
});


const filterValuesBtns = document.querySelectorAll('.filter__list li');

filterValuesBtns.forEach(item => {
  item.addEventListener('click', filterHandler);
});

const resetBtn = document.querySelector('.filter__reset');

function toggleResetButton() {
  const filters = getFilters();

  const hasActiveFilters = Object.values(filters).some(val => val.trim() !== '');

  resetBtn.classList.toggle('active', hasActiveFilters);
};

resetBtn?.addEventListener('click', () => {
  document.querySelectorAll('.filter__wrp input').forEach(input => {
    input.value = '';
  });

  document.querySelectorAll('.filter__btn-name').forEach(span => {
    span.textContent = span.dataset.default || span.textContent;
  });

  filterCards.forEach(card => {
    card.style.display = '';
  });

  toggleResetButton();
  toggleEmptyState();
});

const catalogGrid = document.querySelector('.catalog__grid');
const emptyBlock = document.querySelector('.catalog__empty');

function toggleEmptyState() {
  const visibleCards = [...filterCards].some(
    card => card.style.display !== 'none'
  );

  catalogGrid.style.display = visibleCards ? '' : 'none';
  emptyBlock.classList.toggle('active', !visibleCards);
}

function closeAllFilters() {
  document.querySelectorAll('.filter__list.active').forEach(list => {
    list.classList.remove('active');
  });
}

document.addEventListener('click', e => {
  if (!e.target.closest('.filter__wrp')) {
    closeAllFilters();
  }
});



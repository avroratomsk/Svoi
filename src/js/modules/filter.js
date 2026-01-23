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


    popupLocation: document.querySelector('input[name="popup-location"]')?.value || '',
    popupProject: document.querySelector('input[name="popup-project"]')?.value || '',
    popupPrice: document.querySelector('input[name="popup-price"]')?.value || '',
    popupEtazh: document.querySelector('input[name="popup-etazh"]')?.value || '',
    popupSanuzly: document.querySelector('input[name="popup-sanuzly"]')?.value || '',
    popupSpalny: document.querySelector('input[name="popup-spalny"]')?.value || '',
    popupUdobstva: document.querySelector('input[name="popup-udobstva"]')?.value || '',
    popupMaterial: document.querySelector('input[name="popup-material"]')?.value || '',
    popupKomnaty: document.querySelector('input[name="popup-komnaty"]')?.value || '',
    popupKrysha: document.querySelector('input[name="popup-krysha"]')?.value || '',
    popupArea: document.querySelector('input[name="popup-area"]')?.value || '',

  };
};

const applyFilter = () => {
  const filters = getFilters();

  const activePopup = document.querySelector('.popup_show');

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

    if (filters.popupLocation && card.dataset.location !== filters.popupLocation) isVisible = false;
    if (filters.popupProject && card.dataset.project !== filters.popupProject) isVisible = false;
    if (filters.popupPrice && card.dataset.price !== filters.popupPrice) isVisible = false;
    if (filters.popupEtazh && card.dataset.etazh !== filters.popupEtazh) isVisible = false;
    if (filters.popupSanuzly && card.dataset.sanuzly !== filters.popupSanuzly) isVisible = false;
    if (filters.popupSpalny && card.dataset.spalny !== filters.popupSpalny) isVisible = false;
    if (filters.popupUdobstva && card.dataset.udobstva !== filters.popupUdobstva) isVisible = false;
    if (filters.popupMaterial && card.dataset.material !== filters.popupMaterial) isVisible = false;
    if (filters.popupKomnaty && card.dataset.komnaty !== filters.popupKomnaty) isVisible = false;
    if (filters.popupKrysha && card.dataset.krysha !== filters.popupKrysha) isVisible = false;
    if (filters.popupArea && card.dataset.area !== filters.popupArea) isVisible = false;

    card.style.display = isVisible ? '' : 'none';

    if(activePopup?.classList.contains('popup_show') && activePopup){
      activePopup.classList.remove('popup_show');
      document.body.classList.remove('_lock');

    }

  });

  toggleResetButton();
  toggleEmptyState();
};

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

const resetBtns = document.querySelectorAll('.filter__reset');

function toggleResetButton() {
  const filters = getFilters();
  const hasActiveFilters = Object.values(filters).some(val => val.trim() !== '');

  resetBtns.forEach(btn => {
    btn.classList.toggle('active', hasActiveFilters);
  });
}

resetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
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






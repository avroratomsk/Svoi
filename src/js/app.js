import * as functions from './modules/baseFunctions.js';
import Swiper from 'swiper/bundle';

functions.isWebp();


const mainSlider = new Swiper('.main-slider__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '<span class="separator"></span>' +
        '<span class="' + totalClass + '"></span>';
    },
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? '0' + number : number;
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const responsibilitySlider = new Swiper('.responsibility__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      scrollbar: {
        enabled: true,
      }
    },
    500: {
      slidesPerView: 1.3,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2.5,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4.2,
    },
    1200: {
      slidesPerView: 5,
      scrollbar: {
        enabled: false,
      }
    }
  }

});

const housesSaleSlider = new Swiper('.houses-sale__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 38,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      scrollbar: {
        enabled: true,
      },
    },
    500: {
      slidesPerView: 1.3,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      scrollbar: {
        enabled: false,
      },
    }
  }

});

const addedSlider = new Swiper('.added__slider', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      scrollbar: {
        enabled: true,
      },
    },
    768: {
      slidesPerView: 1.3,
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    1400: {
      slidesPerView: 3,
      scrollbar: {
        enabled: false,
      },
    }
  }

});

const portfolioSlider = new Swiper('.portfolio__slider', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  spaceBetween: 27,

  navigation: {
    nextEl: '.portfolio__next',
    prevEl: '.portfolio__prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    }
  }

});

const stockSlider = new Swiper('.stock__slider', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  spaceBetween: 32,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    320: {
      scrollbar: {
        enabled: true
      },
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      scrollbar: {
        enabled: false
      },
    }
  }

});

const newsSlider = new Swiper('.news__slider', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  spaceBetween: 32,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    320: {
      scrollbar: {
        enabled: true
      },
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      scrollbar: {
        enabled: false
      },
    }
  }

});

const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  spaceBetween: 72,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    320: {
      scrollbar: {
        enabled: true
      },
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
      scrollbar: {
        enabled: false
      },
    }
  }

});

// Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
//   lerp: 0.3,
// });
//
// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//
// });






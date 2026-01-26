import Swiper from 'swiper/bundle';
import {Navigation, Pagination, Scrollbar} from "swiper/modules";

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
    nextEl: '.main-slider__next',
    prevEl: '.main-slider__prev',
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

const projectThumbSlider = new Swiper('.project__thumbs', {

  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  spaceBetween: 20,
  slidesPerView: 4,

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },

  // breakpoints: {
  //   320: {
  //     scrollbar: {
  //       enabled: true
  //     },
  //     slidesPerView: 1,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //     scrollbar: {
  //       enabled: false
  //     },
  //   }
  // }

});

const projectSlider = new Swiper('.project__slider', {
  modules: {Scrollbar, Pagination},
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.project__slider-next',
    prevEl: '.project__slider-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  thumbs: {
    swiper: projectThumbSlider,
  },

  // breakpoints: {
  //   320: {
  //     scrollbar: {
  //       enabled: true
  //     },
  //     slidesPerView: 1,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //     scrollbar: {
  //       enabled: false
  //     },
  //   }
  // }

});

const catalogCardImage = new Swiper('.catalog__card-image', {
  modules: {Scrollbar, Pagination, Navigation},
  direction: 'horizontal',
  loop: true,
  autoHeight: false,
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  breakpoints: {
    320: {
      navigation: {
        enabled: false
      },
    },
    768: {
      navigation: {
        enabled: true
      },
    }
  }


});
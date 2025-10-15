const tabNavBtn = document.querySelectorAll('.tabs__nav button')

tabNavBtn?.forEach(btn => {
  btn.addEventListener('click', (e) => {
    tabNavBtn.forEach(btn => {
      btn.classList.remove('active')
    })
    btn.classList.add('active');

    document.querySelectorAll('.tabs__content').forEach(content => {
      content.classList.remove('active')
    })
    document.getElementById(btn.dataset.id).classList.add('active');

  })
})
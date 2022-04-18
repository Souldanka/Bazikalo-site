const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    loopedSlides: 1,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const videos = document.querySelectorAll("video")

videos.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  });
  
  video.addEventListener("mouseout", function () {
    this.pause()
  });
  
  video.addEventListener("touchstart", function () {
    this.play()
  });
  
  video.addEventListener("touchend", function () {
    this.pause()
  });
})


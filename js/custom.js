function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Know more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


  // Group card slider

  $('.group-card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    prevArrow: '<span class="prev_arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
      responsive: [
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode:false,
              }
            }
        ]
  });
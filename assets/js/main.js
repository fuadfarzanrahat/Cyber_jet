// <!-- slick js start -->
  $(document).on('ready', function () {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $(".news_slider").slick({
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $(".team_slider").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
    ]
    });
  }); 
// <!-- slick js end -->

// <!-- counter js start -->
  $(".circle_percent").each(function () {
    var $this = $(this),
      $dataV = $this.data("percent"),
      $dataDeg = $dataV * 3.6,
      $round = $this.find(".round_per");
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
    $this.prop('Counter', 0).animate({
      Counter: $dataV
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $this.find(".percent_text").text(Math.ceil(now) + "%");
      }
    });
    if ($dataV >= 51) {
      $round.css("transform", "rotate(" + 360 + "deg)");
      setTimeout(function () {
        $this.addClass("percent_more");
      }, 1000);
      setTimeout(function () {
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
      }, 1000);
    }
  });
// <!-- counter js end -->
// <!-- mmenu js start -->
  var menu = new MmenuLight(document.querySelector("#menu"), "all");
  var navigator = menu.navigation({});
  var drawer = menu.offcanvas({
    // position: 'left'
  });
  //	Open the menu.
  document
    .querySelector('a[href="#menu"]')
    .addEventListener("click", (evnt) => {
      evnt.preventDefault();
      drawer.open();
    });
// <!-- mmenu js end -->
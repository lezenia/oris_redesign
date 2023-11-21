jQuery(document).ready();

$(".navi > li").click(function () {
  $(this).siblings(".hover").find(".sub-menu").slideUp(300);
  $(this).siblings(".hover").removeClass("hover");

  if ($(this).hasClass("hover")) {
    $(this).find(".sub-menu").slideUp(300);
    $(this).removeClass("hover");
  } else {
    $(this).find(".sub-menu").slideDown(300);
    $(this).addClass("hover");
  }
});

$(".sub-menu").click(function () {
  return false;
});

$(".collection-menu > ul > li").click(function () {
  $(this).siblings().find(".sub-menu-2").fadeOut(300);
  $(this).find(".sub-menu-2").fadeIn(300);
  $(this).addClass("active").siblings().removeClass("active");

  return false;
});

/슬라이드/;

$(document).ready(function () {
  $(".slider").each(function () {
    var $this = $(this);
    var $group = $this.find(".slide-group");
    var $slides = $this.find(".slide");
    var buttonArray = [];
    var currentIndex = 0;
    var timeout;

    var $nav = $(".slide-nav").find("div");

    $nav.on("click", function (event) {
      event.preventDefault();
      console.log($(this));
      if ($(this).hasClass("next")) {
        if (currentIndex === $slides.length - 1) {
          move(0);
        }
        move(currentIndex + 1);
      } else {
        if (currentIndex === 0) {
          move($slides.length - 1);
        }
        move(currentIndex - 1);
      }
    });

    function move(newIndex) {
      var animateLeft, slideLeft;

      advance();

      if ($group.is(":animated") || currentIndex === newIndex) {
        return;
      }

      buttonArray[currentIndex].removeClass("active");
      buttonArray[newIndex].addClass("active");

      if (newIndex > currentIndex) {
        slideLeft = "100%";
        animateLeft = "-100%";
      } else {
        slideLeft = "-100%";
        animateLeft = "100%";
      }

      $slides.eq(newIndex).css({
        left: slideLeft,
        display: "block",
      });

      $group.animate({ left: animateLeft }, function () {
        $slides.eq(currentIndex).css({ display: "none" });
        $slides.eq(newIndex).css({ left: 0 });
        $group.css({ left: 0 });
        currentIndex = newIndex;
      });
    }

    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (currentIndex < $slides.length - 1) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }

    $.each($slides, function (index) {
      var $button = $(
        '<button type="button" class="slide-btn">&bull;</button>'
      );
      if (index === currentIndex) {
        $button.addClass("active");
      }
      $button
        .on("click", function () {
          move(index);
        })
        .appendTo(".slide-buttons");
      buttonArray.push($button);
    });

    advance();
  });
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

$(document).ready(function () {
  $(".zoom-1").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-1_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-1_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-2").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-2_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-2_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-3").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-3_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-3_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-4").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-4_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-4_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-5").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-5_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-5_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-6").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-6_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-6_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-7").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-7_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-7_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-8").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-8_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-8_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-9").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-9_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-9_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-10").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-10_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-10_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-11").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-11_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-11_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-12").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-12_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-12_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-13").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-13_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-13_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-14").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-14_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-14_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-15").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-15_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-15_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-16").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-16_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-16_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
  $(".zoom-17").hover(
    function () {
      // 마우스가 요소 위로 이동할 때 oris_box를 보이도록 설정
      $(".oris_box > .zoom-17_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "1");
    },
    function () {
      // 마우스가 요소에서 벗어날 때 oris_box를 숨기도록 설정
      $(".oris_box > .zoom-17_img > img")
        .css("transition", "opacity .5s")
        .css("opacity", "0");
    }
  );
});

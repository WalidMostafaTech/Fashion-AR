/*-----------------------------------------------------------------------------------

 Template Name:Multikart
 Template URI: themes.pixelstrap.com/multikart
 Description: This is E-commerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */
// 01.Pre loader
// 02.Tap on Top
// 03.Age verify modal
// 04.Mega menu js
// 05.Image to background js
// 06.Filter js
// 07.Left offer toggle
// 08.Toggle nav
// 09.Footer according
// 10.Add to cart quantity Counter
// 11.Product page Quantity Counter
// 12.Full slider
// 13.Slick slider
// 14.Header z-index js
// 15.Tab js
// 16.Category page
// 17.Filter sidebar js
// 18.Add to cart
// 19.Add to wishlist
// 20.Color Picker
// 21.RTL & Dark-light
// 22.Menu js
// 23.Theme-setting
// 24.Add to cart sidebar js
// 25.Tooltip

;(function ($) {
  'use strict'

  /*=====================
     01.Pre loader
     ==========================*/
  $(window).on('load', function () {
    setTimeout(function () {
      $('.loader_skeleton').fadeOut('slow')
      $('body').css({
        // 'overflow': 'auto'
      })
    }, 500)
    $('.loader_skeleton').remove('slow')
    $('body').css({
      // 'overflow': 'hidden'
    })
  })
  $('#preloader').fadeOut('slow', function () {
    $(this).remove()
  })

  /*=====================  
     02.Tap on Top
     ==========================*/
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.tap-top').fadeIn()
    } else {
      $('.tap-top').fadeOut()
    }
  })
  $('.tap-top').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      600
    )
    return false
  })

  /*=====================
     03. Age verify modal
     ==========================*/
  $(window).on('load', function () {
    $('#ageModal').modal('show')
  })

  /*=====================
     04. Mega menu js
     ==========================*/
  if ($(window).width() > '1200') {
    $('.hover-cls').hover(function () {
      $('.sm').addClass('hover-unset')
    })
  }
  if ($(window).width() > '1200') {
    $('#sub-menu > li').hover(
      function () {
        if ($(this).children().hasClass('has-submenu')) {
          $(this).parents().find('nav').addClass('sidebar-unset')
        }
      },
      function () {
        $(this).parents().find('nav').removeClass('sidebar-unset')
      }
    )
  }

  /*=====================
     05. Image to background js
     ==========================*/
  $('.bg-top').parent().addClass('b-top')
  $('.bg-bottom').parent().addClass('b-bottom')
  $('.bg-center').parent().addClass('b-center')
  $('.bg_size_content').parent().addClass('b_size_content')
  $('.bg-img').parent().addClass('bg-size')
  $('.bg-img.blur-up').parent().addClass('blur-up lazyload')

  jQuery('.bg-img').each(function () {
    var el = $(this),
      src = el.attr('src'),
      parent = el.parent()

    parent.css({
      'background-image': 'url(' + src + ')',
      'background-size': 'cover',
      'background-position': 'center',
      display: 'block'
    })

    el.hide()
  })

  /*=====================
     06. Filter js
     ==========================*/
  $('.filter-button').click(function () {
    $(this).addClass('active').siblings('.active').removeClass('active')
    var value = $(this).attr('data-filter')
    if (value == 'all') {
      $('.filter').show('1000')
    } else {
      $('.filter')
        .not('.' + value)
        .hide('3000')
      $('.filter')
        .filter('.' + value)
        .show('3000')
    }
  })

  $('#formButton').click(function () {
    $('#form1').toggle()
  })

  /*=====================
     07. left offer toggle
     ==========================*/
  $('.heading-right h3').click(function () {
    $('.offer-box').toggleClass('toggle-cls')
  })

  /*=====================
     08. toggle nav
     ==========================*/
  $('.toggle-nav').on('click', function () {
    $('.sm-horizontal').css('right', '0px')
  })
  $('.mobile-back').on('click', function () {
    $('.sm-horizontal').css('right', '-410px')
  })
  var window_width = jQuery(window).width()
  if (window_width > '1199') {
    $('#toggle-sidebar').click(function () {
      $('.marketplace-sidebar').slideToggle('slow')
    })
  }
  if (window_width < '1199') {
    $('#toggle-sidebar-res').click(function () {
      $('.marketplace-sidebar').addClass('open-side')
    })
    $('.marketplace-sidebar .sidebar-back').click(function () {
      $('.marketplace-sidebar').removeClass('open-side')
    })
  }
  if (window_width < '991') {
    $('.element-btn').click(function () {
      $('.sticky-sidebar').addClass('show')
    })
    $('.collection-mobile-back').click(function () {
      $('.sticky-sidebar').removeClass('show')
    })
  }
  $('#toggle_sidebar-res').click(function () {
    $('.left-header-sm').addClass('open-side')
  })
  $('.left-header-sm .sidebar-back').click(function () {
    $('.left-header-sm').removeClass('open-side')
  })
  $('.header-style-7 .bar-style ').on('click', function () {
    $('.shop-sidebar').addClass('show')
  })
  $('.sidebar-back, .sidebar-overlay').on('click', function () {
    $('.shop-sidebar').removeClass('show')
  })
  $('.header-style-7 .bar-style, .category-mobile-button').on(
    'click',
    function () {
      $('.sidebar-overlay').addClass('show')
    }
  )
  $('.sidebar-back, .sidebar-overlay').on('click', function () {
    $('.sidebar-overlay').removeClass('show')
  })
  $('.category-mobile-button').on('click', function () {
    $('.category-shop-section .nav').addClass('show')
  })
  $('.sidebar-back, .sidebar-overlay').on('click', function () {
    $('.category-shop-section .nav').removeClass('show')
  })
  $('.close-btn').on('click', function () {
    console.log('click')
    $('.top-panel-adv').addClass('hide')
  })

  /*=========================
     09. left category slider height
     ==========================*/
  var window_width = jQuery(window).width()
  if (window_width > '1199') {
    var category_height = $('#sidebar-height').height()
    $('.height-apply').css({
      height: category_height
    })
  }

  /*=====================
     10. footer according
     ==========================*/
  var contentwidth = jQuery(window).width()
  if (contentwidth < '767') {
    jQuery('.footer-title h4').append('<span class="according-menu"></span>')
    jQuery('.footer-title').on('click', function () {
      jQuery('.footer-title').removeClass('active')
      jQuery('.footer-content').slideUp('normal')
      if (jQuery(this).next().is(':hidden') == true) {
        jQuery(this).addClass('active')
        jQuery(this).next().slideDown('normal')
      }
    })
    jQuery('.footer-content').hide()
  } else {
    jQuery('.footer-content').show()
  }

  if ($(window).width() < '1183') {
    jQuery('.menu-title h5').append('<span class="according-menu"></span>')
    jQuery('.menu-title').on('click', function () {
      jQuery('.menu-title').removeClass('active')
      jQuery('.menu-content').slideUp('normal')
      if (jQuery(this).next().is(':hidden') == true) {
        jQuery(this).addClass('active')
        jQuery(this).next().slideDown('normal')
      }
    })
    jQuery('.menu-content').hide()
  } else {
    jQuery('.menu-content').show()
  }

  /*=====================
     11. Add to cart quantity Counter
     ==========================*/
  $('button.add-button').click(function () {
    $(this).next().addClass('open')
    $('.qty-input').val('1')
  })
  $('.quantity-right-plus').on('click', function () {
    var $qty = $(this).siblings('.qty-input')
    var currentVal = parseInt($qty.val())
    if (!isNaN(currentVal)) {
      $qty.val(currentVal + 1)
    }
  })
  $('.quantity-left-minus').on('click', function () {
    var $qty = $(this).siblings('.qty-input')
    var _val = $($qty).val()
    if (_val == '1') {
      var _removeCls = $(this).parents('.cart_qty')
      $(_removeCls).removeClass('open')
    }
    var currentVal = parseInt($qty.val())
    if (!isNaN(currentVal) && currentVal > 0) {
      $qty.val(currentVal - 1)
    }
  })

  /*=====================
     12. Product page Quantity Counter
     ==========================*/
  $('.qty-btn-plus').each(function () {
    $(this).on('click', function () {
      var inputQty = $(this).closest('.qty-container').find('.input-qty')
      inputQty.val(Number(inputQty.val()) + 1)
    })
  })

  $('.qty-btn-minus').each(function () {
    $(this).on('click', function () {
      var inputQty = $(this).closest('.qty-container').find('.input-qty')
      var amount = Number(inputQty.val())
      if (amount > 1) {
        inputQty.val(amount - 1)
      }
    })
  })

  /*=====================
     13. Full slider
     ==========================*/
  if ($(window).width() > 767) {
    var $slider = $('.full-slider')
    $slider
      .on('init', function () {
        mouseWheel($slider)
      })
      .slick({
        dots: true,
        nav: false,
        vertical: true,
        infinite: false
      })

    function mouseWheel ($slider) {
      $(window).on(
        'wheel',
        {
          $slider: $slider
        },
        mouseWheelHandler
      )
    }

    function mouseWheelHandler (event) {
      var $slider = event.data.$slider
      var delta = event.originalEvent.deltaY
      if (delta > 0) {
        $slider.slick('slickNext')
      } else {
        $slider.slick('slickPrev')
      }
    }
  } else {
    var $slider = $('.full-slider')
    $slider
      .on('init', function () {
        mouseWheel($slider)
      })
      .slick({
        dots: true,
        nav: false,
        vertical: false,
        infinite: false
      })

    function mouseWheel ($slider) {
      $(window).on(
        'wheel',
        {
          $slider: $slider
        },
        mouseWheelHandler
      )
    }

    function mouseWheelHandler (event) {
      var $slider = event.data.$slider
      var delta = event.originalEvent.deltaY
      if (delta > 0) {
        $slider.slick('slickNext')
      } else {
        $slider.slick('slickPrev')
      }
    }
  }

  /*=====================
     14. slick slider
     ==========================*/
  $('.slide-1').slick({})

  $('.slide-center').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 2,
    slidesToScroll: 2
  })

  $('#quick-view').on('shown.bs.modal', function () {
    $('.quick-slide-1').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true
    })
  })

  $('.slide-2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.slide-3').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.slide-3-center').slick({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '200px'
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: '100px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.center-slider-bicycle').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerPadding: '0'
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '200px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '15px',
          slidesToShow: 1
        }
      }
    ]
  })

  $('.team-4').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.slide-4').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.product-4').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.product-four').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.product-4_2').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.tools-product-4').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.product_4').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.product-3').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.slider-3').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.slide-5').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  })

  $('.category-5').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.slide-5-center').slick({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  })

  $('.slide-6').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.slide-6-veg').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.slide-6-product').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.brand-6').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.product-slider-5').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.product-5').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.slide-7').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  })

  $('.slide-7-demo').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.slide-8').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  })

  $('.vector-slide-8').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.vector-slide-center').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    centerMode: true,
    centerPadding: 15,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })

  $('.product-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  })

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  })

  $('.product-right-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-right-nav'
  })
  if ($(window).width() > 575) {
    $('.slider-right-nav').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-right-slick',
      arrows: false,
      infinite: true,
      dots: false,
      centerMode: false,
      focusOnSelect: true
    })
  } else {
    $('.slider-right-nav').slick({
      vertical: false,
      verticalSwiping: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-right-slick',
      arrows: false,
      infinite: true,
      centerMode: false,
      dots: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    })
  }

  $('.center-slider-slick').slick({
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })

  $('.marketplace-5').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  $('.marketplace-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.custom-arrow-3').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })

  $('.vertical-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 3000
  })

  $('.animated-nav').slick({
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slick-animated',
    arrows: false,
    dots: false,
    focusOnSelect: true
  })

  $('.five-product-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      }
    ]
  })

  $('.home-slider-center').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '40px',
          dots: false
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '30px',
          dots: false
        }
      }
    ]
  })

  $('.product-category-slider').slick({
    dots: false,
    loop: true,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 421,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.product-3-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.view-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.view-thumbnail-slider'
  })
  $('.view-thumbnail-slider').slick({
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: '.view-main-slider',
    dots: false
    // centerMode: true,
    // focusOnSelect: true
  })
  $('.modal').on('shown.bs.modal', function (e) {
    $('.view-main-slider').slick('setPosition')
    $('.view-thumbnail-slider').slick('setPosition')
    $('.wrap-modal-slider').addClass('open')
  })

  $('.left-arrow').click(function () {
    $('.custom-arrow-3').slick('slickPrev')
  })

  $('.right-arrow').click(function () {
    $('.custom-arrow-3').slick('slickNext')
  })

  /*=====================
     15.Header z-index js
     ==========================*/
  if ($(window).width() < 1199) {
    $(
      '.header-2 .navbar .sidebar-bar, .header-2 .navbar .sidebar-back, .header-2 .mobile-search img'
    ).on('click', function () {
      if ($('#mySidenav').hasClass('open-side')) {
        $('.header-2 #main-nav .toggle-nav').css('z-index', '99')
      } else {
        $('.header-2 #main-nav .toggle-nav').css('z-index', '1')
      }
    })
    $('.sidebar-overlay').on('click', function () {
      $('.header-2 #main-nav .toggle-nav').css('z-index', '99')
    })
    $('.header-2 #search-overlay .closebtn').on('click', function () {
      $('.header-2 #main-nav .toggle-nav').css('z-index', '99')
    })
    $(
      '.layout3-menu .mobile-search .ri-search-line, .header-2 .mobile-search .ri-search-line'
    ).on('click', function () {
      $(
        '.layout3-menu #main-nav .toggle-nav, .header-2 #main-nav .toggle-nav'
      ).css('z-index', '1')
    })
  }

  /*=====================
     16.Tab js
     ==========================*/
  $('#tab-1').css('display', 'Block')
  $('.default').css('display', 'Block')
  $('.tabs li a').on('click', function () {
    event.preventDefault()
    $('.tab_product_slider').slick('unslick')
    $('.product-4').slick('unslick')
    $(this).parent().parent().find('li').removeClass('current')
    $(this).parent().addClass('current')
    var currunt_href = $(this).attr('href')
    $('#' + currunt_href).show()
    $(this)
      .parent()
      .parent()
      .parent()
      .find('.tab-content')
      .not('#' + currunt_href)
      .css('display', 'none')
    $('.product-4').slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  })
  $('.tabs li a').on('click', function () {
    event.preventDefault()
    $('.tab_product_slider').slick('unslick')
    $('.product-5').slick('unslick')
    $(this).parent().parent().find('li').removeClass('current')
    $(this).parent().addClass('current')
    var currunt_href = $(this).attr('href')
    $('#' + currunt_href).show()
    $(this)
      .parent()
      .parent()
      .parent()
      .find('.tab-content')
      .not('#' + currunt_href)
      .css('display', 'none')
    // var slider_class = $(this).parent().parent().parent().find(".tab-content").children().attr("class").split(' ').pop();
    $('.product-5').slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  })

  $('#tab-1').css('display', 'Block')
  $('.default').css('display', 'Block')
  $('.tabs li a').on('click', function () {
    event.preventDefault()
    $('.tab_product_slider').slick('unslick')
    $('.product-3').slick('unslick')
    $(this).parent().parent().find('li').removeClass('current')
    $(this).parent().addClass('current')
    var currunt_href = $(this).attr('href')
    $('#' + currunt_href).show()
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find('.tab-content')
      .not('#' + currunt_href)
      .css('display', 'none')
    $('.product-3').slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    })
  })

  /*=====================
     17 .category page
     ==========================*/
  $('.collapse-block-title').on('click', function (e) {
    e.preventDefault
    var speed = 300
    var thisItem = $(this).parent(),
      nextLevel = $(this).next('.collection-collapse-block-content')
    if (thisItem.hasClass('open')) {
      thisItem.removeClass('open')
      nextLevel.slideUp(speed)
    } else {
      thisItem.addClass('open')
      nextLevel.slideDown(speed)
    }
  })
  $('.color-selector ul li').on('click', function (e) {
    $('.color-selector ul li').removeClass('active')
    $(this).addClass('active')
  })
  $('.color-w-name ul li').on('click', function (e) {
    $('.color-w-name ul li').removeClass('active')
    $(this).addClass('active')
  })

  $('.list-layout-view').on('click', function (e) {
    $('.product-wrapper-grid').css('opacity', '0.2')
    $('.shop-cart-ajax-loader').css('display', 'block')
    $('.product-wrapper-grid').addClass('list-view')
    $('.product-wrapper-grid').children().children().removeClass()
    $('.product-wrapper-grid').children().children().addClass('col-sm-12 col-6')
    $('.grid-icon').removeClass('active')
    $(this).addClass('active')
    setTimeout(function () {
      $('.product-wrapper-grid').css('opacity', '1')
      $('.shop-cart-ajax-loader').css('display', 'none')
    }, 500)
  })
  //grid layout view
  $(
    '.product-2-layout-view, .product-3-layout-view, .product-4-layout-view, .product-6-layout-view'
  ).on('click', function (e) {
    $('.product-wrapper-grid').removeClass('list-view')
    $('.product-wrapper-grid').children().children().removeClass()
    $('.product-wrapper-grid').children().children().addClass('col-lg-3')
  })
  $('.product-2-layout-view').on('click', function (e) {
    $('.product-wrapper-grid').children().children().removeClass()
    $('.product-wrapper-grid').children().children().addClass('col-6')
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.product-3-layout-view').on('click', function (e) {
    $('.product-wrapper-grid').children().children().removeClass()
    $('.product-wrapper-grid').children().children().addClass('col-xl-4 col-6')
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.product-4-layout-view').on('click', function (e) {
    $('.product-wrapper-grid').children().children().removeClass()
    $('.product-wrapper-grid').children().children().addClass('col-xl-3 col-6')
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.product-6-layout-view').on('click', function (e) {
    $('.product-wrapper-grid').children().children().removeClass()
    $('.product-wrapper-grid').children().children().addClass('col-lg-2')
    $(this).addClass('active').siblings().removeClass('active')
  })

  /*=====================
     18.filter sidebar js
     ==========================*/
  // $('.sidebar-popup').on('click', function (e) {
  //     $('.open-popup').toggleClass('open');
  //     $('.collection-filter').css("left", "-15px");
  // });
  // $('.filter-btn').on('click', function (e) {
  //     $('.collection-filter').css("left", "-15px");
  // });
  $('.filter-btn').on('click', function () {
    $('.collection-filter').addClass('show')
  })
  $('.collection-mobile-back').on('click', function () {
    $('.collection-filter').removeClass('show')
  })
  // $('.filter-back').on('click', function (e) {
  //     $('.collection-filter').css("left", "-365px");
  //     $('.sidebar-popup').trigger('click');
  // });
  // $('.show-btn').on('click', function (e) {
  //     $('.dashboard-left').css("left", "0");
  // });
  // $('.filter-back').on('click', function (e) {
  //     $('.dashboard-left').css("left", "-365px");
  // });

  $(function () {
    $('.product-load-more .col-grid-box').slice(0, 8).show()
    $('.loadMore').on('click', function (e) {
      e.preventDefault()
      $('.product-load-more .col-grid-box:hidden').slice(0, 4).slideDown()
      if ($('.product-load-more .col-grid-box:hidden').length === 0) {
        $('.loadMore').text('no more products')
      }
    })
  })

  var t

  $(function () {
    $('.infinite-product .custom-col').slice(0, 8).show()
    $('.load-product').on('click', function (e) {
      e.preventDefault()
      $(this).addClass('loading')
      t = setTimeout(function () {
        $('.load-product').removeClass('loading')
        $('.infinite-product .custom-col:hidden').slice(0, 4).slideDown()
        if ($('.infinite-product .custom-col:hidden').length === 0) {
          $('.load-product').text('no more products')
          $('.load-product').addClass('mt-4')
        }
      }, 2500)
    })
  })

  /*=====================
     19.Add to cart
     ==========================*/
  $('.basic-product .ri-shopping-cart-line').on('click', function () {
    $.notify(
      {
        icon: 'ri-check-line',
        title: false,
        message: 'Product added Successfully.'
      },
      {
        element: 'body',
        position: null,
        type: 'success',
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: true,
        placement: {
          from: 'top',
          align: 'center'
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        animate: {
          enter: 'animated fadeInDown',
          exit: 'animated fadeOutUp'
        },
        icon_type: 'class',
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<span class="alert-box">' +
          '<span class="alert-icon" data-notify="icon"></span> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</span> ' +
          '</div>'
      }
    )
  })

  /*=====================
     20.Add to wishlist
     ==========================*/
  $('.basic-product .ri-heart-line').on('click', function () {
    $.notify(
      {
        icon: 'ri-check-line',
        title: 'Success!',
        message: 'Item Successfully added in wishlist'
      },
      {
        element: 'body',
        position: null,
        type: 'info',
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: true,
        placement: {
          from: 'top',
          align: 'right'
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        animate: {
          enter: 'animated fadeInDown',
          exit: 'animated fadeOutUp'
        },
        icon_type: 'class',
        template:
          '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
          '<span class="alert-icon" data-notify="icon"></span> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      }
    )
  })
})(jQuery)

/*=====================
 21. Dark Light
 ==========================*/

var body_event = $('body')
body_event.on('click', '.dark-btn', function () {
  $(this).toggleClass('dark')
  $('body').removeClass('dark')
  if ($('.dark-btn').hasClass('dark')) {
    $('.dark-btn').text('Light')
    $('body').addClass('dark')
  } else {
    $('#theme-dark').remove()
    $('.dark-btn').text('Dark')
  }

  return false
})

/*=====================
 22. Menu js
 ==========================*/
function openNav () {
  document.getElementById('mySidenav').classList.add('open-side')
}

function closeNav () {
  document.getElementById('mySidenav').classList.remove('open-side')
}
$(function () {
  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8
  })
  $('#sub-menu').smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8
  })
})

/*=====================
 23.Tooltip
 ==========================*/
$(window).on('load', function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*=====================
 24. Cookiebar
 ==========================*/
window.setTimeout(function () {
  $('.cookie-bar').addClass('show')
}, 5000)

$('.cookie-bar .btn, .cookie-bar .btn-close').on('click', function () {
  $('.cookie-bar').removeClass('show')
})

/*=====================
 25. Recently puchase modal
 ==========================*/
setInterval(function () {
  $('.recently-purchase').toggleClass('show')
}, 20000)

$('.recently-purchase .close-popup').on('click', function () {
  $('.recently-purchase').removeClass('show')
})

/*=====================
 26. other js
 ==========================*/
var width_content = jQuery(window).width()
if (width_content > '991') {
  $('.filter-bottom-title').click(function () {
    $('.filter-bottom-content').slideToggle('')
  })
  $('.close-filter-bottom').click(function () {
    $('.filter-bottom-content').slideUp('')
  })
} else {
  $('.filter-bottom-title').click(function () {
    $('.filter-bottom-content').toggleClass('open')
  })
  $('.close-filter-bottom').click(function () {
    $('.filter-bottom-content').removeClass('open')
  })
}

if (width_content < '991') {
  $('.filter-bottom-title').on('click', function (e) {
    $('.filter-bottom-content').css('left', '-15px')
  })
}

$('.color-select ul li').on('click', function (e) {
  $('.color-select ul li').removeClass('active')
  $(this).addClass('active')
})

$('.custom-variations li').on('click', function (e) {
  $('.custom-variations li').removeClass('active')
  $(this).addClass('active')
})

$('.color-select ul li').on('click', function (e) {
  $('.color-select ul li').removeClass('active')
  $(this).addClass('active')
})

$('.show-btn').on('click', function (e) {
  $('.dashboard-sidebar').addClass('open')
})

$('.back-btn').on('click', function (e) {
  $('.dashboard-sidebar').removeClass('open')
})

$('#cartEffect').on('click', function (e) {
  if ($('#selectSize .size-box ul').hasClass('selected')) {
    $('#cartEffect').text('Added to bag ')
    $('.added-notification').addClass('show')
    setTimeout(function () {
      $('.added-notification').removeClass('show')
    }, 5000)
  } else {
    $('#selectSize').addClass('cartMove')
  }
})

// modern product box plus effect
$('.add-extent .animated-btn').on('click', function (e) {
  $(this).parents('.add-extent').toggleClass('show')
})

var buttonPlus = $('.quantity-left-minus')
var buttonMinus = $('.quantity-right-plus')

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this).parent('.input-group').find('.input-number')
  $n.val(Number($n.val()) + 1)
})

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this).parent('.input-group').find('.input-number')
  var amount = Number($n.val())
  if (amount > 0) {
    $n.val(amount - 1)
  }
})

/*===================== 
 compare-btn Js 
==========================*/
// Select all elements with the class 'compare'
const compareButtons = document.querySelectorAll('.add-compare')

// Add event listener to each 'compare' element
compareButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Select all the div elements with class 'item'
    const items = document.getElementById('compareDiv')

    // Loop through each 'item' div and add the 'highlight' class
    items.classList.add('show')
  })
})

/*================================
 Add To Cart Notification js
  ==================================*/
window.addEventListener('load', () => {
  const setupButton = (buttonSelector, messageSelector) => {
    const buttons = document.querySelectorAll(buttonSelector)
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const messageContainer = document.querySelector(messageSelector)
        const progressBar = messageContainer.querySelector('.progress')

        messageContainer.classList.add('show')
        progressBar.style.width = '0%'

        let progress = 0
        const interval = setInterval(() => {
          if (progress >= 100) {
            clearInterval(interval)
          } else {
            progress++
            progressBar.style.width = progress + '%'
          }
        }, 40) // 4000ms / 100 steps = 40ms per step

        setTimeout(() => {
          messageContainer.classList.remove('show')
          progressBar.style.width = '0%' // Reset the progress bar
        }, 4000)
      })
    })
  }

  //   setupButton(".addtocart-btn", ".addToCart");
  setupButton('.wishlist-btn', '.addToWishlist')
})

$(document).ready(function() {
  $(document).on('scroll', onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        'swing',
        function() {
          window.location.hash = target;
          $(document).on('scroll', onScroll);
        },
      );
  });
});

function goTo(id) {
  setTimeout(() => {
    let el = document.getElementById(id);
    window.scrollTo(0, el.scrollHeight - 73);
  }, 600);
}
let link = document.querySelectorAll('.nav-item a');

link.forEach(item => {
	item.addEventListener('click', function (event) {
		let el = document.getElementById(this.getAttribute('name').slice(1));
		window.scrollTo(0, el.offsetTop - 73);
	});
})

function onScroll(event) {
  var scrollPos = $(document).scrollTop() + 100;
  $('.nav-item a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr('name'));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $('.nav-item a').removeClass('active');
      currLink.addClass('active');
    } else {
      currLink.removeClass('active');
    }
  });
}

function collapseNavbar() {
  let menu = document.getElementsByClassName('nav-content')[0];
  menu.style.display = 'flex';
}

function closeNavbar() {
  let menu = document.getElementsByClassName('nav-content')[0];
  menu.style.display = 'none';
}

// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
/* No need for explicit JS retina support.
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
*/


/*
 * Actual stuff for my website
 */
// On pages which have it, makes sure the image carousel doesn't get confused by the site's layout.
function checkSlider(event) {
  if (typeof jQuery == 'undefined') {
    // Don't bother doing anything without jQuery, since the slider requires
    // it anyway.
    // jQuery is only loaded where it's needed, so if it's unavailable we can just 
    // assume there's no slider/carousel.
    return;
  }
  const sliderBox = $('.voxel-gc-slider');
  if (sliderBox.length) {
    setTimeout(function() {
      // Slick seems to break because of our responsive layout, so we force it to
      // shrink back to our desired width after it gets initialized.
      //
      // The shadow of JavaScript will haunt me until the cold, bitter end.
      oldWidth = sliderBox.width();
      sliderBox.slick({
          fade: true,
          speed: 100,
          arrows: true,
          infinite: true,
          dots: true,
      });
      sliderBox.width(oldWidth);
    }, 25);
  }
}

document.addEventListener("DOMContentLoaded", checkSlider);


/*
	Future Imperfect by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

function skelHelpers() {
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

  var $body = document.body;
  var $sidebar = document.querySelectorAll('#sidebar')[0];
  var $main = document.querySelectorAll('#main')[0];

  // Disable animations/transitions until the page has loaded.
  $body.classList.add('is-loading');

  // $window.on('load', function() {
    window.setTimeout(function() {
      $body.classList.remove('is-loading');
    }, 100);
  // });

  // This no longer works for some reason.
  // Prioritize "important" elements on medium.
    // skel.on('+medium -medium', function() {
      // $.prioritize(
        // '.important\\28 medium\\29',
        // skel.breakpoint('medium').active
      // );
    // });

  // IE<=9: Reverse order of main and sidebar.
  if (skel.vars.IEVersion <= 9) {
    $main.insertAfter($sidebar);
  }

  // Intro.
  var $intro = document.querySelectorAll('#intro')[0];
  // Move to main on <=large, back to sidebar on >large.
  skel
    .on('+large', function() {
      // $intro.prependTo($main);
      $main.insertBefore($intro, $main.firstChild);
    })
    .on('-large', function() {
      // $intro.prependTo($sidebar);
      $sidebar.insertBefore($intro, $sidebar.firstChild);
    });
}
skelHelpers();


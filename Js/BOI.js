//Navigation Menu
const Header = document.querySelector(".Nav_det");
const Nav_anim = document.querySelector(".Nav_anim");

const HeaderOptions = {rootMargin: "0px 0px 0px 0px"};

HeaderDetector(Header,Nav_anim)

function HeaderDetector(Header,Nav_anim) {
  const HeaderObserver = new IntersectionObserver(function(entries,HeaderObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        Nav_anim.classList.add('nav-visible');
      } else {
        Nav_anim.classList.remove('nav-visible');
      }
    });
  },HeaderOptions);
HeaderObserver.observe(Header);
};

//Counter
const Counter = document.querySelector(".Counter_det")

const CounterObserverSize = {rootMargin: "0px 0px 0px 0px"};

CounterDetector(Counter);

function CounterDetector(Counter) {
  const CounterObserver = new IntersectionObserver(function(entries,CounterObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (function($) {
          "use strict";
          function count($this){
          var current = parseInt($this.html(), 10);
          current = current + 1; /* Where 50 is increment*/
          $this.html(++current);
            if(current > $this.data('count')){
              $this.html($this.data('count'));
            } else {    
              setTimeout(function(){count($this)}, 50);
            }
          }        	
          $(".stat-count").each(function() {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
          });
         })(jQuery);
      }
    });
  },CounterObserverSize);
CounterObserver.observe(Counter);
};

//Page animations
const Home = document.querySelector(".Home_det");
const Pg1 = document.querySelector(".Pg1_det");
const Pg2 = document.querySelector(".Pg2_det");
const Pg5 = document.querySelector(".Pg5_det");
const Pg6 = document.querySelector(".Pg6_det");
const Pg7 = document.querySelector(".Pg7_det");
const Pg8 = document.querySelector(".Pg8_det");
const Pg9 = document.querySelector(".Pg9_det");
const Home_anim = document.querySelectorAll(".Home_anim");
const Pg1_anim = document.querySelectorAll(".Pg1_anim");
const Pg2_anim = document.querySelectorAll(".Pg2_anim");
const Pg6_anim = document.querySelectorAll(".Pg6_anim");
const Pg7_anim = document.querySelectorAll(".Pg7_anim");
const Pg8_anim = document.querySelectorAll(".Pg8_anim");
var i;

//Sets the size and position of page observer
const PageObserverSize = {rootMargin: "-10% 0px -20% 0px"};

PageDetector(Home,Home_anim);
PageDetector(Pg1,Pg1_anim);
PageDetector(Pg2,Pg2_anim);
PageDetector(Pg6,Pg6_anim);
PageDetector(Pg7,Pg7_anim);
PageDetector(Pg8,Pg8_anim);


function PageDetector(Pg,Item) {
  const PageObserver = new IntersectionObserver(function(entries,PageObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
      for ( i = 0; i < Item.length; i++) {
        Item[i].classList.add('is-visible');}
      } else {
        for ( i = 0; i < Item.length; i++) {
          Item[i].classList.remove('is-visible');}
      }
    });
  },PageObserverSize);
PageObserver.observe(Pg);
};

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

//Navigation menu items

const Nav = document.querySelector(".Nav_anim");
const Item1_anim = document.querySelector(".Item1_anim");
const Item2_anim = document.querySelector(".Item2_anim");
const Item3_anim = document.querySelector(".Item3_anim");
const Item4_anim = document.querySelector(".Item4_anim");
const Item5_anim = document.querySelector(".Item5_anim");
const Item6_anim = document.querySelector(".Item6_anim");
const Item7_anim = document.querySelector(".Item7_anim");

const NavigationOptions = {
  rootMargin: "-20% 0px -80% 0px"
};

//function call(detected page,Detector element,item affected,to change item3)
NavigationDetector(Pg1,Nav,Item1_anim,0);
NavigationDetector(Pg2,Nav,Item2_anim,0);
NavigationDetector(Pg6,Nav,Item4_anim,1);
NavigationDetector(Pg7,Nav,Item5_anim,1);
NavigationDetector(Pg8,Nav,Item6_anim,1);
NavigationDetector(Pg9,Nav,Item7_anim,0);

function NavigationDetector(Pg,Nav,Item,selector) {
  const NavigationObserver = new IntersectionObserver(function(entries,NavigationObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Item.classList.add('nav-scrolled');

        //Highlighting Life At Blueocean
        if (selector==1){
          Item3_anim.classList.add('nav-scrolled');
        }else{
          Item3_anim.classList.remove('nav-scrolled');
        }
        
      } else {
        Item.classList.remove('nav-scrolled');
      }
    });
  },NavigationOptions);
NavigationObserver.observe(Pg);
};

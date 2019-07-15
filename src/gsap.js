jQuery(function($) {
  var bgvid1Vid = document.getElementById("bgvid1");
  var bgvid2Vid = document.getElementById("bgvid2");
  var bgvid3Vid = document.getElementById("bgvid3");

  var $panels = $(".panels"), // Panels Wrapper
    $panel01 = $("#panel01"),
    $panel02 = $("#panel02"),
    $panel03 = $("#panel03"),
    $panel04 = $("#panel04"),
    $panel05 = $("#panel05"),
    $panel06 = $("#panel06"),
    $panel07 = $("#panel07"),
    $panel01Wipe = $panel01.find(".panel-wipe"), // transistion
    $panel01Video = $panel01.find(".video-wrapper"), // video
    $panel01Text = $panel01.find(".headline-wrapper"),
    $panel01TextWord1 = $panel01Text.find(".word1"),
    $panel01TextWord2 = $panel01Text.find(".word2"),
    $panel01TextWord3 = $panel01Text.find(".word3"),
    $panel01TextWord4 = $panel01Text.find(".word4"),
    $panel01TextWord5 = $panel01Text.find(".word5"),
    $panel01TextWord6 = $panel01Text.find(".word6"),
    $panel02Wipe = $panel02.find(".panel-wipe"), // transistion
    $panel02Video = $panel02.find(".video-wrapper"), // video
    $panel02Text1 = $panel02.find(".headline-group1"),
    $panel02Text2 = $panel02.find(".headline-group2"),
    $panel03Text1 = $panel03.find(".headline-group1"),
    $panel03Text1List = $panel03.find(".headline-group1-list"),
    $panel03Text2 = $panel03.find(".headline-group2"),
    $panel03Text2List = $panel03.find(".headline-group2-list");

  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var panelsAnimation = new TimelineMax()

    .set($panel01TextWord1, { autoAlpha: 1, x: 0 })
    .set($panel01TextWord2, { autoAlpha: 0, x: 100 })
    .set($panel01TextWord3, { autoAlpha: 0, x: 100 })
    .set($panel01TextWord4, { autoAlpha: 0, x: 100 })
    .set($panel01TextWord5, { autoAlpha: 0, x: 100 })
    .set($panel01TextWord6, { autoAlpha: 0, x: 100 })

    .fromTo(
      $panel01Wipe,
      1.5,
      { css: { left: "0%", transform: "skew(0deg)" } },
      {
        css: { left: "-45%", transform: "skew(-10deg)" },
        ease: Power1.easeInOut,
        onComplete: fnVideo01
      }
    )

    .fromTo(
      $panel01Text,
      1.0,
      { autoAlpha: 0, x: 0 },
      { autoAlpha: 1, x: 150, ease: Power1.easeInOut }
    )

    .to(
      $panel01TextWord1,
      1.5,
      { autoAlpha: 1, x: 0, ease: Power1.easeInOut, delay: 2.5 },
      "-=1.0"
    )
    .to($panel01TextWord1, 1.5, {
      autoAlpha: 0,
      x: -50,
      ease: Power1.easeInOut,
      delay: 5.0
    })

    .to(
      $panel01TextWord2,
      1.5,
      { autoAlpha: 1, x: 0, ease: Power1.easeInOut, delay: 1.0 },
      "-=0.5"
    )
    .to($panel01TextWord2, 1.5, {
      autoAlpha: 0,
      x: -50,
      ease: Power1.easeInOut,
      delay: 5.0
    })

    .to(
      $panel01TextWord3,
      1.5,
      { autoAlpha: 1, x: 0, ease: Power1.easeInOut, delay: 1.0 },
      "-=0.5"
    )
    .to($panel01TextWord3, 1.5, {
      autoAlpha: 0,
      x: -50,
      ease: Power1.easeInOut,
      delay: 5.0
    })

    .to(
      $panel01TextWord4,
      1.5,
      { autoAlpha: 1, x: 0, ease: Power1.easeInOut, delay: 1.0 },
      "-=0.5"
    )
    .to($panel01TextWord4, 1.5, {
      autoAlpha: 0,
      x: -50,
      ease: Power1.easeInOut,
      delay: 5.0
    })

    .to(
      $panel01TextWord5,
      1.5,
      { autoAlpha: 1, x: 0, ease: Power1.easeInOut, delay: 1.0 },
      "-=0.5"
    )
    .to($panel01TextWord5, 1.5, {
      autoAlpha: 0,
      x: -50,
      ease: Power1.easeInOut,
      delay: 5.0
    })

    .to(
      $panel01TextWord6,
      1.5,
      { autoAlpha: 1, x: 0, ease: Power1.easeInOut, delay: 1.0 },
      "-=0.5"
    )
    //.to($panel01TextWord6, 0.5, {autoAlpha: 0, x: -50, ease: Power1.easeInOut, delay: 5.0})

    .set($panel02Text1, { autoAlpha: 0, y: 150 })
    .set($panel02Text2, { autoAlpha: 0, y: -50 })

    .fromTo(
      $panel02,
      5.0,
      { top: "100%" },
      { top: "0%", ease: Power1.easeInOut, delay: 1.5, onComplete: fnVideo02 }
    ) // in from bottom

    .fromTo(
      $panel02Wipe,
      2.5,
      { left: "0%" },
      { left: "50%", ease: Power1.easeInOut }
    )

    .to($panel02Text1, 1.5, { autoAlpha: 1, y: 0 }, "+=0.25")
    .to($panel02Text2, 1.5, { autoAlpha: 1, y: 0 }, "+=0.25")

    .set($panel03Text1, { autoAlpha: 0, x: 150 })
    .set($panel03Text1List, { autoAlpha: 0, y: 50 })
    .set($panel03Text2, { autoAlpha: 0, x: 150 })
    .set($panel03Text2List, { autoAlpha: 0, y: 50 })

    .add(
      TweenMax.fromTo(
        $panel03,
        5.0,
        { left: "100%" },
        {
          left: "0%",
          ease: Power1.easeInOut,
          delay: 4.0,
          onComplete: fnVideo03
        }
      )
    ) // in from right

    .add("panel03Text1Start")
    .add(
      TweenMax.to($panel03Text1, 2.0, {
        autoAlpha: 1,
        x: 0,
        ease: Power1.easeInOut,
        delay: 0.5
      })
    )
    .add(
      TweenMax.to(
        $panel03Text1List,
        1.0,
        { autoAlpha: 1, y: 0, ease: Power1.easeInOut, delay: 0.5 },
        "panel03Text1Start+=0.5"
      )
    )

    .add("panel03Text1End")
    .to($panel03Text1, 2.0, {
      autoAlpha: 0,
      x: -150,
      ease: Power1.easeInOut,
      delay: 2.5
    })
    .to(
      $panel03Text1List,
      1.0,
      { autoAlpha: 0, y: 50, ease: Power1.easeInOut, delay: 2.5 },
      "panel03Text1End+=0.5"
    )

    .add("panel03Text2Start")
    .to($panel03Text2, 2.0, {
      autoAlpha: 1,
      x: 0,
      ease: Power1.easeInOut,
      delay: 0.5
    })
    .to(
      $panel03Text2List,
      1.0,
      { autoAlpha: 1, y: 0, ease: Power1.easeInOut, delay: 0.5 },
      "panel03Text2Start+=0.5"
    )

    .add("panel03Text2End")
    .to($panel03Text2, 2.0, {
      autoAlpha: 0,
      x: -150,
      ease: Power1.easeInOut,
      delay: 2.5
    })
    .to(
      $panel03Text2List,
      1.0,
      { autoAlpha: 0, y: 50, ease: Power1.easeInOut, delay: 2.5 },
      "panel03Text2End+=0.5"
    )

    .fromTo(
      $panel04,
      5.0,
      { y: "-100%" },
      { y: "0%", ease: Power1.easeInOut, delay: 4.0 }
    ) // in from top
    .fromTo(
      $panel05,
      5.0,
      { y: "100%" },
      { y: "0%", ease: Power1.easeInOut, delay: 2.0 }
    ) // in from bottom
    .fromTo(
      $panel06,
      5.0,
      { x: "-100%" },
      { x: "0%", ease: Power1.easeInOut, delay: 2.0 }
    ) // in from left
    .fromTo(
      $panel07,
      5.0,
      { y: "100%" },
      { y: "0%", ease: Power1.easeInOut, delay: 2.0 }
    ); // in from bottom

  function fnVideo01() {
    bgvid1Vid.play();
  }

  function fnVideo02() {
    bgvid2Vid.play();
  }

  function fnVideo03() {
    /*bgvid1Vid.pause();
        bgvid2Vid.pause();*/
    bgvid3Vid.play();
  }

  var panels = new ScrollMagic.Scene({
    triggerElement: ".pin-wrapper",
    triggerHook: "onLeave",
    offset: 0,
    duration: "600%"
  })

    .setPin(".pin-wrapper")
    //.setTween(TweenMax.panelsAnimation)
    .setTween(panelsAnimation)
    .addIndicators({ name: "panel scene" }) // add indicators (requires plugin)
    .addTo(controller);
});

var charges = [
  "#charge-7",
  "#charge-6",
  "#charge-5",
  "#charge-4",
  "#charge-3",
  "#charge-2",
  "#charge-1"
];
var hours = [
  "#hours-1",
  "#hours-2",
  "#hours-3",
  "#hours-4",
  "#hours-5",
  "#hours-6"
];
TweenMax.staggerTo(charges, 0.3, { opacity: 0 }, 0.3);
TweenMax.to("#hours-indicator", 0.3, { visibility: "visible" });
TweenMax.staggerFrom(
  hours,
  0.3,
  { visibility: "visible", immediateRender: false },
  0.3
);
TweenMax.to("#hours-7", 0.3, { visibility: "visible", delay: 1.8 });
TweenMax.to("#clock-hands-minutes", 1.8, {
  rotation: 2520,
  transformOrigin: "bottom center",
  ease: Power0.easeNone
});
TweenMax.to("#clock-hands-hours", 1.8, {
  rotation: 180,
  transformOrigin: "bottom left",
  ease: Power0.easeNone
});

// Controller
var controller = new ScrollMagic();

// 2. Curtain Timeline
var tlCurtain = new TimelineMax();
tlCurtain
  .set($curtain, { yPercent: -100 })
  .to($curtain, 0.3, { yPercent: 0, ease: Power4.easeOut })
  .to(
    [
      tomatoLeft2,
      tomatoLeaves2,
      tomatoRight2,
      letters2,
      bracketRight2,
      bracketLeft2
    ],
    0.01,
    { fill: "#707070" }
  )
  .to($curtain, 0.3, { yPercent: -100, ease: Power4.easeOut });

// 2. Curtain Scene
var scene = new ScrollScene({ triggerElement: "#screen2 .imacInner" })
  .addTo(controller)
  .setTween(tlCurtain);

// Timeline
var splitAnimation = new TimelineMax({ paused: true });
splitAnimation
  .to(bracketLeft3, 0.3, { xPercent: 50, ease: Power4.easeOut }, "start")
  .to(bracketRight3, 0.3, { xPercent: -50, ease: Power4.easeOut }, "start")
  .to(
    tomato3,
    0.3,
    { scale: 0.5, transformOrigin: "center center", ease: Power4.easeOut },
    "start"
  )
  .to([bracketLeft3, tomatoLeft3, tomatoLeaves3], 0.2, {
    xPercent: -200,
    autoAlpha: 0,
    ease: Power4.easeOut
  })
  .to(
    [bracketRight3, tomatoRight3],
    0.2,
    { xPercent: 200, autoAlpha: 0, ease: Power4.easeOut },
    "-=0.2"
  )
  .to(letters3, 0.4, { scale: 2, y: "-=50", ease: Cubic.easeOut }, "-=0.2");

// Scene
var scene2 = new ScrollScene({
  triggerElement: "#screen3 .imacInner",
  triggerHook: "onEnter",
  offset: 203
})
  .addTo(controller)
  .setTween(splitAnimation);

// Timeline
var fallAnimation = new TimelineMax({ paused: true });
fallAnimation
  .set(screen4, { background: "none" })
  .to(
    screen4svg,
    0.3,
    { scale: 0.7, transformOrigin: "bottom center", y: "+=40px" },
    "start"
  )
  .to(
    screen4ihtLogo,
    0.3,
    { rotation: 720, transformOrigin: "bottom center" },
    "+=0.5"
  );

// Scene
var scene3 = new ScrollScene({
  triggerElement: "#screen4 .imacInner",
  triggerHook: "onLeave"
})
  .addTo(controller)
  .setTween(fallAnimation);

// Timeline
var scrollAnimation = new TimelineMax();
scrollAnimation
  .set(splitDiv, { autoAlpha: 1 })
  .to(splitDiv, 0.3, { height: "100px" })
  .set([tomatoRight5, letters5], { autoAlpha: 0 })
  .to(
    tomato5,
    0.6,
    { rotation: "45", transformOrigin: "bottom left" },
    "rotate"
  )
  .to(
    splitDiv,
    0.3,
    { y: "70", rotation: "0", transformOrigin: "top center" },
    "rotate"
  )
  .to(
    bracketRight5,
    0.1,
    { xPercent: 200, autoAlpha: 0, ease: Power4.easeOut },
    "rotate"
  )
  .to(
    bracketLeft5,
    0.1,
    { xPercent: -200, autoAlpha: 0, ease: Power4.easeOut },
    "rotate"
  )
  .set(bracketRight5, {
    xPercent: -200,
    yPercent: 150,
    rotation: "90",
    transformOrigin: "bottom center",
    autoAlpha: 1
  }) //bring bracket to the bottom
  .set(letters5, { y: "-160px", scale: 2, autoAlpha: 0 }) //bring text to the top
  .set(splitDiv, { autoAlpha: 0 }) //hide mask
  .to(
    bracketRight5,
    0.3,
    { yPercent: 50, autoAlpha: 1, ease: Power4.easeOut },
    "catch"
  )
  .to(
    tomato5,
    0.3,
    {
      y: "+=2",
      rotation: "-=45",
      scale: 0.5,
      transformOrigin: "bottom left",
      ease: Bounce.easeOut
    },
    "catch"
  )
  .to(tomato5, 0.6, { x: "+=40", y: "+=40", ease: Power4.easeIn })
  .to(
    letters5,
    0.3,
    { y: "-60px", autoAlpha: 1, ease: Power4.easeOut },
    "+=0.3"
  ); // bring in text;

// Scene
var scene4 = new ScrollScene({
  triggerElement: ".more-link",
  triggerHook: "onEnter",
  triggerOffset: 400,
  duration: 300
})
  .addTo(controller)
  .setTween(scrollAnimation);

var tl = new TimelineLite({ paused: true });
tl.from(logo, 0.5, { left: "-=60px", ease: Back.easeOut })
  .from(timelineLite, 0.5, { width: "0px", alpha: 0 }, "-=0.2")
  .staggerFrom(
    tagline,
    0.5,
    {
      top: "-=30px",
      rotation: "-40deg",
      alpha: 0,
      scale: 1.8,
      ease: Back.easeOut
    },
    0.2
  );

//create a timeline that calls myFunction() when it completes
var tl = new TimelineLite({ onComplete: myFunction });

//now we'll use chaining, but break each step onto a different line for readability...
tl.to(element, 1, { left: 100 }) //tween element's left to 100
  .set(element, { opacity: 0 }) //then set element.opacity to 0.5 immediately
  .to(element, 1, { top: 50 }) //then tween element's top to 50
  .call(otherFunction) //then call otherFunction()
  .staggerTo([element1, element2, element3], 1.5, { rotation: 45 }, 0.25); //finally tween the rotation of element1, element2, and element3 to 45 and stagger the start times by 0.25 seconds

TweenMax.staggerTo(".box", 1, {
  scale: 0.1,
  y: 40,
  ease: Power1.easeInOut,
  stagger: {
    grid: [15, 9],
    from: "center",
    ease: Power2.easeIn,
    amount: 1.5
  }
});

tl.set(element, { left: 100 }); //appends to the end of the timeline
tl.set(element, { left: 100 }, 2); //appends it at exactly 2 seconds into the timeline (absolute position)
tl.set(element, { left: 100 }, "+=2"); //appends it 2 seconds after the end (with a gap of 2 seconds)
tl.set(element, { left: 100 }, "myLabel"); //places it at "myLabel" (and if "myLabel" doesn't exist yet, it's added to the end and then the tween is inserted there)
tl.set(element, { left: 100 }, "myLabel+=2"); //places it 2 seconds after "myLabel"

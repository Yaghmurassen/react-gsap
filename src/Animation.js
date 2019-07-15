import React from "react";

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import {
  TweenMax,
  TimelineMax,
  Power1,
  Power2,
  Back,
  Expo,
  Power4
} from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// import 'imports-loader?scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';

export default class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const flightPath = {
      curviness: 1.25,
      autoRotate: true,
      values: [
        { x: 100, y: -20 },
        { x: 300, y: 10 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: 100 },
        { x: 800, y: 0 },
        { x: window.innerWidth, y: -250 }
      ]
    };

    const tween = new TimelineMax();

    tween
      .to(".paper-plane", 3, {
        bezier: flightPath,
        ease: Power1.easeInOut
      })
      .to(
        ".animation",
        4,
        { opacity: 0, ease: Power1.easeInOut }
        // 3
        // "+=3"
      );

    ///////////////// Chainer des tweens FAILED //////////////////

    // tween
    //   .to(".paper-plane", 3, {
    //     bezier: flightPath,
    //     ease: Power1.easeInOut
    //   })
    //   .to(".animation", 3, { x: 0 }, { x: "-100%", ease: Power1.easeInOut });

    // tween.add(
    //   TweenMax.staggerFromTo(
    //     ".paper-plane",
    //     3,
    //     {
    //       bezier: flightPath,
    //       ease: Power1.easeInOut
    //     },
    //     ".animation",
    //     3,
    //     { x: 0 },
    //     { x: "-100%", ease: Power1.easeInOut }
    //   )
    // );

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: ".animation",
      duration: 2000,
      triggerHook: 0
    })
      .setTween(tween)
      .setPin(".animation")
      .addTo(controller);

    // function scrollAnimation2() {
    //   const tween = new TimelineMax();

    //   tween.add(
    //     TweenMax.fromTo(
    //       ".animation-2",
    //       2,
    //       {
    //         // delay: 5,
    //         x: 0,
    //         skewX: 0
    //       },
    //       {
    //         x: "-50%",
    //         skewX: -10,
    //         ease: Power2.easeInOut
    //       }
    //       // "-=5"
    //       // ".animation2"
    //     )
    // );

    this.scrollAnimation3();
    this.scrollAnimation4();
    this.scrollText();
    this.scrollMenu();
    // this.scrollMenu2();

    // const tween = new TimelineMax();

    // tween.add(
    //   TweenMax.to(".animation", 3, {
    //     bezier: flightPath,
    //     ease: Power1.easeInOut
    //   })
    // );
    //   const controller = new ScrollMagic.Controller();

    //   new ScrollMagic.Scene({
    //     triggerElement: ".animation-2",
    //     duration: 1000,
    //     triggerHook: 0
    //   })
    //     .setTween(tween)
    //     .setPin(".animation-2")
    //     .addTo(controller);
    // }
  }

  scrollAnimation3 = () => {
    const tween = new TimelineMax();

    tween.add(
      TweenMax.fromTo(
        ".animation-3",
        2,
        {
          x: 0,
          skewX: 0
        },
        {
          x: "-50%",
          skewX: 10,
          ease: Power2.easeInOut
        }
        // ".animation2"
      )
    );
    tween.fromTo(
      ".bac",
      1,
      {
        opacity: 0,
        x: 50,
        skewX: 0,
        ease: Power1.easeInOut
      },
      {
        opacity: 1,
        x: -50,
        skewX: -10
      }
    );
    tween.fromTo(
      ".bac-img",
      2,
      {
        opacity: 0,
        y: "50%",
        skewX: 0,
        ease: Power1.easeInOut
      },
      {
        opacity: 1,
        y: "0%",
        skewX: -10
        // onComplete: tween.from(".animation-4", 2, { y: "-200%" })
      }
    );
    // tween.to(
    //   ".animation-3",
    //   2,
    //   {
    //     opacity: 1
    //   },
    //   "+=1"
    // );
    // tween.set(".animation-3", { autoAlpha: 0 }, "+=4");

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: ".animation-3",
      duration: 2000,
      triggerHook: 0
    })
      .setTween(tween)
      .setPin(".animation-3")
      .addTo(controller);
  };

  scrollAnimation4 = () => {
    const tl = new TimelineMax();

    tl.to(".animation-4", 2, {
      top: "0%",
      ease: Expo.easeInOut,
      delay: -2
    });

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: ".animation-2",
      duration: 2000,
      triggerHook: "onLeave"
    })
      .setTween(tl)
      .setPin(".animation-4")
      .addTo(controller);
  };

  scrollText = () => {
    const tween = new TimelineMax();
    tween.staggerFrom(
      ".hide-text",
      2,
      { y: "200%", ease: Power4.easeOut },
      0.25
    );
    tween.from(".bag-img", 2, { opacity: 0, y: "-100%" }, "-=2");

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: ".big-text",
      duration: 2000,
      triggerHook: 0
    })
      .setTween(tween)
      .setPin(".big-text")
      .addTo(controller);
  };

  scrollMenu = () => {
    const tween = new TimelineMax();

    tween.to(".h1", 1.7, {
      top: "0%",
      opacity: 0,
      delay: 3
    });

    tween.to(".menu", 4, {
      top: "0%",
      ease: Expo.easeInOut,
      delay: -2
    });

    tween.staggerFrom(
      ".menu ul li",
      2,
      { x: -200, opacity: 0, ease: Expo.easeOut, delay: 4 },
      0.3
    );
    tween.to(".menu2", 4, {
      right: "50%",
      // skewX: "(15deg)", MARCHE PAS
      transform: "skewX(15deg)",
      ease: Expo.easeInOut
      // delay: 3
    });
    tween.to(
      ".menu",
      1,
      {
        opacity: 0
      },
      "-=2"
    );
    tween.to(
      ".menu2",
      1,
      {
        right: "110%"
      },
      "+=3"
    );
    tween.to(
      ".menu3",
      3,
      {
        bottom: "45%",
        transform: "skewY(15deg)"
      },
      "-=1"
    );
    tween.to(
      ".menu3",
      2,
      {
        bottom: "130%"
        // transform: "skewY(15deg)"
      },
      "+=4"
    );
    tween.to(
      ".menu4",
      3,
      {
        left: "0%",
        delay: -2
      },
      "+=3"
    );
    tween.fromTo(
      ".menu5",
      3,
      {
        transform: "rotateY(180deg)",
        opacity: 0,
        transformOrigin: "50% 50°%",
        ease: Expo.easeInOut
      },
      {
        transform: "rotateY(0deg)",
        opacity: 1
      }
    );

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: ".trigger-div",
      duration: 4000,
      triggerHook: 0
    })
      .setTween(tween)
      .setPin(".trigger-div")
      .addTo(controller);
  };

  scrollButton = () => {
    const tween = new TimelineMax();

    tween.to(".menu5", 2, {
      right: "-100%",
      ease: Power4.easeInOut
    });
    tween.to(
      ".menu6",
      2,
      {
        scale: 1,
        transformOrigin: "50% 50%",
        opacity: 1,
        ease: Power4.easeInOut
      },
      "-=2"
    );
    tween.to(
      ".menu5",
      1,
      {
        display: "none"
      },
      "-=1"
    );
  };

  // scrollMenu2 = () => {
  //   const tween = new TimelineMax();

  //   tween.to(".menu2", 4, {
  //     right: "0%",
  //     ease: Expo.easeInOut,
  //     delay: -2
  //   });

  //   tween.staggerFrom(
  //     ".menu2 ul li",
  //     2,
  //     { x: -200, opacity: 0, ease: Expo.easeOut },
  //     0.3
  //   );
  //   const controller = new ScrollMagic.Controller();

  //   new ScrollMagic.Scene({
  //     triggerElement: ".menu2",
  //     duration: 2000,
  //     triggerHook: "onLeave"
  //   })
  //     .setTween(tween)
  //     .setPin(".menu2")
  //     .addTo(controller);
  // };

  render() {
    return (
      <div className="trigger-div">
        <h1 className="h1">Jedi Scroll Animation</h1>
        <div className="menu">
          <div class="data">
            <ul>
              <li>Navigation</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="menu2" />
        <div className="menu3" />
        <div className="menu4" />
        <div className="menu5">
          <btn onClick={() => this.scrollButton()} className="button">
            Scroll Animation
          </btn>
        </div>
        <div className="menu6" />

        {/* <header>
          <h2>Scroll Animation</h2>
        </header>
        <section className="animation">
          <img className="paper-plane" src="/img/paper.png" alt="osef" />
        </section>
        <section className="animation-2">
          <img className="paper-plane-2" src="/img/paper.png" alt="osef" />
        </section>
        <section className="animation-4">
          <img className="paper-plane-4" src="/img/paper.png" alt="osef" />
        </section>
        <section className="animation-3">
          <p className="bac">
            Nous avons vu qu’un algorithme était en mesure de simplifier et
            industrialiser le travail artisanal d’un développeur réalisant une
            plateforme web ou une application mobile, et idéalement décupler sa
            productivité. - Développement d’un algorithme de reconnaissance et
            d’interprétation d’un besoin / cahier des charges ; - Création de
            contenus adaptés à notre métalangage pour augmenter le degré
            d’agnosticité de l’outil créé au langage de développement souhaité
            in fine.
          </p>
          <img src="/img/bac.png" className="bac-img" alt="bac-img" />
        </section>
        <div className="big-text">
          <h1 className="h1-first">
            <span className="hide-text">
              Nous avons vu qu’un algorithme était en mesure de simplifier et
              industrialiser le travail artisanal d’un développeur réalisant une
              plateforme web ou une application mobile, et idéalement décupler
              sa productivité.
            </span>
          </h1>
          <h1 className="h1-second">
            <span className="hide-text">
              - Développement d’un algorithme de reconnaissance et
              d’interprétation d’un besoin / cahier des charges.
            </span>
          </h1>
          <h1 className="h1-last">
            <span className="hide-text">
              - Création de contenus adaptés à notre métalangage pour augmenter
              le degré d’agnosticité de l’outil créé au langage de développement
              souhaité in fine.
            </span>
          </h1>
          <img src="/img/bag.jpg" className="bag-img" alt="bag-img" />
        </div>
        <footer>
          <h2>End Scroll Animation</h2>
        </footer> */}
      </div>
    );
  }
}

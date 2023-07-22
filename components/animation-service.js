/*
 Copyright (c) 2023, Xgrid Inc, http://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Scrollmagic and Tweenmax imports
import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, TimelineLite, Linear, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// Registering gsap plugins
gsap.registerPlugin(ScrollTrigger);

// init controller
let controller = new ScrollMagic.Controller();
let tl = new TimelineLite();

/**
 * Function for animating block after trigger the triggerElement, this function is expecting:
 * @param triggerElement
 * @param toggleReference
 * @param offSet
 * @param triggerHook
 */
export function transformYBlock(
  triggerElement,
  toggleReference,
  offSet,
  triggerHook,
  toggleClass
) {
  new ScrollMagic.Scene({
    triggerElement: triggerElement,
    offset: offSet,
    triggerHook: triggerHook,
  })
    .setClassToggle(toggleReference, toggleClass)
    .addTo(controller);
}

/**
 * Function is used to animate element in the footer
 */
export function footerElementTransform() {
  // Transforming Heading
  transformYBlock(
    '#footer-heading-wrapper',
    '#footer-heading-wrapper .initial-opacity-transform-block',
    50,
    0.9,
    'start-anim-transform-up'
  );

  // Transforming footer elements
  [1, 2, 3, 4].forEach(function (id) {
    transformYBlock(
      `#footer-content-sec-${id}`,
      `#footer-content-sec-${id} .initial-opacity-transform-block`,
      50,
      0.9,
      'start-anim-transform-up'
    );
  });
}

/**
 * Animates CaseStudy Header
 * @param {Header's Wrapper ID} sectionWrapperId
 * @param {Main Menu Wrapper ID} mainMenuId
 */
export function caseStudyHeaderAnimate(sectionWrapperId, mainMenuId) {
  let animatioCaseStudyHeaderProps = [
    {
      id: '#casestudy-header-content-animate',
      y: '-40%',
      delay: 0,
      duration: 0.8,
      opacity: 0,
    },
    {
      id: sectionWrapperId,
      height: '100vh',
      delay: 0,
      duration: 1,
    },
    {
      id: '#casestudy-main-image-wrapper',
      y: '15%',
      delay: 1.2,
      duration: 0.8,
      opacity: 0,
    },
    {
      id: mainMenuId,
      delay: 2,
      opacity: 0,
      duration: 0.5,
    },
  ];
  animatioCaseStudyHeaderProps.map((res) => {
    gsap.from(res.id, {
      y: res.y,
      delay: res.delay,
      opacity: res.opacity,
      duration: res.duration,
      ease: Linear.easeNone,
      height: res.height,
    });
  });
}

/**
 * Updates Next CaseStudy section
 */
export function animateNextPortfolioIndicator() {
  transformYBlock(
    '#case-study-footer',
    '#case-study-footer .case-study-anchor .initial-opacity-transform-block',
    50,
    0.85,
    'start-anim-transform-up'
  );
  transformYBlock(
    '#case-study-footer .trigger-section-heading-animation',
    '#case-study-footer .trigger-section-heading-animation .initial-opacity-transform-block',
    50,
    0.9,
    'start-anim-transform-up'
  );
  transformYBlock(
    '#case-study-footer .trigger-section-items-animation',
    '#case-study-footer .trigger-section-items-animation .initial-opacity-transform-block',
    50,
    0.9,
    'start-anim-transform-up'
  );
  transformYBlock(
    '#case-study-footer .trigger-section-img-animation',
    '#case-study-footer .trigger-section-img-animation .initial-opacity-transform-block',
    50,
    0.9,
    'start-anim-transform-up'
  );
}

/**
 * Animates Component Design 1 Elements
 */
export function animatesComponent1Elements() {
  transformYBlock(
    '#component-design-1-main-wrapper .content-wrapper-flex-bordered-items',
    '#component-design-1-main-wrapper .services-elements-trigger',
    50,
    0.85,
    'start-anim-transform-up'
  );
  transformYBlock(
    '#component-design-1-main-wrapper .design-details-0',
    '#component-design-1-main-wrapper .design-details-0 .initial-opacity-transform-block',
    50,
    0.85,
    'start-anim-transform-up'
  );
  transformYBlock(
    '#component-design-1-main-wrapper .design-details-1',
    '#component-design-1-main-wrapper .design-details-1 .initial-opacity-transform-block',
    50,
    0.85,
    'start-anim-transform-up'
  );
}

/**
 * Animates Video Section
 */
export function animatesVideoSection(parentID) {
  new ScrollMagic.Scene({
    triggerElement: '#' + parentID + ' ' + '#video-component-wrapper',
    duration: 800, // scroll distance
    triggerHook: 0,
  })
    .setPin(
      '#' +
        parentID +
        ' ' +
        '#video-component-wrapper .video-section-inner-wrapper'
    )
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '#' + parentID + ' ' + '#video-component-wrapper',
    offset: 400, // start this scene after scrolling for 50px
    duration: 500, // scroll distance
    triggerHook: 0.3,
  })
    .setTween(
      '#' + parentID + ' ' + '#video-component-wrapper .overlay-black',
      {
        opacity: 1,
      }
    )
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '#' + parentID + ' ' + '#video-component-wrapper',
    duration: 100, // scroll distance
    offset: 400, // start this scene after scrolling for 50px
    triggerHook: 0.7,
  })
    .setTween(
      '#' + parentID + ' ' + '#video-component-wrapper .video-content-wrapper',
      {
        opacity: 1,
        y: 0,
      }
    )
    .addTo(controller);
}

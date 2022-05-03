import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import 'animate.css';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/storage';
import React from 'react';
import { DatabaseProvider } from './src/contexts/DatabaseContext';
import { ModalProvider } from './src/contexts/ModalContext';
import { ResumeProvider } from './src/contexts/ResumeContext';
import { SettingsProvider } from './src/contexts/SettingsContext';
import { StorageProvider } from './src/contexts/StorageContext';
import { UserProvider } from './src/contexts/UserContext';
import './src/i18n';
import './src/styles/forms.css';
import './src/styles/global.css';
import './src/styles/shadows.css';
import './src/styles/tailwind.css';
import './src/styles/toastify.css';
import './src/utils/dayjs';
import './static/css/all.css';
import './static/css/owl.theme.default.css';
import './static/cdn-css/bootstrap.min.css';
import './static/css/style.css';
import './static/css/stylesheet.css';
import './static/cdn-css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './static/cdn-css/owl.carousel.min.css';
import './static/cdn-css/owl.theme.min.css';
import './static/cdn-js/jquery-3.4.1.slim.min';
import './static/cdn-js/popper.min';
import 'bootstrap/dist/js/bootstrap';
import './static/cdn-js/jquery.min';
import './static/cdn-js/slick.min';

const $ = require('jquery');

$(() => {
  // eslint-disable-next-line no-console
  console.log('in doc ready');
  $(window).on('scroll', () => {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  $('.scrollToTop').on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
  $('.a-nav-toggle, .menu-main a').on('click', () => {
    if ($('html').hasClass('body-menu-opened')) {
      $('html').removeClass('body-menu-opened').addClass('body-menu-close');
    } else {
      $('html').addClass('body-menu-opened').removeClass('body-menu-close');
    }
  });
  $('.pp-scrollable').scroll(() => {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('header-shadow');
    } else {
      $('.header').removeClass('header-shadow');
    }
  });
  if ($('.a-pagepiling').length) {
    // eslint-disable-next-line no-console
    console.log('pagepiling ready');
    $('.a-pagepiling').pagepiling({
      scrollingSpeed: 280,
      menu: '#menu, #menuMain',
      anchors: [
        'Intro',
        'Services',
        'Projects',
        'Awards',
        'Experience',
        'Clients',
      ],
      loopTop: false,
      loopBottom: false,
      navigation: { position: 'right' },
      onLeave() {
        $('.header').removeClass('header-shadow');
        if ($('.pp-scrollable.active').scrollTop() > 0) {
          $('.header').addClass('header-shadow');
        } else {
          $('.header').removeClass('header-shadow');
        }
        if ($('.slide-dark-footer').hasClass('active')) {
          $('body').addClass('body-copyright-light');
        } else {
          $('body').removeClass('body-copyright-light');
        }
        if ($('.slide-dark-bg').hasClass('active')) {
          $('body').addClass('body-bg-dark');
        } else {
          $('body').removeClass('body-bg-dark');
        }
        $('.a-carousel-projects').trigger('refresh.owl.carousel');
      },
    });
  }
  if ($('.a-carousel-projects').length) {
    $('.a-carousel-projects').owlCarousel({
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      items: 1,
      navText: [
        '<i class="lni lni-chevron-left"></i>',
        '<i class="lni lni-chevron-right"></i>',
      ],
      smartSpeed: 750,
      dots: false,
      nav: true,
      loop: true,
    });
  }
  if ($('.a-carousel-experience').length) {
    $('.a-carousel-experience').owlCarousel({
      items: 1,
      navText: [
        '<i class="lni lni-chevron-left"></i>',
        '<i class="lni lni-chevron-right"></i>',
      ],
      smartSpeed: 750,
      margin: 30,
      dots: false,
      nav: true,
      navContainer: '.a-carousel-nav',
      loop: true,
    });
  }
  if ($('.a-carousel-testimonial').length) {
    $('.a-carousel-testimonial').owlCarousel({
      items: 1,
      navText: [
        '<i class="lni lni-chevron-left"></i>',
        '<i class="lni lni-chevron-right"></i>',
      ],
      smartSpeed: 750,
      margin: 30,
      dots: false,
      nav: true,
    });
  }
});

const theme = createMuiTheme({
  typography: {
    fontWeightRegular: 500,
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <SettingsProvider>
    <MuiThemeProvider theme={theme}>
      <ModalProvider>
        <UserProvider>
          <DatabaseProvider>
            <ResumeProvider>
              <StorageProvider>{element}</StorageProvider>
            </ResumeProvider>
          </DatabaseProvider>
        </UserProvider>
      </ModalProvider>
    </MuiThemeProvider>
  </SettingsProvider>
);

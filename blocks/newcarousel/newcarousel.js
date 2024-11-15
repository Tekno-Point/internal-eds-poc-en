import { createElement } from '../../scripts/scripts.js';
import Swiper from '../carousel/swiper-bundle.min.js';
import configObject from '../carousel/carousel-config.js';
import { loadEmbed } from '../embed/embed.js';

export default function decorate(block) {
  const rows = Array.from(block.children);
  const config = rows[0];
  let configData = configObject.default;
  Array.from(block.classList).forEach((cls) => {
    if (configObject[cls]) configData = configObject[cls];
  });
  const props = rows.slice(1);
  const swiperWrapper = createElement('div', { classes: ['swiper-wrapper'] });
  const swiperButtonPrev = createElement('div', { classes: ['swiper-button-prev'] });
  const swiperButtonNext = createElement('div', { classes: ['swiper-button-next'] });
  const swiperPagination = createElement('div', { classes: ['swiper-pagination'] });
  config.remove();
  props.forEach((eachProps) => {
    // eslint-disable-next-line max-len
    const [classes, prevIcon, nextIcon, imageDesktop, heading, description, embedLink] = Array.from(eachProps.children);
    const swiperSlide = createElement('div', { classes: ['swiper-slide'] });
    classes.textContent.trim().split(',').forEach((eachClass) => {
      swiperSlide.classList.add(eachClass.trim());
    });
    const embedDiv = createElement('div', { classes: ['video-component'] });
    const textWrapper = createElement('div', { classes: ['text-wrapper'] });
    imageDesktop.classList.add('image-con');
    textWrapper.append(heading, description);
    swiperButtonPrev.append(prevIcon);
    swiperButtonNext.append(nextIcon);
    swiperSlide.append(textWrapper, imageDesktop, embedDiv);
    try {
      loadEmbed(embedDiv, embedLink.textContent.trim());
    } catch (error) {
      console.log('Invalid URL:', error.message);
    }
    swiperWrapper.append(swiperSlide);
    classes.remove();
    embedLink.remove();
  });
  configData.navigation.nextEl = swiperButtonNext;
  configData.navigation.prevEl = swiperButtonPrev;
  configData.pagination.el = swiperPagination;
  block.classList.add('swiper', 'mySwiper');
  block.append(swiperWrapper, swiperButtonNext, swiperButtonPrev, swiperPagination);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Swiper(block, configData);
        }
      });
    },
  );

  observer.observe(block);
}

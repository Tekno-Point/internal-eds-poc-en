import { createElement } from '../../scripts/scripts.js';
import Swiper from '../carousel/swiper-bundle.min.js';
import configObject from '../carousel/carousel-config.js';
import { isDesktop } from '../header/header.js';
import loadEmbed from '../embed/embed.js';

// import embed from '../embed/embed.js';

// const componentMapping = {
//   embed,
// };

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
    // const [classes, eyebrow, image, title] = Array.from(eachProps.children);
    // eslint-disable-next-line max-len
    let [classes, prevIcon, nextIcon, imageDesktop, imageMobile, heading, description, embedLink] = Array.from(eachProps.children);
    const swiperSlide = createElement('div', { classes: ['swiper-slide'] });
    classes.textContent.trim().split(',').forEach((eachClass) => {
      swiperSlide.classList.add(eachClass.trim());
    });
    let embed = document.createElement('div');
    embedLink = '<p><a href="https://www.youtube.com/embed/bCu0iThNXiw?si=TUVNwCEs1js8wDWR&amp;enablejsapi=1&amp;origin=https://mf.nipponindiaim.com" title="https://www.youtube.com/embed/bCu0iThNXiw?si=TUVNwCEs1js8wDWR&amp;enablejsapi=1&amp;origin=https://mf.nipponindiaim.com">https://www.youtube.com/embed/bCu0iThNXiw?si=TUVNwCEs1js8wDWR&amp;enablejsapi=1&amp;origin=https://mf.nipponindiaim.com</a></p>';

    embed.innerHTML = embedLink;

    // swiperButtonPrev.append(prevIcon);
    // swiperButtonNext.append(nextIcon);
    if (isDesktop) {
      swiperSlide.append(prevIcon);
      swiperSlide.append(nextIcon);
      swiperSlide.append(imageDesktop);
      swiperSlide.append(loadEmbed(embed));
    } else {
      swiperSlide.append(prevIcon);
      swiperSlide.append(nextIcon);
      swiperSlide.append(imageDesktop);
      swiperSlide.append(loadEmbed(embedLink));
    }
    swiperWrapper.append(swiperSlide);
    classes.remove();
  });
  configData.navigation.nextEl = swiperButtonNext;
  configData.navigation.prevEl = swiperButtonPrev;
  configData.pagination.el = swiperPagination;
  block.classList.add('swiper', 'mySwiper');
  block.append(swiperWrapper);
  block.append(swiperButtonNext);
  block.append(swiperButtonPrev);
  block.append(swiperPagination);
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

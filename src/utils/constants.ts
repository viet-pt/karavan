import { REGEX_EMAIL, REGEX_EMAIL_OR_PHONE, REGEX_PHONE_NUMBER } from "./regex"

export const PUBLIC_PATHS = [
  '/',
  '/verify',
  '/faq',
  '/services', '/dich-vu',
  '/contact', '/lien-he',
  '/resetpassword', '/reset-password',
  '/verifypassword', '/verify-password',
]

export const paramsSwiper2 = {
  pagination: false,
  spaceBetween: 20,
  slidesPerView: 2,
  loop: true,
  centerInsufficientSlides: true,
  autoPlay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 80
    },
  },
}

export const paramsSwiper3 = {
  pagination: false,
  spaceBetween: 20,
  slidesPerView: 3,
  loop: true,
  centerInsufficientSlides: true,
  autoPlay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    330: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  },
}

export const RULE_PHONE = [
  {
    required: true,
    message: 'Vui lòng nhập số điện thoại',
  },
  {
    pattern: REGEX_PHONE_NUMBER,
    message: 'Số điện thoại không đúng định dạng',
  },
]

export const RULE_EMAIL = [
  {
    required: true,
    message: 'Vui lòng nhập email',
  },
  {
    pattern: REGEX_EMAIL,
    message: 'Email không hợp lệ',
  },
]

export const RULE_EMAIL_OR_PHONE = [
  {
    required: true,
    message: 'Vui lòng nhập email hoặc số điện thoại',
  },
  {
    pattern: REGEX_EMAIL_OR_PHONE,
    message: 'Email hoặc số điện thoại không hợp lệ',
  },
]

export const RULE_REQUIRE = [
  {
    required: true,
    message: 'Vui lòng nhập thông tin',
  }
]
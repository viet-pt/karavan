import React from 'react';
import Link from 'next/link';
import useTrans from 'utils/useTrans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Footer = () => {
  const i18n = useTrans();

  return (
    <footer className='bg-primary-gray py-10 font-apoc'>
      <div className='container'>
        <div className='border-b border-solid border-second-gray flex-between pb-3 mobile:px-2'>
          <p className='text-xl lg:text-3xl mb-0 font-apocBold'>Contact</p>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faSearch} color='#000' className='w-5 py-2 pointer mr-18' />
            <p className='text-xl lg:text-3xl mb-0 font-apocBold'>Search</p>
          </div>
        </div>

        <div className='flex-between pb-5 pt-5 mobile:px-2 space-x-5'>
          <div className='text-base lg:text-2xl'>
            UK +44 (0)1367 850566<br />
            USA 1-855-216-5040<br />
            4 Priory Court, Poulton,<br />
            Gloucestershire, GL7 5JB, UK
          </div>

          <div className='uppercase text-right text-xs lg:text-13'>
            <Link href='/'>PARTNERS</Link><br /><br /><br />
            <Link href='/'>Privacy</Link><br />
            <Link href='/'>Useful Information</Link><br />
            <Link href='/'>Careers</Link><br />
            <Link href='/'>Privacy Policy</Link><br />
            <Link href='/'>Terms and Conditions</Link>
          </div>
        </div>

        <div className='flex-center relative mt-5 mobile:px-2'>
          <img src="/imgs/logo-green.svg" className='h-10 lg:h-16 w-auto' alt="partners" />
          <div className='flex space-x-2 lg:space-x-5 absolute right-2 lg:right-0 top-0'>
            <FontAwesomeIcon icon={faTwitter as IconProp} color='#000' className='h-4 hover-scale pointer' />
            <FontAwesomeIcon icon={faYoutube as IconProp} color='#000' className='h-4 hover-scale pointer' />
            <FontAwesomeIcon icon={faFacebookF as IconProp} color='#000' className='h-4 hover-scale pointer' />
            <FontAwesomeIcon icon={faInstagram as IconProp} color='#000' className='h-4 hover-scale pointer' />
          </div>
        </div>

        <div className='mt-10 lg:mt-16'>
          <p className='text-xs'>Partners</p>
          <div className='flex'>
            <div className='border-t border-solid border-second-gray pt-4 space-x-3 lg:space-x-6 flex items-center'>
              <img src="/imgs/partner_1.svg" className='h-3 lg:h-6 w-auto' alt="partners" />
              <img src="/imgs/partner_2.svg" className='h-3 lg:h-6 w-auto' alt="partners" />
              <img src="/imgs/partner_3.svg" className='h-3 lg:h-6 w-auto' alt="partners" />
              <img src="/imgs/partner_4.svg" className='h-3 lg:h-6 w-auto' alt="partners" />
              <img src="/imgs/partner_5.svg" className='h-3 lg:h-6 w-auto' alt="partners" />
              <img src="/imgs/partner_6.svg" className='h-3 lg:h-6 w-auto' alt="partners" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);

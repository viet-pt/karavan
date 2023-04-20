import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import useTrans from 'utils/useTrans';

const NotFoundPage = () => {
  const i18n = useTrans();

  return (
    <div className='pt-8 mobile:px-3 bg-white'>
      <div className="container">
        <div className="flex justify-center py-20 flex-col md:flex-row">
          <img src="/imgs/img_404.png" alt="404" width="320" height="180" className="mx-auto md:mx-0" />
          <div className="md:ml-12 font-semibold w-full md:w-1/3 mt-5 mt-md-0">
            <p className="text-2xl md:text-3xl px-7 md:px-0 text-center md:text-left">{i18n.IDS_NOT_FOUND_PAGE_TITLE}</p>
            <Link href="/">
              <button className="bg-primary-green text-white flex items-center px-6 py-2 mt-8 bold
                rounded btn-hover text-base md:text-lg mx-auto md:mx-0">
                <FontAwesomeIcon icon={faHome} color="#fff" className='w-8' />
                <span className="ml-3">{i18n.IDS_GO_HOME}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(NotFoundPage);

import React from 'react';
import { useState } from 'react';
import AndroidImage from 'assets/img/android.png';
import IosImage from 'assets/img/ios.png';
import { useNavigate } from 'react-router-dom';
import { HEADER_TYPE } from 'interfaces';
import { Header } from 'components';
import { useRecoilValue } from 'recoil';
import { slidetSettingState } from 'atom/sliderSetting';
import Slider from 'react-slick';

const MTutorial = () => {
  const settings = useRecoilValue(slidetSettingState);
  const navigate = useNavigate();
  const [openTab, setOpenTab] = useState<number>(1);

  return (
    <>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Activate with QR' />
      <div className='content-wrapper min-h-[calc(100vh-6rem)]'>
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <ul
              className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
              role='tablist'
            >
              <li className='-mb-px last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 block leading-normal ' +
                    (openTab === 1
                      ? 'text-[#1D1B20] dark:text-roamin-yellow-500 border-b-2 border-[#FFDE95]'
                      : 'text-[#B3B3B3] border-b-2')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                >
                  Android
                </a>
              </li>
              <li className='-mb-px last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 block leading-normal ' +
                    (openTab === 2
                      ? 'text-[#1D1B20] dark:text-roamin-yellow-500 border-b-2 border-[#FFDE95]'
                      : 'text-[#B3B3B3] border-b-2')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle='tab'
                  href='#link2'
                  role='tablist'
                >
                  iOS
                </a>
              </li>
            </ul>
            <div className='relative flex flex-col min-w-0 break-words w-full'>
              <div className='px-4 py-5 flex-auto'>
                <div className='tab-content tab-space'>
                  <div
                    className={
                      'android-device ' + (openTab === 1 ? 'block' : 'hidden')
                    }
                    id='link1'
                  >
                    {openTab == 1 && (
                      <Slider {...settings}>
                        <div>
                          <div className='image-wrapper-slider'>
                            <div className='main-image text-center'>
                              <img
                                className='mx-auto mb-4'
                                src={AndroidImage}
                                alt={AndroidImage}
                              />
                              <h3 className='text-lg font-black mt-4 dark:text-white'>
                                Turn on Your eSIM
                              </h3>
                            </div>
                            <div className='list-tutorial p-5'>
                              <ol className='list-disc list-outside text-sm font-normal mb-4 dark:text-white'>
                                <li>
                                  Go to “Settings” and tap “Connections”,
                                  thentap “SIM card manager” on your device .
                                </li>
                                <li>
                                  Tap “Add mobile plan/Add eSIM”, then tap “Scan
                                  carrier QR CODE”
                                </li>
                                <li>can the QR code, then tap “Confirm”</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='image-wrapper-slider'>
                            <div className='main-image text-center'>
                              <img
                                className='mx-auto mb-4'
                                src={AndroidImage}
                                alt={AndroidImage}
                              />
                              <h3 className='text-lg font-black mt-4 dark:text-white'>
                                Turn on Your eSIM
                              </h3>
                            </div>
                            <div className='list-tutorial p-5'>
                              <ol className='list-disc list-outside text-sm font-normal mb-4 dark:text-white'>
                                <li>
                                  Go to “Settings” and tap “Connections”,
                                  thentap “SIM card manager” on your device .
                                </li>
                                <li>
                                  Tap “Add mobile plan/Add eSIM”, then tap “Scan
                                  carrier QR CODE”
                                </li>
                                <li>can the QR code, then tap “Confirm”</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='image-wrapper-slider'>
                            <div className='main-image text-center'>
                              <img
                                className='mx-auto mb-4'
                                src={AndroidImage}
                                alt={AndroidImage}
                              />
                              <h3 className='text-lg font-black mt-4 dark:text-white'>
                                Turn on Your eSIM
                              </h3>
                            </div>
                            <div className='list-tutorial p-5'>
                              <ol className='list-disc list-outside text-sm font-normal mb-4 dark:text-white'>
                                <li>
                                  Go to “Settings” and tap “Connections”,
                                  thentap “SIM card manager” on your device .
                                </li>
                                <li>
                                  Tap “Add mobile plan/Add eSIM”, then tap “Scan
                                  carrier QR CODE”
                                </li>
                                <li>can the QR code, then tap “Confirm”</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    )}
                  </div>
                  <div
                    className={
                      'ios-device ' + (openTab === 2 ? 'block' : 'hidden')
                    }
                    id='link2'
                  >
                    {openTab == 2 && (
                      <Slider {...settings}>
                        <div>
                          <div className='image-wrapper-slider'>
                            <div className='main-image text-center'>
                              <img
                                className='mx-auto mb-4'
                                src={IosImage}
                                alt={IosImage}
                              />
                              <h3 className='text-lg font-black mt-4 dark:text-white'>
                                Turn on Your eSIM
                              </h3>
                            </div>
                            <div className='list-tutorial p-5'>
                              <ol className='list-disc list-outside text-sm font-normal mb-4 dark:text-white'>
                                <li>
                                  Go to “Settings” and tap “Connections”,
                                  thentap “SIM card manager” on your device .
                                </li>
                                <li>
                                  Tap “Add mobile plan/Add eSIM”, then tap “Scan
                                  carrier QR CODE”
                                </li>
                                <li>can the QR code, then tap “Confirm”</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='image-wrapper-slider'>
                            <div className='main-image text-center'>
                              <img
                                className='mx-auto mb-4'
                                src={IosImage}
                                alt={IosImage}
                              />
                              <h3 className='text-lg font-black mt-4 dark:text-white'>
                                Turn on Your eSIM
                              </h3>
                            </div>
                            <div className='list-tutorial p-5'>
                              <ol className='list-disc list-outside text-sm font-normal mb-4 dark:text-white'>
                                <li>
                                  Go to “Settings” and tap “Connections”,
                                  thentap “SIM card manager” on your device .
                                </li>
                                <li>
                                  Tap “Add mobile plan/Add eSIM”, then tap “Scan
                                  carrier QR CODE”
                                </li>
                                <li>can the QR code, then tap “Confirm”</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className='image-wrapper-slider'>
                            <div className='main-image text-center'>
                              <img
                                className='mx-auto mb-4'
                                src={IosImage}
                                alt={IosImage}
                              />
                              <h3 className='text-lg font-black mt-4 dark:text-white'>
                                Turn on Your eSIM
                              </h3>
                            </div>
                            <div className='list-tutorial p-5'>
                              <ol className='list-disc list-outside text-sm font-normal mb-4 dark:text-white'>
                                <li>
                                  Go to “Settings” and tap “Connections”,
                                  thentap “SIM card manager” on your device .
                                </li>
                                <li>
                                  Tap “Add mobile plan/Add eSIM”, then tap “Scan
                                  carrier QR CODE”
                                </li>
                                <li>can the QR code, then tap “Confirm”</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MTutorial;

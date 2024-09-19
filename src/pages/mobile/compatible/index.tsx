import React from 'react';
import { useState } from 'react';
import { HEADER_TYPE } from 'interfaces';
import { Header } from 'components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MCompatible = () => {
  const [openTab, setOpenTab] = useState<number>(1);
  const [phone, setPhone] = useState<number>(0);
  const [tablet, setTablet] = useState<number>(0);

  const show = (value: number) => {
    value == phone ? setPhone(0) : setPhone(value);
  };
  const showTablet = (value: number) => {
    value == tablet ? setTablet(0) : setTablet(value);
  };

  return (
    <>
      <Header
        headerType={HEADER_TYPE.DETAIL}
        headerTitle='Device Compatible    '
      />
      <div className='content-wrapper p-6 min-h-[calc(100vh-4rem)]'>
        <div className='keterangan-section dark:text-white  '>
          <p className='mb-4 text-sm font-[350]'>
            To use an eSIM, your device must be carrier-unlocked and
            eSIM-compatible. Compatibility is only set by the device
            manufacturer, or in some cases, by the local carrier of the country
            in which you bought your phone (typically, if you have a contract
            with a carrier that finances your phone, your device would be locked
            and cannot use eSIM).
          </p>
          <p className='mb-4 text-sm font-[350]'>
            Below is a list of some brands of iOS and Android devices that are
            compatible using eSIM.
          </p>
          <p className='mb-4 text-sm font-[350]'>
            If your device is not listed below and you would like to confirm if
            it supports eSIM, please feel free to{' '}
            <a className='text-roamin-yellow-500' href=''>
              Contact Us.
            </a>
          </p>
        </div>
        <div className='tab-section flex flex-wrap'>
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
                      ? 'text-[#1D1B20] dark:text-roamin-yellow-500 border-b-2 border-roamin-yellow-500'
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
                  Phones
                </a>
              </li>
              <li className='-mb-px last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 block leading-normal ' +
                    (openTab === 2
                      ? 'text-[#1D1B20] dark:text-roamin-yellow-500 border-b-2 border-roamin-yellow-500'
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
                  Tablet
                </a>
              </li>
            </ul>
            <div className='relative flex flex-col min-w-0 break-words w-full'>
              <div className='flex-auto'>
                <div className='tab-content pt-4 tab-space'>
                  <div
                    className={
                      'text-center ' + (openTab === 1 ? 'block' : 'hidden')
                    }
                    id='link1'
                  >
                    <div className='listPhone border border-roamin-neutral-600 dark:border-roamin-dark-400 bg-white dark:bg-roamin-dark-700 dark:text-white divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 rounded-[9px]'>
                      <div
                        onClick={() => show(1)}
                        className='cardContent flex justify-between dark:border-roamin-dark-400 px-3 py-3 items-center'
                      >
                        <h6 className='text-[16px] font-medium'>Android</h6>
                        {phone == 1 ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </div>
                      <div
                        className={`contentHide ${phone == 1 ? 'block' : 'hidden'} text-left p-4`}
                      >
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Samsung</li>
                          <li>Samsung Galaxy S24 Ultra</li>
                          <li>Samsung Galaxy S24+</li>
                          <li>Samsung Galaxy S24</li>
                          <li>Samsung Galaxy S23 Ultra</li>
                          <li>Samsung Galaxy S23+</li>
                          <li>Samsung Galaxy S23</li>
                          <li>Samsung Galaxy S22 Ultra</li>
                          <li>Samsung Galaxy S22+</li>
                          <li>Samsung Galaxy S22</li>
                          <li>Samsung Galaxy S21 5G</li>
                          <li>Samsung Galaxy S21+ 5G</li>
                          <li>Samsung Galaxy S21 Ultra 5G</li>
                          <li>Samsung Galaxy S20</li>
                          <li>Samsung Galaxy S20+</li>
                          <li>Samsung Galaxy S20 Ultra</li>
                          <li>Samsung Galaxy Z Fold 5</li>
                          <li>Samsung Galaxy Z Fold 4</li>
                          <li>Samsung Galaxy Z Fold 3 5G</li>
                          <li>Samsung Galaxy Z Fold 2</li>
                          <li>Samsung Galaxy Fold</li>
                          <li>Samsung Galaxy Z Flip 5</li>
                          <li>Samsung Galaxy Z Flip 4</li>
                          <li>Samsung Galaxy Z Flip 3 5G Fold</li>
                          <li>Samsung Galaxy Z Flip 3 5G</li>
                          <li>Samsung Galaxy Z Flip</li>
                          <li>Samsung Galaxy A54 5G</li>
                          <li>Samsung Galaxy Note20</li>
                          <li>Samsung Galaxy Note20 Ultra</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the time of writing: Galaxy S20 FE all models, Galaxy S21 FE all models, Galaxy S20/S21 (US), Galaxy Z Flip 5G (US), Note 20 Ultra (US & Hong Kong), Galaxy Z Fold 2 (US & Hong Kong).
                        </p>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Google</li>
                          <li>Google Pixel 8 Pro</li>
                          <li>Google Pixel 8</li>
                          <li>Google Pixel Fold</li>
                          <li>Google Pixel 7a</li>
                          <li>Google Pixel 7 Pro</li>
                          <li>Google Pixel 7</li>
                          <li>Google Pixel 6 Pro</li>
                          <li>Google Pixel 6</li>
                          <li>Google Pixel 6a</li>
                          <li>Google Pixel 5</li>
                          <li>Google Pixel 4</li>
                          <li>Google Pixel 4a</li>
                          <li>Google Pixel 4 X</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the time of writing: Pixel 3 from Australia, Japan, and Taiwan, or from any US / Canadian carriers except Sprint and Google Fi; Pixel 3a from South East Asia, Japan, and Verizon US
                        </p>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Huawei</li>
                          <li>P40, P40 Pro</li>
                          <li>Mate 40 Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The P40 Pro+ and P50 Pro are not compatible with eSIM at the time of writing.
                        </p>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Motorola</li>
                          <li>Motorola Razr</li>
                          <li>Motorola Razr 5G</li>
                          <li>Motorola RAZR 40</li>
                          <li>Motorola RAZR 40 Ultra</li>
                          <li>Motorola EDGE 40 Pro</li>
                          <li>Motorola G53 5G</li>
                          <li>Motorola G52J 5G</li>
                          <li>Motorola G53J 5G</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Oppo</li>
                          <li>Oppo Find N2 Flip</li>
                          <li>Oppo Find X3 Pro</li>
                          <li>Oppo Find X5</li>
                          <li>Oppo Find X5 Pro</li>
                          <li>Oppo Reno 5 A</li>
                          <li>Oppo A55s 5G</li>
                          <li>Oppo Reno 6 Pro 5G</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the time of writing: Oppo Find X5 Lite.
                        </p>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Sony</li>
                          <li>Xperia 10 III Lite</li>
                          <li>Xperia 1 IV</li>
                          <li>Xperia 5 IV</li>
                          <li>Xperia 10 IV</li>
                          <li>Xperia 1 V</li>
                          <li>Xperia 5 V</li>
                          <li>Xperia 10 V</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Nokia</li>
                          <li>Nokia XR21</li>
                          <li>Nokia G60 5G</li>
                          <li>Nokia X30 5G</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Rakuten</li>
                          <li>Rakuten Big</li>
                          <li>Rakuten Mini</li>
                          <li>Rakuten Big-S</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Nuu</li>
                          <li>X5</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Sharp</li>
                          <li>Aquos Sense 4 lite</li>
                          <li>Aquos Sense 7</li>
                          <li>Aquos R8 Pro</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Surface</li>
                          <li>Surface Duo</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Doogee</li>
                          <li>Doogee v30</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Fairphone</li>
                          <li>Fairphone 4</li>
                          <li>Fairphone 5</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Gemini</li>
                          <li>Gemini PDA</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Gemini PDA</li>
                          <li>Gemini PDA</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Hammer</li>
                          <li>Hammer Exporer PRO</li>
                          <li>Hammer Blade 3</li>
                          <li>Hammer Blade 5G</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Honor</li>
                          <li>HONOR Magic 4 Pro</li>
                          <li>HONOR Magic 5 Pro</li>
                        </ol>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>OnePlus</li>
                          <li>OnePlus 12</li>
                          <li>OnePlus 11 5G</li>
                        </ol>
                      </div>
                      <div
                        onClick={() => show(2)}
                        className='cardContent flex justify-between dark:border-roamin-dark-400 px-3 py-3 items-center'
                      >
                        <h6 className='text-[16px] font-medium'>iOS</h6>
                        {phone == 2 ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </div>
                      <div
                        className={`contentHide ${phone == 2 ? 'block' : 'hidden'} text-left p-4`}
                      >
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>iPhone</li>
                          <li>iPhone 15 Pro Max</li>
                          <li>iPhone 15 Pro</li>
                          <li>iPhone 15 Plus</li>
                          <li>iPhone 15</li>
                          <li>iPhone 14 Pro Max</li>
                          <li>iPhone 14 Pro</li>
                          <li>iPhone 14 Plus</li>
                          <li>iPhone 14</li>
                          <li>iPhone 13 Pro Max</li>
                          <li>iPhone 13 Pro</li>
                          <li>iPhone 13 Mini</li>
                          <li>iPhone 13</li>
                          <li>iPhone 12 Pro Max</li>
                          <li>iPhone 12 Pro</li>
                          <li>iPhone 12 Mini</li>
                          <li>iPhone 12</li>
                          <li>iPhone 11 Pro Max</li>
                          <li>iPhone 11 Pro</li>
                          <li>iPhone 11</li>
                          <li>iPhone XS Max</li>
                          <li>iPhone XS</li>
                          <li>iPhone XR</li>
                          <li>iPhone SE (2020 or 2022)</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          iPhones purchased from China or Hong Kong are not eSIM-compatible at the time of writing, except for iPhone 13 mini, iPhone 12 mini, iPhone SE 2020, and iPhone XS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      'text-center ' + (openTab === 2 ? 'block' : 'hidden')
                    }
                    id='link2'
                  >
                    <div className='listTablet border border-roamin-neutral-600 dark:border-roamin-dark-400 bg-white dark:bg-roamin-dark-700 dark:text-white divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 rounded-[9px]'>
                      <div
                        onClick={() => showTablet(1)}
                        className='cardContent flex justify-between px-3 py-3 items-center'
                      >
                        <h6 className='text-[16px] font-medium'>Samsung</h6>
                        {tablet == 1 ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </div>
                      <div
                        className={`contentHide ${tablet == 1 ? 'block' : 'hidden'} text-left p-4`}
                      >
                        <ol className='list-disc list-inside text-sm font-normal mb-4'>
                          <li>Samsung Galaxy Tab S9</li>
                          <li>Samsung Galaxy Tab S9+</li>
                          <li>Samsung Galaxy Tab S9 Ultra</li>
                          <li>Samsung Galaxy Tab S9 FE</li>
                          <li>Samsung Galaxy Tab S9 FE+</li>
                        </ol>
                      </div>
                      <div
                        onClick={() => showTablet(2)}
                        className='cardContent flex justify-between border border-t-[#E2DFDF] px-3 py-3 items-center'
                      >
                        <h6 className='text-[16px] font-medium'>Ipad</h6>
                        {tablet == 2 ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </div>
                      <div
                        className={`contentHide ${tablet == 2 ? 'block' : 'hidden'} text-left p-4`}
                      >
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>iPad Pro 11-inch (1st generation or later)</li>
                          <li>iPad Pro 12.9-inch (3rd generation or later)</li>
                          <li>iPad Air (3rd generation or later)</li>
                          <li>iPad (7th generation or later)</li>
                          <li>iPad mini (5th generation or later)</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          Only supports cellular-enabled (WiFi + Cellular models) eSIM-compatible models
                        </p>
                      </div>
                    </div>
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

export default MCompatible;

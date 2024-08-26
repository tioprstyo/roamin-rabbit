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
      <div className='content-wrapper p-6 min-h-[calc(100vh-6rem)]'>
        <div className='keterangan-section'>
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
            <a className='text-[#FFDE95]' href=''>
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
                      ? 'text-[#1D1B20] border-b-2 border-[#FFDE95]'
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
                      ? 'text-[#1D1B20] border-b-2 border-[#FFDE95]'
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
                    <div className='listPhone border border-[#E2DFDF] bg-white rounded-[9px]'>
                      <div
                        onClick={() => show(1)}
                        className='cardContent flex justify-between border border-t-[#E2DFDF] px-3 py-3 items-center'
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
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the
                          time of writing: Pixel 3 from Australia, Japan, and
                          Taiwan, or from any US / Canadian carriers except
                          Sprint and Google Fi; Pixel 3a from South East Asia,
                          Japan, and Verizon US.
                        </p>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the
                          time of writing: Pixel 3 from Australia, Japan, and
                          Taiwan, or from any US / Canadian carriers except
                          Sprint and Google Fi; Pixel 3a from South East Asia,
                          Japan, and Verizon US.
                        </p>
                      </div>
                      <div
                        onClick={() => show(2)}
                        className='cardContent flex justify-between border border-t-[#E2DFDF] px-3 py-3 items-center'
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
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the
                          time of writing: Pixel 3 from Australia, Japan, and
                          Taiwan, or from any US / Canadian carriers except
                          Sprint and Google Fi; Pixel 3a from South East Asia,
                          Japan, and Verizon US.
                        </p>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the
                          time of writing: Pixel 3 from Australia, Japan, and
                          Taiwan, or from any US / Canadian carriers except
                          Sprint and Google Fi; Pixel 3a from South East Asia,
                          Japan, and Verizon US.
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
                    <div className='listTablet border border-[#E2DFDF] bg-white rounded-[9px]'>
                      <div
                        onClick={() => showTablet(1)}
                        className='cardContent flex justify-between border border-t-[#E2DFDF] px-3 py-3 items-center'
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
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the
                          time of writing: Pixel 3 from Australia, Japan, and
                          Taiwan, or from any US / Canadian carriers except
                          Sprint and Google Fi; Pixel 3a from South East Asia,
                          Japan, and Verizon US.
                        </p>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the
                          time of writing: Pixel 3 from Australia, Japan, and
                          Taiwan, or from any US / Canadian carriers except
                          Sprint and Google Fi; Pixel 3a from South East Asia,
                          Japan, and Verizon US.
                        </p>
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
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the
                          time of writing: Pixel 3 from Australia, Japan, and
                          Taiwan, or from any US / Canadian carriers except
                          Sprint and Google Fi; Pixel 3a from South East Asia,
                          Japan, and Verizon US.
                        </p>
                        <ol className='list-disc list-inside [&>*:first-child]:list-none [&>*:first-child]:text-sm [&>*:first-child]:font-extrabold text-sm font-normal mb-4'>
                          <li>Xiaomi</li>
                          <li>Xiaomi 14 Global Version</li>
                          <li>Xiaomi 13, 13 Lite, 13 Pro</li>
                          <li>Xiaomi 12T Pro</li>
                        </ol>
                        <p className='text-sm font-normal mb-4'>
                          <b className='font-extrabold block'>Important</b>
                          The following models are not eSIM-compatible at the
                          time of writing: Pixel 3 from Australia, Japan, and
                          Taiwan, or from any US / Canadian carriers except
                          Sprint and Google Fi; Pixel 3a from South East Asia,
                          Japan, and Verizon US.
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

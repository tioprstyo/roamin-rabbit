import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components';
import { CountriesProps, CountriesSelect, HEADER_TYPE } from 'interfaces';
import ReactFlagsSelect from 'react-flags-select';
import { useGetCountries } from 'hooks';
import { parseQueryParams } from 'services';
import { Link } from "react-router-dom";

const MHome = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState<CountriesSelect>({
    countryId: '',
    isoCode: '',
  });
  const [kode, setKode] = useState<string[]>([]);
  const { data, fetching: fetchingCountry } = useGetCountries();

  const onSelect = (code: string) => {
    const selectedData = data?.find((e: CountriesProps) => e.isoCode == code);
    setSelect({
      ...select,
      countryId: selectedData?.id || '',
      isoCode: selectedData?.isoCode || '',
    });
  };

  useEffect(() => {
    if (!data) {
      fetchingCountry();
    } else {
      setKode(
        data.map((code) => {
          return code.isoCode;
        }),
      );
      setSelect({
        ...select,
        countryId: data[0].id,
        isoCode: data[0].isoCode,
      });
    }
  }, [data]);

  return (
    <>
      <Header headerType={HEADER_TYPE.DEFAULT} headerTitle='Roaming Rabbit' />
      <div className='content-wrapper p-4 pb-[120px] min-h-[calc(100vh-6rem)]'>
        <div className='heading'>
          <span className='font-normal text-[32px] leading-10 text-black dark:text-white'>
            Get easily to
            <br />
            <h1 className='font-black text-black dark:text-roamin-yellow-500'>
              connect with others
            </h1>
            upon arrival
          </span>
        </div>
        <div className='form-content mt-11'>
          <div className='form mb-6 flex flex-col gap-1'>
            <label
              className='text-[14px] font-normal text-black dark:text-white'
              htmlFor=''
            >
              Choose your trip
            </label>
            <ReactFlagsSelect
              selected={select.isoCode}
              onSelect={onSelect}
              countries={kode}
              searchable
              selectButtonClassName='!bg-white'
            />
          </div>
          <div className='form'>
            <button
              onClick={() =>
                navigate(`/listing${parseQueryParams({ ...select })}`)
              }
              className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
              type='button'
            >
              Search
            </button>
          </div>
        </div>
        <div className='registrer mt-16 text-center'>
          <span className='text-sm font-medium text-black dark:text-white'>
            Does my device support it?
          </span>
          <br />
          <Link
            className='text-sm text-[#5F97BC] dark:text-roamin-yellow-500 underline decoration-solid decoration-[#5F97BC] dark:decoration-roamin-yellow-500'
            to='compatible'
          >
            See list of devices that support esim
          </Link>
        </div>
      </div>
    </>
  );
};

export default MHome;

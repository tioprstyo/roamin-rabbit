import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components';
import { FilterListProps, FilterProps, HEADER_TYPE } from 'interfaces';
import { useRecoilValue } from 'recoil';
import { filterByState } from 'atom/filterBy';
import { parseQueryParams } from 'services';

const MFilter = ({
  handleBackButton,
  packageFilter,
  params,
}: FilterListProps) => {
  const navigate = useNavigate();
  const {
    quotaData,
    validityDay,
    network,
    speed,
    planType,
    quotaTheteringNominal,
  } = params;
  const getFilterLabel = useRecoilValue(filterByState);
  const [selectedFilter, setSelectedFilter] = useState({
    quotaData: quotaData || '',
    validityDay: validityDay || '',
    network: network || '',
    speed: speed || '',
    planType: planType || '',
    quotaTheteringNominal: quotaTheteringNominal || '',
  });
  const [filterPriceRange, setFilterPriceRange] = useState({
    priceRangeMin: 0,
    priceRangeMax: 0,
  });

  const filterApply = () => {
    const paramsOfFilterPackages = {
      ...params,
      ...selectedFilter,
      priceRangeMin: `${filterPriceRange.priceRangeMin}`,
      priceRangeMax: `${filterPriceRange.priceRangeMax}`,
    };

    handleBackButton();
    navigate(`/listing${parseQueryParams(paramsOfFilterPackages)}`);
  };

  return (
    <>
      <Header
        headerType={HEADER_TYPE.DETAIL}
        headerTitle='Filter'
        handleBackButton={() => handleBackButton()}
      />
      <div className='content-wrapper p-4 min-h-[calc(100vh-6rem)] relative bg-white dark:bg-roamin-dark-600'>
        <div className='pb-[80px]'>
          <div className='heading py-7 border-b border-[#CECECE] dark:border-roamin-dark-400'>
            <h6 className='text-xl font-semibold text-black dark:text-white'>
              Choose Your Package Plan
            </h6>
          </div>
          <div className='network-section py-7'>
            <div className='filter grid grid-cols-2 gap-4'>
              {packageFilter &&
                Object.keys(packageFilter).map((label: string, i: number) => (
                  <div className='form flex flex-col gap-2' key={`filter-${i}`}>
                    <label className='text-[14px] font-normal text-black dark:text-white'>
                      {getFilterLabel[label as keyof typeof packageFilter]}
                    </label>
                    <div className='flex border border-roamin-neutral-500 dark:border-roamin-dark-400 bg-white rounded-lg pl-3 pr-1.5 py-3'>
                      <select
                        name={label}
                        id={`select-${label}`}
                        value={
                          selectedFilter[label as keyof typeof packageFilter]
                        }
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setSelectedFilter({
                            ...selectedFilter,
                            [label as keyof typeof packageFilter]:
                              e.target.value,
                          });
                        }}
                        className='appearance-none row-start-1 col-start-1 mt-1 placeholder-blueGray-300 text-blueGray-600 relative text-sm outline-none focus:outline-none focus:ring-0 w-full'
                      >
                        <option value='' disabled hidden>
                          Select{' '}
                          {getFilterLabel[label as keyof typeof packageFilter]}
                        </option>
                        {packageFilter[label as keyof typeof packageFilter].map(
                          (e: FilterProps) => (
                            <option key={`key-${e.value}-value`} value={e.key}>
                              {e.value}
                            </option>
                          ),
                        )}
                      </select>
                      <KeyboardArrowDownIcon className='pointer-events-none row-start-1 col-start-1 self-center' />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='price-form py-7'>
            <h6 className='text-sm font-extrabold mb-4 text-black dark:text-white'>
              Price Range ($)
            </h6>
            <div className='filter grid grid-cols-2 gap-4 pt-4 border-t border-[#CECECE] dark:border-roamin-dark-400'>
              <div className='form'>
                <label className='text-[14px] font-normal mb-3 text-black dark:text-white'>
                  From
                </label>
                <input
                  type='text'
                  placeholder='Full Name'
                  value={filterPriceRange.priceRangeMin}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterPriceRange({
                      ...filterPriceRange,
                      priceRangeMin: Number(e.target.value),
                    });
                  }}
                  className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-roamin-neutral-500 dark:border-roamin-dark-400 outline-none focus:outline-none focus:ring-0 w-full'
                />
              </div>
              <div className='form'>
                <label className='text-[14px] font-normal mb-3 text-black dark:text-white'>
                  To
                </label>
                <input
                  type='text'
                  placeholder='Full Name'
                  value={filterPriceRange.priceRangeMax}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterPriceRange({
                      ...filterPriceRange,
                      priceRangeMax: Number(e.target.value),
                    });
                  }}
                  className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-roamin-neutral-500 dark:border-roamin-dark-400 outline-none focus:outline-none focus:ring-0 w-full'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='buy-section max-w-screen-md mx-auto p-4 border-t border-[#CECECE] dark:border-roamin-dark-400 fixed left-0 right-0 bottom-0 bg-white bg-white dark:bg-roamin-dark-600 text-black'>
          <button
            onClick={filterApply}
            className='bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
            type='button'
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default MFilter;

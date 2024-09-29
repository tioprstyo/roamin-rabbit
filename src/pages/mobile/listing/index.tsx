import React, { useEffect, useState } from 'react';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';
import { Header } from 'components';
import {
  CountriesProps,
  CountriesSelect,
  FilterProps,
  HEADER_TYPE,
  ListParamsProps,
} from 'interfaces';
import { useRecoilValue } from 'recoil';
import { sliderSettingState } from 'atom/sliderSetting';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetCountries, useGetPackageFilter, useGetPackageList } from 'hooks';
import CircularProgress from '@mui/material/CircularProgress';
import { PackagesProps } from 'interfaces';
import MFilter from 'pages/mobile/filter';
import { filterByState } from 'atom/filterBy';
import { parseQueryParams } from 'services';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const MListing = () => {
  const navigate = useNavigate();
  const settings = useRecoilValue(sliderSettingState);
  const getFilterLabel = useRecoilValue(filterByState);
  const [searchParams] = useSearchParams();
  const { data, isLoading, fetching } = useGetPackageList();
  const { data: packageFilter, fetching: fetchPackageFilter } =
    useGetPackageFilter();
  const { data: countries, fetching: getCountries } = useGetCountries();
  const { data: packageData } = data;
  const [code, setCode] = useState<string[]>([]);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [selectedCountry, setSelectCountry] = useState<CountriesSelect>({
    countryId: '',
    isoCode: '',
  });
  const params: ListParamsProps = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  useEffect(() => {
    fetching(params);
    fetchPackageFilter(params);
    getCountries();
  }, [searchParams]);

  useEffect(() => {
    if (countries) {
      setCode(
        countries.map((item) => {
          return item.isoCode;
        }),
      );
      setSelectCountry({
        ...selectedCountry,
        countryId: params.countryId,
        isoCode: params.isoCode,
      });
    }
  }, [countries]);

  const onSelectedCountry = (item: string) => {
    const selectedData = countries?.find(
      (e: CountriesProps) => e.isoCode == item,
    );

    const paramsOfFilterPackages = {
      countryId: selectedData?.id || '',
      isoCode: selectedData?.isoCode || '',
    };

    setSelectCountry(paramsOfFilterPackages);
    navigate(`/listing${parseQueryParams(paramsOfFilterPackages)}`);
  };

  const isFilterExist = () => {
    const findExistFilter: string[] = [];
    const defaultFilter = Object.keys(getFilterLabel);
    defaultFilter.map((key: string) => {
      if (Object.hasOwn(getFilterLabel, key) && params[key] && packageFilter) {
        const getFilterValues = packageFilter[
          key as keyof typeof packageFilter
        ].filter((e: FilterProps) => e.key === params[key]);
        findExistFilter.push(getFilterValues[0].value);
      }
    });
    return findExistFilter;
  };

  const handleBackButton = () => {
    setIsShowFilter(false);
  };

  return (
    <>
      <Header headerType={HEADER_TYPE.DEFAULT} headerTitle='Roaming Rabbit' />
      <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-6rem)]'>
        <div className='form-content grid grid-cols-4 gap-3 items-end'>
          <div className='form col-span-3 flex flex-col gap-2'>
            <label
              className='text-[14px] font-normal text-black dark:text-white'
              htmlFor=''
            >
              Choose your trip
            </label>
            <ReactFlagsSelect
              selected={selectedCountry.isoCode}
              onSelect={onSelectedCountry}
              countries={code}
              searchable
              className='!pb-0.5'
              selectButtonClassName='!bg-white !py-1.5'
            />
          </div>
          <div className='form'>
            <button
              className={`${isFilterExist().length > 0 ? 'bg-roamin-yellow-500' : 'bg-white'} color-[#000000] font-extrabold uppercase text-sm px-3 py-3 rounded-[9px] w-full text-[14px] border border-[#E3E3E3]`}
              type='button'
              onClick={() => setIsShowFilter(true)}
            >
              <TuneIcon />
            </button>
          </div>
        </div>
        <div className='flex flex-row gap-3 my-3 overflow-x-auto'>
          {isFilterExist().map((item: string, idx: number) => (
            <div
              key={`item-filter-${idx}`}
              className='w-max px-5 py-1.5 bg-roamin-yellow-500 rounded text-sm font-bold'
            >
              {item}
            </div>
          ))}
        </div>
        {isFilterExist().length > 0 && (
          <div className='text-center w-full mt-5'>
            <button
              className='text-black dark:text-roamin-neutral-700 border-b border-b-roamin-neutral-600 dark:border-b-roamin-neutral-700'
              onClick={() => onSelectedCountry(selectedCountry.isoCode)}
            >
              Clear Filter
            </button>
          </div>
        )}

        {isLoading ? (
          <div className='loading mt-10 flex justify-center'>
            <CircularProgress />
          </div>
        ) : (
          <>
            {packageData && data?.data && (
              <>
                {Object.keys(packageData).map((lists, i) => (
                  <div className='listing' key={`${i}-list`}>
                    <Slider
                      {...settings}
                      dots={packageData[lists].length > 1 ? true : false}
                      infinite={packageData[lists].length > 1 ? true : false}
                    >
                      {packageData[lists].map(
                        (li: PackagesProps, j: number) => (
                          <div key={j}>
                            <div className='shadow listCard border border-roamin-neutral-600 dark:border-roamin-dark-400 divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400 bg-white dark:bg-roamin-dark-700 rounded-[9px] mt-5'>
                              <div className='cardHeader p-4 flex items-center text-black dark:text-white'>
                                <div className='w-[103px] h-[63px] bg-[#E7E7E7] rounded-[9px]'>
                                  {li?.pic && (
                                    <img
                                      className='object-cover w-[103px] h-[63px] rounded-[9px]'
                                      src={li?.pic}
                                      alt=''
                                    />
                                  )}
                                </div>
                                <h1 className='ml-[20px] text-xl font-extrabold'>
                                  {li.name}
                                </h1>
                              </div>
                              <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                                <span className='flex'>
                                  <SignalCellularAltIcon className='mr-3' />
                                  Data
                                </span>
                                <h3 className='text-[16px] font-black'>
                                  {li.quotaData}
                                </h3>
                              </div>
                              <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                                <span className='flex'>
                                  <CalendarMonthIcon className='mr-3' />
                                  Validity
                                </span>
                                <h3 className='text-[16px] font-black'>
                                  {li.validityDay}
                                </h3>
                              </div>
                              <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                                <span className='flex'>
                                  <LanguageIcon className='mr-3' />
                                  Network
                                </span>
                                <h3 className='text-[16px] font-black'>
                                  {li.network}
                                </h3>
                              </div>
                              <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                                <span className='flex'>
                                  <PublicIcon className='mr-3' />
                                  Coverage
                                </span>
                                <h3 className='text-[16px] font-black'>
                                  {li.speed}
                                </h3>
                              </div>
                              <div className='cardContent flex justify-between px-4 py-6 text-black dark:text-white'>
                                <span className='flex'>
                                  <PaymentsOutlinedIcon className='mr-3' />
                                  Price
                                </span>
                                <h3 className='text-[16px] font-black'>
                                  {li.price}
                                </h3>
                              </div>
                              <div className='cardButton flex justify-center px-4 py-6'>
                                <button
                                  onClick={() =>
                                    navigate(`/detail/package/${li.id}`)
                                  }
                                  className='bg-roamin-yellow-500 color-black font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]'
                                  type='button'
                                >
                                  Choose
                                </button>
                              </div>
                            </div>
                          </div>
                        ),
                      )}
                    </Slider>
                  </div>
                ))}
              </>
            )}
          </>
        )}
        <Dialog
          fullScreen
          open={isShowFilter}
          onClose={() => setIsShowFilter(false)}
          TransitionComponent={Transition}
          className='max-w-screen-md mx-auto'
          sx={{
            '& .MuiDialog-container': {
              maxWidth: 'inherit',
            },
            '& .MuiPaper-root': {
              maxWidth: 'inherit',
            },
          }}
        >
          <MFilter
            handleBackButton={handleBackButton}
            packageFilter={packageFilter}
            params={params}
          />
        </Dialog>
      </div>
    </>
  );
};

export default MListing;

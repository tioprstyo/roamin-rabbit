import React, { useEffect, useState } from 'react';
import { Header, ModalPayment } from 'components';
import { HEADER_TYPE } from 'interfaces';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import VisaImage from 'assets/img/visa.png';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ListParamsProps } from 'interfaces';
import { parseQueryParams } from 'services';
import { useOrder } from 'hooks';
import Dialog from '@mui/material/Dialog';
import Cookies from 'js-cookie';

const MConfirm = () => {
  const token = Cookies.get('token')
  const navigate = useNavigate();
  const {data, fetching} = useOrder();
  const [modal, setModal] = useState(false)
  const [checked, setChecked] = useState({
    compatibles: false,
    terms: false,
  });
  const [order, setOrder] = useState({
    packageId: '',
    promoCode: '',
    paymentMethod: 'applepay'
  })
  const [paymentMeta, setPaymentMeta] = useState({
    in: '',
    work: '',
    progress: ''
  })
  const { compatibles, terms } = checked;
  const [searchParams] = useSearchParams();
  const params: ListParamsProps = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  useEffect(() => {
    setOrder({
      ...order,
      packageId: params.packageId,
      promoCode: params?.promoCode?.toLocaleUpperCase() || 'Coupon'
    })
  }, [searchParams])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClose = () => {
    setModal(false);
    navigate('/history')
  };

  const submit = () => {
    const payment = {
      ...order,
      paymentMetadata: {
        ...paymentMeta
      }
    }

    if(token){
      fetching(payment);
      setModal(true);
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Order Details' />
      <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-700 min-h-[calc(100vh-4rem)] pb-28'>
        <div className='package-plan mt-4'>
          <h2 className='text-lg font-extrabold mb-2 dark:text-white'>Package Plan</h2>
          <div className='listCard border border-[#E2DFDF] bg-white dark:bg-roamin-dark-700 dark:text-white rounded-[9px]'>
            <div className='cardHeader p-4 grid grid-cols-4 gap-2 items-center'>
              <div className='square-section'>
                <div className='w-full h-[63px] bg-[#E7E7E7] rounded-[9px]'></div>
              </div>
              <div className='detail-section col-span-2'>
                <b className='text-[13px] font-black'>Sobat Halo</b>
                <p className='text-[13px] font-normal'>
                  20 GB - Data, Calls, Text
                </p>
                <p className='text-[13px] font-normal'>30 Days - Validity</p>
              </div>
              <div className='price-section'>
                <b className='text-[15px] font-black'>$ 500.00</b>
              </div>
            </div>
          </div>
        </div>
        <div className='order-infomation mt-4'>
          <h2 className='text-lg font-extrabold mb-2 dark:text-white'>Order Summary</h2>
          <div className='card border border-[#E2DFDF] bg-white dark:bg-roamin-dark-700 dark:text-white rounded-[9px] mb-3'>
            <div className='cardContent flex flex-row justify-between items-start px-3 py-3'>
              <p className='text-sm font-medium'>Subtotal</p>
              <h6 className='text-base font-medium'>$ 50.00</h6>
            </div>
            <div className='cardContent flex flex-row justify-between items-start px-3 py-3'>
              <p className='text-sm font-medium'>Taxes & Service Fee</p>
              <h6 className='text-base font-medium'>Included</h6>
            </div>
            <div className='cardContent flex flex-row justify-between items-start border-t border-t-[#E2DFDF] px-3 py-3'>
              <p className='text-base font-medium'>Total</p>
              <h6 className='text-base font-medium'>$ 50.00</h6>
            </div>
          </div>
        </div>
        <div className='payment-detail mt-4'>
          <h2 className='text-lg font-extrabold mb-2 dark:text-white'>Payment Details</h2>
          <div className='listCard border border-[#E2DFDF] bg-white dark:bg-roamin-dark-700 dark:text-white rounded-[9px]'>
            <div className='cardContent flex justify-between p-4 items-center'>
              <span className='text-base font-medium'>Credit Card</span>
              <p className='text-base font-medium inline-flex'>
                <img src={VisaImage} alt='' /> **** 7842{' '}
                <ChevronRightOutlinedIcon className='ml-2' />
              </p>
            </div>
          </div>
        </div>
        <div className='promo mt-4'>
          <h2 className='text-lg font-extrabold mb-2 dark:text-white'>Promo</h2>
          <div onClick={() => navigate(`/coupon${parseQueryParams(params)}`)} className='listCard border border-[#E2DFDF] bg-white dark:bg-roamin-dark-700 dark:text-white rounded-[9px]'>
            <div className='cardContent flex justify-between p-4 items-center'>
              <span className='text-base font-medium'>{order.promoCode}</span>
              <ChevronRightOutlinedIcon />
            </div>
          </div>
        </div>
        <div className='checkbos-section mt-4 grid gap-y-4 justify-items-start'>
          <div className='check-form flex flex-row-reverse items-baseline'>
            <label
              htmlFor='check1'
              className='flex items-center text-sm font-[350] dark:text-white'
            >
              By proceeding with this order, I acknowledge that I have accepted
              and read the device compatible
            </label>
            <input
              checked={compatibles}
              onChange={handleChange}
              className='mr-3'
              type='checkbox'
              name='compatibles'
              id='check1'
            />
          </div>
          <div className='check-form flex flex-row-reverse items-baseline'>
            <label
              htmlFor='check2'
              className='flex items-center text-sm font-[350] dark:text-white'
            >
              I agree to Terms & Conditions and Refund Policy.
            </label>
            <input
              checked={terms}
              onChange={handleChange}
              className='mr-3'
              type='checkbox'
              name='terms'
              id='check2'
            />
          </div>
        </div>
      </div>
      <div className='max-w-inherit mx-auto fromBuy grid grid-cols-2 items-center justify-center border border-t-[#E2DFDF] p-4 fixed bottom-0 left-0 right-0 bg-white dark:bg-roamin-dark-800'>
        <div className='buyPrice text-center'>
          <h6 className='text-xl font-black dark:text-white'>US $ 50.00</h6>
        </div>
        <div className='buyButton text-center'>
          <button
            onClick={submit}
            disabled={compatibles && terms ? false : true}
            className='bg-[#FFEC69] disabled:bg-[#9C9C9C] color-[#000000] font-extrabold uppercase text-sm px-4 py-4 rounded-[9px] w-9/12 text-[14px]'
            type='button'
          >
            Buy Now
          </button>
        </div>
      </div>

      <Dialog
        fullScreen
        open={modal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
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
        <ModalPayment status={data?.status || ''} message={data?.data.message} closeModal={handleClose} />
      </Dialog>
    </>
  );
};

export default MConfirm;

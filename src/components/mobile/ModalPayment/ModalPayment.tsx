import React, { useState } from 'react'
import iconSuccess from '../../../assets/img/icon-success.png';
import iconFailed from '../../../assets/img/icon-failed.png';
import iconWaiting from '../../../assets/img/icon-waiting.png';
import iconExpired from '../../../assets/img/icon-expired.png'

const ModalPayment = ({status, message, closeModal} : {status: string, message?: string, closeModal: () => void}) => {
  
  if(status == 'success'){
    return (
        <div className='w-full min-h-screen bg-white dark:bg-roamin-dark-800 dark:text-white p-4'>
            <div className="flex justify-end text-xl font-extrabold" onClick={() => closeModal()}>x</div>
            <div className='mt-10 flex justify-center flex-col text-center items-center'>
                <img className='w-32 h-32 mb-8' src={iconSuccess} alt={iconSuccess} />
                <p className='text-lg font-extrabold mb-8'>
                    Thank You for Order in
                    <br /> 
                    <span className='text-roamin-yellow-500'>RoaminRabbit</span>
                </p>
                <p className='text-sm font-normal mb-8'>
                    {message}
                </p>
                <a href="" className='text-roamin-yellow-500 underline decoration-roamin-yellow-500 mb-8'>
                    Check Order Details
                </a>
                <p className='text-sm font-normal mb-8'>
                    Now you can use your package plan by activate the eSIM
                </p>
                <button className='w-full bg-roamin-yellow-500 text-black p-4 rounded-[9px] text-lg font-extrabold'>Activate Now</button>
            </div>
        </div>
    )
  }

  if(status == 'failed'){
    return (
        <div className='w-full min-h-screen bg-white dark:bg-roamin-dark-800 dark:text-white p-4'>
            <div className="flex justify-end text-xl font-extrabold" onClick={() => closeModal()}>x</div>
            <div className='mt-10 flex justify-center flex-col text-center items-center'>
                <img className='w-32 h-32 mb-8' src={iconFailed} alt={iconFailed} />
                <p className='text-lg font-extrabold mb-8'>
                    Failed Transaction
                </p>
                <p className='text-sm font-normal mb-20'>
                    Your payment with using a credit card was unsuccessful. Try to buy again or purchase by using a different payment method.
                </p>
                <button className='w-full bg-roamin-yellow-500 text-black p-4 rounded-[9px] text-lg font-extrabold'>Try Again</button>
            </div>
        </div>
    )
  }

  if(status == 'waiting'){
    return (
        <div className='w-full min-h-screen bg-white dark:bg-roamin-dark-800 dark:text-white p-4'>
            <div className="flex justify-end text-xl font-extrabold" onClick={() => closeModal()}>x</div>
            <div className='mt-10 flex justify-center flex-col text-center items-center'>
                <img className='w-32 h-32 mb-8' src={iconWaiting} alt={iconWaiting} />
                <p className='text-lg font-extrabold mb-8'>
                    Waiting for Your Payment
                </p>
                <p className='text-sm font-normal mb-8'>
                    Complete your order before:
                    <br />
                    <span className='text-lg font-extrabold'>JUNE 23, 2024 AT 5:12 PM</span>
                </p>
                <p className='text-sm font-normal mb-8'>
                    We waiting your payment using BCA VA valued
                    <br />
                    at <b>$ 50.00</b>. 
                </p>
            </div>
        </div>
    )
  }

  if(status == 'expired'){
    return (
        <>
            <div className='w-full min-h-screen bg-white dark:bg-roamin-dark-800 dark:text-white p-4'>
                <div className="flex justify-end text-xl font-extrabold" onClick={() => closeModal()}>x</div>
                <div className='mt-10 flex justify-center flex-col text-center items-center'>
                    <img className='w-32 h-32 mb-8' src={iconExpired} alt={iconExpired} />
                    <p className='text-lg font-extrabold mb-8'>
                        Your Payment Has Expired
                    </p>
                    <p className='text-sm font-normal mb-8'>
                        You can make another order to enjoy a package plan that you needed.
                    </p>
                    <a href="" className='text-roamin-yellow-500 underline decoration-roamin-yellow-500 mb-8'>
                        Visit our store and choose your next destination!
                    </a>
                </div>
            </div>
        </>
    )
  }

  return(
    <>
        <div className='w-full min-h-screen bg-white dark:bg-roamin-dark-800 dark:text-white p-4'></div>
    </>
  )
}

export default ModalPayment
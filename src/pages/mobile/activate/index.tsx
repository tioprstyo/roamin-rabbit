import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HEADER_TYPE } from 'interfaces';
import { Header } from 'components';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SimCardAlertOutlinedIcon from '@mui/icons-material/SimCardAlertOutlined';
import QrImage from 'assets/img/qr.png';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useGetActivateOrder } from 'hooks';
import copy from "copy-to-clipboard";
import { QRCode } from 'react-qrcode-logo';

const MActivate = () => {
    const {id} = useParams() as { id: string };
    const navigate = useNavigate();
    const [openTab, setOpenTab] = useState<number>(1);
    const [packages, setIspackages] = useState<boolean>(true);
    const {data, fetching} = useGetActivateOrder();
    const addressRef = useRef<any>();
    const codeRef = useRef<any>();
    const qrStyle: React.CSSProperties = {
        margin: 'auto',
        height: '250px',
        width: '250px'
    }

    const copyAddress = () => {
        let copyText = addressRef.current?.textContent;
        let isCopy = copy(copyText);
    
        if (isCopy) {
          alert("Copied to Clipboard");
        }
    };

    const copyCode = () => {
        let copyText = codeRef.current?.textContent;
        let isCopy = copy(copyText);
    
        if (isCopy) {
          alert("Copied to Clipboard");
        }
    };

    const downloadCode = () => {
        const canvas: any = document.getElementById("qrCode");
        if(canvas) {
          const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          let downloadLink = document.createElement("a");
          downloadLink.href = pngUrl
          downloadLink.download = `your_name.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      }

    useEffect(() => {
        if(!data){
            fetching(id);
        }
    }, [data]);

  return (
    <>
    <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Order Details' />
    <div className='content-wrapper min-h-[calc(100vh-4rem)]'>
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
                        Active
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
                        Deactive
                    </a>
                    </li>
                </ul>
                <div className='relative flex flex-col min-w-0 break-words w-full'>
                    <div className='px-4 py-5 flex-auto'>
                        <div className='tab-content tab-space'>
                            <div
                            className={
                                'qr-code ' + (openTab === 1 ? 'block' : 'hidden')
                            }
                            id='link1'
                            >
                                <div className="warning-section">
                                    <div className="warning-wrapper p-4 border border-[#FFEC69] rounded-[9px] flex justify-between">
                                        <SimCardAlertOutlinedIcon sx={{fontSize: 60, color: '#FFEC69'}}/>
                                        <p className='text-xs font-normal text-[#FFEC69]'>
                                            <b className='font-extrabold'>WARNING!</b> 
                                            eSIM can only be installed once! <b className='font-extrabold'>DO NOT</b> delete eSIM from your device, you cannot install it again or to top up your eSIM in the future
                                        </p>
                                    </div>
                                </div>
                                <div className="installation-section mt-4">
                                    <h2 className='text-medium font-extrabold mb-2 dark:text-white'>eSIM Installation</h2>
                                    <div className="listCard flex justify-between p-4 items-center border border-roamin-neutral-600 dark:border-roamin-dark-400 bg-white dark:bg-roamin-dark-700 rounded-[9px] dark:text-white">
                                        <span className='text-sm font-medium'><TextSnippetOutlinedIcon/> View Instruction</span>
                                        <ChevronRightOutlinedIcon/>
                                    </div>
                                </div>
                                <div className="qr-section mt-4 p-4">
                                    <div className="qr text-center mb-4 dark:text-white">
                                        <h6 className='text-base font-black mb-4'>SCAN THIS QR</h6>
                                        <p className='text-sm font-normal mb-4'>Download QR code below or display on the another device to install eSIM.</p>
                                        <QRCode id='qrCode' style={qrStyle} value={data?.qrCode} />
                                    </div>
                                    <div className='download grid grid-cols-4 gap-3 items-end p-2'>
                                        <div className="form col-span-3">
                                            <button onClick={() => downloadCode()} className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-3 py-3 rounded-[9px] w-full text-[14px] border border-[#FFEC69]" type="button">
                                                Download
                                            </button>
                                        </div>
                                        <div className="form">
                                            <button className="bg-[#FFEC69] color-[#000000] font-extrabold uppercase text-sm px-3 py-3 rounded-[9px] w-full text-[14px] border border-[#FFEC69]" type="button">
                                                <ShareOutlinedIcon />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                            className={
                                'activation-code  ' + (openTab === 2 ? 'block' : 'hidden')
                            }
                            id='link2'
                            >
                                <div className="warning-section">
                                    <div className="warning-wrapper p-4 border border-[#FFEC69] rounded-[9px] flex justify-between">
                                        <SimCardAlertOutlinedIcon sx={{fontSize: 60, color: '#FFEC69'}}/>
                                        <p className='text-xs font-normal text-[#FFEC69]'>
                                            <b className='font-extrabold'>WARNING!</b> 
                                            eSIM can only be installed once! <b className='font-extrabold'>DO NOT</b> delete eSIM from your device, you cannot install it again or to top up your eSIM in the future
                                        </p>
                                    </div>
                                </div>
                                <div className="installation-section mt-4">
                                    <h2 className='text-medium font-extrabold mb-2 dark:text-white'>eSIM Installation</h2>
                                    <div className="listCard flex justify-between p-4 items-center border border-roamin-neutral-600 dark:border-roamin-dark-400 bg-white dark:bg-roamin-dark-700 rounded-[9px] dark:text-white">
                                        <span className='text-sm font-medium'><TextSnippetOutlinedIcon/> View Instruction</span>
                                        <ChevronRightOutlinedIcon/>
                                    </div>
                                </div>
                                <div className="code-section bg-white dark:bg-roamin-dark-700 border border-roamin-neutral-600 dark:border-roamin-dark-400 rounded-[9px] mt-4 dark:text-white divide-y divide-roamin-neutral-600 dark:divide-roamin-dark-400">
                                    <div className='card'>
                                        <div className='cardContent flex justify-between items-center px-3 py-3'>
                                            <div className='caption mr-3'>
                                                <p className='text-xs font-light text-[#989898]'>SM-DP+ ADDRESS</p>
                                                <p ref={addressRef} className='text-[13px] font-medium'>{data?.smdpAddress}</p>
                                            </div>
                                            <ContentCopyOutlinedIcon onClick={copyAddress} />
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='cardContent flex justify-between items-center px-3 py-3'>
                                            <div className='caption mr-3'>
                                                <p className='text-xs font-light text-[#989898]'>ACTIVATION CODE</p>
                                                <p ref={codeRef} className='text-[12px] font-medium break-all'>
                                                    {data?.activationCode}
                                                </p>
                                            </div>
                                            <ContentCopyOutlinedIcon onClick={copyCode}/>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='cardContent flex justify-between items-center px-3 py-3'>
                                            <InfoOutlinedIcon/>
                                            <p className='text-[12px] font-medium ml-3'>
                                            Copy Paste the SM-DP+ ADDRESS & ACTIVATION CODE, when you choose add data/mobile plan manually.
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
    </div>
  </>
  )
}

export default MActivate
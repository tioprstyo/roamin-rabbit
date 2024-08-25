import React, { useEffect, useState } from 'react'
import { Header } from 'components';
import { HEADER_TYPE, UserRequest } from 'interfaces';
import FlagImage from 'assets/img/flag.png';
import ManImage from 'assets/img/man.png';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useGetProfile } from 'hooks';
import { useNavigate } from 'react-router-dom';

const MEditProfile = () => {
  const navigate = useNavigate();
  const {data, fetching} = useGetProfile();
  const [profile, setProfile] = useState<UserRequest>({
        name: '',
        email: ''
  })

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({...profile, [e.target.name] : e.target.value})
  }

  useEffect(() => {
    if(!data){
        fetching();
    }

    setProfile({
        ...profile,
        name: data?.profile.name || '',
        email: '',
    })
  }, [data]);

  return (
    <>
        <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Edit Account' />
        <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-4rem)]'>
            <div className='form-account'>
                <div className="avatar-section flex justify-center">
                    <label className='w-[169px] h-[169px] rounded-full block border-4 border-[#9C9C9C] relative' htmlFor="file">
                        <img className='w-full rounded-full' src={data?.profile.profilePicture ? data?.profile.profilePicture : ManImage} alt={data?.profile.profilePicture ? data?.profile.profilePicture : ManImage} />
                        <input className='hidden' type='file' name='' id='file' />
                        <div className="icon-wrapper absolute bg-[#717171] h-[43px] w-[43px] flex justify-center items-center rounded-full">
                            <CameraAltOutlinedIcon  sx={{ color: 'white', fontSize: 30 }} />
                        </div>
                    </label>
                </div>
                <div className='form mb-6'>
                    <label className='text-[14px] font-normal mb-3 dark:text-white' htmlFor=''>
                        Full Name
                    </label>
                    <input
                    onChange={(e) => eventHandler(e)}
                    value={profile.name}
                    name='name'
                    type='text'
                    placeholder='Full Name'
                    className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] w-full'
                    />
                </div>
                <div className='form mb-6 grid grid-cols-4 gap-3 items-end'>
                    <div className="form col-span-3">
                        <label className='text-[14px] font-normal mb-3 dark:text-white' htmlFor="">Phone Number</label>
                        <div className="relative flex w-full flex-wrap items-center">
                            <span className="z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent text-base flex items-center justify-center w-10 px-2 py-3 border-r border-[#BEBEBE]">
                                <img src={FlagImage} alt="" />
                            </span>
                            <input value={data?.profile.phoneNumber || ''} type="text" placeholder="Placeholder" className="pl-12 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] w-full" readOnly/>
                        </div>
                    </div>
                    <div className="form">
                        <button onClick={() => navigate('/change-number')} className="bg-white color-[#000000] font-medium text-sm px-3 py-3 rounded-[9px] w-full text-[14px] border border-[#BEBEBE]" type="button">
                            Change
                        </button>
                    </div>
                </div>
                <div className='form mb-6'>
                    <label className='text-[14px] font-normal mb-3 dark:text-white' htmlFor=''>
                        Email
                    </label>
                    <input
                    onChange={(e) => eventHandler(e)}
                    value={profile.email}
                    name='email'
                    type='text'
                    placeholder='Email'
                    className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] w-full'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default MEditProfile
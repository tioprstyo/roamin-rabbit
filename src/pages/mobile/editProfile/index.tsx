import React, { useEffect, useState } from 'react';
import { Header } from 'components';
import { HEADER_TYPE } from 'interfaces';
import FlagImage from 'assets/img/flag.png';
import DefaultUserPicture from 'assets/img/default_user.png';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useNavigate } from 'react-router-dom';
import { profileState } from 'atom';
import { useRecoilValue } from 'recoil';
import userEditPicture from 'hooks/userEditPicture';

const MEditProfile = () => {
  const navigate = useNavigate();
  const [Foto, setFoto] = useState<File | string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { profile } = useRecoilValue(profileState);
  const { data, fetching } = userEditPicture();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFoto(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const submit = () => {
    const formData = new FormData();
    formData.append('profilePicture', selectedFile as File);

    fetching(formData);

    console.log(data);
  };

  useEffect(() => {
    profile?.profilePicture
      ? setFoto(profile?.profilePicture)
      : setFoto(DefaultUserPicture);
  }, [profile]);

  return (
    <>
      <Header headerType={HEADER_TYPE.DETAIL} headerTitle='Edit Account' />
      <div className='content-wrapper p-4 bg-[#FFF7DA] dark:bg-roamin-dark-600 min-h-[calc(100vh-4rem)]'>
        <div className='form-account'>
          <div className='avatar-section flex justify-center'>
            <label className='relative' htmlFor='file'>
              <img
                className='w-[169px] h-[169px] rounded-full block border-4 border-[#9C9C9C]'
                src={Foto as string}
                alt={Foto as string}
              />
              <input
                className='hidden'
                type='file'
                name=''
                id='file'
                onChange={handleFileSelect}
              />
              <div className='icon-wrapper absolute bg-[#717171] h-[43px] w-[43px] flex justify-center items-center rounded-full'>
                <CameraAltOutlinedIcon sx={{ color: 'white', fontSize: 30 }} />
              </div>
            </label>
          </div>
          <div className='form mb-6'>
            <label
              className='text-[14px] font-normal mb-3 dark:text-white'
              htmlFor=''
            >
              Full Name
            </label>
            <input
              disabled
              value={profile?.name}
              name='name'
              type='text'
              placeholder='Full Name'
              className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] w-full'
            />
          </div>
          <div className='form mb-6 grid grid-cols-4 gap-3 items-end'>
            <div className='form col-span-3'>
              <label
                className='text-[14px] font-normal mb-3 dark:text-white'
                htmlFor=''
              >
                Phone Number
              </label>
              <div className='relative flex w-full flex-wrap items-center'>
                <span className='z-10 leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent text-base flex items-center justify-center w-10 px-2 py-3 border-r border-[#BEBEBE]'>
                  <img src={FlagImage} alt='' />
                </span>
                <input
                  value={profile?.phoneNumber}
                  type='text'
                  placeholder='Placeholder'
                  className='pl-12 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] w-full'
                  disabled
                />
              </div>
            </div>
            <div className='form'>
              <button
                onClick={() => navigate('/change-number')}
                className='bg-white color-[#000000] font-medium text-sm px-3 py-3 rounded-[9px] w-full text-[14px] border border-[#BEBEBE]'
                type='button'
              >
                Change
              </button>
            </div>
          </div>
          <div className='form mb-6'>
            <label
              className='text-[14px] font-normal mb-3 dark:text-white'
              htmlFor=''
            >
              Email
            </label>
            <input
              disabled
              value={profile?.email}
              name='email'
              type='text'
              placeholder='Email'
              className='px-3 py-3 mt-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm border border-[#BEBEBE] w-full'
            />
          </div>
          <div className='form mb-6'>
            <button
              className='bg-[#FFEC69] color-[#000000] font-extrabold text-sm px-4 py-4 rounded-[9px] mr-1 mb-1 w-full text-[14px]'
              onClick={submit}
            >
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MEditProfile;

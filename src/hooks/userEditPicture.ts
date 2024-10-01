import React from 'react';
import { ProfilePictureProps, ProfilePictureResponseProps } from 'interfaces';
import { useState } from 'react';
import { api } from 'services';

const userEditPicture = () => {
  const [data, setData] = useState<ProfilePictureProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async (profilePicture: object) => {
    setIsLoading(true);
    try {
      const resp: ProfilePictureResponseProps = await api.put(
        '/account/change-profile-picture',
        {
          profilePicture,
        },
        'media',
      );
      if (resp?.status === 'success') {
        setData(resp.data);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  return {
    data,
    fetching,
    isLoading,
  };
};

export default userEditPicture;

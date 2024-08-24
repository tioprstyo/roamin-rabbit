import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [data, setData] = useState<boolean>(
    localStorage.getItem('isDarkMode') === null
      ? false
      : localStorage.getItem('isDarkMode') === 'true',
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [data]);

  const fetching = async (isDark: boolean) => {
    setIsLoading(true);
    setData(isDark);
    setIsLoading(false);
    localStorage.setItem('isDarkMode', `${isDark}`);
  };

  return {
    data,
    fetching,
    isLoading,
  };
};

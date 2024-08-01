import React, { useEffect, useState, useCallback, Children } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  RegisterPage,
  VerifikasiPage,
  HomePage,
  EsimPage,
  ListingPage,
} from 'pages/desktop';
import {
  MEsim,
  MHome,
  MListing,
  MLogin,
  MRegister,
  MVerification,
} from 'pages/mobile';
import { DesktopLayout, MobileLayout } from 'components';
import { RouteObjectProps } from 'interfaces';

const Router = () => {
  const [windowSize, setWindowSize] = useState(window.screen.width);

  const handleWindowResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize, windowSize]);

  const RouteObject: RouteObjectProps[] = [
    {
      element: windowSize > 768 ? <DesktopLayout /> : <MobileLayout />,
      path: '/',
      key: 'layout',
      children: [
        {
          element: windowSize > 768 ? <HomePage /> : <MHome />,
          path: '',
          key: 'home',
        },
        {
          element: windowSize > 768 ? <LoginPage /> : <MLogin />,
          path: 'login',
          key: 'login',
        },
        {
          element: windowSize > 768 ? <RegisterPage /> : <MRegister />,
          path: 'register',
          key: 'register',
        },
        {
          element: windowSize > 768 ? <VerifikasiPage /> : <MVerification />,
          path: 'verifikasi',
          key: 'verifikasi',
        },
        {
          element: windowSize > 768 ? <EsimPage /> : <MEsim />,
          path: 'manage',
          key: 'manage',
        },
        {
          element: windowSize > 768 ? <ListingPage /> : <MListing />,
          path: 'listing',
          key: 'listing',
          children: [
            {
              element: windowSize > 768 ? <ListingPage /> : <MListing />,
              path: 'product',
              key: 'listing-product',
            },
          ],
        },
      ],
    },
  ];

  const RouteElement = (routeObj: RouteObjectProps[]) => {
    return routeObj.map((e: RouteObjectProps) => {
      if (e.children) {
        return (
          <Route key={e.key} path={e.path} element={e.element}>
            {RouteElement(e.children)}
          </Route>
        );
      }
      return <Route key={e.key} path={e.path} element={e.element} />;
    });
  };

  return <Routes>{RouteElement(RouteObject)}</Routes>;
};

export default Router;

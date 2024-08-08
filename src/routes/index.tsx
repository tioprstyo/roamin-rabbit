import React, { useEffect, useState, useCallback, Children } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  MEsim,
  MHome,
  MListing,
  MLogin,
  MRegister,
  MVerification,
  MFilter,
  MDetail,
  MNotActive
} from 'pages/mobile';
import { MobileLayout } from 'components';
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
      element: windowSize > 768 ? <MobileLayout /> : <MobileLayout />,
      path: '/',
      key: 'layout',
      children: [
        {
          element: windowSize > 768 ? <MHome /> : <MHome />,
          path: '',
          key: 'home',
        },
        {
          element: windowSize > 768 ? <MLogin /> : <MLogin />,
          path: 'login',
          key: 'login',
        },
        {
          element: windowSize > 768 ? <MRegister /> : <MRegister />,
          path: 'register',
          key: 'register',
        },
        {
          element: windowSize > 768 ? <MVerification /> : <MVerification />,
          path: 'verifikasi',
          key: 'verifikasi',
        },
        {
          element: windowSize > 768 ? <MEsim /> : <MEsim />,
          path: 'manage',
          key: 'manage',
        },
        {
          element: windowSize > 768 ? <MListing /> : <MListing />,
          path: 'listing',
          key: 'listing',
          children: [
            {
              element: windowSize > 768 ? <MListing /> : <MListing />,
              path: 'product',
              key: 'listing-product',
            },
          ],
        },
        {
          element: windowSize > 768 ? <MFilter /> : <MFilter />,
          path: 'filter',
          key: 'filter',
        },
        {
          element: windowSize > 768 ? <MDetail /> : <MDetail />,
          path: 'detail',
          key: 'detail',
        },
        {
          element: windowSize > 768 ? <MNotActive /> : <MNotActive />,
          path: 'not-active',
          key: 'not-active',
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

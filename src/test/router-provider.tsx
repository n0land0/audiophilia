import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';

const RouterProvider: React.FC<{ router?: Partial<NextRouter> }> = ({
  children,
  router = {},
}) => {
  const {
    route = '',
    pathname = '',
    basePath = '',
    query = { event: 't2020' },
    asPath = '',
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
    isLocaleDomain = false,
    isReady = true,
    isPreview = false,
  } = router;

  return (
    <RouterContext.Provider
      value={{
        basePath,
        route,
        pathname,
        query,
        asPath,
        push,
        replace,
        reload,
        back,
        prefetch,
        beforePopState,
        isFallback,
        events,
        isLocaleDomain,
        isReady,
        isPreview,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export default RouterProvider;

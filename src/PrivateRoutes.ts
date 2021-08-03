import React from 'react';
const Home = React.lazy(() => import('./pages/Home'));
type TRoute = {
  component: React.FC;
  path: string;
}[];
export const privateRoutes: TRoute = [{ component: Home, path: '/' }];

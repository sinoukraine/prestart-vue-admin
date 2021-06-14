//~~~import HomePage from '../pages/home.vue?v=1.4';
import PrestartsPage from '../pages/prestarts.vue?v=1.4';
import TripsPage from '../pages/trips.vue?v=1.4';
import AssetsPage from '../pages/assets.vue?v=1.4';
//~~~import CreditsTransferHistoryPage from '../components/credits/credits-transfer-history.vue?v=1.4';

import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: PrestartsPage,
    name: 'prestarts'
  },
  {
    path: '/presets', //how we name the url path
    component: PrestartsPage, //how url path should be
    name: 'prestarts'
  },
  {
    path: '/trips', //how we name the url path
    component: TripsPage, //how url path should be
    name: 'trips'
  },
  {
    path: '/assets',
    component: AssetsPage,
    name: 'assets'
  },
  /*~~~{
    path: '/credits/transfer-history',
    component: CreditsTransferHistoryPage,
    name: 'credits-transfer-history'
  },*/
  {
    path: '/(.*)',
    component: NotFoundPage,
  },
];

export default routes;

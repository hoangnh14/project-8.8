import RootLayout from '../layouts/index';
import Index from "../components/product";
import routes from "../constants/routes";
import Home from "../components/Home";
import Statistic from "../components/statistic";

export default [
    {
        component: RootLayout,
        routes: [
            {
                path : '/',
                component: Home,
                exact: true,
            },

            {
                path : routes.statistic,
                component: Statistic,

            },

            {
                path : `${routes.listProductByName}/:id`,
                component: Index,

            },
        ],
    },
];
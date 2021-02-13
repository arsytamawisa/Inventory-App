import {
    UnitForm, UnitList,
    ItemForm, ItemList,
    StockForm, StockList,
    Home, Error,
} from "../pages"


const routes = [
    {
        path: '/units',
        component: <UnitList />,
        exact: true
    },
    {
        path: '/unit',
        component: <UnitForm />,
        exact: true
    },
    {
        path: '/unit/:id/edit',
        component: <UnitForm />,
        exact: true
    },
    {
        path: '/items',
        component: <ItemList />,
        exact: true
    },
    {
        path: '/item',
        component: <ItemForm />,
        exact: true
    },
    {
        path: '/item/:id/edit',
        component: <ItemForm />,
        exact: true
    },
    {
        path: '/stocks',
        component: <StockList />,
        exact: true
    },
    {
        path: '/stock',
        component: <StockForm />,
        exact: true
    },
    {
        path: '/stock/:id/edit',
        component: <StockForm />,
        exact: true
    },
    {
        path: '/',
        component: <Home />,
        exact: true
    },
    {
        path: '*',
        component: <Error></Error>,
        exact: false
    }
];

export default routes

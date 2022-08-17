// import { Outlet, Link, useRoutes, useParams } from "react-router-dom";

import ProductDetail from "../organizm/ProductDetail";
import Contact from "../pages/Contact";
import ContactMenu from "../pages/Contact/ContactMenu";
import Home from "../pages/Home";
import Layout from "../pages/Layout";

export const routes =[
  {
    path: '/',
    component: <Home/>,
    index: true,
    isLayout: true,
    isProtect : true
  },
  {
    path: 'product-detail/:id',
    component: <ProductDetail/>,
    isLayout: true,
    isProtect : false
  },
  {
    path: 'contact',
    component: <Contact/>,
    isLayout: true,
    isProtect : true
  },
]

export const routing = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/product-detail/:id",
        element: <ProductDetail />,
        children: [
          { index: true, element: <ContactMenu /> },
          { path: "/courses/:id", element: <ContactMenu /> },
        ],
      },
      { path: "*", element: <ContactMenu /> },
    ],
  },
];
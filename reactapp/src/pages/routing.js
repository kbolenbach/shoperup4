import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/homepage/homepage";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { RulesPage } from "../pages/rules/rules";

export const ROUTER_ROUTES = createBrowserRouter([

    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/terms',
        element: <RulesPage />
    }

]);
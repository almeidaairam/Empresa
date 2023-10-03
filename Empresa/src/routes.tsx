import { createBrowserRouter } from "react-router-dom";

import {Home} from "./pages/home/index";
import {Sobre} from "./pages/sobre/index";
import {Contato} from "./pages/contato/index";
import {Produto} from "./pages/produto/index";


const router = createBrowserRouter ([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/sobre",
        element:<Sobre/>
    },
    {
        path:"/contato",
        element:<Contato/>
    },
    {
        path:"/produto",
        element:<Produto/>
    }
])

export {router}
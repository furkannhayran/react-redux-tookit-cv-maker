import HomeLayout from "../components/HomeLayout";
import Template from "../pages/pageTemplate/Template";
import HomeContent from "../pages/pagesHome/HomeContent";
import Past from "../pages/pagesPast/Past";
const routes = [
    {

        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                name: "index",
                element: <HomeContent />,
            },
            {
                path:"/gecmis",
                element : <Past/>
            },
            {
                path:"/sablon",
                element : <Template/>
            }

        ],


    },

]

// const authMap = routes => routes.map(route => {
//     if (route?.children) {
//         route.children = authMap(route.children)
//     }
//     return route
// })
export default routes

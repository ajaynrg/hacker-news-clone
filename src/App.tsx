import './App.css'
import Root from "./pages/Root.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {NewStoriesPage} from "./pages/NewStoriesPage.tsx";
import {AskPage} from "./pages/AskPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ThreadsPage from "./pages/Threads/ThreadsPage.tsx";
import PastPage from "./pages/PastPage.tsx";
import CommentsPage from "./pages/CommentsPage.tsx";
import ShowPage from "./pages/ShowPage.tsx";
import JobsPage from "./pages/JobsPage.tsx";
import SubmitPage from "./pages/SubmitPage.tsx";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root/>,
            children:[
                { index: true, element:<HomePage/>},
                { path:'new', element: <NewStoriesPage/> },
                {
                    path:'threads', element: <ThreadsPage/>,
                },
                { path:'past', element: <PastPage/>},
                { path:'comments', element: <CommentsPage/>},
                { path:'ask', element: <AskPage/>},
                { path:'show', element: <ShowPage/>},
                { path:'jobs', element: <JobsPage/>},
                { path:'submit', element: <SubmitPage/>},
            ]
        }
    ]
)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;
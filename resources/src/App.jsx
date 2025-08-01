import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./redux/store";

function Authenticate({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return children;
}

const App = () => (
    <Authenticate>
        <RouterProvider router={router} />
    </Authenticate>
);

export default App;

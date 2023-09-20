// import "./App.css";
import { Switch, Route, Link } from "react-router-dom/cjs/react-router-dom";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import { useEffect } from "react";
import productApi from "./api/productApi.js";

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            }
            const productList = await productApi.getAll(params);
            console.log(productList)
        }

        fetchProducts();
    })

    return (
        <div className="App">
            <h1>Router</h1>

            <p>
                <Link to="/todo-list">Todos</Link>
            </p>
            <p>
                <Link to="/albums">Albums</Link>
            </p>

            <Switch>
                <Route path="/" component={TodoFeature} exact></Route>
                <Route path="/todo-list" component={TodoFeature}></Route>
                <Route path="/albums" component={AlbumFeature}></Route>
            </Switch>
        </div>
    );
}

export default App;

import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Update from "../pages/Update";

function Routes() {
    const client = new ApolloClient({
        uri:"https://exciting-gecko-79.hasura.app/v1/graphql",
        headers: {
            "x-hasura-admin-secret":
            "Nf0PjR6ZawHPtSBd6iYx23DCk3vn3lyNNCgysdqofpm7AklPvQHO92ZYCSClzzNj"
        },
        cache: new InMemoryCache()
    });
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Switch>
                    <Route exact path="/">
                        {(props) => (
                            <div>
                                <Home {...props}/>
                            </div>
                        )}
                    </Route>
                    <Route path="/update/:id">
                        {(props) => (
                            <div>
                                <Update {...props}></Update>
                            </div>
                        )}
                    </Route>
                    <Route path="/ceate">
                        <Create/>
                    </Route>
                </Switch>
            </ApolloProvider>  
        </BrowserRouter>
    )
}

export default Routes;

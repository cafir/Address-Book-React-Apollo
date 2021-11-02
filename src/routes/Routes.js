import { BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

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
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </ApolloProvider>  
        </BrowserRouter>
    )
}

export default Routes;

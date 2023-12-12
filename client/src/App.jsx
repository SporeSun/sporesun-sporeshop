import { Outlet } from 'react-router-dom';
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from "./components/Header";
import Footer from "./components/Footer";
// export default function App() {
//     return (
//         <div>
//             <Header />
//               <Outlet />
//             <Footer />
//         </div>
//     );
// }
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache({
    addTypename: false
  }),
});

function App() {
  return (
    <>
    <ApolloProvider client = {client}>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </ApolloProvider>
      </>
  );
}

export default App;
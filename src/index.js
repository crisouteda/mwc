import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query'
import {ChakraProvider} from '@chakra-ui/react'

const twentyFourHoursInMs = 1000 * 60 * 60* 24
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: twentyFourHoursInMs
        }
    }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

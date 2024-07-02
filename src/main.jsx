import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </ChakraProvider>
  </React.StrictMode>,
)

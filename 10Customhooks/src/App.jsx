import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// importing the custom made hook

import { useToggle } from './useToggle'

import { Cat } from './Cat'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const [isVisible, toggle] = useToggle();

  return (
    <QueryClientProvider client={queryClient}>
    <>
      <div>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h5>This is the Hidden text,that is currently shown, Click on the hide button to hide this text</h5>}
      </div>
      <div>
        <Cat/>
      </div>
    </>
    </QueryClientProvider>
  )
}

export default App
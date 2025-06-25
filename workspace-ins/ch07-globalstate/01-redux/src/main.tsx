import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';

// Redux 스토어
// import store from '@redux/store';

// Redux tooklit 스토어
import store from '@/RTK/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </StrictMode>,
)

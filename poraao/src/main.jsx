import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {register} from 'swiper/element/bundle'
import './index.css'
import App from './App.jsx'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

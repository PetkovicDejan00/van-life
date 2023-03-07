import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements, 
  Route} 
  from 'react-router-dom'
import './app.css'
import '../server'
import {
  Home, About, Vans, VanDetails, Layout, HostLayout, 
  Dashboard, Income, Reviews, HostVans, HostVanDetails, 
  HostVanInfo, HostVanPricing, HostVanPhoto, ErrorPage, Login,
  action as loginAction, AuthRequired
} from './imports.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} />
    <Route path="vans/:id" element={<VanDetails />} />
    <Route path="login" element={<Login />} action={loginAction} />

    <Route element={<AuthRequired />} >
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetails />} >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhoto />} />
        </Route>
      </Route>
    </Route>

    <Route path="*" element={<ErrorPage />} />
  </Route>
))

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, keepPreviousData: true, retry: 1 }}
  })

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App

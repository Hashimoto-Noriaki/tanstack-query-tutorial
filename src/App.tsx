import './App.css'
import Posts from './components/Posts'

const queryClient = new QueryClient()//queryClientをインスタンス化

function App() {
  //QueryClientProviderでComponentを囲む
  return( 
    <QueryClientProvider client={queryClient}>
      {<Posts/>}
    </QueryClientProvider>
  )
}

export default App

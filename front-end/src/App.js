import GlobalStyle from "./login/components/styled/global"; 
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import Routes from "./routes/routes"; 


function App() { 
    return ( 
        <> 
            <Routes /> {/*Renderiza as rotas*/}
            <ToastContainer autoClose={3000} /> 
            <GlobalStyle /> 
        </> 
    ); 
} 

export default App; 

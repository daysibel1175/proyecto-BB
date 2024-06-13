import { useState } from 'react';
import '.././assets/Login.css'
import Nav from '.././componentes/Nav';
import { useNavigate } from "react-router-dom";
import { Api } from '.././services/api'
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment, IconButton} from '@mui/material';
import { FormGroup, FormControl, InputLabel, Input} from "@mui/material";

let username;
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setError(null);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setError(null);
    };
    
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
  };

    const handleLogin = async () => {
      try {
        if (!email) {
            setError("falta email");
            return; 
        }
        if ( !password) {
          setError("falta contraseña");
          return; 
      }
  
        const response = await Api.get(`/login?email=${email}&password=${password}`);
        const username = response.data;
        console.log(username);
        navigate("/Productos");

    } catch (error) {
        console.error("Error al autenticar o cargar los datos del cliente:", error);
        setError("Email ou senha invalidos");
    }
     
    };


  return (
    
    <body>
      <header><Nav/></header>  
    <div id='containerLogin'>
      <h1>Login</h1>
       <FormGroup id='loginForm'>
              <FormControl>
                <InputLabel
                  style={{
                    all: "unset",
                    left: "0",
                    justifyContent: "start",
                    display: "flex",
                    textAlign: "left",
                  }}
                >
                  Email
                </InputLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="input"
                />
              </FormControl>
              <FormControl style={{ marginTop: "20px" }}>
                <InputLabel
                  style={{
                    all: "unset",
                    left: "0",
                    justifyContent: "start",
                    display: "flex",
                    textAlign: "left",
                  }}
                >
                  Senha
                </InputLabel>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    label="senha"
                    fullWidth
                    className="input"
                    endAdornment={
                      <InputAdornment position="end">
                         
                                <IconButton onClick={handleTogglePassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                    }
                />
                    </FormControl>
              <button onClick={handleLogin} className='button'>Entrar</button>
              {error && <p style={{ color: "red" }}>{error}</p>}{" "}
              {/* Muestra el mensaje de error */}
            </FormGroup>
   
    </div>
           
    </body>
  )
}

export default Login
// eslint-disable-next-line react-refresh/only-export-components
export {username}



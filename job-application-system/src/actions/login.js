import Axios from 'axios';
const login = (username,password,setMessage) => {
    if (username !== "")
      if(password !== "")
        Axios({
            method: 'POST',
            data: {
                username,
                password,
            },
            withCredentials: true,
            url: "http://localhost:4000/login"
        }).then((res) => {
          if (res.data === "Successfully Authenticated"){
            window.location='/user'
          }
          else{
            setMessage(`Login Failed`)
          }
        })
      else
        setMessage(`Enter Password !`)
    else
      setMessage(`Enter Username !`)
  
  }
export default login;
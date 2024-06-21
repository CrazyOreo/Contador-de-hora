//importei algumas pastas para funcionar os segundos e variaveis
import {useState} from "react"; //Definição de variavel
import { useEffect,  } from "react"; //Definição de effeitos tipo, limpeza da tela e contagem de segundos
import './App.css';

const App = () =>{
const [hora, setHora] = useState(4); //Aqui você escolhe sua hora
const [minuto, setMinuto] = useState(59); //Aqui voce pode escolher o minuto
const [segundo, setSegundo] = useState(55);//Por ultimo seus segundos
  useEffect(() => {

  const interval = setInterval(()=>{
    //sessão onde fiz o relogio funcionar, é aqui que a magia acontece
      if (segundo===60){ 
        setSegundo(0)
        setMinuto(minuto=>minuto+1)
        if(minuto===59){
          setMinuto(0)
          setHora(hora=>hora+1)
        }
      } else {
        setSegundo(segundo => segundo+1)
      }
  },1000);//definição dos mili-segundos, 1000 = 1 Segundo
  return () => clearInterval(interval)

},[hora, minuto, segundo])

return (

  <div>
    <h2 style={{textAlign:'center', padding:'50%'}}> {hora}:{minuto}:{segundo}</h2>
  </div>//Esta opão style, usei o textAlign para deixar ele centralizado entre esquerda e direita e o padding, para centralizar de cima a baixo

)


}
export default App;

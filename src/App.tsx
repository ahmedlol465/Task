import { Apple } from "lucide-react"
import Alert from "./componend/Alert/alert"

const App = () => {
  return (
    <div style={{margin: "2rem"}}>
      <Alert type={"alert-error"} icone={<Apple size={20}/>} title={"something went wrong"} describtion={
        <>
          "ldkamskdmasmd;asmdnanfjkdnfjn;dsfnajndsf;k 
            <a href="/">jdnfjk;dsnjkvn[</a>
          ocvorrhgjhljf;ndif[hN"
        </>
      }>
        <p>
          sadiasphdusahfiodsfhaofaahuobgifsinkcvhbcxogupugapgbdvi;
        </p>
        </Alert>
      <Alert type={"alert-warning"} icone={<Apple size={20}/>} title={"alert Warning"} describtion={"ldkamskdmasmd;asmdnanfjkdnfjn;dsfnajndsf;kjdnfjk;dsnjkvn[ocvorrhgjhljf;ndif[hN"}/>
      <Alert type={"alert-info"} icone={<Apple size={20}/>} title={"alert info"} describtion={"ldkamskdmasmd;asmdnanfjkdnfjn;dsfnajndsf;kjdnfjk;dsnjkvn[ocvorrhgjhljf;ndif[hN"}/>
      <Alert type={"alert-success"} icone={<Apple size={20}/>} title={"alert success"} describtion={"ldkamskdmasmd;asmdnanfjkdnfjn;dsfnajndsf;kjdnfjk;dsnjkvn[ocvorrhgjhljf;ndif[hN"}/>

    </div>


  )
}

export default App
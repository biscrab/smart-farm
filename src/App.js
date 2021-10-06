import Header from "./contents/Header";
import Border from "./contents/Border"
import * as S from './styled/App'

function App() {

  const Switch = () => {
    return(
    <label class="switch"> 
    <input type="checkbox" /> 
    <div class="slider round"></div> 
    </label>
    );
  }

  return (
    <>
      <Header />
      <Border />
    </>
  );
}

export default App;
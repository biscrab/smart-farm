import Header from "./contents/Header";
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
      <S.Border>
        <h3>물주기</h3>
        <h3>온도조절</h3>
        <h3>습도조절</h3>
      </S.Border>
    </>
  );
}

export default App;
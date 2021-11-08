import * as S from '../styled/App'
import '../styled/Switch.css'
import Acolorpicker from 'a-color-picker'

const Border = () => {

    const Switch = () => {
        return(
        <label class="switch"> 
        <input type="checkbox" /> 
        <div class="slider round"></div> 
        </label>
        );
      }

    return(
        <S.Border>
            <div>
            <h3>물주기</h3>
            <Switch />
            </div>
            <div>
            <h3>온도조절</h3>
            <Switch />
            </div>
            <div>
            <h3>습도조절</h3>
            <Switch />
            </div>
            <div>
            <h3>LED빛 설정</h3>

            </div>
            <div>
            <h3>오픈</h3>
            <Switch />
            </div>
        </S.Border>
    )
}

export default Border
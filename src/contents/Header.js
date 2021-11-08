import * as S from '../styled/App'
import Logo from '../images/Logo.png'

const Header = () => {
    return(
        <S.Header>
            <img src={Logo}></img>
            <h2>EmV Smart Farm</h2>
        </S.Header>
    )
}

export default Header
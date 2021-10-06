import * as S from '../styled/App'
import Logo from '../images/Logo.png'

const Header = () => {
    return(
        <S.Header>
            <S.Logo src={Logo}></S.Logo>
            <S.Tittle>ENV Smart Farm</S.Tittle>
        </S.Header>
    )
}

export default Header
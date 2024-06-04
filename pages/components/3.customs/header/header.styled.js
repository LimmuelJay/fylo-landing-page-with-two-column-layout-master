import {styled} from "styled-components"

const HeaderStyled = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width:375px) {
        height: 85px;
    }

    .logo-wrapper {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        
        .logo {
            width: 150px;

            @media screen and (max-width:375px) {
                width: 130px;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .nav-list-wrapper {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        .nav-list {
            width: 50%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media screen and (max-width:768px) {
                width: 100%;
            }

            @media screen and (max-width:375px) {
                font-size: .85rem;
            }

            a {
                text-decoration: none;
                color: black;
            }
        }
    }
`
export default HeaderStyled
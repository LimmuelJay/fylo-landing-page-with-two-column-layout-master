import {styled} from "styled-components"

const FooterStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(243, 87%, 12%);
    min-height: 350px;
    color: hsl(0, 0%, 75%);

    .main {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;

        @media screen and (max-width:768px) {
            width: 90%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            row-gap: 40px;
            padding: 20px;
        }
    }

    .logo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 25px;

            .img-logo {
                display: flex;
                width: 100%;
                margin-left: 10px;

                img {
                    width: 100%;
                }
            }

            .contact-info {
                display: flex;
                flex-direction: column;
                row-gap: 25px;
                

                .phone {
                    display: flex;
                    column-gap: 20px;

                    img {
                        width: 25px;
                    }
                }

                .email {
                    display: flex;
                    column-gap: 20px;

                    img {
                        width: 25px;
                    }
                }
            }
        }
    
    .buttons {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        row-gap: 15px;
        width: 30%;
        column-gap: 40%;

        @media screen and (max-width:888px) {
            width: 40%; 
        }

        a {
            text-decoration: none;
            color: hsl(0, 0%, 75%);
            width: 80px;
        }
    }

    .icons {
        display: flex;
        column-gap: 20px;

        @media screen and (max-width:768px) { 
            align-self: center;
        }

        img {
            width: 100%;
        }
    }
`
export default FooterStyled
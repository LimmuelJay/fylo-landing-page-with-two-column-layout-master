import {styled} from "styled-components"

const SignUpStyled = styled.div`
    display: flex;
    background-color: hsl(238, 22%, 44%);
    padding: 40px 0 40px 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 300px;

    .main {
        display: flex;
        width: 90%;

        @media screen and (max-width:768px) { 
            flex-direction: column;
            row-gap: 20px;
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 20px;
        width: 60%;

        @media screen and (max-width:768px) { 
            width: auto;
            align-items: center;
        }

        h2 {
            color: hsl(240, 75%, 98%);
            font-size: 2rem;
            
            @media screen and (max-width:768px) { 
                font-size: 1.6rem;
                text-align: center;
            }
        }

        p {
            width: 45%;
            font-size: 0.9rem;
            color: hsl(240, 75%, 98%);

            @media screen and (max-width:768px) { 
                width: 60%;
                font-size: 1rem;
                text-align: center;
            }
        }

    }

    .sign-up {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        width: 400px;
        row-gap: 20px;

        @media screen and (max-width:768px) { 
            align-items: center;
            width: auto;
            row-gap: 10px;
        }
        
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: hsl(224, 93%, 58%);
            color: hsl(240, 75%, 98%);
            border: 0;
            height: 50px;
            width: 50%;
        }

        input {
            height: 50px;
            width: 100%;
            padding: 20px;

            @media screen and (max-width:768px) {
                width: 50%; 
            }
        }
    }
`
export default SignUpStyled
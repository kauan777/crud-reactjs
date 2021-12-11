import styled from 'styled-components'

export const ContainerEdit = styled.main`

    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    form::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        left: 0;
        top: 0;
        background: linear-gradient(90deg, #C02425 0%, #F0CB35 100%);

    }

 

    form{
        position: relative;
        background-color: #121212;
        width: 80%;
        height: 500px;
        padding: 2rem 4rem 2rem 4rem;
        border-radius: .5rem;

        .field{
            display: flex;
            flex-direction: column;
            padding: 10px;
            
            label{
                margin-bottom: 8px;
                color: #fff;
            }

            input{
                padding: 10px;
                border: #fff 1px solid;
                background-color: transparent;
                border-radius: .25rem;
                outline: none;
                color: #fff;
            }

        }

        .center{
            text-align: center;
        }

        .buttons{
            margin-top: 2.5rem;
            display: flex;
            justify-content: center;
            gap: 8px;
            transition: ease-in-out .2s;


            button{
                background: linear-gradient(20deg, #C02425 15%, #F0CB35 100%);
                width: 150px;
                padding: 8px;
                border: none;
                font-weight: 500;
                color: #fff;
                cursor: pointer;
            }

            &:hover{
                filter: brightness(0.9);
            }

            a.back{
                display: block;
                width: 150px;
                padding: 8px;
                border: none;
                color: #fff;
                text-decoration: none;
                
                background: transparent;
                border: 2px solid #fff;
            }

        }

    }

    @media(max-width:560px){
        padding: 1rem;

        form{
        width: 95%;

        }
    }

    @media(max-width:486px){
        
        form{
            padding: 2rem 2rem 2rem 2rem;
        }
    }

`
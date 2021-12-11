import styled from 'styled-components'

export const BoxUser = styled.div`

display: flex;
flex-direction: column;
gap: 1rem;
border-radius: .5rem;
background-color: #121212;
width: 250px;
justify-content: center;
height: 220px;
padding: 2rem;
text-align: center;

.info-user{
    display: flex;
    align-items: center;
    gap: 1rem;

    img{
        width: 55px;
        height: 55px;
        object-fit: cover;
        border-radius: 50%;
    }

    span{
        font-weight: 500;
        
    }
}

span{
    color: #d4d4d4;
    font-weight: 100;
}

.buttons{

    button{
        width: 100px;
        padding: 5px;
        border-radius: .25rem;
        border: none;
        outline: none;
        color: #151512;
        background-color:#d4d4d4; 
        cursor: pointer;
        font-weight: 500;
        transition: ease-in-out .2s;
    }

    button:hover{
        filter: brightness(0.85);
    }

    .delete{
        background: linear-gradient(90deg, #F85032 0%, #E73827 100%);
        color: #fff;
    }

    display: flex;
    width: 100%;
    justify-content: center;
    gap: .5rem;
}

@media(max-width: 653px){
    width: 220px;
    height: 200px;

    .info-user img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .info-user span{
        font-size: 16px;
    }


    span{
        font-size: 12px;
    }
}

@media(max-width: 600px){
    width: 250px;
    height: 220px;
}

@media(max-width: 510px){
    width: 220px;
    height: 200px; 
}


`
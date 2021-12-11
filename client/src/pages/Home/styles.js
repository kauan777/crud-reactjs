import styled from "styled-components"

export const ContainerHome = styled.main`

margin-top: 4rem;
.introduction{
    h1{
        margin-left: 8.9rem;
    }

}

.add{
    margin-left: 8.9rem;
    margin-top: 1rem;
    background: linear-gradient(90deg, #C02425 0%, #F0CB35 100%);
    width: 150px;
    padding: 10px;
    border-radius: .25rem;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: ease-in-out .2s ;
}

.add:hover{
    filter: brightness(0.9);
}


@media(max-width: 1280px){
    .introduction{
         h1{
            margin-left:5.9rem;
        }
    }

    .add{
        margin-left: 5.9rem;
    }

}

@media(max-width: 970px){

    .introduction{
        margin-bottom: 2rem;
    }

    .introduction h1{ 
            margin-left:4.9rem;
    }

    .add{
        margin-left: 4.9rem;
    }
}

@media(max-width: 755px){
    .introduction h1{ 
            margin-left:3.9rem;
    }

    .add{
        margin-left: 3.9rem;
    }
}

@media(max-width: 600px){
    .introduction{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        padding: 2rem;
    }

    .introduction h1{ 
            margin-left:0rem;
        
    }

    .add{
        margin-left: 0rem;
    }
}


`

export const BoxHome = styled.section`

display: grid;
grid-template-columns: auto auto auto auto;
justify-items: center;

padding: 20px;
width: 80%;
gap: 16px;
margin-top: 2%;
background: linear-gradient(90deg, #C02425 0%, #F0CB35 100%);
margin-left: auto;
margin-right: auto;

@media(max-width: 1353px){
    width: 85%;
}

@media(max-width: 1280px){
    grid-template-columns: auto auto auto;
}

@media(max-width: 970px){
    grid-template-columns: auto auto;
}

@media(max-width: 600px){
    width: 60%;
    grid-template-columns: auto;
}

@media(max-width: 510px){
    width: 100%;

}

`
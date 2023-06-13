.square {
    width: 30%;
    height: 99%;
    background-image: url(images/shah1.png);
    border: 2px rgb(255, 255, 255) solid;
    margin: 2px;
}

.square:hover {
    width: 29.5%;
    height: 98.5%;
   /* background-color: rgb(214, 0, 182); */
   background-image: url(images/shah1.png);
    border: 2px rgb(193, 193, 193) solid;
    margin: 3px;
    display: inline-block;
    
}

.squares {
    display: inline-block;
}

.squareHint {
    width: 30%;
    height: 99%;
    margin: 2px;
    background-image: url("images/arrow.png");
    background-size: cover;
}

.squareright {
    width: 30%;
    height: 99%;
    margin: 2px;
}

#btnhint {
    background-color: red;
    width: 100px;
    height: 50px;
    margin-top: 10px;
    margin-left: 140px;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.7);
    border: 2px white solid;
}

#btnRestart {
    background-color: white;
    width: 330px;
    height: 50px;
    margin-top: 20px;
    margin-left: 30px;
    border: 3px rgba(0, 0, 0, 0.5) solid;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.7);
    transition-property: background-color;
    transition-duration: 0.5s;
    transition-delay: 0.1s;
}
#btnRestart:hover {
    background-color: rgba(255, 255, 255, 0.667);
    width: 330px;
    height: 50px;
    margin-top: 20px;
    margin-left: 30px;
    border: 3px rgba(0, 0, 0, 0.5) solid;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.7);
}
    

#board{
    margin-top: 20px;
    margin-left: 24px;
}

h1 {
    width: 200px;
    color: rgba(0, 0, 0, 0.7);
    margin: 2px;
    text-align: center;
    border: 3px rgba(0, 0, 0, 0.5) solid;
    margin-left: 90px;
    margin-top: 20px;
    background-color: white;
}

h4 {
    width: 300px;
    margin-left: 40px;
    color: rgb(143, 47, 47);
    font-size: 20px;
    background-color: white;
    border: 2px rgba(0, 0, 0, 0.5) solid;
    text-align: center;
}

h5 {
    font-size: 30px;
    color: white;
    margin: 20px;
    margin-top: 100px;
    -webkit-text-stroke: 0.4px black;
}

h6 {
    font-size: 30px;
    color: white;
    margin-left: 45px;
    margin-top: 270px;
    -webkit-text-stroke: 0.4px black;
}

#nextLevel {
    margin-left: 270px;
}

.scoreNo {
    margin-left: 40px;
}

#belugaimg {
    width: 380px;
    height: 200px;
    margin-top: 10px;
}

.tries {
    margin-left: 30px;
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.7);
}

.triesNo {
    color: red;
}

.scoreNo {
    color: rgba(255, 255, 255, 0.7);
    width: 50px;
}

#beluga {
    font-size: 30px;
    color: white;
    margin-left: 160px;
    margin-top: 20px;
    -webkit-text-stroke: 0.4px black;
}

.box {
    display: flex;
    flex-wrap: wrap;
}


.changedBoxes{
    content: "";
    display: inline-block;
    height: 620px;
    width: 390px;
    background-image: url(images/Anime1.jpg );
    background-size: cover;
    display: inline-block;
    margin: 50px;
}

body {
    background-image: url(images/background.jpg);
}

.cat {
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.7);
    background-image: url("images/cat.png");
    background-size: cover;
    display: inline-block;
    margin: 2px;
}

.cat:hover   {
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.7);
    background-image: url("images/cat.png");
    background-size: cover;
    display: inline-block;
    margin: 2px;
}

button {
    width: 80px;
    
}

.lose {
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.7);
    background-image: url("images/X.png");
    background-size: cover;
    display: inline-block;
    margin: 2px;

}

.lose:hover {
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.7);
    background-image: url("images/X.png");
    background-size: cover;
    display: inline-block;
    margin: 2px;

} 

#divCenter {
    float: right;
}

.inline {
    display: inline;
    margin-top: 5%;
}


#counter {
    font-size: 25px;
    margin-left: 20px;
}
#score {
    font-size: 25px;
    margin-left: 20px;
}

.gamespace {
    margin: 5px;
    height: 101px;
    width: 330px;
}

@media screen and (max-width: 1000px) {
    .box {
        height: 80%;
        width: 90%;
        border: 2px rgba(7, 3, 1, 0.4) solid;
        background-color: rgba(7, 3, 1, 0.6);
        margin: 5%;
    }
    #beluga {
        font-size: 90px;
        color: white;
        margin-left: 35%;
        margin-top: 10%;
        -webkit-text-stroke: 0.4px black;
    }
    
    #belugaimg {
        width: 90%;
        height: 35%;
        margin-left: 5%;
    }

    h5 {
        font-size: 70px;
        color: white;
        margin: 5%;
        margin-top: 10%;
        -webkit-text-stroke: 0.4px black;
    }

    h1 {
        width: 60%;
        height: 5%;
        color: rgba(0, 0, 0, 0.7);
        margin-left: 20%;
        margin-top: 3%;
        text-align: center;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        background-color: white;
        font-size: 60px;
    }

    #btnRestart {
        background-color: white;
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 70px;
        color: rgba(0, 0, 0, 0.7);
        transition-property: background-color;
        transition-duration: 0.5s;
        transition-delay: 0.1s;
    }
    #btnRestart:hover {
        background-color: rgba(255, 255, 255, 0.667);
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 60px;
        color: rgba(0, 0, 0, 0.7);
    }

    #board {
        width: 100%;
        height: 900px;
    }

    .gamespace{
        margin: 30px;
        width: 99%;
        height: 23%;
        margin-left: 6%;
    }

    .square {
        width: 26%;
        height: 99%;
        background-image: url(images/shah1.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: 2px rgb(255, 255, 255) solid;
        margin: 10px;
    }
    
    .square:hover {
        width: 25.5%;
        height: 98.5%;
        background-image: url(images/shah1.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: 2px rgb(193, 193, 193) solid;
        margin: 3px;
        display: inline-block;
        
    }
    .squareright {
        width: 26%;
        height: 99%;
        margin: 10px;
    }
    
    .cat {
        width: 26%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .cat:hover   {
        width: 26%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .lose {
        width: 26%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    
    }
    .lose:hover {
        width: 26%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }

    .tries {
        color: rgba(203, 72, 255, 0.7);
    }

    #counter{
        font-size: 80px;
    }

    #score {
        width: 250px;
        font-size: 80px;
        margin-left: 5%;
    }

    h2 {
        font-size: 80px;
    }

    h4 {
        width: 80%;
        height: 5%;
        margin-left: 10%;
        color: rgb(143, 47, 47);
        font-size: 45px;
        background-color: white;
        border: 2px rgba(0, 0, 0, 0.5) solid;
        text-align: center;
    }

    #btnhint {
        background-color: red;
        width: 30%;
        height: 10%;
        margin-top: 3%;
        margin-left: 33%;
        font-size: 70px;
        color: rgba(0, 0, 0, 0.7);
        border: 2px white solid;
    }

    h6 {
        font-size: 80px;
        color: white;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 20%;
        -webkit-text-stroke: 0.4px black;
    }

    #nextLevel {
        width: 30%;
        height: 5%;
        font-size: 30px;
        margin-left: 60%;
    }
} 
    


@media (min-width: 1024px) and (max-width: 1396px){
    .box {
        display: inline-block;
        height: 90%;
        width: 26%;
        border: 3px rgba(7, 3, 1, 0.4) solid;
        background-color: rgba(7, 3, 1, 0.6);
        vertical-align: top;
        margin: 30px;
        flex-wrap: wrap;
    }
    #beluga {
        font-size: 40px;
        color: white;
        margin-left: 35%;
        margin-top: 3%;
        -webkit-text-stroke: 0.4px black;
    }
    
    #belugaimg {
        width: 90%;
        height: 35%;
        margin-top: 5%;
        margin-left: 5%;
    }

    h5 {
        font-size: 20px;
        color: white;
        margin: 5%;
        margin-top: 10%;
        -webkit-text-stroke: 0.4px black;
    }

    .gamespace{
        margin: 10px;
        width: 97%;
        height: 15%;
        margin-left: 5%;
    }

    h1 {
        width: 60%;
        height: 5%;
        color: rgba(0, 0, 0, 0.7);
        margin-left: 20%;
        margin-top: 3%;
        text-align: center;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        background-color: white;
        font-size: medium;
    }

    #btnRestart {
        background-color: white;
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.7);
        transition-property: background-color;
        transition-duration: 0.5s;
        transition-delay: 0.1s;
    }
    #btnRestart:hover {
        background-color: rgba(255, 255, 255, 0.667);
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.7);
    }

    .square {
        width: 26%;
        height: 99%;
        background-image: url(images/shah1.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: 2px rgb(255, 255, 255) solid;
        margin: 2px;
    }
    
    .square:hover {
        width: 25.5%;
        height: 98.5%;
        background-image: url(images/shah1.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: 2px rgb(193, 193, 193) solid;
        margin: 3px;
        display: inline-block;
        
    }
    
    .cat {
        width: 26%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .cat:hover   {
        width: 26%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .lose {
        width: 26%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    
    }
    .lose:hover {
        width: 26%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }

    .tries {
        color: rgba(203, 72, 255, 0.7);
    }

    #counter{
        font-size: 25px;
    }

    #score {
        font-size: 25px;
        margin-left: 3%;
    }

    h2 {
        font-size: 25px;
    }

    h4 {
        width: 80%;
        height: 5%;
        margin-left: 10%;
        color: rgb(143, 47, 47);
        font-size: 13px;
        background-color: white;
        border: 2px rgba(0, 0, 0, 0.5) solid;
        text-align: center;
    }

    #btnhint {
        background-color: red;
        width: 30%;
        height: 10%;
        margin-top: 3%;
        margin-left: 33%;
        font-size: 25px;
        color: rgba(0, 0, 0, 0.7);
        border: 2px white solid;
    }

    h6 {
        font-size: 25px;
        color: white;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 40%;
        -webkit-text-stroke: 0.4px black;
    }

    #nextLevel {
        width: 30%;
        height: 5%;
        font-size: 10px;
        margin-left: 60%;
    }
}
  
@media (min-width: 1396px) and (max-width: 1706.67px) {
    /* Stiluri pentru rezoluții între 768px și 1024px */
    .box {
        display: inline-block;
        height: 90%;
        width: 30%;
        border: 3px rgba(7, 3, 1, 0.4) solid;
        background-color: rgba(7, 3, 1, 0.6);
        vertical-align: top;
        margin: 15px;
        flex-wrap: wrap;
        
    }

    #beluga {
        font-size: 60px;
        color: white;
        margin-left: 30%;
        margin-top: 3%;
        -webkit-text-stroke: 0.4px black;
    }
    
    #belugaimg {
        width: 80%;
        height: 30%;
        margin-top: 5%;
        margin-left: 15%;
    }

    h5 {
        font-size: 30px;
        color: white;
        margin: 5%;
        margin-top: 20%;
        -webkit-text-stroke: 0.4px black;
    }
    .square {
        width: 29%;
        height: 90%;
        background-image: url(images/shah1.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: 2px rgb(255, 255, 255) solid;
        margin: 2px;
    }
    
    .square:hover {
        width: 28.5%;
        height: 89.5%;
       /* background-color: rgb(214, 0, 182); */
        background-image: url(images/shah1.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: 2px rgb(193, 193, 193) solid;
        margin: 3px;
        display: inline-block;
    }

    h1 {
        width: 60%;
        height: 5%;
        color: rgba(0, 0, 0, 0.7);
        margin-left: 20%;
        margin-top: 3%;
        text-align: center;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        background-color: white;
    }
    #btnRestart {
        background-color: white;
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 50px;
        color: rgba(0, 0, 0, 0.7);
        transition-property: background-color;
        transition-duration: 0.5s;
        transition-delay: 0.1s;
    }
    #btnRestart:hover {
        background-color: rgba(255, 255, 255, 0.667);
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 50px;
        color: rgba(0, 0, 0, 0.7);
    }
    .gamespace{
        margin: 10px;
        width: 95%;
        height: 17%;
        margin-left: 5%;
    }
    .cat {
        width: 29%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .cat:hover   {
        width: 29%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .lose {
        width: 29%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    
    }
    .lose:hover {
        width: 29%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .tries {
        color: rgba(203, 72, 255, 0.7);
    }
    
}

@media (min-width: 1707px) and (max-width: 3071px) {
    .box {
        display: inline-block;
        height: 90%;
        width: 29%;
        border: 3px rgba(7, 3, 1, 0.4) solid;
        background-color: rgba(7, 3, 1, 0.6);
        vertical-align: top;
        margin: 30px;
        flex-wrap: wrap;
    }
    #beluga {
        font-size: 80px;
        color: white;
        margin-left: 30%;
        margin-top: 3%;
        -webkit-text-stroke: 0.4px black;
    }
    
    #belugaimg {
        width: 80%;
        height: 30%;
        margin-top: 5%;
        margin-left: 15%;
    }

    h5 {
        font-size: 40px;
        color: white;
        margin: 5%;
        margin-top: 20%;
        -webkit-text-stroke: 0.4px black;
    }

    .gamespace{
        margin: 10px;
        width: 95%;
        height: 15%;
        margin-left: 5%;
    }

    #btnRestart {
        background-color: white;
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 70px;
        color: rgba(0, 0, 0, 0.7);
        transition-property: background-color;
        transition-duration: 0.5s;
        transition-delay: 0.1s;
    }
    #btnRestart:hover {
        background-color: rgba(255, 255, 255, 0.667);
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 70px;
        color: rgba(0, 0, 0, 0.7);
    }
    h1 {
        width: 40%;
        height: 5%;
        color: rgba(0, 0, 0, 0.7);
        margin-left: 30%;
        margin-top: 3%;
        text-align: center;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        background-color: white;
    }
    .cat {
        width: 30%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .cat:hover   {
        width: 30%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .lose {
        width: 30%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    
    }
    .lose:hover {
        width: 30%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }

    .tries {
        color: rgba(203, 72, 255, 0.7);
    }

    #counter{
        font-size: 50px;
    }

    #score {
        font-size: 50px;
        margin-left: 10%;
    }

    h2 {
        font-size: 50px;
    }

    h4 {
        width: 70%;
        height: 5%;
        margin-left: 15%;
        color: rgb(143, 47, 47);
        font-size: 25px;
        background-color: white;
        border: 2px rgba(0, 0, 0, 0.5) solid;
        text-align: center;
    }

    #btnhint {
        background-color: red;
        width: 30%;
        height: 10%;
        margin-top: 3%;
        margin-left: 33%;
        font-size: 50px;
        color: rgba(0, 0, 0, 0.7);
        border: 2px white solid;
    }

    h6 {
        font-size: 50px;
        color: white;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 40%;
        -webkit-text-stroke: 0.4px black;
    }

    #nextLevel {
        width: 30%;
        height: 5%;
        font-size: 30px;
        margin-left: 60%;
    }
}
  
@media (min-width: 3072px) {
    /* Stiluri pentru rezoluții mai mari de 3072px */
    .box {
        display: inline-block;
        height: 90%;
        width: 31%;
        border: 3px rgba(7, 3, 1, 0.4) solid;
        background-color: rgba(7, 3, 1, 0.6);
        vertical-align: top;
        margin: 30px;
        flex-wrap: wrap;
    }
    #beluga {
        font-size: 100px;
        color: white;
        margin-left: 40%;
        margin-top: 3%;
        -webkit-text-stroke: 0.4px black;
    }
    
    #belugaimg {
        width: 70%;
        height: 30%;
        margin-top: 5%;
        margin-left: 25%;
    }

    h5 {
        font-size: 50px;
        color: white;
        margin: 5%;
        margin-top: 20%;
        -webkit-text-stroke: 0.4px black;
    }

    .gamespace{
        margin: 10px;
        width: 95%;
        height: 15%;
        margin-left: 5%;
    }

    #btnRestart {
        background-color: white;
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 70px;
        color: rgba(0, 0, 0, 0.7);
        transition-property: background-color;
        transition-duration: 0.5s;
        transition-delay: 0.1s;
    }
    #btnRestart:hover {
        background-color: rgba(255, 255, 255, 0.667);
        width: 90%;
        height: 10%;
        margin-left: 5%;
        margin-top: 3%;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        font-size: 70px;
        color: rgba(0, 0, 0, 0.7);
    }
    h1 {
        width: 40%;
        height: 5%;
        color: rgba(0, 0, 0, 0.7);
        margin-left: 30%;
        margin-top: 3%;
        text-align: center;
        border: 3px rgba(0, 0, 0, 0.5) solid;
        background-color: white;
    }
    .cat {
        width: 30%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .cat:hover   {
        width: 30%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/cat.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }
    .lose {
        width: 30%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    
    }
    .lose:hover {
        width: 30%;
        height: 99%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url("images/X.png");
        background-size: cover;
        display: inline-block;
        margin: 2px;
    }

    .tries {
        color: rgba(203, 72, 255, 0.7);
    }

    #counter{
        font-size: 100px;
    }

    #score {
        font-size: 100px;
        margin-left: 10%;
    }

    h2 {
        font-size: 100px;
    }

    h4 {
        width: 40%;
        height: 5%;
        margin-left: 30%;
        color: rgb(143, 47, 47);
        font-size: 25px;
        background-color: white;
        border: 2px rgba(0, 0, 0, 0.5) solid;
        text-align: center;
    }

    #btnhint {
        background-color: red;
        width: 30%;
        height: 10%;
        margin-top: 3%;
        margin-left: 33%;
        font-size: 50px;
        color: rgba(0, 0, 0, 0.7);
        border: 2px white solid;
    }

    h6 {
        font-size: 60px;
        color: white;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 60%;
        -webkit-text-stroke: 0.4px black;
    }

    #nextLevel {
        width: 30%;
        height: 3%;
        font-size: 30px;
        margin-left: 64%;
    }

}

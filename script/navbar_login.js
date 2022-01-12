function navbar(){
    return` <div id="main">


    <div class="top">
        <img id="imagenav" src="https://www.nicepng.com/png/detail/214-2148603_you-eat-ready-to-eat-food-icon.png" alt="">
    </div>
    <div class="search">
        <div class="searchab">
            <div class="inp"><input type="text" id='input' placeholder="Enter Dish"></div>
            <div class="logo"><i id='button' class="fas fa-search"></i></div>
        </div>
        <div class='show'></div>
    </div>
    <div id="receipe">
        <div id='home'>Home</div>
        <div id='random'>Random</div>
        <div id='day'>Receipe of the Day</div>
    </div>

</div>`
}



function down(){

    return`<div id="logtop">
    <p>Grill and chill........!!!!!!!!!</p>
</div>
<div id="backimg">

    <div id="logbutt">
        <button id='signup'>SignUp</button>
        <br>
        <button id="buttone">Login</button>
    </div>
    

    
</div>`
}



export {navbar, down}




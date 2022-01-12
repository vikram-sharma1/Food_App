
async function byname(url){

    try{
        let response = await fetch(url)

        let data = await response.json()

        return data.meals

    }
    catch(e){
        console.log('e:', e)
    }

}


function debounce(func, delay){

    let x;

    if(x){
        clearTimeout(x)
    }


    x =  setTimeout(()=>{

        func

    },delay)

}


function search_append(data, location ,down){
    location.innerHTML = null

 data.map((el)=>{

    var main_div = document.createElement('div')

    var image = document.createElement('img')
    image.src = el.strMealThumb

    var name = document.createElement('h3')
    name.textContent = el.strMeal

    var type = document.createElement('p')
    type.textContent = "Food Type :- " + el.strCategory

    var img_div = document.createElement('div')
    img_div.setAttribute('class','img_div')

    img_div.append(image)

    var data_div = document.createElement('div')
    data_div.setAttribute('class','data_div')

    data_div.append(name,type)

    var main_div = document.createElement('div')
    main_div.setAttribute('class', 'main_div')
    main_div.addEventListener('click', function(){

        click_to_change(el,location,down)
    })

    main_div.append(img_div,data_div)

    location.append(main_div)

 })   

}


function click_to_change(el,location,down){

    location.style.display = 'none'
    down.innerHTML = null


    // console.log(el)

    var title = document.createElement('h1')
    title.setAttribute('class', 'title')
    title.textContent = el.strMeal    // dish name

    var image = document.createElement('img')
    image.setAttribute('class', 'three')
    image.src = el.strMealThumb      // dish image
   

    var type = document.createElement('p')
    type.setAttribute('class', 'type')

    type.textContent ="Dish Type :  " + el.strCategory     // dish type

    var instr = document.createElement('p')
    instr.setAttribute('class', 'instr')

    instr.textContent = "Receipe :  " + el.strInstructions     // how to make


    var main_div = document.createElement('div')
    main_div.setAttribute("class", "main_divday")
    var img_div = document.createElement('div')
    img_div.setAttribute("class", "img_divday")
    var data_div = document.createElement('div')
    data_div.setAttribute("class", "data_divday")

    var link = document.createElement('h2')
    link.setAttribute('class', 'link')
    link.style.cursor = "pointer"

    img_div.append(image)
    data_div.append(instr)

    main_div.append(img_div, title, type, data_div)

    down.append(main_div)
    
    
}



export {byname, debounce, search_append}






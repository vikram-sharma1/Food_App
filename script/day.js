async function randomReceipe(url){

    try{
        let response = await fetch(url)

        let data = await response.json()

        return data.meals

    }
    catch(e){
        console.log('e:', e)
    }

}



function mealAppend(data,location){

    data.map((el) =>{

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

        link.textContent = "Receipe Video"
        link.addEventListener('click', function(){
            change(el,location)
           
        })


        img_div.append(image)
        data_div.append(instr)

        main_div.append(img_div, title, type, data_div , link)

        location.append(main_div)

    })
}

function change(el,location){
    location.innerHTML = ''
    

        var iframe = document.createElement('iframe')

        iframe.setAttribute('class', 'video_frame')
  


        let link = el.strYoutube.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")

        iframe.src = link

        


        // console.log(iframe)

        var title = document.createElement('h1')
        title.setAttribute('class', 'title')
        title.textContent = el.strMeal 

        var main_div = document.createElement('div')
        main_div.setAttribute("class", "main_divday")

        var img_div = document.createElement('div')
        img_div.setAttribute("class", "img_divday")

        var data_div = document.createElement('div')
        data_div.setAttribute("class", "data_divday")
        var type = document.createElement('p')
        type.setAttribute('class', 'type')

        type.textContent ="Dish Type :  " + el.strCategory    

        var instr = document.createElement('p')
        instr.setAttribute('class', 'instr')
    
        instr.textContent = "Receipe :  " + el.strInstructions

        iframe.height = '250px'
        iframe.width = '250px'

        img_div.append(iframe)
        data_div.append(instr)

        main_div.append(img_div, title, type, data_div)

        location.append(main_div)
        


}



export  {randomReceipe, mealAppend}

async function randomReceipe(url){

    try{
        let response = await fetch(url)

        let data = await response.json()

        data = data.categories
       
        return data

    }
    catch(e){
        console.log('e:', e)
    }

}


function appendData(data,location){





    data.map((el) => {

   
    var image = document.createElement('img')
    image.setAttribute('class', 'three')
    image.src = el.strCategoryThumb      // dish image
   

    var type = document.createElement('h2')
    type.setAttribute('class', 'type')

    type.textContent ="Dish Type :  " + el.strCategory     // dish type

    var instr = document.createElement('p')
    instr.setAttribute('class', 'instr')

    instr.textContent = "Dish Description :  " + el.strCategoryDescription     // how to make


    var main_div = document.createElement('div')
    main_div.setAttribute("class", "main_divday")
    var img_div = document.createElement('div')
    img_div.setAttribute("class", "img_divday")
    var data_div = document.createElement('div')
    data_div.setAttribute("class", "data_divday")

    img_div.append(image)
    data_div.append(instr)

    main_div.append(img_div, type, data_div)

    location.append(main_div)


    })

}






export {randomReceipe, appendData}




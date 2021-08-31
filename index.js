const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const searchButton = document.getElementById('submit')
const input = document.getElementById('search-input')
const list = document.querySelector("#list");
searchButton.addEventListener('click', handleSubmit)

function handleSubmit(){
   
    const searchInput = input.value 
    // debugger
    // grab search team value 
    // make call to the api
    makeCallToApi(searchInput)
}

function makeCallToApi(search){
    // console.log(`${baseUrl}${search}`)
    // console.log(baseUrl + search)
    fetch(`${baseUrl}${search}`)
    .then(resp => resp.json())
    .then(data => {
        console.log("a")
        addMealsToDOM(data["meals"])
    })
    console.log("b")
}

function addMealsToDOM(data){
    // debugger
    // console.log(data)
    // const mealArray = data["meals"];
    const liElements = data.map((meal) => {
        let li = document.createElement('li');
        li.innerHTML = meal["strMeal"]
        return li
        // console.log(li)
    })
    list.innerHTML = ""
    console.log(liElements)
   liElements.forEach(element => {
       list.append(element)
   })

}
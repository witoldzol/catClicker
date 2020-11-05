let cats = document.getElementsByClassName("catContainer")

let catNames = ['bob', 'grumpy']

function setCatName(i){
    let child = cats[i].firstChild
    child.textContent = catNames[i]
}

for ( let i = 0; i<cats.length; i++ ){
    
    setCatName(i)

    cats[i].addEventListener('click', (function(i){
        let counter = 0;        
        let cat = document.getElementsByClassName("catCounter")[i]
        
        return function(){
            counter++
            cat.textContent = counter
        }
    })(i))
};
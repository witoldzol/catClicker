let cat = document.getElementsByClassName("catContainer")

function incrementCounter(){
    
}

cat.forEach(catContainer => {
    catContainer.addEventListener(click, incrementCounter)
});
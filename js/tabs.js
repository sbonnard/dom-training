function addActiveClass() { 
    document.getElementById('tab2').classList.add("active-tab"); 
}

document.getElementById('tab2').addEventListener('click', function(event){addActiveClass()}
)

console.log(document.getElementById('tab2'));
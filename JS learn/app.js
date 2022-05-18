// practice

const heading = document.getElementById('hello')
// Always only 1 element and first
// h2 element!
const allHeadings = document.querySelectorAll('h1')

setTimeout(() => {
    addStyle(heading, 'JS','white')
}, 1000)

setTimeout(() => {
    addStyle(allHeadings[1], 'Is')
}, 2000)

setTimeout(() => {
    addStyle(allHeadings[2], 'Cool', 'white', '5rem')
    // addStyle(heading2.nextElementSibling, 'Cool', 'white')
}, 3000)

function addStyle(node, text, color = "red", fontSize){
    node.textContent = text
    node.style.color = color
    node.style.textAlign = "center"
    node.style.backgroundColor = "Black"
    node.style.padding = "3rem"
    if(fontSize){
        node.style.fontSize = fontSize
    }
}

heading.onclick = () =>{
    if(heading.style.color === 'red'){
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else{
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

allHeadings[1].addEventListener('dblclick', () => {
    if (allHeadings[1].style.color === 'yellow') {
        allHeadings[1].style.color = '#000'
        allHeadings[1].style.backgroundColor = '#fff'
    } else {
        allHeadings[1].style.color = 'yellow'
        allHeadings[1].style.backgroundColor = '#000'
    }
})

heading.onchange = () =>{
    heading.style.color = 'Brown'
}
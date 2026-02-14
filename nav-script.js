import blogsData from "./data.js"

const currentPath = document.location.pathname
const blogsContainer = document.getElementById('blogs-container')
const hamburgerEl = document.getElementById('hamburger')
const closeBtnEl = document.getElementById('close-btn')
const sidebar = document.getElementById('sidebar')

const tag = document.querySelector(`a[href="${currentPath}"]`)

// if(tag.parentElement.tagName === "LI"){
//     tag.classList.add("current")
// }

// sidebar handling

hamburgerEl.addEventListener('click', ()=> {
    console.log("clicked")
    sidebar.style.transform = "translateX(0%)"
})

closeBtnEl.addEventListener('click', ()=> {
    sidebar.style.transform = 'translateX(100%)'
})


const getThreeBlogs = () => {
    let blogs = ``

    for(let i = 0; i<blogsData.length; i++){
        const {date, img, alt, name, content} = blogsData[i]
        if(i < 3){
            blogs += `
            <div class="blog">
                <img src="./images/${img}" alt="${alt}" width="375" height="250">
                <span class="date">${date}</span>
                <h3>${name}</h3>
                <p class="blog-content">${content}</p>
            </div>
            `
        } 
    }
    return blogs
}
const renderBlogsData = () => {
    blogsContainer.innerHTML = getThreeBlogs()
}

renderBlogsData()

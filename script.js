import blogsData from "./data.js"

// DOM Elements
const blogsContainer = document.getElementById('blogs-container')
const viewMoreBtn = document.getElementById('view-more-btn')
const hamburgerEl = document.getElementById('hamburger')
const closeBtnEl = document.getElementById('close-btn')
const headerLinks = document.getElementById('header-links')
const sidebar = document.getElementById('sidebar')
console.log(blogsData)

const getBlogsData = () => {
    let blogs = ``

    for(let i = 0; i<blogsData.length; i++){
        const {date, img, alt, name, content} = blogsData[i]
        if(i < 3){
            blogs += `
            <div class="blog">
                <a href="#">
                    <img src="./images/${img}" alt="${alt}" width="375" height="250">
                    <span class="date">${date}</span>
                    <h3>${name}</h3>
                    <p class="blog-content">${content}</p>
                </a>
            </div>
            `
        } else {
            blogs += `
            <div class="blog hide">
                <a href="#">
                    <img src="./images/${img}" alt="${alt}" width="375" height="250">
                    <span class="date">${date}</span>
                    <h3>${name}</h3>
                    <p class="blog-content">${content}</p>
                </a>
            </div>
            `
        }

    }
    // blogsData.forEach(item => {
    //     const {date, img, alt, name, content} = item
    //     blogs += `
    //     <div class="blog">
    //         <img src="./images/${img}" alt="${alt}" width="375" height="250">
    //         <span class="date">${date}</span>
    //         <h3>${name}</h3>
    //         <p class="blog-content">${content}</p>
    //     </div>
    //     `
    // })
    return blogs
}
const renderData = () => {
    blogsContainer.innerHTML = getBlogsData()
}

renderData()

viewMoreBtn.addEventListener("click", ()=> {
    const allBlogs = document.querySelectorAll(".blog.hide")
    
    if(allBlogs.length > 0){
        allBlogs.forEach(item => {
            item.classList.remove('hide')
        })
    } else {
        const blogs = document.querySelectorAll('.blog')

        blogs.forEach((item, index) => {
            if(index >= 3) item.classList.add('hide')
        })
    }
    
    viewMoreBtn.innerText === 'View more' ? viewMoreBtn.innerText = 'View less' : viewMoreBtn.innerText = 'View more'
})


// sidebar handling

hamburgerEl.addEventListener('click', ()=> {
    sidebar.style.transform = "translateX(0%)"
})

closeBtnEl.addEventListener('click', ()=> {
    sidebar.style.transform = 'translateX(100%)'
})
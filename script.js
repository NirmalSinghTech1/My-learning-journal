import blogsData from "./data.js"

// DOM Elements
const blogsContainer = document.getElementById('blogs-container')
const viewMoreBtn = document.getElementById('view-more-btn')
console.log(blogsData)

const getBlogsData = () => {
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
        } else {
            blogs += `
            <div class="blog hide">
                <img src="./images/${img}" alt="${alt}" width="375" height="250">
                <span class="date">${date}</span>
                <h3>${name}</h3>
                <p class="blog-content">${content}</p>
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

viewMoreBtn.addEventListener("click", ()=> {
    const allBlogs = document.querySelectorAll(".blog")
    allBlogs.forEach(item => {
        item.classList.toggle('hide')
    })
    
    viewMoreBtn.innerText === 'View more' ? viewMoreBtn.innerText = 'View less' : viewMoreBtn.innerText = 'View more'
})

const renderData = () => {
    blogsContainer.innerHTML = getBlogsData()
}

renderData()
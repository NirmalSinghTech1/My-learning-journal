const currentPath = document.location.pathname

const tag = document.querySelector(`a[href="${currentPath}"]`)

if(tag.parentElement.tagName === "LI"){
    tag.classList.add("current")
}


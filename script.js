var body           = document.getElementById("body");
var header         = document.getElementById("header");
var welcome_text   = document.getElementById("welcome-text");
var header_texts   = document.getElementsByClassName("nav-text");
var project_images = document.getElementsByClassName("project-image");
var project_infos  = []

document.addEventListener("DOMContentLoaded", () => {
  for (let index = 0; index < project_images.length; index++) {
    const element = project_images[index];
    element.addEventListener("mouseover", (event) => {
        element.parentElement.lastElementChild.style.opacity = 1.0
    })
    element.addEventListener("mouseleave", (event) => {
        element.parentElement.lastElementChild.style.opacity = 0.0
    })
    element.addEventListener("click", (event) => {
        let split_strings = element.src.split("/")
        let file_name = element.src.split("/")[split_strings.length - 1].split(".").slice(0, -1) + ".html"
        document.location.href = "sub_pages/" + file_name
    })

    project_infos.push(element.parentElement.lastElementChild)
  }
});

document.addEventListener("scroll", (event) => {
    let scroll_y   = window.scrollY
    let body_style = window.getComputedStyle(document.body)
    
    let bg_color
    let nav_color
    if (scroll_y == 0) {
        bg_color  = body_style.getPropertyValue("--background-color")
        nav_color = body_style.getPropertyValue("--primary-font-color")
        welcome_text.style.opacity = 1
    }
    else {
        bg_color  = body_style.getPropertyValue("--primary-color")
        nav_color = body_style.getPropertyValue("--secondary-font-color")
        welcome_text.style.opacity = 0
    }
        
    header.style.backgroundColor = bg_color

    for (let index = 0; index < header_texts.length; index++) {
        const element = header_texts[index]
        element.style.color = nav_color
    }
})

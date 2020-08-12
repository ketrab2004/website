var projectList = document.getElementById("projectGrid")

var projectArr = [
    ["ketrab2004-website", "Github Pages Website", "10/8/2020"],
    ["roblox_infinite_terrain", "Roblox Infinite Terrain", "14/7/2020"],
    ["hangman", "HTML5 Hangman", "13/3/2020"],
    ["au_cannibalism_mod", "Autonauts Cannibalism Mod", "25/4/2020"],
    ["sm_cardboard_mod", "Scrap Mechanic Cardboard Mod", "21/5/2018"],
    ["mc_grass_mod", "Minecraft Grass Mod", "1/10/2017"]
];

projectArr.forEach(function(lis, i, arr) {
    //alert(item, i)
    var fold = lis[0]
    var name = lis[1]
    var date = lis[2]

    var imgSrc = "projects/"+fold+"/Icon.png"

    var entry = document.createElement('div');
    entry.classList.add("grid-item");
    entry.style.backgroundImage = "url("+imgSrc+")"
    //entry.style.backdropFilter = "blur(8px)"

    var text = document.createElement("a");
    var imag = document.createElement("img");
    var dat = document.createElement("a");
    //var bg = document.createElement("img")

    text.innerHTML = name
    text.classList.add("grid-title")
    text.setAttribute("href", "projects/"+fold)
    dat.innerHTML = date
    dat.classList.add("grid-date")

    imag.src = imgSrc
    imag.alt = "Icon of "+name
    imag.classList.add("grid-img")

    //bg.src = "projects/"+fold+"/Icon.png"
    //bg.alt = "Background of "+name
    //bg.classList.add("grid-bg")

    projectList.appendChild(entry)

    entry.appendChild(text)
    entry.appendChild(dat)
    entry.appendChild(imag) //invisible image so the boxes are the right size
    //entry.appendChild(bg)
})
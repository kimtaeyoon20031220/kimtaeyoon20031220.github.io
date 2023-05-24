dev_data = [
    {
        "image" : "https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png",
        "percent" : "70%",
        "name" : "C"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
        "percent" : "40%",
        "name" : "C++"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/bpzJ8L/btqAHJxe1Ib/x0ZAG10ADHAtc9ItRkLqp0/img.png",
        "percent" : "50%",
        "name" : ""
    }
]

plan_data = [
    {
        "image" : "https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png",
        "percent" : "70%",
        "name" : "C"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
        "percent" : "40%",
        "name" : "C++"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/bpzJ8L/btqAHJxe1Ib/x0ZAG10ADHAtc9ItRkLqp0/img.png",
        "percent" : "50%",
        "name" : ""
    }
]

design_data = [
    {
        "image" : "https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png",
        "percent" : "70%",
        "name" : "C"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
        "percent" : "40%",
        "name" : "C++"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/bpzJ8L/btqAHJxe1Ib/x0ZAG10ADHAtc9ItRkLqp0/img.png",
        "percent" : "50%",
        "name" : ""
    }
]

com_data = [
    {
        "image" : "https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png",
        "percent" : "70%",
        "name" : "C"
    },
    {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
        "percent" : "40%",
        "name" : "C++"
    },
    {
        "image" : "https://blog.kakaocdn.net/dn/bpzJ8L/btqAHJxe1Ib/x0ZAG10ADHAtc9ItRkLqp0/img.png",
        "percent" : "50%",
        "name" : ""
    }
]


dev = document.querySelector("#dev");
plan = document.querySelector("#plan");
design = document.querySelector("#design");
com = document.querySelector("#com");

dev.innerHTML += "<span class='skill-title'>Develop</span>"
for(let i = 0; i < dev_data.length; i++) {
    dev.innerHTML += 
    "<div class='skill-item'>" +
        "<div class='skill-icon' style='background-image: url('" + dev_data[i]["image"] + "')'></div>" +
        "<div class='skill-bar'>" +
            "<div class='skill-bar-back'></div>" +
            "<div class='skill-bar-front' style='width: " + dev_data[i]["percent"] + "; background-color: orange;'></div>" +
        "</div>" +
    "</div>"    
}

plan.innerHTML += "<span class='skill-title'>Plan</span>"
for(let i = 0; i < plan_data.length; i++) {
    plan.innerHTML += 
    "<div class='skill-item'>" +
        "<div class='skill-icon' style='background-image: url('" + plan_data[i]["image"] + "')'></div>" +
        "<div class='skill-bar'>" +
            "<div class='skill-bar-back'></div>" +
            "<div class='skill-bar-front' style='width: " + plan_data[i]["percent"] + "; background-color: orange;'></div>" +
        "</div>" +
    "</div>"    
}

design.innerHTML += "<span class='skill-title'>Design</span>"
for(let i = 0; i < design_data.length; i++) {
    design.innerHTML += 
    "<div class='skill-item'>" +
        "<div class='skill-icon' style='background-image: url('" + design_data[i]["image"] + "')'></div>" +
        "<div class='skill-bar'>" +
            "<div class='skill-bar-back'></div>" +
            "<div class='skill-bar-front' style='width: " + design_data[i]["percent"] + "; background-color: orange;'></div>" +
        "</div>" +
    "</div>"    
}

com.innerHTML += "<span class='skill-title'>Communicate</span>"
for(let i = 0; i < com_data.length; i++) {
    com.innerHTML += 
    "<div class='skill-item'>" +
        "<div class='skill-icon' style='background-image: url('" + com_data[i]["image"] + "')'></div>" +
        "<div class='skill-bar'>" +
            "<div class='skill-bar-back'></div>" +
            "<div class='skill-bar-front' style='width: " + com_data[i]["percent"] + "; background-color: orange;'></div>" +
        "</div>" +
    "</div>"    
}
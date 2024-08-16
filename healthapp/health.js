let menu = document.querySelector('.menu-btn');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

// bmi calculator
function calculate(){

    var height = parseFloat(document.getElementById("height").value)
    var weight = parseFloat(document.getElementById("weight").value)


    // result.textContent = Number(res.value);
    if(isNaN(height) || isNaN(weight))
    {
        alert("please enter the valid height and weight")
        return
    }
     
    var bmi = weight/(height*height)
    document.getElementById("result").textContent = "Your BMI is : " + bmi.toFixed(2)
    
    if(bmi<18.5)
    {
        document.getElementById("level").textContent = "Under Weight"
        showExtraContent("underweightContent")
    }
    else if(bmi>18.5 && bmi<24.9)
    {
        document.getElementById("level").textContent = "Normal Weight"
        showExtraContent("normalWeightContent")
    }
    else if(bmi>25.0 && bmi<29.9)
    {
        document.getElementById("level").textContent = "Over Weight"
        showExtraContent("overweightContent")
    }
    else
    {
        document.getElementById("level").textContent = "Obesity"
        showExtraContent("obesityContent") 
    }
}


// bmi calculator

// extra content


function showExtraContent(id) {
    // Hide all extra content sections
    var extraContents = document.getElementsByClassName("extra-content");
    for (var i = 0; i < extraContents.length; i++) {
        extraContents[i].style.display = "none";
    }
    // Show the specific extra content section
    document.getElementById(id).style.display = "block";
    // Show the section containing extra content
    document.getElementById("extraContentSection").style.display = "block";
}

// extra content 



//  healthy tips extra content

function toggleContent(id) {
    var content = document.getElementById(id + 'Content');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}


function toggleContent(sectionId) {
    var content = document.getElementById(sectionId + "Content");
    content.style.display = content.style.display === "none" ? "block" : "none";
}

//  healthy tips extra content
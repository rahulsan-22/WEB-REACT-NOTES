let dropdown = document.getElementById("gradient")
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let color3 = document.getElementById('color3')
let color_preview = document.getElementById("color_preview")
dropdown.addEventListener("change", () => {
    let gradientValue = dropdown.value
    function getColorValue() {
       let col1 = color1.value
       let col2 = color2.value
       let col3 = color3.value
       switch (gradientValue) {
        case "linear":
            color_preview.style.background = `linear-gradient(${col1},${col2},${col3})`
            break;
        case "radial":
            color_preview.style.background = `radial-gradient(${col1},${col2},${col3})`
            break;
        case "conic":
            color_preview.style.background = `conic-gradient(${col1},${col2},${col3})`
            break;
        default:
            console.log("CHOOSE A COLOR")
    }
    }
    color1.addEventListener("input",getColorValue)
    color2.addEventListener("input",getColorValue)
    color3.addEventListener("input",getColorValue)
    
})



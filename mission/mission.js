    const themeSelector = document.querySelector("select");
    function changeTheme(){
        var element = document.querySelector("body");
        const imageElement = document.getElementById("logo"); 
        if (themeSelector.value == "dark"){
            element.classList.add("dark");
            
            imageElement.src = "byui-logo_white.png";
        }
        
        else{
            element.classList.remove("dark");
            imageElement.src = "byui-logo_blue.webp";
        }
    }
    themeSelector.addEventListener('change', changeTheme);


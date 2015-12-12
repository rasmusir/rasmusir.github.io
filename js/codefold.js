---
---
var codefold = (function() {
    window.addEventListener("load", function() {
        var highlights = document.querySelectorAll(".highlight");
        for (var i = 0; i < highlights.length; i++)
        {
            prefold(highlights.item(i));
        }
    });
    
    function prefold(element)
    {
        element.setAttribute("actualheight",element.firstChild.offsetHeight);
        element.addEventListener("click", function() { toggle(element); });
        fold(element);
    }
    
    function toggle(element)
    {
        var folded = element.getAttribute("folded");
        if (folded == "true")
            unfold(element);
        else
            fold(element);
    }
    
    function fold(element)
    {
        element.firstChild.style.height = element.firstChild.offsetHeight + "px";
        element.style.cursor = "zoom-in";
        window.requestAnimationFrame(function() {
            element.firstChild.style.height = "40px";
        });
        element.setAttribute("folded", "true");
    }
    
    function unfold(element)
    {
        element.firstChild.style.height = element.firstChild.offsetHeight + "px";
        element.style.cursor = "zoom-out";
        window.requestAnimationFrame(function() {
            element.firstChild.style.height = element.getAttribute("actualheight") + "px";
        });
        element.setAttribute("folded", "false");
    }
})();

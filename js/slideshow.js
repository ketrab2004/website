var slider = document.getElementById("sligure")

var cur = 1
var animTime = 750
function button(num) {
    if (num != cur) {
        tot = -animTime //so its 0 when anim done
        
        slider.animate([
            { left: (-(cur-1) * 100)+"%" },
            { left: (-(num-1) * 100)+"%" }
        ], {
            duration: animTime,
            iterations: 1
        })
        slider.style.left = (-(num-1) * 100)+"%"
        
        cur = num
    }
}

var last = 0
var tot = 0
function step(now) {
    var delta = now-last
    last = now
    //alert(delta)
    tot+=delta
    
    if (tot >= 5000) {
        var goto = cur+1
        if (goto > 9) {
            goto = 1
        }
        button(goto)
    }
    
    window.requestAnimationFrame(step)
}
window.requestAnimationFrame(step)
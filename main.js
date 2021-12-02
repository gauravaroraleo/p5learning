function setup() {
   c1= createCanvas(550, 550)
v1= createCapture(VIDEO)
    c1.center()
    v1.hide()
}
function draw(){
    image(v1,0,0,550,550)
    tint(tc)
}
var tc="";
function choose_color(){
    tc=document.getElementById("cn").value
    
}
function take_snapshot(){
    save("selfie.png")
    
}
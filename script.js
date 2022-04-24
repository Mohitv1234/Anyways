var clattur = `<div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div><div class = "arrow"></div>`;
var arr = ["arrow-design_QJI2WG_SB_PM-removebg-preview.png","images-removebg-preview.png","rocket_800_wht-removebg-preview.png","arrow-design_QJI2WG_SB_PM-removebg-preview.png","images-removebg-preview.png","rocket_800_wht-removebg-preview.png","arrow-design_QJI2WG_SB_PM-removebg-preview.png","images-removebg-preview.png","rocket_800_wht-removebg-preview.png","images-removebg-preview.png"];
document.querySelector("#arrows").innerHTML = clattur;
document.querySelectorAll(".arrow").forEach(function(ele){
    ele.style.top = `${Math.floor(Math.random()*450)}px`;
    ele.style.left = `${Math.floor(Math.random()*1100)}px`;
})
var  a;
document.querySelectorAll(".arrow").forEach(function(ele){
    ele.addEventListener("mouseout",function(){
        a = arr[Math.floor(Math.random()*10)]
        document.querySelectorAll(".arrow").forEach(function(eles){
            eles.style.backgroundImage = `url('${a}')`;
        })
    })
})
var  arrows = document.querySelectorAll(".arrow");
function rotatearrow(dex,dey){
    arrows.forEach(function(aro){
        var x = (aro.getBoundingClientRect().left) + (aro.clientWidth / 2);
        var y = (aro.getBoundingClientRect().top) + (aro.clientHeight / 2);
        var  radian = Math.atan2(dex-x,dey-y);
        var rot = (radian*(180 / Math.PI)* -1)+270;
        aro.style.transform = `rotate(${rot}deg)`;
    })
}
window.addEventListener("mousemove",function(dets){
    rotatearrow(dets.clientX,dets.clientY);
})
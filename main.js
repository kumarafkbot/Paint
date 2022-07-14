var mouseEvent = "empty"; var last_position_of_x, last_position_of_y; canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("2d"); color = "black"; width_of_line = 1;
canvas.addEventListener ("mousedown",my_mousedown);
 function my_mousedown(e)
 {mouseEvent="mousedown"}
 canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
 current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
 current_position_of_mouse_y=e.clientY-canvas.offsetTop;
 if (mouseEvent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_line;
    console.log("last Position of x and y coordinates are,x="+last_position_of_x+"y="+last_position_of_y)
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current Position of x and y coordinates are,x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y)
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
 }
last_position_of_x=current_position_of_mouse_x
last_position_of_y=current_position_of_mouse_y
 }
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width < 992)
{
   document.getElementById("mycanvas").width = new_width;
   document.getElementById("mycanvas").height = new_height;
   document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e) {
   console.log ("my_touchstart");
   last_position_of_x = e.touches[0].clientX - canvas.offsetLeft; 
   last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouch_move);
function mytouch_move(e) {
   console.log ("my_touchmove");
   current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft; 
   current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
   ctx.beginPath();
   ctx.strokeStyle=color
   ctx.lineWidth=width_of_line;
   console.log("last Position of x and y coordinates are,x="+last_position_of_x+"y="+last_position_of_y)
   ctx.moveTo(last_position_of_x,last_position_of_y);
   console.log("current Position of x and y coordinates are,x="+current_position_of_touch_x+"y="+current_position_of_touch_y)
   ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
   ctx.stroke();
   last_position_of_x=current_position_of_touch_x
last_position_of_y=current_position_of_touch_y
}

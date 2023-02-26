let mainimg = document.getElementById("mainimg");
let colimg = document.getElementsByClassName("colimg");

colimg[0].onclick= ()=> {
    mainimg.src = colimg[0].src;
}
colimg[1].onclick= ()=> {
    mainimg.src = colimg[1].src;
}
colimg[2].onclick = ()=> {
    mainimg.src = colimg[2].src;
}
colimg[3].onclick = ()=>{
    mainimg.src = colimg[3].src;
}
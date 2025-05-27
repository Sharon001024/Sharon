    myFunction=()=>{
    let txt;
    if (confirm("已加入購物車")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementsByClassName("demo").innerHTML = txt;
}
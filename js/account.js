<div id="stuff">
<span id="name"> Zack</span>
<button onclick="changeName()"> Change Name </button>
</div>

<script>

function saveName(c, a){
    if (c==a){
        var o = document.getElementById("name");
        o.innerHTML="";
    }
}

function changeName(){
    var l = document.getElementById("name");
    var a = document.getElementById("name").innerHTML;
    var n = document.createElement("input");
    n.value=a;
    l.innerHTML="";
    l.appendChild(n);
    var c = n.value;
    var b = document.createElement ("button");
    b.innerHTML="save";
    b.onclick="saveName(c, a)";
    l.appendChild(b);
    
}



</script>
window.onload=()=>{
    var rubik= document.querySelector("#rubik");
    var side3=document.querySelector("#side3");
    var sides=["front","back","left","right","top","bottom"];
    var count=-1;
    var layerCount=-1;
    var top=0;
    var degX=0;
    var degY=0;
    var keyCount=0;
    var keyPattern="";
    var degLeft=0;
    var patterns=["741","147","789","987","963","369","123","321"];
    
    var builtCubes=()=>{
        for(var i=1; i<=27;i++){
            count++;
            var innerCube= document.createElement("div");
            
            if(i<=9){
                innerCube.setAttribute("class","cubes cube"+i+" layer1");
            }
            else if(i<=18){
                innerCube.setAttribute("class","cubes cube"+i+" layer2");
            }
            else{
               innerCube.setAttribute("class","cubes cube"+i+" layer3"); 
            }
            
            for(var j=0;j<6;j++){
                var div= document.createElement("div");
                div.setAttribute("class","sides "+sides[j]+" "+sides[j]+""+i);
                innerCube.appendChild(div);
            if(count<9){
                innerCube.style.transform="translateZ(-50px)";
                }
            else if(count>=9 && count<18){
                innerCube.style.transform="translateZ(0px)";
            }
            else if(count>=18){
                innerCube.style.transform="translateZ(50px)";
            }
            }
            var left=(count%3)*50;
                if(count%3==0){
                    layerCount++;
                    if(layerCount==3){
                        layerCount=0;
                    }
                }
            top=layerCount*50;
            innerCube.style.top=top+"px";
            innerCube.style.left=left+"px";
            rubik.appendChild(innerCube);
        }
        
        
    }
    builtCubes();
    var assignColors=()=>{
        var side1= document.querySelectorAll(".layer1 .back");
        var side2=[];
        var side4=[];
        var side5=[];
        var side6=[];
        
        for(var i=0;i<side1.length;i++){
            side1[i].style.background="green";
        }
        
        var a= document.querySelectorAll(".layer1 .left");
        var b= document.querySelectorAll(".layer2 .left");
        var c= document.querySelectorAll(".layer3 .left");
        for(var i=0;i<a.length;i++){
            side2.push(a[i]);
        }
        for(var i=0;i<b.length;i++){
            side2.push(b[i]);
        }
        for(var i=0;i<c.length;i++){
            side2.push(c[i]);
        }
        for(var i=0;i<side2.length;i++){
            side2[i].style.background="red";
        }
        
        var side3=document.querySelectorAll(".layer3 .front");
        for(var i=0;i<side3.length;i++){
            side3[i].style.background="blue";
        }
        
        var d= document.querySelectorAll(".layer1 .right");
        var e= document.querySelectorAll(".layer2 .right");
        var f= document.querySelectorAll(".layer3 .right");
        for(var i=0;i<d.length;i++){
            side4.push(d[i]);
        }
        for(var i=0;i<e.length;i++){
            side4.push(e[i]);
        }
        for(var i=0;i<f.length;i++){
            side4.push(f[i]);
        }
        for(var i=0;i<side4.length;i++){
            side4[i].style.background="#E67E22";
        }
        
        var g= document.querySelectorAll(".layer1 .top");
        var h= document.querySelectorAll(".layer2 .top");
        var k= document.querySelectorAll(".layer3 .top");
        for(var i=0;i<g.length;i++){
            side5.push(g[i]);
        }
        for(var i=0;i<h.length;i++){
            side5.push(h[i]);
        }
        for(var i=0;i<k.length;i++){
            side5.push(k[i]);
        }
        for(var i=0;i<side4.length;i++){
            side5[i].style.background="white";
        }
        var l= document.querySelectorAll(".layer1 .bottom");
        var m= document.querySelectorAll(".layer2 .bottom");
        var n= document.querySelectorAll(".layer3 .bottom");
        for(var i=0;i<l.length;i++){
            side6.push(l[i]);
        }
        for(var i=0;i<m.length;i++){
            side6.push(m[i]);
        }
        for(var i=0;i<n.length;i++){
            side6.push(n[i]);
        }
        for(var i=0;i<side4.length;i++){
            side6[i].style.background="yellow";
        }
    }
    
    assignColors();
    
    document.addEventListener("keydown",(event)=>{
        console.log(event.key);
        if(event.keyCode==37){
            degX-=18;
            rubik.style.transform="rotateY("+degX+"deg) rotateX("+degY+"deg)";
        }
        else if(event.keyCode==39){
            degX+=18;
            rubik.style.transform="rotateY("+degX+"deg) rotateX("+degY+"deg)";
        }
        else if(event.keyCode==38){
            degY+=18;
            rubik.style.transform="rotateX("+degY+"deg) rotateY("+degX+"deg)";
        }
        else if(event.keyCode==40){
            degY-=18;
            rubik.style.transform="rotateX("+degY+"deg) rotateY("+degX+"deg)";
        }
        var x= event.key;
        if(x==7||x==4||x==1){
            keyCount++;
            keyPattern+=String(x);
            console.log(keyCount);
            
            if(keyCount==3 && keyPattern in patterns){
                console.log(keyPattern);
                if(keyPattern==patterns[0]){
                    degLeft+=90;
                    side3.style.transform="rotateY(-90deg) translateZ(50px) rotateZ("+degLeft+"deg)";
                }
                else if(keyPattern=="147"){
                    degLeft-=90;
                    side3.style.transform="rotateY(-90deg) translateZ(50px) rotateZ("+degLeft+"deg)";
                }
                keyCount=0;
                keyPattern="";
            }
        }
        
        
    });
    
    //document.addEventListener("keypress", (event)=>{
        ///keyCount++;
        
    //});
}

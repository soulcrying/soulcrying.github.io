<script language="javascript">
　　 image = new Array(4); 
　　 image [0] = './imgs/1.jpg' 
　　 image [1] = './imgs/2.jpg'
　　 image [2] = './imgs/3.jpg'
　　 image [3] = './imgs/4.jpg'
　　 image [4] = './imgs/5.jpg'
　　 number = Math.floor(Math.random() * image.length);
    var obj = document.getElementById("top-slider");
    obj.style.cssText ="background:url("+image[number]+");background-position: 0 0;    background-repeat: no-repeat;    background-attachment: fixed; margin: 0 auto; background-size: cover;"; 
</script>

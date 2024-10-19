<script language="javascript">
　　 image = new Array(4); //定义image为图片数量的数组
　　 image [0] = './img/1.jpg' //背景图象的路径
　　 image [1] = './img/2.jpg'
　　 image [2] = './img/3.jpg'
　　 image [3] = './img/4.jpg'
　　 image [4] = './img/5.jpg'
　　 number = Math.floor(Math.random() * image.length);
    var obj = document.getElementById("top-slider");
    obj.style.cssText ="background:url("+image[number]+");background-position: 0 0;    background-repeat: no-repeat;    background-attachment: fixed; margin: 0 auto; background-size: cover;"; 
</script>
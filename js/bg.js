	var imgs = [
	           "./imgs/1.png",
	           "./imgs/2.png",
	           "./imgs/3.png",
	           "./imgs/4.png",
	           "./imgs/5.png",
	           "./imgs/6.jpg",
	           "./imgs/7.jpg",
	           "./imgs/8.jpg",
	           "./imgs/9.jpg",
	           "./imgs/10.jpg",
	           "./imgs/11.png",
	           "./imgs/12.jpg",
	           "./imgs/13.png",
	           "./imgs/14.jpg",
	           "./imgs/15.jpg",
	           "./imgs/16.jpg",
	           "./imgs/17.png",
	           "./imgs/18.jpg",
	           "./imgs/19.jpg",
	           "./imgs/20.png",
	           ];
	var index=Math.floor(Math.random()*imgs.length);;
	var img = imgs[index];
    document.write("<BODY BACKGROUND="+img+"  no-repeat>");
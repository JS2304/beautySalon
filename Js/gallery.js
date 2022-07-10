var galleryimg = document.querySelector("#Gbox");

var galleryImage=["nail.png","spa.png","nail.png","nail.png","nail.png","nail.png"];

for(i=0;i<galleryImage.length;i++){
    galleryimg.innerHTML+=`
    <div class="col-md-4">
        <div class="gallery-img">
             <img src="img/${galleryImage[i]}">
        </div><!--styling-column-->
    </div>      
       
    `;
}

console.log(galleryimg);

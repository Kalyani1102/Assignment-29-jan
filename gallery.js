var button_reference = document.getElementById('initButton');

var img_arr = [
   'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg',
   'https://www.publicdomainpictures.net/pictures/290000/nahled/bird-1552664059bJK.jpg',
   'https://maldives-resorts.com/wp-content/uploads/2019/09/milaidhoo-island-maldives-4.jpg',
   'https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg',
   'https://ghantee.com/wp-content/uploads/2020/07/beautiful-shivling-wallpaper-for-mobile-full-HD-576x1024.jpg',
   'https://live.staticflickr.com/4246/34051788833_93749cdf44_b.jpg',
   'https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg',
   'https://expertphotography.b-cdn.net/wp-content/uploads/2021/02/children-photographers-2-1.jpg',
   'https://licenceindia.s3.ap-south-1.amazonaws.com/s3fs-public/news27novstep10licenseindia1019765dde841a16164.jpg',
   'https://globetrottingsu.com/wp-content/uploads/2020/09/Gardens-by-the-bay-Singapore-Flyer.jpg',
   'https://i.pinimg.com/originals/7c/e7/5b/7ce75b9afacc423520a1a3d4823b4859.jpg',
   'https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-clarke-quay.jpg',
   'https://www.hdwallpaper.nu/wp-content/uploads/2015/04/vista-de-singapore-nocturna-978.jpg',
   'https://imageio.forbes.com/specials-images/imageserve/610c352d8091b398825ab21f/0x0.jpg?format=jpg&width=1200&fit=bounds',
   'https://maldives-resorts.com/wp-content/uploads/2019/09/milaidhoo-island-maldives-3.jpg',
   'https://theroadlestraveled.com/wp-content/uploads/2015/12/singapore-trees-that-light-up-gardens-by-the-bay.jpg',
   'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=',
   'https://funkylife.in/wp-content/uploads/2021/06/good-night-images-34.jpg',
   'https://tse3.mm.bing.net/th?id=OIP.7ItX7u6NQCDHTzZ-66RVxAHaD3&pid=Api&P=0&w=348&h=182',
   'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynHfBuLHkLUNPZFkIHShI0Z4NL2-h-wC76Q&usqp=CAU',
   'https://cdn.dpauls.com/public/images/traveldeal/cruise/genting-dream-singapore.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXWUMr_Vcw6KhaHLTy0SNSljgWrMIi5rFQ&usqp=CAU',
   'https://tse2.mm.bing.net/th?id=OIP.-CABJCNh_rTgQQyzNJhlfgHaE7&pid=Api&P=0&w=245&h=163',
   'https://maldives-resorts.com/wp-content/uploads/2019/09/milaidhoo-island-maldives-3.jpg',
   'https://thumbs.dreamstime.com/b/little-girl-smelling-yellow-flower-enjoys-smell-flowers-meadow-54538830.jpg', 
];


button_reference.addEventListener('click', showImages); 


function imageClicked (event) {
   var img_prev_r = document.getElementById("img_preview");
   img_prev_r.classList.remove("d-none");

      var img_r = img_prev_r.children[0];
      img_r.src = event.target.src;
   

}

function showImages() {
   var container_ref = document.getElementById("gallery_container"); 

   container_ref.innerText = "";

   for(var i = 0; i < img_arr.length; i = i + 1) {
      var img_ref = document.createElement("img"); 
      img_ref.src = img_arr[i];
      
      img_ref.addEventListener('click', imageClicked)
      container_ref.appendChild(img_ref);
   }
}


cencel.addEventListener('click',Close);

    function Close(){
        var img_prev_r = document.getElementById("img_preview");
        img_prev_r.classList.add("d-none");

    }

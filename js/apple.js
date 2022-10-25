
   
   let dataInfo = {
         dataName:"Enjoy up to ₹7000 instant savings",
         dataOrder:"on qualifying orders across all products.‡",
   }

        document.querySelector('.click-More').addEventListener("click",function (newDta) {
            newDta.preventDefault();

            const enjoy =  document.querySelector(".para-info-apple");
            const data =  document.querySelector(".para-info");

              // .addEventListener('click');
              enjoy.innerHTML = dataInfo.dataName;
              data.innerHTML = dataInfo.dataOrder;
            
              });




           



              //   const forData = [{
              //           img:  "./images/mac-img/Virtual-Sessions-img/all-app-section.jpg",
              //           imgMain:"./images/mac-img/Virtual-Sessions-img/apple-one-logo.jpg",
              //          }
              // ];
              // const repetData = (dataMain) => {
              //     let dataRepat = ' ';

              //     console.log(dataMain, 'nikki');
                  
              //     for (let dataSame of dataMain) {

              //         dataRepat +=`
              //               <div class="promo-img center-all-data col-12 col-lg-6">
              //                 <img src="${forData.img}" alt="" style="width:50%">
              //               </div>

              //                 <div class="promo-data center-all-data  col-12 col-lg-6">
              //                         <img src="${forData.imgMain}" alt="" style="width:50%">
              //                         <p class="max-font mt-2">Bundle four Apple services. </p>
              //                         <span class="max-font"> And enjoy more for less.</span>
              //                     <ul class="links-inline list-unstyled mt-3">
              //                         <li>
              //                           <a class="comman-font" href="#"">Try it free ></a>
              //                         </li>
              //                         <li>
              //                           <a class="comman-font" href="#">Learn more ></a>
              //                         </li>
              //                     </ul>
              //                 </div>  
              //               `;
              //         }
              //     document.querySelector(".new-for-loop").innerHTML = dataRepat;
              //     return dataRepat; 
              // }
              // console.log(forData[0]);
              // repetData(' ');










              // const infoImg = {
              //       mainImg: "./images/info-page-img/coffee-mug-with-code.jpg",
              // }













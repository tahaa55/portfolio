function java(){
         let camel = document.getElementById('camel').value;
         let zakat;

         if(camel>=150){
           zakat="3 Hiqqay";
         }
           else if(camel>=145){
            zakat="2 Hiqqay + 1 Bint e Makhaz";
        }
            else if(camel>=140){
                zakat="2 Hiqqay + 4 Goat";
            }
                else if(camel>=135){
                  zakat="2 Hiqqay + 3 Goat";
                }
                else if(camel>=130){
                    zakat="2 Hiqqay + 2 Goat";
                }     
                else if(camel>=125){
                    zakat="2 Hiqqay + 1 Goat";
                }     
                else if(camel>=121){
                    zakat="2 Hiqqay";
                }     
                else if(camel>=91){
                    zakat="2 hiqqay";
                }     
                else if(camel>=76){
                    zakat="2 bint e Laboon";
                }     
                    
                else if(camel>=61){
                    zakat="1 Jizza";
                }     
                else if(camel>=46){
                    zakat="1 Hiqqa";
                }  
                else if(camel>=36){
                    zakat="1 Bint e Laboon";
                }   
                else if(camel>=25){
                    zakat="1 Bint e Makhaz";
                }      
                else if(camel>=20){
                    zakat="4 Goat or Sheep";
                }   
                else if(camel>=15){
                    zakat="3 Goat or Sheep";
                }   
                else if(camel>=10){
                    zakat="2 Goat or Sheep";
                }   
                else if(camel>=5){
                    zakat="1 Goat or Sheep";
                }   

            else{
                zakat="No Zakat";
            }
       document.getElementById('camel2').innerHTML=zakat;
     }

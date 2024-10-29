function playRR()
{
   var player = Math.ceil(Math.random()*6);
   var weapon = Math.ceil(Math.random()*6);
   var bangImage = "bang-Image.jpg";
   var safeImage = "safe-Image.jpg";
   var emptyImage = "empty-Image.jpg";
   document.getElementById("finalResult").innerHTML = "updates";

   if (player == weapon) /* Player loses condition*/
   {
        document.getElementById("playerImg").src = bangImage; 
        document.getElementById("bangImg").src = bangImage; 
   }
   /*Player winning conditions*/
   else if((player == 1 && weapon ==6) || (player == 2 && weapon ==5) || (player == 3 && weapon ==4) 
        || (player == 4 && weapon ==3) || (player == 5 && weapon ==2) || (player == 6 && weapon ==1))
   {
        document.getElementById("playerImg").src = safeImage;
        document.getElementById("bangImg").src = emptyImage;
   }
   
   else 
   {
        document.getElementById("playerImg").src = safeImage;
        document.getElementById("bangImg").src = emptyImage;
   }
   

   /*if (player == 1)
   {
        document.getElementById("playerImg").src = safeImage;
   }
   else if (player == 2)
    {
        document.getElementById("playerImg").src = safeImage;
    }
    else if (player == 3)
    {
         document.getElementById("playerImg").src = safeImage;
    }
    else if (player == 4)
    {
         document.getElementById("playerImg").src = safeImage;
    }
     else if (player == 5)
    {
         document.getElementById("playerImg").src = safeImage;
    }
    else 
    {
         document.getElementById("playerImg").src = safeImage;
    }

    if (weapon == 1)
        {
             document.getElementById("weaponImg").src = bangImage;
        }
        else if (weapon == 2)
         {
             document.getElementById("weaponImg").src = bangImage;
         }
         else if (weapon == 3)
         {
              document.getElementById("weaponImg").src = bangImage;
         }
         else if (weapon == 4)
         {
              document.getElementById("weaponImg").src = bangImage;
         }
          else if (weapon == 5)
         {
              document.getElementById("weaponImg").src = bangImage;
         }
         else 
         {
              document.getElementById("weaponImg").src = bangImage;
         }*/

     if (player == weapon) /* Player loses condition*/
     {
          document.getElementById("finalResult").innerHTML = "DEAD";
     } 
     /*Player winning conditions*/
     else if((player == 1 && weapon ==6) || (player == 2 && weapon ==5) || (player == 3 && weapon ==4) 
          || (player == 4 && weapon ==3) || (player == 5 && weapon ==2) || (player == 6 && weapon ==1))
     {
          document.getElementById("finalResult").innerHTML = "Player is SAFE";
     }
     else 
     {
          document.getElementById("finalResult").innerHTML = "Player is SAFE";
     }
}


       function GetElementDistance(obj) {
              var div = document.getElementById(obj);
              var topLen = div.getBoundingClientRect().top; // The distance (length) of div from the top of screen
              var bottomLen = div.getBoundingClientRect().bottom; // The distance (length) of div from the bottom of screen

              var leftLen = div.getBoundingClientRect().left; // The distance (length) of div from the left of screen
              var rightLen = div.getBoundingClientRect().right; // The distance (length) of div from the right of screen

       return "topLength=" + topLen + "; bottomLen=" + bottomLen + "; leftLen=" + leftLen + "; rightLen=" + rightLen;
       }
       document.write(GetElementDistance("divId"));
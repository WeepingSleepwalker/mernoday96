/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/
    Given to a Coding Dojo alumni by Riot games in 2021.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

// 
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {

    let tempObj = {};
    for(var i = 0; i < str.length; i ++){
        if (isNaN(str[i])){
            let tempVal = "";
            for (let x = i+1; x <= str.length; x++ ) {
                if (!isNaN(str[i])){
                    tempVal += str[x];
                    console.log(tempVal);
                }
                else{
                    break;
                }
            }
               
            if (tempObj.hasOwnProperty(str[i])) {
                 tempObj[str[i]] = parseInt(tempVal);
            }else{
                tempObj[str[i]] += parseInt(tempVal);
            }
        }
    }
return tempObj;
}

console.log(rehash(str1))



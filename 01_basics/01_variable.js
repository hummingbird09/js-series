const accountId = 144553                        // value can't be changed
let accountEmail = "ashika@gmail.com"
var accountPassword = "12345"
accountCity = "bhopal"

// accountId = 2   // not allowed

accountEmail = "hc@hc."
accountPassword = "34543234321"
accountCity = "bengaluru"
let accountState;

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
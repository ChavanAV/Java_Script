

/*

HOF             |use                |      syntax                       |return     |modify original array  |
-------------------------------------------------------------------------------------------------------------
forEach()       |Iteratio           |arr.forEach((val,i,wa)=>{})        |NO         |NO                     |
-------------------------------------------------------------------------------------------------------------
map()           |Iteratio           |arr.map((val,i,wa)=>{})            |Array      |NO                     |
-------------------------------------------------------------------------------------------------------------
filter()        |Filter the array   |arr.filter((val,i,wa)=>{})         |Filterd    |NO                     |
                |Based on condition |                                   |Array      |                       |
-------------------------------------------------------------------------------------------------------------
find()          |Find the           |arr.find((val,i,wa)=>{})           |Single     |NO                     |
                |perticular element |                                   |element    |                       |
-------------------------------------------------------------------------------------------------------------
sort()          |Sort the           |arr.sort((cur_val, next_val)=>{})  |Sorted     |Yes                    |
                |element            |                                   |array      |                       |
-------------------------------------------------------------------------------------------------------------



*/




/* 
// sort
//  we cannot leave empty sort method like sort() 
//if we do then it will sort the elements based on first digit only

1- retruns sorted array
2- modifies original array
3- used to sort the array


//for each
1- not return anything
2- not modifies original array
3- iterate in the array
*/
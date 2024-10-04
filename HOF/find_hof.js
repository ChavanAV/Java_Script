
// find

/*
syntax-

    let variable = arr.find((value, index, wholeArray) => {
        return val > 20;
    })

-It will search for the given condition 
-if condition satisfied then the perticular value get return and loop will terminates
-if not the loop goes on for the next iteration

filter vs find
1-  filter returns array
    find returns condition satisfied value.
2-  filter filters the records based on the condition till end of array
    find fetch the record if condition matched and terminates.

*/

let arr = [10, 20, 30, 40]
let f = arr.find((val) => {
    return val > 20;
})
console.log(f);


let data = [{ "id": 1, "first_name": "Rockie", "email": "rmarczyk0@networkadvertising.org", "gender": "Male" },
{ "id": 2, "first_name": "My", "email": "mcleaveland1@si.edu", "gender": "Male" },
{ "id": 3, "first_name": "Nicol", "email": "npriditt2@opensource.org", "gender": "Female" },
{ "id": 4, "first_name": "Rona", "email": "rbrigginshaw3@gnu.org", "gender": "Female" },
{ "id": 5, "first_name": "Chelsey", "email": "cblackway4@tripod.com", "gender": "Female" },
{ "id": 6, "first_name": "Sigfried", "email": "scoulston5@fda.gov", "gender": "Male" },
{ "id": 7, "first_name": "Rebeka", "email": "rleas6@engadget.com", "gender": "Female" },
{ "id": 8, "first_name": "Torrence", "email": "tosmond7@senate.gov", "gender": "Male" },
{ "id": 9, "first_name": "Elton", "email": "eranfield8@webmd.com", "gender": "Male" },
{ "id": 10, "first_name": "Stacey", "email": "smacfadzan9@blinklist.com", "gender": "Female" },
{ "id": 11, "first_name": "Opalina", "email": "oskerma@vimeo.com", "gender": "Female" },
{ "id": 12, "first_name": "King", "email": "kphizakarleyb@state.gov", "gender": "Male" },
{ "id": 13, "first_name": "Filberte", "email": "fperonc@mediafire.com", "gender": "Male" },
{ "id": 14, "first_name": "Auroora", "email": "amartlandd@yahoo.co.jp", "gender": "Female" },
{ "id": 15, "first_name": "Ynes", "email": "ykentwelle@google.fr", "gender": "Genderfluid" },
{ "id": 16, "first_name": "Kaiser", "email": "kfoulksf@vistaprint.com", "gender": "Male" },
{ "id": 17, "first_name": "Jessee", "email": "jgirong@independent.co.uk", "gender": "Male" },
{ "id": 18, "first_name": "Eugenie", "email": "etroyh@gravatar.com", "gender": "Female" },
{ "id": 19, "first_name": "Karlens", "email": "ksucklingi@craigslist.org", "gender": "Polygender" },
{ "id": 20, "first_name": "Stesha", "email": "svazquezj@multiply.com", "gender": "Female" },
{ "id": 21, "first_name": "Daisey", "email": "dshobrookk@vimeo.com", "gender": "Female" }]

let d = data.find(e => e.first_name == "King")
console.log(d);

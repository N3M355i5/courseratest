/*
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO Name is: " + company.ceo.firstName);
console.log(company["name"]);
company["stock of the company"] = 110;
console.log(company);
*/
var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    $stock: 110
};
console.log(facebook);
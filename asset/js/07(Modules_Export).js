//1. Add export key word before const  
const myVar = "Export Var By Adding Export Keyword In the Front!!";
export{myVar}

//export this function at last line
function exp1() {
    return "Export as a list!!!";
}
//export this function at last line
function exp2() {
    return "Export as an Alias!!!";
}
//export this function at last line
function exp3() {
    return "Import as an Alias!!!";
}
//2. List export(comma separated list )
export {exp1, exp2, exp3}

//3. Export exp2 with AliasName ==> exp2_Alias
export{exp2 as exp2_Alias};

// //4. Exporting exp3
// export{exp3};  //it says exporting multiple time as it is exported at the upper stage


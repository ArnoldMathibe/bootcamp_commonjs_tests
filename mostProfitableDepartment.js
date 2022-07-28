module.exports = function mostProfitableDepartment(salesData){
    var HighestDep = 0;
    var depSales = {};
    var profitableDep;
    for (var i=0 ;i<salesData.length;i++){
      if(depSales[salesData[i].department] == undefined){
        depSales[salesData[i].department] = salesData[i].sales;
      }
      else {
        depSales[salesData[i].department] = depSales[salesData[i].department] + salesData[i].sales;
      }
    }
    for(var i in depSales){
      if(i == undefined)
        break;
      if(depSales[i] > HighestDep){
        HighestDep = depSales[i];
        profitableDep = i;
      }
    }
    return (profitableDep);
}
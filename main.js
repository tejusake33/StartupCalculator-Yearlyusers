function cal(event){
    if(event){
        event.preventDefault();
    }
    
    let launchingUsers = document.querySelector("[name='launchingUsers']").value;
    let growth = (document.querySelector("[name='growth']").value/100)+1;
    let churn = (document.querySelector("[name='churn']").value/100);

    let data = [launchingUsers];
    let labels = [];

    for (let i=0; i<=5; i++){
        var yearlyUsers = (data[i]*growth)-(data[i]*churn);
        data.push(yearlyUsers);
        labels.push(i);
    }
    console.log(data);
    data.pop(data[6]);
    console.log(data);

    let result = document.querySelector("[class='result']");
    result.innerHTML = Math.trunc(data[5]);
    createChart(labels,data);
}

let myChart = null;

function createChart(labelData,dataPoints){

    let labels = labelData;
    const data = {
        labels : labels,
        datasets : [
            {
                label : "yearly users growth",
                data : dataPoints,
                borderColor : "rgb(75,192,192)",
            }
        ],
    };
    const config = {
        type: "line",
        data: data,
        options: {
          scales: {
            x: {
              beginAtZero: false,
              title: {
                color: "grey",
                display: true,
                text: "Years Passed"
              }
            },
            y: {
              beginAtZero: false,
              title: {
                color: "grey",
                display: true,
                text: "Years Passed"
              }
            }
          }
        }
    };

    const ctx = document.getElementById("myChart").getContext('2d');

    if(myChart!=null){
        myChart.destroy();
    }
    myChart = new Chart(ctx,config);
}
cal();
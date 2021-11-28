 
chartIt();


async function   chartIt(){
const data=    await getData();
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.xs,
        datasets: [{
            label: 'Global Temp',
            data: data.ys,
            backgroundColor:
                'rgba(255, 99, 132, 0.2)',
            borderColor: 
                'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
   
});

}
//getData().catch(err=> console.log(err))

async function getData(){
    const xs = [];
    const ys = [];

    const response =await  fetch('data1.csv');
    const data = await response.text();
     
    const table= data.split('\n').slice(1);
   
    table.forEach( row => {
        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[1];
        xs.push(year);
        ys.push(parseFloat(temp)+14);
        console.log(year,temp);
        
    } )
    return {xs,ys}

} 
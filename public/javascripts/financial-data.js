const start = document.getElementById("start");
const end = document.getElementById("end");
const currency = document.getElementById("currency");

console.log(currency);

start.addEventListener("change", printTheChart);
end.addEventListener("change", printTheChart);
currency.addEventListener("change", printTheChart);

// console.log(start);

function printTheChart() {
  const startData = start.value;
  const endData = end.value;
  const currencyData = currency.value;
  console.log(currencyData);
  axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${startData}&end=${endData}&currency=${currencyData}`)
    .then((response) => {
      console.log(response.data);
      const stockDates = Object.keys(response.data.bpi);
      const stockPrices = stockDates.map((date) => response.data.bpi[date]);
      console.log(stockPrices);

      const ctx = document.getElementById("my-chart").getContext("2d");
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: stockDates,
          datasets: [
            {
              label: "Bitcoin Price Index",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: stockPrices,
            },
          ],
        },
      });
    })
    .catch((err) => {
      console.log("oops", err);
    });

} // closes printTheChart()

printTheChart();
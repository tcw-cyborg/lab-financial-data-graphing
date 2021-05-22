axios({
  method: "GET",
  url: "http://api.coindesk.com/v1/bpi/historical/close.json",
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log("oops", err);
  });

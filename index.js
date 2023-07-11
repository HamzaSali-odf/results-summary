(async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const getResult =
      data.reduce((sum, item) => sum + item.score, 0) / data.length;

    const result = document.getElementById("result");
    result.innerHTML = getResult | 0;

    //
    //Rest of the code here...
    //
  } catch (error) {
    console.error(error);
  }
})();

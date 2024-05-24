
document.getElementById("table-body").addEventListener("click", function(event) {
    const target = event.target;
  
    if (target.tagName === "TD") {
      const rowIndex = target.parentNode.rowIndex;
      const device = hardwareData[rowIndex - 1];
      window.location.href = `product.html?name=${encodeURIComponent(device.name)}&description=${encodeURIComponent(device.description)}`;
    }
  });
  
const getProductSales = (req, res) => {
    const fakeProductSales = {
      labels: ['Kit De Desarmadores', 'Piocha', 'Martillo', 'Taladro', 'Escuadra'],
      datasets: [
        {
          label: 'Productos Vendidos',
          data: [50, 75, 30, 40, 60],  
          
          borderWidth: 1
        }
      ]
    };
  
    res.json(fakeProductSales);
  };
  
  module.exports = { getProductSales };
  
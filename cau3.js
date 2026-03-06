const orders = [
    {id:1, price:100},
    {id:2, price:200},
    {id:3, price:150}
   ];

   function calculateOrderStats(orders) {
    const total = orders.reduce((sum, order) => sum + order.price, 0);
    const average = orders.length > 0 ? total / orders.length : 0;

    return {
        total: total,
        average: average
    };
}

const stats = calculateOrderStats(orders);
const container3 = document.getElementById('result2-container');

container3.innerHTML = `
    <pre>${JSON.stringify(stats, null, 2)}</pre>
`;
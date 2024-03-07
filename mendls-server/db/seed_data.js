const pastries = [
    {
        title: "Courtesan au Chocolat",
        description: "delicate layers of airy choux pastry filled with rich chocolate cream, topped with a glossy chocolate glaze and adorned with intricate swirls",
        price: 9.50,
        unit: 1
    },
    {
        title: "Éclair au Chocolat",
        description: "golden-brown choux pastry shell filled with velvety chocolate filling and topped with a glossy chocolate glaze",
        price: 3.50,
        unit: 1
    }, 
    {
        title: "Macaron Assortis",
        description: "variety of creamy flavoured ganache sandwiched between almond meringue shells with crisp exterior giving way to a soft, chewy interior",
        price: 15.80,
        unit: 5
    },
    {
        title: "Madeleines",
        description: "light and fluffy scalloped shaped sponge cakes, with a hint of buttery sweetness and fresh lemon",
        price: 8.50,
        unit: 3
    },
    {
        title: "Canelés",
        description: "caramelized crust and a tender custard-like interior with rich, rum-infused flavor with hints of vanilla and a touch of sweetness",
        price: 4.20,
        unit: 1
    },
    {
        title: "Gâteau aux Framboises",
        description: "features layers of light and fluffy sponge cake generously filled with luscious raspberry jam or fresh raspberry compote",
        price: 8.90,
        unit: 1
    },
    {
        title: "Flan Pâtissier",
        description: "buttery, flaky crust filled with a smooth, creamy custard",
        price: 4.80,
        unit: 1
    }
]

function createSQL() {
    let sql = ''
    
    pastries
        .forEach(pastry => {
            sql += `INSERT INTO pastries (title, description, price, unit) VALUES ('${pastry.title}', '${pastry.description}', '${pastry.price}', '${pastry.unit}');`
        })
    return sql
}



console.log(createSQL());
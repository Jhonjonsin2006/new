let card = document.getElementById("card");
let novinki = document getElementById("novinki")

let aksiyaProductds = products.filter((el) => el.discount >0);
let aksiyaLastFourProductds = aksiyaProductds.slice(aksiyaProductds.length - 4 , aksiyaProductds.leanth )


let newFourproduct = products.slice(products.length - 4 , products.length)





function showProducts(content, data){
    data.forEach(el => {
        content.innerHTML += `
        <div class="max-w-[270px] w-full bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
    
            <img src="${el.images[0]}" alt="" class="w-full h-[200px] object-cover">
    
            ${el.discount > 0 ? `<p class="text-[red] font-bold">${el.discount}%</p>` : ''}
    
            <div class="flex justify-between items-center py-[10px]">
                <p class="text-gray-600 font-medium">${el.price}$</p>
                <p class="pr-[8px] text-orange-500 font-semibold">${el.name}</p>
            </div>
    
            <p class="line-clamp-2">${el.description}</p>
    
            <div class="flex items-center py-[10px]">
                <img src="./imgs/yulduz2.png" alt="rating" class="w-20 h-5 object-contain">
                <span class="ml-2 text-yellow-500">${'★'.repeat(el.rating)}</span>
            </div>
    
            <button class="border-2 border-green-500 text-green-500 font-semibold py-2 w-full rounded-lg hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300">
                В корзину
            </button>
        </div>
        `;
    });
}

showProducts(card , aksiyaLastFourProductds)
showProducts(novinki, newFourproduct)








function ProductArray() {
    const products = [
		{
			id:1,
            category:'Clothes',
			images: ['https://siman.vtexassets.com/arquivos/ids/1056675/456737300065_1.jpg?v=637461613562800000'],
			title:'Camisa morada',
			price:12.00,
			detail:'Una camisa de color morado, para una ocasion formal'
		},
		{
			id:2,
            category:'Clothes',
			images: ['https://s3-us-west-2.amazonaws.com/melingoimages/Images/86544.jpg'],
			title:'Short Marron',
			price:20.00,
			detail:'Short Marron, perfecto para cualquier ocasion casual.'
		},
		{
			id:3,
            category:'Clothes',
			images: ['https://gameplanet-53f8.kxcdn.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/t/e/teemo-lol-beanie.jpg'],
			title:'Gorro de Teemo',
			price:24.99,
			detail:'Gorro de Teemo, Lindo Gorro de un personaje de lol'
		},
		{
			id:4,
            category:'Clothes',
			images: ['https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/calzado-air-force-1-07-5QFp5Z.png'],
			title:'Zapatos Nike blancos',
			price:50.00,
			detail:'Zapatos Nike blancos, perfectos para cualquier ocasion'
		},
		{
			id:5,
            category:'Clothes',
			images: ['https://images1.vinted.net/t/03_024c6_TVeoiN1zMoJAvUTWA5gtNP6E/f800/1635861092.jpeg?s=012f10aca1e6549ab754079ece1e5db59e09be6e'],
			title:'Sudadera anime',
			price:219.99,
			detail:'Sudadera de anime de la marca Nikifilini'
		},
		{
			id:6,
            category:'Electronics',
			images: ['https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg'],
			title:'Nintendo Switch',
			price:299.99,
			detail:'Consola de video juegos Nintendo Switch'
		},
		{
			id:7,
            category:'Electronics',
			images: ['https://m.media-amazon.com/images/I/713O5npuQYL._SL1500_.jpg'],
			title:'Nintendo 64',
			price: 120.00,
			detail:'Consola de video juegos Nintendo 64 '
		},
		{
			id:8,
            category:'Electronics',
			images: ['https://cl.buscafs.com/www.levelup.com/public/uploads/images/718155/718155.jpg'],
			title:'Nintendo gamecube',
			price: 140.00,
			detail:'Consola de video juegos Nintendo Gamecube'
		},
		{
			id:9,
            category:'Electronics',
			images: ['https://i0.wp.com/www.lacremedugaming.fr/wp-content/uploads/creme-gaming/2022/08/1-16.jpg?resize=780,470'],
			title:'Play Station 4',
			price:350.00,
			detail:'Consola de video juegos Sony Play Station 4'
		},
		{
			id:10,
            category:'Electronics',
			images: ['https://upload.wikimedia.org/wikipedia/commons/d/d6/Nintendo_DS_Lite_side.jpg'],
			title:'Nintendo DS',
			price:80.00,
			detail:'Consola de video juegos Nintendo DS'
		},
        {
			id:11,
            category:'Furnitures',
			images: ['https://ebani.com.co/wp-content/uploads/2020/06/Closet-Ankora-Basic-1-Ebani-Colombia-tienda-online-de-decoraci%C3%B3n-y-mobiliario-RTA-scaled.jpg'],
			title:'Closet Cafe oscuro',
			price:100.00,
			detail:'Moderno Closet Cafe oscuro con diversos espacios'
		},
		{
			id:12,
            category:'Furnitures',
			images: ['https://www.officedepot.com.sv/medias/30921.jpg-515ftw?context=bWFzdGVyfHJvb3R8Mjk4NjR8aW1hZ2UvanBlZ3xoZmMvaGViLzk2ODQyNzM2NTk5MzQuanBnfDkzYmFjMDljNGFhOWMzNmU5NWQzZjY4YTUxYWFiZjMwYTZmMWUwNWU0YWIyZWFiMDA3NWNiYWNiMGU3Mjc1OWQ'],
			title:'Escritorio Blanco',
			price:120.00,
			detail:'Lindo y funcional Escritorio Blanco'
		},
		{
			id:13,
            category:'Furnitures',
			images: ['https://www.stylohome.com/32421-large_default/escritorio-moderno-de-cristal-y-acero.jpg'],
			title:'Ecritorio de vidrio',
			price:182.00,
			detail:'Lindo y moderno Escritorio de vidrio'
		},
		{
			id:14,
            category:'Furnitures',
			images: ['https://www.intermall.com/img/m/zapatera_con_cosmetiquera---_2056.jpg'],
			title:'Zapatera',
			price:50.00,
			detail:'Zapatera funcional y moderna'
		},
		{
			id:15,
            category:'Furnitures',
			images: ['https://cdn.homedepot.com.mx/productos/300640/300640-d.jpg'],
			title:'Repisa',
			price:50.00,
			detail:'Linda repisa para cualquier uso en casa'
		},
		{
			id:16,
            category:'Toys',
			images: ['https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltafdbfacd85c1738f/62d99bdd16c1b67a18324969/2022_Promo_StarGuardian_Jinx_Ecomm_image01.png'],
			title:'Jinx Star Guardian',
			price:300.00,
			detail:'Figura de lujo de el personaje Jinx con su skin Star Guardian'
		},
		{
			id:17,
            category:'Toys',
			images: ['http://cdn.shopify.com/s/files/1/0579/6161/1445/products/000944472_03_1200x1200.jpg?v=1639684992'],
			title:'Kaguya',
			price:80.00,
			detail:'Figura de de el personaje Shinomiya Kaguya'
		},
		{
			id:18,
            category:'Toys',
			images: ['https://www.miniso.com.ec/uploads/productos/prd-5370/6941501578169_2.jpg?v20220804'],
			title:'Peluche polar',
			price:30.00,
			detail:'Peluche de de el personaje Polar de escandalosos'
		},
		{
			id:19,
            category:'Toys',
			images: ['https://www.fabricadeldoctorsimi.com/images/peluches/SIMI-DOCTOR.jpg'],
			title:'Peluche Doctor Simi',
			price:12.00,
			detail:'Peluche de de el personaje Polar de Doctor Simi de Farmacias Similares'
		},
		{
			id:20,
            category:'Toys',
			images: ['http://cdn.shopify.com/s/files/1/0549/0330/8520/products/WhatsAppImage2021-06-17at22.46.00_1200x1200.jpg?v=1638324951'],
			title:'Peluche de Stich',
			price:20.00,
			detail:'Peluche de de el personaje Polar de Doctor Stich de Lilo y Stich'
		},
        {
			id:21,
            category:'Others',
			images: ['https://distribuidoraodel.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-18-at-11.25.23-AM-8.jpeg'],
			title:'Termo multicolor',
			price:50.00,
			detail:'Lindo Termo con cambios indicaciones y colores en degradado'
		},
		{
			id:22,
            category:'Others',
			images: ['https://osterla.vteximg.com.br/arquivos/ids/157869-700-700/BVSTDC05-1.jpg?v=637449510405930000/'],
			title:'Cafetera',
			price:42.00,
			detail:'Cafetera color negro'
		},
		{
			id:23,
            category:'Others',
			images: ['https://http2.mlstatic.com/D_NQ_NP_616690-MLM31237782433_062019-O.jpg'],
			title:'Alcancia de pikachu',
			price:35.00,
			detail:'Linda Alcancia de pikachu para ahorrar'
		},
		{
			id:24,
            category:'Others',
			images: ['https://www.steren.com.sv/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/20806e462/memoria-usb-3-2-gen-1-de-128-gb-kingston.jpg'],
			title:'Usb 128 Gb',
			price:39.99,
			detail:'Usb 128 Gb de color amarillo de la marca Kingston'
		},
		{
			id:25,
            category:'Others',
			images: ['https://www.steren.com.sv/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/20863fdb3/power-bank-de-6-000-mah-con-2-salidas-usb-y-cargador-solar.jpg'],
			title:'Power Bank',
			price:45.00,
			detail:'Power Bank de color azul con bateria recargable por celdas solares'
		},
	]

    return ( products );
}

function searchProduct(id){
    const products = ProductArray()
    const newProduct = products.find( producto => producto.id === id)
    return(newProduct)
}
function searchByCategory(category){

	const products = ProductArray()
	const newProduct = products.filter( producto => producto.category === category)

    return(newProduct)
}

export {ProductArray, searchProduct, searchByCategory};
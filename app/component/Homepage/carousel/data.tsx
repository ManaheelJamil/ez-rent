
const products = [
	{
        id: "01",
		src: "/image1.png",
        heading: "BMW Series 8",
        price: "$40/d"
	},
	{
        id: "02",
		src: "/image2.png",
		heading: "Canon EOS R6",
        price: "$15/d"
	},
	{
        id: "03",
		src: "/image3.png",
        heading: "PlayStation 5",
        price: "$10/d"
	},
    {
        id: "04",
		src: "/image1.png",
        heading: "BMW Series 8",
        price: "$40/d"
	},
	{
        id: "05",
		src: "/image2.png",
		heading: "Canon EOS R6",
        price: "$15/d"
	},
	{
        id: "06",
		src: "/image3.png",
        heading: "PlayStation 5",
        price: "$10/d"
	},
	{
        id: "07",
		src: "/image1.png",
        heading: "BMW Series 8",
        price: "$40/d"
	},
	{
        id: "08",
		src: "/image2.png",
		heading: "Canon EOS R6",
        price: "$15/d"
	},
];
export default products
export type ElementType<T extends ReadonlyArray<unknown>> =
	T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
// export type ProductImage = ElementType<typeof images>;

const users = [
    { id: 1, firstName: "Sebbe", lastName: "Adolfsson", email: "sebbe@domain.com"},
    { id: 2, firstName: "Guest", lastName: "Guestsson", email: "guest@domain.com"}
]
module.exports = users

// * https://win22imgstorage.blob.core.windows.net/images/
const products = [
    { tag: "", articleNumber: "cd5d380a-1c95-46ef-964e-290571f92bd5", name: "Black coat", description: "", category: "Coats", price: "131", rating: "5", imageName: "https://win22imgstorage.blob.core.windows.net/images/black-coat.png"},
    { tag: "featured", articleNumber: "a74bdf92-af44-4f4d-92f9-2ff65b2e4701", name: "Black dress", description: "", category: "Dresses", price: "99", rating: "3", imageName: "https://win22imgstorage.blob.core.windows.net/images/black-dress.png"},
    { tag: "square", articleNumber: "2f1ae097-dff8-4b3b-babb-ca52d133b8c6", name: "Black top & pants set", description: "", category: "Sets", price: "108", rating: "4", imageName: "https://win22imgstorage.blob.core.windows.net/images/black-set.png"},
    { tag: "square", articleNumber: "af6cd2f4-1fa7-4033-bef2-5b2eaa8d7205", name: "White top & black pants set", description: "", category: "Sets", price: "110", rating: "4", imageName: "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png"},
    { tag: "", articleNumber: "e758fa17-4560-4464-a04c-d5fa8115f60a", name: "Blue jacket", description: "", category: "Jackets", price: "249", rating: "3", imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png"},
    { tag: "featured", articleNumber: "a400fe7a-5971-472d-9f37-cc485bd083c2", name: "Blue hoodie & pants", description: "", category: "Sets", price: "68", rating: "4", imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-set.png"},
    { tag: "featured", articleNumber: "742e26f3-20c0-4074-afdc-3a79f5ede215", name: "Blue t-shirt", description: "", category: "T-Shirts", price: "25", rating: "5", imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png"},
    { tag: "", articleNumber: "daf4dafd-f734-4eac-94cb-d598acada41d", name: "Brown sweater", description: "", category: "Sweater", price: "35", rating: "3", imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png"},
    { tag: "", articleNumber: "2886579f-9bd6-45c7-84d2-d7a387fd7053", name: "Brown watch", description: "", category: "Watches", price: "150", rating: "2", imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png"},
    { tag: "featured", articleNumber: "f369be46-5a58-4d28-a3f3-3f12e5aa6d59", name: "Stiletto shoes", description: "", category: "Shoes", price: "89", rating: "4", imageName: "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png"},
    { tag: "", articleNumber: "5dc10f55-04bc-42e0-8c15-cf9a6aac862b", name: "Gray t-shirt", description: "", category: "T-Shirts", price: "15", rating: "5", imageName: "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png"},
    { tag: "square", articleNumber: "4d134639-0a90-4e96-a37c-9ed344e19f98", name: "Jeans dress", description: "", category: "Jeans", price: "55", rating: "5", imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png"},
    { tag: "square", articleNumber: "95e997fc-2930-451e-a0a1-ec13d5cc7840", name: "Jeans jacket & pants", description: "", category: "Sets", price: "110", rating: "3", imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png"},
    { tag: "featured", articleNumber: "ff886156-79e2-4afe-9afb-13b685c8d1f1", name: "Olive sweater", description: "", category: "Sweater", price: "19", rating: "4", imageName: "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png"},
    { tag: "", articleNumber: "9dd89404-3950-4ee2-9021-c7b376c184c0", name: "Multicolor t-shirt", description: "", category: "T-Shirts", price: "25", rating: "1", imageName: "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png"},
    { tag: "sets", articleNumber: "d643647e-2c60-46be-8352-8a070175cddb", name: "Purple handbag", description: "", category: "Bags", price: "99", rating: "3", imageName: "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png"},
    { tag: "sets", articleNumber: "f05278a9-3ce9-42e6-bb22-659a82f25290", name: "Red handbag", description: "", category: "Bags", price: "105", rating: "5", imageName: "https://win22imgstorage.blob.core.windows.net/images/red-bag.png"},
    { tag: "sets", articleNumber: "3da78ff8-ba81-4032-98e0-73361e471f31", name: "Red dress", description: "", category: "Dresses", price: "67", rating: "4", imageName: "https://win22imgstorage.blob.core.windows.net/images/red-dress.png"},
    { tag: "sets", articleNumber: "c9c693b0-994c-4142-a279-054f2c34b8cf", name: "Striped top", description: "", category: "Tops", price: "45", rating: "4", imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-top.png"},
    { tag: "featured", articleNumber: "9ea431b6-93e6-4c58-b531-1109aefc4a92", name: "Striped pink pants", description: "", category: "Pants", price: "36", rating: "2", imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png"},
    { tag: "featured", articleNumber: "6893df25-eff3-4425-9573-4b4819ba7c09", name: "White sweater", description: "", category: "Sweater", price: "25", rating: "2", imageName: "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png"},
    { tag: "featured", articleNumber: "a1c1b2f8-9a00-4493-b776-0fe4a85adbbf", name: "Winter boots", description: "", category: "Shoes", price: "85", rating: "2", imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png"}
]
module.exports = products
export let spGioHang =[
    {
        "id": "1",
        "name": "Áo sơ mi",
        "price": "89.000",
        "count": "50",
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4ZkLA3_iePaNKZHywDCmpLIkw1t7RJk5vw&s',
        "Description": "Chiếc áo sơ mi trắng, với vẻ đẹp thanh lịch và tinh tế, là biểu tượng của sự thanh thoát và sự lịch lãm. Với màu sắc tinh tế và dễ phối đồ, áo sơ mi trắng ...",
    },
    {
        "id": "2",
        "name": "Quần jean nam",
        "price": "120.000",
        "count": "50",
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyg8rjGBV1mpeiApigrTSVAR6rurINYNTN8g&s',
        "Description": "Quần jean - biểu tượng về sự thoải mái và phong cách. Với chất liệu bền bỉ và đa dạng kiểu dáng, quần jean không chỉ là lựa chọn hàng ngày mà còn là biểu ...",
    },
    
];

export const AddProduct = (newProduct) => {
    spGioHang = [...spGioHang, newProduct];
};
// Hàm xóa sản phẩm từ danh sách
export const deleteProduct = (productId) => {
    spGioHang = spGioHang.filter(product => product.id !== productId);
};

export const updateProduct = (newProduct) => {
    const index = spGioHang.findIndex(product => product.id === newProduct.id); // Tìm chỉ mục của phần tử mới trong mảng sanPham

    if (index !== -1) { // Nếu phần tử mới được tìm thấy trong mảng
        spGioHang[index] = { ...newProduct }; // Thay đổi toàn bộ thông tin của phần tử đó
    }   
};
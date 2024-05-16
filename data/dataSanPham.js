export let sanPham =[
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
    {
        "id": "3",
        "name": "Đầm kali",
        "price": "239.000",
        "count": "50",
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxwfpeuzgUw6F0nwJZYCaj-jwx21GX-AxxA&s',
        "Description": "Đầm Kali nữ - một sự kết hợp hoàn hảo giữa phong cách hiện đại và nét đẹp truyền thống. Với thiết kế đa dạng từ các mẫu đầm dài đến đầm ngắn, Kali ...",
    },
    {
        "id": "4",
        "name": "Giày thể thao",
        "price": "359.000",
        "count": "50",
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArp-xEmjBy4UMgoXPNwZhtdxgVjZDqCtZKA&s',
        "Description": "Chiếc áo sơ mi trắng, với vẻ đẹp thanh lịch và tinh tế, là biểu tượng của sự thanh thoát và sự lịch lãm. Với màu sắc tinh tế và dễ phối đồ, áo sơ mi trắng ...",
    },
    {
        "id": "5",
        "name": "Quần jean ống rộng",
        "price": "112.000",
        "count": "50",
        "img": 'https://pos.nvncdn.com/8d4112-8686/ps/20230408_Me17neupEM.jpeg',
        "Description": "Quần jean - biểu tượng về sự thoải mái và phong cách. Với chất liệu bền bỉ và đa dạng kiểu dáng, quần jean không chỉ là lựa chọn hàng ngày mà còn là biểu ...",
    },
    {
        "id": "6",
        "name": "Váy trắng dài",
        "price": "217.000",
        "count": "50",
        "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi55VgSIVHIQMA5e8cQPqAKrir2tJXESuIXw&s',
        "Description": "Một chiếc váy trắng dài, thanh lịch và quý phái, tôn lên vẻ đẹp tinh khôi và sang trọng của người phụ nữ, là lựa chọn hoàn hảo cho các dịp đặc biệt và trang trọng.",
    },
];

export const AddProduct = (newProduct) => {
    sanPham = [...sanPham, newProduct];
};
// Hàm xóa sản phẩm từ danh sách
export const deleteProduct = (productId) => {
    sanPham = sanPham.filter(product => product.id !== productId);
};

export const updateProduct = (newProduct) => {
    const index = sanPham.findIndex(product => product.id === newProduct.id); // Tìm chỉ mục của phần tử mới trong mảng sanPham

    if (index !== -1) { // Nếu phần tử mới được tìm thấy trong mảng
        sanPham[index] = { ...newProduct }; // Thay đổi toàn bộ thông tin của phần tử đó
    }   
};
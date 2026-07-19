// ==========================================
// DỮ LIỆU DANH MỤC SÁCH
// ==========================================

const DanhMuc = [

    {
        MaDM: 1,
        TenDM: "Văn học"
    },

    {
        MaDM: 2,
        TenDM: "Kỹ năng sống"
    },

    {
        MaDM: 3,
        TenDM: "Kinh tế"
    },

    {
        MaDM: 4,
        TenDM: "Công nghệ"
    },


];

// ==========================================
// DỮ LIỆU TÁC GIẢ
// ==========================================

const TacGia = [

    {
        MaTG: 1,
        TenTG: "Dale Carnegie"
    },

    {
        MaTG: 2,
        TenTG: "Paulo Coelho"
    },

    {
        MaTG: 3,
        TenTG: "Minh Nhật"
    },

    {
        MaTG: 4,
        TenTG: "Shinkai Makoto"
    },

    {
        MaTG: 5,
        TenTG: "Nguyễn Nhật Ánh"
    },

    {
        MaTG: 6,
        TenTG: "Yoram Bauman và Grady Klein"
    },

    {
        MaTG: 7,
        TenTG: "Phạm thị huyền"
    },

    {
        MaTG: 8,
        TenTG: "Tô Hoài"
    },


    {
        MaTG: 9,
        TenTG: "Jeff Evarts"
    },
    {
        MaTG:10,
        TenTG:"Jim Rohn"
    },
    {
        MaTG:11,
        TenTG: "Ca Tây"
    },
    {
        MaTG:12,
        TenTG:"Akiyuki Nosakae"
    },
    {
        MaTG:13,
        TenTG:"Nguyên Phong"
    },
    {
        MaTG:14,
        TenTG:"George S. Clason"
    },
    {
        MaTG:15,
        TenTG:"Phùng Thị Thu Hiền"
    },
    {
        MaTG:16,
        TenTG:"Trần Quang Vinh"
    },
    {
        MaTG:17,
        TenTG:"Vũ Đức Lung"
    },
    {
        MaTG:18,
        TenTG:"Brian Tracy"
    },
    {
        MaTG:19,
        TenTG:"John von Neumann và Oskar Morgenstern"
    },
    {
        MaTG:20,
        TenTG:"Nicola Yoon"
    },
    {
        MaTG:21,
        TenTG:"Hữu Đồ Thành"
    },
    {
        MaTG:22,
        TenTG:"Dương Thùy"
    },
    {
        MaTG:23,
        TenTG:"Nguyễn Ngọc Tư"
    },
    {
        MaTG:24,
        TenTG:"Neil Gaiman"
    },
];

// ==========================================
// DỮ LIỆU SÁCH
// ==========================================

const Sach = [

    {
        MaSach: 12,
        TenSach: "Mộ Đom Đóm",
        GiaBan: 189000,
        MoTa: "Kể về hai anh em Seita và Setsuko cố gắng sinh tồn ở Nhật Bản trong giai đoạn cuối Thế chiến II. Tác phẩm khắc họa hậu quả khốc liệt của chiến tranh thông qua nạn đói, mất mát và sự cô độc.",
        HinhAnh: "vanhoc1.jpg",
        MaTG: 12,
        MaDM: 1,
        NhaXB: "Shinchōsha",
        NamXB: 1967,
        SoLuong: 11
    },

    {
        MaSach: 2,
        TenSach: "Nhà Giả Kim",
        GiaBan: 89000,
        MoTa: "NHÀ GIẢ KIM - HÀNH TRÌNH ĐI TÌM KHO BÁU HAY CUỘC HÀNH TRÌNH TÌM KIẾM CHÍNH MÌNH.",
        HinhAnh: "nhagiakim.jpg",
        MaTG: 2,
        MaDM: 1,
        NhaXB: "NXB Hội Nhà Văn",
        NamXB: 1988,
        SoLuong: 23
    },

    {
        MaSach: 3,
        TenSach: "Chạy Trốn Mặt Trời",
        GiaBan: 165000,
        MoTa: "cuốn sách bình thường dành cho những người không bình thường.",
        HinhAnh: "chaytronmattroi.jpg",
        MaTG: 3,
        MaDM: 1,
        NhaXB: "NXB Thanh Niên",
        NamXB: 2017,
        SoLuong: 15
    },

    {
        MaSach: 4,
        TenSach: "5 Centimeters per Second",
        GiaBan: 120000,
        MoTa: "Tiểu thuyết kể về Takaki Tōno và Akari Shinohara, theo chân họ qua nhiều giai đoạn của cuộc đời, khắc họa khoảng cách, thời gian và những mối tình dang dở.",
        HinhAnh: "5CentimetersperSecond.jpg",
        MaTG: 4,
        MaDM: 1,
        NhaXB: "IPM",
        NamXB: 2013,
        SoLuong: 31
    },

    {
        MaSach: 5,
        TenSach: "Mắt Biếc",
        GiaBan: 96000,
        MoTa: "Tác phẩm nổi tiếng của nhà văn Nguyễn Nhật Ánh.",
        HinhAnh: "matbiec.jpg",
        MaTG: 5,
        MaDM: 2,
        NhaXB: "NXB Trẻ",
        NamXB: 1990,
        SoLuong: 30
    },

    {
        MaSach: 6,
        TenSach: "làm quen kinh tế học qua biếm hóa",
        GiaBan: 145000,
        MoTa: "Bộ sách này giúp bạn hiểu các khái niệm kinh tế khô khan trở nên cực kỳ đơn giản và thú vị thông qua các hình vẽ hài hước.",
        HinhAnh: "kinhte1.jpg",
        MaTG: 6,
        MaDM: 3,
        NhaXB: "NXB thế giới",
        NamXB: 2010,
        SoLuong: 14
    },

    {
        MaSach: 7,
        TenSach: "giáo trình makerting căn bản",
        GiaBan: 85000,
        MoTa: "Giáo trình cung cấp những kiến thức nền tảng về marketing như khái niệm, môi trường marketing, hành vi khách hàng, phân khúc thị trường, định vị, marketing mix (4P/7P), xây dựng chiến lược và quản trị marketing.",
        HinhAnh: "kinhte2.jpg",
        MaTG: 7,
        MaDM: 4,
        NhaXB: "NXB Đại học Kinh tế Quốc dân",
        NamXB: 2022,
        SoLuong: 25
    },

    {
        MaSach: 9,
        TenSach: "Mưu sinh bằng nghề tự do",
        GiaBan: 69000,
        MoTa: "Kiếm sống không đồng nghĩa với việc bạn phải có một ông sếp quản lý.",
        HinhAnh: "kynang2.jpg",
        MaTG: 9,
        MaDM: 3,
        NhaXB: "NXB Văn Hóa Thông Tin",
        NamXB: 2012,
        SoLuong: 30
    },

    {
        MaSach: 8,
        TenSach: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
        GiaBan: 78000,
        MoTa: "Cuốn sách giúp người trẻ định hướng tương lai.",
        HinhAnh: "tuoitre.jpg",
        MaTG: 8,
        MaDM: 2,
        NhaXB: "NXB Hội Nhà Văn",
        NamXB: 2022,
        SoLuong: 18
    },

    {
        MaSach: 10,
        TenSach: "Những mảnh ghép cuộc đời",
        GiaBan: 92000,
        MoTa: "Tác giả khẳng định cuộc đời của mỗi người không được quyết định bởi những sự kiện ngẫu nhiên, mà bởi chính cách chúng ta tư duy và lựa chọn.",
        HinhAnh: "kynang3.jpg",
        MaTG: 2,
        MaDM: 1,
        NhaXB: "NXB Văn Học",
        NamXB: 2023,
        SoLuong: 16
    },

     {
        MaSach: 1,
        TenSach: "Đắc Nhân Tâm",
        GiaBan: 98000,
        MoTa: "Cuốn sách kinh điển về nghệ thuật giao tiếp và ứng xử.",
        HinhAnh: "dacnhantam.jpg",
        MaTG: 1,
        MaDM: 1,
        NhaXB: "NXB Trẻ",
        NamXB: 1936,
        SoLuong: 12
    },
    {
        MaSach: 11,
        TenSach: "Càng kỷ luật càng tự do",
        GiaBan: 148000,
        MoTa: "Cuốn sách được viết dưới dạng các câu chuyện tản văn thực tế, chia sẻ góc nhìn của tác giả về cuộc sống hiện đại. Nội dung xoay quanh 4 khía cạnh cốt lõi mà người trẻ cần rèn luyện.",
        HinhAnh: "kynang1.jpg",
        MaTG: 11,
        MaDM: 2,
        NhaXB: "NXB Thế Giới",
        NamXB: 2020,
        SoLuong: 29
    },

    

    {
        MaSach: 13,
        TenSach: "Muôn Kiếp Nhân Sinh",
        GiaBan: 135000,
        MoTa: "hông qua hành trình trải nghiệm quá khứ qua nhiều kiếp sống của một doanh nhân người Mỹ, tác phẩm bàn về luật nhân quả, sự luân hồi, tái sinh và cuộc sống của con người.",
        HinhAnh: "nhansinh.jpg",
        MaTG: 13,
        MaDM: 1,
        NhaXB: "NXB Văn Học",
        NamXB: 2020,
        SoLuong: 7
    },
    {
        MaSach: 14,
        TenSach: "Người giàu có nhất thành Babylon",
        GiaBan: 135000,
        MoTa: "nó là một cuốn sách giới thiệu về cách tiết kiệm, buôn bán và làm giàu của người dân cổ xưa thành Babylon.",
        HinhAnh: "babylon.jpg",
        MaTG: 14,
        MaDM: 3,
        NhaXB: "Penguin Books",
        NamXB: 1926,
        SoLuong: 5
    },
    {
        MaSach: 15,
        TenSach: "Giáo Trình Ngôn Ngữ Lập Trình c++",
        GiaBan: 135000,
        MoTa: "cuốn sách viết về nội dung cốt lõi của c++.",
        HinhAnh: "congnghe.jpg",
        MaTG: 15,
        MaDM: 4,
        NhaXB: "NXB Kỹ Thuật Và Công Nghệ",
        NamXB: 2021,
        SoLuong: 4
    },
    {
        MaSach: 16,
        TenSach: "Kỹ Thuật Ghép Nối Máy Vi Tính",
        GiaBan: 135000,
        MoTa: "là một lĩnh vực nghiên cứu về cách bộ vi xử lý giao tiếp với các thiết bị ngoại vi (màn hình, bàn phím, chuột, máy in…), giúp thiết kế và triển khai hệ thống phần cứng – phần mềm điều khiển.",
        HinhAnh: "congnghe1.jpg",
        MaTG: 16,
        MaDM: 4,
        NhaXB: "NXB Giáo Dục Việt Nam",
        NamXB: 2009,
        SoLuong: 9
    },
    {
        MaSach: 17,
        TenSach: "101 thuật toán và chương trình bằng ngôn ngữ c",
        GiaBan: 135000,
        MoTa: "Cuốn sách “101 thuật toán và chương trình bằng ngôn ngữ C” là một tài liệu học tập và tham khảo khá phổ biến trong các trường kỹ thuật – công nghệ ở Việt Nam.",
        HinhAnh: "congnghe2.jpg",
        MaTG: 17,
        MaDM: 4,
        NhaXB: "NXB Giáo Dục Việt Nam",
        NamXB: 2005,
        SoLuong: 19
    },
    {
        MaSach: 18,
        TenSach: "Những Đòn Tâm Lý Trong Bán Hàng",
        GiaBan: 135000,
        MoTa: "là tập hợp các nguyên tắc và kỹ thuật tâm lý giúp người bán hàng thấu hiểu hành vi, cảm xúc và nhu cầu của khách hàng để thuyết phục họ mua hàng.",
        HinhAnh: "congnghe3.jpg",
        MaTG: 18,
        MaDM: 4,
        NhaXB: "NXB Lao động – Xã hội",
        NamXB: 2008,
        SoLuong: 20
    },
    {
        MaSach: 19,
        TenSach: "Lý Thuyết Trò Chơi",
        GiaBan: 135000,
        MoTa: "là bộ môn toán học nghiên cứu các quyết định chiến lược. Nó giúp chúng ta phân tích cách các cá nhân hoặc tổ chức tương tác, cạnh tranh và hợp tác để tối đa hóa lợi ích của họ, dựa trên việc dự đoán hành động của đối phương.",
        HinhAnh: "kynang4.jpg",
        MaTG: 19,
        MaDM: 2,
        NhaXB: "Princeton University Press",
        NamXB: 1944,
        SoLuong: 27
    },
    {
        MaSach: 20,
        TenSach: "Nếu Chỉ Còn Một Ngày Để Sống",
        GiaBan: 135000,
        MoTa: "kể về hành trình tìm kiếm tự do và tình yêu dũng cảm của Madeline Whittier, một cô gái mắc bệnh hiếm gặp. ",
        HinhAnh: "congnghe4.jpg",
        MaTG: 20,
        MaDM: 4,
        NhaXB: "NXB Văn Học",
        NamXB: 2017,
        SoLuong: 25
    },
    {
        MaSach: 21,
        TenSach: "Chó Hoang Và Xương",
        GiaBan: 135000,
        MoTa: ".",
        HinhAnh: "kinhte3.jpg",
        MaTG: 21,
        MaDM: 3,
        NhaXB: "NXB Dân Trí",
        NamXB: 2024,
        SoLuong: 24
    },
    {
        MaSach: 22,
        TenSach: "Chúng Ta Đâu Chỉ Sống Cho Riêng Mình",
        GiaBan: 135000,
        MoTa: ".",
        HinhAnh: "kinhte4.jpg",
        MaTG: 22,
        MaDM: 3,
        NhaXB: "NXB Hà Nội",
        NamXB: 2017,
        SoLuong: 13
    },
     {
        MaSach: 23,
        TenSach: "Cánh Đồng Bất Tận",
        GiaBan: 135000,
        MoTa: "Tác phẩm là lát cắt trần trụi, khốc liệt nhưng đầy tính nhân văn về thân phận con người trôi dạt vùng sông nước miền Tây Nam Bộ.",
        HinhAnh: "vanhoc3.jpg",
        MaTG: 23,
        MaDM: 1,
        NhaXB: "NXB Trẻ",
        NamXB: 2005,
        SoLuong: 11
    },
    {
        MaSach: 24,
        TenSach: "Bụi Sao",
        GiaBan: 135000,
        MoTa: "Câu chuyện bắt đầu tại ngôi làng Bức Tường bình dị — nơi giáp ranh giữa thế giới loài người và Xứ Tiên (Faerie) đầy ma thuật huyền bí.",
        HinhAnh: "vanhoc4.jpg",
        MaTG: 24,
        MaDM: 1,
        NhaXB: "NXB Hà Nội",
        NamXB: 1997,
        SoLuong: 11
    },
];

// ===================================================
// HÀM DÙNG CHUNG
// ===================================================

function laySachTheoMa(maSach) {
    return Sach.find(sach => sach.MaSach == maSach);
}

function layTacGiaTheoMa(maTG) {
    return TacGia.find(tg => tg.MaTG == maTG);
}

function layDanhMucTheoMa(maDM) {
    return DanhMuc.find(dm => dm.MaDM == maDM);
}

function dinhDangGia(gia) {
    return gia.toLocaleString("vi-VN") + " ₫";
}
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
        TenTG:""
    },
    {
        MaTG:13,
        TenTG:""
    },
    {
        MaTG:14,
        TenTG:""
    },
    {
        MaTG:15,
        TenTG:""
    },
    {
        MaTG:16,
        TenTG:""
    },
    {
        MaTG:17,
        TenTG:""
    },
    {
        MaTG:18,
        TenTG:""
    },
    {
        MaTG:19,
        TenTG:""
    },
    {
        MaTG:20,
        TenTG:""
    },

];

// ==========================================
// DỮ LIỆU SÁCH
// ==========================================

const Sach = [

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
        SoLuong: 20
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
        SoLuong: 18
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
        SoLuong: 22
    },

    {
        MaSach: 5,
        TenSach: "Mắt Biếc",
        GiaBan: 96000,
        MoTa: "Tác phẩm nổi tiếng của nhà văn Nguyễn Nhật Ánh.",
        HinhAnh: "matbiec.jpg",
        MaTG: 5,
        MaDM: 1,
        NhaXB: "NXB Trẻ",
        NamXB: 1990,
        SoLuong: 19
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
        MaSach: 11,
        TenSach: "Càng kỷ luật càng tự do",
        GiaBan: 148000,
        MoTa: "Cuốn sách được viết dưới dạng các câu chuyện tản văn thực tế, chia sẻ góc nhìn của tác giả về cuộc sống hiện đại. Nội dung xoay quanh 4 khía cạnh cốt lõi mà người trẻ cần rèn luyện.",
        HinhAnh: "kynang1.jpg",
        MaTG: 11,
        MaDM: 2,
        NhaXB: "NXB Thế Giới",
        NamXB: 2020,
        SoLuong: 15
    },

    {
        MaSach: 12,
        TenSach: "Tư Duy Nhanh Và Chậm",
        GiaBan: 189000,
        MoTa: "Hiểu cách bộ não đưa ra quyết định.",
        HinhAnh: "tuduynhanhvacham.jpg",
        MaTG: 3,
        MaDM: 2,
        NhaXB: "NXB Thế Giới",
        NamXB: 2022,
        SoLuong: 18
    },

    {
        MaSach: 13,
        TenSach: "Sherlock Holmes",
        GiaBan: 135000,
        MoTa: "Tuyển tập truyện trinh thám nổi tiếng.",
        HinhAnh: "sherlockholmes.jpg",
        MaTG: 2,
        MaDM: 1,
        NhaXB: "NXB Văn Học",
        NamXB: 2021,
        SoLuong: 20
    },

    {
        MaSach: 14,
        TenSach: "Lập Trình JavaScript",
        GiaBan: 215000,
        MoTa: "Giáo trình JavaScript dành cho người mới.",
        HinhAnh: "javascript.jpg",
        MaTG: 3,
        MaDM: 4,
        NhaXB: "NXB Khoa Học",
        NamXB: 2024,
        SoLuong: 12
    },

    {
        MaSach: 15,
        TenSach: "Python Cơ Bản",
        GiaBan: 198000,
        MoTa: "Học lập trình Python từ cơ bản đến nâng cao.",
        HinhAnh: "python.jpg",
        MaTG: 3,
        MaDM: 4,
        NhaXB: "NXB Khoa Học",
        NamXB: 2024,
        SoLuong: 15
    },

    {
        MaSach: 16,
        TenSach: "Think And Grow Rich",
        GiaBan: 125000,
        MoTa: "Cuốn sách nổi tiếng về phát triển bản thân và tài chính.",
        HinhAnh: "thinkandgrowrich.jpg",
        MaTG: 4,
        MaDM: 3,
        NhaXB: "NXB Lao Động",
        NamXB: 2023,
        SoLuong: 17
    },

    {
        MaSach: 17,
        TenSach: "Lược Sử Thời Gian",
        GiaBan: 176000,
        MoTa: "Tìm hiểu về vũ trụ qua góc nhìn khoa học.",
        HinhAnh: "luocsuthoigian.jpg",
        MaTG: 3,
        MaDM: 4,
        NhaXB: "NXB Tri Thức",
        NamXB: 2022,
        SoLuong: 13
    },

    {
        MaSach: 18,
        TenSach: "Không Gia Đình",
        GiaBan: 99000,
        MoTa: "Tiểu thuyết kinh điển của văn học Pháp.",
        HinhAnh: "khonggiadinh.jpg",
        MaTG: 2,
        MaDM: 1,
        NhaXB: "NXB Văn Học",
        NamXB: 2023,
        SoLuong: 20
    },

    {
        MaSach: 19,
        TenSach: "Totto-Chan Bên Cửa Sổ",
        GiaBan: 89000,
        MoTa: "Những câu chuyện ý nghĩa về giáo dục và tuổi thơ.",
        HinhAnh: "tottochan.jpg",
        MaTG: 5,
        MaDM: 5,
        NhaXB: "NXB Trẻ",
        NamXB: 2022,
        SoLuong: 22
    },

    {
        MaSach: 20,
        TenSach: "Đừng Lựa Chọn An Nhàn Khi Còn Trẻ",
        GiaBan: 86000,
        MoTa: "Truyền động lực và khuyến khích nỗ lực trong tuổi trẻ.",
        HinhAnh: "dungluachonanhan.jpg",
        MaTG: 7,
        MaDM: 2,
        NhaXB: "NXB Thanh Niên",
        NamXB: 2021,
        SoLuong: 19
    }

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
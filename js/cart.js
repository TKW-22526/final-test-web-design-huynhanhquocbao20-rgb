// ===============================
// cart.js
// Quản lý giỏ hàng
// ===============================
let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

// Thêm sách vào giỏ
function themVaoGio(maSach) {

    const sach = laySachTheoMa(maSach);

    if (!sach) return;

    const viTri = gioHang.findIndex(item => item.MaSach == maSach);

    if (viTri >= 0) {

        gioHang[viTri].SoLuong++;

    } else {

        gioHang.push({
            MaSach: sach.MaSach,
            TenSach: sach.TenSach,
            GiaBan: sach.GiaBan,
            HinhAnh: sach.HinhAnh,
            SoLuong: 1
        });

    }

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    hienThiGioHang();

    alert("Đã thêm \"" + sach.TenSach + "\" vào giỏ hàng!");
}

// Hiển thị giỏ hàng
function hienThiGioHang() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    if (gioHang.length === 0) {

        cartItems.innerHTML = `
            <p class="text-center">
                Chưa có sản phẩm nào.
            </p>
        `;

        cartTotal.innerHTML = "0 ₫";

        return;
    }

    let tong = 0;

    cartItems.innerHTML = "";

    gioHang.forEach((item, index) => {

        tong += item.GiaBan * item.SoLuong;

        cartItems.innerHTML += `
            <div class="d-flex align-items-center mb-3">

                <img src="assets/images/book/${item.HinhAnh}"
                     width="60"
                     class="rounded me-3">

                <div class="flex-grow-1">

                    <h6 class="mb-1">${item.TenSach}</h6>

                    <small>
                        ${item.SoLuong} × ${item.GiaBan.toLocaleString("vi-VN")} ₫
                    </small>

                </div>

                <button class="btn btn-sm btn-danger"
                        onclick="xoaKhoiGio(${index})">

                    <i class="bi bi-trash"></i>

                </button>

            </div>
        `;
    });

    cartTotal.innerHTML = tong.toLocaleString("vi-VN") + " ₫";
}

// Xóa sản phẩm
function xoaKhoiGio(index) {

    gioHang.splice(index, 1);

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    hienThiGioHang();
}

// Khi tải trang
document.addEventListener("DOMContentLoaded", function () {

    hienThiGioHang();

});
// ======================================
// product.js
// Trang Sản phẩm
// ======================================
// Định dạng giá
function formatPrice(gia) {
    return gia.toLocaleString("vi-VN") + " ₫";
}
// Lấy tên tác giả

function getAuthor(maTG) {
    const tg = TacGia.find(item => item.MaTG == maTG);
    return tg ? tg.TenTG : "Đang cập nhật";
}

// ======================================
// Hiển thị danh sách sách
// ======================================

function hienThiSach(dsSach = Sach) {

    const productList = document.getElementById("productList");

    if (!productList) return;

    productList.innerHTML = "";

    dsSach.forEach(book => {

        productList.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card h-100 shadow-sm">

                <img
                    src="../assets/images/book/${book.HinhAnh}"
                    class="card-img-top"
                    alt="${book.TenSach}">

                <div class="card-body">

                    <h5 class="card-title">

                        ${book.TenSach}

                    </h5>

                    <p class="text-muted">

                        ${getAuthor(book.MaTG)}

                    </p>

                    <p class="fw-bold text-danger">

                        ${formatPrice(book.GiaBan)}

                    </p>

                    <p>

                        Nhà XB:

                        ${book.NhaXB}

                    </p>

                </div>

                <div class="card-footer bg-white border-0">

                    <div class="d-grid gap-2">

                        <a
                            href="chi-tiet.html?id=${book.MaSach}"
                            class="btn btn-outline-success">

                            Xem chi tiết

                        </a>

                        <button
                            class="btn btn-success"
                            onclick="themVaoGio(${book.MaSach})">

                            Thêm vào giỏ

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

}
// ======================================
// Tìm kiếm sách
// ======================================

function timKiemSach() {

    const input = document.getElementById("searchBook");

    if (!input) return;

    input.addEventListener("keyup", function () {

        const tuKhoa = this.value.trim().toLowerCase();

        const ketQua = Sach.filter(book =>
            book.TenSach.toLowerCase().includes(tuKhoa)
        );

        if (ketQua.length === 0) {

            document.getElementById("productList").innerHTML = `

                <div class="col-12 text-center py-5">

                    <h4 class="text-danger">

                        Không tìm thấy sách phù hợp.

                    </h4>

                </div>

            `;

            return;

        }

        hienThiSach(ketQua);

    });

}
// ======================================
// Khởi tạo trang
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    hienThiSach();

    timKiemSach();

});
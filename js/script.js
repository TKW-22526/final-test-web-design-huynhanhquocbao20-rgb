// ======================================
// script.js
// Trang chủ
// ======================================

// Hiển thị giá tiền

function formatPrice(price) {

    return price.toLocaleString("vi-VN") + " ₫";

}

// Lấy tên tác giả

function getAuthorName(maTG) {

    const tg = TacGia.find(item => item.MaTG === maTG);

    return tg ? tg.TenTG : "Đang cập nhật";

}

// Lấy tên danh mục

function getCategoryName(maDM) {

    const dm = DanhMuc.find(item => item.MaDM === maDM);

    return dm ? dm.TenDM : "";

}

// ==============================
// Render sách nổi bật
// ==============================

function renderFeaturedBooks() {

    const container = document.getElementById("featuredBooks");

    if (!container) return;

    container.innerHTML = "";

    const featured = Sach.slice(0,8);

    featured.forEach(book=>{

        container.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card book-card h-100 shadow-sm">

                <img
                    src="assets/images/book/${book.HinhAnh}"
                    class="card-img-top"
                    alt="${book.TenSach}">

                <div class="card-body">

                    <h5 class="book-title">

                        ${book.TenSach}

                    </h5>

                    <p class="text-muted">

                        ${getAuthorName(book.MaTG)}

                    </p>

                    <p class="text-danger fw-bold">

                        ${formatPrice(book.GiaBan)}

                    </p>

                </div>

                <div class="card-footer bg-white border-0">

                    <div class="d-grid gap-2">

                        <a
                        href="html/chi-tiet.html?id=${book.MaSach}"
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
// Render sách mới
// ======================================

function renderNewBooks() {

    const container = document.getElementById("newBooks");

    if (!container) return;

    container.innerHTML = "";

    const newBooks = Sach.slice(8);

    newBooks.forEach(book => {

        container.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card book-card h-100 shadow-sm">

                <img
                    src="assets/images/book/${book.HinhAnh}"
                    class="card-img-top"
                    alt="${book.TenSach}">

                <div class="card-body">

                    <h5 class="book-title">

                        ${book.TenSach}

                    </h5>

                    <p class="text-muted">

                        ${getAuthorName(book.MaTG)}

                    </p>

                    <p class="text-danger fw-bold">

                        ${formatPrice(book.GiaBan)}

                    </p>

                </div>

                <div class="card-footer bg-white border-0">

                    <div class="d-grid gap-2">

                        <a
                            href="html/chi-tiet.html?id=${book.MaSach}"
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
// Tìm kiếm nhanh trên Trang chủ
// ======================================

function timKiemTrangChu() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    input.addEventListener("keyup", function () {

        const keyword = this.value.trim().toLowerCase();

        const container = document.getElementById("featuredBooks");

        if (!container) return;

        container.innerHTML = "";

        const ketQua = Sach.filter(book =>
            book.TenSach.toLowerCase().includes(keyword)
        );

        if (ketQua.length === 0) {

            container.innerHTML = `

                <div class="col-12 text-center">

                    <h4 class="text-danger">

                        Không tìm thấy sách phù hợp.

                    </h4>

                </div>

            `;

            return;

        }

        ketQua.forEach(book => {

            container.innerHTML += `

            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

                <div class="card book-card h-100 shadow-sm">

                    <img
                        src="assets/images/book/${book.HinhAnh}"
                        class="card-img-top"
                        alt="${book.TenSach}">

                    <div class="card-body">

                        <h5>${book.TenSach}</h5>

                        <p class="text-muted">

                            ${getAuthorName(book.MaTG)}

                        </p>

                        <p class="text-danger fw-bold">

                            ${formatPrice(book.GiaBan)}

                        </p>

                    </div>

                    <div class="card-footer bg-white border-0">

                        <div class="d-grid gap-2">

                            <a
                                href="html/chi-tiet.html?id=${book.MaSach}"
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

    });

}



// ======================================
// Khởi tạo Trang chủ
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    renderFeaturedBooks();

    renderNewBooks();

    timKiemTrangChu();

});
function locDanhMuc(maDM){

    const container = document.getElementById("featuredBooks");

    container.innerHTML = "";

    const ds = Sach.filter(book => book.MaDM == maDM);

    ds.forEach(book=>{

        container.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card book-card h-100 shadow-sm">

                <img src="assets/images/book/${book.HinhAnh}"
                     class="card-img-top">

                <div class="card-body">

                    <h5>${book.TenSach}</h5>

                    <p class="text-muted">
                        ${getAuthorName(book.MaTG)}
                    </p>

                    <p class="text-danger fw-bold">
                        ${formatPrice(book.GiaBan)}
                    </p>

                </div>

                <div class="card-footer bg-white border-0">

                    <div class="d-grid gap-2">

                        <a href="html/chi-tiet.html?id=${book.MaSach}"
                           class="btn btn-outline-success">
                           Xem chi tiết
                        </a>

                        <button class="btn btn-success"
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
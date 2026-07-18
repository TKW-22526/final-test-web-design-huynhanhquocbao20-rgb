// ======================================
// detail.js
// Trang Chi tiết sách
// ======================================

// Lấy id trên URL
const params = new URLSearchParams(window.location.search);
const maSach = params.get("id");

// Hiển thị chi tiết sách
function hienThiChiTiet() {

    const sach = laySachTheoMa(maSach);

    const container = document.getElementById("bookDetail");

    if (!sach) {

        container.innerHTML = `

            <div class="col-12 text-center py-5">

                <h3 class="text-danger">

                    Không tìm thấy sách.

                </h3>

                <a href="san-pham.html"
                   class="btn btn-success mt-3">

                    Quay lại

                </a>

            </div>

        `;

        return;

    }

    const tacGia = layTacGiaTheoMa(sach.MaTG);

    const danhMuc = layDanhMucTheoMa(sach.MaDM);

    container.innerHTML = `

        <div class="col-lg-5">

            <img
                src="../assets/images/book/${sach.HinhAnh}"
                class="img-fluid rounded shadow">

        </div>

        <div class="col-lg-7">

            <h2>

                ${sach.TenSach}

            </h2>

            <hr>

            <h4 class="text-danger">

                ${dinhDangGia(sach.GiaBan)}

            </h4>

            <table class="table mt-4">

                <tr>

                    <th width="180">

                        Tác giả

                    </th>

                    <td>

                        ${tacGia.TenTG}

                    </td>

                </tr>

                <tr>

                    <th>

                        Danh mục

                    </th>

                    <td>

                        ${danhMuc.TenDM}

                    </td>

                </tr>

                <tr>

                    <th>

                        Nhà xuất bản

                    </th>

                    <td>

                        ${sach.NhaXB}

                    </td>

                </tr>

                <tr>

                    <th>

                        Năm xuất bản

                    </th>

                    <td>

                        ${sach.NamXB}

                    </td>

                </tr>

                <tr>

                    <th>

                        Số lượng

                    </th>

                    <td>

                        ${sach.SoLuong}

                    </td>

                </tr>

            </table>

            <h5>

                Mô tả

            </h5>

            <p>

                ${sach.MoTa}

            </p>

            <div class="mt-4">

                <button
                    class="btn btn-success me-2"
                    onclick="themVaoGio(${sach.MaSach})">

                    <i class="bi bi-cart-plus"></i>

                    Thêm vào giỏ hàng

                </button>

                <a href="san-pham.html"
                   class="btn btn-secondary">

                    Quay lại

                </a>

            </div>

        </div>

    `;

}
// ======================================
// Khởi tạo trang
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    hienThiChiTiet();

});
// --- KHỞI TẠO DỮ LIỆU ĐỒNG BỘ GIỎ HÀNG ---
let cart = JSON.parse(localStorage.getItem('tvu_cart')) || [];

// --- 1. CHỨC NĂNG THÊM SẢN PHẨM VÀO GIỎ (Add to Cart) ---
function addToCart(title, price) {
    // Tìm xem sách đã có trong giỏ hàng chưa
    let existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title: title,
            price: price,
            quantity: 1
        });
    }

    // Lưu vào LocalStorage để chuyển trang không bị mất dữ liệu
    localStorage.setItem('tvu_cart', JSON.stringify(cart));
    
    // Cập nhật giao diện ngay lập tức
    updateCartBadge();
    renderCartModal();
    
    // Hiển thị thông báo thêm thành công đẹp mắt
    alert(`Đã thêm "${title}" vào giỏ hàng thành công!`);
}

// --- 2. CHỨC NĂNG CẬP NHẬT SỐ LƯỢNG SẢN PHẨM TRÊN MENU ---
function updateCartBadge() {
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    let badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = totalCount;
    }
}

// --- 3. CHỨC NĂNG HIỂN THỊ CHI TIẾT GIỎ HÀNG (Render Cart Modal) ---
function renderCartModal() {
    let listContainer = document.getElementById('cart-items-list');
    let totalPriceContainer = document.getElementById('cart-total-price');
    
    if (!listContainer || !totalPriceContainer) return;

    if (cart.length === 0) {
        listContainer.innerHTML = `
            <div class="text-center py-4">
                <i class="fa fa-shopping-basket text-muted fs-1 mb-3"></i>
                <p class="text-muted">Giỏ hàng của bạn đang trống rỗng.</p>
            </div>
        `;
        totalPriceContainer.innerText = "0 VNĐ";
        return;
    }

    let html = `
        <table class="table align-middle">
            <thead>
                <tr>
                    <th>Tên Sách</th>
                    <th class="text-center" style="width: 150px;">Số Lượng</th>
                    <th class="text-end">Đơn Giá</th>
                    <th class="text-end">Thành Tiền</th>
                    <th class="text-center">Xóa</th>
                </tr>
            </thead>
            <tbody>
    `;

    let totalSum = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalSum += itemTotal;
        html += `
            <tr>
                <td class="fw-bold text-dark">${item.title}</td>
                <td>
                    <div class="input-group input-group-sm justify-content-center">
                        <button class="btn btn-outline-secondary" onclick="changeQuantity(${index}, -1)">-</button>
                        <span class="input-group-text bg-white px-3 fw-bold">${item.quantity}</span>
                        <button class="btn btn-outline-secondary" onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td class="text-end text-muted">${item.price.toLocaleString()} đ</td>
                <td class="text-end fw-bold text-danger">${itemTotal.toLocaleString()} đ</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    listContainer.innerHTML = html;
    totalPriceContainer.innerText = totalSum.toLocaleString() + " VNĐ";
}

// --- 4. CHỨC NĂNG THAY ĐỔI SỐ LƯỢNG TRONG GIỎ HÀNG ---
function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('tvu_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartModal();
}

// --- 5. CHỨC NĂNG XÓA SẢN PHẨM KHỎI GIỎ ---
function removeFromCart(index) {
    if (confirm(`Bạn muốn bỏ cuốn "${cart[index].title}" khỏi giỏ hàng?`)) {
        cart.splice(index, 1);
        localStorage.setItem('tvu_cart', JSON.stringify(cart));
        updateCartBadge();
        renderCartModal();
    }
}

// --- 6. CHỨC NĂNG ĐẶT HÀNG & GIAO DỊCH (Checkout) ---
function checkoutCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sách trước khi đặt hàng.");
        return;
    }

    let customerName = prompt("Vui lòng nhập Họ tên người nhận:");
    if (!customerName) return;

    let customerPhone = prompt("Vui lòng nhập Số điện thoại liên hệ:");
    if (!customerPhone) return;

    let customerAddress = prompt("Vui lòng nhập Địa chỉ giao hàng tại Trà Vinh / Vĩnh Long:");
    if (!customerAddress) return;

    // Hiển thị thông báo hóa đơn thành công
    let totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`🎉 ĐẶT HÀNG THÀNH CÔNG! 🎉\n\n` +
          `Khách hàng: ${customerName}\n` +
          `SĐT: ${customerPhone}\n` +
          `Địa chỉ: ${customerAddress}\n` +
          `Tổng hóa đơn: ${totalSum.toLocaleString()} VNĐ\n\n` +
          `Hệ thống TVU Bookstore sẽ liên hệ bạn sớm nhất để giao sách!`);

    // Reset giỏ hàng sau khi đặt thành công
    cart = [];
    localStorage.setItem('tvu_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartModal();

    // Tự động đóng modal Bootstrap
    let modalEl = document.getElementById('cartModal');
    let modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) {
        modalInstance.hide();
    }
}

// --- 7. TỰ ĐỘNG CHẠY KHI TRANG ĐƯỢC TẢI XONG (Auto-init) ---
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    renderCartModal();
});
// ======================================
// contact.js
// Trang Liên hệ
// ======================================

const dsLienHe = [];

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const lienHe = {

            MaLH: dsLienHe.length + 1,

            HoTen: document.getElementById("hoTen").value,

            VaiTro: document.getElementById("vaiTro").value,

            LoiNhan: document.getElementById("loiNhan").value,

            NgayGui: new Date()

        };

        dsLienHe.push(lienHe);

        alert("Gửi liên hệ thành công!");

        console.log(dsLienHe);

        form.reset();

    });

});
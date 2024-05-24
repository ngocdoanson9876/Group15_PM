document.addEventListener('DOMContentLoaded', (event) => {
    const profileLink = document.getElementById('profileLink');
    const saveProfileButton = document.getElementById('saveProfileButton');

    if (profileLink) {
        profileLink.addEventListener('click', function (e) {
            e.preventDefault();

            // Giả sử đây là dữ liệu người dùng
            const userData = {
                fullName: 'Nguyễn Văn A',
                address: 'Thành phố HCM',
                phone: '0123456789',
                dob: '1990-01-01' // Ngày sinh nhật giả định
            };

            // Đặt dữ liệu vào modal
            document.getElementById('userFullName').value = userData.fullName;
            document.getElementById('userAddress').value = userData.address;
            document.getElementById('userPhone').value = userData.phone;
            document.getElementById('userDOB').value = userData.dob;

            // Mở modal
            var myModal = new bootstrap.Modal(document.getElementById('userProfileModal'), {
                keyboard: false
            });
            myModal.show();
        });
    } else {
        console.error('Element with id profileLink not found');
    }

    if (saveProfileButton) {
        saveProfileButton.addEventListener('click', function () {
            // Lấy dữ liệu từ các trường thông tin
            const updatedUserData = {
                fullName: document.getElementById('userFullName').value,
                address: document.getElementById('userAddress').value,
                phone: document.getElementById('userPhone').value,
                dob: document.getElementById('userDOB').value
            };

            console.log('Updated User Data:', updatedUserData);
            
            // Xử lý cập nhật thông tin ở đây
            // Ví dụ: Gửi dữ liệu cập nhật đến server bằng AJAX hoặc API call

            // Đóng modal sau khi lưu thông tin
            var myModalEl = document.getElementById('userProfileModal');
            var modal = bootstrap.Modal.getInstance(myModalEl);
            modal.hide();
        });
    } else {
        console.error('Element with id saveProfileButton not found');
    }
});
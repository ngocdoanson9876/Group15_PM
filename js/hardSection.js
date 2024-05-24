// Mock API data
const hardwareData = [
    {
        name: "Màn hình Samsung LS24R350FZEXXV 23.8",
        description: "Màn hình Samsung LS24R350FZEXXV 23.8 inch là một trong những màn hình với thiết kế và hiệu năng ấn tượng đến từ nhà Samsung mà bạn không nên bỏ qua. Công việc đòi hỏi xử lý nhiều dữ liệu, đồ họa, thiết kế, lập trình, trò chơi, máy chủ và quản lý hệ thống.",
        quantity: 40,
        owner: "Nhân viên"
    },
    {
        name: "Máy in (Printer)",
        description: "Thiết bị đầu ra dùng để in các tài liệu từ máy tính hoặc thiết bị di động lên giấy.  In các tài liệu văn bản, hợp đồng, báo cáo, biểu mẫu và hình ảnh.",
        quantity: 5,
        owner: "Kế toán, nhân viên"
    },
    {
        name: "Máy chiếu (Projector)",
        description: "Thiết bị hiển thị hình ảnh và video từ máy tính hoặc các nguồn khác lên màn hình lớn. Trình chiếu nội dung từ máy tính trong cuộc họp, bài giảng, thuyết trình hoặc xem phim.",
        quantity: 3,
        owner: "Quản lí"
    },

    {
        name: "Máy chủ (Server)",
        description: "Thiết bị mạnh mẽ được thiết kế để lưu trữ, xử lý và chia sẻ dữ liệu trên mạng nội bộ hoặc internet. Lưu trữ và quản lý dữ liệu, cung cấp dịch vụ và ứng dụng trên mạng",
        quantity: 1,
        owner: "Quản lí"
    },
    {
        name: "Máy chấm công (Time Clock)",
        description:"Thiết bị sử dụng để ghi nhận giờ làm việc của nhân viên, thường dùng hệ thống quét vân tay, thẻ từ hoặc mã PIN.",
        quantity: 1,
        owner: "Bộ phận nhân sự hoặc quản lý "
    },
    {
        name: "Thiết bị giám sát (Monitoring Device)",
        description:"Thiết bị được sử dụng để giám sát và theo dõi các thông số hoạt động của hệ thống, mạng hoặc các thiết bị khác.",
        quantity: 1,
        owner: "Nhóm quản lý hệ thống hoặc nhóm mạng"
    },
  ];

// Render hardware data table
function renderTable() {
    const tableBody = document.getElementById("table-body");
  
    tableBody.innerHTML = "";
  
    // Duyệt qua mảng dữ liệu và tạo các hàng và cột trong table
    for (let i = 0; i < hardwareData.length; i++) {
      const device = hardwareData[i];
  
      // Tạo một hàng mới
      const row = document.createElement("tr");
  
      // Tạo các cột và đặt nội dung
      const nameColumn = document.createElement("td");
      nameColumn.textContent = device.name;
  
      const descriptionColumn = document.createElement("td");
      descriptionColumn.textContent = device.description;
  
      const quantityColumn = document.createElement("td");
      quantityColumn.textContent = device.quantity;
  
      const ownerColumn = document.createElement("td");
      ownerColumn.textContent = device.owner;
  
      // Tạo cột cho biểu tượng thêm hàng
      const addColumn = document.createElement("td");
      const addButton = document.createElement("button");
      addButton.classList.add("btn", "btn-success", "btn-sm");
      addButton.innerHTML = '<i class="fas fa-plus"></i>';
      addColumn.appendChild(addButton);
  
      // Tạo cột cho biểu tượng xóa hàng
      const deleteColumn = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      
     deleteButton.addEventListener("click", function() {
        alert("Xóa thành công");
        setTimeout(function() {
        window.location.href = "../delete_hard_section.html";
        }, 1000);
    });
   
      deleteColumn.appendChild(deleteButton);
  
      // Thêm các cột vào hàng
      row.appendChild(nameColumn);
      row.appendChild(descriptionColumn);
      row.appendChild(quantityColumn);
      row.appendChild(ownerColumn);
      row.appendChild(addColumn);
      row.appendChild(deleteColumn);
  
      // Thêm hàng vào bảng
      tableBody.appendChild(row);
    }
  }
  
renderTable();

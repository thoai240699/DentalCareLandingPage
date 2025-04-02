// Load the header and footer
// Sử dụng localStorage để lưu trữ nội dung đã tải, giúp giảm tải yêu cầu mạng nếu nội dung không thay đổi.
function load(selector, path) {
  const cached = localStorage.getItem(path); // Lấy nội dung đã lưu trong localStorage với khóa là đường dẫn tệp.
  if (cached) {
    document.querySelector(selector).innerHTML = cached; // Nếu có nội dung đã lưu, hiển thị nó trong phần tử được chỉ định.
  }
  fetch(path) // Gửi yêu cầu lấy nội dung từ tệp HTML.
    .then((res) => res.text()) // Chuyển đổi phản hồi thành văn bản.
    .then((html) => {
      if (html !== cached) {
        // Nếu nội dung mới khác với nội dung đã lưu.
        document.querySelector(selector).innerHTML = html; // Cập nhật nội dung trong phần tử được chỉ định.
        localStorage.setItem(path, html); // Lưu nội dung mới vào localStorage.
      }
    });
}

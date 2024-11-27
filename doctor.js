document.addEventListener('DOMContentLoaded', () => {
    console.log('Page is ready');
    // Add event listeners for buttons or dynamic functionalities here
});

function scrollTable(direction) {
    const wrapper = document.getElementById('tableWrapper');
    const scrollAmount = 200; // ระยะที่จะเลื่อนในแต่ละครั้ง

    if (direction === 'left') {
        wrapper.scrollLeft -= scrollAmount;
    } else {
        wrapper.scrollLeft += scrollAmount;
    }
}

// เพิ่มการตรวจสอบการแสดงปุ่มเลื่อน
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('tableWrapper');

document.addEventListener('DOMContentLoaded', (event) => {
    const externalNewsContainer = document.getElementById('externalNews');

    // Giả sử đây là dữ liệu tin tức từ một nguồn dữ liệu
    const externalNewsData = [
        { title: 'Tin tức 1', content: 'Nội dung của tin tức 1.' },
        { title: 'Tin tức 2', content: 'Nội dung của tin tức 2.' },
        { title: 'Tin tức 3', content: 'Nội dung của tin tức 3.' }
    ];

    // Tạo HTML cho từng tin tức
    externalNewsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.setAttribute('onmouseover', `hoverEffect(this, '#2e59d9', true)`);
        newsItem.setAttribute('onmouseout', `hoverEffect(this, '#4e73df', false)`);

        const newsTitle = document.createElement('div');
        newsTitle.className = 'news-title';
        newsTitle.style.color = '#4e73df';
        newsTitle.textContent = news.title;

        const newsContent = document.createElement('div');
        newsContent.className = 'news-content';
        newsContent.textContent = news.content;

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsContent);
        externalNewsContainer.appendChild(newsItem);
    });
});

function hoverEffect(element, borderColor, isHovering) {
    if (isHovering) {
        element.style.transform = 'scale(1.1)';
        element.style.borderColor = borderColor;
    } else {
        element.style.transform = 'scale(1.0)';
        element.style.borderColor = borderColor;
    }
}
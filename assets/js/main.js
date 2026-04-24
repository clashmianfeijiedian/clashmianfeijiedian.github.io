// 主要 JavaScript 功能

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 复制链接功能
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('链接已复制到剪贴板！');
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

// 搜索功能
function searchArticles(query) {
    if (!query) return;
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加淡入动画
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        setTimeout(() => {
            el.style.transition = 'all 0.3s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});

// 导航栏悬停效果
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#f97316';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '#374151';
    });
});

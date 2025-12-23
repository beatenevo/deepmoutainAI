// 岗位分类筛选功能
const categoryBtns = document.querySelectorAll('.category-btn');
const jobItems = document.querySelectorAll('.job-item');

// 初始化分类筛选
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除所有按钮的active类
        categoryBtns.forEach(b => b.classList.remove('active'));
        // 添加当前按钮的active类
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        
        // 筛选岗位
        jobItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                // 添加动画效果
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 50);
            } else {
                item.style.display = 'none';
            }
        });
    });
});


// 页面加载动画
window.addEventListener('DOMContentLoaded', () => {
    // 岗位列表渐入动画
    jobItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    console.log('Join us page loaded');
});

// 平滑滚动到页面顶部
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// 添加滚动监听，显示/隐藏回到顶部按钮
window.addEventListener('scroll', () => {
    // 可以在这里添加回到顶部按钮的显示/隐藏逻辑
});

// 导航链接高亮
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // 关闭移动端菜单
        navMenu.classList.remove('active');
    });
});
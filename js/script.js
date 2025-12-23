// 移动端菜单交互
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.menu-icon');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // 切换菜单图标动画
        const icon = mobileMenuBtn.querySelector('.menu-icon');
        icon.classList.toggle('active');
    });
}

// 滚动监听效果
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // 关闭移动端菜单
            navMenu.classList.remove('active');
            
            // 高亮当前导航项
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// 滚动监听 - 导航高亮
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
});

// 初始化 - 设置导航为激活状态
document.addEventListener('DOMContentLoaded', () => {
    // 检查当前页面是否为首页
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    } else if (window.location.pathname.endsWith('joinus.html')) {
        // 加入我们页面
        const joinusLink = document.querySelector('a[href="joinus.html"]');
        if (joinusLink) {
            joinusLink.classList.add('active');
        }
    }
});

// 数字动画效果
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(number => {
        const finalNumber = parseInt(number.textContent);
        const duration = 2000;
        const step = finalNumber / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= finalNumber) {
                number.textContent = finalNumber + '+';
                clearInterval(timer);
            } else {
                number.textContent = Math.floor(current) + '+';
            }
        }, 16);
    });
}

// 监听元素进入视口
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // 如果是统计数字区域，启动数字动画
            if (entry.target.classList.contains('about-stats')) {
                animateNumbers();
            }
        }
    });
}, observerOptions);

// 观察需要动画的元素
const animateElements = document.querySelectorAll('.about-content, .services-grid, .tech-stack, .cases-grid, .contact-content');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// AI动画效果增强
const aiAnimation = document.querySelector('.ai-animation');
if (aiAnimation) {
    // 创建随机点动画
    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = Math.random() * 8 + 2 + 'px';
        dot.style.height = dot.style.width;
        dot.style.backgroundColor = 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.3) + ')';
        dot.style.borderRadius = '50%';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animation = 'float ' + (Math.random() * 6 + 4) + 's ease-in-out infinite';
        dot.style.animationDelay = Math.random() * 2 + 's';
        aiAnimation.appendChild(dot);
    }
}

// 添加浮动动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
        }
        25% {
            transform: translateY(-10px) translateX(10px);
        }
        50% {
            transform: translateY(-20px) translateX(0px);
        }
        75% {
            transform: translateY(-10px) translateX(-10px);
        }
    }
`;
document.head.appendChild(style);

// 表单提交处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 这里可以添加表单提交逻辑
        alert('感谢您的留言，我们会尽快与您联系！');
        contactForm.reset();
    });
}

// 初始化页面
window.addEventListener('DOMContentLoaded', () => {
    console.log('深山智谷官网加载完成');
});
// Shared Internationalization System for World Heritage App
// This file provides language switching functionality for all pages

const sharedTranslations = {
    en: {
        // Common UI elements
        'search': 'Search',
        'search-placeholder': 'Search heritage sites...',
        'search-world-heritage': 'Search world heritage sites...',
        'discovery': 'Discovery',
        'favorites': 'Favorites',
        'profile': 'Profile',
        'cultural': 'Cultural',
        'natural': 'Natural',
        'mixed': 'Mixed',
        'sort': 'Sort',
        'filter': 'Filter',
        'all-types': 'All Types',
        
        // Discovery page
        'world-heritage': 'World Heritage',
        'discover-unesco': 'Discover UNESCO Sites',
        'explore-by-type': 'Explore by Type',
        'nearby-sites': 'Nearby Sites',
        'sites-count-natural': '218 sites',
        'sites-count-cultural': '897 sites',
        'sites-count-mixed': '39 sites',
        
        // Site details
        'machu-picchu': 'Machu Picchu',
        'peru-1983': 'Peru • Inscribed 1983',
        'machu-picchu-desc': 'An extraordinary example of landscape architecture that harmonizes with nature.',
        'cusco-region': 'Cusco Region',
        
        'great-wall': 'Great Wall of China',
        'china-1987': 'China • Inscribed 1987',
        'great-wall-desc': 'A magnificent architectural feat spanning thousands of kilometers.',
        'multiple-provinces': 'Multiple Provinces',
        
        'great-barrier-reef': 'Great Barrier Reef',
        'australia-1981': 'Australia • Natural • 1981',
        
        'great-mosque': 'Great Mosque of Djenné',
        'mali-1988': 'Mali • Cultural • 1988',
        
        'great-zimbabwe': 'Great Zimbabwe',
        'zimbabwe-1986': 'Zimbabwe • Cultural • 1986',
        
        // Search results
        'found-results': 'Found 12 results for "Great"',
        
        // Categories
        'browse-categories': 'Browse Categories',
        'cultural-heritage': 'Cultural Heritage',
        'cultural-desc': 'Human-made wonders and traditions',
        'natural-heritage': 'Natural Heritage', 
        'natural-desc': 'Outstanding natural phenomena',
        'mixed-heritage': 'Mixed Heritage',
        'mixed-desc': 'Cultural and natural significance',
        
        // Profile
        'my-profile': 'My Profile',
        'sites-visited': 'Sites Visited',
        'achievements': 'Achievements',
        'settings': 'Settings',
        'language-region': 'Language & Region',
        'notifications': 'Notifications',
        'privacy': 'Privacy',
        'about': 'About',
        
        // Site detail page
        'overview': 'Overview',
        'location': 'Location',
        'history': 'History',
        'visit-info': 'Visit Info',
        'add-to-favorites': 'Add to Favorites',
        'share': 'Share',
        'plan-visit': 'Plan Visit',
        
        // Favorites
        'my-favorites': 'My Favorites',
        'visited': 'Visited',
        'want-to-visit': 'Want to Visit',
        'clear-all': 'Clear All',
        'total-saved': 'Total Saved',
        
        // Additional content
        'peru-cultural': 'Peru • Cultural Heritage',
        'cultural-sites': 'Cultural Sites',
        'cultural-sites-count': '897 heritage sites worldwide'
    },
    zh: {
        // Common UI elements
        'search': '搜索',
        'search-placeholder': '搜索遗产地...',
        'search-world-heritage': '搜索世界遗产地...',
        'discovery': '发现',
        'favorites': '收藏',
        'profile': '资料',
        'cultural': '文化',
        'natural': '自然',
        'mixed': '混合',
        'sort': '排序',
        'filter': '筛选',
        'all-types': '所有类型',
        
        // Discovery page
        'world-heritage': '世界遗产',
        'discover-unesco': '发现联合国教科文组织遗产地',
        'explore-by-type': '按类型探索',
        'nearby-sites': '附近的目的地',
        'sites-count-natural': '218个遗产地',
        'sites-count-cultural': '897个遗产地',
        'sites-count-mixed': '39个遗产地',
        
        // Site details
        'machu-picchu': '马丘比丘',
        'peru-1983': '秘鲁 • 1983年列入',
        'machu-picchu-desc': '与自然和谐统一的非凡景观建筑典范。',
        'cusco-region': '库斯科地区',
        
        'great-wall': '中国长城',
        'china-1987': '中国 • 1987年列入',
        'great-wall-desc': '跨越数千公里的宏伟建筑奇迹。',
        'multiple-provinces': '多个省份',
        
        'great-barrier-reef': '大堡礁',
        'australia-1981': '澳大利亚 • 自然 • 1981年',
        
        'great-mosque': '杰内大清真寺',
        'mali-1988': '马里 • 文化 • 1988年',
        
        'great-zimbabwe': '大津巴布韦',
        'zimbabwe-1986': '津巴布韦 • 文化 • 1986年',
        
        // Search results
        'found-results': '为"Great"找到12个结果',
        
        // Categories
        'browse-categories': '浏览分类',
        'cultural-heritage': '文化遗产',
        'cultural-desc': '人类创造的奇迹和传统',
        'natural-heritage': '自然遗产',
        'natural-desc': '杰出的自然现象',
        'mixed-heritage': '混合遗产',
        'mixed-desc': '文化和自然意义',
        
        // Profile
        'my-profile': '我的资料',
        'sites-visited': '已访问遗产地',
        'achievements': '成就',
        'settings': '设置',
        'language-region': '语言和地区',
        'notifications': '通知',
        'privacy': '隐私',
        'about': '关于',
        
        // Site detail page
        'overview': '概述',
        'location': '位置',
        'history': '历史',
        'visit-info': '参观信息',
        'add-to-favorites': '添加到收藏',
        'share': '分享',
        'plan-visit': '计划参观',
        
        // Favorites
        'my-favorites': '我的收藏',
        'visited': '已访问',
        'want-to-visit': '想要访问',
        'clear-all': '清除全部',
        'total-saved': '总收藏',
        
        // Additional content
        'peru-cultural': '秘鲁 • 文化遗产',
        'cultural-sites': '文化遗产地',
        'cultural-sites-count': '全球897个遗产地'
    }
};

// Shared internationalization functionality
class SharedI18n {
    constructor() {
        this.currentLang = localStorage.getItem('preferred-language') || 'en';
        this.init();
    }
    
    init() {
        // Listen for language change messages from parent window
        window.addEventListener('message', (event) => {
            if (event.data.type === 'LANGUAGE_CHANGE') {
                this.currentLang = event.data.language;
                this.updateLanguage();
            }
        });
        
        // Initial language update
        this.updateLanguage();
    }
    
    updateLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (sharedTranslations[this.currentLang] && sharedTranslations[this.currentLang][key]) {
                if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
                    element.placeholder = sharedTranslations[this.currentLang][key];
                } else {
                    element.textContent = sharedTranslations[this.currentLang][key];
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
    }
    
    getText(key) {
        return sharedTranslations[this.currentLang] && sharedTranslations[this.currentLang][key] 
            ? sharedTranslations[this.currentLang][key] 
            : key;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.sharedI18n = new SharedI18n();
}); 
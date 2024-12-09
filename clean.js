const fs = require('fs');
const path = require('path');

// 目标项目路径
const targetDir = '/Users/koi/Desktop/cs50/final/CS50-Final';

// 定义需要排除的文件夹
const excludedDirs = ['node_modules', '.next', 'dist', 'build']; // 可根据项目情况添加更多文件夹

// 删除包含 dark 逻辑的内容
function cleanDarkLogic(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');


    // 删除 `if` 条件中包含 `dark` 的代码块
    content = content.replace(/if\s*\(.*dark.*\)\s*{[^}]*}/g, '');

    // 删除 `` 相关逻辑
    content = content.replace(/theme\s*===\s*['"]dark['"]/g, '');

    // 写回文件
    fs.writeFileSync(filePath, content, 'utf8');
}

// 遍历目录，排除不必要的文件夹
function traverseDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const isExcluded = excludedDirs.some(excluded => fullPath.includes(excluded));
        if (isExcluded) {
            console.log(`Skipping: ${fullPath}`);
            return; // 跳过排除的目录
        }
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDirectory(fullPath); // 递归子目录
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
            cleanDarkLogic(fullPath);
            console.log(`Processed: ${fullPath}`);
        }
    });
}

// 执行清理
traverseDirectory(targetDir);
console.log('Koi! Done!');

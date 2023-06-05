#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

time=$(date "+%Y-%m-%d %H:%M:%S") 

git init
git add -A
git commit -m "GitHub Action 自动部署：$time"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# # 如果发布到 https://<USERNAME>.github.io   -f 强制推送
git push -f git@github.com:muyaCode/WZNotes.git master:gh-pages

# 退出到本项目根目录
cd -
# 删除 打包成的dist文件目录
rm -rf docs/.vitepress/dist

# echo "仓库地址：https://github.com/muyaCode/WZNotes"
# echo "文档地址：https://muyacode.github.io/WZNotes/"

# 格式化输出带颜色配置：https://www.shuzhiduo.com/A/D854N3mVzE/
echo -e "仓库地址：\033[44;37m https://github.com/muyaCode/WZNotes \033[0m"
echo -e "文档地址：\033[47;30m https://muyacode.github.io/WZNotes/ \033[0m"


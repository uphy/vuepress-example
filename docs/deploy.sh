#!/bin/bash

cd "$(dirname $0)"/docs
vuepress build
cd .vuepress/dist
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:uphy/vuepress-example.git master:gh-pages

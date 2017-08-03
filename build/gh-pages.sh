#!/usr/bin/env bash
npm run demo:prepublish
cd gh-pages
git init
git add -A
git commit -m 'update gh-pages'
git push -f git@github.com:vue-multiple/tag.git master:gh-pages
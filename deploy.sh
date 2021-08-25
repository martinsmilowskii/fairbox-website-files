#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:martinsmilowskii/fairbox-website.git master:main

cd -yes
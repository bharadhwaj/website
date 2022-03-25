#!/usr/bin/env bash

echo "Post build script starting execution..."

CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" != "master" ] && [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Error: You must be in master/main branch to run this. Currently in $CURRENT_BRANCH"
  exit 1
fi


echo bharadhwajcn.com > ./build/CNAME
touch ./build/.nojekyll
mkdir -p "./build/.well-known"
echo "
This is a Brave Rewards publisher verification file.

Domain: bharadhwajcn.com
Token: 713297f2fdd722507a25dec2ed2e852ec21807d8e817c5cdd93d0ec938c288dd
" > ./build/.well-known/brave-rewards-verification.txt

echo "Post build script executed successfully."
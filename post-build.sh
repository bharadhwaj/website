#!/usr/bin/env bash

echo "Post build script starting execution..."

echo \"bharadhwajcn.com\" > ./build/CNAME
touch ./build/.nojekyll
mkdir -p "./build/.well-known"
echo "
This is a Brave Rewards publisher verification file.

Domain: bharadhwajcn.com
Token: 713297f2fdd722507a25dec2ed2e852ec21807d8e817c5cdd93d0ec938c288dd
" > ./build/.well-known/brave-rewards-verification.txt

echo "Post build script executed successfully."
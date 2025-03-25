#!/usr/bin/env sh
echo "Date: $(date)" > dist/build-info.txt
echo "Node version: $(node --version)" >> dist/build-info.txt
echo "Git commit: $(git rev-parse HEAD)" >> dist/build-info.txt
echo "Git branch: $(git branch | grep '*' | awk '{print $2}')" >> dist/build-info.txt
echo "Server: $(uname -a)" >> dist/build-info.txt

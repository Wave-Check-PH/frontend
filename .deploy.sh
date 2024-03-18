#!/bin/bash

# Check if a commit message is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <commit_message>"
    exit 1
fi

# Run npm build and check its exit status
npm run build
build_status=$?

# Check if build was successful
if [ $build_status -ne 0 ]; then
    echo "Error: Build unsuccessful. Exiting."
    exit $build_status
fi
echo "Build successful. Proceeding."
# Add all changes to the git staging area
git add --all

# Commit changes with the provided message
git commit -m "$1"

# Push changes to the remote repository
git push
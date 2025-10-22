#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
  echo "❗ Please provide a commit message."
  echo "Usage: ./git-auto.sh \"Your commit message here\""
  exit 1
fi

# Add all changes
git add .

# Commit with provided message
git commit -m "$1"

# Push to main branch
git push origin main

# The empty string is necessary for MacOS
find . -type f -exec sed -i '' 's|[<>]||g' {} +

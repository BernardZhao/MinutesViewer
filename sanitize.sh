LC_CTYPE=C
LANG=C
# The empty string is necessary for MacOS
find minutes/ -type f -exec sed -i '' 's|[<>]||g' {} +

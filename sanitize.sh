# The empty string is necessary for MacOS
LC_CTYPE=C
LANG=C
find minutes/ -type f -exec sed -i '' 's|[<>]||g' {} +

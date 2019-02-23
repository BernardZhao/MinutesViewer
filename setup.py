#!/usr/bin/env python
import sys
import os
import glob
import re

owd = os.getcwd()

# Makes the minute files into .md
os.chdir("bod")
minutes_reg = "[0-9]+[-|.][0-9]+[-|.][0-9]+"
ext_reg = "[.][a-z]+"
for roots, dirs, files in os.walk(os.curdir):
    for file in files:
        sub_path = os.path.relpath(roots, os.curdir)
        file_path = os.path.join(sub_path, file)
        new_path = file_path;
        if ('#' in file):
            new_path = new_path.replace('#', "")

        if (".virtual" in file):
            new_path = new_path.replace(".virtual", "-virtual")

        if(".txt" in file):
            new_path = new_path.replace(".txt", ".md")
        elif("-bod" in file or "-gm" in file or "-virtual" in new_path):
            new_path = new_path + ".md"
        elif (re.search(minutes_reg, file) != None and (re.search(ext_reg, file) == None)):
            new_path = new_path + ".md"

        os.rename(file_path, new_path)

print("Successfully made markdowns")
os.chdir(owd)

# Sanitizes the minute files to remove HTML stuff
os.system("LC_CTYPE=C\nLANG=C\nfind bod/ -type f -exec sed -i '' 's|[<>]||g' {} +")
print("Successfully Sanitized")
os.chdir(owd)

# Adds a title metadata in order to allow for searching and clean display in sidebar
os.chdir("bod")
for root, dirs, files in os.walk(os.curdir):
    for file in files:
        if (file.endswith(".md")):
            title = ''
            curr_lines = ''
            should_add = True
            with open(os.path.join(root, file), 'r') as f:
                curr_lines = f.readlines()
                if (str(curr_lines[0]) == "---\n"):
                    should_add = False
                else:
                    new_title = file.replace(".md", "") + " minutes"
                    title = f"---\ntitle: {new_title}\n---\n"
            if(should_add):
                result = title
                for line in curr_lines:
                    result += line
                with open(os.path.join(root, file), 'w') as f:
                    f.writelines(result)

print("Successfully added titles")
        

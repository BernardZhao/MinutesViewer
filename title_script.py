#!/usr/bin/env python
import sys
import os
import glob

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

        

import os

file_path = "C:/Users/Mehmet Mete Gemici/OneDrive/Desktop/Karabat_Website/index.html"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Check if the line contains the specific links we want to remove
    if 'href="#air"' in line and 'data-i18n="nav.air"' in line:
        continue
    if 'href="#land"' in line and 'data-i18n="nav.land"' in line:
        continue
    if 'href="#water"' in line and 'data-i18n="nav.water"' in line:
        continue
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Navigation links removed.")

content = open('src/components/sections/hero.tsx', 'r', encoding='utf-8').read()
old = 'Full-Stack Web (React \ufffd Python) + IoT (Arduino) + 3D (Blender)'
new = 'Full-Stack Web (React + Python) | IoT (Arduino) | 3D (Blender)'
if old in content:
    content = content.replace(old, new)
    open('src/components/sections/hero.tsx', 'w', encoding='utf-8').write(content)
    print('DONE!')
else:
    print('NOT FOUND')

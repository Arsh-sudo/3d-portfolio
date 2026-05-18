content = open('src/components/header/config.ts', 'r', encoding='utf-8').read()
old = "title: 'Certificates',\n    href: '/certificates',\n    thumbnail: '/assets/nav-link-previews/blog.png',"
new = "title: 'Certificates',\n    href: '/certificates',\n    thumbnail: '/assets/nav-link-previews/certificates.png',"
if old in content:
    content = content.replace(old, new)
    open('src/components/header/config.ts', 'w', encoding='utf-8').write(content)
    print('DONE!')
else:
    print('NOT FOUND')

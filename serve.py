#!/usr/bin/env python3
"""启动本地知识库服务器，默认8080端口。"""
import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIR = os.path.dirname(os.path.abspath(__file__))

os.chdir(DIR)

handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({
    '.html': 'text/html; charset=utf-8',
})

print(f"知识库服务器已启动：http://localhost:{PORT}")
print(f"根目录：{DIR}")
print("按 Ctrl+C 停止。")

http.server.HTTPServer(("", PORT), handler).serve_forever()

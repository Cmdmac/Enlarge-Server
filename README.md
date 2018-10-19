# Enlarge-Server
Enlarge-Server是布署二维码登录的后台服务项目

该项目是一个基于nodejs的Express4.x项目,主要功能是提供二维码登录功能,以及布署浏览器操作手机的前端项目.
项目使用了qr-image来生成二维码,socket.io来实现扫码成功后与前端的通信

## 使用指引
git clone本项目后,在项目目录直接执行npm install后sudo npm start(端口在80需要权限)即可启动服务
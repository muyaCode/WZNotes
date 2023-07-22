# 利用海外服务器搭建自己私人VPN

[TIKTOK手机下载、还原、安装、发视频、全套 - 知乎 (zhihu.com)](https://www.zhihu.com/zvideo/1608605386294091776)

第一步：你需要有一台国外的服务器，或者香港服务器也可以；云服务平台有很多，如果只是单纯的搭建VPN，可以买便宜的服务器。

海外抖音tiktok服务器哪家好（tiktok VPS服务器搭建商家推荐）：<https://www.cnbanwagong.com/tiktok221212.html>

## 第二步：服务器配置，安装ShadowsocksServer

1、执行如下命令

```bash
wget--no-check-certificate-Oshadowsocks-all.shhttps://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
```

2、上面的命令执行结束后，执行下面的命令

```bash
chmod+x shadowsocks-all.sh
```

3、上面的命令执行结束后，执行下面的命令

```bash
./shadowsocks-all.sh2>&1|teeshadowsocks-all.log
```

4、执行上述命令会有相关输入提示操作；根据需要选择。不明白的话就直接选1或者直接默认回车；

之后会提示你输入密码和端口，对应设置即可，或者直接使用默认的；

由于iPhone端的wingy目前只支持到cfb，所以加密方式选择aes-256-cfb也就是选择7；

全部执行完成之后就会出现如下信息：

```bash
StartingShadowsockssuccess

Congratulations,Shadowsocks-Pythonserverinstallcompleted!

YourServerIP:你的IP

YourServerPort:在第四步提示设置的端口号

YourPassword:在第四步提示设置的密码

YourEncryptionMethod:aes-256-cfb

YourQRCode:(ForShadowsocksWindows,OSX,AndroidandiOSclients)

ss://YWVzLTI1Ni1jZmI6emh1aTA4MTA0MTJaaaccuMjmmLjU1LjE5MTo4tdVg4

YourQRCodehasbeensavedasaPNGfilepath:

/root/shadowsocks_python_qr.png

Welcometovisit:https://teddysun.com/486.html

Enjoyit!
```

5、看到以上信息就说明安装完成了，然后根据不同的终端设备进行设置就可以了

## 第三步、使用Shadowsocks终端体验VPN

1、下载对应客户端

Windows：<https://github.com/shadowsocks/shadowsocks-windows/releases>

Mac：<https://github.com/yangfeicheung/Shadowsocks-X/releases>

Android：<https://github.com/shadowsocks/shadowsocks-android/releases>

iPhone：AppStore上下载`ShadowLink`，这个要用 国外appid 才可以下载哦。国内的搜不到的，因为`shadowrocket`是收费的

苹果手机的设置参考：[国际版TikTok在国内怎么玩？苹果端如何使用VPN?-桂哥网络 (guigege.cn)](https://www.guigege.cn/news/13260.html)

2、配置Shadowsocks

windows

下载之后运行就会看到右下角有小飞机，然后右键编辑服务器；对应的服务器地址、端口、密码、加密方式就是第二步中4步骤中看到的信息，对应填写确定即可；

![国外服务器.jpg](https://www.hengxun.cn/Uploads/2020-11-20/5fb7618787525.jpg)

见证奇迹的时刻到了浏览器打开：<https://www.google.com/>

![VPN.png](https://www.hengxun.cn/Uploads/2020-11-20/5fb761aadc803.png)

android手机

安装好上面对应的客户端如下图左边的填写对应的服务ip、端口、密码、加密方式然后保存；然后点击中间图下面的小飞机，看到手机上面有个钥匙的就是成功了，然后你就可以用浏览器访问Google嘞

![用国外服务器搭建来自己的VPN详细教程.jpg](https://www.hengxun.cn/Uploads/2020-11-20/5fb762d9aa58d.jpg)

![用国外服务器搭建VPN.jpg](https://www.hengxun.cn/Uploads/2020-11-20/5fb76207d5d09.jpg)

![用国外服务器搭建来自己的VPN详细过程.jpg](https://www.hengxun.cn/Uploads/2020-11-20/5fb76214a013e.jpg)

iphone手机

安装好上面对应的客户端如左边图点击添加线路，然后是中间图填写对应的服务ip、端口、密码、加密方式然后保存，之后点击左图的开关按钮；看到手机上出现vpn的图标就成功了，可以随心所欲看视频了。

![国外服务器--恒讯科技.jpg](https://www.hengxun.cn/Uploads/2020-11-20/5fb761cd13b89.jpg)

以上就是全部步骤了，赶快去制作属于你们自己的梯子吧！（声明：教程仅供参考；请勿用于任何违法行为；）

## 节点v2ray搭建vps玩tiktok国际版抖音

自建v2ray的前提是自己要拥有一台vps，需要vps的可以联系蜗牛vps客服。下面我们以centos7系统为例给大家讲解，利用vps搭建节点玩tiktok国际版抖音。

1.下载并执行下面脚本

```bash
[root@v2ray-5 ~]# bash <(curl -s -L https://git.io/v2ray.sh)
```

输入#后面的内容并回车，开始执行脚本，如下图：

![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第1张](http://www.vps90.com/zb_users/upload/2021/12/20211216173839163964751954680.jpg)![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第2张](http://www.vps90.com/zb_users/upload/2021/12/20211216173839163964751925146.jpg)

2.选择传输协议

脚本支持下图列出的协议：

![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第3张](http://www.vps90.com/zb_users/upload/2021/12/20211216173840163964752086860.jpg)

这里选择默认的TCP协议，如果你的VPS比较慢可以选择mKCP协议，但是容易被运行商屏蔽掉；如果你有自己的域名，而且想更稳妥一点可以选择WebSocket + TLS。

如果你也是默认协议，直接回车就行。

3.输入端口

输入一个端口，然后回车：

![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第4张](http://www.vps90.com/zb_users/upload/2021/12/20211216173840163964752094003.jpg)

4.选择是否开启广告拦截

这里输入“N”并回车，表示不开启；如果你要开启则输入“Y”，可能会影响性能。

5.选择是否配置Shadowsocks

这里我选择配置，即，我输入“Y”，你如果不用shadowsocks，直接回车选择默认不配置即可，下面是我配置shadowsocks的信息截图：

![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第5张](http://www.vps90.com/zb_users/upload/2021/12/20211216173841163964752122126.jpg)

6.确认信息

看一眼信息是否正确，正确的话，回车开始执行安装过程，然后等待安装完成：

![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第6张](http://www.vps90.com/zb_users/upload/2021/12/20211216173841163964752111711.jpg)

7.查看配置信息并使用客户端连接

等待安装完成后会出现如下信息：

![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第7张](http://www.vps90.com/zb_users/upload/2021/12/20211216173842163964752270663.jpg)

如果你是用v2ray的话，输入v2ray url命令，获取vmess链接：

![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第8张](http://www.vps90.com/zb_users/upload/2021/12/20211216173842163964752217564.jpg)

将vmess到最后的内容复制一下，打开类似与v2rayN的客户端（我的是Windows平台，使用的是v2rayN），然后依次选择服务器->从粘贴板导入，也可以在托盘右键执行导入，然后选择开启PAC，并自动配置PAC，如果你有自己的PAC文件，也可以选择不自动配置，然后就可以使用了。

![搭建vps玩tiktok国际版抖音，搭建TikTok节点v2ray图文教程  第9张](http://www.vps90.com/zb_users/upload/2021/12/20211216173843163964752343892.jpg)

**四、安装bbr或锐速**:

执行v2ray bbr，自行选择bbr或锐速，回车执行安装即可。

**五、快速管理 V2Ray**:

v2ray info：查看 V2Ray 配置信息

v2ray config：修改 V2Ray 配置

v2ray link：生成 V2Ray 配置文件链接

v2ray infolink：生成 V2Ray 配置信息链接

v2ray qr：生成 V2Ray 配置二维码链接

v2ray ss：修改 Shadowsocks 配置

v2ray ssinfo：查看 Shadowsocks 配置信息

v2ray ssqr：生成 Shadowsocks 配置二维码链接

v2ray status：查看 V2Ray 运行状态

v2ray start：启动 V2Ray

v2ray stop：停止 V2Ray

v2ray restart重启 V2Ray

v2ray log：查看 V2Ray 运行日志

v2ray update：更新 V2Ray

v2ray update.sh：更新 V2Ray 管理脚本

v2ray uninstall：卸载 V2Ray

**用美国家庭住宅IP专线做美国抖音TikTok，我们天 下 数 据的优势：**

1、100%住宅IP（美国真实家庭宽带），完美解决0播放。

2、100%跨境专线（不走公网，不会被墙，速率保证）丝滑顺畅。

3、带宽速率，传输都走内网传输，高峰期依旧保证传输速率，保证直播流畅度。

4、海外养号除了设备，最重要的是网络环境，虽然很多的加速器或者V.P.N都可以看tiktok，但是多为几十人共用的IP，极易被识别为代理，被封号。

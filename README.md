# [React-Manage](https://github.com/Sjj1024/react-manage/)

标准后台管理系统解决方案<br/>
动态菜单配置，权限精确到按钮<br/>

## what's this?

react+redux 后台管理系统脚手架<br/>
react+redux+vite+antd+react-router

<ul>
 <li>非服务端渲染</li>
 <li>仿antd-pro外观，但没有使用dva和roadhog</li>
</ul>

## 构建 Start

```javascript
pnpm install       // 安装依赖模块
pnpm run dev       // 运行开发环境
pnpm run build     // 正式打包，生成最终代码
pnpm run preview   // 本地运行正式打包后的最终代码
pnpm run prettier  // 一键格式化代码
```

## 最近更新

-   接入了 vite 打包，比自己配 webpack 要好多了

## 前后端分离，权限是怎么控制的

在数据库里存储着权限的信息，可以在页面里各种编辑。<br/>
但最终实现，仍然是在页面里写死的，前端写在页面里的权限信息跟数据库里的信息一一对应就实现了权限控制。<br/>
更好的方法除非是使用 SSR 服务端渲染，直接把权限注入到页面中，就像传统的 JSP 那样。

## 内置通用功能

用户管理 增删改查 分配角色<br/>
  角色管理 增删改查 分配菜单和权限<br/>
  权限管理 增删改查<br/>
  菜单管理 增删改查<br/>

关系：权限 依附于 菜单 依附于 角色 依附于 用户

## TODO

1.简易版本：权限本地控制， 2.路由页面可以配置隐藏，不展示在菜单栏和权限控制页面， 3.路由配置支持树形结构，易于配置和管理， 4.菜单选中后支持再次点击， 5.用户登录后的下拉菜单居中对齐。 6.中心内容支持超出后滚动。 7.添加一个说明文档：讲解文件内容说明，用到的技术栈和路由配置说明， 8.支持打包后禁止控制台输出 log 的配置 9.支持通过按钮权限来控制页面路由权限的管理，有了这个按钮权限，默认就有了某个页面的权限，例如查看权限有了，就有了可以跳转到详情页面的权限配置

## 预览地址 Demo

https://isluo.com/work/admin/ <br/>
账号：admin / user<br/>
密码：123456 / 123456  
![](https://jsd.cdn.zzko.cn/gh/1024huijia/FileHub@main/root/zetyun/1704370797374image.png)
![](https://jsd.cdn.zzko.cn/gh/1024huijia/FileHub@main/root/zetyun/1704370858319image.png)
![](https://jsd.cdn.zzko.cn/gh/1024huijia/FileHub@main/root/zetyun/1704370896499image.png)
![](https://jsd.cdn.zzko.cn/gh/1024huijia/FileHub@main/root/zetyun/1704370915264image.png)

## 参考

react-admin: https://github.com/javaLuo/react-admin <br/>

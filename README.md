# Grok API 代理

一个简单的脚本，为了解决地区受限制无法使用grok的api调用，用作 x.ai API 的代理。此脚本处理用户请求并将所有其他请求转发到 x.ai API。

## 功能

* 代理请求到 `https://api.x.ai`

## 部署到 Cloudflare Workers

Fork 此仓库    

点击下面的按键，创建一个新的 `Worker`，选择复刻的仓库，一键部署就可以调用了

[![](./src/img/cloudflared.svg)](https://github.com/settings/tokens)

> [!TIP]
> 在 Cloudflare Workers 中创建一个新的 Worker 选择导入储存库
选择复刻的仓库，一键部署就可以调用了

## 部署到 Deno

Fork 此仓库 


[![](./src/img/deno.svg)](https://github.com/settings/tokens)

> [!TIP]
> 点击下面的按键，创建一个新的 `Worker`，选择复刻的仓库，选择主文件为`src/worker.js`一键部署就行了

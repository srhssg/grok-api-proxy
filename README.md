# Grok API 代理

一个简单的脚本，为了解决地区受限制无法使用grok的api调用，用作 x.ai API 的代理。此脚本处理用户请求并将所有其他请求转发到 x.ai API。

## 功能

* 代理请求到 `https://api.x.ai`

## 部署到 Cloudflare Workers

1. Fork 此仓库
2. 在 Cloudflare Workers 中创建一个新的 Worker 选择导入储存库
3. 选择复刻的仓库，一键部署就可以调用了

##  使用 Deno

1. Fork 此仓库
2. 在deno主页中点击 New Project
3. 选择复刻的仓库，选择主文件为src/worker.js一键部署就行了
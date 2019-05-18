# manifest 说明

## dispaly属性
用于设置应用的显示类型。

属性值：
- fullsreen: 应用将占满整个屏幕。
- standalone：浏览器相关UI（如：导航栏、工具栏）将会被隐藏。
- minimal-ui：应用显示形式与standalone类似，不同浏览器效果不同。
- browser: 与在浏览器中打开一样。

## start_url 
用于设置应用打开时首屏显示页面的url。

1. 可以添加参数，用于来源统计
2. 如果为空，则默认使用用户打开的当前页为首屏
module.exports = {
    bath:"/",
    title:"blog for L",
    description:"在前端的路上疯狂踩坑",
    themeConfig:{
        nav:[
            { text: "主页", link: "/" },
            { text:"前端", link:"/web/"},
            { text:"其他", link:"/other/markdown.html"},
        ],
        sidebar: {
            "/web/":[
                ["", "目录"],
                {   
                    title:"react",
                    name:"react",
                    collabsable: false,
                    children:[
                       [ "R1", "react中点击空白隐藏弹出层"],
                    ]
                },
                {   
                    title:"vue",
                    name:"vue",
                }
            ],
            '/other/':[
                ['markdown', 'markdown基本语法一览'],
                ['ss', 'ssss']
            ]
        },
    },
}
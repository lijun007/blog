module.exports = {
    bath:"/",
    title:"blog for L",
    description:"在前端的路上疯狂踩坑",
    themeConfig:{
        nav:[
            { text: "主页", link: "/" },
            { text:"前端", link:"/web/"
                // items:[
                //     { text: "react", link:"/web/react/"},
                //     { text: "vue", link:"/web/vue/"}, 
                // ]
            },
        ],
        sidebar: {
            "/web/":[
                ["", "目录"],
                {   
                    title:"react",
                    name:"react",
                    collabsable: false,
                    children:[
                       [ "react/", "react"],
                       ["vue/", "vue"]
                    ]
                }
            ]
        },
    },
}
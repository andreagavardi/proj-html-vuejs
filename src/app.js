

 const app = new Vue ({ 
    el: '#app',
    data:{

        navbarLinks:[
            {
                linkName:'home',
                link:'#',
                selected:true
            },
             {
                linkName:'about',
                link:'#',
                selected:false
            },
             {
                linkName:'services',
                link:'#',
                selected:false
            },
             {
                linkName:'work',
                link:'#',
                selected:false
            },
             {
                linkName:'articles',
                link:'#'
            },
             {
                linkName:'get quote',
                link:'#',
                selected:false
            }
        ],

        statistics:[
            {
                icon:"fas",
                iconType:"fa-suitcase",
                title:"3534",
                description:"planning applications"
            },
             {
                icon:"far",
                iconType:"fa-building",
                title:"896",
                description:"completed projects"
            },
             {
                icon:"fas",
                iconType:"fa-users",
                title:"172",
                description:"trained professionals"
            },
             {
                icon:"fas",
                iconType:"fa-globe",
                title:"19",
                description:"internationals offices"
            }
        ]

     },
    methods:{ } 
}) 

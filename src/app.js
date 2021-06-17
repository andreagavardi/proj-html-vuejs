

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
        ],
        recentWorks:[
            {
                imgSrc:"project2-featured-15013609-800x800.jpg",
                title:"florida heath facility",
                category:"commercial"
            },
            {
                imgSrc:"project1-featured-294276386-800x800.jpg",
                title:"maine modernity",
                category:"residential"
            },
            {
                imgSrc:"project3-featured-189023420-800x800.jpg",
                title:"exlusive urban living",
                category:"commercial"
            }
        ],
        homeOwners:[
            {
                src:"",
                ownerName:"",
                comment:""
            },
            {
                src:"",
                ownerName:"",
                comment:""
            }
        ],
        latestNews:[
            {
                img:"",
                title:"Redeveloping Florida's remore southern coast",
                date:"december 7th, 2015",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum asperiores, id, maxime earum nisi minima commodi quidem blanditiis rerum facere nihil magnam reprehenderit! Magni voluptates culpa aut deserunt atque.",
                category:"Architecture, buildings, construcion, news"
            },
            {
                img:"",
                title:"",
                date:"",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum asperiores, id, maxime earum nisi minima commodi quidem blanditiis rerum facere nihil magnam reprehenderit! Magni voluptates culpa aut deserunt atque.",
                category:""
            },
            {
                img:"",
                title:"",
                date:"",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum asperiores, id, maxime earum nisi minima commodi quidem blanditiis rerum facere nihil magnam reprehenderit! Magni voluptates culpa aut deserunt atque.",
                category:""
            }
        ]

     },
    methods:{ } 
}) 

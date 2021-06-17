

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
                img:"134132600-800x482.jpg",
                title:"Redeveloping Florida's remore southern coast",
                date:"december 7th, 2015",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum asperiores, id, maxime earum nisi minima commodi quidem blanditiis rerum facere nihil magnam reprehenderit! Magni voluptates culpa aut deserunt atque.",
                category:"Architecture, buildings, construcion, news"
            },
            {
                img:"92486644-800x482.jpg",
                title:"how we manage large construction project",
                date:"december 7th, 2015",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum asperiores, id, maxime earum nisi minima commodi quidem blanditiis rerum facere nihil magnam reprehenderit! Magni voluptates culpa aut deserunt atque.",
                category:"Architecture, buildings, construcion, news"
            },
            {
                img:"332773904-800x482.jpg",
                title:"future proofing a modern home",
                date:"december 7th, 2015",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum asperiores, id, maxime earum nisi minima commodi quidem blanditiis rerum facere nihil magnam reprehenderit! Magni voluptates culpa aut deserunt atque.",
                category:"Architecture, buildings, construcion, news"
            }
        ],
        partnersLogo:[
            "home-logo1-219096700-320x202.png",
            "home-logo2-219096700-320x202.png",
            "home-logo9-219096700-320x202.png",
            "home-logo10-219096700-320x202.png",
            "home-logo11-219096700-320x202.png"
        ],
        contacts:[
            {
                title:"corporate location",
                iconType:"fas",
                icon:"fa-globe",
                details:"1600 Amphitheatre Parkway London WC1 1BA"
            },
            {   title:"residential location",
                iconType:"fas",
                icon:"fa-home",
                details:"9521 Broadsberry Avenue Paddington RC7 9ZA"
            },
            {
                title:"",
                iconType:"fas",
                icon:"fa-phone",
                details:"1.800.458.556 / 1.800.532.2112"
            },
            {
                title:"",
                iconType:"fas",
                icon:"fa-phone",
                details:"info@your-domain.com"
            },
            {
                title:"",
                iconType:"far",
                icon:"fa-clock",
                details:"Monday – Friday: 9:00 AM – 6:00 PM"
            },
            {
                title:"",
                iconType:"far",
                icon:"fa-clock",
                details:"Saturday – Sunday: 9:00 AM – 12:00 PM"
            }
        ]

     },
    methods:{ } 
}) 

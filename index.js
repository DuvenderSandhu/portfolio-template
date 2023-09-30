let ts= gsap.timeline();
ts.from('.nav',{
    opacity:0,
    y:-10,
    stagger: 0.2,
})

ts.from('.img img',{
    scale:1.5,
    opacity:0
})
ts.from('.mainheading',{
    opacity:0,
    x:50,
    stagger: 0.2,
})
ts.from('.subheading',{
    opacity:0,
    x:50,
    stagger: 0.2,
})
ts.from('.btn',{
    opacity:0,
    x:50,
    stagger: 0.2,
})

ts.from('.aboutimg img',{
    opacity:0,
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger: ".element",
        markers:true,
        scrub:true,

    },
})
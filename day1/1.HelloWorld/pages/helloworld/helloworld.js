Page({
  data:{
    message:"HelloWorld-第一个小程序开发2",
    flag:false, // false 显示
    items:[
      { name: "商品1" },
      { name: "商品2" },
      { name: "商品3" },
      { name: "商品4" },
      { name: "商品5" },
      { name: "商品6" }
    ],
    condition:Math.floor(Math.random()*3+1),
    items2:{
      name:"小伟",
      phone:"123456789",
      address:"china"
    },
    username:"马氏" 
  }
});
var posts=["2025/10/20/hexogu管理页面/","2025/10/20/hexo主题安装/","2025/10/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
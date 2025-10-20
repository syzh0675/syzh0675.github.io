var posts=["2025/10/20/hexo安知鱼主题设置/","2025/10/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2025/10/20/安知鱼主题音乐馆默认歌单修改/","2025/10/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
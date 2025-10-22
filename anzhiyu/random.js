var posts=["2025/10/21/一声佛号一声心/","2025/10/21/群晖搭建电影网站/","2025/10/20/安知鱼主题音乐馆默认歌单修改/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
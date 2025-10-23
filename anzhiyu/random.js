var posts=["2025/10/23/群晖DSM利用webstation部署h5ai-1761201936096/","2025/10/21/一声佛号一声心/","2025/10/21/群晖搭建电影网站/","2025/10/20/安知鱼主题音乐馆默认歌单修改/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
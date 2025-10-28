var posts=["2025/10/26/2CELLOS-官方视频合集/","2025/10/26/本地视频播放测试/","2025/10/23/无需公网IP！CloudFlare-Tunnel内网穿透实现内网访问/","2025/10/23/群晖DSM利用webstation部署h5ai-1761201936096/","2025/10/21/一声佛号一声心/","2025/10/20/安知鱼主题音乐馆默认歌单修改/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
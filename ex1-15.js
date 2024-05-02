  var user2 = copyObject(user);
  user2.urls = copyObject(user.urls);
  
  user.urls.portfolio = 'http://portfolio.com';
  console.log(user.urls.portfolio === user2.urls.portfolio);
  
  user2.urls.blog = '';
  console.log(user.urls.blog === user2.urls.blog);
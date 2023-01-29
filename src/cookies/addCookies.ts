const addCookies =(data: string , expMinutes: number)=> { 
    // token will ecpire after 1 minute
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1*60*1000;
    now.setTime(expireTime);
    document.cookie = `cookie=${data};expires=`+now.toUTCString()+';path=/;secure';
  }
export default addCookies
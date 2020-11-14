export function TimeRun(el,currentTime){
      let timer = setInterval(() => {
        //   callback(Math.ceil(el.currentTime))
        currentTime = el.currentTime
          if(el.currentTime >= el.duration){
            clearInterval(timer)
        }
      },1000)
      return
}
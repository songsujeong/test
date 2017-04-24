
  var bit = function(value) {

    var el = []

    if(value.startsWith('<')) {
      el[0] = document.createElement(value.substr(1, value.length - 2))
    } else {
    var list = document.querySelectorAll(value)
    for(var e of list){
      el.push(e)
    }
  }

  el.append = function(children) {

    for(var e of el){
      for(var child of children){
        e.appendChild(child)
      }
    } return el
  }

  el.html = function(h){
    for(var e of el){
      e.innerHTML = h
    }  return el
  }

  el.click = function(c){
    for(var e of el){
      e.addEventListener('click', c)
    }return el
  }

    return el
  }

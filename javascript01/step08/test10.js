var $ = bit;
function bit(value) {

  var el = []

  if(value instanceof HTMLElement) {
    el[0] = value

  } else if(value.startsWith('<')) { //새 태그 생성으로 간주
    el[0] = document.createElement(value.substr(1, value.length - 2))

  } else {
    var list = document.querySelectorAll(value)
    for (var e of list) {
      el.push(e)
    }
  }
///////////////////////////////////////////////////////////////////////////////
  el.append = function(children) {
    if (!(children instanceof Array)) {
      console.error('배열이 아닙니다');
      return;
    }
    for (var e of this) {
      for(var child of children) {
        e.appendChild(child)
      }
    }

    return this
  }

///////////////////////////////////////////////////////////////////////////////
  el.html = function(content) {
    for (var e of this) {
      e.innerHTML = content
    }

    return this
  }

///////////////////////////////////////////////////////////////////////////////
  el.click = function(listener) {
    for(var e of this) {
      e.addEventListener('click', listener)
    }
    return this
  }

///////////////////////////////////////////////////////////////////////////////
  el.attr = function(name, value) {
    if(arguments.length < 2) {
      return this[0].getAttribute(name)
    } else{
      for(var e of this) {
        e.setAttribute(name, value)
      }
      return this
    }
  }

///////////////////////////////////////////////////////////////////////////////
el.appendTo = function(parents) {
  for(var p of parents) {
    for(var e of this) {
      p.appendChild(e)
    }
  }
  return this
}


//5/////////////////////////////////////////////////////////////////////////////

bit.ajax = function(url, settings) {
  if(settings == undefined) {                  //url만 넘어오면 새로운 객체를 만든다
    settings = {
      method: 'GET',
      dataType: 'text'
    }
  } else {
    if(settings.method == undefined) settings.method = 'GET'    //넘어온다하더라도 method에 값이없을경우
    if(settings.dataType == undefined) settings.dataType = 'text'
  }
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (xhr.readyState < 4)
      return

    var rv;
    if(settings.dataType == 'json'){
      rv = JSON.parse(xhr.responseText)
    } else {
      rv = xhr.responseText
    }

    if (settings.success) { //settings.success != undefined
      settings.success(rv)
      }
  }
  xhr.open(settings.method, url, true)
  if(settings.method == 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    var queryString = ""
    if (settings.data) {
      for (var propName in settings.data){
        if(queryString.length > 0) {
          queryString += "&"
        }
        queryString += propName + '=' + settings.data[propName]
      }
    }

    xhr.send(queryString)
  } else {
    xhr.send()
  }
}

bit.getJSON = function(url, success) {
  bit.ajax(url, {
    dataType: 'json',
    success: success
  })
}

bit.post = function(url, data, success, dataType) {
  bit.ajax(url, {
    method: 'POST',
    dataType: dataType,
    data: data,
    success: success
  })
}

//6/////////////////////////////////////////////////////////////////////////////
el.css = function (name, value) {
  for(var e of this) {
    e.style[name] = value
  }
  return this
}

//7/////////////////////////////////////////////////////////////////////////////
  el.text = function(content) {
    for (var e of this) {
      e.textContent = content
    }
    return this
  }

//8/////////////////////////////////////////////////////////////////////////////
  el.val = function(value) {
    if (arguments.length == 0) {
      return this[0].value
    }

    for (var e of this) {
      e.value = value
    }
    return this
  }


//9/////////////////////////////////////////////////////////////////////////////
  el.prop = function(name, value) {
    if(arguments.length < 2) {
      return this[0][name]
    } else {
      for(var e of this) {
        e[name] = value
      }
      return this
    }
  }

  return el
}

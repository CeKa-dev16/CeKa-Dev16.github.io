function calcInterval(numbers, req) {
  if (numbers == undefined || req == undefined) {return ''} else {
    let res = [];
    req.forEach(req => {
      let count = 0;
      for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] >= req[0]) && (numbers[i] < req[1])) {
          count++;
        }
      }
      res.push(count);
    });
    return res;
  }
}

function calcPos(position, numbers_length, parts) {
  if (position == 0 || numbers_length == 0 || parts == 0) {return ''} else {
    if (numbers_length % 2 == 0) {
      return (position * numbers_length) / parts;
    } else {
      return (position * (numbers_length + 1)) / parts;
    }
  }
}

function prom(numbers) {
  if (numbers == 0) {return ''} else {
    let sum = 0;
    numbers.forEach(number => {
      sum += number;
    })
    let res = sum / numbers.length;
    return res;
  }
}

function mediana(sorted) {
  if (sorted == 0) {return ''} else {
    let mid = sorted.length / 2;
    if (sorted.length%2 == 0) {
      let n1 = sorted[mid];
      let n2 = sorted[mid-1];
      return (n1+n2)/2;
    } else {
      return sorted[Math.trunc(mid)];
    }
  }
}

function moda(sorted) {
  if (sorted == 0) {return ''} else {
    let quantity = 0;
    let possibleN = [];
    for (let index = 1; index <= sorted.length; index++) {
      quantity++;
      if (sorted[index] !== sorted[index-1]) {
        possibleN.push([sorted[index-1], quantity]);
        quantity = 0;
      }
    }
    let ns = [[null, null]];
    possibleN.forEach(possN => {
      if (possN[1] == ns[0][1]) {
        ns.push(possN);
      } else if (possN[1] > ns[0][1]) {
        ns = [possN];
      }
    })
    let res = ''
    for (let index = 0; index < ns.length; index++) {
      if (index == ns.length - 1) {
        res += ns[index][0]
      } else if (index == ns.length - 2) {
        res += ns[index][0] + ' y '
      } else {
        res += ns[index][0] + ', '
      }
    }
    if (res.length == 1) {
      res += ' repetido ';
    } else {
      res += ' repetidos ';
    }
    if (ns[0][1] == 1) {
      res += '1 vez'
    } else {
      res += ns[0][1] + ' veces'
    }
    return res;
  }
}
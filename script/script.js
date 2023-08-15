let cars = [
  {name: "Malibu", price: 31000},
  {name: "Nexia", price: 12000},
  {name: "Onix", price: 21000},
  {name: "Tahoe", price: 100000},
  {name: "Cobalt", price: 13000},
  {name: "Tracker", price: 26000},
  {name: "Kia k5", price: 43000},
  {name: "Santafe", price: 50000},
  {name: "Elantra", price: 35000},
  {name: "Tico",price: 2500}
]

let hello = confirm("Здравствуйте! Желаете приобрести машину?")

if (hello == true) {
  let from = +prompt("Введите начальный предел суммы")
  let up = +prompt("Введите конечный предел суммы") 
  
  let priceList = cars.filter(item => item.price >= from && item.price <= up)
  
  let choiceList = prompt(priceList.map(item => item.name + " " + item.price + "$").join("\n"))
  
    if(choice = cars.find(item => item.name == choiceList)) {
      let pay = +prompt(`Оплатите пожалуйста покупку! ${choice.price} $`)
        if(pay == choice.price) {
          alert(`Поздравляем с покупкой ${choice.name}`)
        } else if (pay > choice.price) {
          alert(`Поздравляем с покупкой ${choice.name}, вот Ваша сдача: ${pay - choice.price} $`)
        } else if (pay < choice.price) {
          alert(`Пожалуйста доплатите ${choice.price - pay} $`)
        } else ("Забыли деньги дома?")
    } else {
      alert("Ошибка!")
    }
} else {
  alert("Приходите ещё!")
}


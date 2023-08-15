let popStars = ["usmonova", "morgenshtern", "baskov", "eldzhey", "50cent", "eminem", "oxy", ]

let smallName = popStars

let list = confirm(`Список имён: \n${popStars.map(item => item + " ").join("\n")}\nНайти из них короткое?`)

if (list == true) {
  popStars.forEach(star => {
    if (star.length < smallName.length) {
      smallName = star
    }
  })

  alert(smallName)
} else {
  alert("Bye!")
}
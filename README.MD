This is the basic example of how mongoose and Typescript use.
How to organize the code with folder structure system.

db.practice.find({gender: {$ne: "Female"}}, {gender:1})
db.practice.find({gender: {$ne: "Female"}}).project({gender:1})

db.practice.find({age: {$gte : 50}}, {age:1}).sort({ age:-1 }) age diye short hobe boro theke jodi minus 1 di tahole ar jodi sudhu 1 di tahole choto theke boro sort hobe

db.practice.find({age: {$gte : 18, $lte: 23}}, {age:1, name:1}).sort({ age:1 }) for  দুটো কন্ডিশন এর জন্য আমরা কমা  বেবহার করবো । 

db.practice.find({gender:"Female", age: {$in: [18, 23]}}).project({age:1, name:1, gender:1}).sort({ age:1 }) ekhane gender ar age diye find kora hoyeche and age er khetre sudhu amader hoy 18 nahoy 23 bochorer meyei lagbe

db.practice.find({gender:"Female", age: {$nin: [18, 23]}}).project({age:1, name:1, gender:1}).sort({ age:1 })  $nin means not integrated array er moddhe jegulo diyechi segulo bade amra output pabo.

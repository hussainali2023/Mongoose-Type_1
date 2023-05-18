This is the basic example of how mongoose and Typescript use.
How to organize the code with folder structure system.

db.practice.find({gender: {$ne: "Female"}}, {gender:1})
db.practice.find({gender: {$ne: "Female"}}).project({gender:1})

db.practice.find({age: {$gte : 50}}, {age:1}).sort({ age:-1 }) age diye short hobe boro theke jodi minus 1 di tahole ar jodi sudhu 1 di tahole choto theke boro sort hobe

db.practice.find({age: {$gte : 18, $lte: 23}}, {age:1, name:1}).sort({ age:1 }) for  দুটো কন্ডিশন এর জন্য আমরা কমা  বেবহার করবো । 

db.practice.find({gender:"Female", age: {$in: [18, 23]}}).project({age:1, name:1, gender:1}).sort({ age:1 }) ekhane gender ar age diye find kora hoyeche and age er khetre sudhu amader hoy 18 nahoy 23 bochorer meyei lagbe

db.practice.find({gender:"Female", age: {$nin: [18, 23]}}).project({age:1, name:1, gender:1}).sort({ age:1 })  $nin means not integrated array er moddhe jegulo diyechi segulo bade amra output pabo.


db.practice.find({
    gender: "Female",
    age: {$nin: [20, 30, 33, 46, 23]},
    interests: {$in:["Gaming"]}
}).project({
    gender:1,
    age:1,
    interests:1
})
  
   db.practice.find({
    $and: [
        {gender:"Female"},
        {age: {$lte: 23}},
        {"skills.name": "JAVASCRIPT"}
        ]
}).project({
    gender:1,
    age:1, 
    name:1,
    "skills.name":1
    
})

db.practice.find({skills: {$size: 1}}).project({skills:1})
$exists
$type
$
db.practice.find({"interests.1": "Travelling"}).project({interests:1}) ekhane "interest.1" holo position

db.practice.find({interests: {$all:  ["Reading", "Travelling", "Cooking"]}}).project({interests:1})

   db.practice.find({
    skills: { $elemMatch: {name:"JAVA", level: "Intermidiate"}}
}).project({skills:1})

db.practice.updateOne({
    {kak update korte chao},
    {ki update korte chao}
})

for update only one data in database 
db.practice.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000070")},
    {$set: {country:'bangladesh'}}
    )
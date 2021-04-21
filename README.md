<div align="center">
    <h1>🌟Laboratory Maintenance🌟</h1>
</div>

<div align="center">

The ***Laboratory Maintenance*** is a RESTFul API made with Node Js, Express, MongoDB and clean architecture for registering laboratories, exams and associate a laboratory in exam.
</div>

## :rocket: Technology

<div align="center">

```sh
Node Version: v14.16.0
Express: v4.17.1
MongoDB Atlas
```

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![express](	https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)![mongo](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

## :boom: How to run

- ### **Pre requisites**

    - Make sure you have Node version 14 in your computer.

## :hammer: Application

### Clone the repository:

```sh
# HTTPS
  $ https://github.com/NiltonSousa/laboratory-maintenance.git
```

```sh
# SSH
  $ git@github.com:NiltonSousa/laboratory-maintenance.git
```

### Install the dependencies

```sh
  $ npm install
```

### Run the application

```sh
  $ node .\src\controller\server.js
```

## :boom: Routes Laboratory
```sh
GET
  http://localhost:3001/laboratory
POST
  http://localhost:3001/laboratory
Body Example
  [
    {
    "name": "Delboni Morumbi 1",
    "address":"Morumbi",
    "status":"ativo"
    },
    {
    "name": "Delboni Morumbi 2",
    "address":"Morumbi",
    "status":"ativo"
    },
    {
    "name": "Delboni Morumbi 3",
    "address":"Morumbi",
    "status":"ativo"
    }
]
UPDATE
    http://localhost:3001/laboratory
Body Example
     {
      "_id": "6080256abb43292a347810f6",
      "name": "Lavoizier",
      "address": "Lapa de baixo",
      "status": "active"
      }
DELETE
    http://localhost:3001/laboratory
Body Example
    [
      {
        "laboratoryId":"608085411d90701a18bf1d5b"
      },
      {
        "laboratoryId":"608085411d90701a18bf1d5c"
      },
      {
        "laboratoryId":"608085411d90701a18bf1d5d"
      }
    ]
  
```

## :boom: Routes Exams
```sh
GET
  http://localhost:3001/exam
POST
  http://localhost:3001/exam
Body Example
    {
    "name":"Raio XXXX",
    "type":"analise",
    "status":"ativo"
    }
UPDATE
    http://localhost:3001/exam
Body Example
        {
        "_id": "60804c5e34364236f00154d4",
        "name": "Raio X",
        "type": "Analise",
        "status": "ativo"
        }
DELETE
    http://localhost:3001/exam/:id  
```

## :boom: Routes Associations
```sh
GET
  http://localhost:3001/Association?name=Hemograma
POST
  http://localhost:3001/association
Body Example
    {
      "examId":"60804c5e34364236f00154d4",
      "laboratoryId":"6080376fb0b076361837d1ce"
    }
DELETE
    http://localhost:3001/association/:id 
```

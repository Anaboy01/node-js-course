const userDB = {
      users: require('../models/registration.json'),
      setUser: function (data){
            this.users = data
      },
};

const fsPromise = require('fs/promises')
const path = require('path')
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
      const {firstname, lastname, sot, gender, dob, phoneNo, academicQualification, email, codingXp} = req.body;
      if(!firstname || !lastname || !email || !sot) return res.status(400).json({message: "first name, last name, email and State of origin required required"});
      const duplicate =  userDB.users.find(person => person.email === email );
      if (duplicate === true) return res.status(409).json({message: "username already exist"})// conflict message 

      try{

            const newUser = {firstname: firstname , lastname: lastname, stateOfOrigin: sot,gender: gender, dateOfBirth: dob, phoneNo: phoneNo, academicQualification: academicQualification, email: email, codingExperience: codingXp  }
            // const users = [...userDB.users, newUser]


            userDB.setUser([...userDB.users, newUser])
            // console.log(newUser)
            fsPromise.writeFile(path.join(__dirname,"..", 'models', 'registration.json'), JSON.stringify(userDB.users));

            console.log(newUser)
            res.status(201).json({message: `User ${newUser.firstname} ${newUser.lastname} has registered succesfully `})
      }catch(err){
            res.status(500).json({message: err.message})
      }
}

module.exports = registerUser


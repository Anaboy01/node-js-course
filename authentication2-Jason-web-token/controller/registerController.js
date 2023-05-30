const userDB = {
      users: require('../models/users.json'),
      setUser: function (data){
            this.users = data
      },
};

const fsPromise = require('fs/promises')
const path = require('path')
const bcrypt = require('bcrypt')

const handleUser = async (req, res) => {
      const {user, pwd} = req.body;
      if(!user || !pwd) return res.status(400).json({message: "username and password required"});
      const duplicate =  userDB.users.find(person => person.username === user );
      if (duplicate === true) return res.status(409).json({message: "username already exist"})// conflict message 

      try{
            const hashPwd = await bcrypt.hash(pwd, 10)
            const newUser = {username: user, password: hashPwd}
            // const users = [...userDB.users, newUser]


            userDB.setUser([...userDB.users, newUser])
            // console.log(newUser)
            fsPromise.writeFile(path.join(__dirname,"..", 'models', 'users.json'), JSON.stringify(userDB.users));

            console.log(newUser)
            res.status(201).json({message: `User ${newUser.username} has registered succesfully `})
      }catch(err){
            res.status(500).json({message: err.message})
      }
}

module.exports = handleUser


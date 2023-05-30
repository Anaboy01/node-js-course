const userDB = {
      users: require('../models/users.json'),
      setUser: function (data){
            this.users = data
      },
};

const fsPromise = require('fs/promises')
const path = require('path')
const bcrypt = require('bcrypt')

const handleLogin = async(req, res) => {
      const {user, pwd} = req.body;
      if(!user || !pwd)
      return res.status(400).json({message: "username and password required"});
      const foundUser = userDB.users.find(person => person.username === user);
      if (!foundUser) return res.status(401).json({message: "user does not exist"})// conflict message 

      //evaluate password

      const match = await bcrypt.compare(pwd, foundUser.password)
      if (match) return res.status(200).json({message: `user ${user} has logged in successfully`});
      else return res.status(401).json({message: "username and password mismatch"})
}

module.exports = handleLogin
// import * as mongoose from "mongoose";
// import passport from 'passport';
// import Strategy as LocalStrategy from 'passport-local';

// const Users = mongoose.model('Users');

// passport.use(new LocalStrategy({
//   userName: 'user[userName]',
//   password: 'user[password]',
// }, (userName: any, password: any, done: any) => {
//   Users.findOne({ userName })
//     .then((user) => {
//       if(!user || !user.validatePassword(password)) {
//         return done(null, false, { errors: { 'userName or password': 'is invalid' } });
//       }

//       return done(null, user);
//     }).catch(done);
// }));
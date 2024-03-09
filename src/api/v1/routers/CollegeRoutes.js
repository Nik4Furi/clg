const Routers = require('express').Router();

//--------------------------- Middlewares Specific Stuff ---------------------------------X
const isAuthenticated = require('../middlewares/isAuthenticated'); //fetch user by the token
const UploadFile = require('../middlewares/UploadFile'); //Upload files
const CheckStatus = require('../middlewares/CheckStatus');

//------------------ Controllers Specific Stuff-------------------------X
const { Register,Login,CollegeProfile, UpdateCollegeProfile, GetAllClgStudentList, GetAllClgAlumniList, GetAllClgPostList, GetAllClgStudentVerifiedList, GetAllClgAlumniVerifiedList, VerifyUserByClg, DeleteUserByClg } = require('../controllers/CollegeControllers');
const isCollege = require('../middlewares/isCollege');


//----------------------- INitizlalzing auth apis's routes here -------------------X
Routers.post('/clg-register',UploadFile, Register); //Register the College ,using POST '/api/v1/user/register'
Routers.post('/clg-login', Login); //login the College ,using POST '/api/v1/user/login'
Routers.get('/clg-profile', isCollege, CollegeProfile); //get info of login College ,using GET '/api/v1/user/getUser'
Routers.put('/update-clg-profile', isCollege, UploadFile,UpdateCollegeProfile); //get info of login College ,using GET '/api/v1/user/getUser'

//--------- Getting list of related users
Routers.get('/clg-student-verified-list', isCollege, GetAllClgStudentVerifiedList); 
Routers.get('/clg-alumni-verified-list', isCollege,GetAllClgAlumniVerifiedList); 
Routers.get('/clg-student-list', isCollege, GetAllClgStudentList); 
Routers.get('/clg-alumni-list', isCollege,GetAllClgAlumniList); 

//--------- Post Specific Stuff
Routers.get('/clg-posts', isCollege,GetAllClgPostList); 


//--------------- Users Verfications the users 
Routers.put('/verify-user-by-clg/:_id',isCollege,VerifyUserByClg);
// Routers.put('/verify-user-by-clg',isCollege,VerifyUsByClg);
Routers.delete('/delete-user-by-clg/:_id',isCollege,DeleteUserByClg);

module.exports = Routers
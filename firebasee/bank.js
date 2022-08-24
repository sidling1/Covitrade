

var initializeApp = require('firebase/app');
var getDatabase = require('firebase/database');
var getAnalytics = require("firebase/analytics");


const firebaseConfig = {
    apiKey: "AIzaSyDCdFQAJcAQqHi3d_ajETfWYZjzJNX1lZc",
    authDomain: "covitrade-1ac29.firebaseapp.com",
    projectId: "covitrade-1ac29",
    storageBucket: "covitrade-1ac29.appspot.com",
    messagingSenderId: "1066677743414",
    appId: "1:1066677743414:web:f6f176b4eee00168700d97",
    measurementId: "G-D166FP41MX",
    databaseURL: "https://covitrade-1ac29-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);



var acc_num;
var country;
var net_bln;
var resources;
var star;



function create_account()
{
    //print a prompt asking for details
    //get input and save the input in a file/database/smething
}

function account_information()
{
    //prompt which account 
    //retrive from the databse and show the contents
}

function transaction()
{
    //prompt to get which is buying and from who is buying
    //prompt which resources are being bought and for how much.
}

function resource_info()
{
    //retrive data and print the data of resources only
}

function transaction_info()
{
    //print the list of transactions done
}

function population_info()
{
    //print the details of the population
    //how much are vaccinated affeced non affected and dead
}

function stage1_inc()
{
//     write some algorithm such that stage 1 people increase
//also decrease the unaffected people
}

function stage2_inc()
{
    //inc stage 2 and dec stage1
}

function dead_inc()
{
    //inc the dead people and dec the alive people
}

function timer()
{
    //maybe a timer to do everything !?!?!
}



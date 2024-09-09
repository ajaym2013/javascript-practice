let star = "3";
let startIntNumber = parseInt(star)

if (startIntNumber == 1)
{
    console.log('poor');
} else if (startIntNumber == 2) 
{
    console.log('emm, OK');
}else if (startIntNumber == 3) 
    {
        console.log('average');
    }
    else if (startIntNumber == 4) 
        {
            console.log('good');
        }
        else if (startIntNumber == 5) 
            {
                console.log('greet');
            } else 
{
    console.log('i dont know rating');
}

// login  system

// const email = 'ajay@gmail.com';

// if (email )
// {
//     console.log('please ask for password');
// }else{
//     console.log('ask for email')
// }
// other ways
// if (email == "ajay@gmail.com" )
//     {
//         console.log('please ask for password');
//     }else{
//         console.log('ask for email')
//     }

// if (email != "" )
//         {
//             console.log('please ask for password');
//         }else{
//             console.log('ask for email')
//         }


// truty valeus

// falsy values
/*
false
0  (-0 and BigInt 0n)
"" empty string
null
undefined
NaN
*/

// if user provide email and password then allow , else ask for it

const email = "";
const pswd = "";

if (email)
{
    if (pswd)
    {
        console.log('redirect to login page');
    }else {

    }console.log('please enter your password');

} else 
{
    console.log('please write email and password')
}

// Logical operations

// && -> and ;   || -> OR 

if (email && pswd)
{
    console.log('redirect to login page');
} else{
    console.log('please enter email and password')
}

// allow user to signin with google or github

const googleLoginToken = "" ;
const githubLoginToken = "" ;

if (googleLoginToken || githubLoginToken)
{
    console.log("welcome to app");
}else 
{
    console.log("please login to view your account"); 
}


let age = 19;
const youGetLicense = false;

if (age >= 18)
{
    console.log("you get the driving license");
}else {
    console.log("you dont get driving license");
}
// Ternary operator

(age >= 18) ? youGetLicense = true : youGetLicense = false
const getLicense = age >= 18 ? "true part" : "false"
"use strict";
//import './globals.ts'



const user = {
    name: "Lachlan Morris",
    address: { street: "Original Road", city: "Placeshire" },
    };

    let user1 = [1,2,3,4,5];
    //const clonedUser = structuredClone(user);
    //const clonedUser= structuredClone(user);
    const clonedUser = structuredClone(user);


    clonedUser.address.street = "New Road";
    console.log("user.address.street:", user.address.street); // > Original Road
    console.log("clonedUser.address.street:", clonedUser.address.street); // > New Road



/*
This is where the program's main loop is
we put all the pieces of the system together
in here. 
*/

import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { db } from '../prisma/db';

async function main() {
    const rl = readline.createInterface({input, output});

    while (true) {
        console.log("Hi, what would you like to do today ?");
        console.log("1. User Operations: u\n2.Shipment Operations: s");

        const answer = (await rl.question("Waiting for your response...\n")).trim();
        if (answer === 'u') {
            console.log('user operations were requested.');
        } else if (answer === 's') {
            console.log('shipment operations were requested.');
        } else {
            console.log('your request is not supported.');
        }
    }

}

main().catch(console.error);
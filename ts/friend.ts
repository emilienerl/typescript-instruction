class Friend {
    fname: string;
    pNumber: string;
    email: string;

    //constructor
    constructor(fname: string, pNumber: string, email: string) {
       this.fname = fname;
        this.pNumber = pNumber;
        this.email = email;
    }

    print(): void {
        console.log(`${this.fname}|${this.pNumber}|${this.email}`);
    }
}

let friends: Friend[] = [
    new Friend("Julie", "951-216-4486", "julesdietsch@fioptics.com"),
    new Friend("Monroe", "513-254-9374", "monroekimmel@gmail.com"),
    new Friend("Rick", "513-371-1666", "richardbeck083@gmail.com"),
    new Friend("Margaret", "513-943-0934", "margaretnerll@gmail.com"),
    new Friend("Claire", "513-207-0784", "clairemnerl@gmail.com")
   
];

for(let friend of friends) {
    friend.print();
}
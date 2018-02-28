export class User
{
    firstName :string
    LastName :string
    email :string
    password :string
    QRcode :string
    phno : number
   constructor(firstName,LastName, email, password, QRcode, phno)
   {
       this.firstName = firstName;
       this.LastName = LastName;
       this.email = email;
        this.password = password;
        this.QRcode = QRcode;
        this.phno = phno;
   }
}
export class User
{
    name :string
    email :string
    password :string
    QRcode :string
    phno : number
   constructor(name, email, password, QRcode, phno)
   {
       this.name = name;
       this.email = email;
        this.password = password;
        this.QRcode = QRcode;
        this.phno = phno;
   }
}